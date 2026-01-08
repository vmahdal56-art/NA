/**
 * NEAR AURA - ROYAL BACKEND v2026
 * Integrity & Fruit Logic
 */
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// --- DNA MASTER KEYS ---
const DIRECTORS = ["JV", "JM", "PM", "LA", "PM", "LH", "YM", "VM"];

// --- 1. MORAL INTEGRITY CHECK (The Pear Protocol) ---
exports.updateUserIntent = functions.https.onCall(async (data, context) => {
    // 1. Security Check
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'Ghost Access Denied.');
    }

    const uid = context.auth.uid;
    const newFruit = data.fruit; // e.g., 'pineapple', 'pear', 'banana'
    const userRef = admin.firestore().collection('users').doc(uid);

    // 2. Fetch User Profile
    const userDoc = await userRef.get();
    if (!userDoc.exists) {
        throw new functions.https.HttpsError('not-found', 'User DNA not found.');
    }
    const userData = userDoc.data();

    // 3. THE MORAL FILTER (Anti-Adultery)
    // English Logic: If user is married, they cannot choose Romance or Intimacy.
    if (userData.relationshipStatus === 'married') {
        const forbiddenFruits = ['pineapple', 'banana', 'peach'];
        if (forbiddenFruits.includes(newFruit)) {
             // BLOCK ACTION
             console.log(`[SERPENT BLOCKED] Married user ${uid} tried to pick ${newFruit}`);
             throw new functions.https.HttpsError(
                 'permission-denied', 
                 'INTEGRITY VIOLATION: Married status prevents Romance/Intimacy fruits. Choose Pear (Family) or Orange (Friendship).'
             );
        }
    }

    // 4. ROYAL TIER CHECK (Hendy)
    if (newFruit === 'hendy') {
        if (userData.soulScore < 99) {
            throw new functions.https.HttpsError('permission-denied', 'Only Elite Souls can touch the Queen of Fruits.');
        }
    }

    // 5. Update DNA
    await userRef.update({
        currentFruit: newFruit,
        lastIntentChange: admin.firestore.FieldValue.serverTimestamp(),
        auraColor: getFruitColor(newFruit)
    });

    return { status: 'SUCCESS', message: `Fruit ${newFruit} locked.` };
});

// Helper for Colors
function getFruitColor(fruit) {
    const colors = {
        'hendy': '#9370DB',
        'pineapple': '#FFD700',
        'pear': '#2E8B57',
        'orange': '#FF8C00',
        'cherry': '#D21404',
        'banana': '#FFE135',
        'melon': '#32CD32',
        'grapes': '#6F2DA8',
        'strawberry': '#FC5A8D',
        'coconut': '#964B00'
    };
    return colors[fruit] || '#FFFFFF';
}

// --- 2. LEGACY WATCHDOG (DNA Part 10) ---
// Daily check. If 3 months inactive -> Email brother/wife.
exports.checkLegacyStatus = functions.pubsub.schedule('every 24 hours').onRun(async (context) => {
    console.log("Legacy Watchdog: Scanning for Director Vital Signs...");
    return null;
});
