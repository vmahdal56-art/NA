import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// DOCTOR AURA PROTOCOL (The Brain)
// Sleduje signály z Soul Emotion Dashboardu

export const monitorSoulSignals = functions.firestore
  .document('soul_signals/{signalId}')
  .onCreate(async (snap, context) => {
    const signal = snap.data();
    const userId = signal.userId;
    const type = signal.type; // 'PAIN', 'JOY', 'MEDICAL_UPDATE'

    const db = admin.firestore();
    const userRef = db.collection('users').doc(userId);

    console.log(`Doctor Aura: Detected signal ${type} from user ${userId}`);

    // 1. Reakce na BOLEST (PAIN)
    if (type === 'PAIN') {
      // Zkontrolujeme historii posledních 24 hodin
      const recentPains = await db.collection('soul_signals')
        .where('userId', '==', userId)
        .where('type', '==', 'PAIN')
        .where('timestamp', '>', new Date(Date.now() - 24 * 60 * 60 * 1000))
        .get();

      if (recentPains.size >= 3) {
        // 🔴 TRIGGER: 3x bolest za 24h -> Aktivace záchranného protokolu
        await userRef.update({
          status: 'CRITICAL_HELP_NEEDED',
          doctorAuraActive: true,
          lastAlert: admin.firestore.FieldValue.serverTimestamp()
        });
        console.log(`Doctor Aura: ALERT! User ${userId} is in a pain loop. Intervention started.`);
      }
    }

    // 2. Reakce na RADOST (JOY)
    if (type === 'JOY') {
      // Zvýšíme Soul Score (Lví odměna)
      await userRef.update({
        soulScore: admin.firestore.FieldValue.increment(10),
        lastJoy: admin.firestore.FieldValue.serverTimestamp()
      });
      console.log(`Doctor Aura: User ${userId} is glowing. Score updated.`);
    }

    // 3. Reakce na LÉKAŘE (MEDICAL_UPDATE)
    if (type === 'MEDICAL_UPDATE') {
      // Archivace do Vaultu
      await db.collection('medical_history').add({
        userId: userId,
        note: 'User initiated medical sync via Dashboard',
        timestamp: admin.firestore.FieldValue.serverTimestamp()
      });
      console.log(`Doctor Aura: Medical update logged for ${userId}.`);
    }
    
    return null;
  });