package com.nearaura.app.dna

/**
 * 🔱 NEARAURA MASTER VAULT (ANDROID)
 * STATUS: 1000% DNA | SOURCE OF TRUTH
 */

object DNAVault {
    const val INITIALS = "JV JM PM LA PM LH YM VM"
    const val MOTTO = "Truth is the only currency."

    object Legacy {
        const val GUARDIAN_EMAIL = "pmahdal@gmail.com"
        const val SUCCESSOR_EMAIL = "alimilamia@yahoo.fr"
        const val INACTIVITY_LIMIT_MS = 7776000000L
    }

    data class JarmilaTarget(val id: String, val targetName: String, val charity: String, val pct: Double, val colorHex: String)

    val JARMILA_FUND = listOf(
        JarmilaTarget("father", "FATHER", "Epilepsy Charity", 0.025, "#3B82F6"),
        JarmilaTarget("mother", "MOTHER", "Cancer Charity", 0.025, "#DC2626"),
        JarmilaTarget("brother", "BROTHER", "Alcoholism Recovery", 0.025, "#22C55E"),
        JarmilaTarget("children", "CHILDREN", "Colitis • Depression • Heart", 0.025, "#F97316")
    )

    data class SovereignFruit(val id: String, val label: String, val sub: String, val freq: Int, val icon: String)

    val ORCHARD = listOf(
        SovereignFruit("hendy", "Hendy", "Royal Soul", 963, "👑"),
        SovereignFruit("pineapple", "Pineapple", "Serious", 432, "🍍"),
        SovereignFruit("pear", "Pear", "Family/Taken", 528, "🍐"),
        SovereignFruit("mango", "Mango", "Queer Space", 639, "🥭"),
        SovereignFruit("banana", "Banana", "Intimacy M", 417, "🍌"),
        SovereignFruit("peach", "Peach", "Intimacy F", 417, "🍑"),
        SovereignFruit("orange", "Orange", "Friends", 396, "🍊"),
        SovereignFruit("grape", "Grapes", "Groups/Work", 741, "🍇"),
        SovereignFruit("coconut", "Coconut", "Help/DIY", 174, "🥥"),
        SovereignFruit("melon", "Melon", "Hobby/Sport", 528, "🍉"),
        SovereignFruit("cherry", "Cherry", "Meetup Now", 852, "🍒"),
        SovereignFruit("youth", "Youth", "15-18 Only", 111, "👻")
    )
}
