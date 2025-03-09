export const bosses = [
    {
        name: "Morokai",
        description: "Morokai, a formidable Level 24 Guild Boss in Throne and Liberty, challenges players with his lightning-based attacks and area-of-effect mechanics. He can be encountered in the open world within the Carmine Forest or summoned in the Guild Hall by guilds that have reached level 3.",
        location: "https://gamemaps.gg/game/throne-and-liberty/map/solisium?poi=9b16d6e7-c5bc-4ed5-929f-89fc1986e008",
        img: "/morokai.jpeg",
        icon: "/morokai-icon.webp",
        link: "/morokai",
        drops: [
            {
                drop: "Morokai's Greatblade of Corruption",
                item: "/morokai-1.webp"
            },
            {
                drop: "Arcane Shadow Gloves",
                item: "/morokai-2.webp"
            },
            {
                drop: "Abyssal Grace Pendant",
                item: "/morokai-3.webp"
            }
        ],
        strategy: {
            phases: [
                {
                    phase: "Fury Attack",
                    details: [
                        'Like all Field Bosses, Morokai has a Fury Attack that can be avoided by using your motionless Block.',
                        "Morokai's Fury Attack can bounce between nearby players, so make sure to hold your Block to avoid heavy damage.",
                        "Don't forget to take advantage of the Purple Fury Attack indicator to time your Perfect Block."
                    ]
                },
                {
                    phase: "Purple Circles",
                    details: [
                        'From the start of the fight, Morokai spawns small Purple Circles at the feet of randomly selected players.',
                        'After about three seconds, the Purple Circles explode with lightning and deal a small amount of damage to the chosen player, and large damage to other players caught in the AoE.',
                        "Avoid other players if you are selected for this mechanic to ensure you don't damage your allies.",
                        'Run from players who have the Purple Circle at their feet in case they are not paying attention.'
                    ]
                },
                {
                    phase: "Pillars",
                    details: [
                        'Avoid this mechanic by running behind one of the Four Pillars when Morokai lifts its staff and says, "I will burn everything I see!"',
                        'At sub 50% Health, Morokai starts to use a new mechanic that activates the Four Pillars surrounding the boss with purple lightning.',
                        'At about three seconds, Morokai shoots lightning from its staff to a large number of players selected at random to deal massive damage.'
                    ]
                }
            ],
            tips: [
                "There is a large tree next to Morokai's spawn, which ranged players can take advantage of to snipe enemies during Conflict zone spawns. You can get on top of the tree by flying from Starlight Observatory Tower."
            ]
        }
    },
    {
        name: "Aridus",
        description: "Aridus is a formidable Level 50 Field Boss in Throne & Liberty, presenting significant challenges to adventurers. He can be encountered on the fifth floor of the Syleus Abyss Dungeon or summoned in the Guild Hall by guilds that have reached level 17.",
        location: "https://gamemaps.gg/game/throne-and-liberty/map/syleuss-abyss-dungeon?poi=9e60af49-376c-4ef5-833d-fc3d6fd71b61",
        img: "/aridus.jpg",
        icon: "/aridus-icon.webp",
        link: "/aridus",
        drops: [
            {
                drop: "Aridus's Gnarled Voidstaff",
                item: "/aridus-1.webp"
            },
            {
                drop: "Phantom Wolf Breeches",
                item: "/aridus-2.webp"
            },
            {
                drop: "Breeches of the Executioner",
                item: "/aridus-3.webp"
            },
            {
                drop: "Belt of Bloodlust",
                item: "/aridus-4.webp"
            }
        ],
        strategy: {
            phases: [
                {
                    phase: "Green Gas",
                    details: [
                        'Throughout the fight, Aridus casts a line of Green Gas, as well as a cone of Green Gas that deals massive damage. Rely on your healer to restore your Health if you are hit, or dodge the damage by paying attention to the boss to watch the casting animation. The animation for the cone looks like Aridus is spawning a portal.'
                    ]
                },
                {
                    phase: "Sleep",
                    details: [
                        "The Sleep mechanic is Aridus' signature move. To successfully get past the Sleep mechanic, remember the following:",
                        'Aridus puts everyone on the platform to Sleep.',
                        "The three players with the Wasps and those around them are the first to be woken up by Wasp's AoE damage.",
                        "If you are Slept within the inner circle of the platform, you're safe from instant death.",
                        "If you're Slept on the outer ring, the players with the Wasps have to run past you allowing it to deal damage to you so you can wake up and move to the inner circle.",
                        "After a delay, those who aren't woken up in the outer ring instantly die."
                    ]
                },
                {
                    phase: "Wasps",
                    details: [
                        "Players with the Wasps should stay around the edge of the arena and rotate around a section of the platform so their teammates are aware of where they are and aren't being unnecessarily damaged by the Wasps' AoE."
                    ]
                }
            ],
            tips: [
                "During the Sleep mechanic, players can be saved by a Staff wielder using Salvation Chain.",
                "Throughout the fight, Aridus maintains a summon of Three Wasps that follow three randomly selected players marked by a Green Light. The Wasps deal damage in a small AoE when they are near players.",
                "The Wasps are needed during the Sleep mechanic. Do not kill them! New Wasps spawn after the Sleep mechanic ends to prepare you for the next one."
            ]
        }
    },
    {
        name: "Cornelius",
        description: "Cornelius is a formidable Level 48 Guild Boss in Throne & Liberty, known for his high-damage attacks and complex mechanics. He can be encountered in the open world within the Syleus Abyss dungeon or summoned in the Guild Hall by guilds that have reached level 16.",
        location: "https://gamemaps.gg/game/throne-and-liberty/map/syleuss-abyss-dungeon?poi=9e60b52d-26da-423c-b5a5-339f6be4f24b",
        img: "/cornelius.jpg",
        icon: "/cornelius-icon.webp",
        link: "/cornelius",
        drops: [
            {
                drop: "Cornelius's Animated Edge",
                item: "/cornelius-1.webp"
            },
            {
                drop: "Ascended Guardian Hood",
                item: "/cornelius-2.webp"
            },
            {
                drop: "Divine Justiciar Attire",
                item: "/cornelius-3.webp"
            },
            {
                drop: "Abyssal Grace Charm",
                item: "/cornelius-4.webp"
            }
        ],
        strategy: {
            phases: [
                {
                    phase: "Fury Attack",
                    details: [
                        "Cornelius' Fury Attack is a large AoE that damages players within the arena. Pay attention to the Purple Fury Attack indicator as it's pretty slow and easy to block."
                    ]
                },
                {
                    phase: "Ghostly Claw ",
                    details: [
                        "Cornelius lowers its left hand to the ground and launches a Ghostly Claw to attack and Pull players toward it. You can run out of the AoE before it Pulls you."
                    ]
                },
                {
                    phase: '"Kneel before your king!"',
                    details: [
                        'When Cornelius says, "Kneel before your king!" it shoots out Five Projectiles from its body in multiple directions, following the lines engraved on the floor of the arena. Avoid these lines to avoid the attack.'
                    ]
                },
                {
                    phase: "Blue and Red",
                    details: [
                        "Blue: Cornelius selects players at random and spawns a Blue Mark over their heads. Players with the Blue Mark must distance themselves from allies to avoid killing them. After three seconds the Marker spawns five Blue AoE Explosions that follow the target and damage surrounding players.",
                        "Red: Cornelius also selects players at random and spawns a Red Mark over their heads, separate from the Blue mechanic. Similarly to the Blue mechanic, the mark spawns a single large Red AoE Explosion that damages surrounding players. Distance yourselves from your allies to avoid killing or damaging them."
                    ]
                },
            ],
            tips: [
                "When fighting Cornelius, make sure you remain aware of any AoEs cast at your feet or nearby players to avoid massive damage or being killed.",
                "When Cornelius spawns, it encloses the entire arena in a Blue Forcefield that prevents players on the floor from entering or leaving. To enter, players must go to the top of the surrounding coliseum and fly over the Blue Forcefield to get into the fight. Alternatively, you can stay inside the arena before Cornelius spawns to avoid getting locked out"
            ],
        },
    },
    {
        name: "Talus",
        description: "Talus is a formidable Level 42 Guild Boss in Throne & Liberty, known for his wide-ranging AOE attacks and punishing melee moves. Coordination and quick reactions are essential, especially for handling his group-wide mechanics.",
        location: "https://gamemaps.gg/game/throne-and-liberty/map/solisium?poi=9b0923d9-abab-4aae-94e4-fb03a521b5ad",
        img: "/talus.jpg",
        icon: "talus-icon.webp",
        link: "/talus",
        drops: [
            {
                drop: "Talus's Crystalline Staff",
                item: "/talus-1.webp"
            },
            {
                drop: "Phantom Wolf Mask",
                item: "/talus-2.webp"
            },
            {
                drop: "Blessed Templar Plate Mail",
                item: "/talus-3.webp"
            },
            {
                drop: "Forged Golden Bangle",
                item: "/talus-4.webp"
            }
        ],
        strategy: {
            phases: [
                {
                    phase: '"Expel...magic...!"',
                    details: [
                        'When Talus says, "Expel...magic...!" it splits apart and begins to spin uncontrollably, spawning a massive Windstorm that covers the entire boss arena. Run to the center of the arena to avoid the massive damage that occurs at the end of the animation. You can also avoid damage by running outside of the AoE, but then you lose DPS on Talus.'
                    ]
                },
                {
                    phase: '"Damage...restores...!"',
                    details: [
                        'When Talus says, "Damage...restores...!" it spawns Three Stones at the edges of the inner arena. All players must run to one of these stones to obtain a Blue Shield that protects them from being one-shot at the end of the animation. You must touch the stone with your body to get the shield.'
                    ]
                }
            ],
            tips: [
                'Range DPS during a Conflict spawn can use the cliffs at the outer edges of the boss arena to kill players at max range.',
                'Talus deals melee range basic attacks, and if no players are within range, it emits pulsating damage in an AoE that also knocks players back. Make sure always to have a tank on Talus to prevent AoE damage and CC.'
            ]
        }
       
    },
    {
        name: "Nirma",
        description: "The level 50 boss Nirma spawns on the 5th Floor of Syleus's Abyss in the southwest portion of the map. Similar to Aridus, the doors of this open-world Dungeon close during the night. You can use a Guild Summon Stone to teleport your guildmates inside while the doors are closed.",
        location: "https://gamemaps.gg/game/throne-and-liberty/map/syleuss-abyss-dungeon?poi=9e60c60b-3167-46ef-a7c6-61fb498cae89",
        img: "nirma.jpg",
        icon: "nirma-icon.webp",
        link: "/nirma",
        drops: [
            {
                drop: "Nirma's Sword of Echoes",
                item: "/nirma-1.webp"
            },
            {
                drop: "Ascended Guardian Pants",
                item: "/nirma-2.webp"
            },
            {
                drop: "Divine Justiciar Shoes",
                item: "/nirma-3.webp"
            },
            {
                drop: "Clasp of the Overlord",
                item: "/nirma-4.webp"
            }
        ],
        strategy: {
            phases: [
                {
                    phase: "Fury Attack",
                    details: [
                        "Everyone should position themselves opposite of the marked player to avoid AoE damage and a Fury Attack that bounces to a player near the marked target."
                    ]
                },
                {
                    phase: '"Cry in desperation!"',
                    details: [
                        'When Nirma says, "Cry in desperation!" it casts Electrical AoEs that cover a part of the platform in a large cone. The person who is marked must move clockwise or in an agreed direction with their team to kite the Electrical AoEs away from allies.',
                        'Everyone needs to avoid being hit by this AoE as it places a debuff on you that significantly reduces the healing you receive. Getting one stack of this debuff cuts healing in half, and receiving two stacks makes all heals you receive (including your potions) restore pretty much nothing. During this mechanic, Nirma simultaneously casts AoE blasts toward the marked player, including the same Fury Attack that you must block.'
                    ]
                },
                {
                    phase: "Spins and Raises", 
                    details: [
                        "When Nirma Spins and Raises its Staff in the air while gathering electrical currents toward its body, it casts an AoE attack that hits everyone on the platform. You must learn to time your jump to avoid the AoE blast. You can also face tank the damage and rely on your healer to restore your health."
                    ]
                }
            ],
            tips: [
                "The most important thing to understand about Nirma is how it targets players during the entire battle and what this means for all players involved in the fight. When Nirma is engaged, the player furthest from the boss on the platform where it spawns is marked with a Glowing Orb and selected as its primary target.",
                "It is helpful to pair whoever is marked throughout the fight with a healer who plays at long range or understands the mechanics of the boss. If the person marked has stacks of the healing debuff, multiple healers should coordinate the use of Blessed Barrier and the shield from Curse Explosion to prevent them from receiving damage if they are hit."
            ]
        }
    },
    {
        name: "Minezerok",
        description: "The lvl 50 Field Boss Minezerok spawns in the Shadowed Crypt on the 1st Floor. When you enter this Open World Dungeon, you simply run directly north to reach the room Minezerok spawns in.",
        location: "https://gamemaps.gg/game/throne-and-liberty/map/shadowed-crypt-dungeon?poi=9e60ca3f-71f7-4104-b7f4-f56ff9c5f47d",
        img: "minezerok.jpg",
        icon: "minezerok-icon.webp",
        link: "/minezerok",
        drops: [
            {
                drop: "Minzerok's Daggers of Crippling",
                item: "/minezerok-1.webp"
            },
            {
                drop: "Swirling Essence Hat",
                item: "/minezerok-2.webp"
            },
            {
                drop: "Divine Justiciar Gloves",
                item: "/minezerok-3.webp"
            },
            {
                drop: "Blessed Templar Choker",
                item: "/minezerok-4.webp"
            }
        ],
        strategy: {
            phases: [
                {
                    phase: 'Fury Attack',
                    details: [
                        "Minezerok's Fury Attack is connected to a one-shot arena-wide AoE mechanic. Pay attention to the Purple Fury Attack indicator and make sure to Block at the correct moment.",
                        "After blocking, the boss releases dark magic all around itself and transforms into a Black Hole, Pulling in all players within the arena.",
                        "Wait about eight to nine seconds before you begin morph sprinting toward one of the Grapple Hooks located on the northwest and southeast sides of the arena near Minezerok.",
                        "Make sure to spam your grapple hook button to ensure you dodge the Wave of Dark Energy moving towards you that 1-shots almost all players it touches."
                    ]
                },
                {
                    phase: 'Cone Blast',
                    details: [
                        'Minezerok deals melee range damage to the tank holding aggro. A tank must aggro throughout the fight to control the direction of the 30-Degree AoE Cone mechanic that deals massive damage and can easily kill players behind the tank or who are caught in a CC.',
                        "Players must watch out for when Minezerok charges its staff for about three seconds before delivering the powerful cone blast. It looks like Minezerok is spawning a gray spectral portal as well during this mechanic. An easy way to avoid this mechanic is DPS Minezerok while standing on the opposite side of the person holding aggro."
                    ]
                },
                {
                    phase: 'Black Smoke ',
                    details: [
                        'The boss spawns multiple Expanding Lines of Black Smoke and particles on random players that repeatedly deal damage starting from one edge of the line to the other. Run out immediately as they deal massive damage if you stand in them.'
                    ]
                },
                {
                    phase: 'Soul',
                    details: [
                        "Minezerok has a mechanic commonly called the Soul mechanic. The boss selects players at random to Stun and attempts to steal their souls. Players must CC or heavily damage the souls walking toward Minezerok from the bodies of the chosen players to prevent them from dying.",
                        "Following the Soul mechanic, Minezerok always casts a 180 Degree Red AoE Cone that one-shots most players within range toward the furthest player in its aggro pool. A Ranged DPS with the furthest attack range needs to bait the direction Minezerok blasts with AoE damage."
                    ]
                }
            ],
            tips: [
                "During a Conflict spawn, players can strategically time the Fury Attack mechanic to wipe enemy players flying down from the grapple hooks. The wave's AoE is larger than it appears, so make sure not to stand too close.",
                "Properly geared SnS players can survive the wave in full T1 purple gear, especially with Blessed Barrier. Regardless, all players should dodge the wave of dark energy moving towards them as it's likely to be a 1-shot."
            ]
        }
    },
    {
        name: "Malakar",
        description: "Malakar the great Eyes of Desires, is a level 48 boss that can be found in the northeast portion of Manawastes, above ground.",
        location: "https://gamemaps.gg/game/throne-and-liberty/map/solisium?poi=9b2b209c-3cc2-4041-9879-0bd634864d6a",
        img: "malakar.jpg",
        icon: "malakar-icon.webp",
        link: "/malakar",
        drops: [
            {
                drop: "Malakar's Energizing Crossbows",
                item: "/malakar-1.webp"
            },
            {
                drop: "Shock Commander Visor",
                item: "/malakar-2.webp"
            },
            {
                drop: "Ebon Roar Gauntlets",
                item: "/malakar-3.webp"
            },
            {
                drop: "Gilded Infernal Wristlet",
                item: "/malakar-4.webp"
            }
        ],
        strategy: {
            phases: [
                {
                    phase: 'Fury Attack',
                    details: [
                        "Pay attention to Malakar's Purple Fury Attack indicator, which is cast frequently during the fight. Malakar charges up electrical projectiles that must be blocked to avoid being stunned. Start counting from 1 up until 3 when Malakar casts the first Fury Attack. On the third Fury Attack, Malakar will always perform its Teleport, Petrify, and Vaccuum mechanic. Always run to the edge of the arena and hide behind a pillar, wall, or rock to avoid being pulled in."
                    ]
                },
                {
                    phase: "Red Eyes",
                    details: [
                        'Malakar casts 1 to 2 red eyes above players within range throughout the fight. If there are 2 red eyes, the one that is open shows who Malakar is focusing on.',
                        'Melee, with the eye, needs to kite Malakar around so it does not catch up to them.',
                        "If Malakar catches the person with an eye, it begins smashing the ground with a large AoE multiple times, dealing massive damage to all players within range."
                    ]
                },
                {
                    phase: "Petrify Stun",
                    details: [
                        "Malakar's iconic mechanic involves a Teleport, Petrify Stun, and mass AoE pull that reaches more than half of the arena.",
                        "Malakar teleports to the furthest player within its aggro pool, casts a massive AoE Petrify Stun, and then Pulls all players using the same long-range AoE.",
                        "To counter this mechanic, it's important to pre-select, preferably a DPS playing at max range, to bait the Teleport, and they can turn Malakar around to face away from allies and players so they don't get sucked in. This must happen very fast, so having a DPS with good movement speed is helpful to counter this mechanic."
                    ]
                }
            ],
            tips: [
                "Malakar casts purple projectiles randomly at players throughout the fight. Dodge the projectiles before they hit the ground to avoid the AoE damage.",
                "In a Conflict fight, players can bait the Teleport and Vacuum mechanic by using it to suck in enemy players. Or, players can wait for the Pull before rushing in to wipe enemy raids who are Vacuumed and Stunned by Malakar.",
                "A clever way to avoid the pull mechanic when the fight is disorganized is by positioning yourself behind a solid structure at the edge of the arena when Malakar Teleports. This stops your body from being Pulled towards Malakar. Unfortunately, this is not an easy thing to achieve for Melee DPS, who are normally in Melee range."
            ]
        }
    },
    {
        name: "Kowazan",
        description: "Deep in the Northwest ends of the Grayclaw Forest, you find the level 50 Kowazan and Lycan Kowazan bosses. Kowazan spawns during the daytime. Lycan Kowazan spawns during nighttime.",
        location: "https://gamemaps.gg/game/throne-and-liberty/map/solisium?poi=9b2b2061-cf41-47b7-b5ec-1fb8906aacc1",
        img: "kowazan.jpg",
        icon: "kowazan-icon.webp",
        link: "/kowazan",
        drops: [
            {
                drop: "Kowazan's Twilight Daggers",
                item: "/kowazan-1.webp",
            },
            {
                drop: "(Lycan) Kowazan's Sunflare Crossbows",
                item: "/kowazan-5.webp",
            },
            {
                drop: "Shock Commander Greaves",
                item: "/kowazan-2.webp",
            },
            {
                drop: "Collar of Decimation",
                item: "/kowazan-3.webp",
            },
            {
                drop: "Arcane Shadow Hat",
                item: "/kowazan-4.webp"
            }
        ],
        strategy: {
            phases: [
                {
                    phase: "Fury Attack",
                    details: [
                        "Kowazan, randomly, casts AoE Poison Knives all around him in a large radius twice in a row that can't be dodged if you're in range. Players should be able to simply face tank the Knives and rely on a healer to recover any lost Health. After the second cast of Knives, the boss uses a melee range Fury Attack that can be Blocked by paying attention to the Purple Fury Attack indicator."
                    ]
                },
                {
                    phase: '"Are you the leader?"',
                    details: [
                        'After saying, "Are you the leader?" Kowazan spawns a Glowing Green Aura underneath a random player in the arena. The Green Light emits from the ground, and the boss throws multiple Knives in almost a 180-degree AoE cone that deals damage and stacks Poison on anyone hit.'
                    ]
                },
                {
                    phase: 'Green Smoke',
                    details: [
                        'When Kowazan says, "Filthy...useless...! I will take you all down in an instant!" he gathers Green Smoke towards him while sucking randomly selected players in. After the Vacuum Pull, Kowazan deals an AoE blast that marks and debuffs the selected players with a Knife and Green Aura above their heads. If you are marked, you have to run and touch the bodies of other players who are unmarked to spread the debuff. If you fail to spread the debuff you are then Lifted into the air and killed.'
                    ]
                },
                {
                    phase: "(Lycan) Fury Attack",
                    details: [
                        "The Fury Attack from Lycan Kowazan is fairly simple and entails a large AoE attack that covers the majority of the arena. Pay attention to the Purple Fury Attack indicator and Block at the right moment."
                    ]
                },
                {
                    phase: "(Lycan) Moon",
                    details: [
                        "The boss pushes players back in a large AoE and marks 6 random players in the arena with Blue Moon symbols. Players must match their Moon with another to form a Yellow Full Moon. A yellow AoE also appears at random where one of the Blue Moons was matched. Stand in this AoE to receive a damage buff.",
                        "Lycan Kowazan sucks players in, and six to seven at random are marked with a Red Moon. Additionally, several other players are marked with Red Light. Players with a Red Moon above their heads must immediately run to the boss as fast as possible and hug it. If even one person with a Red Moon is late, Lycan Kowazan begins killing players who were marked with the Red Light at random."
                    ]
                }
            ],
            tips: [
                "Kowazan has Melee and Ranged basic attacks that are used depending on who holds aggro. If a Ranged player steals aggro, the boss swaps to Range attacks and then jumps on top of the target. Try to always keep aggro on a tank.",
                "Players can wait for the mass stun in a conflict fight before going in."
            ]
        }
    },
    {
        name: "Junobote",
        description: "Junobote is a level 50 Field Boss that spawns on the 1st Floor of the Sanctum of Desire in the center of the Hall of Intelligence.",
        location: "https://gamemaps.gg/game/throne-and-liberty/map/sanctum-of-desire-dungeon?poi=9e60d3e7-5acd-407b-a8c1-a8a85783f1af",
        img: "junobote.jpg",
        icon: "junobote-icon.webp",
        link: "/junobote",
        drops: [
            {
                drop: "Junobote's Juggernaut Warblade",
                item: "/junobote-1.webp"
            },
            {
                drop: "Arcane Shadow Robes",
                item: "/junobote-2.webp"
            },
            {
                drop: "Shadow Harvester Trousers",
                item: "/junobote-3.webp"
            },
            {
                drop: "Forsaken Embrace",
                item: "/junobote-4.webp"
            }
        ],
        strategy: {
            phases: [
                {
                    phase: "Fury Attack",
                    details: [
                        "Junobote casts its Fury Attack often throughout the fight. It's a slowly charged ability that is easy to Block if you pay attention to the Purple Fury Attack indicator. After the Fury Attack, Junobote follows up with a melee range attack that covers a 360-degree area around it."
                    ]
                },
                {
                    phase: "Flame Breathe",
                    details: [
                        "Players must pay attention above their heads as Junobote marks a player at random with a Red Flaming Orb. The person with the orb must turn Junobote away from other players to prevent them from getting hit by the Flaming Breath mechanic. The breath does not deal a lot of damage on initial impact but you accumulate more burn stacks the longer you are hit by the Flame Breathe."
                    ]
                },
                {
                    phase: "AoE Explosions",
                    details: [
                        "Junobote repositions to the center of the arena and lets out a big shout before flying into the air. Once in the air, the boss begins to cast AoE Explosions starting from the center of the arena, then the inner ring, and then the outer ring. Stay out of the red telegraphed lines to avoid damage."
                    ]
                },
                {
                    phase: "Quiz Time",
                    details: [
                        'When Junobote says, "You have two choices. Be right or be dead!" The two statues in the arena light up, and players must gather within the green AoE under The Statue of Truth if the answer to the question Junobote asks is true or The Statute of Falsehood if the answer is false. If you gather under the incorrect statue, Junobote deals damage and knocks all players who were wrong out of the arena, requiring them to fly back in.'
                    ]
                }
            ],
            tips: [
                'There are only two ways to get to Junobote, either through the bridge or up the spiral stairs. Both are huge chokepoints to control as a guild.',
                'Pay attention to the question asked during the True or False trivia phase and answer correctly. If you can successfully pass the short test, this boss is fairly easy to do.'
            ]
        }
    },
    {
        name: "Grand Aelon",
        description: "Grand Aelon is a level 50 Field Boss located on the Eastern edge of Purelight Hill.",
        location: "https://gamemaps.gg/game/throne-and-liberty/map/solisium?poi=9b2b197c-4080-454b-a6f1-a86342d07e42",
        img: "aelon.jpg",
        icon: "grand-aelon-icon.webp",
        link: "/grand-aelon",
        drops: [
            {
                drop: "Aelon's Rejuvenating Longbow",
                item: "/aelon-1.webp"
            },
            {
                drop: "Greaves of the Field General",
                item: "/aelon-2.webp"
            },
            {
                drop: "Arcane Shadow Pants",
                item: "/aelon-3.webp"
            },
            {
                drop: "Wrapped Coin Necklace",
                item: "/aelon-4.webp"
            }
        ],
        strategy: {
            phases: [
                {
                    phase: "Fury Attack",
                    details: [
                        "Grand Aelon frequently casts its Fury Attack ability throughout the fight. This ability involves a large AoE Green Shockwave that damages everyone in the arena. The Purple Fury Attack indicator is pretty slow, making this Fury Attack easy to Block."
                    ]
                },
                {
                    phase: "Cone of Thorns",
                    details: [
                        "A Cone of Thorns pops up from the ground in a line starting from Grand Aelon and then moving toward the arena's edge throughout the fight. Grand Aelon raises both hands in the air before delivering the attack. This attack does not deal much damage, so you don't have to worry too much about being hit."
                    ]
                },
                {
                    phase: "Thorn Cages",
                    details: [
                        'Grand Aelons signature mechanic is the Thorn Cages, which spawns to Ensnare and trap randomly selected players. The boss says, "Stuggle... rootless ones!" before locking the players inside the Cages. Players must break the Cages as quickly as possible to save those inside from dying.'
                    ]
                }
            ],
            tips: [
                "If you have a Green AoE Circle underneath you during this mechanic, run away from players or trap them with you."
            ]
        }
    },
    {
        name: "Excavator-9",
        description: "Excavator-9 is a level 42 boss that can be found on the far east side of the Monolith Wastelands.",
        location: "https://gamemaps.gg/game/throne-and-liberty/map/solisium?poi=9b005b29-5650-4954-847f-95f7de51aa86",
        img: "excavator9.jpg",
        icon: "excavator-icon.webp",
        link: "/excavator-9",
        drops: [
            {
                drop: "Excavator's Mysterious Scepter",
                item: "/excavator9-1.webp"
            },
            {
                drop: "Heroic Breeches of the Resistance",
                item: "/excavator9-2.webp"
            },
            {
                drop: "Embossed Granite Band",
                item: "/excavator9-3.webp"
            }
        ],
        strategy: {
            phases: [
                {
                    phase: "Fury Attack",
                    details: [
                        'The Fury Attack from Excavator-9 involves a large windup, and Excavator-9 shouts once again, "Wide-range operation!" Afterward, the boss begins to spin three times, dealing AoE damage in a large radius. Watch for the Purple Fury Attack indicator to time your Block.'
                    ]
                },
                {
                    phase: '"Wide-range operation!"',
                    details: [
                        'Excavator-9 uses a mix of melee and mid-range basic attacks. The melee-range basic attacks deal large damage and are directed toward the tank holding aggro on the boss. The mid-range basic attacks occur after Excavator-9 shouts, "Wide-range operation!" Excavator-9 then proceeds to slam the ground three times, time your jumps to avoid the damage.'
                    ]
                },
                {
                    phase: 'Black Smoke',
                    details: [
                        "Excavator-9 has another mid-range basic attack that occurs at random, where it slams its hammer into the ground creating a fissure in the ground that launches players in the air. Afterward, the boss follows up with an AoE attack, shooting Black Smoke that turns players hit into stone. Make sure to fly down in morph form if you are launched into the air to avoid fall damage."
                    ]
                }
            ],
            tips: [
                "When initially engaged, the boss slams the ground three times, dealing minimal damage.",
                "When the boss gathers purple particles in its left hand, it unleashes another mid-range AoE attack. You can dodge this ability by jumping.",
                "You can fly on top of the pillars surrounding Excavator-9's spawn location when traveling from the Abandoned Stonemason Waypoint to snipe enemies from above."
            ]
        }
    },
    {
        name: "Chernobog",
        description: "The Level 44 Field Boss, Chernobog is located on the Northern edge of the Abandoned Stonemason Town.",
        location: "https://gamemaps.gg/game/throne-and-liberty/map/solisium?poi=9b005a48-ddfe-434c-8bd4-8c4ad49b36a8",
        img: "chernobog.jpg",
        icon: "chernobog-icon.webp",
        link: "/chernobog",
        drops: [
            {
                drop: "Chernobog's Blade of Beheading",
                item: "/chernobog-1.webp"
            },
            {
                drop: "Helm of the Field General",
                item: "/chernobog-2.webp"
            },
            {
                drop: "Arcane Shadow Shoes",
                item: "/chernobog-3.webp"
            },
            {
                drop: "Bile Drenched Veil",
                item: "/chernobog-4.webp"
            }
        ],
        strategy: {
            phases: [
                {
                    phase: "Fury Attack",
                    details: [
                        "Cherno's Fury Attack involves a small windup into an AoE Tail Swipe that Stuns and pushes players who fail to Block back directly behind the boss.",
                        "The boss says an unintelligible phrase before attacking. The Purple Fury Attack indicator for this ability is quite slow, so it is very easy to Block."
                    ]
                },
                {
                    phase: "Overall",
                    details: [
                        "When Chernobog spawns, it ascends from the ground Knocking surrounding players up in a large AoE while dealing damage. Keep a ten-meter distance from Cherno's spawn location to avoid getting launched.",
                        "One of the boss's key moves is a Burrow attack that can occur at random. The boss once again says a longer intelligible phrase before diving underground and poking its head up at a random nearby location to Stun and Knock players back. The boss burrows again after this and ascends from the ground the second time Knocking surrounding players into the air."
                    ]
                }
            ],
            tips: [
                "Chernobog deals poisonous basic attacks to players throughout the fight. The DoT damage from these attacks is non-lethal and easily manageable with a healer or Nature's Blessing.",
                "Once the boss lands, it emits a Grey Petrifying Spray that turns all enemies caught in it into stone. When Burrowing, the boss can perform multiple burrows before ascending from the ground. If you are Poisoned by Cherno during this mechanic and undergeared, you can avoid death to the DoT by standing in front of the boss and getting Petrified."
            ]
        }
    },
    {
        name: "Ahzreil",
        description: "Ahzreil is a level 50 boss that spawns in the southwest area of the Light Sanctum Ruins.",
        location: "https://gamemaps.gg/game/throne-and-liberty/map/solisium?poi=9b2b1f00-ac3c-4c55-8690-06319e4b513c",
        img: "ahzreil.jpg",
        icon: "ahzreil-icon.webp",
        link: "/ahzreil",
        drops: [
            {
                drop: "Ahzreil's Siphoning Sword",
                item: "/ahzreil-1.webp"
            },
            {
                drop: "Swirling Essence Pants",
                item: "/ahzreil-2.webp"
            },
            {
                drop: "Divine Justiciar Pants",
                item: "/ahzreil-3.webp"
            },
            {
                drop: "Blessed Templar Cloak",
                item: "/ahzreil-4.webp"
            }
        ],
        strategy: {
            phases: [
                {
                    phase: "Fury Attack",
                    details: [
                        "Ahzreil has a slow Fury Attack, which is an easy to dodge projectile that damages and Stuns all players within range. Pay attention to the Purple Fury Attack indicator to ensure you are hitting your Block at the correct moment."
                    ]
                },
                {
                    phase: "Totems",
                    details: [
                        "Ahzreil's signature move involves more fire and totems.",
                        "Three Totems spawn randomly around the arena close to Ahzreil.",
                        "Multiple players are also simultaneously sucked into Ahzreil and three of them become randomly selected to receive an AoE ticking Time Bomb floating above their heads.",
                        "The selected players must use these bombs to explode and destroy the totems. The totems can not be destroyed by anything else. It is ideal to have zero totems remaining to ensure no one takes massive AoE damage.",
                        "If one totem remains, players lose about half or more than half of their health, depending on how tanky they are. If more than one totem remains, the majority of players die."
                    ]
                },
                {
                    phase: "Blue Fire",
                    details: [
                        "Ahzreil spawns a line of Blue Fire towards whoever is holding aggro. Players caught in the AoE can run out or dodge to the sides to avoid damage.",
                        "Throughout the fight, Ahzreil spawns Blue Circles on the ground under the feet of randomly selected players. These circles are telegraphs letting you know that a meteor is about to fall from the sky to deal AoE damage. Run out of these circles immediately."
                    ]
                }
            ],
            tips: [
                "A trick to avoid the explosion AoE wipe from the totem phase that is especially helpful for uncoordinated open-world spawns; is running behind one of the large cylinder pillars at the edges of the Temple. Alternatively, you can run and grapple onto the hook located west of the boss to avoid the AoE one-shot mechanic."
            ]
        }
    },
    {
        name: "Adentus",
        description: "Defeating Adentus, the formidable Level 50 Guild Boss in Throne and Liberty, requires meticulous preparation and a deep understanding of his attack patterns and mechanics. Adentus can be encountered in the open world at the Ruins of Turayne or summoned in the Guild Hall by guilds of level 17 and above.",
        location: "https://gamemaps.gg/game/throne-and-liberty/map/solisium?poi=9b2b19b1-9e25-416c-a352-1a5ed16e2034",
        img: "adentus.jpg",
        icon: "adentus-icon.webp",
        link: "/adentus",
        drops: [
            {
                drop: "Adentus's Gargantuan Greatsword",
                item: "/adentus-1.webp"
            },
            {
                drop: "Shadow Harvester Mask",
                item: "/adentus-2.webp"
            },
            {
                drop: "Blessed Templar Helmet",
                item: "/adentus-3.webp"
            },
            {
                drop: "Girdle of Spectral Skulls",
                item: "/adentus-4.webp"
            }
        ],
        strategy: {
            phases: [
                {
                    phase: "Fury Attack",
                    details: [
                        'Adentus involves him shouting, "This will be your grave!" while preparing an AoE attack that chain Pulls all players caught in it towards him. You can easily Block this attack by paying attention to the Purple Fury Attack Indicator by running out of range.'
                    ]
                },
                {
                    phase: '"Overrun!"',
                    details: [
                        'When Adentus says, "Overrun!" it casts a telegraphed attack that involves Three Glowing Lines on the ground that erupt once the boss smashes its hammer on the ground. The boss smashes the ground three times and if you are caught in the AoE, you receive minor damage and become Stunned. This attack is easy to avoid if you pay attention to the telegraph on the ground during the mechanic.',
                        'When Adentus flips its hammer in the air and says, "Overrun!" again, it spawns a bunch of yellow circles on the ground that explode very quickly, damaging and Knocking players caught in the air.'
                    ]
                }
            ],
            tips: [
                "It's very important for a tank to always hold aggro and stay near the boss. If a player with aggro is not in Melee range, Adentus begins using an arena-wide AoE. This AoE Stuns players and deals heavy damage to everyone within the arena."
            ]
        }
    },
]