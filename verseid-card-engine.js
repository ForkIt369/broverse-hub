/* ═══════════════════════════════════════════════════════════════════════
   VER$EID v3.0 - Card Engine (3-Layer Architecture)
   Following BROHUB Design System v1.0.0 Principles
   ═══════════════════════════════════════════════════════════════════════ */

console.log('🎯 VER$EID v3.0 - Card Engine Loaded (3-Layer Architecture)');

// ───────────────────────────────────────────────────────────────────────
// PATHWAY DATA (BROHUB Icon Psychology)
// ───────────────────────────────────────────────────────────────────────

const PATHWAY_DATA = {
    align: {
        icon: '⟡',
        name: 'ALIGN',
        color: '#60A5FA',
        colorClass: 'align-color'
    },
    alpha: {
        icon: 'α',
        name: 'ALPHA',
        color: '#FB923C',
        colorClass: 'alpha-color'
    },
    karma: {
        icon: '☯',
        name: 'KARMA',
        color: '#A78BFA',
        colorClass: 'karma-color'
    },
    synergy: {
        icon: '∞',
        name: 'SYNERGY',
        color: '#4ADE80',
        colorClass: 'synergy-color'
    }
};

const PATHWAY_SUBTITLES = {
    macro: {
        align: 'Identity & Verification',
        alpha: 'DeFi Trading',
        karma: 'Community Engagement',
        synergy: 'Network Interoperability'
    },
    flare: {
        align: 'Oracle Data',
        alpha: 'FTSO Delegation',
        karma: 'Community',
        synergy: 'Cross-chain'
    },
    galactica: {
        align: 'zkKYC Identity',
        alpha: 'Private DeFi',
        karma: 'Governance',
        synergy: 'Ecosystem'
    },
    brosfit: {
        align: 'Vault Strategies',
        alpha: 'Yield Optimization',
        karma: 'Social Trading',
        synergy: 'Protocol Integration'
    },
    broverse: {
        align: 'Metaverse Identity',
        alpha: 'NFT Trading',
        karma: 'Community Events',
        synergy: 'Cross-platform'
    },
    rocketx: {
        align: 'DEX Aggregation',
        alpha: 'Cross-chain Swaps',
        karma: 'Liquidity',
        synergy: 'Multi-chain'
    },
    solana: {
        align: 'Program Interaction',
        alpha: 'Trading',
        karma: 'Community',
        synergy: 'Cross-chain'
    }
};

// ───────────────────────────────────────────────────────────────────────
// TIER SYSTEM (Dynamic Calculation)
// ───────────────────────────────────────────────────────────────────────
// NOTE: Tiers are calculated dynamically based on BITS/BEATS weighted by project.
// These values are reference thresholds - actual tier is computed by backend.
// Current tier shown in UI reflects user's calculated standing, not a fixed progression.

const TIER_DATA = {
    bronze: {
        emoji: '🥉',
        name: 'Bronze',
        beats: 100,
        next: 'Silver',
        nextBeats: 500,
        perks: [
            'Access to basic pathway features',
            'Community forum participation',
            'BITS earning multiplier: 1.0x',
            'Monthly achievement recap'
        ]
    },
    silver: {
        emoji: '🥈',
        name: 'Silver',
        beats: 500,
        next: 'Gold',
        nextBeats: 1500,
        perks: [
            'Priority support access',
            'Advanced analytics dashboard',
            'BITS earning multiplier: 1.25x',
            'Exclusive community events',
            'Custom profile badge'
        ]
    },
    gold: {
        emoji: '🥇',
        name: 'Gold',
        beats: 1500,
        next: 'Diamond',
        nextBeats: 5000,
        perks: [
            'VIP support channel',
            'Early access to new features',
            'BITS earning multiplier: 1.5x',
            'Reduced transaction fees (10%)',
            'Governance voting rights',
            'Gold badge display'
        ]
    },
    diamond: {
        emoji: '💎',
        name: 'Diamond',
        beats: 5000,
        next: null,
        nextBeats: null,
        perks: [
            'Exclusive diamond lounge access',
            'Beta feature testing privileges',
            'BITS earning multiplier: 2.0x',
            'Maximum transaction fee reduction (25%)',
            'Enhanced governance weight',
            'Ambassador program eligibility',
            'Revenue share participation',
            'Diamond badge display'
        ]
    }
};

// ───────────────────────────────────────────────────────────────────────
// LAYER 1 ↔ LAYER 2: CARD FLIP
// ───────────────────────────────────────────────────────────────────────

function flipCard(cardId, toBack) {
    const wrapper = document.getElementById(`${cardId}-wrapper`);
    if (!wrapper) {
        console.error(`❌ Card wrapper not found: ${cardId}-wrapper`);
        return;
    }

    if (toBack) {
        wrapper.classList.add('flipped');
        console.log(`🔄 Flipped ${cardId} to BACK`);
    } else {
        wrapper.classList.remove('flipped');
        console.log(`🔄 Flipped ${cardId} to FRONT`);
    }
}

// ───────────────────────────────────────────────────────────────────────
// LAYER 2: UPDATE PATHWAY DETAIL
// ───────────────────────────────────────────────────────────────────────

function updatePathwayDetail(cardId, pathway) {
    const pathwayInfo = PATHWAY_DATA[pathway];
    const subtitle = PATHWAY_SUBTITLES[cardId]?.[pathway] || 'Pathway Activity';

    // Update icon
    const iconEl = document.getElementById(`${cardId}-detail-icon`);
    if (iconEl) {
        iconEl.textContent = pathwayInfo.icon;
        iconEl.className = `pathway-title-icon ${pathwayInfo.colorClass}`;
    }

    // Update name
    const nameEl = document.getElementById(`${cardId}-detail-name`);
    if (nameEl) nameEl.textContent = pathwayInfo.name;

    // Update subtitle
    const subtitleEl = document.getElementById(`${cardId}-detail-subtitle`);
    if (subtitleEl) subtitleEl.textContent = subtitle;

    // Generate tier badges (4 badges - ICON ONLY, no text)
    // Show current tier prominently, future tiers locked
    const badgesContainer = document.getElementById(`${cardId}-detail-badges`);
    if (badgesContainer) {
        badgesContainer.innerHTML = `
            <div class="detail-badge current" data-tier="bronze" data-pathway="${pathway}" data-card="${cardId}" title="Bronze Tier (Current)">🥉</div>
            <div class="detail-badge locked" data-tier="silver" data-pathway="${pathway}" data-card="${cardId}" title="Silver Tier">🥈</div>
            <div class="detail-badge locked" data-tier="gold" data-pathway="${pathway}" data-card="${cardId}" title="Gold Tier">🥇</div>
            <div class="detail-badge locked" data-tier="diamond" data-pathway="${pathway}" data-card="${cardId}" title="Diamond Tier">💎</div>
        `;
    }

    console.log(`✅ Updated ${cardId} pathway detail: ${pathway}`);
}

// ───────────────────────────────────────────────────────────────────────
// LAYER 3: TIER STORY MODAL
// ───────────────────────────────────────────────────────────────────────

function showTierStory(cardId, pathway, tierId) {
    const overlay = document.getElementById('tier-story-overlay');
    if (!overlay) {
        console.error('❌ Tier story overlay not found');
        return;
    }

    const tierInfo = TIER_DATA[tierId];
    const pathwayInfo = PATHWAY_DATA[pathway];
    const cardName = cardId.toUpperCase();

    // Update icon
    const iconEl = document.getElementById('tier-story-icon');
    if (iconEl) iconEl.textContent = tierInfo.emoji;

    // Update title
    const titleEl = document.getElementById('tier-story-title');
    if (titleEl) titleEl.textContent = `${tierInfo.name} Tier`;

    // Update pathway context
    const pathwayEl = document.getElementById('tier-story-pathway');
    if (pathwayEl) pathwayEl.textContent = `${pathwayInfo.name} • ${cardName}`;

    // Update requirement
    const requirementEl = document.getElementById('tier-story-requirement');
    if (requirementEl) {
        requirementEl.textContent = `Earn ${tierInfo.beats} BEATS through ${pathway.toUpperCase()} pathway activities`;
    }

    // Update perks list
    const perksList = document.getElementById('tier-story-perks-list');
    if (perksList) {
        perksList.innerHTML = tierInfo.perks.map(perk => `
            <div class="tier-story-perk">
                <span class="tier-story-perk-icon">✓</span>
                <span class="tier-story-perk-text">${perk}</span>
            </div>
        `).join('');
    }

    // Show overlay with fade-in
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'auto';
    requestAnimationFrame(() => {
        overlay.style.opacity = '1';
    });

    console.log(`🎭 Opened tier story: ${tierId} | ${pathway} | ${cardId}`);
}

function closeTierStory() {
    const overlay = document.getElementById('tier-story-overlay');
    if (!overlay) return;

    // Fade out
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.pointerEvents = 'none';
    }, 200); // Match CSS transition duration

    console.log('🎭 Closed tier story');
}

// ───────────────────────────────────────────────────────────────────────
// EVENT LISTENERS
// ───────────────────────────────────────────────────────────────────────

function initializeEventListeners() {
    // Pathway badge click → flip to Layer 2
    document.addEventListener('click', (e) => {
        const badge = e.target.closest('.pathway-badge');
        if (badge) {
            e.stopPropagation();
            const pathway = badge.getAttribute('data-pathway');
            const cardId = badge.getAttribute('data-card');

            if (pathway && cardId) {
                updatePathwayDetail(cardId, pathway);
                flipCard(cardId, true);
            }
        }
    });

    // Detail (tier) badge click → open Layer 3
    document.addEventListener('click', (e) => {
        const detailBadge = e.target.closest('.detail-badge');
        if (detailBadge) {
            e.stopPropagation();
            const tier = detailBadge.getAttribute('data-tier');
            const pathway = detailBadge.getAttribute('data-pathway');
            const cardId = detailBadge.getAttribute('data-card');

            if (tier && pathway && cardId) {
                showTierStory(cardId, pathway, tier);
            }
        }
    });

    // Tier story overlay click (background) → close Layer 3
    const overlay = document.getElementById('tier-story-overlay');
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeTierStory();
            }
        });
    }

    // ESC key → close Layer 3
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeTierStory();
        }
    });

    console.log('✅ Event listeners initialized');
}

// ───────────────────────────────────────────────────────────────────────
// INITIALIZATION
// ───────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 VER$EID v3.0 Dashboard Initialized');

    initializeEventListeners();

    console.log('✅ All systems operational');
    console.log('📋 3-Layer system ready:');
    console.log('   Layer 1: Card front (main view)');
    console.log('   Layer 2: Card back (pathway detail)');
    console.log('   Layer 3: Tier story overlay (modal)');
});

// Make functions globally available for onclick handlers
window.flipCard = flipCard;
window.closeTierStory = closeTierStory;
