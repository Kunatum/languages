// English (United Kingdom)
// Translated by: Swôth#9990

module.exports = {
    overview: require("../locales.config.js")["en"],
    navbar: {
        home: 'Home',
        dashboard: 'Dashboard',
        discover: 'Discover',
        partners: 'Partners',
        team: 'Team',
        support: 'Support Server',
        invite: 'Invite Bot',
        login: 'Login'
    },
    footer: {
        rights: 'All rights reserved.',
        description: 'The best giveaway bot on Discord. Organically improve your social media accounts by creating giveaways. It\'s in your hands...',
        menus: {
            first: {
                title: 'Important',
                items: {
                    home: 'Home',
                    dashboard: 'Dashboard',
                    support: 'Support Server',
                    add: 'Add Bot'
                }
            },
            second: {
                title: 'Giftix',
                items: {
                    partners: 'Partners',
                    team: 'Team'
                }
            },
            third: {
                title: 'Company',
                items: {
                    tos: 'Terms of Service',
                    privacy: 'Privacy Policy'
                }
            },
        },
        developedWith: 'Developed with ❤️ by Swôth & clqu.',
        allServices: 'All services are online.',
        someServices: 'Some services are down.'
    },
    index: {
        title: 'The best giveaway bot on Discord.',
        description: 'By creating advanced giveaways with Giftix, you can improve your social media accounts and gain organic lift!',
        buttons: {
            dashboard: 'Dashboard',
            support: 'Support Server',
            with_discord: 'Login with Discord'
        },
        box: {
            title: 'Create advanced giveaway!',
            description: 'With Giftix you can create advanced giveaways and set different requirements! For example, you can have people join a server or subscribe to your channel to enter a sweepstakes! This makes creating a sweepstakes simpler and easier!',
            button: {
                text: 'Get started'
            }
        },
        statistics: {
            title: 'Statistics',
            description: 'Here is our statistics!',
            labels: {
                guilds: 'Guilds',
                members: 'Members',
                giveaways: 'Giveaways',
                joins: 'Joins'
            }
        }
    },
    discover: {
        title: 'Discover',
        description: 'Discover public giveaways here and enter the giveaways to find and win the prize you need!',
        searchInput: 'Search by gifts, title, server name, etc.',
        settings: {
            title: 'Settings',
            description: 'The giveaway are the sorting settings.',
            amount: {
                title: 'Amount',
                description: 'Allows you to change the number of giveaway to be listed.'
            },
            sort: {
                title: 'Sort',
                miniNote: 'sorting by prize',
                description: 'Allows you to change the listing order.'
            }
        },
        az: '(A-Z) Alphabetic',
        za: '(Z-A) Alphabetic',
        noreq: 'No requirements.',
        reqs: 'Requirements'
    },
    team: {
        title: 'Say hello to heroes!',
        description: 'You can find everyone who works and contributes <br> to Giftix. Many thanks to our team. <3',
        linkcordLang: 'en',
        noWidget: 'No Widget',
        roles: {
            'Founder': 'Founder',
            'Co-Founder': 'Co-Founder',
            'Community-Manager': 'Community Manager',
            'Developer': 'Developer',
            'Designer': 'Designer',
            'Moderator': 'Moderator'
        }
    },
    create: {
        title: 'Create a giveaway!',
        description: 'Distribute gifts to your members by creating a giveaway!',
        inputs: {
            title: {
                title: 'Title',
                description: 'Enter your giveaway title'
            },
            description: {
                title: 'Description',
                description: 'Enter your giveaway description'
            },
            prize: {
                title: 'Prize',
                description: 'Enter your giveaway prize'
            },
            enddate: {
                title: 'End Date',
                description: 'Enter the date the giveaway will end'
            },
            winners: {
                title: 'Winners Count',
                description: 'Enter the winners count'
            },
            channel: {
                title: 'Channel',
                description: 'The giveaway message will be sent in this channel'
            },
            requirements: {
                title: 'Requirements',
                description: 'Once your members meet the conditions you set, they will be able to participate in the giveaway'
            },
            presentation: {
                title: 'Presentation',
                description: 'If you select "Private" your giveaway will not appear in Discover, but if you select "Public" your giveaway will appear in discovery.'
            },
        },
        button: "Submit",
        presentationPrivate: 'Private',
        presentationPublic: 'Public',
        requirementsDropdownText: 'You searching more options? Lookup the your connections.',
        presentationTippy: 'Important setting',
        unReachTippy: 'This is your right to open a giveaway. You have the right to open {MORE} more giveaways.',
        reachTippy: 'You have reached your giveaway limit.',
        reachedText: 'You\'ve reached the giveaway limit.<br /> <span class="text-amber-400/50 ml-1 hover:underline cursor-pointer"><i class="fad fa-diamond"></i> Boost</span> the server to more limit.'
    },
    user: {
        profile: {
            giveaways: {
                title: '{USER}\'s joined giveaways'
            }
        },
        dropdown: {
            profile: 'Profile',
            guilds: 'Guilds',
            connections: 'Connections',
            panel: 'Panel',
            redeem: 'Redeem',
            logout: 'Logout',
            _profile: 'View your profile!',
            _guilds: 'Select a server!',
            _connections: 'Manage your connections!',
            _panel: 'Very, very secret :)',
            _redeem: 'Use promo code!',
            _logout: 'Terminate the website session!'
        },
        connections: {
            title: 'Connections',
            description: 'You can manage social media accounts on Giftix here.',
            button: {
                logout: 'Click to logout',
                connect: 'Connect to <b>{PROVIDER}</b>',
                connectMini: 'Click to connect',
                logged: 'Logged in as <b>{ACCOUNT}</b>'
            }
        },
        redeem: {
            title: 'Redeem',
            description: 'You can redeem your code here!',
            inputPlaceholder: 'Your gift code here',
            button: 'Redeem',
            didntWork: 'The code didn\'t work?',
            success: '🎉 Congratulations! {COUNT} boosts added to your account!'
        }
    },
    dashboard: {
        selectServer: {
            title: 'Select Server',
            description: 'If your server is not here, <u>login</u> again!',
            serverUnderText: 'Click to select!',
            buttons: {
                manage: 'Manage',
                add: 'Setup Bot'
            }
        },
        stats: {
            total: 'Total Giveaways',
            active: 'Active Giveaways',
            activeTippy: 'Boost to increase the limit!',
            ended: 'Ended Giveaways',
            participants: 'Total Participants'
        },
        auditLog: {
            title: 'Audit Log',
            description: 'Audit log of changes made to Giftix on this server can be seen here.',
            table: {
                user: 'User',
                date: 'Date',
                action: 'Action',
                message: 'Message'
            },
            boost: 'Boosted the server.',
            unboost: 'Unboosted the server.',
            giveaway_delete: 'Deleted a giveaway.',
            giveaway_create: 'Started a giveaway.',
            giveaway_finish: 'Giveaway a finished.',
            giveaway_join: 'Joined the giveaway.',
            giveawaY_reroll: 'Rerolled a giveaway.'
        },
    },
};
