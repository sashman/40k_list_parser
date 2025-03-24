// Folger Other Clone (2000 Points)

// Adeptus Custodes
// Solar Spearhead
// Strike Force (2000 Points)

// CHARACTERS

// Blade Champion (145 Points)
//   • 1x Vaultswords
//   • Enhancements: Adamantine Talisman

// Telemon Heavy Dreadnought (260 Points)
//   • Warlord
//   • Solar Spearhead Keywords: Character
//   • 1x Arachnus storm cannon
//   • 1x Armoured feet
//   • 1x Spiculus bolt launcher
//   • 1x Telemon caestus
//   • 1x Twin plasma projector
//   • Enhancements: Augury Uplink

// OTHER DATASHEETS

// Caladius Grav-tank (215 Points)
//   • 1x Armoured hull
//   • 1x Twin arachnus heavy blaze cannon
//   • 1x Twin lastrum bolt cannon

// Caladius Grav-tank (215 Points)
//   • 1x Armoured hull
//   • 1x Twin arachnus heavy blaze cannon
//   • 1x Twin lastrum bolt cannon

// Custodian Wardens (210 Points)
//   • 4x Custodian Warden
//      ◦ 4x Guardian spear
//      ◦ 1x Vexilla

// Prosecutors (40 Points)
//   • 1x Prosecutor Sister Superior
//      ◦ 1x Boltgun
//      ◦ 1x Close combat weapon
//   • 3x Prosecutor
//      ◦ 3x Boltgun
//      ◦ 3x Close combat weapon

// Prosecutors (40 Points)
//   • 1x Prosecutor Sister Superior
//      ◦ 1x Boltgun
//      ◦ 1x Close combat weapon
//   • 3x Prosecutor
//      ◦ 3x Boltgun
//      ◦ 3x Close combat weapon

// Prosecutors (40 Points)
//   • 1x Prosecutor Sister Superior
//      ◦ 1x Boltgun
//      ◦ 1x Close combat weapon
//   • 3x Prosecutor
//      ◦ 3x Boltgun
//      ◦ 3x Close combat weapon

// Telemon Heavy Dreadnought (225 Points)
//   • 1x Arachnus storm cannon
//   • 1x Armoured feet
//   • 1x Spiculus bolt launcher
//   • 1x Telemon caestus
//   • 1x Twin plasma projector

// Venerable Contemptor Dreadnought (170 Points)
//   • 1x Combi-bolter
//   • 1x Contemptor combat weapon
//   • 1x Multi-melta

// Venerable Contemptor Dreadnought (170 Points)
//   • 1x Combi-bolter
//   • 1x Contemptor combat weapon
//   • 1x Multi-melta

// Venerable Contemptor Dreadnought (170 Points)
//   • 1x Combi-bolter
//   • 1x Contemptor combat weapon
//   • 1x Multi-melta

// ALLIED UNITS

// Callidus Assassin (100 Points)
//   • 1x Neural shredder
//   • 1x Phase sword and poison blades

// Exported with App Version: v1.29.0 (2), Data Version: v579
// Test (1980 Points)

// Adeptus Custodes
// Lions of the Emperor
// Strike Force (2000 Points)

// CHARACTERS

// Blade Champion (120 Points)
//   • 1x Vaultswords

// Blade Champion (120 Points)
//   • 1x Vaultswords

// Shield-Captain in Allarus Terminator Armour (155 Points)
//   • Warlord
//   • 1x Balistus grenade launcher
//   • 1x Guardian spear
//   • Enhancements: Superior Creation

// Shield-Captain on Dawneagle Jetbike (160 Points)
//   • 1x Interceptor lance
//   • 1x Salvo launcher
//   • Enhancements: Admonimortis

// BATTLELINE

// Custodian Guard (215 Points)
//   • 5x Custodian Guard
//      ◦ 4x Guardian spear
//      ◦ 1x Misericordia
//      ◦ 1x Praesidium Shield
//      ◦ 1x Vexilla

// Custodian Guard (215 Points)
//   • 5x Custodian Guard
//      ◦ 4x Guardian spear
//      ◦ 1x Misericordia
//      ◦ 1x Praesidium Shield
//      ◦ 1x Vexilla

// OTHER DATASHEETS

// Allarus Custodians (195 Points)
//   • 3x Allarus Custodian
//      ◦ 3x Balistus grenade launcher
//      ◦ 3x Guardian spear

// Caladius Grav-tank (215 Points)
//   • 1x Armoured hull
//   • 1x Twin iliastus accelerator cannon
//   • 1x Twin lastrum bolt cannon

// Custodian Wardens (260 Points)
//   • 5x Custodian Warden
//      ◦ 5x Guardian spear
//      ◦ 1x Vexilla

// Prosecutors (40 Points)
//   • 1x Prosecutor Sister Superior
//      ◦ 1x Boltgun
//      ◦ 1x Close combat weapon
//   • 3x Prosecutor
//      ◦ 3x Boltgun
//      ◦ 3x Close combat weapon

// Prosecutors (40 Points)
//   • 1x Prosecutor Sister Superior
//      ◦ 1x Boltgun
//      ◦ 1x Close combat weapon
//   • 3x Prosecutor
//      ◦ 3x Boltgun
//      ◦ 3x Close combat weapon

// Vertus Praetors (150 Points)
//   • 2x Vertus Praetor
//      ◦ 2x Interceptor lance
//      ◦ 2x Salvo launcher

// ALLIED UNITS

// Inquisitor Draxus (95 Points)
//   • 1x Dirgesinger
//   • 1x Power fist
//   • 1x Psychic Tempest


// create a type that represents the above data and use it to declare two variables. the first line is the name of the list

export type Warhammer40kList = {
    name: string;
    points: number;
    battleSize: string;
    faction: string;
    detachment: Detachment;
    units: Unit[];
};

type Detachment = {
    name: string;
};

type Unit = {
    category: string;
    name: string;
    points: number;
    models: Model[];
};

type Model = {
    name: string;
    count: number;
    weapons: Weapon[];
    enhancements: string[];
};

type Weapon = {
    name: string;
    count: number;
};
