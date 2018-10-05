//showToast();

function showToast() {
    var toast = document.getElementById("toast");

    toast.className = "show";

    setTimeout(function(){
        toast.className = ""
    }, 3000);
}

function onChooseTreeClick()
{
    var operationType = $("#tree_visit_ID").val();
    if(operationType == 0)
        return window.open('tree0.html', '_self');

    if(operationType == 1)
        return window.open('tree1.html', '_self');

    //return window.open('tree0.html', '_self');
    
    //
}

! function(e) {
    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            },
            c = !0;
        try {
            e[r].call(o.exports, o, o.exports, n), c = !1
        } finally {
            c && delete t[r]
        }
        return o.l = !0, o.exports
    }
    var r = window.webpackJsonp;
    window.webpackJsonp = function(t, c, a) {
        for (var u, i, s, f = 0, l = []; f < t.length; f++) i = t[f], o[i] && l.push(o[i][0]), o[i] = 0;
        for (u in c) Object.prototype.hasOwnProperty.call(c, u) && (e[u] = c[u]);
        for (r && r(t, c, a); l.length;) l.shift()();
        if (a)
            for (f = 0; f < a.length; f++) s = n(n.s = a[f]);
        return s
    };
    var t = {},
        o = {
            5: 0
        };
    n.e = function(e) {
        function r() {
            u.onerror = u.onload = null, clearTimeout(i);
            var n = o[e];
            0 !== n && (n && n[1](new Error("Loading chunk " + e + " failed.")), o[e] = void 0)
        }
        var t = o[e];
        if (0 === t) return new Promise(function(e) {
            e()
        });
        if (t) return t[2];
        var c = new Promise(function(n, r) {
            t = o[e] = [n, r]
        });
        t[2] = c;
        var a = document.getElementsByTagName("head")[0],
            u = document.createElement("script");
        u.type = "text/javascript", u.charset = "utf-8", u.async = !0, u.timeout = 12e4, n.nc && u.setAttribute("nonce", n.nc), u.src = n.p + "" + ({
            0: "commons",
            1: "main.js",
            2: "bundles\\pages\\index.js",
            3: "bundles\\pages\\_error.js",
            4: "bundles\\pages\\_document.js"
        }[e] || e);
        var i = setTimeout(r, 12e4);
        return u.onerror = u.onload = r, a.appendChild(u), c
    }, n.m = e, n.c = t, n.d = function(e, r, t) {
        n.o(e, r) || Object.defineProperty(e, r, {
            configurable: !1,
            enumerable: !0,
            get: t
        })
    }, n.n = function(e) {
        var r = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(r, "a", r), r
    }, n.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, n.p = "/_next/08f7bbd1-48df-4c27-afc4-f28bce2365c9/webpack/", n.oe = function(e) {
        throw console.error(e), e
    }
}([]);
webpackJsonp([0], [function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(89),
        o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r);
    t.default = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, o.default)(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }()
}, function(e, t, n) {
    "use strict";
    e.exports = n(126)
}, function(e, t) {
    var n = e.exports = {
        version: "2.5.1"
    };
    "number" == typeof __e && (__e = n)
}, function(e, t, n) {
    var r = n(9),
        o = n(3),
        i = n(14),
        a = n(15),
        u = function(e, t, n) {
            var s, c, l, f = e & u.F,
                d = e & u.G,
                h = e & u.S,
                p = e & u.P,
                m = e & u.B,
                g = e & u.W,
                v = d ? o : o[t] || (o[t] = {}),
                y = v.prototype,
                _ = d ? r : h ? r[t] : (r[t] || {}).prototype;
            d && (n = t);
            for (s in n)(c = !f && _ && void 0 !== _[s]) && s in v || (l = c ? _[s] : n[s], v[s] = d && "function" != typeof _[s] ? n[s] : m && c ? i(l, r) : g && _[s] == l ? function(e) {
                var t = function(t, n, r) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n)
                        }
                        return new e(t, n, r)
                    }
                    return e.apply(this, arguments)
                };
                return t.prototype = e.prototype, t
            }(l) : p && "function" == typeof l ? i(Function.call, l) : l, p && ((v.virtual || (v.virtual = {}))[s] = l, e & u.R && y && !y[s] && a(y, s, l)))
        };
    u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u
}, function(e, t, n) {
    var r = n(54)("wks"),
        o = n(38),
        i = n(9).Symbol,
        a = "function" == typeof i;
    (e.exports = function(e) {
        return r[e] || (r[e] = a && i[e] || (a ? i : o)("Symbol." + e))
    }).store = r
}, function(e, t, n) {
    e.exports = {
        default: n(147),
        __esModule: !0
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(65),
        o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r);
    t.default = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== (void 0 === t ? "undefined" : (0, o.default)(t)) && "function" != typeof t ? e : t
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var o = n(158),
        i = r(o),
        a = n(162),
        u = r(a),
        s = n(65),
        c = r(s);
    t.default = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, c.default)(t)));
        e.prototype = (0, u.default)(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (i.default ? (0, i.default)(e, t) : e.__proto__ = t)
    }
}, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(e, t, n) {
    var r = n(11),
        o = n(74),
        i = n(51),
        a = Object.defineProperty;
    t.f = n(13) ? Object.defineProperty : function(e, t, n) {
        if (r(e), t = i(t, !0), r(n), o) try {
            return a(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function(e, t, n) {
    var r = n(12);
    e.exports = function(e) {
        if (!r(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function(e, t, n) {
    e.exports = !n(16)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, n) {
    var r = n(26);
    e.exports = function(e, t, n) {
        if (r(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                };
            case 2:
                return function(n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function(n, r, o) {
                    return e.call(t, n, r, o)
                }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}, function(e, t, n) {
    var r = n(10),
        o = n(27);
    e.exports = n(13) ? function(e, t, n) {
        return r.f(e, t, o(1, n))
    } : function(e, t, n) {
        return e[t] = n, e
    }
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(118)(!0);
    n(49)(String, "String", function(e) {
        this._t = String(e), this._i = 0
    }, function() {
        var e, t = this._t,
            n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = r(t, n), this._i += e.length, {
            value: e,
            done: !1
        })
    })
}, function(e, t, n) {
    e.exports = n(105)
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.eligibleTitles = t.titles = t.categoryColorScale = t.totalPointsFromMilestoneMap = t.categoryPointsFromMilestoneMap = t.categoryIds = t.trackIds = t.tracks = t.maxLevel = t.pointsToLevels = t.milestoneToPoints = t.milestones = void 0;
    var o = n(104),
        i = r(o),
        a = n(106),
        u = r(a),
        s = n(34),
        c = r(s),
        l = n(71),
        f = r(l),
        d = n(72),
        h = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }(d),
        p = (t.milestones = [0, 1, 2, 3, 4, 5], t.milestoneToPoints = function(e) {
            switch (e) {
                case 0:
                    return 0;
                case 1:
                    return 1;
                case 2:
                    return 3;
                case 3:
                    return 6;
                case 4:
                    return 12;
                case 5:
                    return 20;
                default:
                    return 0
            }
        }),
        m = (t.pointsToLevels = {
            0: "1.1",
            5: "1.2",
            11: "1.3",
            17: "2.1",
            23: "2.2",
            29: "2.3",
            36: "3.1",
            43: "3.2",
            50: "3.3",
            58: "4.1",
            66: "4.2",
            74: "4.3",
            90: "5.1",
            110: "5.2",
            135: "5.3"
        }, t.maxLevel = 135, t.tracks = {
            MOBILE: {
                displayName: "Mobile",
                category: "A",
                description: "Develops expertise in native mobile platform engineering, such as iOS or Android",
                milestones: [{
                    summary: "Works effectively within established iOS or Android architectures, following current best practices",
                    signals: ["Delivers features requiring simple local modifications", "Adds simple actions that call server endpoints", "Reuses existing components appropriately"],
                    examples: ["Added existing button to a different iOS surface", "Add follow button for publications on Android", "Fetched and displayed a new stream, using existing stream item styles"]
                }, {
                    summary: "Develops new instances of existing architecture, or minor improvements to existing architecture",
                    signals: ["Defines new useful and appropriate proto-generated objects", "Creates simple new activities on Android", "Migrates code from old patterns to new patterns"],
                    examples: ["Upgraded SDWebImage to a new major version", "Added support for rendering a new type of stream item", "Prototyped a simple new feature quickly"]
                }, {
                    summary: "Designs major new features and demonstrates a nuanced understanding of mobile platform constraints",
                    signals: ["Implements complex features with a large product surface area", "Works effectively with  Android reactive programming framework", "Adds support for new iOS features after a major iOS version upgrade"],
                    examples: ["Designed iOS caching strategy for offline reading", "Built series reader on Android", "Informed the team about recent best practice changes and deprecations"]
                }, {
                    summary: "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
                    signals: ["Pioneers architecture migration strategies that reduce programmer burden", "Fixes subtle memory management issues", "Implements interactive dismissals that bring delight"],
                    examples: ["Upgraded CocoaPods to a new major version", "Designed architecture for fetching and rendering stream items", "Migrated Android persistance layer to reactive programming"]
                }, {
                    summary: "Is an industry-leading expert in mobile engineering or sets strategic mobile direction for an eng team",
                    signals: ["Defines long-term goals and ensures active projects are in service of them", "Designs and builds innovative, industry-leading UI interactions", "Invents new techniques to responsibly stretch limits of the Android platform"],
                    examples: ["Defined and drove complete migration plan to Swift or Kotlin", "Implemented Android recycler views before platform support existed", "Pioneered application-level abstractions for multi-app environment"]
                }]
            },
            WEB_CLIENT: {
                displayName: "Web client",
                category: "A",
                description: "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript",
                milestones: [{
                    summary: "Works effectively within established web client architectures, following current best practices",
                    signals: ["Makes minor modifications to existing screens", "Fixes simple design quality issues", "Uses CSS appropriately, following style guide"],
                    examples: ["Implemented sticky footer on the post page", "Hooked up the action to dismiss a post from a stream", "Built PaymentHistory screen using ResponseScreen"]
                }, {
                    summary: "Develops new instances of existing architecture, or minor improvements to existing architecture",
                    signals: ["Makes sensible abstractions based on template and code patterns", "Specs and builds interactive components independently", "Prototypes simple new features quickly"],
                    examples: ["Built credit card input component", "Created shared buttons template", "Built modal system"]
                }, {
                    summary: "Designs major new features and demonstrates a nuanced understanding of browser constraints",
                    signals: ["Provides useful design feedback and suggests feasible alternatives", "Performs systemic tasks to significantly minimise bundle size", "Acts a caretaker for all of web client code"],
                    examples: ["Designed font loading strategy for Medium", "Researched utility of service workers for Medium", "Designed and implemented ResponseScreen"]
                }, {
                    summary: "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
                    signals: ["Pioneers architecture migrations that reduce programmer burden", "Implements complex UI transitions that bring delight", "Makes architectural decisions that eliminate entire classes of bugs"],
                    examples: ["Designed Medium's post morpher and delta system", "Implemented Medium's scrolling text over image blur", "Designed and pioneered proto-based model storage"]
                }, {
                    summary: "Is an industry-leading expert in web client or sets strategic web client direction for an eng team",
                    signals: ["Invents new techniques to innovate and overcome browser constraints", "Identifies and solved systemic problems with current architecture", "Defines a long-term vision for web client and ensures projects are in service of it"],
                    examples: ["Invented CSS in JS", "Defined and drove migration strategy to Lite", "Implemented unidirectional data flow to completion"]
                }]
            },
            FOUNDATIONS: {
                displayName: "Foundations",
                category: "C",
                description: "Develops expertise in foundational systems, such as deployments, pipelines, databases and machine learning",
                milestones: [{
                    summary: "Works effectively within established structures, following current best practices",
                    signals: ["Writes thorough postmortems for service outages", "Makes simple configuration changes to services", "Performs backfills safely and effectively, without causing pages"],
                    examples: ["Made safe and effective Ansible changes", "Implemented new ETL pipelines based on existing ones", "Resolved out of disk errors independently"]
                }, {
                    summary: "Develops new instances of existing architecture, or minor improvements to existing architecture",
                    signals: ["Made minor version upgrades to technologies", "Builds machine learning jobs within the ML framework", "Triages service issues correctly and independently"],
                    examples: ["Upgraded NodeJS from 8.0 to 8.1.1", "Built custom packages for RPMs", "Improved ETL efficiency by improving Dynamo to S3 loading"]
                }, {
                    summary: "Designs standalone systems of moderate complexity, or major new features in existing systems",
                    signals: ["Acts as primary maintainer for existing critical systems", "Designs moderately complex systems", "Makes major version upgrades to libraries"],
                    examples: ["Designed Ansible configuration management", "Built Medium's realtime stats pipeline", "Designed flexible framework for writing machine learning jobs"]
                }, {
                    summary: "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
                    signals: ["Designs complex projects that encompass multiple systems and technologies", "Demonstrates deep knowledge of foundational systems", "Introduces new databases and technologies to meet underserved needs"],
                    examples: ["Designed and built BBFD", "Designed AWS configuration management", "Introduced Kinesis and pioneered streaming events pipeline"]
                }, {
                    summary: "Is an industry-leading expert in foundational engineering or sets strategic foundational direction for an eng team",
                    signals: ["Designs transformational projects in service of long-term goals", "Defines the strategic vision for foundational work and supporting technologies", "Invents industry-leading techniques to solve complex problems"],
                    examples: ["Invented a novel ML technique that advanced the state of the art", "Defined and developed Medium's continuous delivery strategy", "Developed and implemented HA strategy"]
                }]
            },
            SERVERS: {
                displayName: "Servers",
                category: "C",
                description: "Develops expertise in server side engineering, using technologies such as Go, NodeJS, or Scala",
                milestones: [{
                    summary: "Works effectively within established server side frameworks, following current best practices",
                    signals: ["Adds NodeJS endpoints using layers architecture", "Adds golang endpoints using Gotham architecture", "Makes minor server changes to support client needs"],
                    examples: ["Added IFTTT trigger for new bookmark to medium2", "Added delete audio route to Buggle", "Queried a Dynamo LSI appropriately"]
                }, {
                    summary: "Develops new instances of existing architecture, or minor improvements to existing architecture",
                    signals: ["Assesses correctness and utility of existing code and avoids blind copy-pasting", "Generalizes code when appropriate", "Determines data needs from product requirements"],
                    examples: ["Identified need for new index on Dynamo", "Acted as caretaker for routes protos", "Updated Facebook API version and codebase dependencies"]
                }, {
                    summary: "Designs standalone systems of moderate complexity, or major new features in existing systems",
                    signals: ["Acts as primary maintainer for existing critical systems", "Integrates third party services effectively", "Writes playbooks for new service maintenance"],
                    examples: ["Implemented Google Auth login to Medium", "Implemented payments integration with Stripe", "Built Textshots server"]
                }, {
                    summary: "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
                    signals: ["Delivers complex systems that achieve their goals", "Avoids subtle architectural mistakes when considering new systems", "Makes appropriate buy vs build choices"],
                    examples: ["Designed Medium's ranked feed architecture", "Designed custom domains architecture", "Created Gotham framework for creating Go services"]
                }, {
                    summary: "Is an industry-leading expert in server side engineering or sets strategic server side direction for an eng team",
                    signals: ["Designs transformational projects of significant complexity and scope", "Makes decisions that have positive, long term, wide ranging consequences", "Identifies and solves systemic problems with current architecture"],
                    examples: ["Researched, vetted, and selected Go as Medium's statically typed language", "Defined microservices architecture and medium2 migration plan", "Defined and implemented proprietary IP core to the company's success"]
                }]
            },
            PROJECT_MANAGEMENT: {
                displayName: "Project management",
                category: "B",
                description: "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
                milestones: [{
                    summary: "Effectively delivers individual tasks",
                    signals: ["Estimates small tasks accurately", "Delivers tightly-scoped projects efficiently", "Writes effective technical specs outlining approach"],
                    examples: ["Wrote the technical spec for featured post images", "Delivered stream item support for email digests", "Delivered payment history dashboard"]
                }, {
                    summary: "Effectively delivers small personal projects",
                    signals: ["Performs research and considers alternative approaches", "Balances pragmatism and polish appropriately", "Defines and hits interim milestones"],
                    examples: ["Delivered promo editor", "Delivered audio uploading for web client", "Executed the recommends to claps backfill"]
                }, {
                    summary: "Effectively delivers projects through a small team",
                    signals: ["Delegates tasks to others appropriately", "Integrates business needs into project planning", "Chooses appropriate project management strategy based on context"],
                    examples: ["Ran project retro to assess improvement opportunities", "Completed launch checklist unprompted for well controlled rollout", "Facilitated project kickoff meeting to get buy-in"]
                }, {
                    summary: "Effectively delivers projects through a large team, or with a significant amount of stakeholders or complexity",
                    signals: ["Finds ways to deliver requested scope faster, and prioritizes backlog", "Manages dependencies on other projects and teams", "Leverages recognition of repeated project patterns"],
                    examples: ["Oversaw technical delivery of Hightower", "Managed infrastructure migration to VPC", "Involved marketing, legal, and appropriate functions at project start"]
                }, {
                    summary: "Manages major company pushes delivered by multiple teams",
                    signals: ["Considers external constraints and business objectives when planning", "Leads teams of teams, and coordinates effective cross-functional collaboration", "Owns a key company metric"],
                    examples: ["Managed technical migration to SOA", "Lead technical delivery of 10/7", "Delivered multi-month engineering project on time"]
                }]
            },
            COMMUNICATION: {
                displayName: "Communication",
                category: "B",
                description: "Shares the right amount of information with the right people, at the right time, and listens effectively",
                milestones: [{
                    summary: "Communicates effectively to close stakeholders when called upon, and incorporates constructive feedback",
                    signals: ["Communicates project status clearly and effectively", "Collaborates with others with empathy", "Asks for help at the appropriate juncture"],
                    examples: ["Updated The Watch before running a backfill", "Updated project status changes in Asana promptly", "Gave thoughtful check-in and check-out comments"]
                }, {
                    summary: "Communicates with the wider team appropriately, focusing on timeliness and good quality conversations",
                    signals: ["Practises active listening and suspension of attention", "Ensures stakeholders are aware of current blockers", "Chooses the appropriate tools for accurate and timely communication"],
                    examples: ["Received and integrated critical feedback positively", "Created cross-team Slack channel for payments work", "Spoke to domain experts before writing spec"]
                }, {
                    summary: "Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders",
                    signals: ["Resolves communication difficulties between others", "Anticipates and shares schedule deviations in plenty of time", "Manages project stakeholder expectations effectively"],
                    examples: ["Directed team response effectively during outages", "Gave a substantial Eng All Hands presentation on React", "Gave notice of upcoming related work in Eng Briefing"]
                }, {
                    summary: "Communicates complex ideas skillfully and with nuance, and establishes alignment within the wider organization",
                    signals: ["Communicates project risk and tradeoffs skillfully and with nuance", "Contextualizes and clarifies ambiguous direction and strategy for others", "Negotiates resourcing compromises with other teams"],
                    examples: ["Lead off-site workshop on interviewing", "Wrote Medium's growth framework and rationale", "Aligned the entire organization around claps"]
                }, {
                    summary: "Influences outcomes at the highest level, moves beyond mere broadcasting, and sets best practices for others",
                    signals: ["Defines processes for clear communication for the entire team", "Shares the right amount of information with the right people, at the right time", "Develops and delivers plans to execs, the board, and outside investors"],
                    examples: ["Organized half year check-in company offsite", "Created the communication plan for a large organizational change", "Presented to the board about key company metrics and projects"]
                }]
            },
            CRAFT: {
                displayName: "Craft",
                category: "B",
                description: "Embodies and promotes practices to ensure excellent quality products and services",
                milestones: [{
                    summary: "Delivers consistently good quality work",
                    signals: ["Tests new code thoroughly, both locally, and in production once shipped", "Writes tests for every new feature and bug fix", "Writes clear comments and documentation"],
                    examples: ["Caught a bug on Hatch before it went live", "Landed non-trivial PR with no caretaker comments", "Wrote hermetic tests for the happy and sad cases"]
                }, {
                    summary: "Increases the robustness and reliability of codebases, and devotes time to polishing products and systems",
                    signals: ["Refactors existing code to make it more testable", "Adds tests for uncovered areas", "Deletes unnecessary code and deprecates proactively when safe to do so"],
                    examples: ["Requested tests for a PR when acting as reviewer", "Reduced the number of zelda fitzgerald exceptions", "Fixed a TODO for someone else in the codebase"]
                }, {
                    summary: "Improves others' ability to deliver great quality work",
                    signals: ["Implements systems that enable better testing", "Gives thoughtful code reviews as a domain expert", "Adds tooling to improve code quality"],
                    examples: ["Improved PRB to run the same volume of tests faster", "Simplified hermetic test data modification", "Created fixture system for visual quality"]
                }, {
                    summary: "Advocates for and models great quality with proactive actions, and tackles difficult and subtle system issues",
                    signals: ["Builds systems so as to eliminate entire classes of programmer error", "Focuses the team on quality with regular reminders", "Coordinates Watch priorities and projects"],
                    examples: ["Added code coverage reporting to iOS CI pipeline", "Iterated repeatedly to develop Medium's underlines solution", "Defined and oversaw plan for closing Heartbleed vulnerability"]
                }, {
                    summary: "Enables and encourages the entire organization to make quality a central part of the development process",
                    signals: ["Defines policies for the engineering org that encourage quality work", "Identifies and eliminates single points of failure throughout the organization", "Secures time and resources from execs to support great quality"],
                    examples: ["Negotiated resources for Fix-It week with exec team", "Instituted and ensured success of a 20% time policy", "Started The Watch"]
                }]
            },
            INITIATIVE: {
                displayName: "Initiative",
                category: "B",
                description: "Challenges the status quo and effects positive organizational change outside of mandated work",
                milestones: [{
                    summary: "Identifies opportunities for organizational change or product improvements",
                    signals: ["Writes Hatch posts about improvement opportunities", "Raises meaningful tensions in tactical meetings", "Asks leadership team probing questions at FAM"],
                    examples: ["Wrote about problems with TTR on Hatch", "Wrote about content policy problems on Hatch", "Reported a site issue in Github"]
                }, {
                    summary: "Causes change to positively impact a few individuals or minor improvement to an existing product or service",
                    signals: ["Picks bugs off the backlog proactively when blocked elsewhere", "Makes design quality improvements unprompted", "Takes on trust and safety tasks proactively when blocked elsewhere"],
                    examples: ["Advocated on own behalf for a change in role", "Implemented flow typing for promises", "Audited web client performance in Chrome and proposed fixes"]
                }, {
                    summary: "Causes change to positively impact an entire team or instigates a minor feature or service",
                    signals: ["Demonstrates concepts proactively with prototypes", "Fixes complicated bugs outside of regular domain", "Takes ownership of systems that nobody owns or wants"],
                    examples: ["Defined style guide to resolve style arguments", "Proposed and implemented at-mentions prototype", "Implemented video for Android independently, unprompted"]
                }, {
                    summary: "Effects change that has a substantial positive impact on the engineering organization or a major product impact",
                    signals: ["Champions and pioneers new technologies to solve new classes of problem", "Exemplifies grit and determination in the face of persistent obstacles", "Instigates major new features, services, or architectures"],
                    examples: ["Created the interviewing rubric and booklet", "Implemented and secured support for native login", "Migrated medium2 to mono repo and bazel"]
                }, {
                    summary: "Effects change that has a substantial positive impact on the whole company",
                    signals: ["Creates a new function to solve systemic issues", "Galvanizes the entire company and garners buy in for a new strategy", "Changes complex organizational processes"],
                    examples: ["Migrated the organization from Holacracy", "Built Medium Android prototype and convinced execs to fund it", "Convinced leadership and engineering org to move to Medium Lite architecture"]
                }]
            },
            CAREER_DEVELOPMENT: {
                displayName: "Career development",
                category: "C",
                description: "Provides strategic support to engineers to help them build the career they want",
                milestones: [{
                    summary: "Gives insight into opportunities and helps identify individuals' strengths and weaknesses",
                    signals: ["Advocates on behalf and in defense of a group member", "Shares opportunities for improvements and recognises achievements", "Explains appropriate available industry paths"],
                    examples: ["Collected and delivered feedback", "Discussed career options and areas of interest informally", "Hosted a Floodgate Academy intern"]
                }, {
                    summary: "Formally supports and advocates for one person and provides tools to help them solve career problems",
                    signals: ["Ensure a group member has an appropriate role on their team", "Offers effective career advice to group members, without being prescriptive", "Creates space for people to talk through challenges"],
                    examples: ["Set up and attended regular, constructive 1:1s", "Provided coaching on how to have difficult conversations", "Taught group members the GROW model"]
                }, {
                    summary: "Inspires and retains a small group of people and actively pushes them to stretch themselves",
                    signals: ["Discusses paths, and creates plans for personal and professional growth", "Advocates to align people with appropriate roles within organization", "Works with team leads to elevate emerging leaders"],
                    examples: ["Reviewed individual group member progression every 6 weeks", "Suggested appropriate group member for Tech Lead position", "Arranged a requested switch of discipline for a group member"]
                }, {
                    summary: "Manages interactions and processes between groups, promoting best practices and setting a positive example",
                    signals: ["Manages team transitions smoothly, respecting team and individual needs", "Develops best practices for conflict resolution", "Ensures all group members' roles are meeting their career needs"],
                    examples: ["Completed training on situational leadership", "Built a resourcing plan based on company, team, and individual goals", "Prevented regretted attrition with intentional, targeted intervention"]
                }, {
                    summary: "Supports the development of a signficant part of the engineering org, and widely viewed as a trusted advisor",
                    signals: ["Supports and develops senior leaders", "Identified leadership training opportunities for senior leadership", "Pushes everyone to be as good as they can be, with empathy"],
                    examples: ["Provided coaching to group leads", "Devised Pathwise curriculum for group leads", "Advocated to execs for engineer development resources and programs"]
                }]
            },
            ORG_DESIGN: {
                displayName: "Org design",
                category: "C",
                description: "Defines processes and structures that enables the strong growth and execution of a diverse eng organization",
                milestones: [{
                    summary: "Respects and participates in processes, giving meaningful feedback to help the organization improve",
                    signals: ["Reflects on meetings that leave them inspired or frustrated", "Teaches others about existing processes", "Actively participates and makes contributions within organizational processes"],
                    examples: ["Facilitated effective tactical meeting with empathy", "Explained tactical meeting format to a new hire", "Provided feedback on sprint planning meeting"]
                }, {
                    summary: "Identifies opportunities to improve existing processes and makes changes that positively affect the local team",
                    signals: ["Defines meeting structure and cadence that meets team needs", "Engages in organizational systems thinking", "Advocates for improved diversity and inclusion, and proposes ideas to help"],
                    examples: ["Defined Frankenmeeting structure for small team", "Improved Watch on-call rotation scheduling", "Defined standard channels for inter-team communication"]
                }, {
                    summary: "Develops processes to solve ongoing organizational problems",
                    signals: ["Creates programs that meaningfully improve organizational diversity", "Solves long-standing organizational problems", "Reallocates resources to meet organizational needs"],
                    examples: ["Developed baseline team templates for consistency", "Created bug-rotation program to address ongoing quality issues", "Defined Guilds manifesto and charter"]
                }, {
                    summary: "Thinks deeply about organizational issues and identifies hidden dynamics that contribute to them",
                    signals: ["Evaluates incentive structures and their effect on execution", "Analyzes existing processes for bias and shortfall", "Ties abstract concerns to concrete organizational actions or norms"],
                    examples: ["Connected mobile recruiting difficulties to focus on excellence", "Raised leadership level change discrepancies", "Analyzed the hiring rubric for false negative potential"]
                }, {
                    summary: "Leads initiatives to address issues stemming from hidden dynamics and company norms",
                    signals: ["Builds programs to train leadership in desired skills", "Creates new structures that provide unique growth opportunities", "Leads planning and communication for reorgs"],
                    examples: ["Lead efforts to increase number of mobile engineers", "Directed resources to meaningfully improve diversity at all levels", "Built the growth framework rubric"]
                }]
            },
            WELLBEING: {
                displayName: "Wellbeing",
                category: "C",
                description: "Supports the emotional well-being of group members in difficult times, and celebrates their successes",
                milestones: [{
                    summary: "Uses tools and processes to help ensure colleagues are healthy and happy",
                    signals: ["Keeps confidences unless legally or morally obliged to do otherwise", "Applies the reasonable person principle to others", "Avoids blame and focuses on positive change"],
                    examples: ["Ensured group members were taking enough vacation", "Put themself in another's shoes to understand their perspective", "Checked in with colleague showing signs of burnout"]
                }, {
                    summary: "Creates a positive, supportive, engaging team environment for group members",
                    signals: ["Sheds light on other experiences to build empathy and compassion", "Validates ongoing work and sustains motivation", "Proposes solutions when teams get bogged down or lose momentum"],
                    examples: ["Coordinated a small celebration for a project launch", "Connected tedious A|B testing project with overall company goals", "Noted a team without a recent win and suggested some easy quick wins"]
                }, {
                    summary: "Manages expectations across peers, leads in the org, promotes calm, and prevents consensus building",
                    signals: ["Trains group members to separate stimulus from response", "Maintains a pulse on individual and team morale", "Helps group members approach problems with curiosity"],
                    examples: ["Completed training on transference and counter transference", "Completed training on compromise and negotiation techniques", "Reframed a problem as a challenge, instead of a barrier, when appropriate"]
                }, {
                    summary: "Advocates for the needs of teams and group members, and proactively works to calm the organization",
                    signals: ["Ensures team environments are safe and inclusive, proactively", "Grounds group member anxieties in reality", "Tracks team retention actively and proposes solutions to strengthen it"],
                    examples: ["Relieved org tension around product direction by providing extra context", "Encouraged group members to focus on what they can control", "Guided people through complex organizational change"]
                }, {
                    summary: "Manages narratives, channels negativity into inspiration and motivation, and protects the entire team",
                    signals: ["Recognizes and points out narratives when appropriate", "Works to reshape narratives from victimization to ownership", "Increases the psychological safety of the entire team"],
                    examples: ["Converted group member from a problem haver to a problem solver", "Challenged false narrative and redirected to compassion and empathy", "Cultivated and championed a culture of empathy within the entire team"]
                }]
            },
            ACCOMPLISHMENT: {
                displayName: "Accomplishment",
                category: "C",
                description: "Inspires day to day excellence, maximises potential and effectively resolves performance issues with compassion",
                milestones: [{
                    summary: "Helps individuals identify blockers and helps them identify next steps for resolution",
                    signals: ["Notices when someone is stuck and reaches out", "Helps others break down problems into feasible, tangible next steps", "Talks through problems non-judgmentally"],
                    examples: ["Completed training on diagnosing problems", "Unblocked a group member", "Reinforces and affirms positive feedback for good work"]
                }, {
                    summary: "Helps individuals resolve difficult performance issues, with insight, compassion, and skill",
                    signals: ["Gathers context outside the immediate problem", "Recognizes issues within local environment and suggests change", "Works to encourage ownership of actions and responsibilities"],
                    examples: ["Completed training on decision making", "Convinced a group member to solve a problem directly, rather than doing it for them", "Gave honest feedback about poor performance, with compassion"]
                }, {
                    summary: "Intervenes in long-standing performance issues with targeted behavior change or performance plans",
                    signals: ["Aggregates signals of poor performance and creates process for improvement", "Investigates motivation and externalities for consistent poor performance", "Puts together comprehensive, achievable performance plans"],
                    examples: ["Worked with group member to address persistent communication failures", "Arranged a transfer to another team, resulting in improved performance", "Managed group member closely to maximise chances of PIP success"]
                }, {
                    summary: "Mediates escalated situations, empowers underperforming teams, and resolves conflict",
                    signals: ["Recognizes heightened situations and toxic or aggressive interactions", "Inserts themself into conflict where appropriate to calm and mediate", "Encourages open dialog and builds trust between parties in conflict"],
                    examples: ["Empowered a team to drive forward amidst uncertainty", "Protected team from externalities so they could focus on goals", "Mediated sit-down between team members to address tension"]
                }, {
                    summary: "Resolves complex organizational dysfunction, or persistent conflict at senior levels",
                    signals: ["Takes control of dysfunctional teams to organise chaos", "Repairs broken team dynamics and builds harmony", "Presides over a well-oiled team of teams"],
                    examples: ["Turned around the performance of a problematic team", "De-escalated serious tensions between teams", "Rebuilt trust between senior team leads"]
                }]
            },
            MENTORSHIP: {
                displayName: "Mentorship",
                category: "D",
                description: "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
                milestones: [{
                    summary: "Informally mentors individuals in an ad-hoc way, supports new hires, and conveys institutional knowledge",
                    signals: ["Makes themself available for informal support and advice", "Acts as sounding board for peers and more junior members", "Provides sound advice when asked"],
                    examples: ["Acted as an onboarding buddy", "Paired with an engineer to help them with an unfamiliar area", "Helped a colleague understand their feelings"]
                }, {
                    summary: "Mentors people proactively, and guides people to realizations rather than providing the answer",
                    signals: ["Takes time to explain concepts and best practices", "Asks questions to illuminate concepts, rather than stating them", "Allows others to lead efforts when it will help their development"],
                    examples: ["Shared interesting article with a team member to help with their growth", "Offered unprompted feedback to help growth, with empathy", "Lead from behind to support someone new to a leadership role"]
                }, {
                    summary: "Teaches small groups of engineers and contributes to Medium's shared knowledge base",
                    signals: ["Avoids siloing information when it can be usefully shared with others", "Works to increase the bus factor of systems", "Finds tools that work best for a team member's personality"],
                    examples: ["Gave a brown bag presentation on payments", "Wrote Hatch post on avoiding RDS backfill issues", "Wrote Medium-U content module"]
                }, {
                    summary: "Encourages people to mentor each other, and creates ways for them to do so",
                    signals: ["Defines an entire curriculum for a discipline", "Draws positive attention to well-modeled mentor and teaching behaviours", "Creates brown bag series and lines up speakers"],
                    examples: ["Created and lead Medium's Women in Eng group", "Organized an Eng All Hands with an outside speaker", "Designed and taught web client guild curriculum"]
                }, {
                    summary: "Instills and promotes a culture of learning and development within the team",
                    signals: ["Sets incentive structures to recognise and reward mentorship", "Empowers team members to develop themselves", "Role models productive and healthy mentor relationships"],
                    examples: ["Instituted the professional education budget for engineers", "Mentored mentors", "Started the eng advisor program and lined up external mentors"]
                }]
            },
            EVANGELISM: {
                displayName: "Evangelism",
                category: "D",
                description: "Promotes Medium to the outside world and establishes it as an attractive and thoughtful place to work",
                milestones: [{
                    summary: "Represents Medium well externally, and influences individuals positively",
                    signals: ["Shares personal and organizational successes with their network", "Attends Medium-hosted events and talks with guests", "Communicates genuine and honest excitement about their work externally"],
                    examples: ["Shared a Medium product launch post on Facebook", "Acted as a guide for a non-friend visitor to the office", "Supported PR efforts by giving a quote or having a photo taken"]
                }, {
                    summary: "Participates more centrally in small events, and takes simple actions that positively influence groups of people",
                    signals: ["Takes meaningful action to introduce people to Medium", "Joined public Slack group and represented Medium appropriately, and well", "Organizes positive small- or medium-sized events that bring people to Medium"],
                    examples: ["Volunteered as a helper for CODE2040 writing workshop", "Organized a short tour of the office by college students", "Talked at a Women Who Code event hosted at Medium"]
                }, {
                    summary: "Works hard to positively influence large groups of people on their views of Medium",
                    signals: ["Mentors or participates in a high visibility way in an external organization", "Builds fruitful partnerships with external organizations", "Writes blog posts about Medium that receive moderate traffic"],
                    examples: ["Represented Medium on a panel at a conference of industry experts", "Established close ties with Creative Commons", "Built a durable, long-standing relationship with Code2040"]
                }, {
                    summary: "Establishes Medium as an great, innovative company and workplace to the whole industry",
                    signals: ["Establishes themself as an industry thought leader who attracts talent", "Publishes material about Medium's organizational or technical innovations", "Leverages significant following to evangelise Medium"],
                    examples: ["Published a paper on Medium technology in a peer-reviewed journal", "Authored joint-press release with EFF on DNT", "Published “Why Content Editable Is Terrible” on the Medium engineering blog"]
                }, {
                    summary: "Introduces Medium in a positive light to a wider audience outside the industry",
                    signals: ["Delivers key messages to broad, mainstream audiences", "Influences people with large audiences to talk about Medium positively", "Drives recognition and adoption of Medium in significant numbers"],
                    examples: ["Published or interviewed in a mainstream newspaper or website outside tech", "Keynoted a conference with international attention", "Represented Medium in national televised media"]
                }]
            },
            RECRUITING: {
                displayName: "Recruiting",
                category: "D",
                description: "Strengthens Medium's team by bringing in excellent staff members",
                milestones: [{
                    summary: "Brings new candidates into the pipeline and understands how to evaluate candidates at Medium",
                    signals: ["Reviews existing network for hiring leads regularly", "Shadows interviews to gain familiarity with process", "Reviews current job postings regularly"],
                    examples: ["Completed interview calibration", "Set up casual sessions to practice asking questions", "Referred appropriate individuals for open positions"]
                }, {
                    summary: "Interviews regularly, helps the team make meaningful hiring decisions, and helps build a diverse pipeline",
                    signals: ["Uses interview rubric to provide clear, objective feedback on candidates", "Interviews candidates with empathy and treats them all with equal respect", "Researches approaches for sourcing candidates and diversifying hiring"],
                    examples: ["Added observable evidence for every rating", "Started a monthly brunch for candidates to meet Medium employees", "Tested a new service for quality and diversity of candidates"]
                }, {
                    summary: "Maintains and strengthens the integrity of the current process, and regularly brings in great candidates",
                    signals: ["Teaches new interviewers how to interview with empathy", "Models great interview technique and feedback when shadowed", "Reverse shadows trainees and helps calibrate their feedback"],
                    examples: ["Wrote new interview question which meets our question quality criteria", "Brought candidates into our pipeline proactively, with a high conversion rate", "Proposed useful, tangible improvements to the interview process"]
                }, {
                    summary: "Actively contributes to and leads hiring decisions, and goes to great lengths to source great candidates",
                    signals: ["Documents subtle cues in interviews that indicate values alignment", "Makes hiring decisions, resolving discrepancies between conflicting reports", "Top-grades candidates and teases out character traits"],
                    examples: ["Planned engineering summit on interview process and training", "Organized and lead Medium's presence at a recruitment fair", "Started CODE2040 internship program"]
                }, {
                    summary: "Sets recruitment strategy, invests in long-term relationships for critical roles, and recruits at scale",
                    signals: ["Sets the tone, policy and goals around building a diverse, high-quality team", "Identifies and brings in promising acquisitions", "Tracks industry activity, identifying opportunities for critical roles"],
                    examples: ["Talked with a senior candidate over many months to fill a critical role", "Organized efforts around convincing acquired engineers to join and stay", "Set goals, then tracked and reported metrics on team demographics over time"]
                }]
            },
            COMMUNITY: {
                displayName: "Community",
                category: "D",
                description: "Builds community internally, gives of themself to the team, and champions and extols company values",
                milestones: [{
                    summary: "Is available and present on current teams, and works to contribute positively to company culture",
                    signals: ["Participates in team activities and offsites", "Treats colleagues and clients with respect", "Joins groups or committees outside regular duties"],
                    examples: ["Joined and actively participated in the web client guild", "Brought a small gift back from vacation for the team", "Wrote entertaining and informative Prod Ops writeups on Hatch"]
                }, {
                    summary: "Steps up, builds connectedness, and takes concrete actions to promote an inclusive culture",
                    signals: ["Makes space for others to participate", "Collaborates with other engineers outside direct responsibilities", "Finds ways to ramp up and engage new hires quickly"],
                    examples: ["Created onboarding bingo", "Brought shy and introverted people into a dominant conversation", "Volunteered as secretary for a team"]
                }, {
                    summary: "Contributes to improving team relatedness, and helps build a culture of lending support",
                    signals: ["Takes on additional Watch shifts at short notice", "Pitches in to help other teams hit deadlines, without missing own deadlines", "Uses position to raise difficult issues on someone's behalf"],
                    examples: ["Lead Watch cycles with little support while still contributing to projects", "Started and drove the LGBTQIA ERG", "Stayed positive and improved team morale during period after layoffs"]
                }, {
                    summary: "Exemplifies selflessness for the team without compromising responsibilities, and lifts everyone up",
                    signals: ["Goes above and beyond on the Watch, serving the team without complaint", "Implements concrete programs to signficantly improve team inclusivity", "Takes on large amounts of tedious grunt work for the team without being asked"],
                    examples: ["Devoted large amount of time to helping outside direct responsibilities", "Refactored hundreds of legacy Shepherd nodes", "Acted as sole maintainer of Boxen for years"]
                }, {
                    summary: "Lives the company values, guards positive culture, and defines policies that support relatedness between teams",
                    signals: ["Brings separate teams together to build relatedness", "Holds individuals, teams, and leadership accountable to Medium's values", "Sets the tone, policy, and goals around maintaining an inclusive company"],
                    examples: ["Organized wine and olive tasting offsite to Napa for the whole engineering org", "Devised, delivered and acted on findings from an engineer happiness survey", "Challenged and corrected exclusionary behaviour or policies"]
                }]
            }
        }),
        g = t.trackIds = (0, f.default)(m),
        v = t.categoryIds = g.reduce(function(e, t) {
            return e.add(m[t].category), e
        }, new c.default),
        y = (t.categoryPointsFromMilestoneMap = function(e) {
            var t = new u.default;
            return g.forEach(function(n) {
                var r = e[n],
                    o = m[n].category,
                    i = t.get(o) || 0;
                t.set(o, i + p(r))
            }), (0, i.default)(v.values()).map(function(e) {
                t.get(e);
                return {
                    categoryId: e,
                    points: t.get(e) || 0
                }
            })
        }, t.totalPointsFromMilestoneMap = function(e) {
            return g.map(function(t) {
                return p(e[t])
            }).reduce(function(e, t) {
                return e + t
            }, 0)
        }),
        _ = (t.categoryColorScale = h.scaleOrdinal().domain(v).range(["#00abc2", "#428af6", "#e1439f", "#e54552"]), t.titles = [{
            label: "Engineer I",
            minPoints: 0,
            maxPoints: 16
        }, {
            label: "Engineer II",
            minPoints: 17,
            maxPoints: 35
        }, {
            label: "Senior Engineer",
            minPoints: 36,
            maxPoints: 57
        }, {
            label: "Group Lead",
            minPoints: 36,
            maxPoints: 57
        }, {
            label: "Staff Engineer",
            minPoints: 58,
            maxPoints: 89
        }, {
            label: "Senior Group Lead",
            minPoints: 58,
            maxPoints: 89
        }, {
            label: "Principal Engineer",
            minPoints: 90
        }, {
            label: "Director of Engineering",
            minPoints: 90
        }]);
    t.eligibleTitles = function(e) {
        var t = y(e);
        return _.filter(function(e) {
            return (void 0 === e.minPoints || t >= e.minPoints) && (void 0 === e.maxPoints || t <= e.maxPoints)
        }).map(function(e) {
            return e.label
        })
    }
}, function(e, t, n) {
    n(112);
    for (var r = n(9), o = n(15), i = n(22), a = n(5)("toStringTag"), u = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), s = 0; s < u.length; s++) {
        var c = u[s],
            l = r[c],
            f = l && l.prototype;
        f && !f[a] && o(f, a, c), i[c] = i.Array
    }
}, function(e, t) {
    e.exports = {}
}, function(e, t, n) {
    var r = n(47),
        o = n(48);
    e.exports = function(e) {
        return r(o(e))
    }
}, function(e, t, n) {
    var r = n(48);
    e.exports = function(e) {
        return Object(r(e))
    }
}, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function(e, t, n) {
    var r = n(76),
        o = n(55);
    e.exports = Object.keys || function(e) {
        return r(e, o)
    }
}, function(e, t, n) {
    var r = n(10).f,
        o = n(17),
        i = n(5)("toStringTag");
    e.exports = function(e, t, n) {
        e && !o(e = n ? e : e.prototype, i) && r(e, i, {
            configurable: !0,
            value: t
        })
    }
}, function(e, t, n) {
    e.exports = {
        default: n(120),
        __esModule: !0
    }
}, function(e, t, n) {
    var r = n(14),
        o = n(79),
        i = n(80),
        a = n(11),
        u = n(37),
        s = n(56),
        c = {},
        l = {},
        t = e.exports = function(e, t, n, f, d) {
            var h, p, m, g, v = d ? function() {
                    return e
                } : s(e),
                y = r(n, f, t ? 2 : 1),
                _ = 0;
            if ("function" != typeof v) throw TypeError(e + " is not iterable!");
            if (i(v)) {
                for (h = u(e.length); h > _; _++)
                    if ((g = t ? y(a(p = e[_])[0], p[1]) : y(e[_])) === c || g === l) return g
            } else
                for (m = v.call(e); !(p = m.next()).done;)
                    if ((g = o(m, y, p.value, t)) === c || g === l) return g
        };
    t.BREAK = c, t.RETURN = l
}, function(e, t, n) {
    e.exports = n(165)()
}, function(e, t, n) {
    "use strict";
    (function(e) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e) {}

        function i(e) {
            var t = this,
                n = !1;
            return function() {
                for (var r = arguments.length, o = Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                n || (n = !0, e.apply(t, o))
            }
        }

        function a(e, t) {
            return e
        }

        function u(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            0 === n ? console.log(t) : console.error(t), e.exit(n)
        }

        function s(e) {
            return e.displayName || e.name || "Unknown"
        }

        function c() {
            var e = window.location,
                t = e.protocol,
                n = e.hostname,
                r = e.port;
            return t + "//" + n + (r ? ":" + r : "")
        }

        function l() {
            var e = window.location.href,
                t = c();
            return e.substring(t.length)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.loadGetInitialProps = void 0;
        var f = n(45),
            d = r(f),
            h = n(57),
            p = r(h),
            m = n(63);
        r(m), t.loadGetInitialProps = function() {
            var e = (0, p.default)(d.default.mark(function e(t, n) {
                var r, o, i;
                return d.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (t.getInitialProps) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", {});
                        case 2:
                            return e.next = 4, t.getInitialProps(n);
                        case 4:
                            if ((r = e.sent) || n.res && n.res.finished) {
                                e.next = 9;
                                break
                            }
                            throw o = s(t), i = '"' + o + '.getInitialProps()" should resolve to an object. But found "' + r + '" instead.', new Error(i);
                        case 9:
                            return e.abrupt("return", r);
                        case 10:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }();
        t.warn = o, t.execOnce = i, t.deprecated = a, t.printAndExit = u, t.getDisplayName = s, t.getLocationOrigin = c, t.getURL = l
    }).call(t, n(94))
}, function(e, t, n) {
    e.exports = {
        default: n(169),
        __esModule: !0
    }
}, function(e, t) {
    e.exports = !0
}, function(e, t, n) {
    var r = n(11),
        o = n(115),
        i = n(55),
        a = n(53)("IE_PROTO"),
        u = function() {},
        s = function() {
            var e, t = n(50)("iframe"),
                r = i.length;
            for (t.style.display = "none", n(77).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), s = e.F; r--;) delete s.prototype[i[r]];
            return s()
        };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (u.prototype = r(e), n = new u, u.prototype = null, n[a] = e) : n = s(), void 0 === t ? n : o(n, t)
    }
}, function(e, t, n) {
    var r = n(52),
        o = Math.min;
    e.exports = function(e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0
    }
}, function(e, t) {
    var n = 0,
        r = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}, function(e, t, n) {
    var r = n(25),
        o = n(5)("toStringTag"),
        i = "Arguments" == r(function() {
            return arguments
        }()),
        a = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        };
    e.exports = function(e) {
        var t, n, u;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = a(t = Object(e), o)) ? n : i ? r(t) : "Object" == (u = r(t)) && "function" == typeof t.callee ? "Arguments" : u
    }
}, function(e, t) {}, function(e, t, n) {
    "use strict";

    function r(e) {
        return function() {
            return e
        }
    }
    var o = function() {};
    o.thatReturns = r, o.thatReturnsFalse = r(!1), o.thatReturnsTrue = r(!0), o.thatReturnsNull = r(null), o.thatReturnsThis = function() {
        return this
    }, o.thatReturnsArgument = function(e) {
        return e
    }, e.exports = o
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var o = n(140),
        i = r(o),
        a = n(46),
        u = r(a);
    t.default = function() {
        function e(e, t) {
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, s = (0, u.default)(e); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !r && s.return && s.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }
        return function(t, n) {
            if (Array.isArray(t)) return t;
            if ((0, i.default)(Object(t))) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(63),
        o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r);
    t.default = o.default || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
}, function(e, t) {
    t.f = {}.propertyIsEnumerable
}, function(e, t, n) {
    e.exports = n(109)
}, function(e, t, n) {
    e.exports = {
        default: n(111),
        __esModule: !0
    }
}, function(e, t, n) {
    var r = n(25);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(35),
        o = n(4),
        i = n(75),
        a = n(15),
        u = n(17),
        s = n(22),
        c = n(114),
        l = n(29),
        f = n(78),
        d = n(5)("iterator"),
        h = !([].keys && "next" in [].keys()),
        p = function() {
            return this
        };
    e.exports = function(e, t, n, m, g, v, y) {
        c(n, t, m);
        var _, b, x, w = function(e) {
                if (!h && e in T) return T[e];
                switch (e) {
                    case "keys":
                    case "values":
                        return function() {
                            return new n(this, e)
                        }
                }
                return function() {
                    return new n(this, e)
                }
            },
            k = t + " Iterator",
            E = "values" == g,
            C = !1,
            T = e.prototype,
            M = T[d] || T["@@iterator"] || g && T[g],
            S = M || w(g),
            N = g ? E ? w("entries") : S : void 0,
            P = "Array" == t ? T.entries || M : M;
        if (P && (x = f(P.call(new e))) !== Object.prototype && x.next && (l(x, k, !0), r || u(x, d) || a(x, d, p)), E && M && "values" !== M.name && (C = !0, S = function() {
                return M.call(this)
            }), r && !y || !h && !C && T[d] || a(T, d, S), s[t] = S, s[k] = p, g)
            if (_ = {
                    values: E ? S : w("values"),
                    keys: v ? S : w("keys"),
                    entries: N
                }, y)
                for (b in _) b in T || i(T, b, _[b]);
            else o(o.P + o.F * (h || C), t, _);
        return _
    }
}, function(e, t, n) {
    var r = n(12),
        o = n(9).document,
        i = r(o) && r(o.createElement);
    e.exports = function(e) {
        return i ? o.createElement(e) : {}
    }
}, function(e, t, n) {
    var r = n(12);
    e.exports = function(e, t) {
        if (!r(e)) return e;
        var n, o;
        if (t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
        if ("function" == typeof(n = e.valueOf) && !r(o = n.call(e))) return o;
        if (!t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(e, t) {
    var n = Math.ceil,
        r = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}, function(e, t, n) {
    var r = n(54)("keys"),
        o = n(38);
    e.exports = function(e) {
        return r[e] || (r[e] = o(e))
    }
}, function(e, t, n) {
    var r = n(9),
        o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    e.exports = function(e) {
        return o[e] || (o[e] = {})
    }
}, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t, n) {
    var r = n(39),
        o = n(5)("iterator"),
        i = n(22);
    e.exports = n(3).getIteratorMethod = function(e) {
        if (void 0 != e) return e[o] || e["@@iterator"] || i[r(e)]
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(30),
        o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r);
    t.default = function(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new o.default(function(e, n) {
                function r(i, a) {
                    try {
                        var u = t[i](a),
                            s = u.value
                    } catch (e) {
                        return void n(e)
                    }
                    if (!u.done) return o.default.resolve(s).then(function(e) {
                        r("next", e)
                    }, function(e) {
                        r("throw", e)
                    });
                    e(s)
                }
                return r("next")
            })
        }
    }
}, function(e, t) {
    e.exports = function(e, t, n, r) {
        if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
        return e
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t, n;
        this.promise = new e(function(e, r) {
            if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
            t = e, n = r
        }), this.resolve = o(t), this.reject = o(n)
    }
    var o = n(26);
    e.exports.f = function(e) {
        return new r(e)
    }
}, function(e, t, n) {
    var r = n(15);
    e.exports = function(e, t, n) {
        for (var o in t) n && e[o] ? e[o] = t[o] : r(e, o, t[o]);
        return e
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r, i, a, u, s) {
        if (o(t), !e) {
            var c;
            if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var l = [n, r, i, a, u, s],
                    f = 0;
                c = new Error(t.replace(/%s/g, function() {
                    return l[f++]
                })), c.name = "Invariant Violation"
            }
            throw c.framesToPop = 1, c
        }
    }
    var o = function(e) {};
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o() {
        if (!m.router) {
            throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')
        }
    }

    function i(e) {
        m.onAppUpdated ? m.onAppUpdated(e) : (console.warn('An app update detected. Loading the SSR version of "' + e + '"'), window.location.href = e)
    }

    function a(e) {
        var t = e.split("#"),
            n = (0, c.default)(t, 2),
            r = n[1];
        e = e.replace(/#.*/, "");
        var o = e.split("?"),
            i = (0, c.default)(o, 2),
            a = i[0],
            u = i[1];
        a = a.replace(/\/$/, "");
        var s = a;
        return /\.[^\/]+\/?$/.test(a) || (s = a + "/"), u && (s = s + "?" + u), r && (s = s + "#" + r), s
    }

    function u(e) {
        var t = {};
        return g.forEach(function(n) {
            (0, f.default)(t, n, {
                get: function() {
                    return e[n]
                }
            })
        }), v.forEach(function(n) {
            t[n] = function() {
                return e[n].apply(e, arguments)
            }
        }), t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Router = t.createRouter = t.withRouter = void 0;
    var s = n(42),
        c = r(s),
        l = n(89),
        f = r(l),
        d = n(143);
    Object.defineProperty(t, "withRouter", {
        enumerable: !0,
        get: function() {
            return r(d).default
        }
    }), t._notifyBuildIdMismatch = i, t._rewriteUrlForNextExport = a, t.makePublicRouterInstance = u;
    var h = n(168),
        p = r(h),
        m = {
            router: null,
            readyCallbacks: [],
            ready: function(e) {
                if (this.router) return e();
                "undefined" != typeof window && this.readyCallbacks.push(e)
            }
        },
        g = ["components", "pathname", "route", "query", "asPath"],
        v = ["push", "replace", "reload", "back", "prefetch"],
        y = ["routeChangeStart", "beforeHistoryChange", "routeChangeComplete", "routeChangeError"];
    g.forEach(function(e) {
        (0, f.default)(m, e, {
            get: function() {
                return o(), m.router[e]
            }
        })
    }), v.forEach(function(e) {
        m[e] = function() {
            var t;
            return o(), (t = m.router)[e].apply(t, arguments)
        }
    }), y.forEach(function(e) {
        m.ready(function() {
            m.router.events.on(e, function() {
                var t = "on" + e.charAt(0).toUpperCase() + e.substring(1);
                if (m[t]) try {
                    m[t].apply(m, arguments)
                } catch (e) {
                    console.error("Error when running the Router event: " + t), console.error(e.message + "\n" + e.stack)
                }
            })
        })
    }), t.default = m;
    t.createRouter = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return m.router = new(Function.prototype.bind.apply(p.default, [null].concat(t))), m.readyCallbacks.forEach(function(e) {
            return e()
        }), m.readyCallbacks = [], m.router
    }, t.Router = p.default
}, function(e, t, n) {
    e.exports = {
        default: n(144),
        __esModule: !0
    }
}, function(e, t) {
    t.f = Object.getOwnPropertySymbols
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var o = n(149),
        i = r(o),
        a = n(151),
        u = r(a),
        s = "function" == typeof u.default && "symbol" == typeof i.default ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof u.default && e.constructor === u.default && e !== u.default.prototype ? "symbol" : typeof e
        };
    t.default = "function" == typeof u.default && "symbol" === s(i.default) ? function(e) {
        return void 0 === e ? "undefined" : s(e)
    } : function(e) {
        return e && "function" == typeof u.default && e.constructor === u.default && e !== u.default.prototype ? "symbol" : void 0 === e ? "undefined" : s(e)
    }
}, function(e, t, n) {
    t.f = n(5)
}, function(e, t, n) {
    var r = n(38)("meta"),
        o = n(12),
        i = n(17),
        a = n(10).f,
        u = 0,
        s = Object.isExtensible || function() {
            return !0
        },
        c = !n(16)(function() {
            return s(Object.preventExtensions({}))
        }),
        l = function(e) {
            a(e, r, {
                value: {
                    i: "O" + ++u,
                    w: {}
                }
            })
        },
        f = function(e, t) {
            if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!i(e, r)) {
                if (!s(e)) return "F";
                if (!t) return "E";
                l(e)
            }
            return e[r].i
        },
        d = function(e, t) {
            if (!i(e, r)) {
                if (!s(e)) return !0;
                if (!t) return !1;
                l(e)
            }
            return e[r].w
        },
        h = function(e) {
            return c && p.NEED && s(e) && !i(e, r) && l(e), e
        },
        p = e.exports = {
            KEY: r,
            NEED: !1,
            fastKey: f,
            getWeak: d,
            onFreeze: h
        }
}, function(e, t, n) {
    var r = n(9),
        o = n(3),
        i = n(35),
        a = n(66),
        u = n(10).f;
    e.exports = function(e) {
        var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
        "_" == e.charAt(0) || e in t || u(t, e, {
            value: a.f(e)
        })
    }
}, function(e, t, n) {
    var r = n(12);
    e.exports = function(e, t) {
        if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
        return e
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(34),
        i = r(o),
        a = n(0),
        u = r(a),
        s = n(1),
        c = r(s),
        l = function() {
            function e() {
                (0, u.default)(this, e), this.listeners = {}
            }
            return (0, c.default)(e, [{
                key: "on",
                value: function(e, t) {
                    if (this.listeners[e] || (this.listeners[e] = new i.default), this.listeners[e].has(t)) throw new Error("The listener already exising in event: " + e);
                    this.listeners[e].add(t)
                }
            }, {
                key: "emit",
                value: function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    this.listeners[e] && this.listeners[e].forEach(function(e) {
                        return e.apply(void 0, n)
                    })
                }
            }, {
                key: "off",
                value: function(e, t) {
                    this.listeners[e].delete(t)
                }
            }]), e
        }();
    t.default = l
}, function(e, t, n) {
    e.exports = {
        default: n(202),
        __esModule: !0
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return function(t, n) {
            return tl(e(t), n)
        }
    }

    function o(e, t) {
        return [e, t]
    }

    function i(e, t, n) {
        var r = (t - e) / Math.max(0, n),
            o = Math.floor(Math.log(r) / Math.LN10),
            i = r / Math.pow(10, o);
        return o >= 0 ? (i >= bl ? 10 : i >= xl ? 5 : i >= wl ? 2 : 1) * Math.pow(10, o) : -Math.pow(10, -o) / (i >= bl ? 10 : i >= xl ? 5 : i >= wl ? 2 : 1)
    }

    function a(e, t, n) {
        var r = Math.abs(t - e) / Math.max(0, n),
            o = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
            i = r / o;
        return i >= bl ? o *= 10 : i >= xl ? o *= 5 : i >= wl && (o *= 2), t < e ? -o : o
    }

    function u(e) {
        return e.length
    }

    function s(e) {
        return "translate(" + (e + .5) + ",0)"
    }

    function c(e) {
        return "translate(0," + (e + .5) + ")"
    }

    function l(e) {
        return function(t) {
            return +e(t)
        }
    }

    function f(e) {
        var t = Math.max(0, e.bandwidth() - 1) / 2;
        return e.round() && (t = Math.round(t)),
            function(n) {
                return +e(n) + t
            }
    }

    function d() {
        return !this.__axis
    }

    function h(e, t) {
        function n(n) {
            var s = null == o ? t.ticks ? t.ticks.apply(t, r) : t.domain() : o,
                c = null == i ? t.tickFormat ? t.tickFormat.apply(t, r) : Hl : i,
                v = Math.max(a, 0) + h,
                y = t.range(),
                _ = +y[0] + .5,
                b = +y[y.length - 1] + .5,
                x = (t.bandwidth ? f : l)(t.copy()),
                w = n.selection ? n.selection() : n,
                k = w.selectAll(".domain").data([null]),
                E = w.selectAll(".tick").data(s, t).order(),
                C = E.exit(),
                T = E.enter().append("g").attr("class", "tick"),
                M = E.select("line"),
                S = E.select("text");
            k = k.merge(k.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), E = E.merge(T), M = M.merge(T.append("line").attr("stroke", "#000").attr(m + "2", p * a)), S = S.merge(T.append("text").attr("fill", "#000").attr(m, p * v).attr("dy", e === Bl ? "0em" : e === Wl ? "0.71em" : "0.32em")), n !== w && (k = k.transition(n), E = E.transition(n), M = M.transition(n), S = S.transition(n), C = C.transition(n).attr("opacity", Gl).attr("transform", function(e) {
                return isFinite(e = x(e)) ? g(e) : this.getAttribute("transform")
            }), T.attr("opacity", Gl).attr("transform", function(e) {
                var t = this.parentNode.__axis;
                return g(t && isFinite(t = t(e)) ? t : x(e))
            })), C.remove(), k.attr("d", e === Vl || e == ql ? "M" + p * u + "," + _ + "H0.5V" + b + "H" + p * u : "M" + _ + "," + p * u + "V0.5H" + b + "V" + p * u), E.attr("opacity", 1).attr("transform", function(e) {
                return g(x(e))
            }), M.attr(m + "2", p * a), S.attr(m, p * v).text(c), w.filter(d).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === ql ? "start" : e === Vl ? "end" : "middle"), w.each(function() {
                this.__axis = x
            })
        }
        var r = [],
            o = null,
            i = null,
            a = 6,
            u = 6,
            h = 3,
            p = e === Bl || e === Vl ? -1 : 1,
            m = e === Vl || e === ql ? "x" : "y",
            g = e === Bl || e === Wl ? s : c;
        return n.scale = function(e) {
            return arguments.length ? (t = e, n) : t
        }, n.ticks = function() {
            return r = zl.call(arguments), n
        }, n.tickArguments = function(e) {
            return arguments.length ? (r = null == e ? [] : zl.call(e), n) : r.slice()
        }, n.tickValues = function(e) {
            return arguments.length ? (o = null == e ? null : zl.call(e), n) : o && o.slice()
        }, n.tickFormat = function(e) {
            return arguments.length ? (i = e, n) : i
        }, n.tickSize = function(e) {
            return arguments.length ? (a = u = +e, n) : a
        }, n.tickSizeInner = function(e) {
            return arguments.length ? (a = +e, n) : a
        }, n.tickSizeOuter = function(e) {
            return arguments.length ? (u = +e, n) : u
        }, n.tickPadding = function(e) {
            return arguments.length ? (h = +e, n) : h
        }, n
    }

    function p(e) {
        return h(Bl, e)
    }

    function m(e) {
        return h(ql, e)
    }

    function g(e) {
        return h(Wl, e)
    }

    function v(e) {
        return h(Vl, e)
    }

    function y() {
        for (var e, t = 0, n = arguments.length, r = {}; t < n; ++t) {
            if (!(e = arguments[t] + "") || e in r) throw new Error("illegal type: " + e);
            r[e] = []
        }
        return new _(r)
    }

    function _(e) {
        this._ = e
    }

    function b(e, t) {
        return e.trim().split(/^|\s+/).map(function(e) {
            var n = "",
                r = e.indexOf(".");
            if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !t.hasOwnProperty(e)) throw new Error("unknown type: " + e);
            return {
                type: e,
                name: n
            }
        })
    }

    function x(e, t) {
        for (var n, r = 0, o = e.length; r < o; ++r)
            if ((n = e[r]).name === t) return n.value
    }

    function w(e, t, n) {
        for (var r = 0, o = e.length; r < o; ++r)
            if (e[r].name === t) {
                e[r] = Yl, e = e.slice(0, r).concat(e.slice(r + 1));
                break
            }
        return null != n && e.push({
            name: t,
            value: n
        }), e
    }

    function k(e) {
        return function() {
            var t = this.ownerDocument,
                n = this.namespaceURI;
            return n === Kl && t.documentElement.namespaceURI === Kl ? t.createElement(e) : t.createElementNS(n, e)
        }
    }

    function E(e) {
        return function() {
            return this.ownerDocument.createElementNS(e.space, e.local)
        }
    }

    function C() {
        return new T
    }

    function T() {
        this._ = "@" + (++Zl).toString(36)
    }

    function M(e, t, n) {
        return e = S(e, t, n),
            function(t) {
                var n = t.relatedTarget;
                n && (n === this || 8 & n.compareDocumentPosition(this)) || e.call(this, t)
            }
    }

    function S(e, t, n) {
        return function(r) {
            var o = af;
            af = r;
            try {
                e.call(this, this.__data__, t, n)
            } finally {
                af = o
            }
        }
    }

    function N(e) {
        return e.trim().split(/^|\s+/).map(function(e) {
            var t = "",
                n = e.indexOf(".");
            return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
                type: e,
                name: t
            }
        })
    }

    function P(e) {
        return function() {
            var t = this.__on;
            if (t) {
                for (var n, r = 0, o = -1, i = t.length; r < i; ++r) n = t[r], e.type && n.type !== e.type || n.name !== e.name ? t[++o] = n : this.removeEventListener(n.type, n.listener, n.capture);
                ++o ? t.length = o : delete this.__on
            }
        }
    }

    function A(e, t, n) {
        var r = of.hasOwnProperty(e.type) ? M : S;
        return function(o, i, a) {
            var u, s = this.__on,
                c = r(t, i, a);
            if (s)
                for (var l = 0, f = s.length; l < f; ++l)
                    if ((u = s[l]).type === e.type && u.name === e.name) return this.removeEventListener(u.type, u.listener, u.capture), this.addEventListener(u.type, u.listener = c, u.capture = n), void(u.value = t);
            this.addEventListener(e.type, c, n), u = {
                type: e.type,
                name: e.name,
                value: t,
                listener: c,
                capture: n
            }, s ? s.push(u) : this.__on = [u]
        }
    }

    function I(e, t, n, r) {
        var o = af;
        e.sourceEvent = af, af = e;
        try {
            return t.apply(n, r)
        } finally {
            af = o
        }
    }

    function O() {}

    function R() {
        return []
    }

    function D(e, t) {
        this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t
    }

    function L(e, t, n, r, o, i) {
        for (var a, u = 0, s = t.length, c = i.length; u < c; ++u)(a = t[u]) ? (a.__data__ = i[u], r[u] = a) : n[u] = new D(e, i[u]);
        for (; u < s; ++u)(a = t[u]) && (o[u] = a)
    }

    function F(e, t, n, r, o, i, a) {
        var u, s, c, l = {},
            f = t.length,
            d = i.length,
            h = new Array(f);
        for (u = 0; u < f; ++u)(s = t[u]) && (h[u] = c = _f + a.call(s, s.__data__, u, t), c in l ? o[u] = s : l[c] = s);
        for (u = 0; u < d; ++u) c = _f + a.call(e, i[u], u, i), (s = l[c]) ? (r[u] = s, s.__data__ = i[u], l[c] = null) : n[u] = new D(e, i[u]);
        for (u = 0; u < f; ++u)(s = t[u]) && l[h[u]] === s && (o[u] = s)
    }

    function j(e, t) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
    }

    function U(e) {
        return function() {
            this.removeAttribute(e)
        }
    }

    function z(e) {
        return function() {
            this.removeAttributeNS(e.space, e.local)
        }
    }

    function H(e, t) {
        return function() {
            this.setAttribute(e, t)
        }
    }

    function B(e, t) {
        return function() {
            this.setAttributeNS(e.space, e.local, t)
        }
    }

    function q(e, t) {
        return function() {
            var n = t.apply(this, arguments);
            null == n ? this.removeAttribute(e) : this.setAttribute(e, n)
        }
    }

    function W(e, t) {
        return function() {
            var n = t.apply(this, arguments);
            null == n ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n)
        }
    }

    function V(e) {
        return function() {
            this.style.removeProperty(e)
        }
    }

    function G(e, t, n) {
        return function() {
            this.style.setProperty(e, t, n)
        }
    }

    function Y(e, t, n) {
        return function() {
            var r = t.apply(this, arguments);
            null == r ? this.style.removeProperty(e) : this.style.setProperty(e, r, n)
        }
    }

    function X(e, t) {
        return e.style.getPropertyValue(t) || If(e).getComputedStyle(e, null).getPropertyValue(t)
    }

    function K(e) {
        return function() {
            delete this[e]
        }
    }

    function $(e, t) {
        return function() {
            this[e] = t
        }
    }

    function Q(e, t) {
        return function() {
            var n = t.apply(this, arguments);
            null == n ? delete this[e] : this[e] = n
        }
    }

    function J(e) {
        return e.trim().split(/^|\s+/)
    }

    function Z(e) {
        return e.classList || new ee(e)
    }

    function ee(e) {
        this._node = e, this._names = J(e.getAttribute("class") || "")
    }

    function te(e, t) {
        for (var n = Z(e), r = -1, o = t.length; ++r < o;) n.add(t[r])
    }

    function ne(e, t) {
        for (var n = Z(e), r = -1, o = t.length; ++r < o;) n.remove(t[r])
    }

    function re(e) {
        return function() {
            te(this, e)
        }
    }

    function oe(e) {
        return function() {
            ne(this, e)
        }
    }

    function ie(e, t) {
        return function() {
            (t.apply(this, arguments) ? te : ne)(this, e)
        }
    }

    function ae() {
        this.textContent = ""
    }

    function ue(e) {
        return function() {
            this.textContent = e
        }
    }

    function se(e) {
        return function() {
            var t = e.apply(this, arguments);
            this.textContent = null == t ? "" : t
        }
    }

    function ce() {
        this.innerHTML = ""
    }

    function le(e) {
        return function() {
            this.innerHTML = e
        }
    }

    function fe(e) {
        return function() {
            var t = e.apply(this, arguments);
            this.innerHTML = null == t ? "" : t
        }
    }

    function de() {
        this.nextSibling && this.parentNode.appendChild(this)
    }

    function he() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }

    function pe() {
        return null
    }

    function me() {
        var e = this.parentNode;
        e && e.removeChild(this)
    }

    function ge(e, t, n) {
        var r = If(e),
            o = r.CustomEvent;
        "function" == typeof o ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o)
    }

    function ve(e, t) {
        return function() {
            return ge(this, e, t)
        }
    }

    function ye(e, t) {
        return function() {
            return ge(this, e, t.apply(this, arguments))
        }
    }

    function _e(e, t) {
        this._groups = e, this._parents = t
    }

    function be() {
        return new _e([
            [document.documentElement]
        ], Vf)
    }

    function xe() {
        af.stopImmediatePropagation()
    }

    function we(e, t) {
        var n = e.document.documentElement,
            r = Yf(e).on("dragstart.drag", null);
        t && (r.on("click.drag", Qf, !0), setTimeout(function() {
            r.on("click.drag", null)
        }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect)
    }

    function ke(e, t, n, r, o, i, a, u, s, c) {
        this.target = e, this.type = t, this.subject = n, this.identifier = r, this.active = o, this.x = i, this.y = a, this.dx = u, this.dy = s, this._ = c
    }

    function Ee() {
        return !af.button
    }

    function Ce() {
        return this.parentNode
    }

    function Te(e) {
        return null == e ? {
            x: af.x,
            y: af.y
        } : e
    }

    function Me() {
        return "ontouchstart" in this
    }

    function Se(e, t) {
        var n = Object.create(e.prototype);
        for (var r in t) n[r] = t[r];
        return n
    }

    function Ne() {}

    function Pe(e) {
        var t;
        return e = (e + "").trim().toLowerCase(), (t = id.exec(e)) ? (t = parseInt(t[1], 16), new De(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | 240 & t, (15 & t) << 4 | 15 & t, 1)) : (t = ad.exec(e)) ? Ae(parseInt(t[1], 16)) : (t = ud.exec(e)) ? new De(t[1], t[2], t[3], 1) : (t = sd.exec(e)) ? new De(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, 1) : (t = cd.exec(e)) ? Ie(t[1], t[2], t[3], t[4]) : (t = ld.exec(e)) ? Ie(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, t[4]) : (t = fd.exec(e)) ? Le(t[1], t[2] / 100, t[3] / 100, 1) : (t = dd.exec(e)) ? Le(t[1], t[2] / 100, t[3] / 100, t[4]) : hd.hasOwnProperty(e) ? Ae(hd[e]) : "transparent" === e ? new De(NaN, NaN, NaN, 0) : null
    }

    function Ae(e) {
        return new De(e >> 16 & 255, e >> 8 & 255, 255 & e, 1)
    }

    function Ie(e, t, n, r) {
        return r <= 0 && (e = t = n = NaN), new De(e, t, n, r)
    }

    function Oe(e) {
        return e instanceof Ne || (e = Pe(e)), e ? (e = e.rgb(), new De(e.r, e.g, e.b, e.opacity)) : new De
    }

    function Re(e, t, n, r) {
        return 1 === arguments.length ? Oe(e) : new De(e, t, n, null == r ? 1 : r)
    }

    function De(e, t, n, r) {
        this.r = +e, this.g = +t, this.b = +n, this.opacity = +r
    }

    function Le(e, t, n, r) {
        return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ue(e, t, n, r)
    }

    function Fe(e) {
        if (e instanceof Ue) return new Ue(e.h, e.s, e.l, e.opacity);
        if (e instanceof Ne || (e = Pe(e)), !e) return new Ue;
        if (e instanceof Ue) return e;
        e = e.rgb();
        var t = e.r / 255,
            n = e.g / 255,
            r = e.b / 255,
            o = Math.min(t, n, r),
            i = Math.max(t, n, r),
            a = NaN,
            u = i - o,
            s = (i + o) / 2;
        return u ? (a = t === i ? (n - r) / u + 6 * (n < r) : n === i ? (r - t) / u + 2 : (t - n) / u + 4, u /= s < .5 ? i + o : 2 - i - o, a *= 60) : u = s > 0 && s < 1 ? 0 : a, new Ue(a, u, s, e.opacity)
    }

    function je(e, t, n, r) {
        return 1 === arguments.length ? Fe(e) : new Ue(e, t, n, null == r ? 1 : r)
    }

    function Ue(e, t, n, r) {
        this.h = +e, this.s = +t, this.l = +n, this.opacity = +r
    }

    function ze(e, t, n) {
        return 255 * (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t)
    }

    function He(e) {
        if (e instanceof qe) return new qe(e.l, e.a, e.b, e.opacity);
        if (e instanceof $e) {
            var t = e.h * pd;
            return new qe(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity)
        }
        e instanceof De || (e = Oe(e));
        var n = Ye(e.r),
            r = Ye(e.g),
            o = Ye(e.b),
            i = We((.4124564 * n + .3575761 * r + .1804375 * o) / gd),
            a = We((.2126729 * n + .7151522 * r + .072175 * o) / vd);
        return new qe(116 * a - 16, 500 * (i - a), 200 * (a - We((.0193339 * n + .119192 * r + .9503041 * o) / yd)), e.opacity)
    }

    function Be(e, t, n, r) {
        return 1 === arguments.length ? He(e) : new qe(e, t, n, null == r ? 1 : r)
    }

    function qe(e, t, n, r) {
        this.l = +e, this.a = +t, this.b = +n, this.opacity = +r
    }

    function We(e) {
        return e > wd ? Math.pow(e, 1 / 3) : e / xd + _d
    }

    function Ve(e) {
        return e > bd ? e * e * e : xd * (e - _d)
    }

    function Ge(e) {
        return 255 * (e <= .0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055)
    }

    function Ye(e) {
        return (e /= 255) <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
    }

    function Xe(e) {
        if (e instanceof $e) return new $e(e.h, e.c, e.l, e.opacity);
        e instanceof qe || (e = He(e));
        var t = Math.atan2(e.b, e.a) * md;
        return new $e(t < 0 ? t + 360 : t, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity)
    }

    function Ke(e, t, n, r) {
        return 1 === arguments.length ? Xe(e) : new $e(e, t, n, null == r ? 1 : r)
    }

    function $e(e, t, n, r) {
        this.h = +e, this.c = +t, this.l = +n, this.opacity = +r
    }

    function Qe(e) {
        if (e instanceof Ze) return new Ze(e.h, e.s, e.l, e.opacity);
        e instanceof De || (e = Oe(e));
        var t = e.r / 255,
            n = e.g / 255,
            r = e.b / 255,
            o = (Sd * r + Td * t - Md * n) / (Sd + Td - Md),
            i = r - o,
            a = (Cd * (n - o) - kd * i) / Ed,
            u = Math.sqrt(a * a + i * i) / (Cd * o * (1 - o)),
            s = u ? Math.atan2(a, i) * md - 120 : NaN;
        return new Ze(s < 0 ? s + 360 : s, u, o, e.opacity)
    }

    function Je(e, t, n, r) {
        return 1 === arguments.length ? Qe(e) : new Ze(e, t, n, null == r ? 1 : r)
    }

    function Ze(e, t, n, r) {
        this.h = +e, this.s = +t, this.l = +n, this.opacity = +r
    }

    function et(e, t, n, r, o) {
        var i = e * e,
            a = i * e;
        return ((1 - 3 * e + 3 * i - a) * t + (4 - 6 * i + 3 * a) * n + (1 + 3 * e + 3 * i - 3 * a) * r + a * o) / 6
    }

    function tt(e, t) {
        return function(n) {
            return e + n * t
        }
    }

    function nt(e, t, n) {
        return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n,
            function(r) {
                return Math.pow(e + r * t, n)
            }
    }

    function rt(e, t) {
        var n = t - e;
        return n ? tt(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : Fd(isNaN(e) ? t : e)
    }

    function ot(e) {
        return 1 == (e = +e) ? it : function(t, n) {
            return n - t ? nt(t, n, e) : Fd(isNaN(t) ? n : t)
        }
    }

    function it(e, t) {
        var n = t - e;
        return n ? tt(e, n) : Fd(isNaN(e) ? t : e)
    }

    function at(e) {
        return function(t) {
            var n, r, o = t.length,
                i = new Array(o),
                a = new Array(o),
                u = new Array(o);
            for (n = 0; n < o; ++n) r = Re(t[n]), i[n] = r.r || 0, a[n] = r.g || 0, u[n] = r.b || 0;
            return i = e(i), a = e(a), u = e(u), r.opacity = 1,
                function(e) {
                    return r.r = i(e), r.g = a(e), r.b = u(e), r + ""
                }
        }
    }

    function ut(e) {
        return function() {
            return e
        }
    }

    function st(e) {
        return function(t) {
            return e(t) + ""
        }
    }

    function ct(e) {
        return "none" === e ? Qd : (Nd || (Nd = document.createElement("DIV"), Pd = document.documentElement, Ad = document.defaultView), Nd.style.transform = e, e = Ad.getComputedStyle(Pd.appendChild(Nd), null).getPropertyValue("transform"), Pd.removeChild(Nd), e = e.slice(7, -1).split(","), Jd(+e[0], +e[1], +e[2], +e[3], +e[4], +e[5]))
    }

    function lt(e) {
        return null == e ? Qd : (Id || (Id = document.createElementNS("http://www.w3.org/2000/svg", "g")), Id.setAttribute("transform", e), (e = Id.transform.baseVal.consolidate()) ? (e = e.matrix, Jd(e.a, e.b, e.c, e.d, e.e, e.f)) : Qd)
    }

    function ft(e, t, n, r) {
        function o(e) {
            return e.length ? e.pop() + " " : ""
        }

        function i(e, r, o, i, a, u) {
            if (e !== o || r !== i) {
                var s = a.push("translate(", null, t, null, n);
                u.push({
                    i: s - 4,
                    x: qd(e, o)
                }, {
                    i: s - 2,
                    x: qd(r, i)
                })
            } else(o || i) && a.push("translate(" + o + t + i + n)
        }

        function a(e, t, n, i) {
            e !== t ? (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), i.push({
                i: n.push(o(n) + "rotate(", null, r) - 2,
                x: qd(e, t)
            })) : t && n.push(o(n) + "rotate(" + t + r)
        }

        function u(e, t, n, i) {
            e !== t ? i.push({
                i: n.push(o(n) + "skewX(", null, r) - 2,
                x: qd(e, t)
            }) : t && n.push(o(n) + "skewX(" + t + r)
        }

        function s(e, t, n, r, i, a) {
            if (e !== n || t !== r) {
                var u = i.push(o(i) + "scale(", null, ",", null, ")");
                a.push({
                    i: u - 4,
                    x: qd(e, n)
                }, {
                    i: u - 2,
                    x: qd(t, r)
                })
            } else 1 === n && 1 === r || i.push(o(i) + "scale(" + n + "," + r + ")")
        }
        return function(t, n) {
            var r = [],
                o = [];
            return t = e(t), n = e(n), i(t.translateX, t.translateY, n.translateX, n.translateY, r, o), a(t.rotate, n.rotate, r, o), u(t.skewX, n.skewX, r, o), s(t.scaleX, t.scaleY, n.scaleX, n.scaleY, r, o), t = n = null,
                function(e) {
                    for (var t, n = -1, i = o.length; ++n < i;) r[(t = o[n]).i] = t.x(e);
                    return r.join("")
                }
        }
    }

    function dt(e) {
        return ((e = Math.exp(e)) + 1 / e) / 2
    }

    function ht(e) {
        return ((e = Math.exp(e)) - 1 / e) / 2
    }

    function pt(e) {
        return ((e = Math.exp(2 * e)) - 1) / (e + 1)
    }

    function mt(e) {
        return function(t, n) {
            var r = e((t = je(t)).h, (n = je(n)).h),
                o = it(t.s, n.s),
                i = it(t.l, n.l),
                a = it(t.opacity, n.opacity);
            return function(e) {
                return t.h = r(e), t.s = o(e), t.l = i(e), t.opacity = a(e), t + ""
            }
        }
    }

    function gt(e, t) {
        var n = it((e = Be(e)).l, (t = Be(t)).l),
            r = it(e.a, t.a),
            o = it(e.b, t.b),
            i = it(e.opacity, t.opacity);
        return function(t) {
            return e.l = n(t), e.a = r(t), e.b = o(t), e.opacity = i(t), e + ""
        }
    }

    function vt(e) {
        return function(t, n) {
            var r = e((t = Ke(t)).h, (n = Ke(n)).h),
                o = it(t.c, n.c),
                i = it(t.l, n.l),
                a = it(t.opacity, n.opacity);
            return function(e) {
                return t.h = r(e), t.c = o(e), t.l = i(e), t.opacity = a(e), t + ""
            }
        }
    }

    function yt(e) {
        return function t(n) {
            function r(t, r) {
                var o = e((t = Je(t)).h, (r = Je(r)).h),
                    i = it(t.s, r.s),
                    a = it(t.l, r.l),
                    u = it(t.opacity, r.opacity);
                return function(e) {
                    return t.h = o(e), t.s = i(e), t.l = a(Math.pow(e, n)), t.opacity = u(e), t + ""
                }
            }
            return n = +n, r.gamma = t, r
        }(1)
    }

    function _t() {
        return mh || (yh(bt), mh = vh.now() + gh)
    }

    function bt() {
        mh = 0
    }

    function xt() {
        this._call = this._time = this._next = null
    }

    function wt(e, t, n) {
        var r = new xt;
        return r.restart(e, t, n), r
    }

    function kt() {
        _t(), ++lh;
        for (var e, t = Od; t;)(e = mh - t._time) >= 0 && t._call.call(null, e), t = t._next;
        --lh
    }

    function Et() {
        mh = (ph = vh.now()) + gh, lh = fh = 0;
        try {
            kt()
        } finally {
            lh = 0, Tt(), mh = 0
        }
    }

    function Ct() {
        var e = vh.now(),
            t = e - ph;
        t > hh && (gh -= t, ph = e)
    }

    function Tt() {
        for (var e, t, n = Od, r = 1 / 0; n;) n._call ? (r > n._time && (r = n._time), e = n, n = n._next) : (t = n._next, n._next = null, n = e ? e._next = t : Od = t);
        Rd = e, Mt(r)
    }

    function Mt(e) {
        if (!lh) {
            fh && (fh = clearTimeout(fh));
            e - mh > 24 ? (e < 1 / 0 && (fh = setTimeout(Et, e - vh.now() - gh)), dh && (dh = clearInterval(dh))) : (dh || (ph = vh.now(), dh = setInterval(Ct, hh)), lh = 1, yh(Et))
        }
    }

    function St(e, t) {
        var n = e.__transition;
        if (!n || !(n = n[t]) || n.state > kh) throw new Error("too late");
        return n
    }

    function Nt(e, t) {
        var n = e.__transition;
        if (!n || !(n = n[t]) || n.state > Ch) throw new Error("too late");
        return n
    }

    function Pt(e, t) {
        var n = e.__transition;
        if (!n || !(n = n[t])) throw new Error("too late");
        return n
    }

    function At(e, t, n) {
        function r(e) {
            n.state = Eh, n.timer.restart(o, n.delay, n.time), n.delay <= e && o(e - n.delay)
        }

        function o(r) {
            var c, l, f, d;
            if (n.state !== Eh) return a();
            for (c in s)
                if (d = s[c], d.name === n.name) {
                    if (d.state === Th) return _h(o);
                    d.state === Mh ? (d.state = Nh, d.timer.stop(), d.on.call("interrupt", e, e.__data__, d.index, d.group), delete s[c]) : +c < t && (d.state = Nh, d.timer.stop(), delete s[c])
                }
            if (_h(function() {
                    n.state === Th && (n.state = Mh, n.timer.restart(i, n.delay, n.time), i(r))
                }), n.state = Ch, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ch) {
                for (n.state = Th, u = new Array(f = n.tween.length), c = 0, l = -1; c < f; ++c)(d = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (u[++l] = d);
                u.length = l + 1
            }
        }

        function i(t) {
            for (var r = t < n.duration ? n.ease.call(null, t / n.duration) : (n.timer.restart(a), n.state = Sh, 1), o = -1, i = u.length; ++o < i;) u[o].call(null, r);
            n.state === Sh && (n.on.call("end", e, e.__data__, n.index, n.group), a())
        }

        function a() {
            n.state = Nh, n.timer.stop(), delete s[t];
            for (var r in s) return;
            delete e.__transition
        }
        var u, s = e.__transition;
        s[t] = n, n.timer = wt(r, 0, n.time)
    }

    function It(e, t) {
        var n, r;
        return function() {
            var o = Nt(this, e),
                i = o.tween;
            if (i !== n) {
                r = n = i;
                for (var a = 0, u = r.length; a < u; ++a)
                    if (r[a].name === t) {
                        r = r.slice(), r.splice(a, 1);
                        break
                    }
            }
            o.tween = r
        }
    }

    function Ot(e, t, n) {
        var r, o;
        if ("function" != typeof n) throw new Error;
        return function() {
            var i = Nt(this, e),
                a = i.tween;
            if (a !== r) {
                o = (r = a).slice();
                for (var u = {
                        name: t,
                        value: n
                    }, s = 0, c = o.length; s < c; ++s)
                    if (o[s].name === t) {
                        o[s] = u;
                        break
                    }
                s === c && o.push(u)
            }
            i.tween = o
        }
    }

    function Rt(e, t, n) {
        var r = e._id;
        return e.each(function() {
                var e = Nt(this, r);
                (e.value || (e.value = {}))[t] = n.apply(this, arguments)
            }),
            function(e) {
                return Pt(e, r).value[t]
            }
    }

    function Dt(e) {
        return function() {
            this.removeAttribute(e)
        }
    }

    function Lt(e) {
        return function() {
            this.removeAttributeNS(e.space, e.local)
        }
    }

    function Ft(e, t, n) {
        var r, o;
        return function() {
            var i = this.getAttribute(e);
            return i === n ? null : i === r ? o : o = t(r = i, n)
        }
    }

    function jt(e, t, n) {
        var r, o;
        return function() {
            var i = this.getAttributeNS(e.space, e.local);
            return i === n ? null : i === r ? o : o = t(r = i, n)
        }
    }

    function Ut(e, t, n) {
        var r, o, i;
        return function() {
            var a, u = n(this);
            return null == u ? void this.removeAttribute(e) : (a = this.getAttribute(e), a === u ? null : a === r && u === o ? i : i = t(r = a, o = u))
        }
    }

    function zt(e, t, n) {
        var r, o, i;
        return function() {
            var a, u = n(this);
            return null == u ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), a === u ? null : a === r && u === o ? i : i = t(r = a, o = u))
        }
    }

    function Ht(e, t) {
        function n() {
            var n = this,
                r = t.apply(n, arguments);
            return r && function(t) {
                n.setAttributeNS(e.space, e.local, r(t))
            }
        }
        return n._value = t, n
    }

    function Bt(e, t) {
        function n() {
            var n = this,
                r = t.apply(n, arguments);
            return r && function(t) {
                n.setAttribute(e, r(t))
            }
        }
        return n._value = t, n
    }

    function qt(e, t) {
        return function() {
            St(this, e).delay = +t.apply(this, arguments)
        }
    }

    function Wt(e, t) {
        return t = +t,
            function() {
                St(this, e).delay = t
            }
    }

    function Vt(e, t) {
        return function() {
            Nt(this, e).duration = +t.apply(this, arguments)
        }
    }

    function Gt(e, t) {
        return t = +t,
            function() {
                Nt(this, e).duration = t
            }
    }

    function Yt(e, t) {
        if ("function" != typeof t) throw new Error;
        return function() {
            Nt(this, e).ease = t
        }
    }

    function Xt(e) {
        return (e + "").trim().split(/^|\s+/).every(function(e) {
            var t = e.indexOf(".");
            return t >= 0 && (e = e.slice(0, t)), !e || "start" === e
        })
    }

    function Kt(e, t, n) {
        var r, o, i = Xt(t) ? St : Nt;
        return function() {
            var a = i(this, e),
                u = a.on;
            u !== r && (o = (r = u).copy()).on(t, n), a.on = o
        }
    }

    function $t(e) {
        return function() {
            var t = this.parentNode;
            for (var n in this.__transition)
                if (+n !== e) return;
            t && t.removeChild(this)
        }
    }

    function Qt(e, t) {
        var n, r, o;
        return function() {
            var i = X(this, e),
                a = (this.style.removeProperty(e), X(this, e));
            return i === a ? null : i === n && a === r ? o : o = t(n = i, r = a)
        }
    }

    function Jt(e) {
        return function() {
            this.style.removeProperty(e)
        }
    }

    function Zt(e, t, n) {
        var r, o;
        return function() {
            var i = X(this, e);
            return i === n ? null : i === r ? o : o = t(r = i, n)
        }
    }

    function en(e, t, n) {
        var r, o, i;
        return function() {
            var a = X(this, e),
                u = n(this);
            return null == u && (this.style.removeProperty(e), u = X(this, e)), a === u ? null : a === r && u === o ? i : i = t(r = a, o = u)
        }
    }

    function tn(e, t, n) {
        function r() {
            var r = this,
                o = t.apply(r, arguments);
            return o && function(t) {
                r.style.setProperty(e, o(t), n)
            }
        }
        return r._value = t, r
    }

    function nn(e) {
        return function() {
            this.textContent = e
        }
    }

    function rn(e) {
        return function() {
            var t = e(this);
            this.textContent = null == t ? "" : t
        }
    }

    function on(e, t, n, r) {
        this._groups = e, this._parents = t, this._name = n, this._id = r
    }

    function an(e) {
        return Gf().transition(e)
    }

    function un() {
        return ++Jh
    }

    function sn(e) {
        return +e
    }

    function cn(e) {
        return e * e
    }

    function ln(e) {
        return e * (2 - e)
    }

    function fn(e) {
        return ((e *= 2) <= 1 ? e * e : --e * (2 - e) + 1) / 2
    }

    function dn(e) {
        return e * e * e
    }

    function hn(e) {
        return --e * e * e + 1
    }

    function pn(e) {
        return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2
    }

    function mn(e) {
        return 1 - Math.cos(e * op)
    }

    function gn(e) {
        return Math.sin(e * op)
    }

    function vn(e) {
        return (1 - Math.cos(rp * e)) / 2
    }

    function yn(e) {
        return Math.pow(2, 10 * e - 10)
    }

    function _n(e) {
        return 1 - Math.pow(2, -10 * e)
    }

    function bn(e) {
        return ((e *= 2) <= 1 ? Math.pow(2, 10 * e - 10) : 2 - Math.pow(2, 10 - 10 * e)) / 2
    }

    function xn(e) {
        return 1 - Math.sqrt(1 - e * e)
    }

    function wn(e) {
        return Math.sqrt(1 - --e * e)
    }

    function kn(e) {
        return ((e *= 2) <= 1 ? 1 - Math.sqrt(1 - e * e) : Math.sqrt(1 - (e -= 2) * e) + 1) / 2
    }

    function En(e) {
        return 1 - Cn(1 - e)
    }

    function Cn(e) {
        return (e = +e) < ip ? pp * e * e : e < up ? pp * (e -= ap) * e + sp : e < lp ? pp * (e -= cp) * e + fp : pp * (e -= dp) * e + hp
    }

    function Tn(e) {
        return ((e *= 2) <= 1 ? 1 - Cn(1 - e) : Cn(e - 1) + 1) / 2
    }

    function Mn(e, t) {
        for (var n; !(n = e.__transition) || !(n = n[t]);)
            if (!(e = e.parentNode)) return wp.time = _t(), wp;
        return n
    }

    function Sn() {
        af.stopImmediatePropagation()
    }

    function Nn(e) {
        return {
            type: e
        }
    }

    function Pn() {
        return !af.button
    }

    function An() {
        var e = this.ownerSVGElement || this;
        return [
            [0, 0],
            [e.width.baseVal.value, e.height.baseVal.value]
        ]
    }

    function In(e) {
        for (; !e.__brush;)
            if (!(e = e.parentNode)) return;
        return e.__brush
    }

    function On(e) {
        return e[0][0] === e[1][0] || e[0][1] === e[1][1]
    }

    function Rn(e) {
        var t = e.__brush;
        return t ? t.dim.output(t.selection) : null
    }

    function Dn() {
        return Fn(Op)
    }

    function Ln() {
        return Fn(Rp)
    }

    function Fn(e) {
        function t(t) {
            var r = t.property("__brush", a).selectAll(".overlay").data([Nn("overlay")]);
            r.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", Lp.overlay).merge(r).each(function() {
                var e = In(this).extent;
                Yf(this).attr("x", e[0][0]).attr("y", e[0][1]).attr("width", e[1][0] - e[0][0]).attr("height", e[1][1] - e[0][1])
            }), t.selectAll(".selection").data([Nn("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", Lp.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
            var o = t.selectAll(".handle").data(e.handles, function(e) {
                return e.type
            });
            o.exit().remove(), o.enter().append("rect").attr("class", function(e) {
                return "handle handle--" + e.type
            }).attr("cursor", function(e) {
                return Lp[e.type]
            }), t.each(n).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", i)
        }

        function n() {
            var e = Yf(this),
                t = In(this).selection;
            t ? (e.selectAll(".selection").style("display", null).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1]), e.selectAll(".handle").style("display", null).attr("x", function(e) {
                return "e" === e.type[e.type.length - 1] ? t[1][0] - f / 2 : t[0][0] - f / 2
            }).attr("y", function(e) {
                return "s" === e.type[0] ? t[1][1] - f / 2 : t[0][1] - f / 2
            }).attr("width", function(e) {
                return "n" === e.type || "s" === e.type ? t[1][0] - t[0][0] + f : f
            }).attr("height", function(e) {
                return "e" === e.type || "w" === e.type ? t[1][1] - t[0][1] + f : f
            })) : e.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null)
        }

        function r(e, t) {
            return e.__brush.emitter || new o(e, t)
        }

        function o(e, t) {
            this.that = e, this.args = t, this.state = e.__brush, this.active = 0
        }

        function i() {
            function t() {
                var e = lf(k);
                !D || x || w || (Math.abs(e[0] - F[0]) > Math.abs(e[1] - F[1]) ? w = !0 : x = !0), F = e, b = !0, Sp(), o()
            }

            function o() {
                var e;
                switch (y = F[0] - L[0], _ = F[1] - L[1], C) {
                    case Pp:
                    case Np:
                        T && (y = Math.max(A - l, Math.min(O - p, y)), f = l + y, m = p + y), M && (_ = Math.max(I - d, Math.min(R - g, _)), h = d + _, v = g + _);
                        break;
                    case Ap:
                        T < 0 ? (y = Math.max(A - l, Math.min(O - l, y)), f = l + y, m = p) : T > 0 && (y = Math.max(A - p, Math.min(O - p, y)), f = l, m = p + y), M < 0 ? (_ = Math.max(I - d, Math.min(R - d, _)), h = d + _, v = g) : M > 0 && (_ = Math.max(I - g, Math.min(R - g, _)), h = d, v = g + _);
                        break;
                    case Ip:
                        T && (f = Math.max(A, Math.min(O, l - y * T)), m = Math.max(A, Math.min(O, p + y * T))), M && (h = Math.max(I, Math.min(R, d - _ * M)), v = Math.max(I, Math.min(R, g + _ * M)))
                }
                m < f && (T *= -1, e = l, l = p, p = e, e = f, f = m, m = e, E in Fp && z.attr("cursor", Lp[E = Fp[E]])), v < h && (M *= -1, e = d, d = g, g = e, e = h, h = v, v = e, E in jp && z.attr("cursor", Lp[E = jp[E]])), S.selection && (P = S.selection), x && (f = P[0][0], m = P[1][0]), w && (h = P[0][1], v = P[1][1]), P[0][0] === f && P[0][1] === h && P[1][0] === m && P[1][1] === v || (S.selection = [
                    [f, h],
                    [m, v]
                ], n.call(k), j.brush())
            }

            function i() {
                if (Sn(), af.touches) {
                    if (af.touches.length) return;
                    u && clearTimeout(u), u = setTimeout(function() {
                        u = null
                    }, 500), U.on("touchmove.brush touchend.brush touchcancel.brush", null)
                } else we(af.view, b), H.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
                U.attr("pointer-events", "all"), z.attr("cursor", Lp.overlay), S.selection && (P = S.selection), On(P) && (S.selection = null, n.call(k)), j.end()
            }

            function a() {
                switch (af.keyCode) {
                    case 16:
                        D = T && M;
                        break;
                    case 18:
                        C === Ap && (T && (p = m - y * T, l = f + y * T), M && (g = v - _ * M, d = h + _ * M), C = Ip, o());
                        break;
                    case 32:
                        C !== Ap && C !== Ip || (T < 0 ? p = m - y : T > 0 && (l = f - y), M < 0 ? g = v - _ : M > 0 && (d = h - _), C = Pp, z.attr("cursor", Lp.selection), o());
                        break;
                    default:
                        return
                }
                Sp()
            }

            function s() {
                switch (af.keyCode) {
                    case 16:
                        D && (x = w = D = !1, o());
                        break;
                    case 18:
                        C === Ip && (T < 0 ? p = m : T > 0 && (l = f), M < 0 ? g = v : M > 0 && (d = h), C = Ap, o());
                        break;
                    case 32:
                        C === Pp && (af.altKey ? (T && (p = m - y * T, l = f + y * T), M && (g = v - _ * M, d = h + _ * M), C = Ip) : (T < 0 ? p = m : T > 0 && (l = f), M < 0 ? g = v : M > 0 && (d = h), C = Ap), z.attr("cursor", Lp[E]), o());
                        break;
                    default:
                        return
                }
                Sp()
            }
            if (af.touches) {
                if (af.changedTouches.length < af.touches.length) return Sp()
            } else if (u) return;
            if (c.apply(this, arguments)) {
                var l, f, d, h, p, m, g, v, y, _, b, x, w, k = this,
                    E = af.target.__data__.type,
                    C = "selection" === (af.metaKey ? E = "overlay" : E) ? Np : af.altKey ? Ip : Ap,
                    T = e === Rp ? null : Up[E],
                    M = e === Op ? null : zp[E],
                    S = In(k),
                    N = S.extent,
                    P = S.selection,
                    A = N[0][0],
                    I = N[0][1],
                    O = N[1][0],
                    R = N[1][1],
                    D = T && M && af.shiftKey,
                    L = lf(k),
                    F = L,
                    j = r(k, arguments).beforestart();
                "overlay" === E ? S.selection = P = [
                    [l = e === Rp ? A : L[0], d = e === Op ? I : L[1]],
                    [p = e === Rp ? O : l, g = e === Op ? R : d]
                ] : (l = P[0][0], d = P[0][1], p = P[1][0], g = P[1][1]), f = l, h = d, m = p, v = g;
                var U = Yf(k).attr("pointer-events", "none"),
                    z = U.selectAll(".overlay").attr("cursor", Lp[E]);
                if (af.touches) U.on("touchmove.brush", t, !0).on("touchend.brush touchcancel.brush", i, !0);
                else {
                    var H = Yf(af.view).on("keydown.brush", a, !0).on("keyup.brush", s, !0).on("mousemove.brush", t, !0).on("mouseup.brush", i, !0);
                    Jf(af.view)
                }
                Sn(), Ah(k), n.call(k), j.start()
            }
        }

        function a() {
            var t = this.__brush || {
                selection: null
            };
            return t.extent = s.apply(this, arguments), t.dim = e, t
        }
        var u, s = An,
            c = Pn,
            l = Xl(t, "start", "brush", "end"),
            f = 6;
        return t.move = function(t, o) {
            t.selection ? t.on("start.brush", function() {
                r(this, arguments).beforestart().start()
            }).on("interrupt.brush end.brush", function() {
                r(this, arguments).end()
            }).tween("brush", function() {
                function t(e) {
                    a.selection = 1 === e && On(c) ? null : l(e), n.call(i), u.brush()
                }
                var i = this,
                    a = i.__brush,
                    u = r(i, arguments),
                    s = a.selection,
                    c = e.input("function" == typeof o ? o.apply(this, arguments) : o, a.extent),
                    l = Xd(s, c);
                return s && c ? t : t(1)
            }) : t.each(function() {
                var t = this,
                    i = arguments,
                    a = t.__brush,
                    u = e.input("function" == typeof o ? o.apply(t, i) : o, a.extent),
                    s = r(t, i).beforestart();
                Ah(t), a.selection = null == u || On(u) ? null : u, n.call(t), s.start().brush().end()
            })
        }, o.prototype = {
            beforestart: function() {
                return 1 == ++this.active && (this.state.emitter = this, this.starting = !0), this
            },
            start: function() {
                return this.starting && (this.starting = !1, this.emit("start")), this
            },
            brush: function() {
                return this.emit("brush"), this
            },
            end: function() {
                return 0 == --this.active && (delete this.state.emitter, this.emit("end")), this
            },
            emit: function(n) {
                I(new Mp(t, n, e.output(this.state.selection)), l.apply, l, [n, this.that, this.args])
            }
        }, t.extent = function(e) {
            return arguments.length ? (s = "function" == typeof e ? e : Tp([
                [+e[0][0], +e[0][1]],
                [+e[1][0], +e[1][1]]
            ]), t) : s
        }, t.filter = function(e) {
            return arguments.length ? (c = "function" == typeof e ? e : Tp(!!e), t) : c
        }, t.handleSize = function(e) {
            return arguments.length ? (f = +e, t) : f
        }, t.on = function() {
            var e = l.on.apply(l, arguments);
            return e === l ? t : e
        }, t
    }

    function jn(e) {
        return function(t, n) {
            return e(t.source.value + t.target.value, n.source.value + n.target.value)
        }
    }

    function Un() {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
    }

    function zn() {
        return new Un
    }

    function Hn(e) {
        return e.source
    }

    function Bn(e) {
        return e.target
    }

    function qn(e) {
        return e.radius
    }

    function Wn(e) {
        return e.startAngle
    }

    function Vn(e) {
        return e.endAngle
    }

    function Gn() {}

    function Yn(e, t) {
        var n = new Gn;
        if (e instanceof Gn) e.each(function(e, t) {
            n.set(t, e)
        });
        else if (Array.isArray(e)) {
            var r, o = -1,
                i = e.length;
            if (null == t)
                for (; ++o < i;) n.set(o, e[o]);
            else
                for (; ++o < i;) n.set(t(r = e[o], o, e), r)
        } else if (e)
            for (var a in e) n.set(a, e[a]);
        return n
    }

    function Xn() {
        return {}
    }

    function Kn(e, t, n) {
        e[t] = n
    }

    function $n() {
        return nm()
    }

    function Qn(e, t, n) {
        e.set(t, n)
    }

    function Jn() {}

    function Zn(e, t) {
        var n = new Jn;
        if (e instanceof Jn) e.each(function(e) {
            n.add(e)
        });
        else if (e) {
            var r = -1,
                o = e.length;
            if (null == t)
                for (; ++r < o;) n.add(e[r]);
            else
                for (; ++r < o;) n.add(t(e[r], r, e))
        }
        return n
    }

    function er(e) {
        return new Function("d", "return {" + e.map(function(e, t) {
            return JSON.stringify(e) + ": d[" + t + "]"
        }).join(",") + "}")
    }

    function tr(e, t) {
        var n = er(e);
        return function(r, o) {
            return t(n(r), o, e)
        }
    }

    function nr(e) {
        var t = Object.create(null),
            n = [];
        return e.forEach(function(e) {
            for (var r in e) r in t || n.push(t[r] = r)
        }), n
    }

    function rr(e, t, n, r) {
        if (isNaN(t) || isNaN(n)) return e;
        var o, i, a, u, s, c, l, f, d, h = e._root,
            p = {
                data: r
            },
            m = e._x0,
            g = e._y0,
            v = e._x1,
            y = e._y1;
        if (!h) return e._root = p, e;
        for (; h.length;)
            if ((c = t >= (i = (m + v) / 2)) ? m = i : v = i, (l = n >= (a = (g + y) / 2)) ? g = a : y = a, o = h, !(h = h[f = l << 1 | c])) return o[f] = p, e;
        if (u = +e._x.call(null, h.data), s = +e._y.call(null, h.data), t === u && n === s) return p.next = h, o ? o[f] = p : e._root = p, e;
        do {
            o = o ? o[f] = new Array(4) : e._root = new Array(4), (c = t >= (i = (m + v) / 2)) ? m = i : v = i, (l = n >= (a = (g + y) / 2)) ? g = a : y = a
        } while ((f = l << 1 | c) == (d = (s >= a) << 1 | u >= i));
        return o[d] = h, o[f] = p, e
    }

    function or(e) {
        var t, n, r, o, i = e.length,
            a = new Array(i),
            u = new Array(i),
            s = 1 / 0,
            c = 1 / 0,
            l = -1 / 0,
            f = -1 / 0;
        for (n = 0; n < i; ++n) isNaN(r = +this._x.call(null, t = e[n])) || isNaN(o = +this._y.call(null, t)) || (a[n] = r, u[n] = o, r < s && (s = r), r > l && (l = r), o < c && (c = o), o > f && (f = o));
        for (l < s && (s = this._x0, l = this._x1), f < c && (c = this._y0, f = this._y1), this.cover(s, c).cover(l, f), n = 0; n < i; ++n) rr(this, a[n], u[n], e[n]);
        return this
    }

    function ir(e) {
        for (var t = 0, n = e.length; t < n; ++t) this.remove(e[t]);
        return this
    }

    function ar(e) {
        return e[0]
    }

    function ur(e) {
        return e[1]
    }

    function sr(e, t, n) {
        var r = new cr(null == t ? ar : t, null == n ? ur : n, NaN, NaN, NaN, NaN);
        return null == e ? r : r.addAll(e)
    }

    function cr(e, t, n, r, o, i) {
        this._x = e, this._y = t, this._x0 = n, this._y0 = r, this._x1 = o, this._y1 = i, this._root = void 0
    }

    function lr(e) {
        for (var t = {
                data: e.data
            }, n = t; e = e.next;) n = n.next = {
            data: e.data
        };
        return t
    }

    function fr(e) {
        return e.x + e.vx
    }

    function dr(e) {
        return e.y + e.vy
    }

    function hr(e) {
        return e.index
    }

    function pr(e, t) {
        var n = e.get(t);
        if (!n) throw new Error("missing: " + t);
        return n
    }

    function mr(e) {
        return e.x
    }

    function gr(e) {
        return e.y
    }

    function vr(e) {
        return new yr(e)
    }

    function yr(e) {
        if (!(t = ag.exec(e))) throw new Error("invalid format: " + e);
        var t, n = t[1] || " ",
            r = t[2] || ">",
            o = t[3] || "-",
            i = t[4] || "",
            a = !!t[5],
            u = t[6] && +t[6],
            s = !!t[7],
            c = t[8] && +t[8].slice(1),
            l = t[9] || "";
        "n" === l ? (s = !0, l = "g") : ig[l] || (l = ""), (a || "0" === n && "=" === r) && (a = !0, n = "0", r = "="), this.fill = n, this.align = r, this.sign = o, this.symbol = i, this.zero = a, this.width = u, this.comma = s, this.precision = c, this.type = l
    }

    function _r(e) {
        return ug = dg(e), sg = ug.format, cg = ug.formatPrefix, ug
    }

    function br() {
        this.reset()
    }

    function xr(e, t, n) {
        var r = e.s = t + n,
            o = r - t,
            i = r - o;
        e.t = t - i + (n - o)
    }

    function wr(e) {
        return e > 1 ? 0 : e < -1 ? $g : Math.acos(e)
    }

    function kr(e) {
        return e > 1 ? Qg : e < -1 ? -Qg : Math.asin(e)
    }

    function Er(e) {
        return (e = lv(e / 2)) * e
    }

    function Cr() {}

    function Tr(e, t) {
        e && mv.hasOwnProperty(e.type) && mv[e.type](e, t)
    }

    function Mr(e, t, n) {
        var r, o = -1,
            i = e.length - n;
        for (t.lineStart(); ++o < i;) r = e[o], t.point(r[0], r[1], r[2]);
        t.lineEnd()
    }

    function Sr(e, t) {
        var n = -1,
            r = e.length;
        for (t.polygonStart(); ++n < r;) Mr(e[n], t, 1);
        t.polygonEnd()
    }

    function Nr() {
        _v.point = Ar
    }

    function Pr() {
        Ir(vg, yg)
    }

    function Ar(e, t) {
        _v.point = Ir, vg = e, yg = t, e *= tv, t *= tv, _g = e, bg = iv(t = t / 2 + Jg), xg = lv(t)
    }

    function Ir(e, t) {
        e *= tv, t *= tv, t = t / 2 + Jg;
        var n = e - _g,
            r = n >= 0 ? 1 : -1,
            o = r * n,
            i = iv(t),
            a = lv(t),
            u = xg * a,
            s = bg * i + u * iv(o),
            c = u * r * lv(o);
        vv.add(ov(c, s)), _g = e, bg = i, xg = a
    }

    function Or(e) {
        return [ov(e[1], e[0]), kr(e[2])]
    }

    function Rr(e) {
        var t = e[0],
            n = e[1],
            r = iv(n);
        return [r * iv(t), r * lv(t), lv(n)]
    }

    function Dr(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
    }

    function Lr(e, t) {
        return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
    }

    function Fr(e, t) {
        e[0] += t[0], e[1] += t[1], e[2] += t[2]
    }

    function jr(e, t) {
        return [e[0] * t, e[1] * t, e[2] * t]
    }

    function Ur(e) {
        var t = dv(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
        e[0] /= t, e[1] /= t, e[2] /= t
    }

    function zr(e, t) {
        Pg.push(Ag = [wg = e, Eg = e]), t < kg && (kg = t), t > Cg && (Cg = t)
    }

    function Hr(e, t) {
        var n = Rr([e * tv, t * tv]);
        if (Ng) {
            var r = Lr(Ng, n),
                o = [r[1], -r[0], 0],
                i = Lr(o, r);
            Ur(i), i = Or(i);
            var a, u = e - Tg,
                s = u > 0 ? 1 : -1,
                c = i[0] * ev * s,
                l = nv(u) > 180;
            l ^ (s * Tg < c && c < s * e) ? (a = i[1] * ev) > Cg && (Cg = a) : (c = (c + 360) % 360 - 180, l ^ (s * Tg < c && c < s * e) ? (a = -i[1] * ev) < kg && (kg = a) : (t < kg && (kg = t), t > Cg && (Cg = t))), l ? e < Tg ? Yr(wg, e) > Yr(wg, Eg) && (Eg = e) : Yr(e, Eg) > Yr(wg, Eg) && (wg = e) : Eg >= wg ? (e < wg && (wg = e), e > Eg && (Eg = e)) : e > Tg ? Yr(wg, e) > Yr(wg, Eg) && (Eg = e) : Yr(e, Eg) > Yr(wg, Eg) && (wg = e)
        } else Pg.push(Ag = [wg = e, Eg = e]);
        t < kg && (kg = t), t > Cg && (Cg = t), Ng = n, Tg = e
    }

    function Br() {
        wv.point = Hr
    }

    function qr() {
        Ag[0] = wg, Ag[1] = Eg, wv.point = zr, Ng = null
    }

    function Wr(e, t) {
        if (Ng) {
            var n = e - Tg;
            xv.add(nv(n) > 180 ? n + (n > 0 ? 360 : -360) : n)
        } else Mg = e, Sg = t;
        _v.point(e, t), Hr(e, t)
    }

    function Vr() {
        _v.lineStart()
    }

    function Gr() {
        Wr(Mg, Sg), _v.lineEnd(), nv(xv) > Kg && (wg = -(Eg = 180)), Ag[0] = wg, Ag[1] = Eg, Ng = null
    }

    function Yr(e, t) {
        return (t -= e) < 0 ? t + 360 : t
    }

    function Xr(e, t) {
        return e[0] - t[0]
    }

    function Kr(e, t) {
        return e[0] <= e[1] ? e[0] <= t && t <= e[1] : t < e[0] || e[1] < t
    }

    function $r(e, t) {
        e *= tv, t *= tv;
        var n = iv(t);
        Qr(n * iv(e), n * lv(e), lv(t))
    }

    function Qr(e, t, n) {
        ++Ig, Rg += (e - Rg) / Ig, Dg += (t - Dg) / Ig, Lg += (n - Lg) / Ig
    }

    function Jr() {
        Ev.point = Zr
    }

    function Zr(e, t) {
        e *= tv, t *= tv;
        var n = iv(t);
        Vg = n * iv(e), Gg = n * lv(e), Yg = lv(t), Ev.point = eo, Qr(Vg, Gg, Yg)
    }

    function eo(e, t) {
        e *= tv, t *= tv;
        var n = iv(t),
            r = n * iv(e),
            o = n * lv(e),
            i = lv(t),
            a = ov(dv((a = Gg * i - Yg * o) * a + (a = Yg * r - Vg * i) * a + (a = Vg * o - Gg * r) * a), Vg * r + Gg * o + Yg * i);
        Og += a, Fg += a * (Vg + (Vg = r)), jg += a * (Gg + (Gg = o)), Ug += a * (Yg + (Yg = i)), Qr(Vg, Gg, Yg)
    }

    function to() {
        Ev.point = $r
    }

    function no() {
        Ev.point = oo
    }

    function ro() {
        io(qg, Wg), Ev.point = $r
    }

    function oo(e, t) {
        qg = e, Wg = t, e *= tv, t *= tv, Ev.point = io;
        var n = iv(t);
        Vg = n * iv(e), Gg = n * lv(e), Yg = lv(t), Qr(Vg, Gg, Yg)
    }

    function io(e, t) {
        e *= tv, t *= tv;
        var n = iv(t),
            r = n * iv(e),
            o = n * lv(e),
            i = lv(t),
            a = Gg * i - Yg * o,
            u = Yg * r - Vg * i,
            s = Vg * o - Gg * r,
            c = dv(a * a + u * u + s * s),
            l = kr(c),
            f = c && -l / c;
        zg += f * a, Hg += f * u, Bg += f * s, Og += l, Fg += l * (Vg + (Vg = r)), jg += l * (Gg + (Gg = o)), Ug += l * (Yg + (Yg = i)), Qr(Vg, Gg, Yg)
    }

    function ao(e, t) {
        return [e > $g ? e - Zg : e < -$g ? e + Zg : e, t]
    }

    function uo(e, t, n) {
        return (e %= Zg) ? t || n ? Mv(co(e), lo(t, n)) : co(e) : t || n ? lo(t, n) : ao
    }

    function so(e) {
        return function(t, n) {
            return t += e, [t > $g ? t - Zg : t < -$g ? t + Zg : t, n]
        }
    }

    function co(e) {
        var t = so(e);
        return t.invert = so(-e), t
    }

    function lo(e, t) {
        function n(e, t) {
            var n = iv(t),
                u = iv(e) * n,
                s = lv(e) * n,
                c = lv(t),
                l = c * r + u * o;
            return [ov(s * i - l * a, u * r - c * o), kr(l * i + s * a)]
        }
        var r = iv(e),
            o = lv(e),
            i = iv(t),
            a = lv(t);
        return n.invert = function(e, t) {
            var n = iv(t),
                u = iv(e) * n,
                s = lv(e) * n,
                c = lv(t),
                l = c * i - s * a;
            return [ov(s * i + c * a, u * r + l * o), kr(l * r - u * o)]
        }, n
    }

    function fo(e, t, n, r, o, i) {
        if (n) {
            var a = iv(t),
                u = lv(t),
                s = r * n;
            null == o ? (o = t + r * Zg, i = t - s / 2) : (o = ho(a, o), i = ho(a, i), (r > 0 ? o < i : o > i) && (o += r * Zg));
            for (var c, l = o; r > 0 ? l > i : l < i; l -= s) c = Or([a, -u * iv(l), -u * lv(l)]), e.point(c[0], c[1])
        }
    }

    function ho(e, t) {
        t = Rr(t), t[0] -= e, Ur(t);
        var n = wr(-t[1]);
        return ((-t[2] < 0 ? -n : n) + Zg - Kg) % Zg
    }

    function po(e, t, n, r) {
        this.x = e, this.z = t, this.o = n, this.e = r, this.v = !1, this.n = this.p = null
    }

    function mo(e) {
        if (t = e.length) {
            for (var t, n, r = 0, o = e[0]; ++r < t;) o.n = n = e[r], n.p = o, o = n;
            o.n = n = e[0], n.p = o
        }
    }

    function go(e) {
        return e.length > 1
    }

    function vo(e, t) {
        return ((e = e.x)[0] < 0 ? e[1] - Qg - Kg : Qg - e[1]) - ((t = t.x)[0] < 0 ? t[1] - Qg - Kg : Qg - t[1])
    }

    function yo(e) {
        var t, n = NaN,
            r = NaN,
            o = NaN;
        return {
            lineStart: function() {
                e.lineStart(), t = 1
            },
            point: function(i, a) {
                var u = i > 0 ? $g : -$g,
                    s = nv(i - n);
                nv(s - $g) < Kg ? (e.point(n, r = (r + a) / 2 > 0 ? Qg : -Qg), e.point(o, r), e.lineEnd(), e.lineStart(), e.point(u, r), e.point(i, r), t = 0) : o !== u && s >= $g && (nv(n - o) < Kg && (n -= o * Kg), nv(i - u) < Kg && (i -= u * Kg), r = _o(n, r, i, a), e.point(o, r), e.lineEnd(), e.lineStart(), e.point(u, r), t = 0), e.point(n = i, r = a), o = u
            },
            lineEnd: function() {
                e.lineEnd(), n = r = NaN
            },
            clean: function() {
                return 2 - t
            }
        }
    }

    function _o(e, t, n, r) {
        var o, i, a = lv(e - n);
        return nv(a) > Kg ? rv((lv(t) * (i = iv(r)) * lv(n) - lv(r) * (o = iv(t)) * lv(e)) / (o * i * a)) : (t + r) / 2
    }

    function bo(e, t, n, r) {
        var o;
        if (null == e) o = n * Qg, r.point(-$g, o), r.point(0, o), r.point($g, o), r.point($g, 0), r.point($g, -o), r.point(0, -o), r.point(-$g, -o), r.point(-$g, 0), r.point(-$g, o);
        else if (nv(e[0] - t[0]) > Kg) {
            var i = e[0] < t[0] ? $g : -$g;
            o = n * i / 2, r.point(-i, o), r.point(0, o), r.point(i, o)
        } else r.point(t[0], t[1])
    }

    function xo(e, t, n, r) {
        function o(o, i) {
            return e <= o && o <= n && t <= i && i <= r
        }

        function i(o, i, u, c) {
            var l = 0,
                f = 0;
            if (null == o || (l = a(o, u)) !== (f = a(i, u)) || s(o, i) < 0 ^ u > 0)
                do {
                    c.point(0 === l || 3 === l ? e : n, l > 1 ? r : t)
                } while ((l = (l + u + 4) % 4) !== f);
            else c.point(i[0], i[1])
        }

        function a(r, o) {
            return nv(r[0] - e) < Kg ? o > 0 ? 0 : 3 : nv(r[0] - n) < Kg ? o > 0 ? 2 : 1 : nv(r[1] - t) < Kg ? o > 0 ? 1 : 0 : o > 0 ? 3 : 2
        }

        function u(e, t) {
            return s(e.x, t.x)
        }

        function s(e, t) {
            var n = a(e, 1),
                r = a(t, 1);
            return n !== r ? n - r : 0 === n ? t[1] - e[1] : 1 === n ? e[0] - t[0] : 2 === n ? e[1] - t[1] : t[0] - e[0]
        }
        return function(a) {
            function s(e, t) {
                o(e, t) && T.point(e, t)
            }

            function c() {
                for (var t = 0, n = 0, o = g.length; n < o; ++n)
                    for (var i, a, u = g[n], s = 1, c = u.length, l = u[0], f = l[0], d = l[1]; s < c; ++s) i = f, a = d, l = u[s], f = l[0], d = l[1], a <= r ? d > r && (f - i) * (r - a) > (d - a) * (e - i) && ++t : d <= r && (f - i) * (r - a) < (d - a) * (e - i) && --t;
                return t
            }

            function l() {
                T = M, m = [], g = [], C = !0
            }

            function f() {
                var e = c(),
                    t = C && e,
                    n = (m = Il(m)).length;
                (t || n) && (a.polygonStart(), t && (a.lineStart(), i(null, null, 1, a), a.lineEnd()), n && qv(m, u, e, i, a), a.polygonEnd()), T = a, m = g = v = null
            }

            function d() {
                S.point = p, g && g.push(v = []), E = !0, k = !1, x = w = NaN
            }

            function h() {
                m && (p(y, _), b && k && M.rejoin(), m.push(M.result())), S.point = s, k && T.lineEnd()
            }

            function p(i, a) {
                var u = o(i, a);
                if (g && v.push([i, a]), E) y = i, _ = a, b = u, E = !1, u && (T.lineStart(), T.point(i, a));
                else if (u && k) T.point(i, a);
                else {
                    var s = [x = Math.max(Qv, Math.min($v, x)), w = Math.max(Qv, Math.min($v, w))],
                        c = [i = Math.max(Qv, Math.min($v, i)), a = Math.max(Qv, Math.min($v, a))];
                    Kv(s, c, e, t, n, r) ? (k || (T.lineStart(), T.point(s[0], s[1])), T.point(c[0], c[1]), u || T.lineEnd(), C = !1) : u && (T.lineStart(), T.point(i, a), C = !1)
                }
                x = i, w = a, k = u
            }
            var m, g, v, y, _, b, x, w, k, E, C, T = a,
                M = Hv(),
                S = {
                    point: s,
                    lineStart: d,
                    lineEnd: h,
                    polygonStart: l,
                    polygonEnd: f
                };
            return S
        }
    }

    function wo() {
        ey.point = Eo, ey.lineEnd = ko
    }

    function ko() {
        ey.point = ey.lineEnd = Cr
    }

    function Eo(e, t) {
        e *= tv, t *= tv, Sv = e, Nv = lv(t), Pv = iv(t), ey.point = Co
    }

    function Co(e, t) {
        e *= tv, t *= tv;
        var n = lv(t),
            r = iv(t),
            o = nv(e - Sv),
            i = iv(o),
            a = lv(o),
            u = r * a,
            s = Pv * n - Nv * r * i,
            c = Nv * n + Pv * r * i;
        Zv.add(ov(dv(u * u + s * s), c)), Sv = e, Nv = n, Pv = r
    }

    function To(e, t) {
        return !(!e || !ay.hasOwnProperty(e.type)) && ay[e.type](e, t)
    }

    function Mo(e, t) {
        return 0 === oy(e, t)
    }

    function So(e, t) {
        var n = oy(e[0], e[1]);
        return oy(e[0], t) + oy(t, e[1]) <= n + Kg
    }

    function No(e, t) {
        return !!Vv(e.map(Po), Ao(t))
    }

    function Po(e) {
        return e = e.map(Ao), e.pop(), e
    }

    function Ao(e) {
        return [e[0] * tv, e[1] * tv]
    }

    function Io(e, t, n) {
        var r = _l(e, t - Kg, n).concat(t);
        return function(e) {
            return r.map(function(t) {
                return [e, t]
            })
        }
    }

    function Oo(e, t, n) {
        var r = _l(e, t - Kg, n).concat(t);
        return function(e) {
            return r.map(function(t) {
                return [t, e]
            })
        }
    }

    function Ro() {
        function e() {
            return {
                type: "MultiLineString",
                coordinates: t()
            }
        }

        function t() {
            return _l(av(i / g) * g, o, g).map(d).concat(_l(av(c / v) * v, s, v).map(h)).concat(_l(av(r / p) * p, n, p).filter(function(e) {
                return nv(e % g) > Kg
            }).map(l)).concat(_l(av(u / m) * m, a, m).filter(function(e) {
                return nv(e % v) > Kg
            }).map(f))
        }
        var n, r, o, i, a, u, s, c, l, f, d, h, p = 10,
            m = p,
            g = 90,
            v = 360,
            y = 2.5;
        return e.lines = function() {
            return t().map(function(e) {
                return {
                    type: "LineString",
                    coordinates: e
                }
            })
        }, e.outline = function() {
            return {
                type: "Polygon",
                coordinates: [d(i).concat(h(s).slice(1), d(o).reverse().slice(1), h(c).reverse().slice(1))]
            }
        }, e.extent = function(t) {
            return arguments.length ? e.extentMajor(t).extentMinor(t) : e.extentMinor()
        }, e.extentMajor = function(t) {
            return arguments.length ? (i = +t[0][0], o = +t[1][0], c = +t[0][1], s = +t[1][1], i > o && (t = i, i = o, o = t), c > s && (t = c, c = s, s = t), e.precision(y)) : [
                [i, c],
                [o, s]
            ]
        }, e.extentMinor = function(t) {
            return arguments.length ? (r = +t[0][0], n = +t[1][0], u = +t[0][1], a = +t[1][1], r > n && (t = r, r = n, n = t), u > a && (t = u, u = a, a = t), e.precision(y)) : [
                [r, u],
                [n, a]
            ]
        }, e.step = function(t) {
            return arguments.length ? e.stepMajor(t).stepMinor(t) : e.stepMinor()
        }, e.stepMajor = function(t) {
            return arguments.length ? (g = +t[0], v = +t[1], e) : [g, v]
        }, e.stepMinor = function(t) {
            return arguments.length ? (p = +t[0], m = +t[1], e) : [p, m]
        }, e.precision = function(t) {
            return arguments.length ? (y = +t, l = Io(u, a, 90), f = Oo(r, n, y), d = Io(c, s, 90), h = Oo(i, o, y), e) : y
        }, e.extentMajor([
            [-180, -90 + Kg],
            [180, 90 - Kg]
        ]).extentMinor([
            [-180, -80 - Kg],
            [180, 80 + Kg]
        ])
    }

    function Do() {
        return Ro()()
    }

    function Lo() {
        dy.point = Fo
    }

    function Fo(e, t) {
        dy.point = jo, Av = Ov = e, Iv = Rv = t
    }

    function jo(e, t) {
        fy.add(Rv * e - Ov * t), Ov = e, Rv = t
    }

    function Uo() {
        jo(Av, Iv)
    }

    function zo(e, t) {
        e < py && (py = e), e > gy && (gy = e), t < my && (my = t), t > vy && (vy = t)
    }

    function Ho(e, t) {
        by += e, xy += t, ++wy
    }

    function Bo() {
        Ny.point = qo
    }

    function qo(e, t) {
        Ny.point = Wo, Ho(Fv = e, jv = t)
    }

    function Wo(e, t) {
        var n = e - Fv,
            r = t - jv,
            o = dv(n * n + r * r);
        ky += o * (Fv + e) / 2, Ey += o * (jv + t) / 2, Cy += o, Ho(Fv = e, jv = t)
    }

    function Vo() {
        Ny.point = Ho
    }

    function Go() {
        Ny.point = Xo
    }

    function Yo() {
        Ko(Dv, Lv)
    }

    function Xo(e, t) {
        Ny.point = Ko, Ho(Dv = Fv = e, Lv = jv = t)
    }

    function Ko(e, t) {
        var n = e - Fv,
            r = t - jv,
            o = dv(n * n + r * r);
        ky += o * (Fv + e) / 2, Ey += o * (jv + t) / 2, Cy += o, o = jv * e - Fv * t, Ty += o * (Fv + e), My += o * (jv + t), Sy += 3 * o, Ho(Fv = e, jv = t)
    }

    function $o(e) {
        this._context = e
    }

    function Qo(e, t) {
        Fy.point = Jo, Iy = Ry = e, Oy = Dy = t
    }

    function Jo(e, t) {
        Ry -= e, Dy -= t, Ly.add(dv(Ry * Ry + Dy * Dy)), Ry = e, Dy = t
    }

    function Zo() {
        this._string = []
    }

    function ei(e) {
        return "m0," + e + "a" + e + "," + e + " 0 1,1 0," + -2 * e + "a" + e + "," + e + " 0 1,1 0," + 2 * e + "z"
    }

    function ti(e) {
        return function(t) {
            var n = new ni;
            for (var r in e) n[r] = e[r];
            return n.stream = t, n
        }
    }

    function ni() {}

    function ri(e, t, n) {
        var r = t[1][0] - t[0][0],
            o = t[1][1] - t[0][1],
            i = e.clipExtent && e.clipExtent();
        e.scale(150).translate([0, 0]), null != i && e.clipExtent(null), gv(n, e.stream(_y));
        var a = _y.result(),
            u = Math.min(r / (a[1][0] - a[0][0]), o / (a[1][1] - a[0][1])),
            s = +t[0][0] + (r - u * (a[1][0] + a[0][0])) / 2,
            c = +t[0][1] + (o - u * (a[1][1] + a[0][1])) / 2;
        return null != i && e.clipExtent(i), e.scale(150 * u).translate([s, c])
    }

    function oi(e, t, n) {
        return ri(e, [
            [0, 0], t
        ], n)
    }

    function ii(e) {
        return ti({
            point: function(t, n) {
                t = e(t, n), this.stream.point(t[0], t[1])
            }
        })
    }

    function ai(e, t) {
        function n(r, o, i, a, u, s, c, l, f, d, h, p, m, g) {
            var v = c - r,
                y = l - o,
                _ = v * v + y * y;
            if (_ > 4 * t && m--) {
                var b = a + d,
                    x = u + h,
                    w = s + p,
                    k = dv(b * b + x * x + w * w),
                    E = kr(w /= k),
                    C = nv(nv(w) - 1) < Kg || nv(i - f) < Kg ? (i + f) / 2 : ov(x, b),
                    T = e(C, E),
                    M = T[0],
                    S = T[1],
                    N = M - r,
                    P = S - o,
                    A = y * N - v * P;
                (A * A / _ > t || nv((v * N + y * P) / _ - .5) > .3 || a * d + u * h + s * p < By) && (n(r, o, i, a, u, s, M, S, C, b /= k, x /= k, w, m, g), g.point(M, S), n(M, S, C, b, x, w, c, l, f, d, h, p, m, g))
            }
        }
        return function(t) {
            function r(n, r) {
                n = e(n, r), t.point(n[0], n[1])
            }

            function o() {
                v = NaN, w.point = i, t.lineStart()
            }

            function i(r, o) {
                var i = Rr([r, o]),
                    a = e(r, o);
                n(v, y, g, _, b, x, v = a[0], y = a[1], g = r, _ = i[0], b = i[1], x = i[2], Hy, t), t.point(v, y)
            }

            function a() {
                w.point = r, t.lineEnd()
            }

            function u() {
                o(), w.point = s, w.lineEnd = c
            }

            function s(e, t) {
                i(l = e, t), f = v, d = y, h = _, p = b, m = x, w.point = i
            }

            function c() {
                n(v, y, g, _, b, x, f, d, l, h, p, m, Hy, t), w.lineEnd = a, a()
            }
            var l, f, d, h, p, m, g, v, y, _, b, x, w = {
                point: r,
                lineStart: o,
                lineEnd: a,
                polygonStart: function() {
                    t.polygonStart(), w.lineStart = u
                },
                polygonEnd: function() {
                    t.polygonEnd(), w.lineStart = o
                }
            };
            return w
        }
    }

    function ui(e) {
        return ti({
            point: function(t, n) {
                var r = e(t, n);
                return this.stream.point(r[0], r[1])
            }
        })
    }

    function si(e) {
        return ci(function() {
            return e
        })()
    }

    function ci(e) {
        function t(e) {
            return e = l(e[0] * tv, e[1] * tv), [e[0] * g + u, s - e[1] * g]
        }

        function n(e) {
            return (e = l.invert((e[0] - u) / g, (s - e[1]) / g)) && [e[0] * ev, e[1] * ev]
        }

        function r(e, t) {
            return e = a(e, t), [e[0] * g + u, s - e[1] * g]
        }

        function o() {
            l = Mv(c = uo(x, w, k), a);
            var e = a(_, b);
            return u = v - e[0] * g, s = y + e[1] * g, i()
        }

        function i() {
            return p = m = null, t
        }
        var a, u, s, c, l, f, d, h, p, m, g = 150,
            v = 480,
            y = 250,
            _ = 0,
            b = 0,
            x = 0,
            w = 0,
            k = 0,
            E = null,
            C = Yv,
            T = null,
            M = cy,
            S = .5,
            N = qy(r, S);
        return t.stream = function(e) {
                return p && m === e ? p : p = Wy(ui(c)(C(N(M(m = e)))))
            }, t.preclip = function(e) {
                return arguments.length ? (C = e, E = void 0, i()) : C
            }, t.postclip = function(e) {
                return arguments.length ? (M = e, T = f = d = h = null, i()) : M
            }, t.clipAngle = function(e) {
                return arguments.length ? (C = +e ? Xv(E = e * tv) : (E = null, Yv), i()) : E * ev
            }, t.clipExtent = function(e) {
                return arguments.length ? (M = null == e ? (T = f = d = h = null, cy) : xo(T = +e[0][0], f = +e[0][1], d = +e[1][0], h = +e[1][1]), i()) : null == T ? null : [
                    [T, f],
                    [d, h]
                ]
            }, t.scale = function(e) {
                return arguments.length ? (g = +e, o()) : g
            }, t.translate = function(e) {
                return arguments.length ? (v = +e[0], y = +e[1], o()) : [v, y]
            }, t.center = function(e) {
                return arguments.length ? (_ = e[0] % 360 * tv, b = e[1] % 360 * tv, o()) : [_ * ev, b * ev]
            }, t.rotate = function(e) {
                return arguments.length ? (x = e[0] % 360 * tv, w = e[1] % 360 * tv, k = e.length > 2 ? e[2] % 360 * tv : 0, o()) : [x * ev, w * ev, k * ev]
            }, t.precision = function(e) {
                return arguments.length ? (N = qy(r, S = e * e), i()) : dv(S)
            }, t.fitExtent = function(e, n) {
                return ri(t, e, n)
            }, t.fitSize = function(e, n) {
                return oi(t, e, n)
            },
            function() {
                return a = e.apply(this, arguments), t.invert = a.invert && n, o()
            }
    }

    function li(e) {
        var t = 0,
            n = $g / 3,
            r = ci(e),
            o = r(t, n);
        return o.parallels = function(e) {
            return arguments.length ? r(t = e[0] * tv, n = e[1] * tv) : [t * ev, n * ev]
        }, o
    }

    function fi(e) {
        function t(e, t) {
            return [e * n, lv(t) / n]
        }
        var n = iv(e);
        return t.invert = function(e, t) {
            return [e / n, kr(t * n)]
        }, t
    }

    function di(e, t) {
        function n(e, t) {
            var n = dv(i - 2 * o * lv(t)) / o;
            return [n * lv(e *= o), a - n * iv(e)]
        }
        var r = lv(e),
            o = (r + lv(t)) / 2;
        if (nv(o) < Kg) return fi(e);
        var i = 1 + r * (2 * o - r),
            a = dv(i) / o;
        return n.invert = function(e, t) {
            var n = a - t;
            return [ov(e, nv(n)) / o * fv(n), kr((i - (e * e + n * n) * o * o) / (2 * o))]
        }, n
    }

    function hi(e) {
        var t = e.length;
        return {
            point: function(n, r) {
                for (var o = -1; ++o < t;) e[o].point(n, r)
            },
            sphere: function() {
                for (var n = -1; ++n < t;) e[n].sphere()
            },
            lineStart: function() {
                for (var n = -1; ++n < t;) e[n].lineStart()
            },
            lineEnd: function() {
                for (var n = -1; ++n < t;) e[n].lineEnd()
            },
            polygonStart: function() {
                for (var n = -1; ++n < t;) e[n].polygonStart()
            },
            polygonEnd: function() {
                for (var n = -1; ++n < t;) e[n].polygonEnd()
            }
        }
    }

    function pi(e) {
        return function(t, n) {
            var r = iv(t),
                o = iv(n),
                i = e(r * o);
            return [i * o * lv(t), i * lv(n)]
        }
    }

    function mi(e) {
        return function(t, n) {
            var r = dv(t * t + n * n),
                o = e(r),
                i = lv(o),
                a = iv(o);
            return [ov(t * i, r * a), kr(r && n * i / r)]
        }
    }

    function gi(e, t) {
        return [e, sv(hv((Qg + t) / 2))]
    }

    function vi(e) {
        function t() {
            var t = $g * u(),
                a = i(Uv(i.rotate()).invert([0, 0]));
            return c(null == l ? [
                [a[0] - t, a[1] - t],
                [a[0] + t, a[1] + t]
            ] : e === gi ? [
                [Math.max(a[0] - t, l), n],
                [Math.min(a[0] + t, r), o]
            ] : [
                [l, Math.max(a[1] - t, n)],
                [r, Math.min(a[1] + t, o)]
            ])
        }
        var n, r, o, i = si(e),
            a = i.center,
            u = i.scale,
            s = i.translate,
            c = i.clipExtent,
            l = null;
        return i.scale = function(e) {
            return arguments.length ? (u(e), t()) : u()
        }, i.translate = function(e) {
            return arguments.length ? (s(e), t()) : s()
        }, i.center = function(e) {
            return arguments.length ? (a(e), t()) : a()
        }, i.clipExtent = function(e) {
            return arguments.length ? (null == e ? l = n = r = o = null : (l = +e[0][0], n = +e[0][1], r = +e[1][0], o = +e[1][1]), t()) : null == l ? null : [
                [l, n],
                [r, o]
            ]
        }, t()
    }

    function yi(e) {
        return hv((Qg + e) / 2)
    }

    function _i(e, t) {
        function n(e, t) {
            i > 0 ? t < -Qg + Kg && (t = -Qg + Kg) : t > Qg - Kg && (t = Qg - Kg);
            var n = i / cv(yi(t), o);
            return [n * lv(o * e), i - n * iv(o * e)]
        }
        var r = iv(e),
            o = e === t ? lv(e) : sv(r / iv(t)) / sv(yi(t) / yi(e)),
            i = r * cv(yi(e), o) / o;
        return o ? (n.invert = function(e, t) {
            var n = i - t,
                r = fv(o) * dv(e * e + n * n);
            return [ov(e, nv(n)) / o * fv(n), 2 * rv(cv(i / r, 1 / o)) - Qg]
        }, n) : gi
    }

    function bi(e, t) {
        return [e, t]
    }

    function xi(e, t) {
        function n(e, t) {
            var n = i - t,
                r = o * e;
            return [n * lv(r), i - n * iv(r)]
        }
        var r = iv(e),
            o = e === t ? lv(e) : (r - iv(t)) / (t - e),
            i = r / o + e;
        return nv(o) < Kg ? bi : (n.invert = function(e, t) {
            var n = i - t;
            return [ov(e, nv(n)) / o * fv(n), i - fv(o) * dv(e * e + n * n)]
        }, n)
    }

    function wi(e, t) {
        var n = iv(t),
            r = iv(e) * n;
        return [n * lv(e) / r, lv(t) / r]
    }

    function ki(e, t, n, r) {
        return 1 === e && 1 === t && 0 === n && 0 === r ? cy : ti({
            point: function(o, i) {
                this.stream.point(o * e + n, i * t + r)
            }
        })
    }

    function Ei(e, t) {
        var n = t * t,
            r = n * n;
        return [e * (.8707 - .131979 * n + r * (r * (.003971 * n - .001529 * r) - .013791)), t * (1.007226 + n * (.015085 + r * (.028874 * n - .044475 - .005916 * r)))]
    }

    function Ci(e, t) {
        return [iv(t) * lv(e), lv(t)]
    }

    function Ti(e, t) {
        var n = iv(t),
            r = 1 + iv(e) * n;
        return [n * lv(e) / r, lv(t) / r]
    }

    function Mi(e, t) {
        return [sv(hv((Qg + t) / 2)), -e]
    }

    function Si(e, t) {
        return e.parent === t.parent ? 1 : 2
    }

    function Ni(e) {
        return e.reduce(Pi, 0) / e.length
    }

    function Pi(e, t) {
        return e + t.x
    }

    function Ai(e) {
        return 1 + e.reduce(Ii, 0)
    }

    function Ii(e, t) {
        return Math.max(e, t.y)
    }

    function Oi(e) {
        for (var t; t = e.children;) e = t[0];
        return e
    }

    function Ri(e) {
        for (var t; t = e.children;) e = t[t.length - 1];
        return e
    }

    function Di(e) {
        var t = 0,
            n = e.children,
            r = n && n.length;
        if (r)
            for (; --r >= 0;) t += n[r].value;
        else t = 1;
        e.value = t
    }

    function Li(e, t) {
        if (e === t) return e;
        var n = e.ancestors(),
            r = t.ancestors(),
            o = null;
        for (e = n.pop(), t = r.pop(); e === t;) o = e, e = n.pop(), t = r.pop();
        return o
    }

    function Fi(e, t) {
        var n, r, o, i, a, u = new Bi(e),
            s = +e.value && (u.value = e.value),
            c = [u];
        for (null == t && (t = Ui); n = c.pop();)
            if (s && (n.value = +n.data.value), (o = t(n.data)) && (a = o.length))
                for (n.children = new Array(a), i = a - 1; i >= 0; --i) c.push(r = n.children[i] = new Bi(o[i])), r.parent = n, r.depth = n.depth + 1;
        return u.eachBefore(Hi)
    }

    function ji() {
        return Fi(this).eachBefore(zi)
    }

    function Ui(e) {
        return e.children
    }

    function zi(e) {
        e.data = e.data.data
    }

    function Hi(e) {
        var t = 0;
        do {
            e.height = t
        } while ((e = e.parent) && e.height < ++t)
    }

    function Bi(e) {
        this.data = e, this.depth = this.height = 0, this.parent = null
    }

    function qi(e) {
        for (var t, n, r = e.length; r;) n = Math.random() * r-- | 0, t = e[r], e[r] = e[n], e[n] = t;
        return e
    }

    function Wi(e, t) {
        var n, r;
        if (Yi(t, e)) return [t];
        for (n = 0; n < e.length; ++n)
            if (Vi(t, e[n]) && Yi($i(e[n], t), e)) return [e[n], t];
        for (n = 0; n < e.length - 1; ++n)
            for (r = n + 1; r < e.length; ++r)
                if (Vi($i(e[n], e[r]), t) && Vi($i(e[n], t), e[r]) && Vi($i(e[r], t), e[n]) && Yi(Qi(e[n], e[r], t), e)) return [e[n], e[r], t];
        throw new Error
    }

    function Vi(e, t) {
        var n = e.r - t.r,
            r = t.x - e.x,
            o = t.y - e.y;
        return n < 0 || n * n < r * r + o * o
    }

    function Gi(e, t) {
        var n = e.r - t.r + 1e-6,
            r = t.x - e.x,
            o = t.y - e.y;
        return n > 0 && n * n > r * r + o * o
    }

    function Yi(e, t) {
        for (var n = 0; n < t.length; ++n)
            if (!Gi(e, t[n])) return !1;
        return !0
    }

    function Xi(e) {
        switch (e.length) {
            case 1:
                return Ki(e[0]);
            case 2:
                return $i(e[0], e[1]);
            case 3:
                return Qi(e[0], e[1], e[2])
        }
    }

    function Ki(e) {
        return {
            x: e.x,
            y: e.y,
            r: e.r
        }
    }

    function $i(e, t) {
        var n = e.x,
            r = e.y,
            o = e.r,
            i = t.x,
            a = t.y,
            u = t.r,
            s = i - n,
            c = a - r,
            l = u - o,
            f = Math.sqrt(s * s + c * c);
        return {
            x: (n + i + s / f * l) / 2,
            y: (r + a + c / f * l) / 2,
            r: (f + o + u) / 2
        }
    }

    function Qi(e, t, n) {
        var r = e.x,
            o = e.y,
            i = e.r,
            a = t.x,
            u = t.y,
            s = t.r,
            c = n.x,
            l = n.y,
            f = n.r,
            d = r - a,
            h = r - c,
            p = o - u,
            m = o - l,
            g = s - i,
            v = f - i,
            y = r * r + o * o - i * i,
            _ = y - a * a - u * u + s * s,
            b = y - c * c - l * l + f * f,
            x = h * p - d * m,
            w = (p * b - m * _) / (2 * x) - r,
            k = (m * g - p * v) / x,
            E = (h * _ - d * b) / (2 * x) - o,
            C = (d * v - h * g) / x,
            T = k * k + C * C - 1,
            M = 2 * (i + w * k + E * C),
            S = w * w + E * E - i * i,
            N = -(T ? (M + Math.sqrt(M * M - 4 * T * S)) / (2 * T) : S / M);
        return {
            x: r + w + k * N,
            y: o + E + C * N,
            r: N
        }
    }

    function Ji(e, t, n) {
        var r = e.x,
            o = e.y,
            i = t.r + n.r,
            a = e.r + n.r,
            u = t.x - r,
            s = t.y - o,
            c = u * u + s * s;
        if (c) {
            var l = .5 + ((a *= a) - (i *= i)) / (2 * c),
                f = Math.sqrt(Math.max(0, 2 * i * (a + c) - (a -= c) * a - i * i)) / (2 * c);
            n.x = r + l * u + f * s, n.y = o + l * s - f * u
        } else n.x = r + a, n.y = o
    }

    function Zi(e, t) {
        var n = t.x - e.x,
            r = t.y - e.y,
            o = e.r + t.r;
        return o * o - 1e-6 > n * n + r * r
    }

    function ea(e) {
        var t = e._,
            n = e.next._,
            r = t.r + n.r,
            o = (t.x * n.r + n.x * t.r) / r,
            i = (t.y * n.r + n.y * t.r) / r;
        return o * o + i * i
    }

    function ta(e) {
        this._ = e, this.next = null, this.previous = null
    }

    function na(e) {
        if (!(o = e.length)) return 0;
        var t, n, r, o, i, a, u, s, c, l, f;
        if (t = e[0], t.x = 0, t.y = 0, !(o > 1)) return t.r;
        if (n = e[1], t.x = -n.r, n.x = t.r, n.y = 0, !(o > 2)) return t.r + n.r;
        Ji(n, t, r = e[2]), t = new ta(t), n = new ta(n), r = new ta(r), t.next = r.previous = n, n.next = t.previous = r, r.next = n.previous = t;
        e: for (u = 3; u < o; ++u) {
            Ji(t._, n._, r = e[u]), r = new ta(r), s = n.next, c = t.previous, l = n._.r, f = t._.r;
            do {
                if (l <= f) {
                    if (Zi(s._, r._)) {
                        n = s, t.next = n, n.previous = t, --u;
                        continue e
                    }
                    l += s._.r, s = s.next
                } else {
                    if (Zi(c._, r._)) {
                        t = c, t.next = n, n.previous = t, --u;
                        continue e
                    }
                    f += c._.r, c = c.previous
                }
            } while (s !== c.next);
            for (r.previous = t, r.next = n, t.next = n.previous = n = r, i = ea(t);
                (r = r.next) !== n;)(a = ea(r)) < i && (t = r, i = a);
            n = t.next
        }
        for (t = [n._], r = n;
            (r = r.next) !== n;) t.push(r._);
        for (r = x_(t), u = 0; u < o; ++u) t = e[u], t.x -= r.x, t.y -= r.y;
        return r.r
    }

    function ra(e) {
        return null == e ? null : oa(e)
    }

    function oa(e) {
        if ("function" != typeof e) throw new Error;
        return e
    }

    function ia() {
        return 0
    }

    function aa(e) {
        return Math.sqrt(e.value)
    }

    function ua(e) {
        return function(t) {
            t.children || (t.r = Math.max(0, +e(t) || 0))
        }
    }

    function sa(e, t) {
        return function(n) {
            if (r = n.children) {
                var r, o, i, a = r.length,
                    u = e(n) * t || 0;
                if (u)
                    for (o = 0; o < a; ++o) r[o].r += u;
                if (i = na(r), u)
                    for (o = 0; o < a; ++o) r[o].r -= u;
                n.r = i + u
            }
        }
    }

    function ca(e) {
        return function(t) {
            var n = t.parent;
            t.r *= e, n && (t.x = n.x + e * t.x, t.y = n.y + e * t.y)
        }
    }

    function la(e) {
        return e.id
    }

    function fa(e) {
        return e.parentId
    }

    function da(e, t) {
        return e.parent === t.parent ? 1 : 2
    }

    function ha(e) {
        var t = e.children;
        return t ? t[0] : e.t
    }

    function pa(e) {
        var t = e.children;
        return t ? t[t.length - 1] : e.t
    }

    function ma(e, t, n) {
        var r = n / (t.i - e.i);
        t.c -= r, t.s += n, e.c += r, t.z += n, t.m += n
    }

    function ga(e) {
        for (var t, n = 0, r = 0, o = e.children, i = o.length; --i >= 0;) t = o[i], t.z += n, t.m += n, n += t.s + (r += t.c)
    }

    function va(e, t, n) {
        return e.a.parent === t.parent ? e.a : n
    }

    function ya(e, t) {
        this._ = e, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = t
    }

    function _a(e) {
        for (var t, n, r, o, i, a = new ya(e, 0), u = [a]; t = u.pop();)
            if (r = t._.children)
                for (t.children = new Array(i = r.length), o = i - 1; o >= 0; --o) u.push(n = t.children[o] = new ya(r[o], o)), n.parent = t;
        return (a.parent = new ya(null, 0)).children = [a], a
    }

    function ba(e, t, n, r, o, i) {
        for (var a, u, s, c, l, f, d, h, p, m, g, v = [], y = t.children, _ = 0, b = 0, x = y.length, w = t.value; _ < x;) {
            s = o - n, c = i - r;
            do {
                l = y[b++].value
            } while (!l && b < x);
            for (f = d = l, m = Math.max(c / s, s / c) / (w * e), g = l * l * m, p = Math.max(d / g, g / f); b < x; ++b) {
                if (l += u = y[b].value, u < f && (f = u), u > d && (d = u), g = l * l * m, (h = Math.max(d / g, g / f)) > p) {
                    l -= u;
                    break
                }
                p = h
            }
            v.push(a = {
                value: l,
                dice: s < c,
                children: y.slice(_, b)
            }), a.dice ? T_(a, n, r, o, w ? r += c * l / w : i) : O_(a, n, r, w ? n += s * l / w : o, i), w -= l, _ = b
        }
        return v
    }

    function xa(e, t) {
        return e[0] - t[0] || e[1] - t[1]
    }

    function wa(e) {
        for (var t = e.length, n = [0, 1], r = 2, o = 2; o < t; ++o) {
            for (; r > 1 && B_(e[n[r - 2]], e[n[r - 1]], e[o]) <= 0;) --r;
            n[r++] = o
        }
        return n.slice(0, r)
    }

    function ka(e) {
        this._size = e, this._call = this._error = null, this._tasks = [], this._data = [], this._waiting = this._active = this._ended = this._start = 0
    }

    function Ea(e) {
        if (!e._start) try {
            Ca(e)
        } catch (t) {
            if (e._tasks[e._ended + e._active - 1]) Ma(e, t);
            else if (!e._data) throw t
        }
    }

    function Ca(e) {
        for (; e._start = e._waiting && e._active < e._size;) {
            var t = e._ended + e._active,
                n = e._tasks[t],
                r = n.length - 1,
                o = n[r];
            n[r] = Ta(e, t), --e._waiting, ++e._active, n = o.apply(null, n), e._tasks[t] && (e._tasks[t] = n || Y_)
        }
    }

    function Ta(e, t) {
        return function(n, r) {
            e._tasks[t] && (--e._active, ++e._ended, e._tasks[t] = null, null == e._error && (null != n ? Ma(e, n) : (e._data[t] = r, e._waiting ? Ea(e) : Sa(e))))
        }
    }

    function Ma(e, t) {
        var n, r = e._tasks.length;
        for (e._error = t, e._data = void 0, e._waiting = NaN; --r >= 0;)
            if ((n = e._tasks[r]) && (e._tasks[r] = null, n.abort)) try {
                n.abort()
            } catch (t) {}
            e._active = NaN, Sa(e)
    }

    function Sa(e) {
        if (!e._active && e._call) {
            var t = e._data;
            e._data = void 0, e._call(e._error, t)
        }
    }

    function Na(e) {
        if (null == e) e = 1 / 0;
        else if (!((e = +e) >= 1)) throw new Error("invalid concurrency");
        return new ka(e)
    }

    function Pa(e) {
        return function(t, n) {
            e(null == t ? n : null)
        }
    }

    function Aa(e) {
        var t = e.responseType;
        return t && "text" !== t ? e.response : e.responseText
    }

    function Ia(e, t) {
        return function(n) {
            return e(n.responseText, t)
        }
    }

    function Oa(e) {
        function t(t) {
            var i = t + "",
                a = n.get(i);
            if (!a) {
                if (o !== hb) return o;
                n.set(i, a = r.push(t))
            }
            return e[(a - 1) % e.length]
        }
        var n = nm(),
            r = [],
            o = hb;
        return e = null == e ? [] : db.call(e), t.domain = function(e) {
            if (!arguments.length) return r.slice();
            r = [], n = nm();
            for (var o, i, a = -1, u = e.length; ++a < u;) n.has(i = (o = e[a]) + "") || n.set(i, r.push(o));
            return t
        }, t.range = function(n) {
            return arguments.length ? (e = db.call(n), t) : e.slice()
        }, t.unknown = function(e) {
            return arguments.length ? (o = e, t) : o
        }, t.copy = function() {
            return Oa().domain(r).range(e).unknown(o)
        }, t
    }

    function Ra() {
        function e() {
            var e = o().length,
                r = a[1] < a[0],
                f = a[r - 0],
                d = a[1 - r];
            t = (d - f) / Math.max(1, e - s + 2 * c), u && (t = Math.floor(t)), f += (d - f - t * (e - s)) * l, n = t * (1 - s), u && (f = Math.round(f), n = Math.round(n));
            var h = _l(e).map(function(e) {
                return f + t * e
            });
            return i(r ? h.reverse() : h)
        }
        var t, n, r = Oa().unknown(void 0),
            o = r.domain,
            i = r.range,
            a = [0, 1],
            u = !1,
            s = 0,
            c = 0,
            l = .5;
        return delete r.unknown, r.domain = function(t) {
            return arguments.length ? (o(t), e()) : o()
        }, r.range = function(t) {
            return arguments.length ? (a = [+t[0], +t[1]], e()) : a.slice()
        }, r.rangeRound = function(t) {
            return a = [+t[0], +t[1]], u = !0, e()
        }, r.bandwidth = function() {
            return n
        }, r.step = function() {
            return t
        }, r.round = function(t) {
            return arguments.length ? (u = !!t, e()) : u
        }, r.padding = function(t) {
            return arguments.length ? (s = c = Math.max(0, Math.min(1, t)), e()) : s
        }, r.paddingInner = function(t) {
            return arguments.length ? (s = Math.max(0, Math.min(1, t)), e()) : s
        }, r.paddingOuter = function(t) {
            return arguments.length ? (c = Math.max(0, Math.min(1, t)), e()) : c
        }, r.align = function(t) {
            return arguments.length ? (l = Math.max(0, Math.min(1, t)), e()) : l
        }, r.copy = function() {
            return Ra().domain(o()).range(a).round(u).paddingInner(s).paddingOuter(c).align(l)
        }, e()
    }

    function Da(e) {
        var t = e.copy;
        return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
            return Da(t())
        }, e
    }

    function La() {
        return Da(Ra().paddingInner(1))
    }

    function Fa(e, t) {
        return (t -= e = +e) ? function(n) {
            return (n - e) / t
        } : pb(t)
    }

    function ja(e) {
        return function(t, n) {
            var r = e(t = +t, n = +n);
            return function(e) {
                return e <= t ? 0 : e >= n ? 1 : r(e)
            }
        }
    }

    function Ua(e) {
        return function(t, n) {
            var r = e(t = +t, n = +n);
            return function(e) {
                return e <= 0 ? t : e >= 1 ? n : r(e)
            }
        }
    }

    function za(e, t, n, r) {
        var o = e[0],
            i = e[1],
            a = t[0],
            u = t[1];
        return i < o ? (o = n(i, o), a = r(u, a)) : (o = n(o, i), a = r(a, u)),
            function(e) {
                return a(o(e))
            }
    }

    function Ha(e, t, n, r) {
        var o = Math.min(e.length, t.length) - 1,
            i = new Array(o),
            a = new Array(o),
            u = -1;
        for (e[o] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++u < o;) i[u] = n(e[u], e[u + 1]), a[u] = r(t[u], t[u + 1]);
        return function(t) {
            var n = al(e, t, 1, o) - 1;
            return a[n](i[n](t))
        }
    }

    function Ba(e, t) {
        return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp())
    }

    function qa(e, t) {
        function n() {
            return o = Math.min(u.length, s.length) > 2 ? Ha : za, i = a = null, r
        }

        function r(t) {
            return (i || (i = o(u, s, l ? ja(e) : e, c)))(+t)
        }
        var o, i, a, u = gb,
            s = gb,
            c = Xd,
            l = !1;
        return r.invert = function(e) {
            return (a || (a = o(s, u, Fa, l ? Ua(t) : t)))(+e)
        }, r.domain = function(e) {
            return arguments.length ? (u = fb.call(e, mb), n()) : u.slice()
        }, r.range = function(e) {
            return arguments.length ? (s = db.call(e), n()) : s.slice()
        }, r.rangeRound = function(e) {
            return s = db.call(e), c = Kd, n()
        }, r.clamp = function(e) {
            return arguments.length ? (l = !!e, n()) : l
        }, r.interpolate = function(e) {
            return arguments.length ? (c = e, n()) : c
        }, n()
    }

    function Wa(e) {
        var t = e.domain;
        return e.ticks = function(e) {
            var n = t();
            return kl(n[0], n[n.length - 1], null == e ? 10 : e)
        }, e.tickFormat = function(e, n) {
            return vb(t(), e, n)
        }, e.nice = function(n) {
            null == n && (n = 10);
            var r, o = t(),
                a = 0,
                u = o.length - 1,
                s = o[a],
                c = o[u];
            return c < s && (r = s, s = c, c = r, r = a, a = u, u = r), r = i(s, c, n), r > 0 ? (s = Math.floor(s / r) * r, c = Math.ceil(c / r) * r, r = i(s, c, n)) : r < 0 && (s = Math.ceil(s * r) / r, c = Math.floor(c * r) / r, r = i(s, c, n)), r > 0 ? (o[a] = Math.floor(s / r) * r, o[u] = Math.ceil(c / r) * r, t(o)) : r < 0 && (o[a] = Math.ceil(s * r) / r, o[u] = Math.floor(c * r) / r, t(o)), e
        }, e
    }

    function Va() {
        var e = qa(Fa, qd);
        return e.copy = function() {
            return Ba(e, Va())
        }, Wa(e)
    }

    function Ga() {
        function e(e) {
            return +e
        }
        var t = [0, 1];
        return e.invert = e, e.domain = e.range = function(n) {
            return arguments.length ? (t = fb.call(n, mb), e) : t.slice()
        }, e.copy = function() {
            return Ga().domain(t)
        }, Wa(e)
    }

    function Ya(e, t) {
        return (t = Math.log(t / e)) ? function(n) {
            return Math.log(n / e) / t
        } : pb(t)
    }

    function Xa(e, t) {
        return e < 0 ? function(n) {
            return -Math.pow(-t, n) * Math.pow(-e, 1 - n)
        } : function(n) {
            return Math.pow(t, n) * Math.pow(e, 1 - n)
        }
    }

    function Ka(e) {
        return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e
    }

    function $a(e) {
        return 10 === e ? Ka : e === Math.E ? Math.exp : function(t) {
            return Math.pow(e, t)
        }
    }

    function Qa(e) {
        return e === Math.E ? Math.log : 10 === e && Math.log10 || 2 === e && Math.log2 || (e = Math.log(e), function(t) {
            return Math.log(t) / e
        })
    }

    function Ja(e) {
        return function(t) {
            return -e(-t)
        }
    }

    function Za() {
        function e() {
            return o = Qa(r), i = $a(r), n()[0] < 0 && (o = Ja(o), i = Ja(i)), t
        }
        var t = qa(Ya, Xa).domain([1, 10]),
            n = t.domain,
            r = 10,
            o = Qa(10),
            i = $a(10);
        return t.base = function(t) {
            return arguments.length ? (r = +t, e()) : r
        }, t.domain = function(t) {
            return arguments.length ? (n(t), e()) : n()
        }, t.ticks = function(e) {
            var t, a = n(),
                u = a[0],
                s = a[a.length - 1];
            (t = s < u) && (d = u, u = s, s = d);
            var c, l, f, d = o(u),
                h = o(s),
                p = null == e ? 10 : +e,
                m = [];
            if (!(r % 1) && h - d < p) {
                if (d = Math.round(d) - 1, h = Math.round(h) + 1, u > 0) {
                    for (; d < h; ++d)
                        for (l = 1, c = i(d); l < r; ++l)
                            if (!((f = c * l) < u)) {
                                if (f > s) break;
                                m.push(f)
                            }
                } else
                    for (; d < h; ++d)
                        for (l = r - 1, c = i(d); l >= 1; --l)
                            if (!((f = c * l) < u)) {
                                if (f > s) break;
                                m.push(f)
                            }
            } else m = kl(d, h, Math.min(h - d, p)).map(i);
            return t ? m.reverse() : m
        }, t.tickFormat = function(e, n) {
            if (null == n && (n = 10 === r ? ".0e" : ","), "function" != typeof n && (n = sg(n)), e === 1 / 0) return n;
            null == e && (e = 10);
            var a = Math.max(1, r * e / t.ticks().length);
            return function(e) {
                var t = e / i(Math.round(o(e)));
                return t * r < r - .5 && (t *= r), t <= a ? n(e) : ""
            }
        }, t.nice = function() {
            return n(yb(n(), {
                floor: function(e) {
                    return i(Math.floor(o(e)))
                },
                ceil: function(e) {
                    return i(Math.ceil(o(e)))
                }
            }))
        }, t.copy = function() {
            return Ba(t, Za().base(r))
        }, t
    }

    function eu(e, t) {
        return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t)
    }

    function tu() {
        function e(e, t) {
            return (t = eu(t, n) - (e = eu(e, n))) ? function(r) {
                return (eu(r, n) - e) / t
            } : pb(t)
        }

        function t(e, t) {
            return t = eu(t, n) - (e = eu(e, n)),
                function(r) {
                    return eu(e + t * r, 1 / n)
                }
        }
        var n = 1,
            r = qa(e, t),
            o = r.domain;
        return r.exponent = function(e) {
            return arguments.length ? (n = +e, o(o())) : n
        }, r.copy = function() {
            return Ba(r, tu().exponent(n))
        }, Wa(r)
    }

    function nu() {
        return tu().exponent(.5)
    }

    function ru() {
        function e() {
            var e = 0,
                i = Math.max(1, r.length);
            for (o = new Array(i - 1); ++e < i;) o[e - 1] = Tl(n, e / i);
            return t
        }

        function t(e) {
            if (!isNaN(e = +e)) return r[al(o, e)]
        }
        var n = [],
            r = [],
            o = [];
        return t.invertExtent = function(e) {
            var t = r.indexOf(e);
            return t < 0 ? [NaN, NaN] : [t > 0 ? o[t - 1] : n[0], t < o.length ? o[t] : n[n.length - 1]]
        }, t.domain = function(t) {
            if (!arguments.length) return n.slice();
            n = [];
            for (var r, o = 0, i = t.length; o < i; ++o) null == (r = t[o]) || isNaN(r = +r) || n.push(r);
            return n.sort(tl), e()
        }, t.range = function(t) {
            return arguments.length ? (r = db.call(t), e()) : r.slice()
        }, t.quantiles = function() {
            return o.slice()
        }, t.copy = function() {
            return ru().domain(n).range(r)
        }, t
    }

    function ou() {
        function e(e) {
            if (e <= e) return a[al(i, e, 0, o)]
        }

        function t() {
            var t = -1;
            for (i = new Array(o); ++t < o;) i[t] = ((t + 1) * r - (t - o) * n) / (o + 1);
            return e
        }
        var n = 0,
            r = 1,
            o = 1,
            i = [.5],
            a = [0, 1];
        return e.domain = function(e) {
            return arguments.length ? (n = +e[0], r = +e[1], t()) : [n, r]
        }, e.range = function(e) {
            return arguments.length ? (o = (a = db.call(e)).length - 1, t()) : a.slice()
        }, e.invertExtent = function(e) {
            var t = a.indexOf(e);
            return t < 0 ? [NaN, NaN] : t < 1 ? [n, i[0]] : t >= o ? [i[o - 1], r] : [i[t - 1], i[t]]
        }, e.copy = function() {
            return ou().domain([n, r]).range(a)
        }, Wa(e)
    }

    function iu() {
        function e(e) {
            if (e <= e) return n[al(t, e, 0, r)]
        }
        var t = [.5],
            n = [0, 1],
            r = 1;
        return e.domain = function(o) {
            return arguments.length ? (t = db.call(o), r = Math.min(t.length, n.length - 1), e) : t.slice()
        }, e.range = function(o) {
            return arguments.length ? (n = db.call(o), r = Math.min(t.length, n.length - 1), e) : n.slice()
        }, e.invertExtent = function(e) {
            var r = n.indexOf(e);
            return [t[r - 1], t[r]]
        }, e.copy = function() {
            return iu().domain(t).range(n)
        }, e
    }

    function au(e, t, n, r) {
        function o(t) {
            return e(t = new Date(+t)), t
        }
        return o.floor = o, o.ceil = function(n) {
            return e(n = new Date(n - 1)), t(n, 1), e(n), n
        }, o.round = function(e) {
            var t = o(e),
                n = o.ceil(e);
            return e - t < n - e ? t : n
        }, o.offset = function(e, n) {
            return t(e = new Date(+e), null == n ? 1 : Math.floor(n)), e
        }, o.range = function(n, r, i) {
            var a = [];
            if (n = o.ceil(n), i = null == i ? 1 : Math.floor(i), !(n < r && i > 0)) return a;
            do {
                a.push(new Date(+n))
            } while (t(n, i), e(n), n < r);
            return a
        }, o.filter = function(n) {
            return au(function(t) {
                if (t >= t)
                    for (; e(t), !n(t);) t.setTime(t - 1)
            }, function(e, r) {
                if (e >= e)
                    if (r < 0)
                        for (; ++r <= 0;)
                            for (; t(e, -1), !n(e););
                    else
                        for (; --r >= 0;)
                            for (; t(e, 1), !n(e););
            })
        }, n && (o.count = function(t, r) {
            return _b.setTime(+t), bb.setTime(+r), e(_b), e(bb), Math.floor(n(_b, bb))
        }, o.every = function(e) {
            return e = Math.floor(e), isFinite(e) && e > 0 ? e > 1 ? o.filter(r ? function(t) {
                return r(t) % e == 0
            } : function(t) {
                return o.count(0, t) % e == 0
            }) : o : null
        }), o
    }

    function uu(e) {
        return au(function(t) {
            t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0)
        }, function(e, t) {
            e.setDate(e.getDate() + 7 * t)
        }, function(e, t) {
            return (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Eb) / Cb
        })
    }

    function su(e) {
        return au(function(t) {
            t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0)
        }, function(e, t) {
            e.setUTCDate(e.getUTCDate() + 7 * t)
        }, function(e, t) {
            return (t - e) / Cb
        })
    }

    function cu(e) {
        if (0 <= e.y && e.y < 100) {
            var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
            return t.setFullYear(e.y), t
        }
        return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L)
    }

    function lu(e) {
        if (0 <= e.y && e.y < 100) {
            var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
            return t.setUTCFullYear(e.y), t
        }
        return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L))
    }

    function fu(e) {
        return {
            y: e,
            m: 0,
            d: 1,
            H: 0,
            M: 0,
            S: 0,
            L: 0
        }
    }

    function du(e) {
        function t(e, t) {
            return function(n) {
                var r, o, i, a = [],
                    u = -1,
                    s = 0,
                    c = e.length;
                for (n instanceof Date || (n = new Date(+n)); ++u < c;) 37 === e.charCodeAt(u) && (a.push(e.slice(s, u)), null != (o = jx[r = e.charAt(++u)]) ? r = e.charAt(++u) : o = "e" === r ? " " : "0", (i = t[r]) && (r = i(n, o)), a.push(r), s = u + 1);
                return a.push(e.slice(s, u)), a.join("")
            }
        }

        function n(e, t) {
            return function(n) {
                var o = fu(1900);
                if (r(o, e, n += "", 0) != n.length) return null;
                if ("p" in o && (o.H = o.H % 12 + 12 * o.p), "W" in o || "U" in o) {
                    "w" in o || (o.w = "W" in o ? 1 : 0);
                    var i = "Z" in o ? lu(fu(o.y)).getUTCDay() : t(fu(o.y)).getDay();
                    o.m = 0, o.d = "W" in o ? (o.w + 6) % 7 + 7 * o.W - (i + 5) % 7 : o.w + 7 * o.U - (i + 6) % 7
                }
                return "Z" in o ? (o.H += o.Z / 100 | 0, o.M += o.Z % 100, lu(o)) : t(o)
            }
        }

        function r(e, t, n, r) {
            for (var o, i, a = 0, u = t.length, s = n.length; a < u;) {
                if (r >= s) return -1;
                if (37 === (o = t.charCodeAt(a++))) {
                    if (o = t.charAt(a++), !(i = B[o in jx ? t.charAt(a++) : o]) || (r = i(e, n, r)) < 0) return -1
                } else if (o != n.charCodeAt(r++)) return -1
            }
            return r
        }

        function o(e, t, n) {
            var r = P.exec(t.slice(n));
            return r ? (e.p = A[r[0].toLowerCase()], n + r[0].length) : -1
        }

        function i(e, t, n) {
            var r = R.exec(t.slice(n));
            return r ? (e.w = D[r[0].toLowerCase()], n + r[0].length) : -1
        }

        function a(e, t, n) {
            var r = I.exec(t.slice(n));
            return r ? (e.w = O[r[0].toLowerCase()], n + r[0].length) : -1
        }

        function u(e, t, n) {
            var r = j.exec(t.slice(n));
            return r ? (e.m = U[r[0].toLowerCase()], n + r[0].length) : -1
        }

        function s(e, t, n) {
            var r = L.exec(t.slice(n));
            return r ? (e.m = F[r[0].toLowerCase()], n + r[0].length) : -1
        }

        function c(e, t, n) {
            return r(e, w, t, n)
        }

        function l(e, t, n) {
            return r(e, k, t, n)
        }

        function f(e, t, n) {
            return r(e, E, t, n)
        }

        function d(e) {
            return M[e.getDay()]
        }

        function h(e) {
            return T[e.getDay()]
        }

        function p(e) {
            return N[e.getMonth()]
        }

        function m(e) {
            return S[e.getMonth()]
        }

        function g(e) {
            return C[+(e.getHours() >= 12)]
        }

        function v(e) {
            return M[e.getUTCDay()]
        }

        function y(e) {
            return T[e.getUTCDay()]
        }

        function _(e) {
            return N[e.getUTCMonth()]
        }

        function b(e) {
            return S[e.getUTCMonth()]
        }

        function x(e) {
            return C[+(e.getUTCHours() >= 12)]
        }
        var w = e.dateTime,
            k = e.date,
            E = e.time,
            C = e.periods,
            T = e.days,
            M = e.shortDays,
            S = e.months,
            N = e.shortMonths,
            P = mu(C),
            A = gu(C),
            I = mu(T),
            O = gu(T),
            R = mu(M),
            D = gu(M),
            L = mu(S),
            F = gu(S),
            j = mu(N),
            U = gu(N),
            z = {
                a: d,
                A: h,
                b: p,
                B: m,
                c: null,
                d: Au,
                e: Au,
                H: Iu,
                I: Ou,
                j: Ru,
                L: Du,
                m: Lu,
                M: Fu,
                p: g,
                S: ju,
                U: Uu,
                w: zu,
                W: Hu,
                x: null,
                X: null,
                y: Bu,
                Y: qu,
                Z: Wu,
                "%": is
            },
            H = {
                a: v,
                A: y,
                b: _,
                B: b,
                c: null,
                d: Vu,
                e: Vu,
                H: Gu,
                I: Yu,
                j: Xu,
                L: Ku,
                m: $u,
                M: Qu,
                p: x,
                S: Ju,
                U: Zu,
                w: es,
                W: ts,
                x: null,
                X: null,
                y: ns,
                Y: rs,
                Z: os,
                "%": is
            },
            B = {
                a: i,
                A: a,
                b: u,
                B: s,
                c: c,
                d: Eu,
                e: Eu,
                H: Tu,
                I: Tu,
                j: Cu,
                L: Nu,
                m: ku,
                M: Mu,
                p: o,
                S: Su,
                U: yu,
                w: vu,
                W: _u,
                x: l,
                X: f,
                y: xu,
                Y: bu,
                Z: wu,
                "%": Pu
            };
        return z.x = t(k, z), z.X = t(E, z), z.c = t(w, z), H.x = t(k, H), H.X = t(E, H), H.c = t(w, H), {
            format: function(e) {
                var n = t(e += "", z);
                return n.toString = function() {
                    return e
                }, n
            },
            parse: function(e) {
                var t = n(e += "", cu);
                return t.toString = function() {
                    return e
                }, t
            },
            utcFormat: function(e) {
                var n = t(e += "", H);
                return n.toString = function() {
                    return e
                }, n
            },
            utcParse: function(e) {
                var t = n(e, lu);
                return t.toString = function() {
                    return e
                }, t
            }
        }
    }

    function hu(e, t, n) {
        var r = e < 0 ? "-" : "",
            o = (r ? -e : e) + "",
            i = o.length;
        return r + (i < n ? new Array(n - i + 1).join(t) + o : o)
    }

    function pu(e) {
        return e.replace(Hx, "\\$&")
    }

    function mu(e) {
        return new RegExp("^(?:" + e.map(pu).join("|") + ")", "i")
    }

    function gu(e) {
        for (var t = {}, n = -1, r = e.length; ++n < r;) t[e[n].toLowerCase()] = n;
        return t
    }

    function vu(e, t, n) {
        var r = Ux.exec(t.slice(n, n + 1));
        return r ? (e.w = +r[0], n + r[0].length) : -1
    }

    function yu(e, t, n) {
        var r = Ux.exec(t.slice(n));
        return r ? (e.U = +r[0], n + r[0].length) : -1
    }

    function _u(e, t, n) {
        var r = Ux.exec(t.slice(n));
        return r ? (e.W = +r[0], n + r[0].length) : -1
    }

    function bu(e, t, n) {
        var r = Ux.exec(t.slice(n, n + 4));
        return r ? (e.y = +r[0], n + r[0].length) : -1
    }

    function xu(e, t, n) {
        var r = Ux.exec(t.slice(n, n + 2));
        return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1
    }

    function wu(e, t, n) {
        var r = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(t.slice(n, n + 6));
        return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1
    }

    function ku(e, t, n) {
        var r = Ux.exec(t.slice(n, n + 2));
        return r ? (e.m = r[0] - 1, n + r[0].length) : -1
    }

    function Eu(e, t, n) {
        var r = Ux.exec(t.slice(n, n + 2));
        return r ? (e.d = +r[0], n + r[0].length) : -1
    }

    function Cu(e, t, n) {
        var r = Ux.exec(t.slice(n, n + 3));
        return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1
    }

    function Tu(e, t, n) {
        var r = Ux.exec(t.slice(n, n + 2));
        return r ? (e.H = +r[0], n + r[0].length) : -1
    }

    function Mu(e, t, n) {
        var r = Ux.exec(t.slice(n, n + 2));
        return r ? (e.M = +r[0], n + r[0].length) : -1
    }

    function Su(e, t, n) {
        var r = Ux.exec(t.slice(n, n + 2));
        return r ? (e.S = +r[0], n + r[0].length) : -1
    }

    function Nu(e, t, n) {
        var r = Ux.exec(t.slice(n, n + 3));
        return r ? (e.L = +r[0], n + r[0].length) : -1
    }

    function Pu(e, t, n) {
        var r = zx.exec(t.slice(n, n + 1));
        return r ? n + r[0].length : -1
    }

    function Au(e, t) {
        return hu(e.getDate(), t, 2)
    }

    function Iu(e, t) {
        return hu(e.getHours(), t, 2)
    }

    function Ou(e, t) {
        return hu(e.getHours() % 12 || 12, t, 2)
    }

    function Ru(e, t) {
        return hu(1 + Lb.count(nx(e), e), t, 3)
    }

    function Du(e, t) {
        return hu(e.getMilliseconds(), t, 3)
    }

    function Lu(e, t) {
        return hu(e.getMonth() + 1, t, 2)
    }

    function Fu(e, t) {
        return hu(e.getMinutes(), t, 2)
    }

    function ju(e, t) {
        return hu(e.getSeconds(), t, 2)
    }

    function Uu(e, t) {
        return hu(jb.count(nx(e), e), t, 2)
    }

    function zu(e) {
        return e.getDay()
    }

    function Hu(e, t) {
        return hu(Ub.count(nx(e), e), t, 2)
    }

    function Bu(e, t) {
        return hu(e.getFullYear() % 100, t, 2)
    }

    function qu(e, t) {
        return hu(e.getFullYear() % 1e4, t, 4)
    }

    function Wu(e) {
        var t = e.getTimezoneOffset();
        return (t > 0 ? "-" : (t *= -1, "+")) + hu(t / 60 | 0, "0", 2) + hu(t % 60, "0", 2)
    }

    function Vu(e, t) {
        return hu(e.getUTCDate(), t, 2)
    }

    function Gu(e, t) {
        return hu(e.getUTCHours(), t, 2)
    }

    function Yu(e, t) {
        return hu(e.getUTCHours() % 12 || 12, t, 2)
    }

    function Xu(e, t) {
        return hu(1 + fx.count(Lx(e), e), t, 3)
    }

    function Ku(e, t) {
        return hu(e.getUTCMilliseconds(), t, 3)
    }

    function $u(e, t) {
        return hu(e.getUTCMonth() + 1, t, 2)
    }

    function Qu(e, t) {
        return hu(e.getUTCMinutes(), t, 2)
    }

    function Ju(e, t) {
        return hu(e.getUTCSeconds(), t, 2)
    }

    function Zu(e, t) {
        return hu(hx.count(Lx(e), e), t, 2)
    }

    function es(e) {
        return e.getUTCDay()
    }

    function ts(e, t) {
        return hu(px.count(Lx(e), e), t, 2)
    }

    function ns(e, t) {
        return hu(e.getUTCFullYear() % 100, t, 2)
    }

    function rs(e, t) {
        return hu(e.getUTCFullYear() % 1e4, t, 4)
    }

    function os() {
        return "+0000"
    }

    function is() {
        return "%"
    }

    function as(e) {
        return Ax = du(e), Ix = Ax.format, Ox = Ax.parse, Rx = Ax.utcFormat, Dx = Ax.utcParse, Ax
    }

    function us(e) {
        return e.toISOString()
    }

    function ss(e) {
        var t = new Date(e);
        return isNaN(t) ? null : t
    }

    function cs(e) {
        return new Date(e)
    }

    function ls(e) {
        return e instanceof Date ? +e : +new Date(+e)
    }

    function fs(e, t, n, r, o, i, u, s, c) {
        function l(a) {
            return (u(a) < a ? m : i(a) < a ? g : o(a) < a ? v : r(a) < a ? y : t(a) < a ? n(a) < a ? _ : b : e(a) < a ? x : w)(a)
        }

        function f(t, n, r, o) {
            if (null == t && (t = 10), "number" == typeof t) {
                var i = Math.abs(r - n) / t,
                    u = nl(function(e) {
                        return e[2]
                    }).right(k, i);
                u === k.length ? (o = a(n / Jx, r / Jx, t), t = e) : u ? (u = k[i / k[u - 1][2] < k[u][2] / i ? u - 1 : u], o = u[1], t = u[0]) : (o = a(n, r, t), t = s)
            }
            return null == o ? t : t.every(o)
        }
        var d = qa(Fa, qd),
            h = d.invert,
            p = d.domain,
            m = c(".%L"),
            g = c(":%S"),
            v = c("%I:%M"),
            y = c("%I %p"),
            _ = c("%a %d"),
            b = c("%b %d"),
            x = c("%B"),
            w = c("%Y"),
            k = [
                [u, 1, Gx],
                [u, 5, 5 * Gx],
                [u, 15, 15 * Gx],
                [u, 30, 30 * Gx],
                [i, 1, Yx],
                [i, 5, 5 * Yx],
                [i, 15, 15 * Yx],
                [i, 30, 30 * Yx],
                [o, 1, Xx],
                [o, 3, 3 * Xx],
                [o, 6, 6 * Xx],
                [o, 12, 12 * Xx],
                [r, 1, Kx],
                [r, 2, 2 * Kx],
                [n, 1, $x],
                [t, 1, Qx],
                [t, 3, 3 * Qx],
                [e, 1, Jx]
            ];
        return d.invert = function(e) {
            return new Date(h(e))
        }, d.domain = function(e) {
            return arguments.length ? p(fb.call(e, ls)) : p().map(cs)
        }, d.ticks = function(e, t) {
            var n, r = p(),
                o = r[0],
                i = r[r.length - 1],
                a = i < o;
            return a && (n = o, o = i, i = n), n = f(e, o, i, t), n = n ? n.range(o, i + 1) : [], a ? n.reverse() : n
        }, d.tickFormat = function(e, t) {
            return null == t ? l : c(t)
        }, d.nice = function(e, t) {
            var n = p();
            return (e = f(e, n[0], n[n.length - 1], t)) ? p(yb(n, e)) : d
        }, d.copy = function() {
            return Ba(d, fs(e, t, n, r, o, i, u, s, c))
        }, d
    }

    function ds(e) {
        var t = e.length;
        return function(n) {
            return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))]
        }
    }

    function hs(e) {
        function t(t) {
            var i = (t - n) / (r - n);
            return e(o ? Math.max(0, Math.min(1, i)) : i)
        }
        var n = 0,
            r = 1,
            o = !1;
        return t.domain = function(e) {
            return arguments.length ? (n = +e[0], r = +e[1], t) : [n, r]
        }, t.clamp = function(e) {
            return arguments.length ? (o = !!e, t) : o
        }, t.interpolator = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.copy = function() {
            return hs(e).domain([n, r]).clamp(o)
        }, Wa(t)
    }

    function ps(e) {
        return e > 1 ? 0 : e < -1 ? Ew : Math.acos(e)
    }

    function ms(e) {
        return e >= 1 ? Cw : e <= -1 ? -Cw : Math.asin(e)
    }

    function gs(e) {
        return e.innerRadius
    }

    function vs(e) {
        return e.outerRadius
    }

    function ys(e) {
        return e.startAngle
    }

    function _s(e) {
        return e.endAngle
    }

    function bs(e) {
        return e && e.padAngle
    }

    function xs(e, t, n, r, o, i, a, u) {
        var s = n - e,
            c = r - t,
            l = a - o,
            f = u - i,
            d = (l * (t - i) - f * (e - o)) / (f * s - l * c);
        return [e + d * s, t + d * c]
    }

    function ws(e, t, n, r, o, i, a) {
        var u = e - n,
            s = t - r,
            c = (a ? i : -i) / ww(u * u + s * s),
            l = c * s,
            f = -c * u,
            d = e + l,
            h = t + f,
            p = n + l,
            m = r + f,
            g = (d + p) / 2,
            v = (h + m) / 2,
            y = p - d,
            _ = m - h,
            b = y * y + _ * _,
            x = o - i,
            w = d * m - p * h,
            k = (_ < 0 ? -1 : 1) * ww(_w(0, x * x * b - w * w)),
            E = (w * _ - y * k) / b,
            C = (-w * y - _ * k) / b,
            T = (w * _ + y * k) / b,
            M = (-w * y + _ * k) / b,
            S = E - g,
            N = C - v,
            P = T - g,
            A = M - v;
        return S * S + N * N > P * P + A * A && (E = T, C = M), {
            cx: E,
            cy: C,
            x01: -l,
            y01: -f,
            x11: E * (o / x - 1),
            y11: C * (o / x - 1)
        }
    }

    function ks(e) {
        this._context = e
    }

    function Es(e) {
        return e[0]
    }

    function Cs(e) {
        return e[1]
    }

    function Ts(e) {
        this._curve = e
    }

    function Ms(e) {
        function t(t) {
            return new Ts(e(t))
        }
        return t._curve = e, t
    }

    function Ss(e) {
        var t = e.curve;
        return e.angle = e.x, delete e.x, e.radius = e.y, delete e.y, e.curve = function(e) {
            return arguments.length ? t(Ms(e)) : t()._curve
        }, e
    }

    function Ns(e) {
        return e.source
    }

    function Ps(e) {
        return e.target
    }

    function As(e) {
        function t() {
            var t, u = jw.call(arguments),
                s = n.apply(this, u),
                c = r.apply(this, u);
            if (a || (a = t = em()), e(a, +o.apply(this, (u[0] = s, u)), +i.apply(this, u), +o.apply(this, (u[0] = c, u)), +i.apply(this, u)), t) return a = null, t + "" || null
        }
        var n = Ns,
            r = Ps,
            o = Es,
            i = Cs,
            a = null;
        return t.source = function(e) {
            return arguments.length ? (n = e, t) : n
        }, t.target = function(e) {
            return arguments.length ? (r = e, t) : r
        }, t.x = function(e) {
            return arguments.length ? (o = "function" == typeof e ? e : mw(+e), t) : o
        }, t.y = function(e) {
            return arguments.length ? (i = "function" == typeof e ? e : mw(+e), t) : i
        }, t.context = function(e) {
            return arguments.length ? (a = null == e ? null : e, t) : a
        }, t
    }

    function Is(e, t, n, r, o) {
        e.moveTo(t, n), e.bezierCurveTo(t = (t + r) / 2, n, t, o, r, o)
    }

    function Os(e, t, n, r, o) {
        e.moveTo(t, n), e.bezierCurveTo(t, n = (n + o) / 2, r, n, r, o)
    }

    function Rs(e, t, n, r, o) {
        var i = Fw(t, n),
            a = Fw(t, n = (n + o) / 2),
            u = Fw(r, n),
            s = Fw(r, o);
        e.moveTo(i[0], i[1]), e.bezierCurveTo(a[0], a[1], u[0], u[1], s[0], s[1])
    }

    function Ds() {
        return As(Is)
    }

    function Ls() {
        return As(Os)
    }

    function Fs() {
        var e = As(Rs);
        return e.angle = e.x, delete e.x, e.radius = e.y, delete e.y, e
    }

    function js(e, t, n) {
        e._context.bezierCurveTo((2 * e._x0 + e._x1) / 3, (2 * e._y0 + e._y1) / 3, (e._x0 + 2 * e._x1) / 3, (e._y0 + 2 * e._y1) / 3, (e._x0 + 4 * e._x1 + t) / 6, (e._y0 + 4 * e._y1 + n) / 6)
    }

    function Us(e) {
        this._context = e
    }

    function zs(e) {
        this._context = e
    }

    function Hs(e) {
        this._context = e
    }

    function Bs(e, t) {
        this._basis = new Us(e), this._beta = t
    }

    function qs(e, t, n) {
        e._context.bezierCurveTo(e._x1 + e._k * (e._x2 - e._x0), e._y1 + e._k * (e._y2 - e._y0), e._x2 + e._k * (e._x1 - t), e._y2 + e._k * (e._y1 - n), e._x2, e._y2)
    }

    function Ws(e, t) {
        this._context = e, this._k = (1 - t) / 6
    }

    function Vs(e, t) {
        this._context = e, this._k = (1 - t) / 6
    }

    function Gs(e, t) {
        this._context = e, this._k = (1 - t) / 6
    }

    function Ys(e, t, n) {
        var r = e._x1,
            o = e._y1,
            i = e._x2,
            a = e._y2;
        if (e._l01_a > kw) {
            var u = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a,
                s = 3 * e._l01_a * (e._l01_a + e._l12_a);
            r = (r * u - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / s, o = (o * u - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / s
        }
        if (e._l23_a > kw) {
            var c = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a,
                l = 3 * e._l23_a * (e._l23_a + e._l12_a);
            i = (i * c + e._x1 * e._l23_2a - t * e._l12_2a) / l, a = (a * c + e._y1 * e._l23_2a - n * e._l12_2a) / l
        }
        e._context.bezierCurveTo(r, o, i, a, e._x2, e._y2)
    }

    function Xs(e, t) {
        this._context = e, this._alpha = t
    }

    function Ks(e, t) {
        this._context = e, this._alpha = t
    }

    function $s(e, t) {
        this._context = e, this._alpha = t
    }

    function Qs(e) {
        this._context = e
    }

    function Js(e) {
        return e < 0 ? -1 : 1
    }

    function Zs(e, t, n) {
        var r = e._x1 - e._x0,
            o = t - e._x1,
            i = (e._y1 - e._y0) / (r || o < 0 && -0),
            a = (n - e._y1) / (o || r < 0 && -0),
            u = (i * o + a * r) / (r + o);
        return (Js(i) + Js(a)) * Math.min(Math.abs(i), Math.abs(a), .5 * Math.abs(u)) || 0
    }

    function ec(e, t) {
        var n = e._x1 - e._x0;
        return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t
    }

    function tc(e, t, n) {
        var r = e._x0,
            o = e._y0,
            i = e._x1,
            a = e._y1,
            u = (i - r) / 3;
        e._context.bezierCurveTo(r + u, o + u * t, i - u, a - u * n, i, a)
    }

    function nc(e) {
        this._context = e
    }

    function rc(e) {
        this._context = new oc(e)
    }

    function oc(e) {
        this._context = e
    }

    function ic(e) {
        return new nc(e)
    }

    function ac(e) {
        return new rc(e)
    }

    function uc(e) {
        this._context = e
    }

    function sc(e) {
        var t, n, r = e.length - 1,
            o = new Array(r),
            i = new Array(r),
            a = new Array(r);
        for (o[0] = 0, i[0] = 2, a[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) o[t] = 1, i[t] = 4, a[t] = 4 * e[t] + 2 * e[t + 1];
        for (o[r - 1] = 2, i[r - 1] = 7, a[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = o[t] / i[t - 1], i[t] -= n, a[t] -= n * a[t - 1];
        for (o[r - 1] = a[r - 1] / i[r - 1], t = r - 2; t >= 0; --t) o[t] = (a[t] - o[t + 1]) / i[t];
        for (i[r - 1] = (e[r] + o[r - 1]) / 2, t = 0; t < r - 1; ++t) i[t] = 2 * e[t + 1] - o[t + 1];
        return [o, i]
    }

    function cc(e, t) {
        this._context = e, this._t = t
    }

    function lc(e) {
        return new cc(e, 0)
    }

    function fc(e) {
        return new cc(e, 1)
    }

    function dc(e, t) {
        return e[t]
    }

    function hc(e) {
        for (var t, n = 0, r = -1, o = e.length; ++r < o;)(t = +e[r][1]) && (n += t);
        return n
    }

    function pc(e) {
        return e[0]
    }

    function mc(e) {
        return e[1]
    }

    function gc() {
        this._ = null
    }

    function vc(e) {
        e.U = e.C = e.L = e.R = e.P = e.N = null
    }

    function yc(e, t) {
        var n = t,
            r = t.R,
            o = n.U;
        o ? o.L === n ? o.L = r : o.R = r : e._ = r, r.U = o, n.U = r, n.R = r.L, n.R && (n.R.U = n), r.L = n
    }

    function _c(e, t) {
        var n = t,
            r = t.L,
            o = n.U;
        o ? o.L === n ? o.L = r : o.R = r : e._ = r, r.U = o, n.U = r, n.L = r.R, n.L && (n.L.U = n), r.R = n
    }

    function bc(e) {
        for (; e.L;) e = e.L;
        return e
    }

    function xc(e, t, n, r) {
        var o = [null, null],
            i = Ok.push(o) - 1;
        return o.left = e, o.right = t, n && kc(o, e, t, n), r && kc(o, t, e, r), Ak[e.index].halfedges.push(i), Ak[t.index].halfedges.push(i), o
    }

    function wc(e, t, n) {
        var r = [t, n];
        return r.left = e, r
    }

    function kc(e, t, n, r) {
        e[0] || e[1] ? e.left === n ? e[1] = r : e[0] = r : (e[0] = r, e.left = t, e.right = n)
    }

    function Ec(e, t, n, r, o) {
        var i, a = e[0],
            u = e[1],
            s = a[0],
            c = a[1],
            l = u[0],
            f = u[1],
            d = 0,
            h = 1,
            p = l - s,
            m = f - c;
        if (i = t - s, p || !(i > 0)) {
            if (i /= p, p < 0) {
                if (i < d) return;
                i < h && (h = i)
            } else if (p > 0) {
                if (i > h) return;
                i > d && (d = i)
            }
            if (i = r - s, p || !(i < 0)) {
                if (i /= p, p < 0) {
                    if (i > h) return;
                    i > d && (d = i)
                } else if (p > 0) {
                    if (i < d) return;
                    i < h && (h = i)
                }
                if (i = n - c, m || !(i > 0)) {
                    if (i /= m, m < 0) {
                        if (i < d) return;
                        i < h && (h = i)
                    } else if (m > 0) {
                        if (i > h) return;
                        i > d && (d = i)
                    }
                    if (i = o - c, m || !(i < 0)) {
                        if (i /= m, m < 0) {
                            if (i > h) return;
                            i > d && (d = i)
                        } else if (m > 0) {
                            if (i < d) return;
                            i < h && (h = i)
                        }
                        return !(d > 0 || h < 1) || (d > 0 && (e[0] = [s + d * p, c + d * m]), h < 1 && (e[1] = [s + h * p, c + h * m]), !0)
                    }
                }
            }
        }
    }

    function Cc(e, t, n, r, o) {
        var i = e[1];
        if (i) return !0;
        var a, u, s = e[0],
            c = e.left,
            l = e.right,
            f = c[0],
            d = c[1],
            h = l[0],
            p = l[1],
            m = (f + h) / 2,
            g = (d + p) / 2;
        if (p === d) {
            if (m < t || m >= r) return;
            if (f > h) {
                if (s) {
                    if (s[1] >= o) return
                } else s = [m, n];
                i = [m, o]
            } else {
                if (s) {
                    if (s[1] < n) return
                } else s = [m, o];
                i = [m, n]
            }
        } else if (a = (f - h) / (p - d), u = g - a * m, a < -1 || a > 1)
            if (f > h) {
                if (s) {
                    if (s[1] >= o) return
                } else s = [(n - u) / a, n];
                i = [(o - u) / a, o]
            } else {
                if (s) {
                    if (s[1] < n) return
                } else s = [(o - u) / a, o];
                i = [(n - u) / a, n]
            } else if (d < p) {
            if (s) {
                if (s[0] >= r) return
            } else s = [t, a * t + u];
            i = [r, a * r + u]
        } else {
            if (s) {
                if (s[0] < t) return
            } else s = [r, a * r + u];
            i = [t, a * t + u]
        }
        return e[0] = s, e[1] = i, !0
    }

    function Tc(e, t, n, r) {
        for (var o, i = Ok.length; i--;) Cc(o = Ok[i], e, t, n, r) && Ec(o, e, t, n, r) && (Math.abs(o[0][0] - o[1][0]) > Fk || Math.abs(o[0][1] - o[1][1]) > Fk) || delete Ok[i]
    }

    function Mc(e) {
        return Ak[e.index] = {
            site: e,
            halfedges: []
        }
    }

    function Sc(e, t) {
        var n = e.site,
            r = t.left,
            o = t.right;
        return n === o && (o = r, r = n), o ? Math.atan2(o[1] - r[1], o[0] - r[0]) : (n === r ? (r = t[1], o = t[0]) : (r = t[0], o = t[1]), Math.atan2(r[0] - o[0], o[1] - r[1]))
    }

    function Nc(e, t) {
        return t[+(t.left !== e.site)]
    }

    function Pc(e, t) {
        return t[+(t.left === e.site)]
    }

    function Ac() {
        for (var e, t, n, r, o = 0, i = Ak.length; o < i; ++o)
            if ((e = Ak[o]) && (r = (t = e.halfedges).length)) {
                var a = new Array(r),
                    u = new Array(r);
                for (n = 0; n < r; ++n) a[n] = n, u[n] = Sc(e, Ok[t[n]]);
                for (a.sort(function(e, t) {
                        return u[t] - u[e]
                    }), n = 0; n < r; ++n) u[n] = t[a[n]];
                for (n = 0; n < r; ++n) t[n] = u[n]
            }
    }

    function Ic(e, t, n, r) {
        var o, i, a, u, s, c, l, f, d, h, p, m, g = Ak.length,
            v = !0;
        for (o = 0; o < g; ++o)
            if (i = Ak[o]) {
                for (a = i.site, s = i.halfedges, u = s.length; u--;) Ok[s[u]] || s.splice(u, 1);
                for (u = 0, c = s.length; u < c;) h = Pc(i, Ok[s[u]]), p = h[0], m = h[1], l = Nc(i, Ok[s[++u % c]]), f = l[0], d = l[1], (Math.abs(p - f) > Fk || Math.abs(m - d) > Fk) && (s.splice(u, 0, Ok.push(wc(a, h, Math.abs(p - e) < Fk && r - m > Fk ? [e, Math.abs(f - e) < Fk ? d : r] : Math.abs(m - r) < Fk && n - p > Fk ? [Math.abs(d - r) < Fk ? f : n, r] : Math.abs(p - n) < Fk && m - t > Fk ? [n, Math.abs(f - n) < Fk ? d : t] : Math.abs(m - t) < Fk && p - e > Fk ? [Math.abs(d - t) < Fk ? f : e, t] : null)) - 1), ++c);
                c && (v = !1)
            }
        if (v) {
            var y, _, b, x = 1 / 0;
            for (o = 0, v = null; o < g; ++o)(i = Ak[o]) && (a = i.site, y = a[0] - e, _ = a[1] - t, (b = y * y + _ * _) < x && (x = b, v = i));
            if (v) {
                var w = [e, t],
                    k = [e, r],
                    E = [n, r],
                    C = [n, t];
                v.halfedges.push(Ok.push(wc(a = v.site, w, k)) - 1, Ok.push(wc(a, k, E)) - 1, Ok.push(wc(a, E, C)) - 1, Ok.push(wc(a, C, w)) - 1)
            }
        }
        for (o = 0; o < g; ++o)(i = Ak[o]) && (i.halfedges.length || delete Ak[o])
    }

    function Oc() {
        vc(this), this.x = this.y = this.arc = this.site = this.cy = null
    }

    function Rc(e) {
        var t = e.P,
            n = e.N;
        if (t && n) {
            var r = t.site,
                o = e.site,
                i = n.site;
            if (r !== i) {
                var a = o[0],
                    u = o[1],
                    s = r[0] - a,
                    c = r[1] - u,
                    l = i[0] - a,
                    f = i[1] - u,
                    d = 2 * (s * f - c * l);
                if (!(d >= -jk)) {
                    var h = s * s + c * c,
                        p = l * l + f * f,
                        m = (f * h - c * p) / d,
                        g = (s * p - l * h) / d,
                        v = Dk.pop() || new Oc;
                    v.arc = e, v.site = o, v.x = m + a, v.y = (v.cy = g + u) + Math.sqrt(m * m + g * g), e.circle = v;
                    for (var y = null, _ = Ik._; _;)
                        if (v.y < _.y || v.y === _.y && v.x <= _.x) {
                            if (!_.L) {
                                y = _.P;
                                break
                            }
                            _ = _.L
                        } else {
                            if (!_.R) {
                                y = _;
                                break
                            }
                            _ = _.R
                        }
                    Ik.insert(y, v), y || (Nk = v)
                }
            }
        }
    }

    function Dc(e) {
        var t = e.circle;
        t && (t.P || (Nk = t.N), Ik.remove(t), Dk.push(t), vc(t), e.circle = null)
    }

    function Lc() {
        vc(this), this.edge = this.site = this.circle = null
    }

    function Fc(e) {
        var t = Lk.pop() || new Lc;
        return t.site = e, t
    }

    function jc(e) {
        Dc(e), Pk.remove(e), Lk.push(e), vc(e)
    }

    function Uc(e) {
        var t = e.circle,
            n = t.x,
            r = t.cy,
            o = [n, r],
            i = e.P,
            a = e.N,
            u = [e];
        jc(e);
        for (var s = i; s.circle && Math.abs(n - s.circle.x) < Fk && Math.abs(r - s.circle.cy) < Fk;) i = s.P, u.unshift(s), jc(s), s = i;
        u.unshift(s), Dc(s);
        for (var c = a; c.circle && Math.abs(n - c.circle.x) < Fk && Math.abs(r - c.circle.cy) < Fk;) a = c.N, u.push(c), jc(c), c = a;
        u.push(c), Dc(c);
        var l, f = u.length;
        for (l = 1; l < f; ++l) c = u[l], s = u[l - 1], kc(c.edge, s.site, c.site, o);
        s = u[0], c = u[f - 1], c.edge = xc(s.site, c.site, null, o), Rc(s), Rc(c)
    }

    function zc(e) {
        for (var t, n, r, o, i = e[0], a = e[1], u = Pk._; u;)
            if ((r = Hc(u, a) - i) > Fk) u = u.L;
            else {
                if (!((o = i - Bc(u, a)) > Fk)) {
                    r > -Fk ? (t = u.P, n = u) : o > -Fk ? (t = u, n = u.N) : t = n = u;
                    break
                }
                if (!u.R) {
                    t = u;
                    break
                }
                u = u.R
            }
        Mc(e);
        var s = Fc(e);
        if (Pk.insert(t, s), t || n) {
            if (t === n) return Dc(t), n = Fc(t.site), Pk.insert(s, n), s.edge = n.edge = xc(t.site, s.site), Rc(t), void Rc(n);
            if (!n) return void(s.edge = xc(t.site, s.site));
            Dc(t), Dc(n);
            var c = t.site,
                l = c[0],
                f = c[1],
                d = e[0] - l,
                h = e[1] - f,
                p = n.site,
                m = p[0] - l,
                g = p[1] - f,
                v = 2 * (d * g - h * m),
                y = d * d + h * h,
                _ = m * m + g * g,
                b = [(g * y - h * _) / v + l, (d * _ - m * y) / v + f];
            kc(n.edge, c, p, b), s.edge = xc(c, e, null, b), n.edge = xc(e, p, null, b), Rc(t), Rc(n)
        }
    }

    function Hc(e, t) {
        var n = e.site,
            r = n[0],
            o = n[1],
            i = o - t;
        if (!i) return r;
        var a = e.P;
        if (!a) return -1 / 0;
        n = a.site;
        var u = n[0],
            s = n[1],
            c = s - t;
        if (!c) return u;
        var l = u - r,
            f = 1 / i - 1 / c,
            d = l / c;
        return f ? (-d + Math.sqrt(d * d - 2 * f * (l * l / (-2 * c) - s + c / 2 + o - i / 2))) / f + r : (r + u) / 2
    }

    function Bc(e, t) {
        var n = e.N;
        if (n) return Hc(n, t);
        var r = e.site;
        return r[1] === t ? r[0] : 1 / 0
    }

    function qc(e, t, n) {
        return (e[0] - n[0]) * (t[1] - e[1]) - (e[0] - t[0]) * (n[1] - e[1])
    }

    function Wc(e, t) {
        return t[1] - e[1] || t[0] - e[0]
    }

    function Vc(e, t) {
        var n, r, o, i = e.sort(Wc).pop();
        for (Ok = [], Ak = new Array(e.length), Pk = new Rk, Ik = new Rk;;)
            if (o = Nk, i && (!o || i[1] < o.y || i[1] === o.y && i[0] < o.x)) i[0] === n && i[1] === r || (zc(i), n = i[0], r = i[1]), i = e.pop();
            else {
                if (!o) break;
                Uc(o.arc)
            }
        if (Ac(), t) {
            var a = +t[0][0],
                u = +t[0][1],
                s = +t[1][0],
                c = +t[1][1];
            Tc(a, u, s, c), Ic(a, u, s, c)
        }
        this.edges = Ok, this.cells = Ak, Pk = Ik = Ok = Ak = null
    }

    function Gc(e, t, n) {
        this.target = e, this.type = t, this.transform = n
    }

    function Yc(e, t, n) {
        this.k = e, this.x = t, this.y = n
    }

    function Xc(e) {
        return e.__zoom || Hk
    }

    function Kc() {
        af.stopImmediatePropagation()
    }

    function $c() {
        return !af.button
    }

    function Qc() {
        var e, t, n = this;
        return n instanceof SVGElement ? (n = n.ownerSVGElement || n, e = n.width.baseVal.value, t = n.height.baseVal.value) : (e = n.clientWidth, t = n.clientHeight), [
            [0, 0],
            [e, t]
        ]
    }

    function Jc() {
        return this.__zoom || Hk
    }

    function Zc() {
        return -af.deltaY * (af.deltaMode ? 120 : 1) / 500
    }

    function el() {
        return "ontouchstart" in this
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var tl = function(e, t) {
            return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
        },
        nl = function(e) {
            return 1 === e.length && (e = r(e)), {
                left: function(t, n, r, o) {
                    for (null == r && (r = 0), null == o && (o = t.length); r < o;) {
                        var i = r + o >>> 1;
                        e(t[i], n) < 0 ? r = i + 1 : o = i
                    }
                    return r
                },
                right: function(t, n, r, o) {
                    for (null == r && (r = 0), null == o && (o = t.length); r < o;) {
                        var i = r + o >>> 1;
                        e(t[i], n) > 0 ? o = i : r = i + 1
                    }
                    return r
                }
            }
        },
        rl = nl(tl),
        ol = rl.right,
        il = rl.left,
        al = ol,
        ul = function(e, t) {
            null == t && (t = o);
            for (var n = 0, r = e.length - 1, i = e[0], a = new Array(r < 0 ? 0 : r); n < r;) a[n] = t(i, i = e[++n]);
            return a
        },
        sl = function(e, t, n) {
            var r, i, a, u, s = e.length,
                c = t.length,
                l = new Array(s * c);
            for (null == n && (n = o), r = a = 0; r < s; ++r)
                for (u = e[r], i = 0; i < c; ++i, ++a) l[a] = n(u, t[i]);
            return l
        },
        cl = function(e, t) {
            return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
        },
        ll = function(e) {
            return null === e ? NaN : +e
        },
        fl = function(e, t) {
            var n, r, o = e.length,
                i = 0,
                a = -1,
                u = 0,
                s = 0;
            if (null == t)
                for (; ++a < o;) isNaN(n = ll(e[a])) || (r = n - u, u += r / ++i, s += r * (n - u));
            else
                for (; ++a < o;) isNaN(n = ll(t(e[a], a, e))) || (r = n - u, u += r / ++i, s += r * (n - u));
            if (i > 1) return s / (i - 1)
        },
        dl = function(e, t) {
            var n = fl(e, t);
            return n ? Math.sqrt(n) : n
        },
        hl = function(e, t) {
            var n, r, o, i = e.length,
                a = -1;
            if (null == t) {
                for (; ++a < i;)
                    if (null != (n = e[a]) && n >= n)
                        for (r = o = n; ++a < i;) null != (n = e[a]) && (r > n && (r = n), o < n && (o = n))
            } else
                for (; ++a < i;)
                    if (null != (n = t(e[a], a, e)) && n >= n)
                        for (r = o = n; ++a < i;) null != (n = t(e[a], a, e)) && (r > n && (r = n), o < n && (o = n)); return [r, o]
        },
        pl = Array.prototype,
        ml = pl.slice,
        gl = pl.map,
        vl = function(e) {
            return function() {
                return e
            }
        },
        yl = function(e) {
            return e
        },
        _l = function(e, t, n) {
            e = +e, t = +t, n = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +n;
            for (var r = -1, o = 0 | Math.max(0, Math.ceil((t - e) / n)), i = new Array(o); ++r < o;) i[r] = e + r * n;
            return i
        },
        bl = Math.sqrt(50),
        xl = Math.sqrt(10),
        wl = Math.sqrt(2),
        kl = function(e, t, n) {
            var r, o, a, u, s = -1;
            if (t = +t, e = +e, n = +n, e === t && n > 0) return [e];
            if ((r = t < e) && (o = e, e = t, t = o), 0 === (u = i(e, t, n)) || !isFinite(u)) return [];
            if (u > 0)
                for (e = Math.ceil(e / u), t = Math.floor(t / u), a = new Array(o = Math.ceil(t - e + 1)); ++s < o;) a[s] = (e + s) * u;
            else
                for (e = Math.floor(e * u), t = Math.ceil(t * u), a = new Array(o = Math.ceil(e - t + 1)); ++s < o;) a[s] = (e - s) / u;
            return r && a.reverse(), a
        },
        El = function(e) {
            return Math.ceil(Math.log(e.length) / Math.LN2) + 1
        },
        Cl = function() {
            function e(e) {
                var o, i, u = e.length,
                    s = new Array(u);
                for (o = 0; o < u; ++o) s[o] = t(e[o], o, e);
                var c = n(s),
                    l = c[0],
                    f = c[1],
                    d = r(s, l, f);
                Array.isArray(d) || (d = a(l, f, d), d = _l(Math.ceil(l / d) * d, Math.floor(f / d) * d, d));
                for (var h = d.length; d[0] <= l;) d.shift(), --h;
                for (; d[h - 1] > f;) d.pop(), --h;
                var p, m = new Array(h + 1);
                for (o = 0; o <= h; ++o) p = m[o] = [], p.x0 = o > 0 ? d[o - 1] : l, p.x1 = o < h ? d[o] : f;
                for (o = 0; o < u; ++o) i = s[o], l <= i && i <= f && m[al(d, i, 0, h)].push(e[o]);
                return m
            }
            var t = yl,
                n = hl,
                r = El;
            return e.value = function(n) {
                return arguments.length ? (t = "function" == typeof n ? n : vl(n), e) : t
            }, e.domain = function(t) {
                return arguments.length ? (n = "function" == typeof t ? t : vl([t[0], t[1]]), e) : n
            }, e.thresholds = function(t) {
                return arguments.length ? (r = "function" == typeof t ? t : vl(Array.isArray(t) ? ml.call(t) : t), e) : r
            }, e
        },
        Tl = function(e, t, n) {
            if (null == n && (n = ll), r = e.length) {
                if ((t = +t) <= 0 || r < 2) return +n(e[0], 0, e);
                if (t >= 1) return +n(e[r - 1], r - 1, e);
                var r, o = (r - 1) * t,
                    i = Math.floor(o),
                    a = +n(e[i], i, e);
                return a + (+n(e[i + 1], i + 1, e) - a) * (o - i)
            }
        },
        Ml = function(e, t, n) {
            return e = gl.call(e, ll).sort(tl), Math.ceil((n - t) / (2 * (Tl(e, .75) - Tl(e, .25)) * Math.pow(e.length, -1 / 3)))
        },
        Sl = function(e, t, n) {
            return Math.ceil((n - t) / (3.5 * dl(e) * Math.pow(e.length, -1 / 3)))
        },
        Nl = function(e, t) {
            var n, r, o = e.length,
                i = -1;
            if (null == t) {
                for (; ++i < o;)
                    if (null != (n = e[i]) && n >= n)
                        for (r = n; ++i < o;) null != (n = e[i]) && n > r && (r = n)
            } else
                for (; ++i < o;)
                    if (null != (n = t(e[i], i, e)) && n >= n)
                        for (r = n; ++i < o;) null != (n = t(e[i], i, e)) && n > r && (r = n); return r
        },
        Pl = function(e, t) {
            var n, r = e.length,
                o = r,
                i = -1,
                a = 0;
            if (null == t)
                for (; ++i < r;) isNaN(n = ll(e[i])) ? --o : a += n;
            else
                for (; ++i < r;) isNaN(n = ll(t(e[i], i, e))) ? --o : a += n;
            if (o) return a / o
        },
        Al = function(e, t) {
            var n, r = e.length,
                o = -1,
                i = [];
            if (null == t)
                for (; ++o < r;) isNaN(n = ll(e[o])) || i.push(n);
            else
                for (; ++o < r;) isNaN(n = ll(t(e[o], o, e))) || i.push(n);
            return Tl(i.sort(tl), .5)
        },
        Il = function(e) {
            for (var t, n, r, o = e.length, i = -1, a = 0; ++i < o;) a += e[i].length;
            for (n = new Array(a); --o >= 0;)
                for (r = e[o], t = r.length; --t >= 0;) n[--a] = r[t];
            return n
        },
        Ol = function(e, t) {
            var n, r, o = e.length,
                i = -1;
            if (null == t) {
                for (; ++i < o;)
                    if (null != (n = e[i]) && n >= n)
                        for (r = n; ++i < o;) null != (n = e[i]) && r > n && (r = n)
            } else
                for (; ++i < o;)
                    if (null != (n = t(e[i], i, e)) && n >= n)
                        for (r = n; ++i < o;) null != (n = t(e[i], i, e)) && r > n && (r = n); return r
        },
        Rl = function(e, t) {
            for (var n = t.length, r = new Array(n); n--;) r[n] = e[t[n]];
            return r
        },
        Dl = function(e, t) {
            if (n = e.length) {
                var n, r, o = 0,
                    i = 0,
                    a = e[i];
                for (null == t && (t = tl); ++o < n;)(t(r = e[o], a) < 0 || 0 !== t(a, a)) && (a = r, i = o);
                return 0 === t(a, a) ? i : void 0
            }
        },
        Ll = function(e, t, n) {
            for (var r, o, i = (null == n ? e.length : n) - (t = null == t ? 0 : +t); i;) o = Math.random() * i-- | 0, r = e[i + t], e[i + t] = e[o + t], e[o + t] = r;
            return e
        },
        Fl = function(e, t) {
            var n, r = e.length,
                o = -1,
                i = 0;
            if (null == t)
                for (; ++o < r;)(n = +e[o]) && (i += n);
            else
                for (; ++o < r;)(n = +t(e[o], o, e)) && (i += n);
            return i
        },
        jl = function(e) {
            if (!(o = e.length)) return [];
            for (var t = -1, n = Ol(e, u), r = new Array(n); ++t < n;)
                for (var o, i = -1, a = r[t] = new Array(o); ++i < o;) a[i] = e[i][t];
            return r
        },
        Ul = function() {
            return jl(arguments)
        },
        zl = Array.prototype.slice,
        Hl = function(e) {
            return e
        },
        Bl = 1,
        ql = 2,
        Wl = 3,
        Vl = 4,
        Gl = 1e-6,
        Yl = {
            value: function() {}
        };
    _.prototype = y.prototype = {
        constructor: _,
        on: function(e, t) {
            var n, r = this._,
                o = b(e + "", r),
                i = -1,
                a = o.length; {
                if (!(arguments.length < 2)) {
                    if (null != t && "function" != typeof t) throw new Error("invalid callback: " + t);
                    for (; ++i < a;)
                        if (n = (e = o[i]).type) r[n] = w(r[n], e.name, t);
                        else if (null == t)
                        for (n in r) r[n] = w(r[n], e.name, null);
                    return this
                }
                for (; ++i < a;)
                    if ((n = (e = o[i]).type) && (n = x(r[n], e.name))) return n
            }
        },
        copy: function() {
            var e = {},
                t = this._;
            for (var n in t) e[n] = t[n].slice();
            return new _(e)
        },
        call: function(e, t) {
            if ((n = arguments.length - 2) > 0)
                for (var n, r, o = new Array(n), i = 0; i < n; ++i) o[i] = arguments[i + 2];
            if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
            for (r = this._[e], i = 0, n = r.length; i < n; ++i) r[i].value.apply(t, o)
        },
        apply: function(e, t, n) {
            if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
            for (var r = this._[e], o = 0, i = r.length; o < i; ++o) r[o].value.apply(t, n)
        }
    };
    var Xl = y,
        Kl = "http://www.w3.org/1999/xhtml",
        $l = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: Kl,
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        },
        Ql = function(e) {
            var t = e += "",
                n = t.indexOf(":");
            return n >= 0 && "xmlns" !== (t = e.slice(0, n)) && (e = e.slice(n + 1)), $l.hasOwnProperty(t) ? {
                space: $l[t],
                local: e
            } : e
        },
        Jl = function(e) {
            var t = Ql(e);
            return (t.local ? E : k)(t)
        },
        Zl = 0;
    T.prototype = C.prototype = {
        constructor: T,
        get: function(e) {
            for (var t = this._; !(t in e);)
                if (!(e = e.parentNode)) return;
            return e[t]
        },
        set: function(e, t) {
            return e[this._] = t
        },
        remove: function(e) {
            return this._ in e && delete e[this._]
        },
        toString: function() {
            return this._
        }
    };
    var ef = function(e) {
        return function() {
            return this.matches(e)
        }
    };
    if ("undefined" != typeof document) {
        var tf = document.documentElement;
        if (!tf.matches) {
            var nf = tf.webkitMatchesSelector || tf.msMatchesSelector || tf.mozMatchesSelector || tf.oMatchesSelector;
            ef = function(e) {
                return function() {
                    return nf.call(this, e)
                }
            }
        }
    }
    var rf = ef,
        of = {},
        af = null;
    if ("undefined" != typeof document) {
        "onmouseenter" in document.documentElement || (of = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        })
    }
    var uf = function(e, t, n) {
            var r, o, i = N(e + ""),
                a = i.length; {
                if (!(arguments.length < 2)) {
                    for (u = t ? A : P, null == n && (n = !1), r = 0; r < a; ++r) this.each(u(i[r], t, n));
                    return this
                }
                var u = this.node().__on;
                if (u)
                    for (var s, c = 0, l = u.length; c < l; ++c)
                        for (r = 0, s = u[c]; r < a; ++r)
                            if ((o = i[r]).type === s.type && o.name === s.name) return s.value
            }
        },
        sf = function() {
            for (var e, t = af; e = t.sourceEvent;) t = e;
            return t
        },
        cf = function(e, t) {
            var n = e.ownerSVGElement || e;
            if (n.createSVGPoint) {
                var r = n.createSVGPoint();
                return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y]
            }
            var o = e.getBoundingClientRect();
            return [t.clientX - o.left - e.clientLeft, t.clientY - o.top - e.clientTop]
        },
        lf = function(e) {
            var t = sf();
            return t.changedTouches && (t = t.changedTouches[0]), cf(e, t)
        },
        ff = function(e) {
            return null == e ? O : function() {
                return this.querySelector(e)
            }
        },
        df = function(e) {
            "function" != typeof e && (e = ff(e));
            for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
                for (var i, a, u = t[o], s = u.length, c = r[o] = new Array(s), l = 0; l < s; ++l)(i = u[l]) && (a = e.call(i, i.__data__, l, u)) && ("__data__" in i && (a.__data__ = i.__data__), c[l] = a);
            return new _e(r, this._parents)
        },
        hf = function(e) {
            return null == e ? R : function() {
                return this.querySelectorAll(e)
            }
        },
        pf = function(e) {
            "function" != typeof e && (e = hf(e));
            for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
                for (var a, u = t[i], s = u.length, c = 0; c < s; ++c)(a = u[c]) && (r.push(e.call(a, a.__data__, c, u)), o.push(a));
            return new _e(r, o)
        },
        mf = function(e) {
            "function" != typeof e && (e = rf(e));
            for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
                for (var i, a = t[o], u = a.length, s = r[o] = [], c = 0; c < u; ++c)(i = a[c]) && e.call(i, i.__data__, c, a) && s.push(i);
            return new _e(r, this._parents)
        },
        gf = function(e) {
            return new Array(e.length)
        },
        vf = function() {
            return new _e(this._enter || this._groups.map(gf), this._parents)
        };
    D.prototype = {
        constructor: D,
        appendChild: function(e) {
            return this._parent.insertBefore(e, this._next)
        },
        insertBefore: function(e, t) {
            return this._parent.insertBefore(e, t)
        },
        querySelector: function(e) {
            return this._parent.querySelector(e)
        },
        querySelectorAll: function(e) {
            return this._parent.querySelectorAll(e)
        }
    };
    var yf = function(e) {
            return function() {
                return e
            }
        },
        _f = "$",
        bf = function(e, t) {
            if (!e) return h = new Array(this.size()), c = -1, this.each(function(e) {
                h[++c] = e
            }), h;
            var n = t ? F : L,
                r = this._parents,
                o = this._groups;
            "function" != typeof e && (e = yf(e));
            for (var i = o.length, a = new Array(i), u = new Array(i), s = new Array(i), c = 0; c < i; ++c) {
                var l = r[c],
                    f = o[c],
                    d = f.length,
                    h = e.call(l, l && l.__data__, c, r),
                    p = h.length,
                    m = u[c] = new Array(p),
                    g = a[c] = new Array(p);
                n(l, f, m, g, s[c] = new Array(d), h, t);
                for (var v, y, _ = 0, b = 0; _ < p; ++_)
                    if (v = m[_]) {
                        for (_ >= b && (b = _ + 1); !(y = g[b]) && ++b < p;);
                        v._next = y || null
                    }
            }
            return a = new _e(a, r), a._enter = u, a._exit = s, a
        },
        xf = function() {
            return new _e(this._exit || this._groups.map(gf), this._parents)
        },
        wf = function(e) {
            for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), u = 0; u < i; ++u)
                for (var s, c = t[u], l = n[u], f = c.length, d = a[u] = new Array(f), h = 0; h < f; ++h)(s = c[h] || l[h]) && (d[h] = s);
            for (; u < r; ++u) a[u] = t[u];
            return new _e(a, this._parents)
        },
        kf = function() {
            for (var e = this._groups, t = -1, n = e.length; ++t < n;)
                for (var r, o = e[t], i = o.length - 1, a = o[i]; --i >= 0;)(r = o[i]) && (a && a !== r.nextSibling && a.parentNode.insertBefore(r, a), a = r);
            return this
        },
        Ef = function(e) {
            function t(t, n) {
                return t && n ? e(t.__data__, n.__data__) : !t - !n
            }
            e || (e = j);
            for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
                for (var a, u = n[i], s = u.length, c = o[i] = new Array(s), l = 0; l < s; ++l)(a = u[l]) && (c[l] = a);
                c.sort(t)
            }
            return new _e(o, this._parents).order()
        },
        Cf = function() {
            var e = arguments[0];
            return arguments[0] = this, e.apply(null, arguments), this
        },
        Tf = function() {
            var e = new Array(this.size()),
                t = -1;
            return this.each(function() {
                e[++t] = this
            }), e
        },
        Mf = function() {
            for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
                for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
                    var a = r[o];
                    if (a) return a
                }
            return null
        },
        Sf = function() {
            var e = 0;
            return this.each(function() {
                ++e
            }), e
        },
        Nf = function() {
            return !this.node()
        },
        Pf = function(e) {
            for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
                for (var o, i = t[n], a = 0, u = i.length; a < u; ++a)(o = i[a]) && e.call(o, o.__data__, a, i);
            return this
        },
        Af = function(e, t) {
            var n = Ql(e);
            if (arguments.length < 2) {
                var r = this.node();
                return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n)
            }
            return this.each((null == t ? n.local ? z : U : "function" == typeof t ? n.local ? W : q : n.local ? B : H)(n, t))
        },
        If = function(e) {
            return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView
        },
        Of = function(e, t, n) {
            return arguments.length > 1 ? this.each((null == t ? V : "function" == typeof t ? Y : G)(e, t, null == n ? "" : n)) : X(this.node(), e)
        },
        Rf = function(e, t) {
            return arguments.length > 1 ? this.each((null == t ? K : "function" == typeof t ? Q : $)(e, t)) : this.node()[e]
        };
    ee.prototype = {
        add: function(e) {
            this._names.indexOf(e) < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")))
        },
        remove: function(e) {
            var t = this._names.indexOf(e);
            t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")))
        },
        contains: function(e) {
            return this._names.indexOf(e) >= 0
        }
    };
    var Df = function(e, t) {
            var n = J(e + "");
            if (arguments.length < 2) {
                for (var r = Z(this.node()), o = -1, i = n.length; ++o < i;)
                    if (!r.contains(n[o])) return !1;
                return !0
            }
            return this.each(("function" == typeof t ? ie : t ? re : oe)(n, t))
        },
        Lf = function(e) {
            return arguments.length ? this.each(null == e ? ae : ("function" == typeof e ? se : ue)(e)) : this.node().textContent
        },
        Ff = function(e) {
            return arguments.length ? this.each(null == e ? ce : ("function" == typeof e ? fe : le)(e)) : this.node().innerHTML
        },
        jf = function() {
            return this.each(de)
        },
        Uf = function() {
            return this.each(he)
        },
        zf = function(e) {
            var t = "function" == typeof e ? e : Jl(e);
            return this.select(function() {
                return this.appendChild(t.apply(this, arguments))
            })
        },
        Hf = function(e, t) {
            var n = "function" == typeof e ? e : Jl(e),
                r = null == t ? pe : "function" == typeof t ? t : ff(t);
            return this.select(function() {
                return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null)
            })
        },
        Bf = function() {
            return this.each(me)
        },
        qf = function(e) {
            return arguments.length ? this.property("__data__", e) : this.node().__data__
        },
        Wf = function(e, t) {
            return this.each(("function" == typeof t ? ye : ve)(e, t))
        },
        Vf = [null];
    _e.prototype = be.prototype = {
        constructor: _e,
        select: df,
        selectAll: pf,
        filter: mf,
        data: bf,
        enter: vf,
        exit: xf,
        merge: wf,
        order: kf,
        sort: Ef,
        call: Cf,
        nodes: Tf,
        node: Mf,
        size: Sf,
        empty: Nf,
        each: Pf,
        attr: Af,
        style: Of,
        property: Rf,
        classed: Df,
        text: Lf,
        html: Ff,
        raise: jf,
        lower: Uf,
        append: zf,
        insert: Hf,
        remove: Bf,
        datum: qf,
        on: uf,
        dispatch: Wf
    };
    var Gf = be,
        Yf = function(e) {
            return "string" == typeof e ? new _e([
                [document.querySelector(e)]
            ], [document.documentElement]) : new _e([
                [e]
            ], Vf)
        },
        Xf = function(e) {
            return "string" == typeof e ? new _e([document.querySelectorAll(e)], [document.documentElement]) : new _e([null == e ? [] : e], Vf)
        },
        Kf = function(e, t, n) {
            arguments.length < 3 && (n = t, t = sf().changedTouches);
            for (var r, o = 0, i = t ? t.length : 0; o < i; ++o)
                if ((r = t[o]).identifier === n) return cf(e, r);
            return null
        },
        $f = function(e, t) {
            null == t && (t = sf().touches);
            for (var n = 0, r = t ? t.length : 0, o = new Array(r); n < r; ++n) o[n] = cf(e, t[n]);
            return o
        },
        Qf = function() {
            af.preventDefault(), af.stopImmediatePropagation()
        },
        Jf = function(e) {
            var t = e.document.documentElement,
                n = Yf(e).on("dragstart.drag", Qf, !0);
            "onselectstart" in t ? n.on("selectstart.drag", Qf, !0) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none")
        },
        Zf = function(e) {
            return function() {
                return e
            }
        };
    ke.prototype.on = function() {
        var e = this._.on.apply(this._, arguments);
        return e === this._ ? this : e
    };
    var ed = function() {
            function e(e) {
                e.on("mousedown.drag", t).filter(m).on("touchstart.drag", o).on("touchmove.drag", i).on("touchend.drag touchcancel.drag", a).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
            }

            function t() {
                if (!f && d.apply(this, arguments)) {
                    var e = u("mouse", h.apply(this, arguments), lf, this, arguments);
                    e && (Yf(af.view).on("mousemove.drag", n, !0).on("mouseup.drag", r, !0), Jf(af.view), xe(), l = !1, s = af.clientX, c = af.clientY, e("start"))
                }
            }

            function n() {
                if (Qf(), !l) {
                    var e = af.clientX - s,
                        t = af.clientY - c;
                    l = e * e + t * t > _
                }
                g.mouse("drag")
            }

            function r() {
                Yf(af.view).on("mousemove.drag mouseup.drag", null), we(af.view, l), Qf(), g.mouse("end")
            }

            function o() {
                if (d.apply(this, arguments)) {
                    var e, t, n = af.changedTouches,
                        r = h.apply(this, arguments),
                        o = n.length;
                    for (e = 0; e < o; ++e)(t = u(n[e].identifier, r, Kf, this, arguments)) && (xe(), t("start"))
                }
            }

            function i() {
                var e, t, n = af.changedTouches,
                    r = n.length;
                for (e = 0; e < r; ++e)(t = g[n[e].identifier]) && (Qf(), t("drag"))
            }

            function a() {
                var e, t, n = af.changedTouches,
                    r = n.length;
                for (f && clearTimeout(f), f = setTimeout(function() {
                        f = null
                    }, 500), e = 0; e < r; ++e)(t = g[n[e].identifier]) && (xe(), t("end"))
            }

            function u(t, n, r, o, i) {
                var a, u, s, c = r(n, t),
                    l = v.copy();
                if (I(new ke(e, "beforestart", a, t, y, c[0], c[1], 0, 0, l), function() {
                        return null != (af.subject = a = p.apply(o, i)) && (u = a.x - c[0] || 0, s = a.y - c[1] || 0, !0)
                    })) return function f(d) {
                    var h, p = c;
                    switch (d) {
                        case "start":
                            g[t] = f, h = y++;
                            break;
                        case "end":
                            delete g[t], --y;
                        case "drag":
                            c = r(n, t), h = y
                    }
                    I(new ke(e, d, a, t, h, c[0] + u, c[1] + s, c[0] - p[0], c[1] - p[1], l), l.apply, l, [d, o, i])
                }
            }
            var s, c, l, f, d = Ee,
                h = Ce,
                p = Te,
                m = Me,
                g = {},
                v = Xl("start", "drag", "end"),
                y = 0,
                _ = 0;
            return e.filter = function(t) {
                return arguments.length ? (d = "function" == typeof t ? t : Zf(!!t), e) : d
            }, e.container = function(t) {
                return arguments.length ? (h = "function" == typeof t ? t : Zf(t), e) : h
            }, e.subject = function(t) {
                return arguments.length ? (p = "function" == typeof t ? t : Zf(t), e) : p
            }, e.touchable = function(t) {
                return arguments.length ? (m = "function" == typeof t ? t : Zf(!!t), e) : m
            }, e.on = function() {
                var t = v.on.apply(v, arguments);
                return t === v ? e : t
            }, e.clickDistance = function(t) {
                return arguments.length ? (_ = (t = +t) * t, e) : Math.sqrt(_)
            }, e
        },
        td = function(e, t, n) {
            e.prototype = t.prototype = n, n.constructor = e
        },
        nd = "\\s*([+-]?\\d+)\\s*",
        rd = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        od = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        id = /^#([0-9a-f]{3})$/,
        ad = /^#([0-9a-f]{6})$/,
        ud = new RegExp("^rgb\\(" + [nd, nd, nd] + "\\)$"),
        sd = new RegExp("^rgb\\(" + [od, od, od] + "\\)$"),
        cd = new RegExp("^rgba\\(" + [nd, nd, nd, rd] + "\\)$"),
        ld = new RegExp("^rgba\\(" + [od, od, od, rd] + "\\)$"),
        fd = new RegExp("^hsl\\(" + [rd, od, od] + "\\)$"),
        dd = new RegExp("^hsla\\(" + [rd, od, od, rd] + "\\)$"),
        hd = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        };
    td(Ne, Pe, {
        displayable: function() {
            return this.rgb().displayable()
        },
        toString: function() {
            return this.rgb() + ""
        }
    }), td(De, Re, Se(Ne, {
        brighter: function(e) {
            return e = null == e ? 1 / .7 : Math.pow(1 / .7, e), new De(this.r * e, this.g * e, this.b * e, this.opacity)
        },
        darker: function(e) {
            return e = null == e ? .7 : Math.pow(.7, e), new De(this.r * e, this.g * e, this.b * e, this.opacity)
        },
        rgb: function() {
            return this
        },
        displayable: function() {
            return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
        },
        toString: function() {
            var e = this.opacity;
            return e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e)), (1 === e ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === e ? ")" : ", " + e + ")")
        }
    })), td(Ue, je, Se(Ne, {
        brighter: function(e) {
            return e = null == e ? 1 / .7 : Math.pow(1 / .7, e), new Ue(this.h, this.s, this.l * e, this.opacity)
        },
        darker: function(e) {
            return e = null == e ? .7 : Math.pow(.7, e), new Ue(this.h, this.s, this.l * e, this.opacity)
        },
        rgb: function() {
            var e = this.h % 360 + 360 * (this.h < 0),
                t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
                n = this.l,
                r = n + (n < .5 ? n : 1 - n) * t,
                o = 2 * n - r;
            return new De(ze(e >= 240 ? e - 240 : e + 120, o, r), ze(e, o, r), ze(e < 120 ? e + 240 : e - 120, o, r), this.opacity)
        },
        displayable: function() {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
        }
    }));
    var pd = Math.PI / 180,
        md = 180 / Math.PI,
        gd = .95047,
        vd = 1,
        yd = 1.08883,
        _d = 4 / 29,
        bd = 6 / 29,
        xd = 3 * bd * bd,
        wd = bd * bd * bd;
    td(qe, Be, Se(Ne, {
        brighter: function(e) {
            return new qe(this.l + 18 * (null == e ? 1 : e), this.a, this.b, this.opacity)
        },
        darker: function(e) {
            return new qe(this.l - 18 * (null == e ? 1 : e), this.a, this.b, this.opacity)
        },
        rgb: function() {
            var e = (this.l + 16) / 116,
                t = isNaN(this.a) ? e : e + this.a / 500,
                n = isNaN(this.b) ? e : e - this.b / 200;
            return e = vd * Ve(e), t = gd * Ve(t), n = yd * Ve(n), new De(Ge(3.2404542 * t - 1.5371385 * e - .4985314 * n), Ge(-.969266 * t + 1.8760108 * e + .041556 * n), Ge(.0556434 * t - .2040259 * e + 1.0572252 * n), this.opacity)
        }
    })), td($e, Ke, Se(Ne, {
        brighter: function(e) {
            return new $e(this.h, this.c, this.l + 18 * (null == e ? 1 : e), this.opacity)
        },
        darker: function(e) {
            return new $e(this.h, this.c, this.l - 18 * (null == e ? 1 : e), this.opacity)
        },
        rgb: function() {
            return He(this).rgb()
        }
    }));
    var kd = -.29227,
        Ed = -.90649,
        Cd = 1.97294,
        Td = Cd * Ed,
        Md = 1.78277 * Cd,
        Sd = 1.78277 * kd - -.14861 * Ed;
    td(Ze, Je, Se(Ne, {
        brighter: function(e) {
            return e = null == e ? 1 / .7 : Math.pow(1 / .7, e), new Ze(this.h, this.s, this.l * e, this.opacity)
        },
        darker: function(e) {
            return e = null == e ? .7 : Math.pow(.7, e), new Ze(this.h, this.s, this.l * e, this.opacity)
        },
        rgb: function() {
            var e = isNaN(this.h) ? 0 : (this.h + 120) * pd,
                t = +this.l,
                n = isNaN(this.s) ? 0 : this.s * t * (1 - t),
                r = Math.cos(e),
                o = Math.sin(e);
            return new De(255 * (t + n * (-.14861 * r + 1.78277 * o)), 255 * (t + n * (kd * r + Ed * o)), 255 * (t + n * (Cd * r)), this.opacity)
        }
    }));
    var Nd, Pd, Ad, Id, Od, Rd, Dd = function(e) {
            var t = e.length - 1;
            return function(n) {
                var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t),
                    o = e[r],
                    i = e[r + 1],
                    a = r > 0 ? e[r - 1] : 2 * o - i,
                    u = r < t - 1 ? e[r + 2] : 2 * i - o;
                return et((n - r / t) * t, a, o, i, u)
            }
        },
        Ld = function(e) {
            var t = e.length;
            return function(n) {
                var r = Math.floor(((n %= 1) < 0 ? ++n : n) * t),
                    o = e[(r + t - 1) % t],
                    i = e[r % t],
                    a = e[(r + 1) % t],
                    u = e[(r + 2) % t];
                return et((n - r / t) * t, o, i, a, u)
            }
        },
        Fd = function(e) {
            return function() {
                return e
            }
        },
        jd = function e(t) {
            function n(e, t) {
                var n = r((e = Re(e)).r, (t = Re(t)).r),
                    o = r(e.g, t.g),
                    i = r(e.b, t.b),
                    a = it(e.opacity, t.opacity);
                return function(t) {
                    return e.r = n(t), e.g = o(t), e.b = i(t), e.opacity = a(t), e + ""
                }
            }
            var r = ot(t);
            return n.gamma = e, n
        }(1),
        Ud = at(Dd),
        zd = at(Ld),
        Hd = function(e, t) {
            var n, r = t ? t.length : 0,
                o = e ? Math.min(r, e.length) : 0,
                i = new Array(r),
                a = new Array(r);
            for (n = 0; n < o; ++n) i[n] = Xd(e[n], t[n]);
            for (; n < r; ++n) a[n] = t[n];
            return function(e) {
                for (n = 0; n < o; ++n) a[n] = i[n](e);
                return a
            }
        },
        Bd = function(e, t) {
            var n = new Date;
            return e = +e, t -= e,
                function(r) {
                    return n.setTime(e + t * r), n
                }
        },
        qd = function(e, t) {
            return e = +e, t -= e,
                function(n) {
                    return e + t * n
                }
        },
        Wd = function(e, t) {
            var n, r = {},
                o = {};
            null !== e && "object" == typeof e || (e = {}), null !== t && "object" == typeof t || (t = {});
            for (n in t) n in e ? r[n] = Xd(e[n], t[n]) : o[n] = t[n];
            return function(e) {
                for (n in r) o[n] = r[n](e);
                return o
            }
        },
        Vd = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        Gd = new RegExp(Vd.source, "g"),
        Yd = function(e, t) {
            var n, r, o, i = Vd.lastIndex = Gd.lastIndex = 0,
                a = -1,
                u = [],
                s = [];
            for (e += "", t += "";
                (n = Vd.exec(e)) && (r = Gd.exec(t));)(o = r.index) > i && (o = t.slice(i, o), u[a] ? u[a] += o : u[++a] = o), (n = n[0]) === (r = r[0]) ? u[a] ? u[a] += r : u[++a] = r : (u[++a] = null, s.push({
                i: a,
                x: qd(n, r)
            })), i = Gd.lastIndex;
            return i < t.length && (o = t.slice(i), u[a] ? u[a] += o : u[++a] = o), u.length < 2 ? s[0] ? st(s[0].x) : ut(t) : (t = s.length, function(e) {
                for (var n, r = 0; r < t; ++r) u[(n = s[r]).i] = n.x(e);
                return u.join("")
            })
        },
        Xd = function(e, t) {
            var n, r = typeof t;
            return null == t || "boolean" === r ? Fd(t) : ("number" === r ? qd : "string" === r ? (n = Pe(t)) ? (t = n, jd) : Yd : t instanceof Pe ? jd : t instanceof Date ? Bd : Array.isArray(t) ? Hd : "function" != typeof t.valueOf && "function" != typeof t.toString || isNaN(t) ? Wd : qd)(e, t)
        },
        Kd = function(e, t) {
            return e = +e, t -= e,
                function(n) {
                    return Math.round(e + t * n)
                }
        },
        $d = 180 / Math.PI,
        Qd = {
            translateX: 0,
            translateY: 0,
            rotate: 0,
            skewX: 0,
            scaleX: 1,
            scaleY: 1
        },
        Jd = function(e, t, n, r, o, i) {
            var a, u, s;
            return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (s = e * n + t * r) && (n -= e * s, r -= t * s), (u = Math.sqrt(n * n + r * r)) && (n /= u, r /= u, s /= u), e * r < t * n && (e = -e, t = -t, s = -s, a = -a), {
                translateX: o,
                translateY: i,
                rotate: Math.atan2(t, e) * $d,
                skewX: Math.atan(s) * $d,
                scaleX: a,
                scaleY: u
            }
        },
        Zd = ft(ct, "px, ", "px)", "deg)"),
        eh = ft(lt, ", ", ")", ")"),
        th = Math.SQRT2,
        nh = function(e, t) {
            var n, r, o = e[0],
                i = e[1],
                a = e[2],
                u = t[0],
                s = t[1],
                c = t[2],
                l = u - o,
                f = s - i,
                d = l * l + f * f;
            if (d < 1e-12) r = Math.log(c / a) / th, n = function(e) {
                return [o + e * l, i + e * f, a * Math.exp(th * e * r)]
            };
            else {
                var h = Math.sqrt(d),
                    p = (c * c - a * a + 4 * d) / (2 * a * 2 * h),
                    m = (c * c - a * a - 4 * d) / (2 * c * 2 * h),
                    g = Math.log(Math.sqrt(p * p + 1) - p),
                    v = Math.log(Math.sqrt(m * m + 1) - m);
                r = (v - g) / th, n = function(e) {
                    var t = e * r,
                        n = dt(g),
                        u = a / (2 * h) * (n * pt(th * t + g) - ht(g));
                    return [o + u * l, i + u * f, a * n / dt(th * t + g)]
                }
            }
            return n.duration = 1e3 * r, n
        },
        rh = mt(rt),
        oh = mt(it),
        ih = vt(rt),
        ah = vt(it),
        uh = yt(rt),
        sh = yt(it),
        ch = function(e, t) {
            for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e(r / (t - 1));
            return n
        },
        lh = 0,
        fh = 0,
        dh = 0,
        hh = 1e3,
        ph = 0,
        mh = 0,
        gh = 0,
        vh = "object" == typeof performance && performance.now ? performance : Date,
        yh = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
            setTimeout(e, 17)
        };
    xt.prototype = wt.prototype = {
        constructor: xt,
        restart: function(e, t, n) {
            if ("function" != typeof e) throw new TypeError("callback is not a function");
            n = (null == n ? _t() : +n) + (null == t ? 0 : +t), this._next || Rd === this || (Rd ? Rd._next = this : Od = this, Rd = this), this._call = e, this._time = n, Mt()
        },
        stop: function() {
            this._call && (this._call = null, this._time = 1 / 0, Mt())
        }
    };
    var _h = function(e, t, n) {
            var r = new xt;
            return t = null == t ? 0 : +t, r.restart(function(n) {
                r.stop(), e(n + t)
            }, t, n), r
        },
        bh = function(e, t, n) {
            var r = new xt,
                o = t;
            return null == t ? (r.restart(e, t, n), r) : (t = +t, n = null == n ? _t() : +n, r.restart(function i(a) {
                a += o, r.restart(i, o += t, n), e(a)
            }, t, n), r)
        },
        xh = Xl("start", "end", "interrupt"),
        wh = [],
        kh = 0,
        Eh = 1,
        Ch = 2,
        Th = 3,
        Mh = 4,
        Sh = 5,
        Nh = 6,
        Ph = function(e, t, n, r, o, i) {
            var a = e.__transition;
            if (a) {
                if (n in a) return
            } else e.__transition = {};
            At(e, n, {
                name: t,
                index: r,
                group: o,
                on: xh,
                tween: wh,
                time: i.time,
                delay: i.delay,
                duration: i.duration,
                ease: i.ease,
                timer: null,
                state: kh
            })
        },
        Ah = function(e, t) {
            var n, r, o, i = e.__transition,
                a = !0;
            if (i) {
                t = null == t ? null : t + "";
                for (o in i)(n = i[o]).name === t ? (r = n.state > Ch && n.state < Sh, n.state = Nh, n.timer.stop(), r && n.on.call("interrupt", e, e.__data__, n.index, n.group), delete i[o]) : a = !1;
                a && delete e.__transition
            }
        },
        Ih = function(e) {
            return this.each(function() {
                Ah(this, e)
            })
        },
        Oh = function(e, t) {
            var n = this._id;
            if (e += "", arguments.length < 2) {
                for (var r, o = Pt(this.node(), n).tween, i = 0, a = o.length; i < a; ++i)
                    if ((r = o[i]).name === e) return r.value;
                return null
            }
            return this.each((null == t ? It : Ot)(n, e, t))
        },
        Rh = function(e, t) {
            var n;
            return ("number" == typeof t ? qd : t instanceof Pe ? jd : (n = Pe(t)) ? (t = n, jd) : Yd)(e, t)
        },
        Dh = function(e, t) {
            var n = Ql(e),
                r = "transform" === n ? eh : Rh;
            return this.attrTween(e, "function" == typeof t ? (n.local ? zt : Ut)(n, r, Rt(this, "attr." + e, t)) : null == t ? (n.local ? Lt : Dt)(n) : (n.local ? jt : Ft)(n, r, t + ""))
        },
        Lh = function(e, t) {
            var n = "attr." + e;
            if (arguments.length < 2) return (n = this.tween(n)) && n._value;
            if (null == t) return this.tween(n, null);
            if ("function" != typeof t) throw new Error;
            var r = Ql(e);
            return this.tween(n, (r.local ? Ht : Bt)(r, t))
        },
        Fh = function(e) {
            var t = this._id;
            return arguments.length ? this.each(("function" == typeof e ? qt : Wt)(t, e)) : Pt(this.node(), t).delay
        },
        jh = function(e) {
            var t = this._id;
            return arguments.length ? this.each(("function" == typeof e ? Vt : Gt)(t, e)) : Pt(this.node(), t).duration
        },
        Uh = function(e) {
            var t = this._id;
            return arguments.length ? this.each(Yt(t, e)) : Pt(this.node(), t).ease
        },
        zh = function(e) {
            "function" != typeof e && (e = rf(e));
            for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
                for (var i, a = t[o], u = a.length, s = r[o] = [], c = 0; c < u; ++c)(i = a[c]) && e.call(i, i.__data__, c, a) && s.push(i);
            return new on(r, this._parents, this._name, this._id)
        },
        Hh = function(e) {
            if (e._id !== this._id) throw new Error;
            for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), u = 0; u < i; ++u)
                for (var s, c = t[u], l = n[u], f = c.length, d = a[u] = new Array(f), h = 0; h < f; ++h)(s = c[h] || l[h]) && (d[h] = s);
            for (; u < r; ++u) a[u] = t[u];
            return new on(a, this._parents, this._name, this._id)
        },
        Bh = function(e, t) {
            var n = this._id;
            return arguments.length < 2 ? Pt(this.node(), n).on.on(e) : this.each(Kt(n, e, t))
        },
        qh = function() {
            return this.on("end.remove", $t(this._id))
        },
        Wh = function(e) {
            var t = this._name,
                n = this._id;
            "function" != typeof e && (e = ff(e));
            for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
                for (var u, s, c = r[a], l = c.length, f = i[a] = new Array(l), d = 0; d < l; ++d)(u = c[d]) && (s = e.call(u, u.__data__, d, c)) && ("__data__" in u && (s.__data__ = u.__data__), f[d] = s, Ph(f[d], t, n, d, f, Pt(u, n)));
            return new on(i, this._parents, t, n)
        },
        Vh = function(e) {
            var t = this._name,
                n = this._id;
            "function" != typeof e && (e = hf(e));
            for (var r = this._groups, o = r.length, i = [], a = [], u = 0; u < o; ++u)
                for (var s, c = r[u], l = c.length, f = 0; f < l; ++f)
                    if (s = c[f]) {
                        for (var d, h = e.call(s, s.__data__, f, c), p = Pt(s, n), m = 0, g = h.length; m < g; ++m)(d = h[m]) && Ph(d, t, n, m, h, p);
                        i.push(h), a.push(s)
                    }
            return new on(i, a, t, n)
        },
        Gh = Gf.prototype.constructor,
        Yh = function() {
            return new Gh(this._groups, this._parents)
        },
        Xh = function(e, t, n) {
            var r = "transform" == (e += "") ? Zd : Rh;
            return null == t ? this.styleTween(e, Qt(e, r)).on("end.style." + e, Jt(e)) : this.styleTween(e, "function" == typeof t ? en(e, r, Rt(this, "style." + e, t)) : Zt(e, r, t + ""), n)
        },
        Kh = function(e, t, n) {
            var r = "style." + (e += "");
            if (arguments.length < 2) return (r = this.tween(r)) && r._value;
            if (null == t) return this.tween(r, null);
            if ("function" != typeof t) throw new Error;
            return this.tween(r, tn(e, t, null == n ? "" : n))
        },
        $h = function(e) {
            return this.tween("text", "function" == typeof e ? rn(Rt(this, "text", e)) : nn(null == e ? "" : e + ""))
        },
        Qh = function() {
            for (var e = this._name, t = this._id, n = un(), r = this._groups, o = r.length, i = 0; i < o; ++i)
                for (var a, u = r[i], s = u.length, c = 0; c < s; ++c)
                    if (a = u[c]) {
                        var l = Pt(a, t);
                        Ph(a, e, n, c, u, {
                            time: l.time + l.delay + l.duration,
                            delay: 0,
                            duration: l.duration,
                            ease: l.ease
                        })
                    }
            return new on(r, this._parents, e, n)
        },
        Jh = 0,
        Zh = Gf.prototype;
    on.prototype = an.prototype = {
        constructor: on,
        select: Wh,
        selectAll: Vh,
        filter: zh,
        merge: Hh,
        selection: Yh,
        transition: Qh,
        call: Zh.call,
        nodes: Zh.nodes,
        node: Zh.node,
        size: Zh.size,
        empty: Zh.empty,
        each: Zh.each,
        on: Bh,
        attr: Dh,
        attrTween: Lh,
        style: Xh,
        styleTween: Kh,
        text: $h,
        remove: qh,
        tween: Oh,
        delay: Fh,
        duration: jh,
        ease: Uh
    };
    var ep = function e(t) {
            function n(e) {
                return Math.pow(e, t)
            }
            return t = +t, n.exponent = e, n
        }(3),
        tp = function e(t) {
            function n(e) {
                return 1 - Math.pow(1 - e, t)
            }
            return t = +t, n.exponent = e, n
        }(3),
        np = function e(t) {
            function n(e) {
                return ((e *= 2) <= 1 ? Math.pow(e, t) : 2 - Math.pow(2 - e, t)) / 2
            }
            return t = +t, n.exponent = e, n
        }(3),
        rp = Math.PI,
        op = rp / 2,
        ip = 4 / 11,
        ap = 6 / 11,
        up = 8 / 11,
        sp = .75,
        cp = 9 / 11,
        lp = 10 / 11,
        fp = .9375,
        dp = 21 / 22,
        hp = 63 / 64,
        pp = 1 / ip / ip,
        mp = function e(t) {
            function n(e) {
                return e * e * ((t + 1) * e - t)
            }
            return t = +t, n.overshoot = e, n
        }(1.70158),
        gp = function e(t) {
            function n(e) {
                return --e * e * ((t + 1) * e + t) + 1
            }
            return t = +t, n.overshoot = e, n
        }(1.70158),
        vp = function e(t) {
            function n(e) {
                return ((e *= 2) < 1 ? e * e * ((t + 1) * e - t) : (e -= 2) * e * ((t + 1) * e + t) + 2) / 2
            }
            return t = +t, n.overshoot = e, n
        }(1.70158),
        yp = 2 * Math.PI,
        _p = function e(t, n) {
            function r(e) {
                return t * Math.pow(2, 10 * --e) * Math.sin((o - e) / n)
            }
            var o = Math.asin(1 / (t = Math.max(1, t))) * (n /= yp);
            return r.amplitude = function(t) {
                return e(t, n * yp)
            }, r.period = function(n) {
                return e(t, n)
            }, r
        }(1, .3),
        bp = function e(t, n) {
            function r(e) {
                return 1 - t * Math.pow(2, -10 * (e = +e)) * Math.sin((e + o) / n)
            }
            var o = Math.asin(1 / (t = Math.max(1, t))) * (n /= yp);
            return r.amplitude = function(t) {
                return e(t, n * yp)
            }, r.period = function(n) {
                return e(t, n)
            }, r
        }(1, .3),
        xp = function e(t, n) {
            function r(e) {
                return ((e = 2 * e - 1) < 0 ? t * Math.pow(2, 10 * e) * Math.sin((o - e) / n) : 2 - t * Math.pow(2, -10 * e) * Math.sin((o + e) / n)) / 2
            }
            var o = Math.asin(1 / (t = Math.max(1, t))) * (n /= yp);
            return r.amplitude = function(t) {
                return e(t, n * yp)
            }, r.period = function(n) {
                return e(t, n)
            }, r
        }(1, .3),
        wp = {
            time: null,
            delay: 0,
            duration: 250,
            ease: pn
        },
        kp = function(e) {
            var t, n;
            e instanceof on ? (t = e._id, e = e._name) : (t = un(), (n = wp).time = _t(), e = null == e ? null : e + "");
            for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
                for (var a, u = r[i], s = u.length, c = 0; c < s; ++c)(a = u[c]) && Ph(a, e, t, c, u, n || Mn(a, t));
            return new on(r, this._parents, e, t)
        };
    Gf.prototype.interrupt = Ih, Gf.prototype.transition = kp;
    var Ep = [null],
        Cp = function(e, t) {
            var n, r, o = e.__transition;
            if (o) {
                t = null == t ? null : t + "";
                for (r in o)
                    if ((n = o[r]).state > Eh && n.name === t) return new on([
                        [e]
                    ], Ep, t, +r)
            }
            return null
        },
        Tp = function(e) {
            return function() {
                return e
            }
        },
        Mp = function(e, t, n) {
            this.target = e, this.type = t, this.selection = n
        },
        Sp = function() {
            af.preventDefault(), af.stopImmediatePropagation()
        },
        Np = {
            name: "drag"
        },
        Pp = {
            name: "space"
        },
        Ap = {
            name: "handle"
        },
        Ip = {
            name: "center"
        },
        Op = {
            name: "x",
            handles: ["e", "w"].map(Nn),
            input: function(e, t) {
                return e && [
                    [e[0], t[0][1]],
                    [e[1], t[1][1]]
                ]
            },
            output: function(e) {
                return e && [e[0][0], e[1][0]]
            }
        },
        Rp = {
            name: "y",
            handles: ["n", "s"].map(Nn),
            input: function(e, t) {
                return e && [
                    [t[0][0], e[0]],
                    [t[1][0], e[1]]
                ]
            },
            output: function(e) {
                return e && [e[0][1], e[1][1]]
            }
        },
        Dp = {
            name: "xy",
            handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(Nn),
            input: function(e) {
                return e
            },
            output: function(e) {
                return e
            }
        },
        Lp = {
            overlay: "crosshair",
            selection: "move",
            n: "ns-resize",
            e: "ew-resize",
            s: "ns-resize",
            w: "ew-resize",
            nw: "nwse-resize",
            ne: "nesw-resize",
            se: "nwse-resize",
            sw: "nesw-resize"
        },
        Fp = {
            e: "w",
            w: "e",
            nw: "ne",
            ne: "nw",
            se: "sw",
            sw: "se"
        },
        jp = {
            n: "s",
            s: "n",
            nw: "sw",
            ne: "se",
            se: "ne",
            sw: "nw"
        },
        Up = {
            overlay: 1,
            selection: 1,
            n: null,
            e: 1,
            s: null,
            w: -1,
            nw: -1,
            ne: 1,
            se: 1,
            sw: -1
        },
        zp = {
            overlay: 1,
            selection: 1,
            n: -1,
            e: null,
            s: 1,
            w: null,
            nw: -1,
            ne: -1,
            se: 1,
            sw: 1
        },
        Hp = function() {
            return Fn(Dp)
        },
        Bp = Math.cos,
        qp = Math.sin,
        Wp = Math.PI,
        Vp = Wp / 2,
        Gp = 2 * Wp,
        Yp = Math.max,
        Xp = function() {
            function e(e) {
                var i, a, u, s, c, l, f = e.length,
                    d = [],
                    h = _l(f),
                    p = [],
                    m = [],
                    g = m.groups = new Array(f),
                    v = new Array(f * f);
                for (i = 0, c = -1; ++c < f;) {
                    for (a = 0, l = -1; ++l < f;) a += e[c][l];
                    d.push(a), p.push(_l(f)), i += a
                }
                for (n && h.sort(function(e, t) {
                        return n(d[e], d[t])
                    }), r && p.forEach(function(t, n) {
                        t.sort(function(t, o) {
                            return r(e[n][t], e[n][o])
                        })
                    }), i = Yp(0, Gp - t * f) / i, s = i ? t : Gp / f, a = 0, c = -1; ++c < f;) {
                    for (u = a, l = -1; ++l < f;) {
                        var y = h[c],
                            _ = p[y][l],
                            b = e[y][_],
                            x = a,
                            w = a += b * i;
                        v[_ * f + y] = {
                            index: y,
                            subindex: _,
                            startAngle: x,
                            endAngle: w,
                            value: b
                        }
                    }
                    g[y] = {
                        index: y,
                        startAngle: u,
                        endAngle: a,
                        value: d[y]
                    }, a += s
                }
                for (c = -1; ++c < f;)
                    for (l = c - 1; ++l < f;) {
                        var k = v[l * f + c],
                            E = v[c * f + l];
                        (k.value || E.value) && m.push(k.value < E.value ? {
                            source: E,
                            target: k
                        } : {
                            source: k,
                            target: E
                        })
                    }
                return o ? m.sort(o) : m
            }
            var t = 0,
                n = null,
                r = null,
                o = null;
            return e.padAngle = function(n) {
                return arguments.length ? (t = Yp(0, n), e) : t
            }, e.sortGroups = function(t) {
                return arguments.length ? (n = t, e) : n
            }, e.sortSubgroups = function(t) {
                return arguments.length ? (r = t, e) : r
            }, e.sortChords = function(t) {
                return arguments.length ? (null == t ? o = null : (o = jn(t))._ = t, e) : o && o._
            }, e
        },
        Kp = Array.prototype.slice,
        $p = function(e) {
            return function() {
                return e
            }
        },
        Qp = Math.PI,
        Jp = 2 * Qp,
        Zp = Jp - 1e-6;
    Un.prototype = zn.prototype = {
        constructor: Un,
        moveTo: function(e, t) {
            this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t)
        },
        closePath: function() {
            null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
        },
        lineTo: function(e, t) {
            this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t)
        },
        quadraticCurveTo: function(e, t, n, r) {
            this._ += "Q" + +e + "," + +t + "," + (this._x1 = +n) + "," + (this._y1 = +r)
        },
        bezierCurveTo: function(e, t, n, r, o, i) {
            this._ += "C" + +e + "," + +t + "," + +n + "," + +r + "," + (this._x1 = +o) + "," + (this._y1 = +i)
        },
        arcTo: function(e, t, n, r, o) {
            e = +e, t = +t, n = +n, r = +r, o = +o;
            var i = this._x1,
                a = this._y1,
                u = n - e,
                s = r - t,
                c = i - e,
                l = a - t,
                f = c * c + l * l;
            if (o < 0) throw new Error("negative radius: " + o);
            if (null === this._x1) this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
            else if (f > 1e-6)
                if (Math.abs(l * u - s * c) > 1e-6 && o) {
                    var d = n - i,
                        h = r - a,
                        p = u * u + s * s,
                        m = d * d + h * h,
                        g = Math.sqrt(p),
                        v = Math.sqrt(f),
                        y = o * Math.tan((Qp - Math.acos((p + f - m) / (2 * g * v))) / 2),
                        _ = y / v,
                        b = y / g;
                    Math.abs(_ - 1) > 1e-6 && (this._ += "L" + (e + _ * c) + "," + (t + _ * l)), this._ += "A" + o + "," + o + ",0,0," + +(l * d > c * h) + "," + (this._x1 = e + b * u) + "," + (this._y1 = t + b * s)
                } else this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
            else;
        },
        arc: function(e, t, n, r, o, i) {
            e = +e, t = +t, n = +n;
            var a = n * Math.cos(r),
                u = n * Math.sin(r),
                s = e + a,
                c = t + u,
                l = 1 ^ i,
                f = i ? r - o : o - r;
            if (n < 0) throw new Error("negative radius: " + n);
            null === this._x1 ? this._ += "M" + s + "," + c : (Math.abs(this._x1 - s) > 1e-6 || Math.abs(this._y1 - c) > 1e-6) && (this._ += "L" + s + "," + c), n && (f < 0 && (f = f % Jp + Jp), f > Zp ? this._ += "A" + n + "," + n + ",0,1," + l + "," + (e - a) + "," + (t - u) + "A" + n + "," + n + ",0,1," + l + "," + (this._x1 = s) + "," + (this._y1 = c) : f > 1e-6 && (this._ += "A" + n + "," + n + ",0," + +(f >= Qp) + "," + l + "," + (this._x1 = e + n * Math.cos(o)) + "," + (this._y1 = t + n * Math.sin(o))))
        },
        rect: function(e, t, n, r) {
            this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +r + "h" + -n + "Z"
        },
        toString: function() {
            return this._
        }
    };
    var em = zn,
        tm = function() {
            function e() {
                var e, u = Kp.call(arguments),
                    s = t.apply(this, u),
                    c = n.apply(this, u),
                    l = +r.apply(this, (u[0] = s, u)),
                    f = o.apply(this, u) - Vp,
                    d = i.apply(this, u) - Vp,
                    h = l * Bp(f),
                    p = l * qp(f),
                    m = +r.apply(this, (u[0] = c, u)),
                    g = o.apply(this, u) - Vp,
                    v = i.apply(this, u) - Vp;
                if (a || (a = e = em()), a.moveTo(h, p), a.arc(0, 0, l, f, d), f === g && d === v || (a.quadraticCurveTo(0, 0, m * Bp(g), m * qp(g)), a.arc(0, 0, m, g, v)), a.quadraticCurveTo(0, 0, h, p), a.closePath(), e) return a = null, e + "" || null
            }
            var t = Hn,
                n = Bn,
                r = qn,
                o = Wn,
                i = Vn,
                a = null;
            return e.radius = function(t) {
                return arguments.length ? (r = "function" == typeof t ? t : $p(+t), e) : r
            }, e.startAngle = function(t) {
                return arguments.length ? (o = "function" == typeof t ? t : $p(+t), e) : o
            }, e.endAngle = function(t) {
                return arguments.length ? (i = "function" == typeof t ? t : $p(+t), e) : i
            }, e.source = function(n) {
                return arguments.length ? (t = n, e) : t
            }, e.target = function(t) {
                return arguments.length ? (n = t, e) : n
            }, e.context = function(t) {
                return arguments.length ? (a = null == t ? null : t, e) : a
            }, e
        };
    Gn.prototype = Yn.prototype = {
        constructor: Gn,
        has: function(e) {
            return "$" + e in this
        },
        get: function(e) {
            return this["$" + e]
        },
        set: function(e, t) {
            return this["$" + e] = t, this
        },
        remove: function(e) {
            var t = "$" + e;
            return t in this && delete this[t]
        },
        clear: function() {
            for (var e in this) "$" === e[0] && delete this[e]
        },
        keys: function() {
            var e = [];
            for (var t in this) "$" === t[0] && e.push(t.slice(1));
            return e
        },
        values: function() {
            var e = [];
            for (var t in this) "$" === t[0] && e.push(this[t]);
            return e
        },
        entries: function() {
            var e = [];
            for (var t in this) "$" === t[0] && e.push({
                key: t.slice(1),
                value: this[t]
            });
            return e
        },
        size: function() {
            var e = 0;
            for (var t in this) "$" === t[0] && ++e;
            return e
        },
        empty: function() {
            for (var e in this)
                if ("$" === e[0]) return !1;
            return !0
        },
        each: function(e) {
            for (var t in this) "$" === t[0] && e(this[t], t.slice(1), this)
        }
    };
    var nm = Yn,
        rm = function() {
            function e(t, o, a, u) {
                if (o >= i.length) return null != n && t.sort(n), null != r ? r(t) : t;
                for (var s, c, l, f = -1, d = t.length, h = i[o++], p = nm(), m = a(); ++f < d;)(l = p.get(s = h(c = t[f]) + "")) ? l.push(c) : p.set(s, [c]);
                return p.each(function(t, n) {
                    u(m, n, e(t, o, a, u))
                }), m
            }

            function t(e, n) {
                if (++n > i.length) return e;
                var o, u = a[n - 1];
                return null != r && n >= i.length ? o = e.entries() : (o = [], e.each(function(e, r) {
                    o.push({
                        key: r,
                        values: t(e, n)
                    })
                })), null != u ? o.sort(function(e, t) {
                    return u(e.key, t.key)
                }) : o
            }
            var n, r, o, i = [],
                a = [];
            return o = {
                object: function(t) {
                    return e(t, 0, Xn, Kn)
                },
                map: function(t) {
                    return e(t, 0, $n, Qn)
                },
                entries: function(n) {
                    return t(e(n, 0, $n, Qn), 0)
                },
                key: function(e) {
                    return i.push(e), o
                },
                sortKeys: function(e) {
                    return a[i.length - 1] = e, o
                },
                sortValues: function(e) {
                    return n = e, o
                },
                rollup: function(e) {
                    return r = e, o
                }
            }
        },
        om = nm.prototype;
    Jn.prototype = Zn.prototype = {
        constructor: Jn,
        has: om.has,
        add: function(e) {
            return e += "", this["$" + e] = e, this
        },
        remove: om.remove,
        clear: om.clear,
        values: om.keys,
        size: om.size,
        empty: om.empty,
        each: om.each
    };
    var im = Zn,
        am = function(e) {
            var t = [];
            for (var n in e) t.push(n);
            return t
        },
        um = function(e) {
            var t = [];
            for (var n in e) t.push(e[n]);
            return t
        },
        sm = function(e) {
            var t = [];
            for (var n in e) t.push({
                key: n,
                value: e[n]
            });
            return t
        },
        cm = {},
        lm = {},
        fm = 34,
        dm = 10,
        hm = 13,
        pm = function(e) {
            function t(e, t) {
                var r, o, i = n(e, function(e, n) {
                    if (r) return r(e, n - 1);
                    o = e, r = t ? tr(e, t) : er(e)
                });
                return i.columns = o, i
            }

            function n(e, t) {
                function n() {
                    if (c) return lm;
                    if (l) return l = !1, cm;
                    var t, n, r = a;
                    if (e.charCodeAt(r) === fm) {
                        for (; a++ < i && e.charCodeAt(a) !== fm || e.charCodeAt(++a) === fm;);
                        return (t = a) >= i ? c = !0 : (n = e.charCodeAt(a++)) === dm ? l = !0 : n === hm && (l = !0, e.charCodeAt(a) === dm && ++a), e.slice(r + 1, t - 1).replace(/""/g, '"')
                    }
                    for (; a < i;) {
                        if ((n = e.charCodeAt(t = a++)) === dm) l = !0;
                        else if (n === hm) l = !0, e.charCodeAt(a) === dm && ++a;
                        else if (n !== s) continue;
                        return e.slice(r, t)
                    }
                    return c = !0, e.slice(r, i)
                }
                var r, o = [],
                    i = e.length,
                    a = 0,
                    u = 0,
                    c = i <= 0,
                    l = !1;
                for (e.charCodeAt(i - 1) === dm && --i, e.charCodeAt(i - 1) === hm && --i;
                    (r = n()) !== lm;) {
                    for (var f = []; r !== cm && r !== lm;) f.push(r), r = n();
                    t && null == (f = t(f, u++)) || o.push(f)
                }
                return o
            }

            function r(t, n) {
                return null == n && (n = nr(t)), [n.map(a).join(e)].concat(t.map(function(t) {
                    return n.map(function(e) {
                        return a(t[e])
                    }).join(e)
                })).join("\n")
            }

            function o(e) {
                return e.map(i).join("\n")
            }

            function i(t) {
                return t.map(a).join(e)
            }

            function a(e) {
                return null == e ? "" : u.test(e += "") ? '"' + e.replace(/"/g, '""') + '"' : e
            }
            var u = new RegExp('["' + e + "\n\r]"),
                s = e.charCodeAt(0);
            return {
                parse: t,
                parseRows: n,
                format: r,
                formatRows: o
            }
        },
        mm = pm(","),
        gm = mm.parse,
        vm = mm.parseRows,
        ym = mm.format,
        _m = mm.formatRows,
        bm = pm("\t"),
        xm = bm.parse,
        wm = bm.parseRows,
        km = bm.format,
        Em = bm.formatRows,
        Cm = function(e, t) {
            function n() {
                var n, o, i = r.length,
                    a = 0,
                    u = 0;
                for (n = 0; n < i; ++n) o = r[n], a += o.x, u += o.y;
                for (a = a / i - e, u = u / i - t, n = 0; n < i; ++n) o = r[n], o.x -= a, o.y -= u
            }
            var r;
            return null == e && (e = 0), null == t && (t = 0), n.initialize = function(e) {
                r = e
            }, n.x = function(t) {
                return arguments.length ? (e = +t, n) : e
            }, n.y = function(e) {
                return arguments.length ? (t = +e, n) : t
            }, n
        },
        Tm = function(e) {
            return function() {
                return e
            }
        },
        Mm = function() {
            return 1e-6 * (Math.random() - .5)
        },
        Sm = function(e) {
            var t = +this._x.call(null, e),
                n = +this._y.call(null, e);
            return rr(this.cover(t, n), t, n, e)
        },
        Nm = function(e, t) {
            if (isNaN(e = +e) || isNaN(t = +t)) return this;
            var n = this._x0,
                r = this._y0,
                o = this._x1,
                i = this._y1;
            if (isNaN(n)) o = (n = Math.floor(e)) + 1, i = (r = Math.floor(t)) + 1;
            else {
                if (!(n > e || e > o || r > t || t > i)) return this;
                var a, u, s = o - n,
                    c = this._root;
                switch (u = (t < (r + i) / 2) << 1 | e < (n + o) / 2) {
                    case 0:
                        do {
                            a = new Array(4), a[u] = c, c = a
                        } while (s *= 2, o = n + s, i = r + s, e > o || t > i);
                        break;
                    case 1:
                        do {
                            a = new Array(4), a[u] = c, c = a
                        } while (s *= 2, n = o - s, i = r + s, n > e || t > i);
                        break;
                    case 2:
                        do {
                            a = new Array(4), a[u] = c, c = a
                        } while (s *= 2, o = n + s, r = i - s, e > o || r > t);
                        break;
                    case 3:
                        do {
                            a = new Array(4), a[u] = c, c = a
                        } while (s *= 2, n = o - s, r = i - s, n > e || r > t)
                }
                this._root && this._root.length && (this._root = c)
            }
            return this._x0 = n, this._y0 = r, this._x1 = o, this._y1 = i, this
        },
        Pm = function() {
            var e = [];
            return this.visit(function(t) {
                if (!t.length)
                    do {
                        e.push(t.data)
                    } while (t = t.next)
            }), e
        },
        Am = function(e) {
            return arguments.length ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1]) : isNaN(this._x0) ? void 0 : [
                [this._x0, this._y0],
                [this._x1, this._y1]
            ]
        },
        Im = function(e, t, n, r, o) {
            this.node = e, this.x0 = t, this.y0 = n, this.x1 = r, this.y1 = o
        },
        Om = function(e, t, n) {
            var r, o, i, a, u, s, c, l = this._x0,
                f = this._y0,
                d = this._x1,
                h = this._y1,
                p = [],
                m = this._root;
            for (m && p.push(new Im(m, l, f, d, h)), null == n ? n = 1 / 0 : (l = e - n, f = t - n, d = e + n, h = t + n, n *= n); s = p.pop();)
                if (!(!(m = s.node) || (o = s.x0) > d || (i = s.y0) > h || (a = s.x1) < l || (u = s.y1) < f))
                    if (m.length) {
                        var g = (o + a) / 2,
                            v = (i + u) / 2;
                        p.push(new Im(m[3], g, v, a, u), new Im(m[2], o, v, g, u), new Im(m[1], g, i, a, v), new Im(m[0], o, i, g, v)), (c = (t >= v) << 1 | e >= g) && (s = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - c], p[p.length - 1 - c] = s)
                    } else {
                        var y = e - +this._x.call(null, m.data),
                            _ = t - +this._y.call(null, m.data),
                            b = y * y + _ * _;
                        if (b < n) {
                            var x = Math.sqrt(n = b);
                            l = e - x, f = t - x, d = e + x, h = t + x, r = m.data
                        }
                    }
            return r
        },
        Rm = function(e) {
            if (isNaN(i = +this._x.call(null, e)) || isNaN(a = +this._y.call(null, e))) return this;
            var t, n, r, o, i, a, u, s, c, l, f, d, h = this._root,
                p = this._x0,
                m = this._y0,
                g = this._x1,
                v = this._y1;
            if (!h) return this;
            if (h.length)
                for (;;) {
                    if ((c = i >= (u = (p + g) / 2)) ? p = u : g = u, (l = a >= (s = (m + v) / 2)) ? m = s : v = s, t = h, !(h = h[f = l << 1 | c])) return this;
                    if (!h.length) break;
                    (t[f + 1 & 3] || t[f + 2 & 3] || t[f + 3 & 3]) && (n = t, d = f)
                }
            for (; h.data !== e;)
                if (r = h, !(h = h.next)) return this;
            return (o = h.next) && delete h.next, r ? (o ? r.next = o : delete r.next, this) : t ? (o ? t[f] = o : delete t[f], (h = t[0] || t[1] || t[2] || t[3]) && h === (t[3] || t[2] || t[1] || t[0]) && !h.length && (n ? n[d] = h : this._root = h), this) : (this._root = o, this)
        },
        Dm = function() {
            return this._root
        },
        Lm = function() {
            var e = 0;
            return this.visit(function(t) {
                if (!t.length)
                    do {
                        ++e
                    } while (t = t.next)
            }), e
        },
        Fm = function(e) {
            var t, n, r, o, i, a, u = [],
                s = this._root;
            for (s && u.push(new Im(s, this._x0, this._y0, this._x1, this._y1)); t = u.pop();)
                if (!e(s = t.node, r = t.x0, o = t.y0, i = t.x1, a = t.y1) && s.length) {
                    var c = (r + i) / 2,
                        l = (o + a) / 2;
                    (n = s[3]) && u.push(new Im(n, c, l, i, a)), (n = s[2]) && u.push(new Im(n, r, l, c, a)), (n = s[1]) && u.push(new Im(n, c, o, i, l)), (n = s[0]) && u.push(new Im(n, r, o, c, l))
                }
            return this
        },
        jm = function(e) {
            var t, n = [],
                r = [];
            for (this._root && n.push(new Im(this._root, this._x0, this._y0, this._x1, this._y1)); t = n.pop();) {
                var o = t.node;
                if (o.length) {
                    var i, a = t.x0,
                        u = t.y0,
                        s = t.x1,
                        c = t.y1,
                        l = (a + s) / 2,
                        f = (u + c) / 2;
                    (i = o[0]) && n.push(new Im(i, a, u, l, f)), (i = o[1]) && n.push(new Im(i, l, u, s, f)), (i = o[2]) && n.push(new Im(i, a, f, l, c)), (i = o[3]) && n.push(new Im(i, l, f, s, c))
                }
                r.push(t)
            }
            for (; t = r.pop();) e(t.node, t.x0, t.y0, t.x1, t.y1);
            return this
        },
        Um = function(e) {
            return arguments.length ? (this._x = e, this) : this._x
        },
        zm = function(e) {
            return arguments.length ? (this._y = e, this) : this._y
        },
        Hm = sr.prototype = cr.prototype;
    Hm.copy = function() {
        var e, t, n = new cr(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
            r = this._root;
        if (!r) return n;
        if (!r.length) return n._root = lr(r), n;
        for (e = [{
                source: r,
                target: n._root = new Array(4)
            }]; r = e.pop();)
            for (var o = 0; o < 4; ++o)(t = r.source[o]) && (t.length ? e.push({
                source: t,
                target: r.target[o] = new Array(4)
            }) : r.target[o] = lr(t));
        return n
    }, Hm.add = Sm, Hm.addAll = or, Hm.cover = Nm, Hm.data = Pm, Hm.extent = Am, Hm.find = Om, Hm.remove = Rm, Hm.removeAll = ir, Hm.root = Dm, Hm.size = Lm, Hm.visit = Fm, Hm.visitAfter = jm, Hm.x = Um, Hm.y = zm;
    var Bm, qm = function(e) {
            function t() {
                function e(e, t, n, r, o) {
                    var i = e.data,
                        u = e.r,
                        h = f + u; {
                        if (!i) return t > c + h || r < c - h || n > l + h || o < l - h;
                        if (i.index > s.index) {
                            var p = c - i.x - i.vx,
                                m = l - i.y - i.vy,
                                g = p * p + m * m;
                            g < h * h && (0 === p && (p = Mm(), g += p * p), 0 === m && (m = Mm(), g += m * m), g = (h - (g = Math.sqrt(g))) / g * a, s.vx += (p *= g) * (h = (u *= u) / (d + u)), s.vy += (m *= g) * h, i.vx -= p * (h = 1 - h), i.vy -= m * h)
                        }
                    }
                }
                for (var t, r, s, c, l, f, d, h = o.length, p = 0; p < u; ++p)
                    for (r = sr(o, fr, dr).visitAfter(n), t = 0; t < h; ++t) s = o[t], f = i[s.index], d = f * f, c = s.x + s.vx, l = s.y + s.vy, r.visit(e)
            }

            function n(e) {
                if (e.data) return e.r = i[e.data.index];
                for (var t = e.r = 0; t < 4; ++t) e[t] && e[t].r > e.r && (e.r = e[t].r)
            }

            function r() {
                if (o) {
                    var t, n, r = o.length;
                    for (i = new Array(r), t = 0; t < r; ++t) n = o[t], i[n.index] = +e(n, t, o)
                }
            }
            var o, i, a = 1,
                u = 1;
            return "function" != typeof e && (e = Tm(null == e ? 1 : +e)), t.initialize = function(e) {
                o = e, r()
            }, t.iterations = function(e) {
                return arguments.length ? (u = +e, t) : u
            }, t.strength = function(e) {
                return arguments.length ? (a = +e, t) : a
            }, t.radius = function(n) {
                return arguments.length ? (e = "function" == typeof n ? n : Tm(+n), r(), t) : e
            }, t
        },
        Wm = function(e) {
            function t(e) {
                return 1 / Math.min(c[e.source.index], c[e.target.index])
            }

            function n(t) {
                for (var n = 0, r = e.length; n < p; ++n)
                    for (var o, i, s, c, f, d, h, m = 0; m < r; ++m) o = e[m], i = o.source, s = o.target, c = s.x + s.vx - i.x - i.vx || Mm(), f = s.y + s.vy - i.y - i.vy || Mm(), d = Math.sqrt(c * c + f * f), d = (d - u[m]) / d * t * a[m], c *= d, f *= d, s.vx -= c * (h = l[m]), s.vy -= f * h, i.vx += c * (h = 1 - h), i.vy += f * h
            }

            function r() {
                if (s) {
                    var t, n, r = s.length,
                        d = e.length,
                        h = nm(s, f);
                    for (t = 0, c = new Array(r); t < d; ++t) n = e[t], n.index = t, "object" != typeof n.source && (n.source = pr(h, n.source)), "object" != typeof n.target && (n.target = pr(h, n.target)), c[n.source.index] = (c[n.source.index] || 0) + 1, c[n.target.index] = (c[n.target.index] || 0) + 1;
                    for (t = 0, l = new Array(d); t < d; ++t) n = e[t], l[t] = c[n.source.index] / (c[n.source.index] + c[n.target.index]);
                    a = new Array(d), o(), u = new Array(d), i()
                }
            }

            function o() {
                if (s)
                    for (var t = 0, n = e.length; t < n; ++t) a[t] = +d(e[t], t, e)
            }

            function i() {
                if (s)
                    for (var t = 0, n = e.length; t < n; ++t) u[t] = +h(e[t], t, e)
            }
            var a, u, s, c, l, f = hr,
                d = t,
                h = Tm(30),
                p = 1;
            return null == e && (e = []), n.initialize = function(e) {
                s = e, r()
            }, n.links = function(t) {
                return arguments.length ? (e = t, r(), n) : e
            }, n.id = function(e) {
                return arguments.length ? (f = e, n) : f
            }, n.iterations = function(e) {
                return arguments.length ? (p = +e, n) : p
            }, n.strength = function(e) {
                return arguments.length ? (d = "function" == typeof e ? e : Tm(+e), o(), n) : d
            }, n.distance = function(e) {
                return arguments.length ? (h = "function" == typeof e ? e : Tm(+e), i(), n) : h
            }, n
        },
        Vm = 10,
        Gm = Math.PI * (3 - Math.sqrt(5)),
        Ym = function(e) {
            function t() {
                n(), h.call("tick", i), a < u && (d.stop(), h.call("end", i))
            }

            function n() {
                var t, n, r = e.length;
                for (a += (c - a) * s, f.each(function(e) {
                        e(a)
                    }), t = 0; t < r; ++t) n = e[t], null == n.fx ? n.x += n.vx *= l : (n.x = n.fx, n.vx = 0), null == n.fy ? n.y += n.vy *= l : (n.y = n.fy, n.vy = 0)
            }

            function r() {
                for (var t, n = 0, r = e.length; n < r; ++n) {
                    if (t = e[n], t.index = n, isNaN(t.x) || isNaN(t.y)) {
                        var o = Vm * Math.sqrt(n),
                            i = n * Gm;
                        t.x = o * Math.cos(i), t.y = o * Math.sin(i)
                    }(isNaN(t.vx) || isNaN(t.vy)) && (t.vx = t.vy = 0)
                }
            }

            function o(t) {
                return t.initialize && t.initialize(e), t
            }
            var i, a = 1,
                u = .001,
                s = 1 - Math.pow(u, 1 / 300),
                c = 0,
                l = .6,
                f = nm(),
                d = wt(t),
                h = Xl("tick", "end");
            return null == e && (e = []), r(), i = {
                tick: n,
                restart: function() {
                    return d.restart(t), i
                },
                stop: function() {
                    return d.stop(), i
                },
                nodes: function(t) {
                    return arguments.length ? (e = t, r(), f.each(o), i) : e
                },
                alpha: function(e) {
                    return arguments.length ? (a = +e, i) : a
                },
                alphaMin: function(e) {
                    return arguments.length ? (u = +e, i) : u
                },
                alphaDecay: function(e) {
                    return arguments.length ? (s = +e, i) : +s
                },
                alphaTarget: function(e) {
                    return arguments.length ? (c = +e, i) : c
                },
                velocityDecay: function(e) {
                    return arguments.length ? (l = 1 - e, i) : 1 - l
                },
                force: function(e, t) {
                    return arguments.length > 1 ? (null == t ? f.remove(e) : f.set(e, o(t)), i) : f.get(e)
                },
                find: function(t, n, r) {
                    var o, i, a, u, s, c = 0,
                        l = e.length;
                    for (null == r ? r = 1 / 0 : r *= r, c = 0; c < l; ++c) u = e[c], o = t - u.x, i = n - u.y, (a = o * o + i * i) < r && (s = u, r = a);
                    return s
                },
                on: function(e, t) {
                    return arguments.length > 1 ? (h.on(e, t), i) : h.on(e)
                }
            }
        },
        Xm = function() {
            function e(e) {
                var t, u = o.length,
                    s = sr(o, mr, gr).visitAfter(n);
                for (a = e, t = 0; t < u; ++t) i = o[t], s.visit(r)
            }

            function t() {
                if (o) {
                    var e, t, n = o.length;
                    for (u = new Array(n), e = 0; e < n; ++e) t = o[e], u[t.index] = +s(t, e, o)
                }
            }

            function n(e) {
                var t, n, r, o, i, a = 0,
                    s = 0;
                if (e.length) {
                    for (r = o = i = 0; i < 4; ++i)(t = e[i]) && (n = Math.abs(t.value)) && (a += t.value, s += n, r += n * t.x, o += n * t.y);
                    e.x = r / s, e.y = o / s
                } else {
                    t = e, t.x = t.data.x, t.y = t.data.y;
                    do {
                        a += u[t.data.index]
                    } while (t = t.next)
                }
                e.value = a
            }

            function r(e, t, n, r) {
                if (!e.value) return !0;
                var o = e.x - i.x,
                    s = e.y - i.y,
                    d = r - t,
                    h = o * o + s * s;
                if (d * d / f < h) return h < l && (0 === o && (o = Mm(), h += o * o), 0 === s && (s = Mm(), h += s * s), h < c && (h = Math.sqrt(c * h)), i.vx += o * e.value * a / h, i.vy += s * e.value * a / h), !0;
                if (!(e.length || h >= l)) {
                    (e.data !== i || e.next) && (0 === o && (o = Mm(), h += o * o), 0 === s && (s = Mm(), h += s * s), h < c && (h = Math.sqrt(c * h)));
                    do {
                        e.data !== i && (d = u[e.data.index] * a / h, i.vx += o * d, i.vy += s * d)
                    } while (e = e.next)
                }
            }
            var o, i, a, u, s = Tm(-30),
                c = 1,
                l = 1 / 0,
                f = .81;
            return e.initialize = function(e) {
                o = e, t()
            }, e.strength = function(n) {
                return arguments.length ? (s = "function" == typeof n ? n : Tm(+n), t(), e) : s
            }, e.distanceMin = function(t) {
                return arguments.length ? (c = t * t, e) : Math.sqrt(c)
            }, e.distanceMax = function(t) {
                return arguments.length ? (l = t * t, e) : Math.sqrt(l)
            }, e.theta = function(t) {
                return arguments.length ? (f = t * t, e) : Math.sqrt(f)
            }, e
        },
        Km = function(e, t, n) {
            function r(e) {
                for (var r = 0, o = i.length; r < o; ++r) {
                    var s = i[r],
                        c = s.x - t || 1e-6,
                        l = s.y - n || 1e-6,
                        f = Math.sqrt(c * c + l * l),
                        d = (u[r] - f) * a[r] * e / f;
                    s.vx += c * d, s.vy += l * d
                }
            }

            function o() {
                if (i) {
                    var t, n = i.length;
                    for (a = new Array(n), u = new Array(n), t = 0; t < n; ++t) u[t] = +e(i[t], t, i), a[t] = isNaN(u[t]) ? 0 : +s(i[t], t, i)
                }
            }
            var i, a, u, s = Tm(.1);
            return "function" != typeof e && (e = Tm(+e)), null == t && (t = 0), null == n && (n = 0), r.initialize = function(e) {
                i = e, o()
            }, r.strength = function(e) {
                return arguments.length ? (s = "function" == typeof e ? e : Tm(+e), o(), r) : s
            }, r.radius = function(t) {
                return arguments.length ? (e = "function" == typeof t ? t : Tm(+t), o(), r) : e
            }, r.x = function(e) {
                return arguments.length ? (t = +e, r) : t
            }, r.y = function(e) {
                return arguments.length ? (n = +e, r) : n
            }, r
        },
        $m = function(e) {
            function t(e) {
                for (var t, n = 0, a = r.length; n < a; ++n) t = r[n], t.vx += (i[n] - t.x) * o[n] * e
            }

            function n() {
                if (r) {
                    var t, n = r.length;
                    for (o = new Array(n), i = new Array(n), t = 0; t < n; ++t) o[t] = isNaN(i[t] = +e(r[t], t, r)) ? 0 : +a(r[t], t, r)
                }
            }
            var r, o, i, a = Tm(.1);
            return "function" != typeof e && (e = Tm(null == e ? 0 : +e)), t.initialize = function(e) {
                r = e, n()
            }, t.strength = function(e) {
                return arguments.length ? (a = "function" == typeof e ? e : Tm(+e), n(), t) : a
            }, t.x = function(r) {
                return arguments.length ? (e = "function" == typeof r ? r : Tm(+r), n(), t) : e
            }, t
        },
        Qm = function(e) {
            function t(e) {
                for (var t, n = 0, a = r.length; n < a; ++n) t = r[n], t.vy += (i[n] - t.y) * o[n] * e
            }

            function n() {
                if (r) {
                    var t, n = r.length;
                    for (o = new Array(n), i = new Array(n), t = 0; t < n; ++t) o[t] = isNaN(i[t] = +e(r[t], t, r)) ? 0 : +a(r[t], t, r)
                }
            }
            var r, o, i, a = Tm(.1);
            return "function" != typeof e && (e = Tm(null == e ? 0 : +e)), t.initialize = function(e) {
                r = e, n()
            }, t.strength = function(e) {
                return arguments.length ? (a = "function" == typeof e ? e : Tm(+e), n(), t) : a
            }, t.y = function(r) {
                return arguments.length ? (e = "function" == typeof r ? r : Tm(+r), n(), t) : e
            }, t
        },
        Jm = function(e, t) {
            if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
            var n, r = e.slice(0, n);
            return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)]
        },
        Zm = function(e) {
            return e = Jm(Math.abs(e)), e ? e[1] : NaN
        },
        eg = function(e, t) {
            return function(n, r) {
                for (var o = n.length, i = [], a = 0, u = e[0], s = 0; o > 0 && u > 0 && (s + u + 1 > r && (u = Math.max(1, r - s)), i.push(n.substring(o -= u, o + u)), !((s += u + 1) > r));) u = e[a = (a + 1) % e.length];
                return i.reverse().join(t)
            }
        },
        tg = function(e) {
            return function(t) {
                return t.replace(/[0-9]/g, function(t) {
                    return e[+t]
                })
            }
        },
        ng = function(e, t) {
            e = e.toPrecision(t);
            e: for (var n, r = e.length, o = 1, i = -1; o < r; ++o) switch (e[o]) {
                case ".":
                    i = n = o;
                    break;
                case "0":
                    0 === i && (i = o), n = o;
                    break;
                case "e":
                    break e;
                default:
                    i > 0 && (i = 0)
            }
            return i > 0 ? e.slice(0, i) + e.slice(n + 1) : e
        },
        rg = function(e, t) {
            var n = Jm(e, t);
            if (!n) return e + "";
            var r = n[0],
                o = n[1],
                i = o - (Bm = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
                a = r.length;
            return i === a ? r : i > a ? r + new Array(i - a + 1).join("0") : i > 0 ? r.slice(0, i) + "." + r.slice(i) : "0." + new Array(1 - i).join("0") + Jm(e, Math.max(0, t + i - 1))[0]
        },
        og = function(e, t) {
            var n = Jm(e, t);
            if (!n) return e + "";
            var r = n[0],
                o = n[1];
            return o < 0 ? "0." + new Array(-o).join("0") + r : r.length > o + 1 ? r.slice(0, o + 1) + "." + r.slice(o + 1) : r + new Array(o - r.length + 2).join("0")
        },
        ig = {
            "": ng,
            "%": function(e, t) {
                return (100 * e).toFixed(t)
            },
            b: function(e) {
                return Math.round(e).toString(2)
            },
            c: function(e) {
                return e + ""
            },
            d: function(e) {
                return Math.round(e).toString(10)
            },
            e: function(e, t) {
                return e.toExponential(t)
            },
            f: function(e, t) {
                return e.toFixed(t)
            },
            g: function(e, t) {
                return e.toPrecision(t)
            },
            o: function(e) {
                return Math.round(e).toString(8)
            },
            p: function(e, t) {
                return og(100 * e, t)
            },
            r: og,
            s: rg,
            X: function(e) {
                return Math.round(e).toString(16).toUpperCase()
            },
            x: function(e) {
                return Math.round(e).toString(16)
            }
        },
        ag = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
    vr.prototype = yr.prototype, yr.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type
    };
    var ug, sg, cg, lg = function(e) {
            return e
        },
        fg = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"],
        dg = function(e) {
            function t(e) {
                function t(e) {
                    var t, o, u, l = g,
                        b = v;
                    if ("c" === m) b = y(e) + b, e = "";
                    else {
                        e = +e;
                        var x = e < 0;
                        if (e = y(Math.abs(e), p), x && 0 == +e && (x = !1), l = (x ? "(" === c ? c : "-" : "-" === c || "(" === c ? "" : c) + l, b = b + ("s" === m ? fg[8 + Bm / 3] : "") + (x && "(" === c ? ")" : ""), _)
                            for (t = -1, o = e.length; ++t < o;)
                                if (48 > (u = e.charCodeAt(t)) || u > 57) {
                                    b = (46 === u ? i + e.slice(t + 1) : e.slice(t)) + b, e = e.slice(0, t);
                                    break
                                }
                    }
                    h && !f && (e = r(e, 1 / 0));
                    var w = l.length + e.length + b.length,
                        k = w < d ? new Array(d - w + 1).join(n) : "";
                    switch (h && f && (e = r(k + e, k.length ? d - b.length : 1 / 0), k = ""), s) {
                        case "<":
                            e = l + e + b + k;
                            break;
                        case "=":
                            e = l + k + e + b;
                            break;
                        case "^":
                            e = k.slice(0, w = k.length >> 1) + l + e + b + k.slice(w);
                            break;
                        default:
                            e = k + l + e + b
                    }
                    return a(e)
                }
                e = vr(e);
                var n = e.fill,
                    s = e.align,
                    c = e.sign,
                    l = e.symbol,
                    f = e.zero,
                    d = e.width,
                    h = e.comma,
                    p = e.precision,
                    m = e.type,
                    g = "$" === l ? o[0] : "#" === l && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "",
                    v = "$" === l ? o[1] : /[%p]/.test(m) ? u : "",
                    y = ig[m],
                    _ = !m || /[defgprs%]/.test(m);
                return p = null == p ? m ? 6 : 12 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, p)) : Math.max(0, Math.min(20, p)), t.toString = function() {
                    return e + ""
                }, t
            }

            function n(e, n) {
                var r = t((e = vr(e), e.type = "f", e)),
                    o = 3 * Math.max(-8, Math.min(8, Math.floor(Zm(n) / 3))),
                    i = Math.pow(10, -o),
                    a = fg[8 + o / 3];
                return function(e) {
                    return r(i * e) + a
                }
            }
            var r = e.grouping && e.thousands ? eg(e.grouping, e.thousands) : lg,
                o = e.currency,
                i = e.decimal,
                a = e.numerals ? tg(e.numerals) : lg,
                u = e.percent || "%";
            return {
                format: t,
                formatPrefix: n
            }
        };
    _r({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""]
    });
    var hg = function(e) {
            return Math.max(0, -Zm(Math.abs(e)))
        },
        pg = function(e, t) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Zm(t) / 3))) - Zm(Math.abs(e)))
        },
        mg = function(e, t) {
            return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Zm(t) - Zm(e)) + 1
        },
        gg = function() {
            return new br
        };
    br.prototype = {
        constructor: br,
        reset: function() {
            this.s = this.t = 0
        },
        add: function(e) {
            xr(Xg, e, this.t), xr(this, Xg.s, this.s), this.s ? this.t += Xg.t : this.s = Xg.t
        },
        valueOf: function() {
            return this.s
        }
    };
    var vg, yg, _g, bg, xg, wg, kg, Eg, Cg, Tg, Mg, Sg, Ng, Pg, Ag, Ig, Og, Rg, Dg, Lg, Fg, jg, Ug, zg, Hg, Bg, qg, Wg, Vg, Gg, Yg, Xg = new br,
        Kg = 1e-6,
        $g = Math.PI,
        Qg = $g / 2,
        Jg = $g / 4,
        Zg = 2 * $g,
        ev = 180 / $g,
        tv = $g / 180,
        nv = Math.abs,
        rv = Math.atan,
        ov = Math.atan2,
        iv = Math.cos,
        av = Math.ceil,
        uv = Math.exp,
        sv = (Math.floor, Math.log),
        cv = Math.pow,
        lv = Math.sin,
        fv = Math.sign || function(e) {
            return e > 0 ? 1 : e < 0 ? -1 : 0
        },
        dv = Math.sqrt,
        hv = Math.tan,
        pv = {
            Feature: function(e, t) {
                Tr(e.geometry, t)
            },
            FeatureCollection: function(e, t) {
                for (var n = e.features, r = -1, o = n.length; ++r < o;) Tr(n[r].geometry, t)
            }
        },
        mv = {
            Sphere: function(e, t) {
                t.sphere()
            },
            Point: function(e, t) {
                e = e.coordinates, t.point(e[0], e[1], e[2])
            },
            MultiPoint: function(e, t) {
                for (var n = e.coordinates, r = -1, o = n.length; ++r < o;) e = n[r], t.point(e[0], e[1], e[2])
            },
            LineString: function(e, t) {
                Mr(e.coordinates, t, 0)
            },
            MultiLineString: function(e, t) {
                for (var n = e.coordinates, r = -1, o = n.length; ++r < o;) Mr(n[r], t, 0)
            },
            Polygon: function(e, t) {
                Sr(e.coordinates, t)
            },
            MultiPolygon: function(e, t) {
                for (var n = e.coordinates, r = -1, o = n.length; ++r < o;) Sr(n[r], t)
            },
            GeometryCollection: function(e, t) {
                for (var n = e.geometries, r = -1, o = n.length; ++r < o;) Tr(n[r], t)
            }
        },
        gv = function(e, t) {
            e && pv.hasOwnProperty(e.type) ? pv[e.type](e, t) : Tr(e, t)
        },
        vv = gg(),
        yv = gg(),
        _v = {
            point: Cr,
            lineStart: Cr,
            lineEnd: Cr,
            polygonStart: function() {
                vv.reset(), _v.lineStart = Nr, _v.lineEnd = Pr
            },
            polygonEnd: function() {
                var e = +vv;
                yv.add(e < 0 ? Zg + e : e), this.lineStart = this.lineEnd = this.point = Cr
            },
            sphere: function() {
                yv.add(Zg)
            }
        },
        bv = function(e) {
            return yv.reset(), gv(e, _v), 2 * yv
        },
        xv = gg(),
        wv = {
            point: zr,
            lineStart: Br,
            lineEnd: qr,
            polygonStart: function() {
                wv.point = Wr, wv.lineStart = Vr, wv.lineEnd = Gr, xv.reset(), _v.polygonStart()
            },
            polygonEnd: function() {
                _v.polygonEnd(), wv.point = zr, wv.lineStart = Br, wv.lineEnd = qr, vv < 0 ? (wg = -(Eg = 180), kg = -(Cg = 90)) : xv > Kg ? Cg = 90 : xv < -Kg && (kg = -90), Ag[0] = wg, Ag[1] = Eg
            }
        },
        kv = function(e) {
            var t, n, r, o, i, a, u;
            if (Cg = Eg = -(wg = kg = 1 / 0), Pg = [], gv(e, wv), n = Pg.length) {
                for (Pg.sort(Xr), t = 1, r = Pg[0], i = [r]; t < n; ++t) o = Pg[t], Kr(r, o[0]) || Kr(r, o[1]) ? (Yr(r[0], o[1]) > Yr(r[0], r[1]) && (r[1] = o[1]), Yr(o[0], r[1]) > Yr(r[0], r[1]) && (r[0] = o[0])) : i.push(r = o);
                for (a = -1 / 0, n = i.length - 1, t = 0, r = i[n]; t <= n; r = o, ++t) o = i[t], (u = Yr(r[1], o[0])) > a && (a = u, wg = o[0], Eg = r[1])
            }
            return Pg = Ag = null, wg === 1 / 0 || kg === 1 / 0 ? [
                [NaN, NaN],
                [NaN, NaN]
            ] : [
                [wg, kg],
                [Eg, Cg]
            ]
        },
        Ev = {
            sphere: Cr,
            point: $r,
            lineStart: Jr,
            lineEnd: to,
            polygonStart: function() {
                Ev.lineStart = no, Ev.lineEnd = ro
            },
            polygonEnd: function() {
                Ev.lineStart = Jr, Ev.lineEnd = to
            }
        },
        Cv = function(e) {
            Ig = Og = Rg = Dg = Lg = Fg = jg = Ug = zg = Hg = Bg = 0, gv(e, Ev);
            var t = zg,
                n = Hg,
                r = Bg,
                o = t * t + n * n + r * r;
            return o < 1e-12 && (t = Fg, n = jg, r = Ug, Og < Kg && (t = Rg, n = Dg, r = Lg), (o = t * t + n * n + r * r) < 1e-12) ? [NaN, NaN] : [ov(n, t) * ev, kr(r / dv(o)) * ev]
        },
        Tv = function(e) {
            return function() {
                return e
            }
        },
        Mv = function(e, t) {
            function n(n, r) {
                return n = e(n, r), t(n[0], n[1])
            }
            return e.invert && t.invert && (n.invert = function(n, r) {
                return (n = t.invert(n, r)) && e.invert(n[0], n[1])
            }), n
        };
    ao.invert = ao;
    var Sv, Nv, Pv, Av, Iv, Ov, Rv, Dv, Lv, Fv, jv, Uv = function(e) {
            function t(t) {
                return t = e(t[0] * tv, t[1] * tv), t[0] *= ev, t[1] *= ev, t
            }
            return e = uo(e[0] * tv, e[1] * tv, e.length > 2 ? e[2] * tv : 0), t.invert = function(t) {
                return t = e.invert(t[0] * tv, t[1] * tv), t[0] *= ev, t[1] *= ev, t
            }, t
        },
        zv = function() {
            function e(e, t) {
                n.push(e = r(e, t)), e[0] *= ev, e[1] *= ev
            }

            function t() {
                var e = o.apply(this, arguments),
                    t = i.apply(this, arguments) * tv,
                    s = a.apply(this, arguments) * tv;
                return n = [], r = uo(-e[0] * tv, -e[1] * tv, 0).invert, fo(u, t, s, 1), e = {
                    type: "Polygon",
                    coordinates: [n]
                }, n = r = null, e
            }
            var n, r, o = Tv([0, 0]),
                i = Tv(90),
                a = Tv(6),
                u = {
                    point: e
                };
            return t.center = function(e) {
                return arguments.length ? (o = "function" == typeof e ? e : Tv([+e[0], +e[1]]), t) : o
            }, t.radius = function(e) {
                return arguments.length ? (i = "function" == typeof e ? e : Tv(+e), t) : i
            }, t.precision = function(e) {
                return arguments.length ? (a = "function" == typeof e ? e : Tv(+e), t) : a
            }, t
        },
        Hv = function() {
            var e, t = [];
            return {
                point: function(t, n) {
                    e.push([t, n])
                },
                lineStart: function() {
                    t.push(e = [])
                },
                lineEnd: Cr,
                rejoin: function() {
                    t.length > 1 && t.push(t.pop().concat(t.shift()))
                },
                result: function() {
                    var n = t;
                    return t = [], e = null, n
                }
            }
        },
        Bv = function(e, t) {
            return nv(e[0] - t[0]) < Kg && nv(e[1] - t[1]) < Kg
        },
        qv = function(e, t, n, r, o) {
            var i, a, u = [],
                s = [];
            if (e.forEach(function(e) {
                    if (!((t = e.length - 1) <= 0)) {
                        var t, n, r = e[0],
                            a = e[t];
                        if (Bv(r, a)) {
                            for (o.lineStart(), i = 0; i < t; ++i) o.point((r = e[i])[0], r[1]);
                            return void o.lineEnd()
                        }
                        u.push(n = new po(r, e, null, !0)), s.push(n.o = new po(r, null, n, !1)), u.push(n = new po(a, e, null, !1)), s.push(n.o = new po(a, null, n, !0))
                    }
                }), u.length) {
                for (s.sort(t), mo(u), mo(s), i = 0, a = s.length; i < a; ++i) s[i].e = n = !n;
                for (var c, l, f = u[0];;) {
                    for (var d = f, h = !0; d.v;)
                        if ((d = d.n) === f) return;
                    c = d.z, o.lineStart();
                    do {
                        if (d.v = d.o.v = !0, d.e) {
                            if (h)
                                for (i = 0, a = c.length; i < a; ++i) o.point((l = c[i])[0], l[1]);
                            else r(d.x, d.n.x, 1, o);
                            d = d.n
                        } else {
                            if (h)
                                for (c = d.p.z, i = c.length - 1; i >= 0; --i) o.point((l = c[i])[0], l[1]);
                            else r(d.x, d.p.x, -1, o);
                            d = d.p
                        }
                        d = d.o, c = d.z, h = !h
                    } while (!d.v);
                    o.lineEnd()
                }
            }
        },
        Wv = gg(),
        Vv = function(e, t) {
            var n = t[0],
                r = t[1],
                o = [lv(n), -iv(n), 0],
                i = 0,
                a = 0;
            Wv.reset();
            for (var u = 0, s = e.length; u < s; ++u)
                if (l = (c = e[u]).length)
                    for (var c, l, f = c[l - 1], d = f[0], h = f[1] / 2 + Jg, p = lv(h), m = iv(h), g = 0; g < l; ++g, d = y, p = b, m = x, f = v) {
                        var v = c[g],
                            y = v[0],
                            _ = v[1] / 2 + Jg,
                            b = lv(_),
                            x = iv(_),
                            w = y - d,
                            k = w >= 0 ? 1 : -1,
                            E = k * w,
                            C = E > $g,
                            T = p * b;
                        if (Wv.add(ov(T * k * lv(E), m * x + T * iv(E))), i += C ? w + k * Zg : w, C ^ d >= n ^ y >= n) {
                            var M = Lr(Rr(f), Rr(v));
                            Ur(M);
                            var S = Lr(o, M);
                            Ur(S);
                            var N = (C ^ w >= 0 ? -1 : 1) * kr(S[2]);
                            (r > N || r === N && (M[0] || M[1])) && (a += C ^ w >= 0 ? 1 : -1)
                        }
                    }
                return (i < -Kg || i < Kg && Wv < -Kg) ^ 1 & a
        },
        Gv = function(e, t, n, r) {
            return function(o) {
                function i(t, n) {
                    e(t, n) && o.point(t, n)
                }

                function a(e, t) {
                    m.point(e, t)
                }

                function u() {
                    _.point = a, m.lineStart()
                }

                function s() {
                    _.point = i, m.lineEnd()
                }

                function c(e, t) {
                    p.push([e, t]), v.point(e, t)
                }

                function l() {
                    v.lineStart(), p = []
                }

                function f() {
                    c(p[0][0], p[0][1]), v.lineEnd();
                    var e, t, n, r, i = v.clean(),
                        a = g.result(),
                        u = a.length;
                    if (p.pop(), d.push(p), p = null, u)
                        if (1 & i) {
                            if (n = a[0], (t = n.length - 1) > 0) {
                                for (y || (o.polygonStart(), y = !0), o.lineStart(), e = 0; e < t; ++e) o.point((r = n[e])[0], r[1]);
                                o.lineEnd()
                            }
                        } else u > 1 && 2 & i && a.push(a.pop().concat(a.shift())), h.push(a.filter(go))
                }
                var d, h, p, m = t(o),
                    g = Hv(),
                    v = t(g),
                    y = !1,
                    _ = {
                        point: i,
                        lineStart: u,
                        lineEnd: s,
                        polygonStart: function() {
                            _.point = c, _.lineStart = l, _.lineEnd = f, h = [], d = []
                        },
                        polygonEnd: function() {
                            _.point = i, _.lineStart = u, _.lineEnd = s, h = Il(h);
                            var e = Vv(d, r);
                            h.length ? (y || (o.polygonStart(), y = !0), qv(h, vo, e, n, o)) : e && (y || (o.polygonStart(), y = !0), o.lineStart(), n(null, null, 1, o), o.lineEnd()), y && (o.polygonEnd(), y = !1), h = d = null
                        },
                        sphere: function() {
                            o.polygonStart(), o.lineStart(), n(null, null, 1, o), o.lineEnd(), o.polygonEnd()
                        }
                    };
                return _
            }
        },
        Yv = Gv(function() {
            return !0
        }, yo, bo, [-$g, -Qg]),
        Xv = function(e) {
            function t(t, n, r, o) {
                fo(o, e, u, r, t, n)
            }

            function n(e, t) {
                return iv(e) * iv(t) > a
            }

            function r(e) {
                var t, r, a, u, l;
                return {
                    lineStart: function() {
                        u = a = !1, l = 1
                    },
                    point: function(f, d) {
                        var h, p = [f, d],
                            m = n(f, d),
                            g = s ? m ? 0 : i(f, d) : m ? i(f + (f < 0 ? $g : -$g), d) : 0;
                        if (!t && (u = a = m) && e.lineStart(), m !== a && (!(h = o(t, p)) || Bv(t, h) || Bv(p, h)) && (p[0] += Kg, p[1] += Kg, m = n(p[0], p[1])), m !== a) l = 0, m ? (e.lineStart(), h = o(p, t), e.point(h[0], h[1])) : (h = o(t, p), e.point(h[0], h[1]), e.lineEnd()), t = h;
                        else if (c && t && s ^ m) {
                            var v;
                            g & r || !(v = o(p, t, !0)) || (l = 0, s ? (e.lineStart(), e.point(v[0][0], v[0][1]), e.point(v[1][0], v[1][1]), e.lineEnd()) : (e.point(v[1][0], v[1][1]), e.lineEnd(), e.lineStart(), e.point(v[0][0], v[0][1])))
                        }!m || t && Bv(t, p) || e.point(p[0], p[1]), t = p, a = m, r = g
                    },
                    lineEnd: function() {
                        a && e.lineEnd(), t = null
                    },
                    clean: function() {
                        return l | (u && a) << 1
                    }
                }
            }

            function o(e, t, n) {
                var r = Rr(e),
                    o = Rr(t),
                    i = [1, 0, 0],
                    u = Lr(r, o),
                    s = Dr(u, u),
                    c = u[0],
                    l = s - c * c;
                if (!l) return !n && e;
                var f = a * s / l,
                    d = -a * c / l,
                    h = Lr(i, u),
                    p = jr(i, f);
                Fr(p, jr(u, d));
                var m = h,
                    g = Dr(p, m),
                    v = Dr(m, m),
                    y = g * g - v * (Dr(p, p) - 1);
                if (!(y < 0)) {
                    var _ = dv(y),
                        b = jr(m, (-g - _) / v);
                    if (Fr(b, p), b = Or(b), !n) return b;
                    var x, w = e[0],
                        k = t[0],
                        E = e[1],
                        C = t[1];
                    k < w && (x = w, w = k, k = x);
                    var T = k - w,
                        M = nv(T - $g) < Kg,
                        S = M || T < Kg;
                    if (!M && C < E && (x = E, E = C, C = x), S ? M ? E + C > 0 ^ b[1] < (nv(b[0] - w) < Kg ? E : C) : E <= b[1] && b[1] <= C : T > $g ^ (w <= b[0] && b[0] <= k)) {
                        var N = jr(m, (-g + _) / v);
                        return Fr(N, p), [b, Or(N)]
                    }
                }
            }

            function i(t, n) {
                var r = s ? e : $g - e,
                    o = 0;
                return t < -r ? o |= 1 : t > r && (o |= 2), n < -r ? o |= 4 : n > r && (o |= 8), o
            }
            var a = iv(e),
                u = 6 * tv,
                s = a > 0,
                c = nv(a) > Kg;
            return Gv(n, r, t, s ? [0, -e] : [-$g, e - $g])
        },
        Kv = function(e, t, n, r, o, i) {
            var a, u = e[0],
                s = e[1],
                c = t[0],
                l = t[1],
                f = 0,
                d = 1,
                h = c - u,
                p = l - s;
            if (a = n - u, h || !(a > 0)) {
                if (a /= h, h < 0) {
                    if (a < f) return;
                    a < d && (d = a)
                } else if (h > 0) {
                    if (a > d) return;
                    a > f && (f = a)
                }
                if (a = o - u, h || !(a < 0)) {
                    if (a /= h, h < 0) {
                        if (a > d) return;
                        a > f && (f = a)
                    } else if (h > 0) {
                        if (a < f) return;
                        a < d && (d = a)
                    }
                    if (a = r - s, p || !(a > 0)) {
                        if (a /= p, p < 0) {
                            if (a < f) return;
                            a < d && (d = a)
                        } else if (p > 0) {
                            if (a > d) return;
                            a > f && (f = a)
                        }
                        if (a = i - s, p || !(a < 0)) {
                            if (a /= p, p < 0) {
                                if (a > d) return;
                                a > f && (f = a)
                            } else if (p > 0) {
                                if (a < f) return;
                                a < d && (d = a)
                            }
                            return f > 0 && (e[0] = u + f * h, e[1] = s + f * p), d < 1 && (t[0] = u + d * h, t[1] = s + d * p), !0
                        }
                    }
                }
            }
        },
        $v = 1e9,
        Qv = -$v,
        Jv = function() {
            var e, t, n, r = 0,
                o = 0,
                i = 960,
                a = 500;
            return n = {
                stream: function(n) {
                    return e && t === n ? e : e = xo(r, o, i, a)(t = n)
                },
                extent: function(u) {
                    return arguments.length ? (r = +u[0][0], o = +u[0][1], i = +u[1][0], a = +u[1][1], e = t = null, n) : [
                        [r, o],
                        [i, a]
                    ]
                }
            }
        },
        Zv = gg(),
        ey = {
            sphere: Cr,
            point: Cr,
            lineStart: wo,
            lineEnd: Cr,
            polygonStart: Cr,
            polygonEnd: Cr
        },
        ty = function(e) {
            return Zv.reset(), gv(e, ey), +Zv
        },
        ny = [null, null],
        ry = {
            type: "LineString",
            coordinates: ny
        },
        oy = function(e, t) {
            return ny[0] = e, ny[1] = t, ty(ry)
        },
        iy = {
            Feature: function(e, t) {
                return To(e.geometry, t)
            },
            FeatureCollection: function(e, t) {
                for (var n = e.features, r = -1, o = n.length; ++r < o;)
                    if (To(n[r].geometry, t)) return !0;
                return !1
            }
        },
        ay = {
            Sphere: function() {
                return !0
            },
            Point: function(e, t) {
                return Mo(e.coordinates, t)
            },
            MultiPoint: function(e, t) {
                for (var n = e.coordinates, r = -1, o = n.length; ++r < o;)
                    if (Mo(n[r], t)) return !0;
                return !1
            },
            LineString: function(e, t) {
                return So(e.coordinates, t)
            },
            MultiLineString: function(e, t) {
                for (var n = e.coordinates, r = -1, o = n.length; ++r < o;)
                    if (So(n[r], t)) return !0;
                return !1
            },
            Polygon: function(e, t) {
                return No(e.coordinates, t)
            },
            MultiPolygon: function(e, t) {
                for (var n = e.coordinates, r = -1, o = n.length; ++r < o;)
                    if (No(n[r], t)) return !0;
                return !1
            },
            GeometryCollection: function(e, t) {
                for (var n = e.geometries, r = -1, o = n.length; ++r < o;)
                    if (To(n[r], t)) return !0;
                return !1
            }
        },
        uy = function(e, t) {
            return (e && iy.hasOwnProperty(e.type) ? iy[e.type] : To)(e, t)
        },
        sy = function(e, t) {
            var n = e[0] * tv,
                r = e[1] * tv,
                o = t[0] * tv,
                i = t[1] * tv,
                a = iv(r),
                u = lv(r),
                s = iv(i),
                c = lv(i),
                l = a * iv(n),
                f = a * lv(n),
                d = s * iv(o),
                h = s * lv(o),
                p = 2 * kr(dv(Er(i - r) + a * s * Er(o - n))),
                m = lv(p),
                g = p ? function(e) {
                    var t = lv(e *= p) / m,
                        n = lv(p - e) / m,
                        r = n * l + t * d,
                        o = n * f + t * h,
                        i = n * u + t * c;
                    return [ov(o, r) * ev, ov(i, dv(r * r + o * o)) * ev]
                } : function() {
                    return [n * ev, r * ev]
                };
            return g.distance = p, g
        },
        cy = function(e) {
            return e
        },
        ly = gg(),
        fy = gg(),
        dy = {
            point: Cr,
            lineStart: Cr,
            lineEnd: Cr,
            polygonStart: function() {
                dy.lineStart = Lo, dy.lineEnd = Uo
            },
            polygonEnd: function() {
                dy.lineStart = dy.lineEnd = dy.point = Cr, ly.add(nv(fy)), fy.reset()
            },
            result: function() {
                var e = ly / 2;
                return ly.reset(), e
            }
        },
        hy = dy,
        py = 1 / 0,
        my = py,
        gy = -py,
        vy = gy,
        yy = {
            point: zo,
            lineStart: Cr,
            lineEnd: Cr,
            polygonStart: Cr,
            polygonEnd: Cr,
            result: function() {
                var e = [
                    [py, my],
                    [gy, vy]
                ];
                return gy = vy = -(my = py = 1 / 0), e
            }
        },
        _y = yy,
        by = 0,
        xy = 0,
        wy = 0,
        ky = 0,
        Ey = 0,
        Cy = 0,
        Ty = 0,
        My = 0,
        Sy = 0,
        Ny = {
            point: Ho,
            lineStart: Bo,
            lineEnd: Vo,
            polygonStart: function() {
                Ny.lineStart = Go, Ny.lineEnd = Yo
            },
            polygonEnd: function() {
                Ny.point = Ho, Ny.lineStart = Bo, Ny.lineEnd = Vo
            },
            result: function() {
                var e = Sy ? [Ty / Sy, My / Sy] : Cy ? [ky / Cy, Ey / Cy] : wy ? [by / wy, xy / wy] : [NaN, NaN];
                return by = xy = wy = ky = Ey = Cy = Ty = My = Sy = 0, e
            }
        },
        Py = Ny;
    $o.prototype = {
        _radius: 4.5,
        pointRadius: function(e) {
            return this._radius = e, this
        },
        polygonStart: function() {
            this._line = 0
        },
        polygonEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            0 === this._line && this._context.closePath(), this._point = NaN
        },
        point: function(e, t) {
            switch (this._point) {
                case 0:
                    this._context.moveTo(e, t), this._point = 1;
                    break;
                case 1:
                    this._context.lineTo(e, t);
                    break;
                default:
                    this._context.moveTo(e + this._radius, t), this._context.arc(e, t, this._radius, 0, Zg)
            }
        },
        result: Cr
    };
    var Ay, Iy, Oy, Ry, Dy, Ly = gg(),
        Fy = {
            point: Cr,
            lineStart: function() {
                Fy.point = Qo
            },
            lineEnd: function() {
                Ay && Jo(Iy, Oy), Fy.point = Cr
            },
            polygonStart: function() {
                Ay = !0
            },
            polygonEnd: function() {
                Ay = null
            },
            result: function() {
                var e = +Ly;
                return Ly.reset(), e
            }
        },
        jy = Fy;
    Zo.prototype = {
        _radius: 4.5,
        _circle: ei(4.5),
        pointRadius: function(e) {
            return (e = +e) !== this._radius && (this._radius = e, this._circle = null), this
        },
        polygonStart: function() {
            this._line = 0
        },
        polygonEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            0 === this._line && this._string.push("Z"), this._point = NaN
        },
        point: function(e, t) {
            switch (this._point) {
                case 0:
                    this._string.push("M", e, ",", t), this._point = 1;
                    break;
                case 1:
                    this._string.push("L", e, ",", t);
                    break;
                default:
                    null == this._circle && (this._circle = ei(this._radius)), this._string.push("M", e, ",", t, this._circle)
            }
        },
        result: function() {
            if (this._string.length) {
                var e = this._string.join("");
                return this._string = [], e
            }
            return null
        }
    };
    var Uy = function(e, t) {
            function n(e) {
                return e && ("function" == typeof i && o.pointRadius(+i.apply(this, arguments)), gv(e, r(o))), o.result()
            }
            var r, o, i = 4.5;
            return n.area = function(e) {
                return gv(e, r(hy)), hy.result()
            }, n.measure = function(e) {
                return gv(e, r(jy)), jy.result()
            }, n.bounds = function(e) {
                return gv(e, r(_y)), _y.result()
            }, n.centroid = function(e) {
                return gv(e, r(Py)), Py.result()
            }, n.projection = function(t) {
                return arguments.length ? (r = null == t ? (e = null, cy) : (e = t).stream, n) : e
            }, n.context = function(e) {
                return arguments.length ? (o = null == e ? (t = null, new Zo) : new $o(t = e), "function" != typeof i && o.pointRadius(i), n) : t
            }, n.pointRadius = function(e) {
                return arguments.length ? (i = "function" == typeof e ? e : (o.pointRadius(+e), +e), n) : i
            }, n.projection(e).context(t)
        },
        zy = function(e) {
            return {
                stream: ti(e)
            }
        };
    ni.prototype = {
        constructor: ni,
        point: function(e, t) {
            this.stream.point(e, t)
        },
        sphere: function() {
            this.stream.sphere()
        },
        lineStart: function() {
            this.stream.lineStart()
        },
        lineEnd: function() {
            this.stream.lineEnd()
        },
        polygonStart: function() {
            this.stream.polygonStart()
        },
        polygonEnd: function() {
            this.stream.polygonEnd()
        }
    };
    var Hy = 16,
        By = iv(30 * tv),
        qy = function(e, t) {
            return +t ? ai(e, t) : ii(e)
        },
        Wy = ti({
            point: function(e, t) {
                this.stream.point(e * tv, t * tv)
            }
        }),
        Vy = function() {
            return li(di).scale(155.424).center([0, 33.6442])
        },
        Gy = function() {
            return Vy().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7])
        },
        Yy = function() {
            function e(e) {
                var t = e[0],
                    n = e[1];
                return u = null, o.point(t, n), u || (i.point(t, n), u) || (a.point(t, n), u)
            }

            function t() {
                return n = r = null, e
            }
            var n, r, o, i, a, u, s = Gy(),
                c = Vy().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                l = Vy().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
                f = {
                    point: function(e, t) {
                        u = [e, t]
                    }
                };
            return e.invert = function(e) {
                var t = s.scale(),
                    n = s.translate(),
                    r = (e[0] - n[0]) / t,
                    o = (e[1] - n[1]) / t;
                return (o >= .12 && o < .234 && r >= -.425 && r < -.214 ? c : o >= .166 && o < .234 && r >= -.214 && r < -.115 ? l : s).invert(e)
            }, e.stream = function(e) {
                return n && r === e ? n : n = hi([s.stream(r = e), c.stream(e), l.stream(e)])
            }, e.precision = function(e) {
                return arguments.length ? (s.precision(e), c.precision(e), l.precision(e), t()) : s.precision()
            }, e.scale = function(t) {
                return arguments.length ? (s.scale(t), c.scale(.35 * t), l.scale(t), e.translate(s.translate())) : s.scale()
            }, e.translate = function(e) {
                if (!arguments.length) return s.translate();
                var n = s.scale(),
                    r = +e[0],
                    u = +e[1];
                return o = s.translate(e).clipExtent([
                    [r - .455 * n, u - .238 * n],
                    [r + .455 * n, u + .238 * n]
                ]).stream(f), i = c.translate([r - .307 * n, u + .201 * n]).clipExtent([
                    [r - .425 * n + Kg, u + .12 * n + Kg],
                    [r - .214 * n - Kg, u + .234 * n - Kg]
                ]).stream(f), a = l.translate([r - .205 * n, u + .212 * n]).clipExtent([
                    [r - .214 * n + Kg, u + .166 * n + Kg],
                    [r - .115 * n - Kg, u + .234 * n - Kg]
                ]).stream(f), t()
            }, e.fitExtent = function(t, n) {
                return ri(e, t, n)
            }, e.fitSize = function(t, n) {
                return oi(e, t, n)
            }, e.scale(1070)
        },
        Xy = pi(function(e) {
            return dv(2 / (1 + e))
        });
    Xy.invert = mi(function(e) {
        return 2 * kr(e / 2)
    });
    var Ky = function() {
            return si(Xy).scale(124.75).clipAngle(179.999)
        },
        $y = pi(function(e) {
            return (e = wr(e)) && e / lv(e)
        });
    $y.invert = mi(function(e) {
        return e
    });
    var Qy = function() {
        return si($y).scale(79.4188).clipAngle(179.999)
    };
    gi.invert = function(e, t) {
        return [e, 2 * rv(uv(t)) - Qg]
    };
    var Jy = function() {
            return vi(gi).scale(961 / Zg)
        },
        Zy = function() {
            return li(_i).scale(109.5).parallels([30, 30])
        };
    bi.invert = bi;
    var e_ = function() {
            return si(bi).scale(152.63)
        },
        t_ = function() {
            return li(xi).scale(131.154).center([0, 13.9389])
        };
    wi.invert = mi(rv);
    var n_ = function() {
            return si(wi).scale(144.049).clipAngle(60)
        },
        r_ = function() {
            function e() {
                return o = i = null, a
            }
            var t, n, r, o, i, a, u = 1,
                s = 0,
                c = 0,
                l = 1,
                f = 1,
                d = cy,
                h = null,
                p = cy;
            return a = {
                stream: function(e) {
                    return o && i === e ? o : o = d(p(i = e))
                },
                postclip: function(o) {
                    return arguments.length ? (p = o, h = t = n = r = null, e()) : p
                },
                clipExtent: function(o) {
                    return arguments.length ? (p = null == o ? (h = t = n = r = null, cy) : xo(h = +o[0][0], t = +o[0][1], n = +o[1][0], r = +o[1][1]), e()) : null == h ? null : [
                        [h, t],
                        [n, r]
                    ]
                },
                scale: function(t) {
                    return arguments.length ? (d = ki((u = +t) * l, u * f, s, c), e()) : u
                },
                translate: function(t) {
                    return arguments.length ? (d = ki(u * l, u * f, s = +t[0], c = +t[1]), e()) : [s, c]
                },
                reflectX: function(t) {
                    return arguments.length ? (d = ki(u * (l = t ? -1 : 1), u * f, s, c), e()) : l < 0
                },
                reflectY: function(t) {
                    return arguments.length ? (d = ki(u * l, u * (f = t ? -1 : 1), s, c), e()) : f < 0
                },
                fitExtent: function(e, t) {
                    return ri(a, e, t)
                },
                fitSize: function(e, t) {
                    return oi(a, e, t)
                }
            }
        };
    Ei.invert = function(e, t) {
        var n, r = t,
            o = 25;
        do {
            var i = r * r,
                a = i * i;
            r -= n = (r * (1.007226 + i * (.015085 + a * (.028874 * i - .044475 - .005916 * a))) - t) / (1.007226 + i * (.045255 + a * (.259866 * i - .311325 - .005916 * 11 * a)))
        } while (nv(n) > Kg && --o > 0);
        return [e / (.8707 + (i = r * r) * (i * (i * i * i * (.003971 - .001529 * i) - .013791) - .131979)), r]
    };
    var o_ = function() {
        return si(Ei).scale(175.295)
    };
    Ci.invert = mi(kr);
    var i_ = function() {
        return si(Ci).scale(249.5).clipAngle(90 + Kg)
    };
    Ti.invert = mi(function(e) {
        return 2 * rv(e)
    });
    var a_ = function() {
        return si(Ti).scale(250).clipAngle(142)
    };
    Mi.invert = function(e, t) {
        return [-t, 2 * rv(uv(e)) - Qg]
    };
    var u_ = function() {
            var e = vi(Mi),
                t = e.center,
                n = e.rotate;
            return e.center = function(e) {
                return arguments.length ? t([-e[1], e[0]]) : (e = t(), [e[1], -e[0]])
            }, e.rotate = function(e) {
                return arguments.length ? n([e[0], e[1], e.length > 2 ? e[2] + 90 : 90]) : (e = n(), [e[0], e[1], e[2] - 90])
            }, n([0, 0, 90]).scale(159.155)
        },
        s_ = function() {
            function e(e) {
                var i, a = 0;
                e.eachAfter(function(e) {
                    var n = e.children;
                    n ? (e.x = Ni(n), e.y = Ai(n)) : (e.x = i ? a += t(e, i) : 0, e.y = 0, i = e)
                });
                var u = Oi(e),
                    s = Ri(e),
                    c = u.x - t(u, s) / 2,
                    l = s.x + t(s, u) / 2;
                return e.eachAfter(o ? function(t) {
                    t.x = (t.x - e.x) * n, t.y = (e.y - t.y) * r
                } : function(t) {
                    t.x = (t.x - c) / (l - c) * n, t.y = (1 - (e.y ? t.y / e.y : 1)) * r
                })
            }
            var t = Si,
                n = 1,
                r = 1,
                o = !1;
            return e.separation = function(n) {
                return arguments.length ? (t = n, e) : t
            }, e.size = function(t) {
                return arguments.length ? (o = !1, n = +t[0], r = +t[1], e) : o ? null : [n, r]
            }, e.nodeSize = function(t) {
                return arguments.length ? (o = !0, n = +t[0], r = +t[1], e) : o ? [n, r] : null
            }, e
        },
        c_ = function() {
            return this.eachAfter(Di)
        },
        l_ = function(e) {
            var t, n, r, o, i = this,
                a = [i];
            do {
                for (t = a.reverse(), a = []; i = t.pop();)
                    if (e(i), n = i.children)
                        for (r = 0, o = n.length; r < o; ++r) a.push(n[r])
            } while (a.length);
            return this
        },
        f_ = function(e) {
            for (var t, n, r = this, o = [r]; r = o.pop();)
                if (e(r), t = r.children)
                    for (n = t.length - 1; n >= 0; --n) o.push(t[n]);
            return this
        },
        d_ = function(e) {
            for (var t, n, r, o = this, i = [o], a = []; o = i.pop();)
                if (a.push(o), t = o.children)
                    for (n = 0, r = t.length; n < r; ++n) i.push(t[n]);
            for (; o = a.pop();) e(o);
            return this
        },
        h_ = function(e) {
            return this.eachAfter(function(t) {
                for (var n = +e(t.data) || 0, r = t.children, o = r && r.length; --o >= 0;) n += r[o].value;
                t.value = n
            })
        },
        p_ = function(e) {
            return this.eachBefore(function(t) {
                t.children && t.children.sort(e)
            })
        },
        m_ = function(e) {
            for (var t = this, n = Li(t, e), r = [t]; t !== n;) t = t.parent, r.push(t);
            for (var o = r.length; e !== n;) r.splice(o, 0, e), e = e.parent;
            return r
        },
        g_ = function() {
            for (var e = this, t = [e]; e = e.parent;) t.push(e);
            return t
        },
        v_ = function() {
            var e = [];
            return this.each(function(t) {
                e.push(t)
            }), e
        },
        y_ = function() {
            var e = [];
            return this.eachBefore(function(t) {
                t.children || e.push(t)
            }), e
        },
        __ = function() {
            var e = this,
                t = [];
            return e.each(function(n) {
                n !== e && t.push({
                    source: n.parent,
                    target: n
                })
            }), t
        };
    Bi.prototype = Fi.prototype = {
        constructor: Bi,
        count: c_,
        each: l_,
        eachAfter: d_,
        eachBefore: f_,
        sum: h_,
        sort: p_,
        path: m_,
        ancestors: g_,
        descendants: v_,
        leaves: y_,
        links: __,
        copy: ji
    };
    var b_ = Array.prototype.slice,
        x_ = function(e) {
            for (var t, n, r = 0, o = (e = qi(b_.call(e))).length, i = []; r < o;) t = e[r], n && Gi(n, t) ? ++r : (n = Xi(i = Wi(i, t)), r = 0);
            return n
        },
        w_ = function(e) {
            return na(e), e
        },
        k_ = function(e) {
            return function() {
                return e
            }
        },
        E_ = function() {
            function e(e) {
                return e.x = n / 2, e.y = r / 2, t ? e.eachBefore(ua(t)).eachAfter(sa(o, .5)).eachBefore(ca(1)) : e.eachBefore(ua(aa)).eachAfter(sa(ia, 1)).eachAfter(sa(o, e.r / Math.min(n, r))).eachBefore(ca(Math.min(n, r) / (2 * e.r))), e
            }
            var t = null,
                n = 1,
                r = 1,
                o = ia;
            return e.radius = function(n) {
                return arguments.length ? (t = ra(n), e) : t
            }, e.size = function(t) {
                return arguments.length ? (n = +t[0], r = +t[1], e) : [n, r]
            }, e.padding = function(t) {
                return arguments.length ? (o = "function" == typeof t ? t : k_(+t), e) : o
            }, e
        },
        C_ = function(e) {
            e.x0 = Math.round(e.x0), e.y0 = Math.round(e.y0), e.x1 = Math.round(e.x1), e.y1 = Math.round(e.y1)
        },
        T_ = function(e, t, n, r, o) {
            for (var i, a = e.children, u = -1, s = a.length, c = e.value && (r - t) / e.value; ++u < s;) i = a[u], i.y0 = n, i.y1 = o, i.x0 = t, i.x1 = t += i.value * c
        },
        M_ = function() {
            function e(e) {
                var a = e.height + 1;
                return e.x0 = e.y0 = o, e.x1 = n, e.y1 = r / a, e.eachBefore(t(r, a)), i && e.eachBefore(C_), e
            }

            function t(e, t) {
                return function(n) {
                    n.children && T_(n, n.x0, e * (n.depth + 1) / t, n.x1, e * (n.depth + 2) / t);
                    var r = n.x0,
                        i = n.y0,
                        a = n.x1 - o,
                        u = n.y1 - o;
                    a < r && (r = a = (r + a) / 2), u < i && (i = u = (i + u) / 2), n.x0 = r, n.y0 = i, n.x1 = a, n.y1 = u
                }
            }
            var n = 1,
                r = 1,
                o = 0,
                i = !1;
            return e.round = function(t) {
                return arguments.length ? (i = !!t, e) : i
            }, e.size = function(t) {
                return arguments.length ? (n = +t[0], r = +t[1], e) : [n, r]
            }, e.padding = function(t) {
                return arguments.length ? (o = +t, e) : o
            }, e
        },
        S_ = "$",
        N_ = {
            depth: -1
        },
        P_ = {},
        A_ = function() {
            function e(e) {
                var r, o, i, a, u, s, c, l = e.length,
                    f = new Array(l),
                    d = {};
                for (o = 0; o < l; ++o) r = e[o], u = f[o] = new Bi(r), null != (s = t(r, o, e)) && (s += "") && (c = S_ + (u.id = s), d[c] = c in d ? P_ : u);
                for (o = 0; o < l; ++o)
                    if (u = f[o], null != (s = n(e[o], o, e)) && (s += "")) {
                        if (!(a = d[S_ + s])) throw new Error("missing: " + s);
                        if (a === P_) throw new Error("ambiguous: " + s);
                        a.children ? a.children.push(u) : a.children = [u], u.parent = a
                    } else {
                        if (i) throw new Error("multiple roots");
                        i = u
                    }
                if (!i) throw new Error("no root");
                if (i.parent = N_, i.eachBefore(function(e) {
                        e.depth = e.parent.depth + 1, --l
                    }).eachBefore(Hi), i.parent = null, l > 0) throw new Error("cycle");
                return i
            }
            var t = la,
                n = fa;
            return e.id = function(n) {
                return arguments.length ? (t = oa(n), e) : t
            }, e.parentId = function(t) {
                return arguments.length ? (n = oa(t), e) : n
            }, e
        };
    ya.prototype = Object.create(Bi.prototype);
    var I_ = function() {
            function e(e) {
                var r = _a(e);
                if (r.eachAfter(t), r.parent.m = -r.z, r.eachBefore(n), s) e.eachBefore(o);
                else {
                    var c = e,
                        l = e,
                        f = e;
                    e.eachBefore(function(e) {
                        e.x < c.x && (c = e), e.x > l.x && (l = e), e.depth > f.depth && (f = e)
                    });
                    var d = c === l ? 1 : i(c, l) / 2,
                        h = d - c.x,
                        p = a / (l.x + d + h),
                        m = u / (f.depth || 1);
                    e.eachBefore(function(e) {
                        e.x = (e.x + h) * p, e.y = e.depth * m
                    })
                }
                return e
            }

            function t(e) {
                var t = e.children,
                    n = e.parent.children,
                    o = e.i ? n[e.i - 1] : null;
                if (t) {
                    ga(e);
                    var a = (t[0].z + t[t.length - 1].z) / 2;
                    o ? (e.z = o.z + i(e._, o._), e.m = e.z - a) : e.z = a
                } else o && (e.z = o.z + i(e._, o._));
                e.parent.A = r(e, o, e.parent.A || n[0])
            }

            function n(e) {
                e._.x = e.z + e.parent.m, e.m += e.parent.m
            }

            function r(e, t, n) {
                if (t) {
                    for (var r, o = e, a = e, u = t, s = o.parent.children[0], c = o.m, l = a.m, f = u.m, d = s.m; u = pa(u), o = ha(o), u && o;) s = ha(s), a = pa(a), a.a = e, r = u.z + f - o.z - c + i(u._, o._), r > 0 && (ma(va(u, e, n), e, r), c += r, l += r), f += u.m, c += o.m, d += s.m, l += a.m;
                    u && !pa(a) && (a.t = u, a.m += f - l), o && !ha(s) && (s.t = o, s.m += c - d, n = e)
                }
                return n
            }

            function o(e) {
                e.x *= a, e.y = e.depth * u
            }
            var i = da,
                a = 1,
                u = 1,
                s = null;
            return e.separation = function(t) {
                return arguments.length ? (i = t, e) : i
            }, e.size = function(t) {
                return arguments.length ? (s = !1, a = +t[0], u = +t[1], e) : s ? null : [a, u]
            }, e.nodeSize = function(t) {
                return arguments.length ? (s = !0, a = +t[0], u = +t[1], e) : s ? [a, u] : null
            }, e
        },
        O_ = function(e, t, n, r, o) {
            for (var i, a = e.children, u = -1, s = a.length, c = e.value && (o - n) / e.value; ++u < s;) i = a[u], i.x0 = t, i.x1 = r, i.y0 = n, i.y1 = n += i.value * c
        },
        R_ = (1 + Math.sqrt(5)) / 2,
        D_ = function e(t) {
            function n(e, n, r, o, i) {
                ba(t, e, n, r, o, i)
            }
            return n.ratio = function(t) {
                return e((t = +t) > 1 ? t : 1)
            }, n
        }(R_),
        L_ = function() {
            function e(e) {
                return e.x0 = e.y0 = 0, e.x1 = o, e.y1 = i, e.eachBefore(t), a = [0], r && e.eachBefore(C_), e
            }

            function t(e) {
                var t = a[e.depth],
                    r = e.x0 + t,
                    o = e.y0 + t,
                    i = e.x1 - t,
                    d = e.y1 - t;
                i < r && (r = i = (r + i) / 2), d < o && (o = d = (o + d) / 2), e.x0 = r, e.y0 = o, e.x1 = i, e.y1 = d, e.children && (t = a[e.depth + 1] = u(e) / 2, r += f(e) - t, o += s(e) - t, i -= c(e) - t, d -= l(e) - t, i < r && (r = i = (r + i) / 2), d < o && (o = d = (o + d) / 2), n(e, r, o, i, d))
            }
            var n = D_,
                r = !1,
                o = 1,
                i = 1,
                a = [0],
                u = ia,
                s = ia,
                c = ia,
                l = ia,
                f = ia;
            return e.round = function(t) {
                return arguments.length ? (r = !!t, e) : r
            }, e.size = function(t) {
                return arguments.length ? (o = +t[0], i = +t[1], e) : [o, i]
            }, e.tile = function(t) {
                return arguments.length ? (n = oa(t), e) : n
            }, e.padding = function(t) {
                return arguments.length ? e.paddingInner(t).paddingOuter(t) : e.paddingInner()
            }, e.paddingInner = function(t) {
                return arguments.length ? (u = "function" == typeof t ? t : k_(+t), e) : u
            }, e.paddingOuter = function(t) {
                return arguments.length ? e.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : e.paddingTop()
            }, e.paddingTop = function(t) {
                return arguments.length ? (s = "function" == typeof t ? t : k_(+t), e) : s
            }, e.paddingRight = function(t) {
                return arguments.length ? (c = "function" == typeof t ? t : k_(+t), e) : c
            }, e.paddingBottom = function(t) {
                return arguments.length ? (l = "function" == typeof t ? t : k_(+t), e) : l
            }, e.paddingLeft = function(t) {
                return arguments.length ? (f = "function" == typeof t ? t : k_(+t), e) : f
            }, e
        },
        F_ = function(e, t, n, r, o) {
            function i(e, t, n, r, o, a, u) {
                if (e >= t - 1) {
                    var c = s[e];
                    return c.x0 = r, c.y0 = o, c.x1 = a, c.y1 = u, void 0
                }
                for (var f = l[e], d = n / 2 + f, h = e + 1, p = t - 1; h < p;) {
                    var m = h + p >>> 1;
                    l[m] < d ? h = m + 1 : p = m
                }
                d - l[h - 1] < l[h] - d && e + 1 < h && --h;
                var g = l[h] - f,
                    v = n - g;
                if (a - r > u - o) {
                    var y = (r * v + a * g) / n;
                    i(e, h, g, r, o, y, u), i(h, t, v, y, o, a, u)
                } else {
                    var _ = (o * v + u * g) / n;
                    i(e, h, g, r, o, a, _), i(h, t, v, r, _, a, u)
                }
            }
            var a, u, s = e.children,
                c = s.length,
                l = new Array(c + 1);
            for (l[0] = u = a = 0; a < c; ++a) l[a + 1] = u += s[a].value;
            i(0, c, e.value, t, n, r, o)
        },
        j_ = function(e, t, n, r, o) {
            (1 & e.depth ? O_ : T_)(e, t, n, r, o)
        },
        U_ = function e(t) {
            function n(e, n, r, o, i) {
                if ((a = e._squarify) && a.ratio === t)
                    for (var a, u, s, c, l, f = -1, d = a.length, h = e.value; ++f < d;) {
                        for (u = a[f], s = u.children, c = u.value = 0, l = s.length; c < l; ++c) u.value += s[c].value;
                        u.dice ? T_(u, n, r, o, r += (i - r) * u.value / h) : O_(u, n, r, n += (o - n) * u.value / h, i), h -= u.value
                    } else e._squarify = a = ba(t, e, n, r, o, i), a.ratio = t
            }
            return n.ratio = function(t) {
                return e((t = +t) > 1 ? t : 1)
            }, n
        }(R_),
        z_ = function(e) {
            for (var t, n = -1, r = e.length, o = e[r - 1], i = 0; ++n < r;) t = o, o = e[n], i += t[1] * o[0] - t[0] * o[1];
            return i / 2
        },
        H_ = function(e) {
            for (var t, n, r = -1, o = e.length, i = 0, a = 0, u = e[o - 1], s = 0; ++r < o;) t = u, u = e[r], s += n = t[0] * u[1] - u[0] * t[1], i += (t[0] + u[0]) * n, a += (t[1] + u[1]) * n;
            return s *= 3, [i / s, a / s]
        },
        B_ = function(e, t, n) {
            return (t[0] - e[0]) * (n[1] - e[1]) - (t[1] - e[1]) * (n[0] - e[0])
        },
        q_ = function(e) {
            if ((n = e.length) < 3) return null;
            var t, n, r = new Array(n),
                o = new Array(n);
            for (t = 0; t < n; ++t) r[t] = [+e[t][0], +e[t][1], t];
            for (r.sort(xa), t = 0; t < n; ++t) o[t] = [r[t][0], -r[t][1]];
            var i = wa(r),
                a = wa(o),
                u = a[0] === i[0],
                s = a[a.length - 1] === i[i.length - 1],
                c = [];
            for (t = i.length - 1; t >= 0; --t) c.push(e[r[i[t]][2]]);
            for (t = +u; t < a.length - s; ++t) c.push(e[r[a[t]][2]]);
            return c
        },
        W_ = function(e, t) {
            for (var n, r, o = e.length, i = e[o - 1], a = t[0], u = t[1], s = i[0], c = i[1], l = !1, f = 0; f < o; ++f) i = e[f], n = i[0], r = i[1], r > u != c > u && a < (s - n) * (u - r) / (c - r) + n && (l = !l), s = n, c = r;
            return l
        },
        V_ = function(e) {
            for (var t, n, r = -1, o = e.length, i = e[o - 1], a = i[0], u = i[1], s = 0; ++r < o;) t = a, n = u, i = e[r], a = i[0], u = i[1], t -= a, n -= u, s += Math.sqrt(t * t + n * n);
            return s
        },
        G_ = [].slice,
        Y_ = {};
    ka.prototype = Na.prototype = {
        constructor: ka,
        defer: function(e) {
            if ("function" != typeof e) throw new Error("invalid callback");
            if (this._call) throw new Error("defer after await");
            if (null != this._error) return this;
            var t = G_.call(arguments, 1);
            return t.push(e), ++this._waiting, this._tasks.push(t), Ea(this), this
        },
        abort: function() {
            return null == this._error && Ma(this, new Error("abort")), this
        },
        await: function(e) {
            if ("function" != typeof e) throw new Error("invalid callback");
            if (this._call) throw new Error("multiple await");
            return this._call = function(t, n) {
                e.apply(null, [t].concat(n))
            }, Sa(this), this
        },
        awaitAll: function(e) {
            if ("function" != typeof e) throw new Error("invalid callback");
            if (this._call) throw new Error("multiple await");
            return this._call = e, Sa(this), this
        }
    };
    var X_ = function() {
            return Math.random()
        },
        K_ = function e(t) {
            function n(e, n) {
                return e = null == e ? 0 : +e, n = null == n ? 1 : +n, 1 === arguments.length ? (n = e, e = 0) : n -= e,
                    function() {
                        return t() * n + e
                    }
            }
            return n.source = e, n
        }(X_),
        $_ = function e(t) {
            function n(e, n) {
                var r, o;
                return e = null == e ? 0 : +e, n = null == n ? 1 : +n,
                    function() {
                        var i;
                        if (null != r) i = r, r = null;
                        else
                            do {
                                r = 2 * t() - 1, i = 2 * t() - 1, o = r * r + i * i
                            } while (!o || o > 1);
                        return e + n * i * Math.sqrt(-2 * Math.log(o) / o)
                    }
            }
            return n.source = e, n
        }(X_),
        Q_ = function e(t) {
            function n() {
                var e = $_.source(t).apply(this, arguments);
                return function() {
                    return Math.exp(e())
                }
            }
            return n.source = e, n
        }(X_),
        J_ = function e(t) {
            function n(e) {
                return function() {
                    for (var n = 0, r = 0; r < e; ++r) n += t();
                    return n
                }
            }
            return n.source = e, n
        }(X_),
        Z_ = function e(t) {
            function n(e) {
                var n = J_.source(t)(e);
                return function() {
                    return n() / e
                }
            }
            return n.source = e, n
        }(X_),
        eb = function e(t) {
            function n(e) {
                return function() {
                    return -Math.log(1 - t()) / e
                }
            }
            return n.source = e, n
        }(X_),
        tb = function(e, t) {
            function n(e) {
                var t, n = c.status;
                if (!n && Aa(c) || n >= 200 && n < 300 || 304 === n) {
                    if (i) try {
                        t = i.call(r, c)
                    } catch (e) {
                        return void u.call("error", r, e)
                    } else t = c;
                    u.call("load", r, t)
                } else u.call("error", r, e)
            }
            var r, o, i, a, u = Xl("beforesend", "progress", "load", "error"),
                s = nm(),
                c = new XMLHttpRequest,
                l = null,
                f = null,
                d = 0;
            if ("undefined" == typeof XDomainRequest || "withCredentials" in c || !/^(http(s)?:)?\/\//.test(e) || (c = new XDomainRequest), "onload" in c ? c.onload = c.onerror = c.ontimeout = n : c.onreadystatechange = function(e) {
                    c.readyState > 3 && n(e)
                }, c.onprogress = function(e) {
                    u.call("progress", r, e)
                }, r = {
                    header: function(e, t) {
                        return e = (e + "").toLowerCase(), arguments.length < 2 ? s.get(e) : (null == t ? s.remove(e) : s.set(e, t + ""), r)
                    },
                    mimeType: function(e) {
                        return arguments.length ? (o = null == e ? null : e + "", r) : o
                    },
                    responseType: function(e) {
                        return arguments.length ? (a = e, r) : a
                    },
                    timeout: function(e) {
                        return arguments.length ? (d = +e, r) : d
                    },
                    user: function(e) {
                        return arguments.length < 1 ? l : (l = null == e ? null : e + "", r)
                    },
                    password: function(e) {
                        return arguments.length < 1 ? f : (f = null == e ? null : e + "", r)
                    },
                    response: function(e) {
                        return i = e, r
                    },
                    get: function(e, t) {
                        return r.send("GET", e, t)
                    },
                    post: function(e, t) {
                        return r.send("POST", e, t)
                    },
                    send: function(t, n, i) {
                        return c.open(t, e, !0, l, f), null == o || s.has("accept") || s.set("accept", o + ",*/*"), c.setRequestHeader && s.each(function(e, t) {
                            c.setRequestHeader(t, e)
                        }), null != o && c.overrideMimeType && c.overrideMimeType(o), null != a && (c.responseType = a), d > 0 && (c.timeout = d), null == i && "function" == typeof n && (i = n, n = null), null != i && 1 === i.length && (i = Pa(i)), null != i && r.on("error", i).on("load", function(e) {
                            i(null, e)
                        }), u.call("beforesend", r, c), c.send(null == n ? null : n), r
                    },
                    abort: function() {
                        return c.abort(), r
                    },
                    on: function() {
                        var e = u.on.apply(u, arguments);
                        return e === u ? r : e
                    }
                }, null != t) {
                if ("function" != typeof t) throw new Error("invalid callback: " + t);
                return r.get(t)
            }
            return r
        },
        nb = function(e, t) {
            return function(n, r) {
                var o = tb(n).mimeType(e).response(t);
                if (null != r) {
                    if ("function" != typeof r) throw new Error("invalid callback: " + r);
                    return o.get(r)
                }
                return o
            }
        },
        rb = nb("text/html", function(e) {
            return document.createRange().createContextualFragment(e.responseText)
        }),
        ob = nb("application/json", function(e) {
            return JSON.parse(e.responseText)
        }),
        ib = nb("text/plain", function(e) {
            return e.responseText
        }),
        ab = nb("application/xml", function(e) {
            var t = e.responseXML;
            if (!t) throw new Error("parse error");
            return t
        }),
        ub = function(e, t) {
            return function(n, r, o) {
                arguments.length < 3 && (o = r, r = null);
                var i = tb(n).mimeType(e);
                return i.row = function(e) {
                    return arguments.length ? i.response(Ia(t, r = e)) : r
                }, i.row(r), o ? i.get(o) : i
            }
        },
        sb = ub("text/csv", gm),
        cb = ub("text/tab-separated-values", xm),
        lb = Array.prototype,
        fb = lb.map,
        db = lb.slice,
        hb = {
            name: "implicit"
        },
        pb = function(e) {
            return function() {
                return e
            }
        },
        mb = function(e) {
            return +e
        },
        gb = [0, 1],
        vb = function(e, t, n) {
            var r, o = e[0],
                i = e[e.length - 1],
                u = a(o, i, null == t ? 10 : t);
            switch (n = vr(null == n ? ",f" : n), n.type) {
                case "s":
                    var s = Math.max(Math.abs(o), Math.abs(i));
                    return null != n.precision || isNaN(r = pg(u, s)) || (n.precision = r), cg(n, s);
                case "":
                case "e":
                case "g":
                case "p":
                case "r":
                    null != n.precision || isNaN(r = mg(u, Math.max(Math.abs(o), Math.abs(i)))) || (n.precision = r - ("e" === n.type));
                    break;
                case "f":
                case "%":
                    null != n.precision || isNaN(r = hg(u)) || (n.precision = r - 2 * ("%" === n.type))
            }
            return sg(n)
        },
        yb = function(e, t) {
            e = e.slice();
            var n, r = 0,
                o = e.length - 1,
                i = e[r],
                a = e[o];
            return a < i && (n = r, r = o, o = n, n = i, i = a, a = n), e[r] = t.floor(i), e[o] = t.ceil(a), e
        },
        _b = new Date,
        bb = new Date,
        xb = au(function() {}, function(e, t) {
            e.setTime(+e + t)
        }, function(e, t) {
            return t - e
        });
    xb.every = function(e) {
        return e = Math.floor(e), isFinite(e) && e > 0 ? e > 1 ? au(function(t) {
            t.setTime(Math.floor(t / e) * e)
        }, function(t, n) {
            t.setTime(+t + n * e)
        }, function(t, n) {
            return (n - t) / e
        }) : xb : null
    };
    var wb = xb,
        kb = xb.range,
        Eb = 6e4,
        Cb = 6048e5,
        Tb = au(function(e) {
            e.setTime(1e3 * Math.floor(e / 1e3))
        }, function(e, t) {
            e.setTime(+e + 1e3 * t)
        }, function(e, t) {
            return (t - e) / 1e3
        }, function(e) {
            return e.getUTCSeconds()
        }),
        Mb = Tb,
        Sb = Tb.range,
        Nb = au(function(e) {
            e.setTime(Math.floor(e / Eb) * Eb)
        }, function(e, t) {
            e.setTime(+e + t * Eb)
        }, function(e, t) {
            return (t - e) / Eb
        }, function(e) {
            return e.getMinutes()
        }),
        Pb = Nb,
        Ab = Nb.range,
        Ib = au(function(e) {
            var t = e.getTimezoneOffset() * Eb % 36e5;
            t < 0 && (t += 36e5), e.setTime(36e5 * Math.floor((+e - t) / 36e5) + t)
        }, function(e, t) {
            e.setTime(+e + 36e5 * t)
        }, function(e, t) {
            return (t - e) / 36e5
        }, function(e) {
            return e.getHours()
        }),
        Ob = Ib,
        Rb = Ib.range,
        Db = au(function(e) {
            e.setHours(0, 0, 0, 0)
        }, function(e, t) {
            e.setDate(e.getDate() + t)
        }, function(e, t) {
            return (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Eb) / 864e5
        }, function(e) {
            return e.getDate() - 1
        }),
        Lb = Db,
        Fb = Db.range,
        jb = uu(0),
        Ub = uu(1),
        zb = uu(2),
        Hb = uu(3),
        Bb = uu(4),
        qb = uu(5),
        Wb = uu(6),
        Vb = jb.range,
        Gb = Ub.range,
        Yb = zb.range,
        Xb = Hb.range,
        Kb = Bb.range,
        $b = qb.range,
        Qb = Wb.range,
        Jb = au(function(e) {
            e.setDate(1), e.setHours(0, 0, 0, 0)
        }, function(e, t) {
            e.setMonth(e.getMonth() + t)
        }, function(e, t) {
            return t.getMonth() - e.getMonth() + 12 * (t.getFullYear() - e.getFullYear())
        }, function(e) {
            return e.getMonth()
        }),
        Zb = Jb,
        ex = Jb.range,
        tx = au(function(e) {
            e.setMonth(0, 1), e.setHours(0, 0, 0, 0)
        }, function(e, t) {
            e.setFullYear(e.getFullYear() + t)
        }, function(e, t) {
            return t.getFullYear() - e.getFullYear()
        }, function(e) {
            return e.getFullYear()
        });
    tx.every = function(e) {
        return isFinite(e = Math.floor(e)) && e > 0 ? au(function(t) {
            t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
        }, function(t, n) {
            t.setFullYear(t.getFullYear() + n * e)
        }) : null
    };
    var nx = tx,
        rx = tx.range,
        ox = au(function(e) {
            e.setUTCSeconds(0, 0)
        }, function(e, t) {
            e.setTime(+e + t * Eb)
        }, function(e, t) {
            return (t - e) / Eb
        }, function(e) {
            return e.getUTCMinutes()
        }),
        ix = ox,
        ax = ox.range,
        ux = au(function(e) {
            e.setUTCMinutes(0, 0, 0)
        }, function(e, t) {
            e.setTime(+e + 36e5 * t)
        }, function(e, t) {
            return (t - e) / 36e5
        }, function(e) {
            return e.getUTCHours()
        }),
        sx = ux,
        cx = ux.range,
        lx = au(function(e) {
            e.setUTCHours(0, 0, 0, 0)
        }, function(e, t) {
            e.setUTCDate(e.getUTCDate() + t)
        }, function(e, t) {
            return (t - e) / 864e5
        }, function(e) {
            return e.getUTCDate() - 1
        }),
        fx = lx,
        dx = lx.range,
        hx = su(0),
        px = su(1),
        mx = su(2),
        gx = su(3),
        vx = su(4),
        yx = su(5),
        _x = su(6),
        bx = hx.range,
        xx = px.range,
        wx = mx.range,
        kx = gx.range,
        Ex = vx.range,
        Cx = yx.range,
        Tx = _x.range,
        Mx = au(function(e) {
            e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0)
        }, function(e, t) {
            e.setUTCMonth(e.getUTCMonth() + t)
        }, function(e, t) {
            return t.getUTCMonth() - e.getUTCMonth() + 12 * (t.getUTCFullYear() - e.getUTCFullYear())
        }, function(e) {
            return e.getUTCMonth()
        }),
        Sx = Mx,
        Nx = Mx.range,
        Px = au(function(e) {
            e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
        }, function(e, t) {
            e.setUTCFullYear(e.getUTCFullYear() + t)
        }, function(e, t) {
            return t.getUTCFullYear() - e.getUTCFullYear()
        }, function(e) {
            return e.getUTCFullYear()
        });
    Px.every = function(e) {
        return isFinite(e = Math.floor(e)) && e > 0 ? au(function(t) {
            t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
        }, function(t, n) {
            t.setUTCFullYear(t.getUTCFullYear() + n * e)
        }) : null
    };
    var Ax, Ix, Ox, Rx, Dx, Lx = Px,
        Fx = Px.range,
        jx = {
            "-": "",
            _: " ",
            0: "0"
        },
        Ux = /^\s*\d+/,
        zx = /^%/,
        Hx = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
    as({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    var Bx = Date.prototype.toISOString ? us : Rx("%Y-%m-%dT%H:%M:%S.%LZ"),
        qx = Bx,
        Wx = +new Date("2000-01-01T00:00:00.000Z") ? ss : Dx("%Y-%m-%dT%H:%M:%S.%LZ"),
        Vx = Wx,
        Gx = 1e3,
        Yx = 60 * Gx,
        Xx = 60 * Yx,
        Kx = 24 * Xx,
        $x = 7 * Kx,
        Qx = 30 * Kx,
        Jx = 365 * Kx,
        Zx = function() {
            return fs(nx, Zb, jb, Lb, Ob, Pb, Mb, wb, Ix).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)])
        },
        ew = function() {
            return fs(Lx, Sx, hx, fx, sx, ix, Mb, wb, Rx).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)])
        },
        tw = function(e) {
            return e.match(/.{6}/g).map(function(e) {
                return "#" + e
            })
        },
        nw = tw("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
        rw = tw("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),
        ow = tw("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),
        iw = tw("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),
        aw = sh(Je(300, .5, 0), Je(-240, .5, 1)),
        uw = sh(Je(-100, .75, .35), Je(80, 1.5, .8)),
        sw = sh(Je(260, .75, .35), Je(80, 1.5, .8)),
        cw = Je(),
        lw = function(e) {
            (e < 0 || e > 1) && (e -= Math.floor(e));
            var t = Math.abs(e - .5);
            return cw.h = 360 * e - 100, cw.s = 1.5 - 1.5 * t, cw.l = .8 - .9 * t, cw + ""
        },
        fw = ds(tw("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
        dw = ds(tw("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
        hw = ds(tw("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
        pw = ds(tw("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),
        mw = function(e) {
            return function() {
                return e
            }
        },
        gw = Math.abs,
        vw = Math.atan2,
        yw = Math.cos,
        _w = Math.max,
        bw = Math.min,
        xw = Math.sin,
        ww = Math.sqrt,
        kw = 1e-12,
        Ew = Math.PI,
        Cw = Ew / 2,
        Tw = 2 * Ew,
        Mw = function() {
            function e() {
                var e, c, l = +t.apply(this, arguments),
                    f = +n.apply(this, arguments),
                    d = i.apply(this, arguments) - Cw,
                    h = a.apply(this, arguments) - Cw,
                    p = gw(h - d),
                    m = h > d;
                if (s || (s = e = em()), f < l && (c = f, f = l, l = c), f > kw)
                    if (p > Tw - kw) s.moveTo(f * yw(d), f * xw(d)), s.arc(0, 0, f, d, h, !m), l > kw && (s.moveTo(l * yw(h), l * xw(h)), s.arc(0, 0, l, h, d, m));
                    else {
                        var g, v, y = d,
                            _ = h,
                            b = d,
                            x = h,
                            w = p,
                            k = p,
                            E = u.apply(this, arguments) / 2,
                            C = E > kw && (o ? +o.apply(this, arguments) : ww(l * l + f * f)),
                            T = bw(gw(f - l) / 2, +r.apply(this, arguments)),
                            M = T,
                            S = T;
                        if (C > kw) {
                            var N = ms(C / l * xw(E)),
                                P = ms(C / f * xw(E));
                            (w -= 2 * N) > kw ? (N *= m ? 1 : -1, b += N, x -= N) : (w = 0, b = x = (d + h) / 2), (k -= 2 * P) > kw ? (P *= m ? 1 : -1, y += P, _ -= P) : (k = 0, y = _ = (d + h) / 2)
                        }
                        var A = f * yw(y),
                            I = f * xw(y),
                            O = l * yw(x),
                            R = l * xw(x);
                        if (T > kw) {
                            var D = f * yw(_),
                                L = f * xw(_),
                                F = l * yw(b),
                                j = l * xw(b);
                            if (p < Ew) {
                                var U = w > kw ? xs(A, I, F, j, D, L, O, R) : [O, R],
                                    z = A - U[0],
                                    H = I - U[1],
                                    B = D - U[0],
                                    q = L - U[1],
                                    W = 1 / xw(ps((z * B + H * q) / (ww(z * z + H * H) * ww(B * B + q * q))) / 2),
                                    V = ww(U[0] * U[0] + U[1] * U[1]);
                                M = bw(T, (l - V) / (W - 1)), S = bw(T, (f - V) / (W + 1))
                            }
                        }
                        k > kw ? S > kw ? (g = ws(F, j, A, I, f, S, m), v = ws(D, L, O, R, f, S, m), s.moveTo(g.cx + g.x01, g.cy + g.y01), S < T ? s.arc(g.cx, g.cy, S, vw(g.y01, g.x01), vw(v.y01, v.x01), !m) : (s.arc(g.cx, g.cy, S, vw(g.y01, g.x01), vw(g.y11, g.x11), !m), s.arc(0, 0, f, vw(g.cy + g.y11, g.cx + g.x11), vw(v.cy + v.y11, v.cx + v.x11), !m), s.arc(v.cx, v.cy, S, vw(v.y11, v.x11), vw(v.y01, v.x01), !m))) : (s.moveTo(A, I), s.arc(0, 0, f, y, _, !m)) : s.moveTo(A, I), l > kw && w > kw ? M > kw ? (g = ws(O, R, D, L, l, -M, m), v = ws(A, I, F, j, l, -M, m), s.lineTo(g.cx + g.x01, g.cy + g.y01), M < T ? s.arc(g.cx, g.cy, M, vw(g.y01, g.x01), vw(v.y01, v.x01), !m) : (s.arc(g.cx, g.cy, M, vw(g.y01, g.x01), vw(g.y11, g.x11), !m), s.arc(0, 0, l, vw(g.cy + g.y11, g.cx + g.x11), vw(v.cy + v.y11, v.cx + v.x11), m), s.arc(v.cx, v.cy, M, vw(v.y11, v.x11), vw(v.y01, v.x01), !m))) : s.arc(0, 0, l, x, b, m) : s.lineTo(O, R)
                    } else s.moveTo(0, 0);
                if (s.closePath(), e) return s = null, e + "" || null
            }
            var t = gs,
                n = vs,
                r = mw(0),
                o = null,
                i = ys,
                a = _s,
                u = bs,
                s = null;
            return e.centroid = function() {
                var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
                    r = (+i.apply(this, arguments) + +a.apply(this, arguments)) / 2 - Ew / 2;
                return [yw(r) * e, xw(r) * e]
            }, e.innerRadius = function(n) {
                return arguments.length ? (t = "function" == typeof n ? n : mw(+n), e) : t
            }, e.outerRadius = function(t) {
                return arguments.length ? (n = "function" == typeof t ? t : mw(+t), e) : n
            }, e.cornerRadius = function(t) {
                return arguments.length ? (r = "function" == typeof t ? t : mw(+t), e) : r
            }, e.padRadius = function(t) {
                return arguments.length ? (o = null == t ? null : "function" == typeof t ? t : mw(+t), e) : o
            }, e.startAngle = function(t) {
                return arguments.length ? (i = "function" == typeof t ? t : mw(+t), e) : i
            }, e.endAngle = function(t) {
                return arguments.length ? (a = "function" == typeof t ? t : mw(+t), e) : a
            }, e.padAngle = function(t) {
                return arguments.length ? (u = "function" == typeof t ? t : mw(+t), e) : u
            }, e.context = function(t) {
                return arguments.length ? (s = null == t ? null : t, e) : s
            }, e
        };
    ks.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(e, t) {
            switch (e = +e, t = +t, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
                    break;
                case 1:
                    this._point = 2;
                default:
                    this._context.lineTo(e, t)
            }
        }
    };
    var Sw = function(e) {
            return new ks(e)
        },
        Nw = function() {
            function e(e) {
                var u, s, c, l = e.length,
                    f = !1;
                for (null == o && (a = i(c = em())), u = 0; u <= l; ++u) !(u < l && r(s = e[u], u, e)) === f && ((f = !f) ? a.lineStart() : a.lineEnd()), f && a.point(+t(s, u, e), +n(s, u, e));
                if (c) return a = null, c + "" || null
            }
            var t = Es,
                n = Cs,
                r = mw(!0),
                o = null,
                i = Sw,
                a = null;
            return e.x = function(n) {
                return arguments.length ? (t = "function" == typeof n ? n : mw(+n), e) : t
            }, e.y = function(t) {
                return arguments.length ? (n = "function" == typeof t ? t : mw(+t), e) : n
            }, e.defined = function(t) {
                return arguments.length ? (r = "function" == typeof t ? t : mw(!!t), e) : r
            }, e.curve = function(t) {
                return arguments.length ? (i = t, null != o && (a = i(o)), e) : i
            }, e.context = function(t) {
                return arguments.length ? (null == t ? o = a = null : a = i(o = t), e) : o
            }, e
        },
        Pw = function() {
            function e(e) {
                var t, l, f, d, h, p = e.length,
                    m = !1,
                    g = new Array(p),
                    v = new Array(p);
                for (null == u && (c = s(h = em())), t = 0; t <= p; ++t) {
                    if (!(t < p && a(d = e[t], t, e)) === m)
                        if (m = !m) l = t, c.areaStart(), c.lineStart();
                        else {
                            for (c.lineEnd(), c.lineStart(), f = t - 1; f >= l; --f) c.point(g[f], v[f]);
                            c.lineEnd(), c.areaEnd()
                        }
                    m && (g[t] = +n(d, t, e), v[t] = +o(d, t, e), c.point(r ? +r(d, t, e) : g[t], i ? +i(d, t, e) : v[t]))
                }
                if (h) return c = null, h + "" || null
            }

            function t() {
                return Nw().defined(a).curve(s).context(u)
            }
            var n = Es,
                r = null,
                o = mw(0),
                i = Cs,
                a = mw(!0),
                u = null,
                s = Sw,
                c = null;
            return e.x = function(t) {
                return arguments.length ? (n = "function" == typeof t ? t : mw(+t), r = null, e) : n
            }, e.x0 = function(t) {
                return arguments.length ? (n = "function" == typeof t ? t : mw(+t), e) : n
            }, e.x1 = function(t) {
                return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : mw(+t), e) : r
            }, e.y = function(t) {
                return arguments.length ? (o = "function" == typeof t ? t : mw(+t), i = null, e) : o
            }, e.y0 = function(t) {
                return arguments.length ? (o = "function" == typeof t ? t : mw(+t), e) : o
            }, e.y1 = function(t) {
                return arguments.length ? (i = null == t ? null : "function" == typeof t ? t : mw(+t), e) : i
            }, e.lineX0 = e.lineY0 = function() {
                return t().x(n).y(o)
            }, e.lineY1 = function() {
                return t().x(n).y(i)
            }, e.lineX1 = function() {
                return t().x(r).y(o)
            }, e.defined = function(t) {
                return arguments.length ? (a = "function" == typeof t ? t : mw(!!t), e) : a
            }, e.curve = function(t) {
                return arguments.length ? (s = t, null != u && (c = s(u)), e) : s
            }, e.context = function(t) {
                return arguments.length ? (null == t ? u = c = null : c = s(u = t), e) : u
            }, e
        },
        Aw = function(e, t) {
            return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
        },
        Iw = function(e) {
            return e
        },
        Ow = function() {
            function e(e) {
                var u, s, c, l, f, d = e.length,
                    h = 0,
                    p = new Array(d),
                    m = new Array(d),
                    g = +o.apply(this, arguments),
                    v = Math.min(Tw, Math.max(-Tw, i.apply(this, arguments) - g)),
                    y = Math.min(Math.abs(v) / d, a.apply(this, arguments)),
                    _ = y * (v < 0 ? -1 : 1);
                for (u = 0; u < d; ++u)(f = m[p[u] = u] = +t(e[u], u, e)) > 0 && (h += f);
                for (null != n ? p.sort(function(e, t) {
                        return n(m[e], m[t])
                    }) : null != r && p.sort(function(t, n) {
                        return r(e[t], e[n])
                    }), u = 0, c = h ? (v - d * _) / h : 0; u < d; ++u, g = l) s = p[u], f = m[s], l = g + (f > 0 ? f * c : 0) + _, m[s] = {
                    data: e[s],
                    index: u,
                    value: f,
                    startAngle: g,
                    endAngle: l,
                    padAngle: y
                };
                return m
            }
            var t = Iw,
                n = Aw,
                r = null,
                o = mw(0),
                i = mw(Tw),
                a = mw(0);
            return e.value = function(n) {
                return arguments.length ? (t = "function" == typeof n ? n : mw(+n), e) : t
            }, e.sortValues = function(t) {
                return arguments.length ? (n = t, r = null, e) : n
            }, e.sort = function(t) {
                return arguments.length ? (r = t, n = null, e) : r
            }, e.startAngle = function(t) {
                return arguments.length ? (o = "function" == typeof t ? t : mw(+t), e) : o
            }, e.endAngle = function(t) {
                return arguments.length ? (i = "function" == typeof t ? t : mw(+t), e) : i
            }, e.padAngle = function(t) {
                return arguments.length ? (a = "function" == typeof t ? t : mw(+t), e) : a
            }, e
        },
        Rw = Ms(Sw);
    Ts.prototype = {
        areaStart: function() {
            this._curve.areaStart()
        },
        areaEnd: function() {
            this._curve.areaEnd()
        },
        lineStart: function() {
            this._curve.lineStart()
        },
        lineEnd: function() {
            this._curve.lineEnd()
        },
        point: function(e, t) {
            this._curve.point(t * Math.sin(e), t * -Math.cos(e))
        }
    };
    var Dw = function() {
            return Ss(Nw().curve(Rw))
        },
        Lw = function() {
            var e = Pw().curve(Rw),
                t = e.curve,
                n = e.lineX0,
                r = e.lineX1,
                o = e.lineY0,
                i = e.lineY1;
            return e.angle = e.x, delete e.x, e.startAngle = e.x0, delete e.x0, e.endAngle = e.x1, delete e.x1, e.radius = e.y, delete e.y, e.innerRadius = e.y0, delete e.y0, e.outerRadius = e.y1, delete e.y1, e.lineStartAngle = function() {
                return Ss(n())
            }, delete e.lineX0, e.lineEndAngle = function() {
                return Ss(r())
            }, delete e.lineX1, e.lineInnerRadius = function() {
                return Ss(o())
            }, delete e.lineY0, e.lineOuterRadius = function() {
                return Ss(i())
            }, delete e.lineY1, e.curve = function(e) {
                return arguments.length ? t(Ms(e)) : t()._curve
            }, e
        },
        Fw = function(e, t) {
            return [(t = +t) * Math.cos(e -= Math.PI / 2), t * Math.sin(e)]
        },
        jw = Array.prototype.slice,
        Uw = {
            draw: function(e, t) {
                var n = Math.sqrt(t / Ew);
                e.moveTo(n, 0), e.arc(0, 0, n, 0, Tw)
            }
        },
        zw = {
            draw: function(e, t) {
                var n = Math.sqrt(t / 5) / 2;
                e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath()
            }
        },
        Hw = Math.sqrt(1 / 3),
        Bw = 2 * Hw,
        qw = {
            draw: function(e, t) {
                var n = Math.sqrt(t / Bw),
                    r = n * Hw;
                e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath()
            }
        },
        Ww = Math.sin(Ew / 10) / Math.sin(7 * Ew / 10),
        Vw = Math.sin(Tw / 10) * Ww,
        Gw = -Math.cos(Tw / 10) * Ww,
        Yw = {
            draw: function(e, t) {
                var n = Math.sqrt(.8908130915292852 * t),
                    r = Vw * n,
                    o = Gw * n;
                e.moveTo(0, -n), e.lineTo(r, o);
                for (var i = 1; i < 5; ++i) {
                    var a = Tw * i / 5,
                        u = Math.cos(a),
                        s = Math.sin(a);
                    e.lineTo(s * n, -u * n), e.lineTo(u * r - s * o, s * r + u * o)
                }
                e.closePath()
            }
        },
        Xw = {
            draw: function(e, t) {
                var n = Math.sqrt(t),
                    r = -n / 2;
                e.rect(r, r, n, n)
            }
        },
        Kw = Math.sqrt(3),
        $w = {
            draw: function(e, t) {
                var n = -Math.sqrt(t / (3 * Kw));
                e.moveTo(0, 2 * n), e.lineTo(-Kw * n, -n), e.lineTo(Kw * n, -n), e.closePath()
            }
        },
        Qw = Math.sqrt(3) / 2,
        Jw = 1 / Math.sqrt(12),
        Zw = 3 * (Jw / 2 + 1),
        ek = {
            draw: function(e, t) {
                var n = Math.sqrt(t / Zw),
                    r = n / 2,
                    o = n * Jw,
                    i = r,
                    a = n * Jw + n,
                    u = -i,
                    s = a;
                e.moveTo(r, o), e.lineTo(i, a), e.lineTo(u, s), e.lineTo(-.5 * r - Qw * o, Qw * r + -.5 * o), e.lineTo(-.5 * i - Qw * a, Qw * i + -.5 * a), e.lineTo(-.5 * u - Qw * s, Qw * u + -.5 * s), e.lineTo(-.5 * r + Qw * o, -.5 * o - Qw * r), e.lineTo(-.5 * i + Qw * a, -.5 * a - Qw * i), e.lineTo(-.5 * u + Qw * s, -.5 * s - Qw * u), e.closePath()
            }
        },
        tk = [Uw, zw, qw, Xw, Yw, $w, ek],
        nk = function() {
            function e() {
                var e;
                if (r || (r = e = em()), t.apply(this, arguments).draw(r, +n.apply(this, arguments)), e) return r = null, e + "" || null
            }
            var t = mw(Uw),
                n = mw(64),
                r = null;
            return e.type = function(n) {
                return arguments.length ? (t = "function" == typeof n ? n : mw(n), e) : t
            }, e.size = function(t) {
                return arguments.length ? (n = "function" == typeof t ? t : mw(+t), e) : n
            }, e.context = function(t) {
                return arguments.length ? (r = null == t ? null : t, e) : r
            }, e
        },
        rk = function() {};
    Us.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
                case 3:
                    js(this, this._x1, this._y1);
                case 2:
                    this._context.lineTo(this._x1, this._y1)
            }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(e, t) {
            switch (e = +e, t = +t, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                default:
                    js(this, e, t)
            }
            this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t
        }
    };
    var ok = function(e) {
        return new Us(e)
    };
    zs.prototype = {
        areaStart: rk,
        areaEnd: rk,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
                case 1:
                    this._context.moveTo(this._x2, this._y2), this._context.closePath();
                    break;
                case 2:
                    this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                    break;
                case 3:
                    this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
            }
        },
        point: function(e, t) {
            switch (e = +e, t = +t, this._point) {
                case 0:
                    this._point = 1, this._x2 = e, this._y2 = t;
                    break;
                case 1:
                    this._point = 2, this._x3 = e, this._y3 = t;
                    break;
                case 2:
                    this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
                    break;
                default:
                    js(this, e, t)
            }
            this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t
        }
    };
    var ik = function(e) {
        return new zs(e)
    };
    Hs.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(e, t) {
            switch (e = +e, t = +t, this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                    var n = (this._x0 + 4 * this._x1 + e) / 6,
                        r = (this._y0 + 4 * this._y1 + t) / 6;
                    this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r);
                    break;
                case 3:
                    this._point = 4;
                default:
                    js(this, e, t)
            }
            this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t
        }
    };
    var ak = function(e) {
        return new Hs(e)
    };
    Bs.prototype = {
        lineStart: function() {
            this._x = [], this._y = [], this._basis.lineStart()
        },
        lineEnd: function() {
            var e = this._x,
                t = this._y,
                n = e.length - 1;
            if (n > 0)
                for (var r, o = e[0], i = t[0], a = e[n] - o, u = t[n] - i, s = -1; ++s <= n;) r = s / n, this._basis.point(this._beta * e[s] + (1 - this._beta) * (o + r * a), this._beta * t[s] + (1 - this._beta) * (i + r * u));
            this._x = this._y = null, this._basis.lineEnd()
        },
        point: function(e, t) {
            this._x.push(+e), this._y.push(+t)
        }
    };
    var uk = function e(t) {
        function n(e) {
            return 1 === t ? new Us(e) : new Bs(e, t)
        }
        return n.beta = function(t) {
            return e(+t)
        }, n
    }(.85);
    Ws.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;
                case 3:
                    qs(this, this._x1, this._y1)
            }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(e, t) {
            switch (e = +e, t = +t, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
                    break;
                case 1:
                    this._point = 2, this._x1 = e, this._y1 = t;
                    break;
                case 2:
                    this._point = 3;
                default:
                    qs(this, e, t)
            }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t
        }
    };
    var sk = function e(t) {
        function n(e) {
            return new Ws(e, t)
        }
        return n.tension = function(t) {
            return e(+t)
        }, n
    }(0);
    Vs.prototype = {
        areaStart: rk,
        areaEnd: rk,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 2:
                    this._context.lineTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 3:
                    this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
            }
        },
        point: function(e, t) {
            switch (e = +e, t = +t, this._point) {
                case 0:
                    this._point = 1, this._x3 = e, this._y3 = t;
                    break;
                case 1:
                    this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
                    break;
                case 2:
                    this._point = 3, this._x5 = e, this._y5 = t;
                    break;
                default:
                    qs(this, e, t)
            }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t
        }
    };
    var ck = function e(t) {
        function n(e) {
            return new Vs(e, t)
        }
        return n.tension = function(t) {
            return e(+t)
        }, n
    }(0);
    Gs.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(e, t) {
            switch (e = +e, t = +t, this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;
                case 3:
                    this._point = 4;
                default:
                    qs(this, e, t)
            }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t
        }
    };
    var lk = function e(t) {
        function n(e) {
            return new Gs(e, t)
        }
        return n.tension = function(t) {
            return e(+t)
        }, n
    }(0);
    Xs.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;
                case 3:
                    this.point(this._x2, this._y2)
            }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(e, t) {
            if (e = +e, t = +t, this._point) {
                var n = this._x2 - e,
                    r = this._y2 - t;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha))
            }
            switch (this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                default:
                    Ys(this, e, t)
            }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t
        }
    };
    var fk = function e(t) {
        function n(e) {
            return t ? new Xs(e, t) : new Ws(e, 0)
        }
        return n.alpha = function(t) {
            return e(+t)
        }, n
    }(.5);
    Ks.prototype = {
        areaStart: rk,
        areaEnd: rk,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 2:
                    this._context.lineTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 3:
                    this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
            }
        },
        point: function(e, t) {
            if (e = +e, t = +t, this._point) {
                var n = this._x2 - e,
                    r = this._y2 - t;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha))
            }
            switch (this._point) {
                case 0:
                    this._point = 1, this._x3 = e, this._y3 = t;
                    break;
                case 1:
                    this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
                    break;
                case 2:
                    this._point = 3, this._x5 = e, this._y5 = t;
                    break;
                default:
                    Ys(this, e, t)
            }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t
        }
    };
    var dk = function e(t) {
        function n(e) {
            return t ? new Ks(e, t) : new Vs(e, 0)
        }
        return n.alpha = function(t) {
            return e(+t)
        }, n
    }(.5);
    $s.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(e, t) {
            if (e = +e, t = +t, this._point) {
                var n = this._x2 - e,
                    r = this._y2 - t;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha))
            }
            switch (this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;
                case 3:
                    this._point = 4;
                default:
                    Ys(this, e, t)
            }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t
        }
    };
    var hk = function e(t) {
        function n(e) {
            return t ? new $s(e, t) : new Gs(e, 0)
        }
        return n.alpha = function(t) {
            return e(+t)
        }, n
    }(.5);
    Qs.prototype = {
        areaStart: rk,
        areaEnd: rk,
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            this._point && this._context.closePath()
        },
        point: function(e, t) {
            e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t))
        }
    };
    var pk = function(e) {
        return new Qs(e)
    };
    nc.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x1, this._y1);
                    break;
                case 3:
                    tc(this, this._t0, ec(this, this._t0))
            }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(e, t) {
            var n = NaN;
            if (e = +e, t = +t, e !== this._x1 || t !== this._y1) {
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, tc(this, ec(this, n = Zs(this, e, t)), n);
                        break;
                    default:
                        tc(this, this._t0, n = Zs(this, e, t))
                }
                this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n
            }
        }
    }, (rc.prototype = Object.create(nc.prototype)).point = function(e, t) {
        nc.prototype.point.call(this, t, e)
    }, oc.prototype = {
        moveTo: function(e, t) {
            this._context.moveTo(t, e)
        },
        closePath: function() {
            this._context.closePath()
        },
        lineTo: function(e, t) {
            this._context.lineTo(t, e)
        },
        bezierCurveTo: function(e, t, n, r, o, i) {
            this._context.bezierCurveTo(t, e, r, n, i, o)
        }
    }, uc.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x = [], this._y = []
        },
        lineEnd: function() {
            var e = this._x,
                t = this._y,
                n = e.length;
            if (n)
                if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), 2 === n) this._context.lineTo(e[1], t[1]);
                else
                    for (var r = sc(e), o = sc(t), i = 0, a = 1; a < n; ++i, ++a) this._context.bezierCurveTo(r[0][i], o[0][i], r[1][i], o[1][i], e[a], t[a]);
                (this._line || 0 !== this._line && 1 === n) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
        },
        point: function(e, t) {
            this._x.push(+e), this._y.push(+t)
        }
    };
    var mk = function(e) {
        return new uc(e)
    };
    cc.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x = this._y = NaN, this._point = 0
        },
        lineEnd: function() {
            0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
        },
        point: function(e, t) {
            switch (e = +e, t = +t, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
                    break;
                case 1:
                    this._point = 2;
                default:
                    if (this._t <= 0) this._context.lineTo(this._x, t), this._context.lineTo(e, t);
                    else {
                        var n = this._x * (1 - this._t) + e * this._t;
                        this._context.lineTo(n, this._y), this._context.lineTo(n, t)
                    }
            }
            this._x = e, this._y = t
        }
    };
    var gk = function(e) {
            return new cc(e, .5)
        },
        vk = function(e, t) {
            if ((o = e.length) > 1)
                for (var n, r, o, i = 1, a = e[t[0]], u = a.length; i < o; ++i)
                    for (r = a, a = e[t[i]], n = 0; n < u; ++n) a[n][1] += a[n][0] = isNaN(r[n][1]) ? r[n][0] : r[n][1]
        },
        yk = function(e) {
            for (var t = e.length, n = new Array(t); --t >= 0;) n[t] = t;
            return n
        },
        _k = function() {
            function e(e) {
                var i, a, u = t.apply(this, arguments),
                    s = e.length,
                    c = u.length,
                    l = new Array(c);
                for (i = 0; i < c; ++i) {
                    for (var f, d = u[i], h = l[i] = new Array(s), p = 0; p < s; ++p) h[p] = f = [0, +o(e[p], d, p, e)], f.data = e[p];
                    h.key = d
                }
                for (i = 0, a = n(l); i < c; ++i) l[a[i]].index = i;
                return r(l, a), l
            }
            var t = mw([]),
                n = yk,
                r = vk,
                o = dc;
            return e.keys = function(n) {
                return arguments.length ? (t = "function" == typeof n ? n : mw(jw.call(n)), e) : t
            }, e.value = function(t) {
                return arguments.length ? (o = "function" == typeof t ? t : mw(+t), e) : o
            }, e.order = function(t) {
                return arguments.length ? (n = null == t ? yk : "function" == typeof t ? t : mw(jw.call(t)), e) : n
            }, e.offset = function(t) {
                return arguments.length ? (r = null == t ? vk : t, e) : r
            }, e
        },
        bk = function(e, t) {
            if ((r = e.length) > 0) {
                for (var n, r, o, i = 0, a = e[0].length; i < a; ++i) {
                    for (o = n = 0; n < r; ++n) o += e[n][i][1] || 0;
                    if (o)
                        for (n = 0; n < r; ++n) e[n][i][1] /= o
                }
                vk(e, t)
            }
        },
        xk = function(e, t) {
            if ((u = e.length) > 1)
                for (var n, r, o, i, a, u, s = 0, c = e[t[0]].length; s < c; ++s)
                    for (i = a = 0, n = 0; n < u; ++n)(o = (r = e[t[n]][s])[1] - r[0]) >= 0 ? (r[0] = i, r[1] = i += o) : o < 0 ? (r[1] = a, r[0] = a += o) : r[0] = i
        },
        wk = function(e, t) {
            if ((n = e.length) > 0) {
                for (var n, r = 0, o = e[t[0]], i = o.length; r < i; ++r) {
                    for (var a = 0, u = 0; a < n; ++a) u += e[a][r][1] || 0;
                    o[r][1] += o[r][0] = -u / 2
                }
                vk(e, t)
            }
        },
        kk = function(e, t) {
            if ((o = e.length) > 0 && (r = (n = e[t[0]]).length) > 0) {
                for (var n, r, o, i = 0, a = 1; a < r; ++a) {
                    for (var u = 0, s = 0, c = 0; u < o; ++u) {
                        for (var l = e[t[u]], f = l[a][1] || 0, d = l[a - 1][1] || 0, h = (f - d) / 2, p = 0; p < u; ++p) {
                            var m = e[t[p]];
                            h += (m[a][1] || 0) - (m[a - 1][1] || 0)
                        }
                        s += f, c += h * f
                    }
                    n[a - 1][1] += n[a - 1][0] = i, s && (i -= c / s)
                }
                n[a - 1][1] += n[a - 1][0] = i, vk(e, t)
            }
        },
        Ek = function(e) {
            var t = e.map(hc);
            return yk(e).sort(function(e, n) {
                return t[e] - t[n]
            })
        },
        Ck = function(e) {
            return Ek(e).reverse()
        },
        Tk = function(e) {
            var t, n, r = e.length,
                o = e.map(hc),
                i = yk(e).sort(function(e, t) {
                    return o[t] - o[e]
                }),
                a = 0,
                u = 0,
                s = [],
                c = [];
            for (t = 0; t < r; ++t) n = i[t], a < u ? (a += o[n], s.push(n)) : (u += o[n], c.push(n));
            return c.reverse().concat(s)
        },
        Mk = function(e) {
            return yk(e).reverse()
        },
        Sk = function(e) {
            return function() {
                return e
            }
        };
    gc.prototype = {
        constructor: gc,
        insert: function(e, t) {
            var n, r, o;
            if (e) {
                if (t.P = e, t.N = e.N, e.N && (e.N.P = t), e.N = t, e.R) {
                    for (e = e.R; e.L;) e = e.L;
                    e.L = t
                } else e.R = t;
                n = e
            } else this._ ? (e = bc(this._), t.P = null, t.N = e, e.P = e.L = t, n = e) : (t.P = t.N = null, this._ = t, n = null);
            for (t.L = t.R = null, t.U = n, t.C = !0, e = t; n && n.C;) r = n.U, n === r.L ? (o = r.R, o && o.C ? (n.C = o.C = !1, r.C = !0, e = r) : (e === n.R && (yc(this, n), e = n, n = e.U), n.C = !1, r.C = !0, _c(this, r))) : (o = r.L, o && o.C ? (n.C = o.C = !1, r.C = !0, e = r) : (e === n.L && (_c(this, n), e = n, n = e.U), n.C = !1, r.C = !0, yc(this, r))), n = e.U;
            this._.C = !1
        },
        remove: function(e) {
            e.N && (e.N.P = e.P), e.P && (e.P.N = e.N), e.N = e.P = null;
            var t, n, r, o = e.U,
                i = e.L,
                a = e.R;
            if (n = i ? a ? bc(a) : i : a, o ? o.L === e ? o.L = n : o.R = n : this._ = n, i && a ? (r = n.C, n.C = e.C, n.L = i, i.U = n, n !== a ? (o = n.U, n.U = e.U, e = n.R, o.L = e, n.R = a, a.U = n) : (n.U = o, o = n, e = n.R)) : (r = e.C, e = n), e && (e.U = o), !r) {
                if (e && e.C) return void(e.C = !1);
                do {
                    if (e === this._) break;
                    if (e === o.L) {
                        if (t = o.R, t.C && (t.C = !1, o.C = !0, yc(this, o), t = o.R), t.L && t.L.C || t.R && t.R.C) {
                            t.R && t.R.C || (t.L.C = !1, t.C = !0, _c(this, t), t = o.R), t.C = o.C, o.C = t.R.C = !1, yc(this, o), e = this._;
                            break
                        }
                    } else if (t = o.L, t.C && (t.C = !1, o.C = !0, _c(this, o), t = o.L), t.L && t.L.C || t.R && t.R.C) {
                        t.L && t.L.C || (t.R.C = !1, t.C = !0, yc(this, t), t = o.L), t.C = o.C, o.C = t.L.C = !1, _c(this, o), e = this._;
                        break
                    }
                    t.C = !0, e = o, o = o.U
                } while (!e.C);
                e && (e.C = !1)
            }
        }
    };
    var Nk, Pk, Ak, Ik, Ok, Rk = gc,
        Dk = [],
        Lk = [],
        Fk = 1e-6,
        jk = 1e-12;
    Vc.prototype = {
        constructor: Vc,
        polygons: function() {
            var e = this.edges;
            return this.cells.map(function(t) {
                var n = t.halfedges.map(function(n) {
                    return Nc(t, e[n])
                });
                return n.data = t.site.data, n
            })
        },
        triangles: function() {
            var e = [],
                t = this.edges;
            return this.cells.forEach(function(n, r) {
                if (i = (o = n.halfedges).length)
                    for (var o, i, a, u = n.site, s = -1, c = t[o[i - 1]], l = c.left === u ? c.right : c.left; ++s < i;) a = l, c = t[o[s]], l = c.left === u ? c.right : c.left, a && l && r < a.index && r < l.index && qc(u, a, l) < 0 && e.push([u.data, a.data, l.data])
            }), e
        },
        links: function() {
            return this.edges.filter(function(e) {
                return e.right
            }).map(function(e) {
                return {
                    source: e.left.data,
                    target: e.right.data
                }
            })
        },
        find: function(e, t, n) {
            for (var r, o, i = this, a = i._found || 0, u = i.cells.length; !(o = i.cells[a]);)
                if (++a >= u) return null;
            var s = e - o.site[0],
                c = t - o.site[1],
                l = s * s + c * c;
            do {
                o = i.cells[r = a], a = null, o.halfedges.forEach(function(n) {
                    var r = i.edges[n],
                        u = r.left;
                    if (u !== o.site && u || (u = r.right)) {
                        var s = e - u[0],
                            c = t - u[1],
                            f = s * s + c * c;
                        f < l && (l = f, a = u.index)
                    }
                })
            } while (null !== a);
            return i._found = r, null == n || l <= n * n ? o.site : null
        }
    };
    var Uk = function() {
            function e(e) {
                return new Vc(e.map(function(r, o) {
                    var i = [Math.round(t(r, o, e) / Fk) * Fk, Math.round(n(r, o, e) / Fk) * Fk];
                    return i.index = o, i.data = r, i
                }), r)
            }
            var t = pc,
                n = mc,
                r = null;
            return e.polygons = function(t) {
                return e(t).polygons()
            }, e.links = function(t) {
                return e(t).links()
            }, e.triangles = function(t) {
                return e(t).triangles()
            }, e.x = function(n) {
                return arguments.length ? (t = "function" == typeof n ? n : Sk(+n), e) : t
            }, e.y = function(t) {
                return arguments.length ? (n = "function" == typeof t ? t : Sk(+t), e) : n
            }, e.extent = function(t) {
                return arguments.length ? (r = null == t ? null : [
                    [+t[0][0], +t[0][1]],
                    [+t[1][0], +t[1][1]]
                ], e) : r && [
                    [r[0][0], r[0][1]],
                    [r[1][0], r[1][1]]
                ]
            }, e.size = function(t) {
                return arguments.length ? (r = null == t ? null : [
                    [0, 0],
                    [+t[0], +t[1]]
                ], e) : r && [r[1][0] - r[0][0], r[1][1] - r[0][1]]
            }, e
        },
        zk = function(e) {
            return function() {
                return e
            }
        };
    Yc.prototype = {
        constructor: Yc,
        scale: function(e) {
            return 1 === e ? this : new Yc(this.k * e, this.x, this.y)
        },
        translate: function(e, t) {
            return 0 === e & 0 === t ? this : new Yc(this.k, this.x + this.k * e, this.y + this.k * t)
        },
        apply: function(e) {
            return [e[0] * this.k + this.x, e[1] * this.k + this.y]
        },
        applyX: function(e) {
            return e * this.k + this.x
        },
        applyY: function(e) {
            return e * this.k + this.y
        },
        invert: function(e) {
            return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k]
        },
        invertX: function(e) {
            return (e - this.x) / this.k
        },
        invertY: function(e) {
            return (e - this.y) / this.k
        },
        rescaleX: function(e) {
            return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e))
        },
        rescaleY: function(e) {
            return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e))
        },
        toString: function() {
            return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
        }
    };
    var Hk = new Yc(1, 0, 0);
    Xc.prototype = Yc.prototype;
    var Bk = function() {
            af.preventDefault(), af.stopImmediatePropagation()
        },
        qk = function() {
            function e(e) {
                e.property("__zoom", Jc).on("wheel.zoom", s).on("mousedown.zoom", c).on("dblclick.zoom", l).filter(_).on("touchstart.zoom", f).on("touchmove.zoom", d).on("touchend.zoom touchcancel.zoom", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
            }

            function t(e, t) {
                return t = Math.max(b, Math.min(x, t)), t === e.k ? e : new Yc(t, e.x, e.y)
            }

            function n(e, t, n) {
                var r = t[0] - n[0] * e.k,
                    o = t[1] - n[1] * e.k;
                return r === e.x && o === e.y ? e : new Yc(e.k, r, o)
            }

            function r(e, t) {
                var n = e.invertX(t[0][0]) - w,
                    r = e.invertX(t[1][0]) - k,
                    o = e.invertY(t[0][1]) - E,
                    i = e.invertY(t[1][1]) - C;
                return e.translate(r > n ? (n + r) / 2 : Math.min(0, n) || Math.max(0, r), i > o ? (o + i) / 2 : Math.min(0, o) || Math.max(0, i))
            }

            function o(e) {
                return [(+e[0][0] + +e[1][0]) / 2, (+e[0][1] + +e[1][1]) / 2]
            }

            function i(e, t, n) {
                e.on("start.zoom", function() {
                    a(this, arguments).start()
                }).on("interrupt.zoom end.zoom", function() {
                    a(this, arguments).end()
                }).tween("zoom", function() {
                    var e = this,
                        r = arguments,
                        i = a(e, r),
                        u = v.apply(e, r),
                        s = n || o(u),
                        c = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1]),
                        l = e.__zoom,
                        f = "function" == typeof t ? t.apply(e, r) : t,
                        d = M(l.invert(s).concat(c / l.k), f.invert(s).concat(c / f.k));
                    return function(e) {
                        if (1 === e) e = f;
                        else {
                            var t = d(e),
                                n = c / t[2];
                            e = new Yc(n, s[0] - t[0] * n, s[1] - t[1] * n)
                        }
                        i.zoom(null, e)
                    }
                })
            }

            function a(e, t) {
                for (var n, r = 0, o = S.length; r < o; ++r)
                    if ((n = S[r]).that === e) return n;
                return new u(e, t)
            }

            function u(e, t) {
                this.that = e, this.args = t, this.index = -1, this.active = 0, this.extent = v.apply(e, t)
            }

            function s() {
                function e() {
                    o.wheel = null, o.end()
                }
                if (g.apply(this, arguments)) {
                    var o = a(this, arguments),
                        i = this.__zoom,
                        u = Math.max(b, Math.min(x, i.k * Math.pow(2, y.apply(this, arguments)))),
                        s = lf(this);
                    if (o.wheel) o.mouse[0][0] === s[0] && o.mouse[0][1] === s[1] || (o.mouse[1] = i.invert(o.mouse[0] = s)), clearTimeout(o.wheel);
                    else {
                        if (i.k === u) return;
                        o.mouse = [s, i.invert(s)], Ah(this), o.start()
                    }
                    Bk(), o.wheel = setTimeout(e, A), o.zoom("mouse", r(n(t(i, u), o.mouse[0], o.mouse[1]), o.extent))
                }
            }

            function c() {
                function e() {
                    if (Bk(), !o.moved) {
                        var e = af.clientX - s,
                            t = af.clientY - c;
                        o.moved = e * e + t * t > O
                    }
                    o.zoom("mouse", r(n(o.that.__zoom, o.mouse[0] = lf(o.that), o.mouse[1]), o.extent))
                }

                function t() {
                    i.on("mousemove.zoom mouseup.zoom", null), we(af.view, o.moved), Bk(), o.end()
                }
                if (!m && g.apply(this, arguments)) {
                    var o = a(this, arguments),
                        i = Yf(af.view).on("mousemove.zoom", e, !0).on("mouseup.zoom", t, !0),
                        u = lf(this),
                        s = af.clientX,
                        c = af.clientY;
                    Jf(af.view), Kc(), o.mouse = [u, this.__zoom.invert(u)], Ah(this), o.start()
                }
            }

            function l() {
                if (g.apply(this, arguments)) {
                    var o = this.__zoom,
                        a = lf(this),
                        u = o.invert(a),
                        s = o.k * (af.shiftKey ? .5 : 2),
                        c = r(n(t(o, s), a, u), v.apply(this, arguments));
                    Bk(), T > 0 ? Yf(this).transition().duration(T).call(i, c, a) : Yf(this).call(e.transform, c)
                }
            }

            function f() {
                if (g.apply(this, arguments)) {
                    var e, t, n, r, o = a(this, arguments),
                        i = af.changedTouches,
                        u = i.length;
                    for (Kc(), t = 0; t < u; ++t) n = i[t], r = Kf(this, i, n.identifier), r = [r, this.__zoom.invert(r), n.identifier], o.touch0 ? o.touch1 || (o.touch1 = r) : (o.touch0 = r, e = !0);
                    if (p && (p = clearTimeout(p), !o.touch1)) return o.end(), void((r = Yf(this).on("dblclick.zoom")) && r.apply(this, arguments));
                    e && (p = setTimeout(function() {
                        p = null
                    }, P), Ah(this), o.start())
                }
            }

            function d() {
                var e, o, i, u, s = a(this, arguments),
                    c = af.changedTouches,
                    l = c.length;
                for (Bk(), p && (p = clearTimeout(p)), e = 0; e < l; ++e) o = c[e], i = Kf(this, c, o.identifier), s.touch0 && s.touch0[2] === o.identifier ? s.touch0[0] = i : s.touch1 && s.touch1[2] === o.identifier && (s.touch1[0] = i);
                if (o = s.that.__zoom, s.touch1) {
                    var f = s.touch0[0],
                        d = s.touch0[1],
                        h = s.touch1[0],
                        m = s.touch1[1],
                        g = (g = h[0] - f[0]) * g + (g = h[1] - f[1]) * g,
                        v = (v = m[0] - d[0]) * v + (v = m[1] - d[1]) * v;
                    o = t(o, Math.sqrt(g / v)), i = [(f[0] + h[0]) / 2, (f[1] + h[1]) / 2], u = [(d[0] + m[0]) / 2, (d[1] + m[1]) / 2]
                } else {
                    if (!s.touch0) return;
                    i = s.touch0[0], u = s.touch0[1]
                }
                s.zoom("touch", r(n(o, i, u), s.extent))
            }

            function h() {
                var e, t, n = a(this, arguments),
                    r = af.changedTouches,
                    o = r.length;
                for (Kc(), m && clearTimeout(m), m = setTimeout(function() {
                        m = null
                    }, P), e = 0; e < o; ++e) t = r[e], n.touch0 && n.touch0[2] === t.identifier ? delete n.touch0 : n.touch1 && n.touch1[2] === t.identifier && delete n.touch1;
                n.touch1 && !n.touch0 && (n.touch0 = n.touch1, delete n.touch1), n.touch0 ? n.touch0[1] = this.__zoom.invert(n.touch0[0]) : n.end()
            }
            var p, m, g = $c,
                v = Qc,
                y = Zc,
                _ = el,
                b = 0,
                x = 1 / 0,
                w = -x,
                k = x,
                E = w,
                C = k,
                T = 250,
                M = nh,
                S = [],
                N = Xl("start", "zoom", "end"),
                P = 500,
                A = 150,
                O = 0;
            return e.transform = function(e, t) {
                var n = e.selection ? e.selection() : e;
                n.property("__zoom", Jc), e !== n ? i(e, t) : n.interrupt().each(function() {
                    a(this, arguments).start().zoom(null, "function" == typeof t ? t.apply(this, arguments) : t).end()
                })
            }, e.scaleBy = function(t, n) {
                e.scaleTo(t, function() {
                    return this.__zoom.k * ("function" == typeof n ? n.apply(this, arguments) : n)
                })
            }, e.scaleTo = function(i, a) {
                e.transform(i, function() {
                    var e = v.apply(this, arguments),
                        i = this.__zoom,
                        u = o(e),
                        s = i.invert(u);
                    return r(n(t(i, "function" == typeof a ? a.apply(this, arguments) : a), u, s), e)
                })
            }, e.translateBy = function(t, n, o) {
                e.transform(t, function() {
                    return r(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof o ? o.apply(this, arguments) : o), v.apply(this, arguments))
                })
            }, e.translateTo = function(t, n, i) {
                e.transform(t, function() {
                    var e = v.apply(this, arguments),
                        t = this.__zoom,
                        a = o(e);
                    return r(Hk.translate(a[0], a[1]).scale(t.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof i ? -i.apply(this, arguments) : -i), e)
                })
            }, u.prototype = {
                start: function() {
                    return 1 == ++this.active && (this.index = S.push(this) - 1, this.emit("start")), this
                },
                zoom: function(e, t) {
                    return this.mouse && "mouse" !== e && (this.mouse[1] = t.invert(this.mouse[0])), this.touch0 && "touch" !== e && (this.touch0[1] = t.invert(this.touch0[0])), this.touch1 && "touch" !== e && (this.touch1[1] = t.invert(this.touch1[0])), this.that.__zoom = t, this.emit("zoom"), this
                },
                end: function() {
                    return 0 == --this.active && (S.splice(this.index, 1), this.index = -1, this.emit("end")), this
                },
                emit: function(t) {
                    I(new Gc(e, t, this.that.__zoom), N.apply, N, [t, this.that, this.args])
                }
            }, e.wheelDelta = function(t) {
                return arguments.length ? (y = "function" == typeof t ? t : zk(+t), e) : y
            }, e.filter = function(t) {
                return arguments.length ? (g = "function" == typeof t ? t : zk(!!t), e) : g
            }, e.touchable = function(t) {
                return arguments.length ? (_ = "function" == typeof t ? t : zk(!!t), e) : _
            }, e.extent = function(t) {
                return arguments.length ? (v = "function" == typeof t ? t : zk([
                    [+t[0][0], +t[0][1]],
                    [+t[1][0], +t[1][1]]
                ]), e) : v
            }, e.scaleExtent = function(t) {
                return arguments.length ? (b = +t[0], x = +t[1], e) : [b, x]
            }, e.translateExtent = function(t) {
                return arguments.length ? (w = +t[0][0], k = +t[1][0], E = +t[0][1], C = +t[1][1], e) : [
                    [w, E],
                    [k, C]
                ]
            }, e.duration = function(t) {
                return arguments.length ? (T = +t, e) : T
            }, e.interpolate = function(t) {
                return arguments.length ? (M = t, e) : M
            }, e.on = function() {
                var t = N.on.apply(N, arguments);
                return t === N ? e : t
            }, e.clickDistance = function(t) {
                return arguments.length ? (O = (t = +t) * t, e) : Math.sqrt(O)
            }, e
        };
    n.d(t, "version", function() {
        return "4.11.0"
    }), n.d(t, "bisect", function() {
        return al
    }), n.d(t, "bisectRight", function() {
        return ol
    }), n.d(t, "bisectLeft", function() {
        return il
    }), n.d(t, "ascending", function() {
        return tl
    }), n.d(t, "bisector", function() {
        return nl
    }), n.d(t, "cross", function() {
        return sl
    }), n.d(t, "descending", function() {
        return cl
    }), n.d(t, "deviation", function() {
        return dl
    }), n.d(t, "extent", function() {
        return hl
    }), n.d(t, "histogram", function() {
        return Cl
    }), n.d(t, "thresholdFreedmanDiaconis", function() {
        return Ml
    }), n.d(t, "thresholdScott", function() {
        return Sl
    }), n.d(t, "thresholdSturges", function() {
        return El
    }), n.d(t, "max", function() {
        return Nl
    }), n.d(t, "mean", function() {
        return Pl
    }), n.d(t, "median", function() {
        return Al
    }), n.d(t, "merge", function() {
        return Il
    }), n.d(t, "min", function() {
        return Ol
    }), n.d(t, "pairs", function() {
        return ul
    }), n.d(t, "permute", function() {
        return Rl
    }), n.d(t, "quantile", function() {
        return Tl
    }), n.d(t, "range", function() {
        return _l
    }), n.d(t, "scan", function() {
        return Dl
    }), n.d(t, "shuffle", function() {
        return Ll
    }), n.d(t, "sum", function() {
        return Fl
    }), n.d(t, "ticks", function() {
        return kl
    }), n.d(t, "tickIncrement", function() {
        return i
    }), n.d(t, "tickStep", function() {
        return a
    }), n.d(t, "transpose", function() {
        return jl
    }), n.d(t, "variance", function() {
        return fl
    }), n.d(t, "zip", function() {
        return Ul
    }), n.d(t, "axisTop", function() {
        return p
    }), n.d(t, "axisRight", function() {
        return m
    }), n.d(t, "axisBottom", function() {
        return g
    }), n.d(t, "axisLeft", function() {
        return v
    }), n.d(t, "brush", function() {
        return Hp
    }), n.d(t, "brushX", function() {
        return Dn
    }), n.d(t, "brushY", function() {
        return Ln
    }), n.d(t, "brushSelection", function() {
        return Rn
    }), n.d(t, "chord", function() {
        return Xp
    }), n.d(t, "ribbon", function() {
        return tm
    }), n.d(t, "nest", function() {
        return rm
    }), n.d(t, "set", function() {
        return im
    }), n.d(t, "map", function() {
        return nm
    }), n.d(t, "keys", function() {
        return am
    }), n.d(t, "values", function() {
        return um
    }), n.d(t, "entries", function() {
        return sm
    }), n.d(t, "color", function() {
        return Pe
    }), n.d(t, "rgb", function() {
        return Re
    }), n.d(t, "hsl", function() {
        return je
    }), n.d(t, "lab", function() {
        return Be
    }), n.d(t, "hcl", function() {
        return Ke
    }), n.d(t, "cubehelix", function() {
        return Je
    }), n.d(t, "dispatch", function() {
        return Xl
    }), n.d(t, "drag", function() {
        return ed
    }), n.d(t, "dragDisable", function() {
        return Jf
    }), n.d(t, "dragEnable", function() {
        return we
    }), n.d(t, "dsvFormat", function() {
        return pm
    }), n.d(t, "csvParse", function() {
        return gm
    }), n.d(t, "csvParseRows", function() {
        return vm
    }), n.d(t, "csvFormat", function() {
        return ym
    }), n.d(t, "csvFormatRows", function() {
        return _m
    }), n.d(t, "tsvParse", function() {
        return xm
    }), n.d(t, "tsvParseRows", function() {
        return wm
    }), n.d(t, "tsvFormat", function() {
        return km
    }), n.d(t, "tsvFormatRows", function() {
        return Em
    }), n.d(t, "easeLinear", function() {
        return sn
    }), n.d(t, "easeQuad", function() {
        return fn
    }), n.d(t, "easeQuadIn", function() {
        return cn
    }), n.d(t, "easeQuadOut", function() {
        return ln
    }), n.d(t, "easeQuadInOut", function() {
        return fn
    }), n.d(t, "easeCubic", function() {
        return pn
    }), n.d(t, "easeCubicIn", function() {
        return dn
    }), n.d(t, "easeCubicOut", function() {
        return hn
    }), n.d(t, "easeCubicInOut", function() {
        return pn
    }), n.d(t, "easePoly", function() {
        return np
    }), n.d(t, "easePolyIn", function() {
        return ep
    }), n.d(t, "easePolyOut", function() {
        return tp
    }), n.d(t, "easePolyInOut", function() {
        return np
    }), n.d(t, "easeSin", function() {
        return vn
    }), n.d(t, "easeSinIn", function() {
        return mn
    }), n.d(t, "easeSinOut", function() {
        return gn
    }), n.d(t, "easeSinInOut", function() {
        return vn
    }), n.d(t, "easeExp", function() {
        return bn
    }), n.d(t, "easeExpIn", function() {
        return yn
    }), n.d(t, "easeExpOut", function() {
        return _n
    }), n.d(t, "easeExpInOut", function() {
        return bn
    }), n.d(t, "easeCircle", function() {
        return kn
    }), n.d(t, "easeCircleIn", function() {
        return xn
    }), n.d(t, "easeCircleOut", function() {
        return wn
    }), n.d(t, "easeCircleInOut", function() {
        return kn
    }), n.d(t, "easeBounce", function() {
        return Cn
    }), n.d(t, "easeBounceIn", function() {
        return En
    }), n.d(t, "easeBounceOut", function() {
        return Cn
    }), n.d(t, "easeBounceInOut", function() {
        return Tn
    }), n.d(t, "easeBack", function() {
        return vp
    }), n.d(t, "easeBackIn", function() {
        return mp
    }), n.d(t, "easeBackOut", function() {
        return gp
    }), n.d(t, "easeBackInOut", function() {
        return vp
    }), n.d(t, "easeElastic", function() {
        return bp
    }), n.d(t, "easeElasticIn", function() {
        return _p
    }), n.d(t, "easeElasticOut", function() {
        return bp
    }), n.d(t, "easeElasticInOut", function() {
        return xp
    }), n.d(t, "forceCenter", function() {
        return Cm
    }), n.d(t, "forceCollide", function() {
        return qm
    }), n.d(t, "forceLink", function() {
        return Wm
    }), n.d(t, "forceManyBody", function() {
        return Xm
    }), n.d(t, "forceRadial", function() {
        return Km
    }), n.d(t, "forceSimulation", function() {
        return Ym
    }), n.d(t, "forceX", function() {
        return $m
    }), n.d(t, "forceY", function() {
        return Qm
    }), n.d(t, "formatDefaultLocale", function() {
        return _r
    }), n.d(t, "format", function() {
        return sg
    }), n.d(t, "formatPrefix", function() {
        return cg
    }), n.d(t, "formatLocale", function() {
        return dg
    }), n.d(t, "formatSpecifier", function() {
        return vr
    }), n.d(t, "precisionFixed", function() {
        return hg
    }), n.d(t, "precisionPrefix", function() {
        return pg
    }), n.d(t, "precisionRound", function() {
        return mg
    }), n.d(t, "geoArea", function() {
        return bv
    }), n.d(t, "geoBounds", function() {
        return kv
    }), n.d(t, "geoCentroid", function() {
        return Cv
    }), n.d(t, "geoCircle", function() {
        return zv
    }), n.d(t, "geoClipAntimeridian", function() {
        return Yv
    }), n.d(t, "geoClipCircle", function() {
        return Xv
    }), n.d(t, "geoClipExtent", function() {
        return Jv
    }), n.d(t, "geoClipRectangle", function() {
        return xo
    }), n.d(t, "geoContains", function() {
        return uy
    }), n.d(t, "geoDistance", function() {
        return oy
    }), n.d(t, "geoGraticule", function() {
        return Ro
    }), n.d(t, "geoGraticule10", function() {
        return Do
    }), n.d(t, "geoInterpolate", function() {
        return sy
    }), n.d(t, "geoLength", function() {
        return ty
    }), n.d(t, "geoPath", function() {
        return Uy
    }), n.d(t, "geoAlbers", function() {
        return Gy
    }), n.d(t, "geoAlbersUsa", function() {
        return Yy
    }), n.d(t, "geoAzimuthalEqualArea", function() {
        return Ky
    }), n.d(t, "geoAzimuthalEqualAreaRaw", function() {
        return Xy
    }), n.d(t, "geoAzimuthalEquidistant", function() {
        return Qy
    }), n.d(t, "geoAzimuthalEquidistantRaw", function() {
        return $y
    }), n.d(t, "geoConicConformal", function() {
        return Zy
    }), n.d(t, "geoConicConformalRaw", function() {
        return _i
    }), n.d(t, "geoConicEqualArea", function() {
        return Vy
    }), n.d(t, "geoConicEqualAreaRaw", function() {
        return di
    }), n.d(t, "geoConicEquidistant", function() {
        return t_
    }), n.d(t, "geoConicEquidistantRaw", function() {
        return xi
    }), n.d(t, "geoEquirectangular", function() {
        return e_
    }), n.d(t, "geoEquirectangularRaw", function() {
        return bi
    }), n.d(t, "geoGnomonic", function() {
        return n_
    }), n.d(t, "geoGnomonicRaw", function() {
        return wi
    }), n.d(t, "geoIdentity", function() {
        return r_
    }), n.d(t, "geoProjection", function() {
        return si
    }), n.d(t, "geoProjectionMutator", function() {
        return ci
    }), n.d(t, "geoMercator", function() {
        return Jy
    }), n.d(t, "geoMercatorRaw", function() {
        return gi
    }), n.d(t, "geoNaturalEarth1", function() {
        return o_
    }), n.d(t, "geoNaturalEarth1Raw", function() {
        return Ei
    }), n.d(t, "geoOrthographic", function() {
        return i_
    }), n.d(t, "geoOrthographicRaw", function() {
        return Ci
    }), n.d(t, "geoStereographic", function() {
        return a_
    }), n.d(t, "geoStereographicRaw", function() {
        return Ti
    }), n.d(t, "geoTransverseMercator", function() {
        return u_
    }), n.d(t, "geoTransverseMercatorRaw", function() {
        return Mi
    }), n.d(t, "geoRotation", function() {
        return Uv
    }), n.d(t, "geoStream", function() {
        return gv
    }), n.d(t, "geoTransform", function() {
        return zy
    }), n.d(t, "cluster", function() {
        return s_
    }), n.d(t, "hierarchy", function() {
        return Fi
    }), n.d(t, "pack", function() {
        return E_
    }), n.d(t, "packSiblings", function() {
        return w_
    }), n.d(t, "packEnclose", function() {
        return x_
    }), n.d(t, "partition", function() {
        return M_
    }), n.d(t, "stratify", function() {
        return A_
    }), n.d(t, "tree", function() {
        return I_
    }), n.d(t, "treemap", function() {
        return L_
    }), n.d(t, "treemapBinary", function() {
        return F_
    }), n.d(t, "treemapDice", function() {
        return T_
    }), n.d(t, "treemapSlice", function() {
        return O_
    }), n.d(t, "treemapSliceDice", function() {
        return j_
    }), n.d(t, "treemapSquarify", function() {
        return D_
    }), n.d(t, "treemapResquarify", function() {
        return U_
    }), n.d(t, "interpolate", function() {
        return Xd
    }), n.d(t, "interpolateArray", function() {
        return Hd
    }), n.d(t, "interpolateBasis", function() {
        return Dd
    }), n.d(t, "interpolateBasisClosed", function() {
        return Ld
    }), n.d(t, "interpolateDate", function() {
        return Bd
    }), n.d(t, "interpolateNumber", function() {
        return qd
    }), n.d(t, "interpolateObject", function() {
        return Wd
    }), n.d(t, "interpolateRound", function() {
        return Kd
    }), n.d(t, "interpolateString", function() {
        return Yd
    }), n.d(t, "interpolateTransformCss", function() {
        return Zd
    }), n.d(t, "interpolateTransformSvg", function() {
        return eh
    }), n.d(t, "interpolateZoom", function() {
        return nh
    }), n.d(t, "interpolateRgb", function() {
        return jd
    }), n.d(t, "interpolateRgbBasis", function() {
        return Ud
    }), n.d(t, "interpolateRgbBasisClosed", function() {
        return zd
    }), n.d(t, "interpolateHsl", function() {
        return rh
    }), n.d(t, "interpolateHslLong", function() {
        return oh
    }), n.d(t, "interpolateLab", function() {
        return gt
    });
    n.d(t, "interpolateHcl", function() {
        return ih
    }), n.d(t, "interpolateHclLong", function() {
        return ah
    }), n.d(t, "interpolateCubehelix", function() {
        return uh
    }), n.d(t, "interpolateCubehelixLong", function() {
        return sh
    }), n.d(t, "quantize", function() {
        return ch
    }), n.d(t, "path", function() {
        return em
    }), n.d(t, "polygonArea", function() {
        return z_
    }), n.d(t, "polygonCentroid", function() {
        return H_
    }), n.d(t, "polygonHull", function() {
        return q_
    }), n.d(t, "polygonContains", function() {
        return W_
    }), n.d(t, "polygonLength", function() {
        return V_
    }), n.d(t, "quadtree", function() {
        return sr
    }), n.d(t, "queue", function() {
        return Na
    }), n.d(t, "randomUniform", function() {
        return K_
    }), n.d(t, "randomNormal", function() {
        return $_
    }), n.d(t, "randomLogNormal", function() {
        return Q_
    }), n.d(t, "randomBates", function() {
        return Z_
    }), n.d(t, "randomIrwinHall", function() {
        return J_
    }), n.d(t, "randomExponential", function() {
        return eb
    }), n.d(t, "request", function() {
        return tb
    }), n.d(t, "html", function() {
        return rb
    }), n.d(t, "json", function() {
        return ob
    }), n.d(t, "text", function() {
        return ib
    }), n.d(t, "xml", function() {
        return ab
    }), n.d(t, "csv", function() {
        return sb
    }), n.d(t, "tsv", function() {
        return cb
    }), n.d(t, "scaleBand", function() {
        return Ra
    }), n.d(t, "scalePoint", function() {
        return La
    }), n.d(t, "scaleIdentity", function() {
        return Ga
    }), n.d(t, "scaleLinear", function() {
        return Va
    }), n.d(t, "scaleLog", function() {
        return Za
    }), n.d(t, "scaleOrdinal", function() {
        return Oa
    }), n.d(t, "scaleImplicit", function() {
        return hb
    }), n.d(t, "scalePow", function() {
        return tu
    }), n.d(t, "scaleSqrt", function() {
        return nu
    }), n.d(t, "scaleQuantile", function() {
        return ru
    }), n.d(t, "scaleQuantize", function() {
        return ou
    }), n.d(t, "scaleThreshold", function() {
        return iu
    }), n.d(t, "scaleTime", function() {
        return Zx
    }), n.d(t, "scaleUtc", function() {
        return ew
    }), n.d(t, "schemeCategory10", function() {
        return nw
    }), n.d(t, "schemeCategory20b", function() {
        return rw
    }), n.d(t, "schemeCategory20c", function() {
        return ow
    }), n.d(t, "schemeCategory20", function() {
        return iw
    }), n.d(t, "interpolateCubehelixDefault", function() {
        return aw
    }), n.d(t, "interpolateRainbow", function() {
        return lw
    }), n.d(t, "interpolateWarm", function() {
        return uw
    }), n.d(t, "interpolateCool", function() {
        return sw
    }), n.d(t, "interpolateViridis", function() {
        return fw
    }), n.d(t, "interpolateMagma", function() {
        return dw
    }), n.d(t, "interpolateInferno", function() {
        return hw
    }), n.d(t, "interpolatePlasma", function() {
        return pw
    }), n.d(t, "scaleSequential", function() {
        return hs
    }), n.d(t, "creator", function() {
        return Jl
    }), n.d(t, "local", function() {
        return C
    }), n.d(t, "matcher", function() {
        return rf
    }), n.d(t, "mouse", function() {
        return lf
    }), n.d(t, "namespace", function() {
        return Ql
    }), n.d(t, "namespaces", function() {
        return $l
    }), n.d(t, "select", function() {
        return Yf
    }), n.d(t, "selectAll", function() {
        return Xf
    }), n.d(t, "selection", function() {
        return Gf
    }), n.d(t, "selector", function() {
        return ff
    }), n.d(t, "selectorAll", function() {
        return hf
    }), n.d(t, "style", function() {
        return X
    }), n.d(t, "touch", function() {
        return Kf
    }), n.d(t, "touches", function() {
        return $f
    }), n.d(t, "window", function() {
        return If
    }), n.d(t, "event", function() {
        return af
    }), n.d(t, "customEvent", function() {
        return I
    }), n.d(t, "arc", function() {
        return Mw
    }), n.d(t, "area", function() {
        return Pw
    }), n.d(t, "line", function() {
        return Nw
    }), n.d(t, "pie", function() {
        return Ow
    }), n.d(t, "areaRadial", function() {
        return Lw
    }), n.d(t, "radialArea", function() {
        return Lw
    }), n.d(t, "lineRadial", function() {
        return Dw
    }), n.d(t, "radialLine", function() {
        return Dw
    }), n.d(t, "pointRadial", function() {
        return Fw
    }), n.d(t, "linkHorizontal", function() {
        return Ds
    }), n.d(t, "linkVertical", function() {
        return Ls
    }), n.d(t, "linkRadial", function() {
        return Fs
    }), n.d(t, "symbol", function() {
        return nk
    }), n.d(t, "symbols", function() {
        return tk
    }), n.d(t, "symbolCircle", function() {
        return Uw
    }), n.d(t, "symbolCross", function() {
        return zw
    }), n.d(t, "symbolDiamond", function() {
        return qw
    }), n.d(t, "symbolSquare", function() {
        return Xw
    }), n.d(t, "symbolStar", function() {
        return Yw
    }), n.d(t, "symbolTriangle", function() {
        return $w
    }), n.d(t, "symbolWye", function() {
        return ek
    }), n.d(t, "curveBasisClosed", function() {
        return ik
    }), n.d(t, "curveBasisOpen", function() {
        return ak
    }), n.d(t, "curveBasis", function() {
        return ok
    }), n.d(t, "curveBundle", function() {
        return uk
    }), n.d(t, "curveCardinalClosed", function() {
        return ck
    }), n.d(t, "curveCardinalOpen", function() {
        return lk
    }), n.d(t, "curveCardinal", function() {
        return sk
    }), n.d(t, "curveCatmullRomClosed", function() {
        return dk
    }), n.d(t, "curveCatmullRomOpen", function() {
        return hk
    }), n.d(t, "curveCatmullRom", function() {
        return fk
    }), n.d(t, "curveLinearClosed", function() {
        return pk
    }), n.d(t, "curveLinear", function() {
        return Sw
    }), n.d(t, "curveMonotoneX", function() {
        return ic
    }), n.d(t, "curveMonotoneY", function() {
        return ac
    }), n.d(t, "curveNatural", function() {
        return mk
    }), n.d(t, "curveStep", function() {
        return gk
    }), n.d(t, "curveStepAfter", function() {
        return fc
    }), n.d(t, "curveStepBefore", function() {
        return lc
    }), n.d(t, "stack", function() {
        return _k
    }), n.d(t, "stackOffsetExpand", function() {
        return bk
    }), n.d(t, "stackOffsetDiverging", function() {
        return xk
    }), n.d(t, "stackOffsetNone", function() {
        return vk
    }), n.d(t, "stackOffsetSilhouette", function() {
        return wk
    }), n.d(t, "stackOffsetWiggle", function() {
        return kk
    }), n.d(t, "stackOrderAscending", function() {
        return Ek
    }), n.d(t, "stackOrderDescending", function() {
        return Ck
    }), n.d(t, "stackOrderInsideOut", function() {
        return Tk
    }), n.d(t, "stackOrderNone", function() {
        return yk
    }), n.d(t, "stackOrderReverse", function() {
        return Mk
    }), n.d(t, "timeInterval", function() {
        return au
    }), n.d(t, "timeMillisecond", function() {
        return wb
    }), n.d(t, "timeMilliseconds", function() {
        return kb
    }), n.d(t, "utcMillisecond", function() {
        return wb
    }), n.d(t, "utcMilliseconds", function() {
        return kb
    }), n.d(t, "timeSecond", function() {
        return Mb
    }), n.d(t, "timeSeconds", function() {
        return Sb
    }), n.d(t, "utcSecond", function() {
        return Mb
    }), n.d(t, "utcSeconds", function() {
        return Sb
    }), n.d(t, "timeMinute", function() {
        return Pb
    }), n.d(t, "timeMinutes", function() {
        return Ab
    }), n.d(t, "timeHour", function() {
        return Ob
    }), n.d(t, "timeHours", function() {
        return Rb
    }), n.d(t, "timeDay", function() {
        return Lb
    }), n.d(t, "timeDays", function() {
        return Fb
    }), n.d(t, "timeWeek", function() {
        return jb
    }), n.d(t, "timeWeeks", function() {
        return Vb
    }), n.d(t, "timeSunday", function() {
        return jb
    }), n.d(t, "timeSundays", function() {
        return Vb
    }), n.d(t, "timeMonday", function() {
        return Ub
    }), n.d(t, "timeMondays", function() {
        return Gb
    }), n.d(t, "timeTuesday", function() {
        return zb
    }), n.d(t, "timeTuesdays", function() {
        return Yb
    }), n.d(t, "timeWednesday", function() {
        return Hb
    }), n.d(t, "timeWednesdays", function() {
        return Xb
    }), n.d(t, "timeThursday", function() {
        return Bb
    }), n.d(t, "timeThursdays", function() {
        return Kb
    }), n.d(t, "timeFriday", function() {
        return qb
    }), n.d(t, "timeFridays", function() {
        return $b
    }), n.d(t, "timeSaturday", function() {
        return Wb
    }), n.d(t, "timeSaturdays", function() {
        return Qb
    }), n.d(t, "timeMonth", function() {
        return Zb
    }), n.d(t, "timeMonths", function() {
        return ex
    }), n.d(t, "timeYear", function() {
        return nx
    }), n.d(t, "timeYears", function() {
        return rx
    }), n.d(t, "utcMinute", function() {
        return ix
    }), n.d(t, "utcMinutes", function() {
        return ax
    }), n.d(t, "utcHour", function() {
        return sx
    }), n.d(t, "utcHours", function() {
        return cx
    }), n.d(t, "utcDay", function() {
        return fx
    }), n.d(t, "utcDays", function() {
        return dx
    }), n.d(t, "utcWeek", function() {
        return hx
    }), n.d(t, "utcWeeks", function() {
        return bx
    }), n.d(t, "utcSunday", function() {
        return hx
    }), n.d(t, "utcSundays", function() {
        return bx
    }), n.d(t, "utcMonday", function() {
        return px
    }), n.d(t, "utcMondays", function() {
        return xx
    }), n.d(t, "utcTuesday", function() {
        return mx
    }), n.d(t, "utcTuesdays", function() {
        return wx
    }), n.d(t, "utcWednesday", function() {
        return gx
    }), n.d(t, "utcWednesdays", function() {
        return kx
    }), n.d(t, "utcThursday", function() {
        return vx
    }), n.d(t, "utcThursdays", function() {
        return Ex
    }), n.d(t, "utcFriday", function() {
        return yx
    }), n.d(t, "utcFridays", function() {
        return Cx
    }), n.d(t, "utcSaturday", function() {
        return _x
    }), n.d(t, "utcSaturdays", function() {
        return Tx
    }), n.d(t, "utcMonth", function() {
        return Sx
    }), n.d(t, "utcMonths", function() {
        return Nx
    }), n.d(t, "utcYear", function() {
        return Lx
    }), n.d(t, "utcYears", function() {
        return Fx
    }), n.d(t, "timeFormatDefaultLocale", function() {
        return as
    }), n.d(t, "timeFormat", function() {
        return Ix
    }), n.d(t, "timeParse", function() {
        return Ox
    }), n.d(t, "utcFormat", function() {
        return Rx
    }), n.d(t, "utcParse", function() {
        return Dx
    }), n.d(t, "timeFormatLocale", function() {
        return du
    }), n.d(t, "isoFormat", function() {
        return qx
    }), n.d(t, "isoParse", function() {
        return Vx
    }), n.d(t, "now", function() {
        return _t
    }), n.d(t, "timer", function() {
        return wt
    }), n.d(t, "timerFlush", function() {
        return kt
    }), n.d(t, "timeout", function() {
        return _h
    }), n.d(t, "interval", function() {
        return bh
    }), n.d(t, "transition", function() {
        return an
    }), n.d(t, "active", function() {
        return Cp
    }), n.d(t, "interrupt", function() {
        return Ah
    }), n.d(t, "voronoi", function() {
        return Uk
    }), n.d(t, "zoom", function() {
        return qk
    }), n.d(t, "zoomTransform", function() {
        return Xc
    });
    n.d(t, "zoomIdentity", function() {
        return Hk
    })
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}, function(e, t, n) {
    e.exports = !n(13) && !n(16)(function() {
        return 7 != Object.defineProperty(n(50)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, n) {
    e.exports = n(15)
}, function(e, t, n) {
    var r = n(17),
        o = n(23),
        i = n(116)(!1),
        a = n(53)("IE_PROTO");
    e.exports = function(e, t) {
        var n, u = o(e),
            s = 0,
            c = [];
        for (n in u) n != a && r(u, n) && c.push(n);
        for (; t.length > s;) r(u, n = t[s++]) && (~i(c, n) || c.push(n));
        return c
    }
}, function(e, t, n) {
    var r = n(9).document;
    e.exports = r && r.documentElement
}, function(e, t, n) {
    var r = n(17),
        o = n(24),
        i = n(53)("IE_PROTO"),
        a = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = o(e), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
    }
}, function(e, t, n) {
    var r = n(11);
    e.exports = function(e, t, n, o) {
        try {
            return o ? t(r(n)[0], n[1]) : t(n)
        } catch (t) {
            var i = e.return;
            throw void 0 !== i && r(i.call(e)), t
        }
    }
}, function(e, t, n) {
    var r = n(22),
        o = n(5)("iterator"),
        i = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (r.Array === e || i[o] === e)
    }
}, function(e, t, n) {
    var r = n(11),
        o = n(26),
        i = n(5)("species");
    e.exports = function(e, t) {
        var n, a = r(e).constructor;
        return void 0 === a || void 0 == (n = r(a)[i]) ? t : o(n)
    }
}, function(e, t, n) {
    var r, o, i, a = n(14),
        u = n(122),
        s = n(77),
        c = n(50),
        l = n(9),
        f = l.process,
        d = l.setImmediate,
        h = l.clearImmediate,
        p = l.MessageChannel,
        m = l.Dispatch,
        g = 0,
        v = {},
        y = function() {
            var e = +this;
            if (v.hasOwnProperty(e)) {
                var t = v[e];
                delete v[e], t()
            }
        },
        _ = function(e) {
            y.call(e.data)
        };
    d && h || (d = function(e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return v[++g] = function() {
            u("function" == typeof e ? e : Function(e), t)
        }, r(g), g
    }, h = function(e) {
        delete v[e]
    }, "process" == n(25)(f) ? r = function(e) {
        f.nextTick(a(y, e, 1))
    } : m && m.now ? r = function(e) {
        m.now(a(y, e, 1))
    } : p ? (o = new p, i = o.port2, o.port1.onmessage = _, r = a(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(e) {
        l.postMessage(e + "", "*")
    }, l.addEventListener("message", _, !1)) : r = "onreadystatechange" in c("script") ? function(e) {
        s.appendChild(c("script")).onreadystatechange = function() {
            s.removeChild(this), y.call(e)
        }
    } : function(e) {
        setTimeout(a(y, e, 1), 0)
    }), e.exports = {
        set: d,
        clear: h
    }
}, function(e, t) {
    e.exports = function(e) {
        try {
            return {
                e: !1,
                v: e()
            }
        } catch (e) {
            return {
                e: !0,
                v: e
            }
        }
    }
}, function(e, t, n) {
    var r = n(11),
        o = n(12),
        i = n(59);
    e.exports = function(e, t) {
        if (r(e), o(t) && t.constructor === e) return t;
        var n = i.f(e);
        return (0, n.resolve)(t), n.promise
    }
}, function(e, t, n) {
    "use strict";
    var r = n(9),
        o = n(3),
        i = n(10),
        a = n(13),
        u = n(5)("species");
    e.exports = function(e) {
        var t = "function" == typeof o[e] ? o[e] : r[e];
        a && t && !t[u] && i.f(t, u, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(e, t, n) {
    var r = n(5)("iterator"),
        o = !1;
    try {
        var i = [7][r]();
        i.return = function() {
            o = !0
        }, Array.from(i, function() {
            throw 2
        })
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !o) return !1;
        var n = !1;
        try {
            var i = [7],
                a = i[r]();
            a.next = function() {
                return {
                    done: n = !0
                }
            }, i[r] = function() {
                return a
            }, e(i)
        } catch (e) {}
        return n
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var o = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable;
    e.exports = function() {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                    return t[e]
                }).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                r[e] = e
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (e) {
            return !1
        }
    }() ? Object.assign : function(e, t) {
        for (var n, u, s = r(e), c = 1; c < arguments.length; c++) {
            n = Object(arguments[c]);
            for (var l in n) i.call(n, l) && (s[l] = n[l]);
            if (o) {
                u = o(n);
                for (var f = 0; f < u.length; f++) a.call(n, u[f]) && (s[u[f]] = n[u[f]])
            }
        }
        return s
    }
}, function(e, t, n) {
    "use strict";
    var r = {};
    e.exports = r
}, function(e, t, n) {
    e.exports = {
        default: n(138),
        __esModule: !0
    }
}, function(e, t, n) {
    var r = n(4),
        o = n(3),
        i = n(16);
    e.exports = function(e, t) {
        var n = (o.Object || {})[e] || Object[e],
            a = {};
        a[e] = t(n), r(r.S + r.F * i(function() {
            n(1)
        }), "Object", a)
    }
}, function(e, t, n) {
    var r = n(25);
    e.exports = Array.isArray || function(e) {
        return "Array" == r(e)
    }
}, function(e, t, n) {
    var r = n(76),
        o = n(55).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
        return r(e, o)
    }
}, function(e, t, n) {
    var r = n(44),
        o = n(27),
        i = n(23),
        a = n(51),
        u = n(17),
        s = n(74),
        c = Object.getOwnPropertyDescriptor;
    t.f = n(13) ? c : function(e, t) {
        if (e = i(e), t = a(t, !0), s) try {
            return c(e, t)
        } catch (e) {}
        if (u(e, t)) return o(!r.f.call(e, t), e[t])
    }
}, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function r() {
        throw new Error("clearTimeout has not been defined")
    }

    function o(e) {
        if (l === setTimeout) return setTimeout(e, 0);
        if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);
        try {
            return l(e, 0)
        } catch (t) {
            try {
                return l.call(null, e, 0)
            } catch (t) {
                return l.call(this, e, 0)
            }
        }
    }

    function i(e) {
        if (f === clearTimeout) return clearTimeout(e);
        if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);
        try {
            return f(e)
        } catch (t) {
            try {
                return f.call(null, e)
            } catch (t) {
                return f.call(this, e)
            }
        }
    }

    function a() {
        m && h && (m = !1, h.length ? p = h.concat(p) : g = -1, p.length && u())
    }

    function u() {
        if (!m) {
            var e = o(a);
            m = !0;
            for (var t = p.length; t;) {
                for (h = p, p = []; ++g < t;) h && h[g].run();
                g = -1, t = p.length
            }
            h = null, m = !1, i(e)
        }
    }

    function s(e, t) {
        this.fun = e, this.array = t
    }

    function c() {}
    var l, f, d = e.exports = {};
    ! function() {
        try {
            l = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            l = n
        }
        try {
            f = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (e) {
            f = r
        }
    }();
    var h, p = [],
        m = !1,
        g = -1;
    d.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        p.push(new s(e, t)), 1 !== p.length || m || o(u)
    }, s.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = c, d.addListener = c, d.once = c, d.off = c, d.removeListener = c, d.removeAllListeners = c, d.emit = c, d.prependListener = c, d.prependOnceListener = c, d.listeners = function(e) {
        return []
    }, d.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, d.cwd = function() {
        return "/"
    }, d.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, d.umask = function() {
        return 0
    }
}, function(e, t, n) {
    "use strict";
    var r = n(10).f,
        o = n(36),
        i = n(60),
        a = n(14),
        u = n(58),
        s = n(31),
        c = n(49),
        l = n(73),
        f = n(85),
        d = n(13),
        h = n(67).fastKey,
        p = n(69),
        m = d ? "_s" : "size",
        g = function(e, t) {
            var n, r = h(t);
            if ("F" !== r) return e._i[r];
            for (n = e._f; n; n = n.n)
                if (n.k == t) return n
        };
    e.exports = {
        getConstructor: function(e, t, n, c) {
            var l = e(function(e, r) {
                u(e, l, t, "_i"), e._t = t, e._i = o(null), e._f = void 0, e._l = void 0, e[m] = 0, void 0 != r && s(r, n, e[c], e)
            });
            return i(l.prototype, {
                clear: function() {
                    for (var e = p(this, t), n = e._i, r = e._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
                    e._f = e._l = void 0, e[m] = 0
                },
                delete: function(e) {
                    var n = p(this, t),
                        r = g(n, e);
                    if (r) {
                        var o = r.n,
                            i = r.p;
                        delete n._i[r.i], r.r = !0, i && (i.n = o), o && (o.p = i), n._f == r && (n._f = o), n._l == r && (n._l = i), n[m]--
                    }
                    return !!r
                },
                forEach: function(e) {
                    p(this, t);
                    for (var n, r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                        for (r(n.v, n.k, this); n && n.r;) n = n.p
                },
                has: function(e) {
                    return !!g(p(this, t), e)
                }
            }), d && r(l.prototype, "size", {
                get: function() {
                    return p(this, t)[m]
                }
            }), l
        },
        def: function(e, t, n) {
            var r, o, i = g(e, t);
            return i ? i.v = n : (e._l = i = {
                i: o = h(t, !0),
                k: t,
                v: n,
                p: r = e._l,
                n: void 0,
                r: !1
            }, e._f || (e._f = i), r && (r.n = i), e[m]++, "F" !== o && (e._i[o] = i)), e
        },
        getEntry: g,
        setStrong: function(e, t, n) {
            c(e, t, function(e, n) {
                this._t = p(e, t), this._k = n, this._l = void 0
            }, function() {
                for (var e = this, t = e._k, n = e._l; n && n.r;) n = n.p;
                return e._t && (e._l = n = n ? n.n : e._t._f) ? "keys" == t ? l(0, n.k) : "values" == t ? l(0, n.v) : l(0, [n.k, n.v]) : (e._t = void 0, l(1))
            }, n ? "entries" : "values", !n, !0), f(t)
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(9),
        o = n(4),
        i = n(67),
        a = n(16),
        u = n(15),
        s = n(60),
        c = n(31),
        l = n(58),
        f = n(12),
        d = n(29),
        h = n(10).f,
        p = n(171)(0),
        m = n(13);
    e.exports = function(e, t, n, g, v, y) {
        var _ = r[e],
            b = _,
            x = v ? "set" : "add",
            w = b && b.prototype,
            k = {};
        return m && "function" == typeof b && (y || w.forEach && !a(function() {
            (new b).entries().next()
        })) ? (b = t(function(t, n) {
            l(t, b, e, "_c"), t._c = new _, void 0 != n && c(n, v, t[x], t)
        }), p("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(e) {
            var t = "add" == e || "set" == e;
            e in w && (!y || "clear" != e) && u(b.prototype, e, function(n, r) {
                if (l(this, b, e), !t && y && !f(n)) return "get" == e && void 0;
                var o = this._c[e](0 === n ? 0 : n, r);
                return t ? this : o
            })
        }), y || h(b.prototype, "size", {
            get: function() {
                return this._c.size
            }
        })) : (b = g.getConstructor(t, e, v, x), s(b.prototype, n), i.NEED = !0), d(b, e), k[e] = b, o(o.G + o.W + o.F, k), y || g.setStrong(b, e, v), b
    }
}, function(e, t, n) {
    var r = n(39),
        o = n(175);
    e.exports = function(e) {
        return function() {
            if (r(this) != e) throw TypeError(e + "#toJSON isn't generic");
            return o(this)
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(4);
    e.exports = function(e) {
        r(r.S, e, {
            of: function() {
                for (var e = arguments.length, t = Array(e); e--;) t[e] = arguments[e];
                return new this(t)
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = n(4),
        o = n(26),
        i = n(14),
        a = n(31);
    e.exports = function(e) {
        r(r.S, e, {
            from: function(e) {
                var t, n, r, u, s = arguments[1];
                return o(this), t = void 0 !== s, t && o(s), void 0 == e ? new this : (n = [], t ? (r = 0, u = i(s, arguments[2], 2), a(e, !1, function(e) {
                    n.push(u(e, r++))
                })) : a(e, !1, n.push, n), new this(n))
            }
        })
    }
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        for (var n in e)
            if (t[n] !== e[n]) return !1;
        for (var r in t)
            if (t[r] !== e[r]) return !1;
        return !0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o() {
        return [E.default.createElement("meta", {
            charSet: "utf-8",
            className: "next-head"
        })]
    }

    function i(e) {
        var t;
        return (t = e.map(function(e) {
            return e.props.children
        }).map(function(e) {
            return E.default.Children.toArray(e)
        }).reduce(function(e, t) {
            return e.concat(t)
        }, []).reverse()).concat.apply(t, (0, d.default)(o())).filter(function(e) {
            return !!e
        }).filter(s()).reverse().map(function(e) {
            var t = (e.className ? e.className + " " : "") + "next-head";
            return E.default.cloneElement(e, {
                className: t
            })
        })
    }

    function a(e) {
        return e
    }

    function u(e) {
        this.context && this.context.headManager && this.context.headManager.updateHead(e)
    }

    function s() {
        var e = new l.default,
            t = new l.default,
            n = {};
        return function(r) {
            switch (r.type) {
                case "title":
                case "base":
                    if (e.has(r.type)) return !1;
                    e.add(r.type);
                    break;
                case "meta":
                    for (var o = 0, i = P.length; o < i; o++) {
                        var a = P[o];
                        if (r.props.hasOwnProperty(a))
                            if ("charSet" === a) {
                                if (t.has(a)) return !1;
                                t.add(a)
                            } else {
                                var u = r.props[a],
                                    s = n[a] || new l.default;
                                if (s.has(u)) return !1;
                                s.add(u), n[a] = s
                            }
                    }
            }
            return !0
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = n(34),
        l = r(c),
        f = n(103),
        d = r(f),
        h = n(6),
        p = r(h),
        m = n(0),
        g = r(m),
        v = n(1),
        y = r(v),
        _ = n(7),
        b = r(_),
        x = n(8),
        w = r(x);
    t.defaultHead = o;
    var k = n(2),
        E = r(k),
        C = n(32),
        T = r(C),
        M = n(192),
        S = r(M),
        N = function(e) {
            function t() {
                return (0, g.default)(this, t), (0, b.default)(this, (t.__proto__ || (0, p.default)(t)).apply(this, arguments))
            }
            return (0, w.default)(t, e), (0, y.default)(t, [{
                key: "render",
                value: function() {
                    return null
                }
            }]), t
        }(E.default.Component);
    N.contextTypes = {
        headManager: T.default.object
    };
    var P = ["name", "httpEquiv", "charSet", "itemProp", "property"];
    t.default = (0, S.default)(i, u, a)(N)
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(104),
        o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r);
    t.default = function(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return (0, o.default)(e)
    }
}, function(e, t, n) {
    e.exports = {
        default: n(189),
        __esModule: !0
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o() {
        var e = w.cssRules();
        return w.flush(), new a.default(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(106),
        a = r(i),
        u = n(42),
        s = r(u),
        c = n(6),
        l = r(c),
        f = n(0),
        d = r(f),
        h = n(1),
        p = r(h),
        m = n(7),
        g = r(m),
        v = n(8),
        y = r(v);
    t.flush = o;
    var _ = n(2),
        b = n(201),
        x = r(b),
        w = new x.default,
        k = function(e) {
            function t() {
                return (0, d.default)(this, t), (0, g.default)(this, (t.__proto__ || (0, l.default)(t)).apply(this, arguments))
            }
            return (0, y.default)(t, e), (0, p.default)(t, [{
                key: "componentWillMount",
                value: function() {
                    w.add(this.props)
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e) {
                    return this.props.css !== e.css
                }
            }, {
                key: "componentWillUpdate",
                value: function(e) {
                    w.update(this.props, e)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    w.remove(this.props)
                }
            }, {
                key: "render",
                value: function() {
                    return null
                }
            }], [{
                key: "dynamic",
                value: function(e) {
                    return e.map(function(e) {
                        var t = (0, s.default)(e, 2),
                            n = t[0],
                            r = t[1];
                        return w.computeId(n, r)
                    }).join(" ")
                }
            }]), t
        }(_.Component);
    t.default = k
}, function(e, t, n) {
    e.exports = {
        default: n(196),
        __esModule: !0
    }
}, function(e, t, n) {
    "use strict";
    var r = n(108);
    (0, function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(r).default)().catch(function(e) {
        console.error(e.message + "\n" + e.stack)
    })
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        $ ? (y.default.hydrate(e, t), $ = !1) : y.default.render(e, t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.renderError = t.render = t.ErrorComponent = t.router = void 0;
    var i = n(45),
        a = r(i),
        u = n(46),
        s = r(u),
        c = n(57),
        l = r(c),
        f = n(30),
        d = r(f),
        h = t.render = function() {
            var e = (0, l.default)(a.default.mark(function e(t) {
                return a.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!t.err || t.err.ignore) {
                                e.next = 4;
                                break
                            }
                            return e.next = 3, p(t.err);
                        case 3:
                            return e.abrupt("return");
                        case 4:
                            return e.prev = 4, e.next = 7, m(t);
                        case 7:
                            e.next = 15;
                            break;
                        case 9:
                            if (e.prev = 9, e.t0 = e.catch(4), !e.t0.abort) {
                                e.next = 13;
                                break
                            }
                            return e.abrupt("return");
                        case 13:
                            return e.next = 15, p(e.t0);
                        case 15:
                        case "end":
                            return e.stop()
                    }
                }, e, this, [
                    [4, 9]
                ])
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        p = t.renderError = function() {
            var e = (0, l.default)(a.default.mark(function e(t) {
                var n, r, i, u;
                return a.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (n = !0, y.default.unmountComponentAtNode(W), r = t.message + "\n" + t.stack, console.error(r), !n) {
                                e.next = 12;
                                break
                            }
                            return i = {
                                err: t,
                                pathname: D,
                                query: L,
                                asPath: H
                            }, e.next = 8, (0, T.loadGetInitialProps)(X, i);
                        case 8:
                            u = e.sent, o((0, g.createElement)(X, u), V), e.next = 13;
                            break;
                        case 12:
                            o((0, g.createElement)(S.default, {
                                error: t
                            }), V);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        m = function() {
            var e = (0, l.default)(a.default.mark(function e(t) {
                var n, r, i, u, s, c = t.Component,
                    l = t.props,
                    f = t.hash,
                    d = t.err,
                    h = t.emitter;
                return a.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (l || !c || c === X || G.Component !== X) {
                                e.next = 5;
                                break
                            }
                            return n = Y, r = n.pathname, i = n.query, u = n.asPath, e.next = 4, (0, T.loadGetInitialProps)(c, {
                                err: d,
                                pathname: r,
                                query: i,
                                asPath: u
                            });
                        case 4:
                            l = e.sent;
                        case 5:
                            h && h.emit("before-reactdom-render", {
                                Component: c,
                                ErrorComponent: X
                            }), c = c || G.Component, l = l || G.props, s = {
                                Component: c,
                                props: l,
                                hash: f,
                                err: d,
                                router: Y,
                                headManager: q
                            }, G = s, y.default.unmountComponentAtNode(V), o((0, g.createElement)(C.default, s), W), h && h.emit("after-reactdom-render", {
                                Component: c,
                                ErrorComponent: X
                            });
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        g = n(2),
        v = n(127),
        y = r(v),
        _ = n(137),
        b = r(_),
        x = n(62),
        w = n(70),
        k = r(w),
        E = n(186),
        C = r(E),
        T = n(33),
        M = n(187),
        S = r(M),
        N = n(193),
        P = r(N);
    window.Promise || (window.Promise = d.default);
    var A = window,
        I = A.__NEXT_DATA__,
        O = I.props,
        R = I.err,
        D = I.pathname,
        L = I.query,
        F = I.buildId,
        j = I.chunks,
        U = I.assetPrefix,
        z = A.location,
        H = (0, T.getURL)(),
        B = new P.default(F, U);
    window.__NEXT_LOADED_PAGES__.forEach(function(e) {
        var t = e.route,
            n = e.fn;
        B.registerPage(t, n)
    }), delete window.__NEXT_LOADED_PAGES__, window.__NEXT_LOADED_CHUNKS__.forEach(function(e) {
        var t = e.chunkName,
            n = e.fn;
        B.registerChunk(t, n)
    }), delete window.__NEXT_LOADED_CHUNKS__, window.__NEXT_REGISTER_PAGE = B.registerPage.bind(B), window.__NEXT_REGISTER_CHUNK = B.registerChunk.bind(B);
    var q = new b.default,
        W = document.getElementById("__next"),
        V = document.getElementById("__next-error"),
        G = void 0,
        Y = t.router = void 0,
        X = t.ErrorComponent = void 0,
        K = void 0;
    t.default = (0, l.default)(a.default.mark(function e() {
        var n, r, o, i, u, c, l, f;
        return a.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    n = !0, r = !1, o = void 0, e.prev = 3, i = (0, s.default)(j);
                case 5:
                    if (n = (u = i.next()).done) {
                        e.next = 12;
                        break
                    }
                    return c = u.value, e.next = 9, B.waitForChunk(c);
                case 9:
                    n = !0, e.next = 5;
                    break;
                case 12:
                    e.next = 18;
                    break;
                case 14:
                    e.prev = 14, e.t0 = e.catch(3), r = !0, o = e.t0;
                case 18:
                    e.prev = 18, e.prev = 19, !n && i.return && i.return();
                case 21:
                    if (e.prev = 21, !r) {
                        e.next = 24;
                        break
                    }
                    throw o;
                case 24:
                    return e.finish(21);
                case 25:
                    return e.finish(18);
                case 26:
                    return e.next = 28, B.loadPage("/_error");
                case 28:
                    return t.ErrorComponent = X = e.sent, e.prev = 29, e.next = 32, B.loadPage(D);
                case 32:
                    K = e.sent, e.next = 39;
                    break;
                case 35:
                    e.prev = 35, e.t1 = e.catch(29), console.error(e.t1.message + "\n" + e.t1.stack), K = X;
                case 39:
                    return t.router = Y = (0, x.createRouter)(D, L, H, {
                        pageLoader: B,
                        Component: K,
                        ErrorComponent: X,
                        err: R
                    }), l = new k.default, Y.subscribe(function(e) {
                        var t = e.Component,
                            n = e.props,
                            r = e.hash,
                            o = e.err;
                        h({
                            Component: t,
                            props: n,
                            err: o,
                            hash: r,
                            emitter: l
                        })
                    }), f = z.hash.substring(1), h({
                        Component: K,
                        props: O,
                        hash: f,
                        err: R,
                        emitter: l
                    }), e.abrupt("return", l);
                case 45:
                case "end":
                    return e.stop()
            }
        }, e, void 0, [
            [3, 14, 18, 26],
            [19, , 21, 25],
            [29, 35]
        ])
    }));
    var $ = !0
}, function(e, t, n) {
    var r = function() {
            return this
        }() || Function("return this")(),
        o = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
        i = o && r.regeneratorRuntime;
    if (r.regeneratorRuntime = void 0, e.exports = n(110), o) r.regeneratorRuntime = i;
    else try {
        delete r.regeneratorRuntime
    } catch (e) {
        r.regeneratorRuntime = void 0
    }
}, function(e, t) {
    ! function(t) {
        "use strict";

        function n(e, t, n, r) {
            var i = t && t.prototype instanceof o ? t : o,
                a = Object.create(i.prototype),
                u = new h(r || []);
            return a._invoke = c(e, n, u), a
        }

        function r(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }

        function o() {}

        function i() {}

        function a() {}

        function u(e) {
            ["next", "throw", "return"].forEach(function(t) {
                e[t] = function(e) {
                    return this._invoke(t, e)
                }
            })
        }

        function s(e) {
            function t(n, o, i, a) {
                var u = r(e[n], e, o);
                if ("throw" !== u.type) {
                    var s = u.arg,
                        c = s.value;
                    return c && "object" == typeof c && y.call(c, "__await") ? Promise.resolve(c.__await).then(function(e) {
                        t("next", e, i, a)
                    }, function(e) {
                        t("throw", e, i, a)
                    }) : Promise.resolve(c).then(function(e) {
                        s.value = e, i(s)
                    }, a)
                }
                a(u.arg)
            }

            function n(e, n) {
                function r() {
                    return new Promise(function(r, o) {
                        t(e, n, r, o)
                    })
                }
                return o = o ? o.then(r, r) : r()
            }
            var o;
            this._invoke = n
        }

        function c(e, t, n) {
            var o = C;
            return function(i, a) {
                if (o === M) throw new Error("Generator is already running");
                if (o === S) {
                    if ("throw" === i) throw a;
                    return m()
                }
                for (n.method = i, n.arg = a;;) {
                    var u = n.delegate;
                    if (u) {
                        var s = l(u, n);
                        if (s) {
                            if (s === N) continue;
                            return s
                        }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                        if (o === C) throw o = S, n.arg;
                        n.dispatchException(n.arg)
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    o = M;
                    var c = r(e, t, n);
                    if ("normal" === c.type) {
                        if (o = n.done ? S : T, c.arg === N) continue;
                        return {
                            value: c.arg,
                            done: n.done
                        }
                    }
                    "throw" === c.type && (o = S, n.method = "throw", n.arg = c.arg)
                }
            }
        }

        function l(e, t) {
            var n = e.iterator[t.method];
            if (n === g) {
                if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return", t.arg = g, l(e, t), "throw" === t.method)) return N;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return N
            }
            var o = r(n, e.iterator, t.arg);
            if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, N;
            var i = o.arg;
            return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = g), t.delegate = null, N) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, N)
        }

        function f(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function d(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function h(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(f, this), this.reset(!0)
        }

        function p(e) {
            if (e) {
                var t = e[b];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var n = -1,
                        r = function t() {
                            for (; ++n < e.length;)
                                if (y.call(e, n)) return t.value = e[n], t.done = !1, t;
                            return t.value = g, t.done = !0, t
                        };
                    return r.next = r
                }
            }
            return {
                next: m
            }
        }

        function m() {
            return {
                value: g,
                done: !0
            }
        }
        var g, v = Object.prototype,
            y = v.hasOwnProperty,
            _ = "function" == typeof Symbol ? Symbol : {},
            b = _.iterator || "@@iterator",
            x = _.asyncIterator || "@@asyncIterator",
            w = _.toStringTag || "@@toStringTag",
            k = "object" == typeof e,
            E = t.regeneratorRuntime;
        if (E) return void(k && (e.exports = E));
        E = t.regeneratorRuntime = k ? e.exports : {}, E.wrap = n;
        var C = "suspendedStart",
            T = "suspendedYield",
            M = "executing",
            S = "completed",
            N = {},
            P = {};
        P[b] = function() {
            return this
        };
        var A = Object.getPrototypeOf,
            I = A && A(A(p([])));
        I && I !== v && y.call(I, b) && (P = I);
        var O = a.prototype = o.prototype = Object.create(P);
        i.prototype = O.constructor = a, a.constructor = i, a[w] = i.displayName = "GeneratorFunction", E.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === i || "GeneratorFunction" === (t.displayName || t.name))
        }, E.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : (e.__proto__ = a, w in e || (e[w] = "GeneratorFunction")), e.prototype = Object.create(O), e
        }, E.awrap = function(e) {
            return {
                __await: e
            }
        }, u(s.prototype), s.prototype[x] = function() {
            return this
        }, E.AsyncIterator = s, E.async = function(e, t, r, o) {
            var i = new s(n(e, t, r, o));
            return E.isGeneratorFunction(t) ? i : i.next().then(function(e) {
                return e.done ? e.value : i.next()
            })
        }, u(O), O[w] = "Generator", O[b] = function() {
            return this
        }, O.toString = function() {
            return "[object Generator]"
        }, E.keys = function(e) {
            var t = [];
            for (var n in e) t.push(n);
            return t.reverse(),
                function n() {
                    for (; t.length;) {
                        var r = t.pop();
                        if (r in e) return n.value = r, n.done = !1, n
                    }
                    return n.done = !0, n
                }
        }, E.values = p, h.prototype = {
            constructor: h,
            reset: function(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = g, this.done = !1, this.delegate = null, this.method = "next", this.arg = g, this.tryEntries.forEach(d), !e)
                    for (var t in this) "t" === t.charAt(0) && y.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = g)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0],
                    t = e.completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            },
            dispatchException: function(e) {
                function t(t, r) {
                    return i.type = "throw", i.arg = e, n.next = t, r && (n.method = "next", n.arg = g), !!r
                }
                if (this.done) throw e;
                for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                    var o = this.tryEntries[r],
                        i = o.completion;
                    if ("root" === o.tryLoc) return t("end");
                    if (o.tryLoc <= this.prev) {
                        var a = y.call(o, "catchLoc"),
                            u = y.call(o, "finallyLoc");
                        if (a && u) {
                            if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc) return t(o.finallyLoc)
                        } else if (a) {
                            if (this.prev < o.catchLoc) return t(o.catchLoc, !0)
                        } else {
                            if (!u) throw new Error("try statement without catch or finally");
                            if (this.prev < o.finallyLoc) return t(o.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (r.tryLoc <= this.prev && y.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                        var o = r;
                        break
                    }
                }
                o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                var i = o ? o.completion : {};
                return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, N) : this.complete(i)
            },
            complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), N
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), d(n), N
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var o = r.arg;
                            d(n)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(e, t, n) {
                return this.delegate = {
                    iterator: p(e),
                    resultName: t,
                    nextLoc: n
                }, "next" === this.method && (this.arg = g), N
            }
        }
    }(function() {
        return this
    }() || Function("return this")())
}, function(e, t, n) {
    n(21), n(18), e.exports = n(119)
}, function(e, t, n) {
    "use strict";
    var r = n(113),
        o = n(73),
        i = n(22),
        a = n(23);
    e.exports = n(49)(Array, "Array", function(e, t) {
        this._t = a(e), this._i = 0, this._k = t
    }, function() {
        var e = this._t,
            t = this._k,
            n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, o(1)) : "keys" == t ? o(0, n) : "values" == t ? o(0, e[n]) : o(0, [n, e[n]])
    }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
}, function(e, t) {
    e.exports = function() {}
}, function(e, t, n) {
    "use strict";
    var r = n(36),
        o = n(27),
        i = n(29),
        a = {};
    n(15)(a, n(5)("iterator"), function() {
        return this
    }), e.exports = function(e, t, n) {
        e.prototype = r(a, {
            next: o(1, n)
        }), i(e, t + " Iterator")
    }
}, function(e, t, n) {
    var r = n(10),
        o = n(11),
        i = n(28);
    e.exports = n(13) ? Object.defineProperties : function(e, t) {
        o(e);
        for (var n, a = i(t), u = a.length, s = 0; u > s;) r.f(e, n = a[s++], t[n]);
        return e
    }
}, function(e, t, n) {
    var r = n(23),
        o = n(37),
        i = n(117);
    e.exports = function(e) {
        return function(t, n, a) {
            var u, s = r(t),
                c = o(s.length),
                l = i(a, c);
            if (e && n != n) {
                for (; c > l;)
                    if ((u = s[l++]) != u) return !0
            } else
                for (; c > l; l++)
                    if ((e || l in s) && s[l] === n) return e || l || 0; return !e && -1
        }
    }
}, function(e, t, n) {
    var r = n(52),
        o = Math.max,
        i = Math.min;
    e.exports = function(e, t) {
        return e = r(e), e < 0 ? o(e + t, 0) : i(e, t)
    }
}, function(e, t, n) {
    var r = n(52),
        o = n(48);
    e.exports = function(e) {
        return function(t, n) {
            var i, a, u = String(o(t)),
                s = r(n),
                c = u.length;
            return s < 0 || s >= c ? e ? "" : void 0 : (i = u.charCodeAt(s), i < 55296 || i > 56319 || s + 1 === c || (a = u.charCodeAt(s + 1)) < 56320 || a > 57343 ? e ? u.charAt(s) : i : e ? u.slice(s, s + 2) : a - 56320 + (i - 55296 << 10) + 65536)
        }
    }
}, function(e, t, n) {
    var r = n(11),
        o = n(56);
    e.exports = n(3).getIterator = function(e) {
        var t = o(e);
        if ("function" != typeof t) throw TypeError(e + " is not iterable!");
        return r(t.call(e))
    }
}, function(e, t, n) {
    n(40), n(18), n(21), n(121), n(124), n(125), e.exports = n(3).Promise
}, function(e, t, n) {
    "use strict";
    var r, o, i, a, u = n(35),
        s = n(9),
        c = n(14),
        l = n(39),
        f = n(4),
        d = n(12),
        h = n(26),
        p = n(58),
        m = n(31),
        g = n(81),
        v = n(82).set,
        y = n(123)(),
        _ = n(59),
        b = n(83),
        x = n(84),
        w = s.TypeError,
        k = s.process,
        E = s.Promise,
        C = "process" == l(k),
        T = function() {},
        M = o = _.f,
        S = !! function() {
            try {
                var e = E.resolve(1),
                    t = (e.constructor = {})[n(5)("species")] = function(e) {
                        e(T, T)
                    };
                return (C || "function" == typeof PromiseRejectionEvent) && e.then(T) instanceof t
            } catch (e) {}
        }(),
        N = function(e) {
            var t;
            return !(!d(e) || "function" != typeof(t = e.then)) && t
        },
        P = function(e, t) {
            if (!e._n) {
                e._n = !0;
                var n = e._c;
                y(function() {
                    for (var r = e._v, o = 1 == e._s, i = 0; n.length > i;) ! function(t) {
                        var n, i, a = o ? t.ok : t.fail,
                            u = t.resolve,
                            s = t.reject,
                            c = t.domain;
                        try {
                            a ? (o || (2 == e._h && O(e), e._h = 1), !0 === a ? n = r : (c && c.enter(), n = a(r), c && c.exit()), n === t.promise ? s(w("Promise-chain cycle")) : (i = N(n)) ? i.call(n, u, s) : u(n)) : s(r)
                        } catch (e) {
                            s(e)
                        }
                    }(n[i++]);
                    e._c = [], e._n = !1, t && !e._h && A(e)
                })
            }
        },
        A = function(e) {
            v.call(s, function() {
                var t, n, r, o = e._v,
                    i = I(e);
                if (i && (t = b(function() {
                        C ? k.emit("unhandledRejection", o, e) : (n = s.onunhandledrejection) ? n({
                            promise: e,
                            reason: o
                        }) : (r = s.console) && r.error && r.error("Unhandled promise rejection", o)
                    }), e._h = C || I(e) ? 2 : 1), e._a = void 0, i && t.e) throw t.v
            })
        },
        I = function(e) {
            if (1 == e._h) return !1;
            for (var t, n = e._a || e._c, r = 0; n.length > r;)
                if (t = n[r++], t.fail || !I(t.promise)) return !1;
            return !0
        },
        O = function(e) {
            v.call(s, function() {
                var t;
                C ? k.emit("rejectionHandled", e) : (t = s.onrejectionhandled) && t({
                    promise: e,
                    reason: e._v
                })
            })
        },
        R = function(e) {
            var t = this;
            t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), P(t, !0))
        },
        D = function(e) {
            var t, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === e) throw w("Promise can't be resolved itself");
                    (t = N(e)) ? y(function() {
                        var r = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            t.call(e, c(D, r, 1), c(R, r, 1))
                        } catch (e) {
                            R.call(r, e)
                        }
                    }): (n._v = e, n._s = 1, P(n, !1))
                } catch (e) {
                    R.call({
                        _w: n,
                        _d: !1
                    }, e)
                }
            }
        };
    S || (E = function(e) {
        p(this, E, "Promise", "_h"), h(e), r.call(this);
        try {
            e(c(D, this, 1), c(R, this, 1))
        } catch (e) {
            R.call(this, e)
        }
    }, r = function(e) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }, r.prototype = n(60)(E.prototype, {
        then: function(e, t) {
            var n = M(g(this, E));
            return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = C ? k.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && P(this, !1), n.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }), i = function() {
        var e = new r;
        this.promise = e, this.resolve = c(D, e, 1), this.reject = c(R, e, 1)
    }, _.f = M = function(e) {
        return e === E || e === a ? new i(e) : o(e)
    }), f(f.G + f.W + f.F * !S, {
        Promise: E
    }), n(29)(E, "Promise"), n(85)("Promise"), a = n(3).Promise, f(f.S + f.F * !S, "Promise", {
        reject: function(e) {
            var t = M(this);
            return (0, t.reject)(e), t.promise
        }
    }), f(f.S + f.F * (u || !S), "Promise", {
        resolve: function(e) {
            return x(u && this === a ? E : this, e)
        }
    }), f(f.S + f.F * !(S && n(86)(function(e) {
        E.all(e).catch(T)
    })), "Promise", {
        all: function(e) {
            var t = this,
                n = M(t),
                r = n.resolve,
                o = n.reject,
                i = b(function() {
                    var n = [],
                        i = 0,
                        a = 1;
                    m(e, !1, function(e) {
                        var u = i++,
                            s = !1;
                        n.push(void 0), a++, t.resolve(e).then(function(e) {
                            s || (s = !0, n[u] = e, --a || r(n))
                        }, o)
                    }), --a || r(n)
                });
            return i.e && o(i.v), n.promise
        },
        race: function(e) {
            var t = this,
                n = M(t),
                r = n.reject,
                o = b(function() {
                    m(e, !1, function(e) {
                        t.resolve(e).then(n.resolve, r)
                    })
                });
            return o.e && r(o.v), n.promise
        }
    })
}, function(e, t) {
    e.exports = function(e, t, n) {
        var r = void 0 === n;
        switch (t.length) {
            case 0:
                return r ? e() : e.call(n);
            case 1:
                return r ? e(t[0]) : e.call(n, t[0]);
            case 2:
                return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
                return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
                return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
    }
}, function(e, t, n) {
    var r = n(9),
        o = n(82).set,
        i = r.MutationObserver || r.WebKitMutationObserver,
        a = r.process,
        u = r.Promise,
        s = "process" == n(25)(a);
    e.exports = function() {
        var e, t, n, c = function() {
            var r, o;
            for (s && (r = a.domain) && r.exit(); e;) {
                o = e.fn, e = e.next;
                try {
                    o()
                } catch (r) {
                    throw e ? n() : t = void 0, r
                }
            }
            t = void 0, r && r.enter()
        };
        if (s) n = function() {
            a.nextTick(c)
        };
        else if (i) {
            var l = !0,
                f = document.createTextNode("");
            new i(c).observe(f, {
                characterData: !0
            }), n = function() {
                f.data = l = !l
            }
        } else if (u && u.resolve) {
            var d = u.resolve();
            n = function() {
                d.then(c)
            }
        } else n = function() {
            o.call(r, c)
        };
        return function(r) {
            var o = {
                fn: r,
                next: void 0
            };
            t && (t.next = o), e || (e = o, n()), t = o
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(4),
        o = n(3),
        i = n(9),
        a = n(81),
        u = n(84);
    r(r.P + r.R, "Promise", {
        finally: function(e) {
            var t = a(this, o.Promise || i.Promise),
                n = "function" == typeof e;
            return this.then(n ? function(n) {
                return u(t, e()).then(function() {
                    return n
                })
            } : e, n ? function(n) {
                return u(t, e()).then(function() {
                    throw n
                })
            } : e)
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = n(4),
        o = n(59),
        i = n(83);
    r(r.S, "Promise", {
        try: function(e) {
            var t = o.f(this),
                n = i(e);
            return (n.e ? t.reject : t.resolve)(n.v), t.promise
        }
    })
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var t = arguments.length - 1, n = "Minified React error #" + e + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
        throw t = Error(n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."), t.name = "Invariant Violation", t.framesToPop = 1, t
    }

    function o(e, t, n) {
        this.props = e, this.context = t, this.refs = y, this.updater = n || b
    }

    function i(e, t, n) {
        this.props = e, this.context = t, this.refs = y, this.updater = n || b
    }

    function a() {}

    function u(e, t, n) {
        this.props = e, this.context = t, this.refs = y, this.updater = n || b
    }

    function s(e, t, n, r, o, i, a) {
        return {
            $$typeof: T,
            type: e,
            key: t,
            ref: n,
            props: a,
            _owner: i
        }
    }

    function c(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + ("" + e).replace(/[=:]/g, function(e) {
            return t[e]
        })
    }

    function l(e, t, n, r) {
        if (A.length) {
            var o = A.pop();
            return o.result = e, o.keyPrefix = t, o.func = n, o.context = r, o.count = 0, o
        }
        return {
            result: e,
            keyPrefix: t,
            func: n,
            context: r,
            count: 0
        }
    }

    function f(e) {
        e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > A.length && A.push(e)
    }

    function d(e, t, n, o) {
        var i = typeof e;
        if ("undefined" !== i && "boolean" !== i || (e = null), null === e || "string" === i || "number" === i || "object" === i && e.$$typeof === N) return n(o, e, "" === t ? "." + h(e, 0) : t), 1;
        var a = 0;
        if (t = "" === t ? "." : t + ":", Array.isArray(e))
            for (var u = 0; u < e.length; u++) {
                i = e[u];
                var s = t + h(i, u);
                a += d(i, s, n, o)
            } else if ("function" == typeof(s = S && e[S] || e["@@iterator"]))
                for (e = s.call(e), u = 0; !(i = e.next()).done;) i = i.value, s = t + h(i, u++), a += d(i, s, n, o);
            else "object" === i && (n = "" + e, r("31", "[object Object]" === n ? "object with keys {" + Object.keys(e).join(", ") + "}" : n, ""));
        return a
    }

    function h(e, t) {
        return "object" == typeof e && null !== e && null != e.key ? c(e.key) : t.toString(36)
    }

    function p(e, t) {
        e.func.call(e.context, t, e.count++)
    }

    function m(e, t, n) {
        var r = e.result,
            o = e.keyPrefix;
        e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? g(e, r, n, _.thatReturnsArgument) : null != e && (s.isValidElement(e) && (e = s.cloneAndReplaceKey(e, o + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(P, "$&/") + "/") + n)), r.push(e))
    }

    function g(e, t, n, r, o) {
        var i = "";
        null != n && (i = ("" + n).replace(P, "$&/") + "/"), t = l(t, i, r, o), null == e || d(e, "", m, t), f(t)
    }
    var v = n(87),
        y = n(88);
    n(61);
    var _ = n(41),
        b = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        };
    o.prototype.isReactComponent = {}, o.prototype.setState = function(e, t) {
        "object" != typeof e && "function" != typeof e && null != e && r("85"), this.updater.enqueueSetState(this, e, t, "setState")
    }, o.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, a.prototype = o.prototype;
    var x = i.prototype = new a;
    x.constructor = i, v(x, o.prototype), x.isPureReactComponent = !0;
    var w = u.prototype = new a;
    w.constructor = u, v(w, o.prototype), w.unstable_isAsyncReactComponent = !0, w.render = function() {
        return this.props.children
    };
    var k = {
            Component: o,
            PureComponent: i,
            AsyncComponent: u
        },
        E = {
            current: null
        },
        C = Object.prototype.hasOwnProperty,
        T = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
        M = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
    s.createElement = function(e, t, n) {
        var r, o = {},
            i = null,
            a = null,
            u = null,
            c = null;
        if (null != t)
            for (r in void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (i = "" + t.key), u = void 0 === t.__self ? null : t.__self, c = void 0 === t.__source ? null : t.__source, t) C.call(t, r) && !M.hasOwnProperty(r) && (o[r] = t[r]);
        var l = arguments.length - 2;
        if (1 === l) o.children = n;
        else if (1 < l) {
            for (var f = Array(l), d = 0; d < l; d++) f[d] = arguments[d + 2];
            o.children = f
        }
        if (e && e.defaultProps)
            for (r in l = e.defaultProps) void 0 === o[r] && (o[r] = l[r]);
        return s(e, i, a, u, c, E.current, o)
    }, s.createFactory = function(e) {
        var t = s.createElement.bind(null, e);
        return t.type = e, t
    }, s.cloneAndReplaceKey = function(e, t) {
        return s(e.type, t, e.ref, e._self, e._source, e._owner, e.props)
    }, s.cloneElement = function(e, t, n) {
        var r = v({}, e.props),
            o = e.key,
            i = e.ref,
            a = e._self,
            u = e._source,
            c = e._owner;
        if (null != t) {
            if (void 0 !== t.ref && (i = t.ref, c = E.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
            for (f in t) C.call(t, f) && !M.hasOwnProperty(f) && (r[f] = void 0 === t[f] && void 0 !== l ? l[f] : t[f])
        }
        var f = arguments.length - 2;
        if (1 === f) r.children = n;
        else if (1 < f) {
            l = Array(f);
            for (var d = 0; d < f; d++) l[d] = arguments[d + 2];
            r.children = l
        }
        return s(e.type, o, i, a, u, c, r)
    }, s.isValidElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === T
    };
    var S = "function" == typeof Symbol && Symbol.iterator,
        N = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
        P = /\/+/g,
        A = [],
        I = {
            forEach: function(e, t, n) {
                if (null == e) return e;
                t = l(null, null, t, n), null == e || d(e, "", p, t), f(t)
            },
            map: function(e, t, n) {
                if (null == e) return e;
                var r = [];
                return g(e, r, null, t, n), r
            },
            count: function(e) {
                return null == e ? 0 : d(e, "", _.thatReturnsNull, null)
            },
            toArray: function(e) {
                var t = [];
                return g(e, t, null, _.thatReturnsArgument), t
            }
        };
    e.exports = {
        Children: {
            map: I.map,
            forEach: I.forEach,
            count: I.count,
            toArray: I.toArray,
            only: function(e) {
                return s.isValidElement(e) || r("143"), e
            }
        },
        Component: k.Component,
        PureComponent: k.PureComponent,
        unstable_AsyncComponent: k.AsyncComponent,
        createElement: s.createElement,
        cloneElement: s.cloneElement,
        isValidElement: s.isValidElement,
        createFactory: s.createFactory,
        version: "16.0.0",
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            ReactCurrentOwner: E,
            assign: v
        }
    }
}, function(e, t, n) {
    "use strict";

    function r() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
        } catch (e) {
            console.error(e)
        }
    }
    r(), e.exports = n(128)
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var t = arguments.length - 1, n = "Minified React error #" + e + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
        throw t = Error(n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."), t.name = "Invariant Violation", t.framesToPop = 1, t
    }

    function o(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function i() {
        if (St)
            for (var e in Nt) {
                var t = Nt[e],
                    n = St.indexOf(e);
                if (-1 < n || r("96", e), !Pt.plugins[n]) {
                    t.extractEvents || r("97", e), Pt.plugins[n] = t, n = t.eventTypes;
                    for (var o in n) {
                        var i = void 0,
                            u = n[o],
                            s = t,
                            c = o;
                        Pt.eventNameDispatchConfigs.hasOwnProperty(c) && r("99", c), Pt.eventNameDispatchConfigs[c] = u;
                        var l = u.phasedRegistrationNames;
                        if (l) {
                            for (i in l) l.hasOwnProperty(i) && a(l[i], s, c);
                            i = !0
                        } else u.registrationName ? (a(u.registrationName, s, c), i = !0) : i = !1;
                        i || r("98", o, e)
                    }
                }
            }
    }

    function a(e, t, n) {
        Pt.registrationNameModules[e] && r("100", e), Pt.registrationNameModules[e] = t, Pt.registrationNameDependencies[e] = t.eventTypes[n].dependencies
    }

    function u(e, t) {
        return (e & t) === t
    }

    function s(e) {
        for (var t; t = e._renderedComponent;) e = t;
        return e
    }

    function c(e, t) {
        e = s(e), e._hostNode = t, t[Vt] = e
    }

    function l(e, t) {
        if (!(e._flags & qt.hasCachedChildNodes)) {
            var n = e._renderedChildren;
            t = t.firstChild;
            var o;
            e: for (o in n)
                if (n.hasOwnProperty(o)) {
                    var i = n[o],
                        a = s(i)._domID;
                    if (0 !== a) {
                        for (; null !== t; t = t.nextSibling) {
                            var u = t,
                                l = a;
                            if (u.nodeType === zt && u.getAttribute(Bt) === "" + l || u.nodeType === Ht && u.nodeValue === " react-text: " + l + " " || u.nodeType === Ht && u.nodeValue === " react-empty: " + l + " ") {
                                c(i, t);
                                continue e
                            }
                        }
                        r("32", a)
                    }
                }
            e._flags |= qt.hasCachedChildNodes
        }
    }

    function f(e) {
        if (e[Vt]) return e[Vt];
        for (var t = []; !e[Vt];) {
            if (t.push(e), !e.parentNode) return null;
            e = e.parentNode
        }
        var n = e[Vt];
        if (n.tag === jt || n.tag === Ut) return n;
        for (; e && (n = e[Vt]); e = t.pop()) {
            var r = n;
            t.length && l(n, e)
        }
        return r
    }

    function d(e) {
        if ("function" == typeof e.getName) return e.getName();
        if ("number" == typeof e.tag) {
            if ("string" == typeof(e = e.type)) return e;
            if ("function" == typeof e) return e.displayName || e.name
        }
        return null
    }

    function h(e) {
        var t = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            if ((t.effectTag & nn) !== tn) return 1;
            for (; t.return;)
                if (t = t.return, (t.effectTag & nn) !== tn) return 1
        }
        return t.tag === Jt ? 2 : 3
    }

    function p(e) {
        2 !== h(e) && r("188")
    }

    function m(e) {
        var t = e.alternate;
        if (!t) return t = h(e), 3 === t && r("188"), 1 === t ? null : e;
        for (var n = e, o = t;;) {
            var i = n.return,
                a = i ? i.alternate : null;
            if (!i || !a) break;
            if (i.child === a.child) {
                for (var u = i.child; u;) {
                    if (u === n) return p(i), e;
                    if (u === o) return p(i), t;
                    u = u.sibling
                }
                r("188")
            }
            if (n.return !== o.return) n = i, o = a;
            else {
                u = !1;
                for (var s = i.child; s;) {
                    if (s === n) {
                        u = !0, n = i, o = a;
                        break
                    }
                    if (s === o) {
                        u = !0, o = i, n = a;
                        break
                    }
                    s = s.sibling
                }
                if (!u) {
                    for (s = a.child; s;) {
                        if (s === n) {
                            u = !0, n = a, o = i;
                            break
                        }
                        if (s === o) {
                            u = !0, o = a, n = i;
                            break
                        }
                        s = s.sibling
                    }
                    u || r("189")
                }
            }
            n.alternate !== o && r("190")
        }
        return n.tag !== Jt && r("188"), n.stateNode.current === n ? e : t
    }

    function g(e, t, n, r, o, i, a, u, s) {
        on._hasCaughtError = !1, on._caughtError = null;
        var c = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, c)
        } catch (e) {
            on._caughtError = e, on._hasCaughtError = !0
        }
    }

    function v() {
        if (on._hasRethrowError) {
            var e = on._rethrowError;
            throw on._rethrowError = null, on._hasRethrowError = !1, e
        }
    }

    function y(e, t, n, r) {
        t = e.type || "unknown-event", e.currentTarget = un.getNodeFromInstance(r), an.invokeGuardedCallbackAndCatchFirstError(t, n, void 0, e), e.currentTarget = null
    }

    function _(e) {
        if (e = sn.getInstanceFromNode(e))
            if ("number" == typeof e.tag) {
                cn && "function" == typeof cn.restoreControlledState || r("194");
                var t = sn.getFiberCurrentPropsFromNode(e.stateNode);
                cn.restoreControlledState(e.stateNode, e.type, t)
            } else "function" != typeof e.restoreControlledState && r("195"), e.restoreControlledState()
    }

    function b(e, t, n, r, o, i) {
        return e(t, n, r, o, i)
    }

    function x(e, t) {
        return e(t)
    }

    function w(e, t) {
        return x(e, t)
    }

    function k(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === mn ? e.parentNode : e
    }

    function E(e) {
        var t = e.targetInst;
        do {
            if (!t) {
                e.ancestors.push(t);
                break
            }
            var n = t;
            if ("number" == typeof n.tag) {
                for (; n.return;) n = n.return;
                n = n.tag !== gn ? null : n.stateNode.containerInfo
            } else {
                for (; n._hostParent;) n = n._hostParent;
                n = Yt.getNodeFromInstance(n).parentNode
            }
            if (!n) break;
            e.ancestors.push(t), t = Yt.getClosestInstanceFromNode(n)
        } while (t);
        for (n = 0; n < e.ancestors.length; n++) t = e.ancestors[n], yn._handleTopLevel(e.topLevelType, t, e.nativeEvent, k(e.nativeEvent))
    }

    function C(e, t) {
        return null == t && r("30"), null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
    }

    function T(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
    }

    function M(e, t) {
        e && (sn.executeDispatchesInOrder(e, t), e.isPersistent() || e.constructor.release(e))
    }

    function S(e) {
        return M(e, !0)
    }

    function N(e) {
        return M(e, !1)
    }

    function P(e, t, n) {
        switch (e) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
                return !(!n.disabled || "button" !== t && "input" !== t && "select" !== t && "textarea" !== t);
            default:
                return !1
        }
    }

    function A(e, t) {
        if (!gt.canUseDOM || t && !("addEventListener" in document)) return !1;
        t = "on" + e;
        var n = t in document;
        return n || (n = document.createElement("div"), n.setAttribute(t, "return;"), n = "function" == typeof n[t]), !n && Tt && "wheel" === e && (n = document.implementation.hasFeature("Events.wheel", "3.0")), n
    }

    function I(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n["ms" + e] = "MS" + t, n["O" + e] = "o" + t.toLowerCase(), n
    }

    function O(e) {
        if (kn[e]) return kn[e];
        if (!wn[e]) return e;
        var t, n = wn[e];
        for (t in n)
            if (n.hasOwnProperty(t) && t in En) return kn[e] = n[t];
        return ""
    }

    function R(e) {
        return Object.prototype.hasOwnProperty.call(e, Sn) || (e[Sn] = Mn++, Tn[e[Sn]] = {}), Tn[e[Sn]]
    }

    function D(e) {
        return !!zn.hasOwnProperty(e) || !Un.hasOwnProperty(e) && (jn.test(e) ? zn[e] = !0 : (Un[e] = !0, !1))
    }

    function L() {
        return null
    }

    function F(e) {
        var t = "";
        return mt.Children.forEach(e, function(e) {
            null == e || "string" != typeof e && "number" != typeof e || (t += e)
        }), t
    }

    function j(e, t, n) {
        if (e = e.options, t) {
            t = {};
            for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
            for (n = 0; n < e.length; n++) r = t.hasOwnProperty("$" + e[n].value), e[n].selected !== r && (e[n].selected = r)
        } else {
            for (n = "" + n, t = null, r = 0; r < e.length; r++) {
                if (e[r].value === n) return void(e[r].selected = !0);
                null !== t || e[r].disabled || (t = e[r])
            }
            null !== t && (t.selected = !0)
        }
    }

    function U(e, t) {
        t && (Jn[e] && (null != t.children || null != t.dangerouslySetInnerHTML) && r("137", e, ""), null != t.dangerouslySetInnerHTML && (null != t.children && r("60"), "object" == typeof t.dangerouslySetInnerHTML && "__html" in t.dangerouslySetInnerHTML || r("61")), null != t.style && "object" != typeof t.style && r("62", ""))
    }

    function z(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
    }

    function H(e) {
        var t = z(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
        if (!e.hasOwnProperty(t) && "function" == typeof n.get && "function" == typeof n.set) return Object.defineProperty(e, t, {
            enumerable: n.enumerable,
            configurable: !0,
            get: function() {
                return n.get.call(this)
            },
            set: function(e) {
                r = "" + e, n.set.call(this, e)
            }
        }), {
            getValue: function() {
                return r
            },
            setValue: function(e) {
                r = "" + e
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }

    function B(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is;
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }

    function q(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === rr) return void(n.nodeValue = t)
        }
        e.textContent = t
    }

    function W(e, t) {
        ur(t, e.nodeType === ir || e.nodeType === ar ? e : e.ownerDocument)
    }

    function V(e, t) {
        return e !== Ir && e !== Ar || t !== Ir && t !== Ar ? e === Pr && t !== Pr ? -255 : e !== Pr && t === Pr ? 255 : e - t : 0
    }

    function G() {
        return {
            first: null,
            last: null,
            hasForceUpdate: !1,
            callbackList: null
        }
    }

    function Y(e, t, n, r) {
        null !== n ? n.next = t : (t.next = e.first, e.first = t), null !== r ? t.next = r : e.last = t
    }

    function X(e, t) {
        t = t.priorityLevel;
        var n = null;
        if (null !== e.last && 0 >= V(e.last.priorityLevel, t)) n = e.last;
        else
            for (e = e.first; null !== e && 0 >= V(e.priorityLevel, t);) n = e, e = e.next;
        return n
    }

    function K(e, t) {
        var n = e.alternate,
            r = e.updateQueue;
        null === r && (r = e.updateQueue = G()), null !== n ? null === (e = n.updateQueue) && (e = n.updateQueue = G()) : e = null, Dr = r, Lr = e !== r ? e : null;
        var o = Dr;
        n = Lr;
        var i = X(o, t),
            a = null !== i ? i.next : o.first;
        return null === n ? (Y(o, t, i, a), null) : (r = X(n, t), e = null !== r ? r.next : n.first, Y(o, t, i, a), a === e && null !== a || i === r && null !== i ? (null === r && (n.first = t), null === e && (n.last = null), null) : (t = {
            priorityLevel: t.priorityLevel,
            partialState: t.partialState,
            callback: t.callback,
            isReplace: t.isReplace,
            isForced: t.isForced,
            isTopLevelUnmount: t.isTopLevelUnmount,
            next: null
        }, Y(n, t, r, e), t))
    }

    function $(e, t, n, r) {
        return e = e.partialState, "function" == typeof e ? e.call(t, n, r) : e
    }

    function Q(e, t, n) {
        e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = n
    }

    function J(e) {
        return e.tag === Br && null != e.type.childContextTypes
    }

    function Z(e, t) {
        var n = e.stateNode,
            o = e.type.childContextTypes;
        if ("function" != typeof n.getChildContext) return t;
        n = n.getChildContext();
        for (var i in n) i in o || r("108", d(e) || "Unknown", i);
        return vt({}, t, n)
    }

    function ee(e, t, n) {
        this.tag = e, this.key = t, this.stateNode = this.type = null, this.sibling = this.child = this.return = null, this.index = 0, this.memoizedState = this.updateQueue = this.memoizedProps = this.pendingProps = this.ref = null, this.internalContextTag = n, this.effectTag = co, this.lastEffect = this.firstEffect = this.nextEffect = null, this.pendingWorkPriority = uo, this.alternate = null
    }

    function te(e, t, n) {
        var o = void 0;
        return "function" == typeof e ? (o = e.prototype && e.prototype.isReactComponent ? new ee(Zr, t, n) : new ee(Jr, t, n), o.type = e) : "string" == typeof e ? (o = new ee(to, t, n), o.type = e) : "object" == typeof e && null !== e && "number" == typeof e.tag ? o = e : r("130", null == e ? e : typeof e, ""), o
    }

    function ne(e) {
        return null === e || void 0 === e ? null : (e = Ho && e[Ho] || e["@@iterator"], "function" == typeof e ? e : null)
    }

    function re(e, t) {
        var n = t.ref;
        if (null !== n && "function" != typeof n) {
            if (t._owner) {
                t = t._owner;
                var o = void 0;
                t && ("number" == typeof t.tag ? (t.tag !== Io && r("110"), o = t.stateNode) : o = t.getPublicInstance()), o || r("147", n);
                var i = "" + n;
                return null !== e && null !== e.ref && e.ref._stringRef === i ? e.ref : (e = function(e) {
                    var t = o.refs === bt ? o.refs = {} : o.refs;
                    null === e ? delete t[i] : t[i] = e
                }, e._stringRef = i, e)
            }
            "string" != typeof n && r("148"), t._owner || r("149", n)
        }
        return n
    }

    function oe(e, t) {
        "textarea" !== e.type && r("31", "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, "")
    }

    function ie(e, t) {
        function n(n, r) {
            if (t) {
                if (!e) {
                    if (null === r.alternate) return;
                    r = r.alternate
                }
                var o = n.lastEffect;
                null !== o ? (o.nextEffect = r, n.lastEffect = r) : n.firstEffect = n.lastEffect = r, r.nextEffect = null, r.effectTag = zo
            }
        }

        function o(e, r) {
            if (!t) return null;
            for (; null !== r;) n(e, r), r = r.sibling;
            return null
        }

        function i(e, t) {
            for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
            return e
        }

        function a(t, n) {
            return e ? (t = ko(t, n), t.index = 0, t.sibling = null, t) : (t.pendingWorkPriority = n, t.effectTag = jo, t.index = 0, t.sibling = null, t)
        }

        function u(e, n, r) {
            return e.index = r, t ? null !== (r = e.alternate) ? (r = r.index, r < n ? (e.effectTag = Uo, n) : r) : (e.effectTag = Uo, n) : n
        }

        function s(e) {
            return t && null === e.alternate && (e.effectTag = Uo), e
        }

        function c(e, t, n, r) {
            return null === t || t.tag !== Oo ? (n = To(n, e.internalContextTag, r), n.return = e, n) : (t = a(t, r), t.pendingProps = n, t.return = e, t)
        }

        function l(e, t, n, r) {
            return null === t || t.type !== n.type ? (r = Eo(n, e.internalContextTag, r), r.ref = re(t, n), r.return = e, r) : (r = a(t, r), r.ref = re(t, n), r.pendingProps = n.props, r.return = e, r)
        }

        function f(e, t, n, r) {
            return null === t || t.tag !== Do ? (n = Mo(n, e.internalContextTag, r), n.return = e, n) : (t = a(t, r), t.pendingProps = n, t.return = e, t)
        }

        function d(e, t, n, r) {
            return null === t || t.tag !== Lo ? (t = So(n, e.internalContextTag, r), t.type = n.value, t.return = e, t) : (t = a(t, r), t.type = n.value, t.return = e, t)
        }

        function h(e, t, n, r) {
            return null === t || t.tag !== Ro || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (n = No(n, e.internalContextTag, r), n.return = e, n) : (t = a(t, r), t.pendingProps = n.children || [], t.return = e, t)
        }

        function p(e, t, n, r) {
            return null === t || t.tag !== Fo ? (n = Co(n, e.internalContextTag, r), n.return = e, n) : (t = a(t, r), t.pendingProps = n, t.return = e, t)
        }

        function m(e, t, n) {
            if ("string" == typeof t || "number" == typeof t) return t = To("" + t, e.internalContextTag, n), t.return = e, t;
            if ("object" == typeof t && null !== t) {
                switch (t.$$typeof) {
                    case Bo:
                        return n = Eo(t, e.internalContextTag, n), n.ref = re(null, t), n.return = e, n;
                    case bo:
                        return t = Mo(t, e.internalContextTag, n), t.return = e, t;
                    case xo:
                        return n = So(t, e.internalContextTag, n), n.type = t.value, n.return = e, n;
                    case wo:
                        return t = No(t, e.internalContextTag, n), t.return = e, t
                }
                if (Po(t) || ne(t)) return t = Co(t, e.internalContextTag, n), t.return = e, t;
                oe(e, t)
            }
            return null
        }

        function g(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if ("string" == typeof n || "number" == typeof n) return null !== o ? null : c(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
                switch (n.$$typeof) {
                    case Bo:
                        return n.key === o ? l(e, t, n, r) : null;
                    case bo:
                        return n.key === o ? f(e, t, n, r) : null;
                    case xo:
                        return null === o ? d(e, t, n, r) : null;
                    case wo:
                        return n.key === o ? h(e, t, n, r) : null
                }
                if (Po(n) || ne(n)) return null !== o ? null : p(e, t, n, r);
                oe(e, n)
            }
            return null
        }

        function v(e, t, n, r, o) {
            if ("string" == typeof r || "number" == typeof r) return e = e.get(n) || null, c(t, e, "" + r, o);
            if ("object" == typeof r && null !== r) {
                switch (r.$$typeof) {
                    case Bo:
                        return e = e.get(null === r.key ? n : r.key) || null, l(t, e, r, o);
                    case bo:
                        return e = e.get(null === r.key ? n : r.key) || null, f(t, e, r, o);
                    case xo:
                        return e = e.get(n) || null, d(t, e, r, o);
                    case wo:
                        return e = e.get(null === r.key ? n : r.key) || null, h(t, e, r, o)
                }
                if (Po(r) || ne(r)) return e = e.get(n) || null, p(t, e, r, o);
                oe(t, r)
            }
            return null
        }

        function y(e, r, a, s) {
            for (var c = null, l = null, f = r, d = r = 0, h = null; null !== f && d < a.length; d++) {
                f.index > d ? (h = f, f = null) : h = f.sibling;
                var p = g(e, f, a[d], s);
                if (null === p) {
                    null === f && (f = h);
                    break
                }
                t && f && null === p.alternate && n(e, f), r = u(p, r, d), null === l ? c = p : l.sibling = p, l = p, f = h
            }
            if (d === a.length) return o(e, f), c;
            if (null === f) {
                for (; d < a.length; d++)(f = m(e, a[d], s)) && (r = u(f, r, d), null === l ? c = f : l.sibling = f, l = f);
                return c
            }
            for (f = i(e, f); d < a.length; d++)(h = v(f, e, d, a[d], s)) && (t && null !== h.alternate && f.delete(null === h.key ? d : h.key), r = u(h, r, d), null === l ? c = h : l.sibling = h, l = h);
            return t && f.forEach(function(t) {
                return n(e, t)
            }), c
        }

        function _(e, a, s, c) {
            var l = ne(s);
            "function" != typeof l && r("150"), null == (s = l.call(s)) && r("151");
            for (var f = l = null, d = a, h = a = 0, p = null, y = s.next(); null !== d && !y.done; h++, y = s.next()) {
                d.index > h ? (p = d, d = null) : p = d.sibling;
                var _ = g(e, d, y.value, c);
                if (null === _) {
                    d || (d = p);
                    break
                }
                t && d && null === _.alternate && n(e, d), a = u(_, a, h), null === f ? l = _ : f.sibling = _, f = _, d = p
            }
            if (y.done) return o(e, d), l;
            if (null === d) {
                for (; !y.done; h++, y = s.next()) null !== (y = m(e, y.value, c)) && (a = u(y, a, h), null === f ? l = y : f.sibling = y, f = y);
                return l
            }
            for (d = i(e, d); !y.done; h++, y = s.next()) null !== (y = v(d, e, h, y.value, c)) && (t && null !== y.alternate && d.delete(null === y.key ? h : y.key), a = u(y, a, h), null === f ? l = y : f.sibling = y, f = y);
            return t && d.forEach(function(t) {
                return n(e, t)
            }), l
        }
        return function(e, t, i, u) {
            var c = "object" == typeof i && null !== i;
            if (c) switch (i.$$typeof) {
                case Bo:
                    e: {
                        var l = i.key;
                        for (c = t; null !== c;) {
                            if (c.key === l) {
                                if (c.type === i.type) {
                                    o(e, c.sibling), t = a(c, u), t.ref = re(c, i), t.pendingProps = i.props, t.return = e, e = t;
                                    break e
                                }
                                o(e, c);
                                break
                            }
                            n(e, c), c = c.sibling
                        }
                        u = Eo(i, e.internalContextTag, u), u.ref = re(t, i), u.return = e, e = u
                    }
                    return s(e);
                case bo:
                    e: {
                        for (c = i.key; null !== t;) {
                            if (t.key === c) {
                                if (t.tag === Do) {
                                    o(e, t.sibling), t = a(t, u), t.pendingProps = i, t.return = e, e = t;
                                    break e
                                }
                                o(e, t);
                                break
                            }
                            n(e, t), t = t.sibling
                        }
                        i = Mo(i, e.internalContextTag, u), i.return = e, e = i
                    }
                    return s(e);
                case xo:
                    e: {
                        if (null !== t) {
                            if (t.tag === Lo) {
                                o(e, t.sibling), t = a(t, u), t.type = i.value, t.return = e, e = t;
                                break e
                            }
                            o(e, t)
                        }
                        t = So(i, e.internalContextTag, u), t.type = i.value, t.return = e, e = t
                    }
                    return s(e);
                case wo:
                    e: {
                        for (c = i.key; null !== t;) {
                            if (t.key === c) {
                                if (t.tag === Ro && t.stateNode.containerInfo === i.containerInfo && t.stateNode.implementation === i.implementation) {
                                    o(e, t.sibling), t = a(t, u), t.pendingProps = i.children || [], t.return = e, e = t;
                                    break e
                                }
                                o(e, t);
                                break
                            }
                            n(e, t), t = t.sibling
                        }
                        i = No(i, e.internalContextTag, u), i.return = e, e = i
                    }
                    return s(e)
            }
            if ("string" == typeof i || "number" == typeof i) return i = "" + i, null !== t && t.tag === Oo ? (o(e, t.sibling), t = a(t, u), t.pendingProps = i, t.return = e, e = t) : (o(e, t), i = To(i, e.internalContextTag, u), i.return = e, e = i), s(e);
            if (Po(i)) return y(e, t, i, u);
            if (ne(i)) return _(e, t, i, u);
            if (c && oe(e, i), void 0 === i) switch (e.tag) {
                case Io:
                case Ao:
                    i = e.type, r("152", i.displayName || i.name || "Component")
            }
            return o(e, t)
        }
    }

    function ae(e, t, n, o) {
        function i(e, t) {
            t.updater = a, e.stateNode = t, Xt.set(t, e)
        }
        var a = {
            isMounted: oi,
            enqueueSetState: function(n, r, o) {
                n = Xt.get(n);
                var i = t(n, !1);
                Zo(n, r, void 0 === o ? null : o, i), e(n, i)
            },
            enqueueReplaceState: function(n, r, o) {
                n = Xt.get(n);
                var i = t(n, !1);
                ei(n, r, void 0 === o ? null : o, i), e(n, i)
            },
            enqueueForceUpdate: function(n, r) {
                n = Xt.get(n);
                var o = t(n, !1);
                ti(n, void 0 === r ? null : r, o), e(n, o)
            }
        };
        return {
            adoptClassInstance: i,
            constructClassInstance: function(e, t) {
                var n = e.type,
                    r = Qo(e),
                    o = Jo(e),
                    a = o ? $o(e, r) : bt;
                return t = new n(t, a), i(e, t), o && Ko(e, r, a), t
            },
            mountClassInstance: function(e, t) {
                var n = e.alternate,
                    o = e.stateNode,
                    i = o.state || null,
                    u = e.pendingProps;
                u || r("158");
                var s = Qo(e);
                o.props = u, o.state = i, o.refs = bt, o.context = $o(e, s), Mr.enableAsyncSubtreeAPI && null != e.type && null != e.type.prototype && !0 === e.type.prototype.unstable_isAsyncReactComponent && (e.internalContextTag |= Xo), "function" == typeof o.componentWillMount && (s = o.state, o.componentWillMount(), s !== o.state && a.enqueueReplaceState(o, o.state, null), null !== (s = e.updateQueue) && (o.state = ni(n, e, s, o, i, u, t))), "function" == typeof o.componentDidMount && (e.effectTag |= Yo)
            },
            updateClassInstance: function(e, t, i) {
                var u = t.stateNode;
                u.props = t.memoizedProps, u.state = t.memoizedState;
                var s = t.memoizedProps,
                    c = t.pendingProps;
                c || null == (c = s) && r("159");
                var l = u.context,
                    f = Qo(t);
                if (f = $o(t, f), "function" != typeof u.componentWillReceiveProps || s === c && l === f || (l = u.state, u.componentWillReceiveProps(c, f), u.state !== l && a.enqueueReplaceState(u, u.state, null)), l = t.memoizedState, i = null !== t.updateQueue ? ni(e, t, t.updateQueue, u, l, c, i) : l, !(s !== c || l !== i || ri() || null !== t.updateQueue && t.updateQueue.hasForceUpdate)) return "function" != typeof u.componentDidUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= Yo), !1;
                var d = c;
                if (null === s || null !== t.updateQueue && t.updateQueue.hasForceUpdate) d = !0;
                else {
                    var h = t.stateNode,
                        p = t.type;
                    d = "function" == typeof h.shouldComponentUpdate ? h.shouldComponentUpdate(d, i, f) : !p.prototype || !p.prototype.isPureReactComponent || (!xt(s, d) || !xt(l, i))
                }
                return d ? ("function" == typeof u.componentWillUpdate && u.componentWillUpdate(c, i, f), "function" == typeof u.componentDidUpdate && (t.effectTag |= Yo)) : ("function" != typeof u.componentDidUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= Yo), n(t, c), o(t, i)), u.props = c, u.state = i, u.context = f, d
            }
        }
    }

    function ue(e, t, n, o, i) {
        function a(e, t, n) {
            u(e, t, n, t.pendingWorkPriority)
        }

        function u(e, t, n, r) {
            t.child = null === e ? ii(t, t.child, n, r) : e.child === t.child ? ai(t, t.child, n, r) : ui(t, t.child, n, r)
        }

        function s(e, t) {
            var n = t.ref;
            null === n || e && e.ref === n || (t.effectTag |= Oi)
        }

        function c(e, t, n, r) {
            if (s(e, t), !n) return r && mi(t, !1), f(e, t);
            n = t.stateNode, Ri.current = t;
            var o = n.render();
            return t.effectTag |= Ni, a(e, t, o), t.memoizedState = n.state, t.memoizedProps = n.props, r && mi(t, !0), t.child
        }

        function l(e) {
            var t = e.stateNode;
            t.pendingContext ? pi(e, t.pendingContext, t.pendingContext !== t.context) : t.context && pi(e, t.context, !1), v(e, t.containerInfo)
        }

        function f(e, t) {
            return si(e, t), t.child
        }

        function d(e, t) {
            switch (t.tag) {
                case _i:
                    l(t);
                    break;
                case yi:
                    hi(t);
                    break;
                case wi:
                    v(t, t.stateNode.containerInfo)
            }
            return null
        }
        var h = e.shouldSetTextContent,
            p = e.useSyncScheduling,
            m = e.shouldDeprioritizeSubtree,
            g = t.pushHostContext,
            v = t.pushHostContainer,
            y = n.enterHydrationState,
            _ = n.resetHydrationState,
            b = n.tryToClaimNextHydratableInstance;
        e = ae(o, i, function(e, t) {
            e.memoizedProps = t
        }, function(e, t) {
            e.memoizedState = t
        });
        var x = e.adoptClassInstance,
            w = e.constructClassInstance,
            k = e.mountClassInstance,
            E = e.updateClassInstance;
        return {
            beginWork: function(e, t, n) {
                if (t.pendingWorkPriority === Mi || t.pendingWorkPriority > n) return d(e, t);
                switch (t.tag) {
                    case gi:
                        null !== e && r("155");
                        var o = t.type,
                            i = t.pendingProps,
                            u = fi(t);
                        return u = li(t, u), o = o(i, u), t.effectTag |= Ni, "object" == typeof o && null !== o && "function" == typeof o.render ? (t.tag = yi, i = hi(t), x(t, o), k(t, n), t = c(e, t, !0, i)) : (t.tag = vi, a(e, t, o), t.memoizedProps = i, t = t.child), t;
                    case vi:
                        e: {
                            if (i = t.type, n = t.pendingProps, o = t.memoizedProps, di()) null === n && (n = o);
                            else if (null === n || o === n) {
                                t = f(e, t);
                                break e
                            }
                            o = fi(t), o = li(t, o), i = i(n, o), t.effectTag |= Ni, a(e, t, i), t.memoizedProps = n, t = t.child
                        }
                        return t;
                    case yi:
                        return i = hi(t), o = void 0, null === e ? t.stateNode ? r("153") : (w(t, t.pendingProps), k(t, n), o = !0) : o = E(e, t, n), c(e, t, o, i);
                    case _i:
                        return l(t), o = t.updateQueue, null !== o ? (i = t.memoizedState, o = ci(e, t, o, null, i, null, n), i === o ? (_(), t = f(e, t)) : (i = o.element, null !== e && null !== e.child || !y(t) ? (_(), a(e, t, i)) : (t.effectTag |= Pi, t.child = ii(t, t.child, i, n)), t.memoizedState = o, t = t.child)) : (_(), t = f(e, t)), t;
                    case bi:
                        g(t), null === e && b(t), i = t.type;
                        var C = t.memoizedProps;
                        return o = t.pendingProps, null === o && null === (o = C) && r("154"), u = null !== e ? e.memoizedProps : null, di() || null !== o && C !== o ? (C = o.children, h(i, o) ? C = null : u && h(i, u) && (t.effectTag |= Ai), s(e, t), n !== Si && !p && m(i, o) ? (t.pendingWorkPriority = Si, t = null) : (a(e, t, C), t.memoizedProps = o, t = t.child)) : t = f(e, t), t;
                    case xi:
                        return null === e && b(t), e = t.pendingProps, null === e && (e = t.memoizedProps), t.memoizedProps = e, null;
                    case Ei:
                        t.tag = ki;
                    case ki:
                        return n = t.pendingProps, di() ? null === n && null === (n = e && e.memoizedProps) && r("154") : null !== n && t.memoizedProps !== n || (n = t.memoizedProps), i = n.children, o = t.pendingWorkPriority, t.stateNode = null === e ? ii(t, t.stateNode, i, o) : e.child === t.child ? ai(t, t.stateNode, i, o) : ui(t, t.stateNode, i, o), t.memoizedProps = n, t.stateNode;
                    case Ci:
                        return null;
                    case wi:
                        e: {
                            if (v(t, t.stateNode.containerInfo), n = t.pendingWorkPriority, i = t.pendingProps, di()) null === i && null == (i = e && e.memoizedProps) && r("154");
                            else if (null === i || t.memoizedProps === i) {
                                t = f(e, t);
                                break e
                            }
                            null === e ? t.child = ui(t, t.child, i, n) : a(e, t, i), t.memoizedProps = i, t = t.child
                        }
                        return t;
                    case Ti:
                        e: {
                            if (n = t.pendingProps, di()) null === n && (n = t.memoizedProps);
                            else if (null === n || t.memoizedProps === n) {
                                t = f(e, t);
                                break e
                            }
                            a(e, t, n), t.memoizedProps = n, t = t.child
                        }
                        return t;
                    default:
                        r("156")
                }
            },
            beginFailedWork: function(e, t, n) {
                switch (t.tag) {
                    case yi:
                        hi(t);
                        break;
                    case _i:
                        l(t);
                        break;
                    default:
                        r("157")
                }
                return t.effectTag |= Ii, null === e ? t.child = null : t.child !== e.child && (t.child = e.child), t.pendingWorkPriority === Mi || t.pendingWorkPriority > n ? d(e, t) : (t.firstEffect = null, t.lastEffect = null, u(e, t, null, n), t.tag === yi && (e = t.stateNode, t.memoizedProps = e.props, t.memoizedState = e.state), t.child)
            }
        }
    }

    function se(e, t, n) {
        var o = e.createInstance,
            i = e.createTextInstance,
            a = e.appendInitialChild,
            u = e.finalizeInitialChildren,
            s = e.prepareUpdate,
            c = t.getRootHostContainer,
            l = t.popHostContext,
            f = t.getHostContext,
            d = t.popHostContainer,
            h = n.prepareToHydrateHostInstance,
            p = n.prepareToHydrateHostTextInstance,
            m = n.popHydrationState;
        return {
            completeWork: function(e, t, n) {
                var g = t.pendingProps;
                switch (null === g ? g = t.memoizedProps : t.pendingWorkPriority === Ji && n !== Ji || (t.pendingProps = null), t.tag) {
                    case Ui:
                        return null;
                    case zi:
                        return Li(t), null;
                    case Hi:
                        return d(t), Fi(t), g = t.stateNode, g.pendingContext && (g.context = g.pendingContext, g.pendingContext = null), null !== e && null !== e.child || (m(t), t.effectTag &= ~Ki), null;
                    case Bi:
                        l(t), n = c();
                        var v = t.type;
                        if (null !== e && null != t.stateNode) {
                            var y = e.memoizedProps,
                                _ = t.stateNode,
                                b = f();
                            g = s(_, v, y, g, n, b), (t.updateQueue = g) && (t.effectTag |= Qi), e.ref !== t.ref && (t.effectTag |= $i)
                        } else {
                            if (!g) return null === t.stateNode && r("166"), null;
                            if (e = f(), m(t)) h(t, n, e) && (t.effectTag |= Qi);
                            else {
                                e = o(v, g, n, e, t);
                                e: for (y = t.child; null !== y;) {
                                    if (y.tag === Bi || y.tag === qi) a(e, y.stateNode);
                                    else if (y.tag !== Wi && null !== y.child) {
                                        y = y.child;
                                        continue
                                    }
                                    if (y === t) break e;
                                    for (; null === y.sibling;) {
                                        if (null === y.return || y.return === t) break e;
                                        y = y.return
                                    }
                                    y = y.sibling
                                }
                                u(e, v, g, n) && (t.effectTag |= Qi), t.stateNode = e
                            }
                            null !== t.ref && (t.effectTag |= $i)
                        }
                        return null;
                    case qi:
                        if (e && null != t.stateNode) e.memoizedProps !== g && (t.effectTag |= Qi);
                        else {
                            if ("string" != typeof g) return null === t.stateNode && r("166"), null;
                            e = c(), n = f(), m(t) ? p(t) && (t.effectTag |= Qi) : t.stateNode = i(g, e, n, t)
                        }
                        return null;
                    case Vi:
                        (g = t.memoizedProps) || r("165"), t.tag = Gi, n = [];
                        e: for ((v = t.stateNode) && (v.return = t); null !== v;) {
                            if (v.tag === Bi || v.tag === qi || v.tag === Wi) r("164");
                            else if (v.tag === Yi) n.push(v.type);
                            else if (null !== v.child) {
                                v.child.return = v, v = v.child;
                                continue
                            }
                            for (; null === v.sibling;) {
                                if (null === v.return || v.return === t) break e;
                                v = v.return
                            }
                            v.sibling.return = v.return, v = v.sibling
                        }
                        return v = g.handler, g = v(g.props, n), t.child = Di(t, null !== e ? e.child : null, g, t.pendingWorkPriority), t.child;
                    case Gi:
                        return t.tag = Vi, null;
                    case Yi:
                    case Xi:
                        return null;
                    case Wi:
                        return t.effectTag |= Qi, d(t), null;
                    case ji:
                        r("167");
                    default:
                        r("156")
                }
            }
        }
    }

    function ce(e) {
        return function(t) {
            try {
                return e(t)
            } catch (e) {}
        }
    }

    function le(e, t) {
        function n(e) {
            var n = e.ref;
            if (null !== n) try {
                n(null)
            } catch (n) {
                t(e, n)
            }
        }

        function o(e) {
            return e.tag === oa || e.tag === ra || e.tag === aa
        }

        function i(e) {
            for (var t = e;;)
                if (u(t), null !== t.child && t.tag !== aa) t.child.return = t, t = t.child;
                else {
                    if (t === e) break;
                    for (; null === t.sibling;) {
                        if (null === t.return || t.return === e) return;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
        }

        function a(e) {
            for (var t = e, n = !1, o = void 0, a = void 0;;) {
                if (!n) {
                    n = t.return;
                    e: for (;;) {
                        switch (null === n && r("160"), n.tag) {
                            case oa:
                                o = n.stateNode, a = !1;
                                break e;
                            case ra:
                            case aa:
                                o = n.stateNode.containerInfo, a = !0;
                                break e
                        }
                        n = n.return
                    }
                    n = !0
                }
                if (t.tag === oa || t.tag === ia) i(t), a ? v(o, t.stateNode) : g(o, t.stateNode);
                else if (t.tag === aa ? o = t.stateNode.containerInfo : u(t), null !== t.child) {
                    t.child.return = t, t = t.child;
                    continue
                }
                if (t === e) break;
                for (; null === t.sibling;) {
                    if (null === t.return || t.return === e) return;
                    t = t.return, t.tag === aa && (n = !1)
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }

        function u(e) {
            switch ("function" == typeof ca && ca(e), e.tag) {
                case na:
                    n(e);
                    var r = e.stateNode;
                    if ("function" == typeof r.componentWillUnmount) try {
                        r.props = e.memoizedProps, r.state = e.memoizedState, r.componentWillUnmount()
                    } catch (n) {
                        t(e, n)
                    }
                    break;
                case oa:
                    n(e);
                    break;
                case ua:
                    i(e.stateNode);
                    break;
                case aa:
                    a(e)
            }
        }
        var s = e.commitMount,
            c = e.commitUpdate,
            l = e.resetTextContent,
            f = e.commitTextUpdate,
            d = e.appendChild,
            h = e.appendChildToContainer,
            p = e.insertBefore,
            m = e.insertInContainerBefore,
            g = e.removeChild,
            v = e.removeChildFromContainer,
            y = e.getPublicInstance;
        return {
            commitPlacement: function(e) {
                e: {
                    for (var t = e.return; null !== t;) {
                        if (o(t)) {
                            var n = t;
                            break e
                        }
                        t = t.return
                    }
                    r("160"), n = void 0
                }
                var i = t = void 0;
                switch (n.tag) {
                    case oa:
                        t = n.stateNode, i = !1;
                        break;
                    case ra:
                    case aa:
                        t = n.stateNode.containerInfo, i = !0;
                        break;
                    default:
                        r("161")
                }
                n.effectTag & ha && (l(t), n.effectTag &= ~ha);e: t: for (n = e;;) {
                    for (; null === n.sibling;) {
                        if (null === n.return || o(n.return)) {
                            n = null;
                            break e
                        }
                        n = n.return
                    }
                    for (n.sibling.return = n.return, n = n.sibling; n.tag !== oa && n.tag !== ia;) {
                        if (n.effectTag & la) continue t;
                        if (null === n.child || n.tag === aa) continue t;
                        n.child.return = n, n = n.child
                    }
                    if (!(n.effectTag & la)) {
                        n = n.stateNode;
                        break e
                    }
                }
                for (var a = e;;) {
                    if (a.tag === oa || a.tag === ia) n ? i ? m(t, a.stateNode, n) : p(t, a.stateNode, n) : i ? h(t, a.stateNode) : d(t, a.stateNode);
                    else if (a.tag !== aa && null !== a.child) {
                        a.child.return = a, a = a.child;
                        continue
                    }
                    if (a === e) break;
                    for (; null === a.sibling;) {
                        if (null === a.return || a.return === e) return;
                        a = a.return
                    }
                    a.sibling.return = a.return, a = a.sibling
                }
            },
            commitDeletion: function(e) {
                a(e), e.return = null, e.child = null, e.alternate && (e.alternate.child = null, e.alternate.return = null)
            },
            commitWork: function(e, t) {
                switch (t.tag) {
                    case na:
                        break;
                    case oa:
                        var n = t.stateNode;
                        if (null != n) {
                            var o = t.memoizedProps;
                            e = null !== e ? e.memoizedProps : o;
                            var i = t.type,
                                a = t.updateQueue;
                            t.updateQueue = null, null !== a && c(n, a, i, e, o, t)
                        }
                        break;
                    case ia:
                        null === t.stateNode && r("162"), n = t.memoizedProps, f(t.stateNode, null !== e ? e.memoizedProps : n, n);
                        break;
                    case ra:
                    case aa:
                        break;
                    default:
                        r("163")
                }
            },
            commitLifeCycles: function(e, t) {
                switch (t.tag) {
                    case na:
                        var n = t.stateNode;
                        if (t.effectTag & fa)
                            if (null === e) n.props = t.memoizedProps, n.state = t.memoizedState, n.componentDidMount();
                            else {
                                var o = e.memoizedProps;
                                e = e.memoizedState, n.props = t.memoizedProps, n.state = t.memoizedState, n.componentDidUpdate(o, e)
                            }
                        t.effectTag & da && null !== t.updateQueue && sa(t, t.updateQueue, n);
                        break;
                    case ra:
                        e = t.updateQueue, null !== e && sa(t, e, t.child && t.child.stateNode);
                        break;
                    case oa:
                        n = t.stateNode, null === e && t.effectTag & fa && s(n, t.type, t.memoizedProps, t);
                        break;
                    case ia:
                    case aa:
                        break;
                    default:
                        r("163")
                }
            },
            commitAttachRef: function(e) {
                var t = e.ref;
                if (null !== t) {
                    var n = e.stateNode;
                    switch (e.tag) {
                        case oa:
                            t(y(n));
                            break;
                        default:
                            t(n)
                    }
                }
            },
            commitDetachRef: function(e) {
                null !== (e = e.ref) && e(null)
            }
        }
    }

    function fe(e) {
        function t(e) {
            return e === va && r("174"), e
        }
        var n = e.getChildHostContext,
            o = e.getRootHostContext,
            i = pa(va),
            a = pa(va),
            u = pa(va);
        return {
            getHostContext: function() {
                return t(i.current)
            },
            getRootHostContainer: function() {
                return t(u.current)
            },
            popHostContainer: function(e) {
                ma(i, e), ma(a, e), ma(u, e)
            },
            popHostContext: function(e) {
                a.current === e && (ma(i, e), ma(a, e))
            },
            pushHostContainer: function(e, t) {
                ga(u, t, e), t = o(t), ga(a, e, e), ga(i, t, e)
            },
            pushHostContext: function(e) {
                var r = t(u.current),
                    o = t(i.current);
                r = n(o, e.type, r), o !== r && (ga(a, e, e), ga(i, r, e))
            },
            resetHostContainer: function() {
                i.current = va, u.current = va
            }
        }
    }

    function de(e) {
        function t(e, t) {
            var n = ka();
            n.stateNode = t, n.return = e, n.effectTag = xa, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
        }

        function n(e, t) {
            switch (e.tag) {
                case ya:
                    return a(t, e.type, e.pendingProps);
                case _a:
                    return u(t, e.pendingProps);
                default:
                    return !1
            }
        }

        function o(e) {
            for (e = e.return; null !== e && e.tag !== ya && e.tag !== ba;) e = e.return;
            p = e
        }
        var i = e.shouldSetTextContent,
            a = e.canHydrateInstance,
            u = e.canHydrateTextInstance,
            s = e.getNextHydratableSibling,
            c = e.getFirstHydratableChild,
            l = e.hydrateInstance,
            f = e.hydrateTextInstance,
            d = e.didNotHydrateInstance,
            h = e.didNotFindHydratableInstance;
        if (e = e.didNotFindHydratableTextInstance, !(a && u && s && c && l && f && d && h && e)) return {
            enterHydrationState: function() {
                return !1
            },
            resetHydrationState: function() {},
            tryToClaimNextHydratableInstance: function() {},
            prepareToHydrateHostInstance: function() {
                r("175")
            },
            prepareToHydrateHostTextInstance: function() {
                r("176")
            },
            popHydrationState: function() {
                return !1
            }
        };
        var p = null,
            m = null,
            g = !1;
        return {
            enterHydrationState: function(e) {
                return m = c(e.stateNode.containerInfo), p = e, g = !0
            },
            resetHydrationState: function() {
                m = p = null, g = !1
            },
            tryToClaimNextHydratableInstance: function(e) {
                if (g) {
                    var r = m;
                    if (r) {
                        if (!n(e, r)) {
                            if (!(r = s(r)) || !n(e, r)) return e.effectTag |= wa, g = !1, void(p = e);
                            t(p, m)
                        }
                        e.stateNode = r, p = e, m = c(r)
                    } else e.effectTag |= wa, g = !1, p = e
                }
            },
            prepareToHydrateHostInstance: function(e, t, n) {
                return t = l(e.stateNode, e.type, e.memoizedProps, t, n, e), e.updateQueue = t, null !== t
            },
            prepareToHydrateHostTextInstance: function(e) {
                return f(e.stateNode, e.memoizedProps, e)
            },
            popHydrationState: function(e) {
                if (e !== p) return !1;
                if (!g) return o(e), g = !0, !1;
                var n = e.type;
                if (e.tag !== ya || "head" !== n && "body" !== n && !i(n, e.memoizedProps))
                    for (n = m; n;) t(e, n), n = s(n);
                return o(e), m = p ? s(e.stateNode) : null, !0
            }
        }
    }

    function he(e) {
        function t() {
            for (; null !== G && G.current.pendingWorkPriority === Pa;) {
                G.isScheduled = !1;
                var e = G.nextScheduledRoot;
                if (G.nextScheduledRoot = null, G === Y) return Y = G = null, q = Pa, null;
                G = e
            }
            e = G;
            for (var t = null, n = Pa; null !== e;) e.current.pendingWorkPriority !== Pa && (n === Pa || n > e.current.pendingWorkPriority) && (n = e.current.pendingWorkPriority, t = e), e = e.nextScheduledRoot;
            null !== t ? (q = n, Ca(), Qa(), w(), B = Ma(t.current, n), t !== oe && (re = 0, oe = t)) : (q = Pa, oe = B = null)
        }

        function n(n) {
            ee = !0, V = null;
            var o = n.stateNode;
            if (o.current === n && r("177"), q !== Aa && q !== Ia || re++, Ta.current = null, n.effectTag > Fa)
                if (null !== n.lastEffect) {
                    n.lastEffect.nextEffect = n;
                    var i = n.firstEffect
                } else i = n;
            else i = n.firstEffect;
            for (D(), W = i; null !== W;) {
                var a = !1,
                    u = void 0;
                try {
                    for (; null !== W;) {
                        var s = W.effectTag;
                        if (s & Ba && e.resetTextContent(W.stateNode), s & Va) {
                            var c = W.alternate;
                            null !== c && I(c)
                        }
                        switch (s & ~(qa | Wa | Ba | Va | Fa)) {
                            case ja:
                                M(W), W.effectTag &= ~ja;
                                break;
                            case za:
                                M(W), W.effectTag &= ~ja, N(W.alternate, W);
                                break;
                            case Ua:
                                N(W.alternate, W);
                                break;
                            case Ha:
                                te = !0, S(W), te = !1
                        }
                        W = W.nextEffect
                    }
                } catch (e) {
                    a = !0, u = e
                }
                a && (null === W && r("178"), f(W, u), null !== W && (W = W.nextEffect))
            }
            for (L(), o.current = n, W = i; null !== W;) {
                o = !1, i = void 0;
                try {
                    for (; null !== W;) {
                        var l = W.effectTag;
                        if (l & (Ua | qa) && P(W.alternate, W), l & Va && A(W), l & Wa) switch (a = W, u = void 0, null !== K && (u = K.get(a), K.delete(a), null == u && null !== a.alternate && (a = a.alternate, u = K.get(a), K.delete(a))), null == u && r("184"), a.tag) {
                            case Ka:
                                a.stateNode.componentDidCatch(u.error, {
                                    componentStack: u.componentStack
                                });
                                break;
                            case Ga:
                                null === J && (J = u.error);
                                break;
                            default:
                                r("157")
                        }
                        var d = W.nextEffect;
                        W.nextEffect = null, W = d
                    }
                } catch (e) {
                    o = !0, i = e
                }
                o && (null === W && r("178"), f(W, i), null !== W && (W = W.nextEffect))
            }
            ee = !1, "function" == typeof Na && Na(n.stateNode), Q && (Q.forEach(v), Q = null), t()
        }

        function o(e) {
            for (;;) {
                var t = T(e.alternate, e, q),
                    n = e.return,
                    r = e.sibling,
                    o = e;
                if (!(o.pendingWorkPriority !== Pa && o.pendingWorkPriority > q)) {
                    for (var i = $a(o), a = o.child; null !== a;) i = Sa(i, a.pendingWorkPriority), a = a.sibling;
                    o.pendingWorkPriority = i
                }
                if (null !== t) return t;
                if (null !== n && (null === n.firstEffect && (n.firstEffect = e.firstEffect), null !== e.lastEffect && (null !== n.lastEffect && (n.lastEffect.nextEffect = e.firstEffect), n.lastEffect = e.lastEffect), e.effectTag > Fa && (null !== n.lastEffect ? n.lastEffect.nextEffect = e : n.firstEffect = e, n.lastEffect = e)), null !== r) return r;
                if (null === n) {
                    V = e;
                    break
                }
                e = n
            }
            return null
        }

        function i(e) {
            var t = E(e.alternate, e, q);
            return null === t && (t = o(e)), Ta.current = null, t
        }

        function a(e) {
            var t = C(e.alternate, e, q);
            return null === t && (t = o(e)), Ta.current = null, t
        }

        function u(e) {
            l(Da, e)
        }

        function s() {
            if (null !== K && 0 < K.size && q === Ia)
                for (; null !== B;) {
                    var e = B;
                    if (null === (B = null !== K && (K.has(e) || null !== e.alternate && K.has(e.alternate)) ? a(B) : i(B)) && (null === V && r("179"), F = Ia, n(V), F = q, null === K || 0 === K.size || q !== Ia)) break
                }
        }

        function c(e, o) {
            if (null !== V ? (F = Ia, n(V), s()) : null === B && t(), !(q === Pa || q > e)) {
                F = q;
                e: for (;;) {
                    if (q <= Ia)
                        for (; null !== B && !(null === (B = i(B)) && (null === V && r("179"), F = Ia, n(V), F = q, s(), q === Pa || q > e || q > Ia)););
                    else if (null !== o)
                        for (; null !== B && !U;)
                            if (1 < o.timeRemaining()) {
                                if (null === (B = i(B)))
                                    if (null === V && r("179"), 1 < o.timeRemaining()) {
                                        if (F = Ia, n(V), F = q, s(), q === Pa || q > e || q < Oa) break
                                    } else U = !0
                            } else U = !0;
                    switch (q) {
                        case Aa:
                        case Ia:
                            if (q <= e) continue e;
                            break e;
                        case Oa:
                        case Ra:
                        case Da:
                            if (null === o) break e;
                            if (!U && q <= e) continue e;
                            break e;
                        case Pa:
                            break e;
                        default:
                            r("181")
                    }
                }
            }
        }

        function l(e, t) {
            j && r("182"), j = !0;
            var n = F,
                o = !1,
                i = null;
            try {
                c(e, t)
            } catch (e) {
                o = !0, i = e
            }
            for (; o;) {
                if (Z) {
                    J = i;
                    break
                }
                var s = B;
                if (null === s) Z = !0;
                else {
                    var l = f(s, i);
                    if (null === l && r("183"), !Z) {
                        try {
                            o = l, i = e, l = t;
                            for (var d = o; null !== s;) {
                                switch (s.tag) {
                                    case Ka:
                                        Ea(s);
                                        break;
                                    case Ya:
                                        x(s);
                                        break;
                                    case Ga:
                                        b(s);
                                        break;
                                    case Xa:
                                        b(s)
                                }
                                if (s === d || s.alternate === d) break;
                                s = s.return
                            }
                            B = a(o), c(i, l)
                        } catch (e) {
                            o = !0, i = e;
                            continue
                        }
                        break
                    }
                }
            }
            if (F = n, null !== t && (X = !1), q > Ia && !X && (O(u), X = !0), e = J, Z = U = j = !1, oe = $ = K = J = null, re = 0, null !== e) throw e
        }

        function f(e, t) {
            var n = Ta.current = null,
                r = !1,
                o = !1,
                i = null;
            if (e.tag === Ga) n = e, h(e) && (Z = !0);
            else
                for (var a = e.return; null !== a && null === n;) {
                    if (a.tag === Ka ? "function" == typeof a.stateNode.componentDidCatch && (r = !0, i = d(a), n = a, o = !0) : a.tag === Ga && (n = a), h(a)) {
                        if (te || null !== Q && (Q.has(a) || null !== a.alternate && Q.has(a.alternate))) return null;
                        n = null, o = !1
                    }
                    a = a.return
                }
            if (null !== n) {
                null === $ && ($ = new Set), $.add(n);
                var u = "";
                a = e;
                do {
                    e: switch (a.tag) {
                        case ho:
                        case po:
                        case mo:
                        case go:
                            var s = a._debugOwner,
                                c = a._debugSource,
                                l = d(a),
                                f = null;
                            s && (f = d(s)), s = c, l = "\n    in " + (l || "Unknown") + (s ? " (at " + s.fileName.replace(/^.*[\\\/]/, "") + ":" + s.lineNumber + ")" : f ? " (created by " + f + ")" : "");
                            break e;
                        default:
                            l = ""
                    }
                    u += l,
                    a = a.return
                } while (a);
                a = u, e = d(e), null === K && (K = new Map), t = {
                    componentName: e,
                    componentStack: a,
                    error: t,
                    errorBoundary: r ? n.stateNode : null,
                    errorBoundaryFound: r,
                    errorBoundaryName: i,
                    willRetry: o
                }, K.set(n, t);
                try {
                    console.error(t.error)
                } catch (e) {
                    console.error(e)
                }
                return ee ? (null === Q && (Q = new Set), Q.add(n)) : v(n), n
            }
            return null === J && (J = t), null
        }

        function h(e) {
            return null !== $ && ($.has(e) || null !== e.alternate && $.has(e.alternate))
        }

        function p(e, t) {
            return m(e, t, !1)
        }

        function m(e, t) {
            re > ne && (Z = !0, r("185")), !j && t <= q && (B = null);
            for (var n = !0; null !== e && n;) {
                if (n = !1, (e.pendingWorkPriority === Pa || e.pendingWorkPriority > t) && (n = !0, e.pendingWorkPriority = t), null !== e.alternate && (e.alternate.pendingWorkPriority === Pa || e.alternate.pendingWorkPriority > t) && (n = !0, e.alternate.pendingWorkPriority = t), null === e.return) {
                    if (e.tag !== Ga) break;
                    var o = e.stateNode;
                    if (t === Pa || o.isScheduled || (o.isScheduled = !0, Y ? Y.nextScheduledRoot = o : G = o, Y = o), !j) switch (t) {
                        case Aa:
                            H ? l(Aa, null) : l(Ia, null);
                            break;
                        case Ia:
                            z || r("186");
                            break;
                        default:
                            X || (O(u), X = !0)
                    }
                }
                e = e.return
            }
        }

        function g(e, t) {
            var n = F;
            return n === Pa && (n = !R || e.internalContextTag & La || t ? Ra : Aa), n === Aa && (j || z) ? Ia : n
        }

        function v(e) {
            m(e, Ia, !0)
        }
        var y = fe(e),
            _ = de(e),
            b = y.popHostContainer,
            x = y.popHostContext,
            w = y.resetHostContainer,
            k = ue(e, y, _, p, g),
            E = k.beginWork,
            C = k.beginFailedWork,
            T = se(e, y, _).completeWork;
        y = le(e, f);
        var M = y.commitPlacement,
            S = y.commitDeletion,
            N = y.commitWork,
            P = y.commitLifeCycles,
            A = y.commitAttachRef,
            I = y.commitDetachRef,
            O = e.scheduleDeferredCallback,
            R = e.useSyncScheduling,
            D = e.prepareForCommit,
            L = e.resetAfterCommit,
            F = Pa,
            j = !1,
            U = !1,
            z = !1,
            H = !1,
            B = null,
            q = Pa,
            W = null,
            V = null,
            G = null,
            Y = null,
            X = !1,
            K = null,
            $ = null,
            Q = null,
            J = null,
            Z = !1,
            ee = !1,
            te = !1,
            ne = 1e3,
            re = 0,
            oe = null;
        return {
            scheduleUpdate: p,
            getPriorityContext: g,
            batchedUpdates: function(e, t) {
                var n = z;
                z = !0;
                try {
                    return e(t)
                } finally {
                    z = n, j || z || l(Ia, null)
                }
            },
            unbatchedUpdates: function(e) {
                var t = H,
                    n = z;
                H = z, z = !1;
                try {
                    return e()
                } finally {
                    z = n, H = t
                }
            },
            flushSync: function(e) {
                var t = z,
                    n = F;
                z = !0, F = Aa;
                try {
                    return e()
                } finally {
                    z = t, F = n, j && r("187"), l(Ia, null)
                }
            },
            deferredUpdates: function(e) {
                var t = F;
                F = Ra;
                try {
                    return e()
                } finally {
                    F = t
                }
            }
        }
    }

    function pe() {
        r("196")
    }

    function me(e) {
        return e ? (e = Xt.get(e), "number" == typeof e.tag ? pe(e) : e._processChildContext(e._context)) : bt
    }

    function ge(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function ve(e, t) {
        var n = ge(e);
        e = 0;
        for (var r; n;) {
            if (n.nodeType === iu) {
                if (r = e + n.textContent.length, e <= t && r >= t) return {
                    node: n,
                    offset: t - e
                };
                e = r
            }
            e: {
                for (; n;) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = ge(n)
        }
    }

    function ye() {
        return !au && gt.canUseDOM && (au = "textContent" in document.documentElement ? "textContent" : "innerText"), au
    }

    function _e() {
        r("211")
    }

    function be() {
        r("212")
    }

    function xe(e) {
        if (null == e) return null;
        if (e.nodeType === fu) return e;
        var t = Xt.get(e);
        if (t) return "number" == typeof t.tag ? _e(t) : be(t);
        "function" == typeof e.render ? r("188") : r("213", Object.keys(e))
    }

    function we(e) {
        if (void 0 !== e._hostParent) return e._hostParent;
        if ("number" == typeof e.tag) {
            do {
                e = e.return
            } while (e && e.tag !== du);
            if (e) return e
        }
        return null
    }

    function ke(e, t) {
        for (var n = 0, r = e; r; r = we(r)) n++;
        r = 0;
        for (var o = t; o; o = we(o)) r++;
        for (; 0 < n - r;) e = we(e), n--;
        for (; 0 < r - n;) t = we(t), r--;
        for (; n--;) {
            if (e === t || e === t.alternate) return e;
            e = we(e), t = we(t)
        }
        return null
    }

    function Ee(e, t, n) {
        (t = pu(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = C(n._dispatchListeners, t), n._dispatchInstances = C(n._dispatchInstances, e))
    }

    function Ce(e) {
        e && e.dispatchConfig.phasedRegistrationNames && hu.traverseTwoPhase(e._targetInst, Ee, e)
    }

    function Te(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
            var t = e._targetInst;
            t = t ? hu.getParentInstance(t) : null, hu.traverseTwoPhase(t, Ee, e)
        }
    }

    function Me(e, t, n) {
        e && n && n.dispatchConfig.registrationName && (t = pu(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = C(n._dispatchListeners, t), n._dispatchInstances = C(n._dispatchInstances, e))
    }

    function Se(e) {
        e && e.dispatchConfig.registrationName && Me(e._targetInst, null, e)
    }

    function Ne(e, t, n, r) {
        this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface;
        for (var o in e) e.hasOwnProperty(o) && ((t = e[o]) ? this[o] = t(n) : "target" === o ? this.target = r : this[o] = n[o]);
        return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? _t.thatReturnsTrue : _t.thatReturnsFalse, this.isPropagationStopped = _t.thatReturnsFalse, this
    }

    function Pe(e, t, n, r) {
        if (this.eventPool.length) {
            var o = this.eventPool.pop();
            return this.call(o, e, t, n, r), o
        }
        return new this(e, t, n, r)
    }

    function Ae(e) {
        e instanceof this || r("223"), e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e)
    }

    function Ie(e) {
        e.eventPool = [], e.getPooled = Pe, e.release = Ae
    }

    function Oe(e, t, n, r) {
        return Ne.call(this, e, t, n, r)
    }

    function Re(e, t, n, r) {
        return Ne.call(this, e, t, n, r)
    }

    function De(e, t) {
        switch (e) {
            case "topKeyUp":
                return -1 !== xu.indexOf(t.keyCode);
            case "topKeyDown":
                return 229 !== t.keyCode;
            case "topKeyPress":
            case "topMouseDown":
            case "topBlur":
                return !0;
            default:
                return !1
        }
    }

    function Le(e) {
        return e = e.detail, "object" == typeof e && "data" in e ? e.data : null
    }

    function Fe(e, t) {
        switch (e) {
            case "topCompositionEnd":
                return Le(t);
            case "topKeyPress":
                return 32 !== t.which ? null : (Pu = !0, Su);
            case "topTextInput":
                return e = t.data, e === Su && Pu ? null : e;
            default:
                return null
        }
    }

    function je(e, t) {
        if (Au) return "topCompositionEnd" === e || !wu && De(e, t) ? (e = yu.getData(), yu.reset(), Au = !1, e) : null;
        switch (e) {
            case "topPaste":
                return null;
            case "topKeyPress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case "topCompositionEnd":
                return Mu ? null : t.data;
            default:
                return null
        }
    }

    function Ue(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Ou[e.type] : "textarea" === t
    }

    function ze(e, t, n) {
        return e = Ne.getPooled(Ru.change, e, t, n), e.type = "change", dn.enqueueStateRestore(n), mu.accumulateTwoPhaseDispatches(e), e
    }

    function He(e) {
        xn.enqueueEvents(e), xn.processEventQueue(!1)
    }

    function Be(e) {
        var t = Yt.getNodeFromInstance(e);
        if (Zn.updateValueIfChanged(t)) return e
    }

    function qe(e, t) {
        if ("topChange" === e) return t
    }

    function We() {
        Du && (Du.detachEvent("onpropertychange", Ve), Lu = Du = null)
    }

    function Ve(e) {
        "value" === e.propertyName && Be(Lu) && (e = ze(Lu, e, k(e)), pn.batchedUpdates(He, e))
    }

    function Ge(e, t, n) {
        "topFocus" === e ? (We(), Du = t, Lu = n, Du.attachEvent("onpropertychange", Ve)) : "topBlur" === e && We()
    }

    function Ye(e) {
        if ("topSelectionChange" === e || "topKeyUp" === e || "topKeyDown" === e) return Be(Lu)
    }

    function Xe(e, t) {
        if ("topClick" === e) return Be(t)
    }

    function Ke(e, t) {
        if ("topInput" === e || "topChange" === e) return Be(t)
    }

    function $e(e, t, n, r) {
        return Ne.call(this, e, t, n, r)
    }

    function Qe(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = Uu[e]) && !!t[e]
    }

    function Je() {
        return Qe
    }

    function Ze(e, t, n, r) {
        return Ne.call(this, e, t, n, r)
    }

    function et(e, t) {
        if (Xu || null == Vu || Vu !== Et()) return null;
        var n = Vu;
        return "selectionStart" in n && lu.hasSelectionCapabilities(n) ? n = {
            start: n.selectionStart,
            end: n.selectionEnd
        } : window.getSelection ? (n = window.getSelection(), n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
        }) : n = void 0, Yu && xt(Yu, n) ? null : (Yu = n, e = Ne.getPooled(Wu.select, Gu, e, t), e.type = "select", e.target = Vu, mu.accumulateTwoPhaseDispatches(e), e)
    }

    function tt(e, t, n, r) {
        return Ne.call(this, e, t, n, r)
    }

    function nt(e, t, n, r) {
        return Ne.call(this, e, t, n, r)
    }

    function rt(e, t, n, r) {
        return Ne.call(this, e, t, n, r)
    }

    function ot(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 32 <= e || 13 === e ? e : 0
    }

    function it(e, t, n, r) {
        return Ne.call(this, e, t, n, r)
    }

    function at(e, t, n, r) {
        return Ne.call(this, e, t, n, r)
    }

    function ut(e, t, n, r) {
        return Ne.call(this, e, t, n, r)
    }

    function st(e, t, n, r) {
        return Ne.call(this, e, t, n, r)
    }

    function ct(e, t, n, r) {
        return Ne.call(this, e, t, n, r)
    }

    function lt(e) {
        return e[1].toUpperCase()
    }

    function ft(e) {
        return !(!e || e.nodeType !== hs && e.nodeType !== gs && e.nodeType !== vs && (e.nodeType !== ms || " react-mount-point-unstable " !== e.nodeValue))
    }

    function dt(e) {
        return !(!(e = e ? e.nodeType === gs ? e.documentElement : e.firstChild : null) || e.nodeType !== hs || !e.hasAttribute(ys))
    }

    function ht(e, t, n, o, i) {
        ft(n) || r("200");
        var a = n._reactRootContainer;
        if (a) Ds.updateContainer(t, a, e, i);
        else {
            if (!o && !dt(n))
                for (o = void 0; o = n.lastChild;) n.removeChild(o);
            var u = Ds.createContainer(n);
            a = n._reactRootContainer = u, Ds.unbatchedUpdates(function() {
                Ds.updateContainer(t, u, e, i)
            })
        }
        return Ds.getPublicRootInstance(a)
    }

    function pt(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        return ft(t) || r("200"), _o.createPortal(e, t, null, n)
    }
    var mt = n(2);
    n(61);
    var gt = n(129),
        vt = n(87),
        yt = n(130),
        _t = n(41),
        bt = n(88),
        xt = n(131),
        wt = n(132),
        kt = n(135),
        Et = n(136);
    mt || r("227");
    var Ct, Tt, Mt = {
            Namespaces: {
                html: "http://www.w3.org/1999/xhtml",
                mathml: "http://www.w3.org/1998/Math/MathML",
                svg: "http://www.w3.org/2000/svg"
            },
            getIntrinsicNamespace: o,
            getChildNamespace: function(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? o(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
            }
        },
        St = null,
        Nt = {},
        Pt = {
            plugins: [],
            eventNameDispatchConfigs: {},
            registrationNameModules: {},
            registrationNameDependencies: {},
            possibleRegistrationNames: null,
            injectEventPluginOrder: function(e) {
                St && r("101"), St = Array.prototype.slice.call(e), i()
            },
            injectEventPluginsByName: function(e) {
                var t, n = !1;
                for (t in e)
                    if (e.hasOwnProperty(t)) {
                        var o = e[t];
                        Nt.hasOwnProperty(t) && Nt[t] === o || (Nt[t] && r("102", t), Nt[t] = o, n = !0)
                    }
                n && i()
            }
        },
        At = Pt,
        It = {
            children: !0,
            dangerouslySetInnerHTML: !0,
            autoFocus: !0,
            defaultValue: !0,
            defaultChecked: !0,
            innerHTML: !0,
            suppressContentEditableWarning: !0,
            style: !0
        },
        Ot = {
            MUST_USE_PROPERTY: 1,
            HAS_BOOLEAN_VALUE: 4,
            HAS_NUMERIC_VALUE: 8,
            HAS_POSITIVE_NUMERIC_VALUE: 24,
            HAS_OVERLOADED_BOOLEAN_VALUE: 32,
            HAS_STRING_BOOLEAN_VALUE: 64,
            injectDOMPropertyConfig: function(e) {
                var t = Ot,
                    n = e.Properties || {},
                    o = e.DOMAttributeNamespaces || {},
                    i = e.DOMAttributeNames || {};
                e = e.DOMMutationMethods || {};
                for (var a in n) {
                    Rt.properties.hasOwnProperty(a) && r("48", a);
                    var s = a.toLowerCase(),
                        c = n[a];
                    s = {
                        attributeName: s,
                        attributeNamespace: null,
                        propertyName: a,
                        mutationMethod: null,
                        mustUseProperty: u(c, t.MUST_USE_PROPERTY),
                        hasBooleanValue: u(c, t.HAS_BOOLEAN_VALUE),
                        hasNumericValue: u(c, t.HAS_NUMERIC_VALUE),
                        hasPositiveNumericValue: u(c, t.HAS_POSITIVE_NUMERIC_VALUE),
                        hasOverloadedBooleanValue: u(c, t.HAS_OVERLOADED_BOOLEAN_VALUE),
                        hasStringBooleanValue: u(c, t.HAS_STRING_BOOLEAN_VALUE)
                    }, 1 >= s.hasBooleanValue + s.hasNumericValue + s.hasOverloadedBooleanValue || r("50", a), i.hasOwnProperty(a) && (s.attributeName = i[a]), o.hasOwnProperty(a) && (s.attributeNamespace = o[a]), e.hasOwnProperty(a) && (s.mutationMethod = e[a]), Rt.properties[a] = s
                }
            }
        },
        Rt = {
            ID_ATTRIBUTE_NAME: "data-reactid",
            ROOT_ATTRIBUTE_NAME: "data-reactroot",
            ATTRIBUTE_NAME_START_CHAR: ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
            ATTRIBUTE_NAME_CHAR: ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
            properties: {},
            shouldSetAttribute: function(e, t) {
                if (Rt.isReservedProp(e) || !("o" !== e[0] && "O" !== e[0] || "n" !== e[1] && "N" !== e[1])) return !1;
                if (null === t) return !0;
                switch (typeof t) {
                    case "boolean":
                        return Rt.shouldAttributeAcceptBooleanValue(e);
                    case "undefined":
                    case "number":
                    case "string":
                    case "object":
                        return !0;
                    default:
                        return !1
                }
            },
            getPropertyInfo: function(e) {
                return Rt.properties.hasOwnProperty(e) ? Rt.properties[e] : null
            },
            shouldAttributeAcceptBooleanValue: function(e) {
                if (Rt.isReservedProp(e)) return !0;
                var t = Rt.getPropertyInfo(e);
                return t ? t.hasBooleanValue || t.hasStringBooleanValue || t.hasOverloadedBooleanValue : "data-" === (e = e.toLowerCase().slice(0, 5)) || "aria-" === e
            },
            isReservedProp: function(e) {
                return It.hasOwnProperty(e)
            },
            injection: Ot
        },
        Dt = Rt,
        Lt = {
            IndeterminateComponent: 0,
            FunctionalComponent: 1,
            ClassComponent: 2,
            HostRoot: 3,
            HostPortal: 4,
            HostComponent: 5,
            HostText: 6,
            CoroutineComponent: 7,
            CoroutineHandlerPhase: 8,
            YieldComponent: 9,
            Fragment: 10
        },
        Ft = {
            ELEMENT_NODE: 1,
            TEXT_NODE: 3,
            COMMENT_NODE: 8,
            DOCUMENT_NODE: 9,
            DOCUMENT_FRAGMENT_NODE: 11
        },
        jt = Lt.HostComponent,
        Ut = Lt.HostText,
        zt = Ft.ELEMENT_NODE,
        Ht = Ft.COMMENT_NODE,
        Bt = Dt.ID_ATTRIBUTE_NAME,
        qt = {
            hasCachedChildNodes: 1
        },
        Wt = Math.random().toString(36).slice(2),
        Vt = "__reactInternalInstance$" + Wt,
        Gt = "__reactEventHandlers$" + Wt,
        Yt = {
            getClosestInstanceFromNode: f,
            getInstanceFromNode: function(e) {
                var t = e[Vt];
                return t ? t.tag === jt || t.tag === Ut ? t : t._hostNode === e ? t : null : (t = f(e), null != t && t._hostNode === e ? t : null)
            },
            getNodeFromInstance: function(e) {
                if (e.tag === jt || e.tag === Ut) return e.stateNode;
                if (void 0 === e._hostNode && r("33"), e._hostNode) return e._hostNode;
                for (var t = []; !e._hostNode;) t.push(e), e._hostParent || r("34"), e = e._hostParent;
                for (; t.length; e = t.pop()) l(e, e._hostNode);
                return e._hostNode
            },
            precacheChildNodes: l,
            precacheNode: c,
            uncacheNode: function(e) {
                var t = e._hostNode;
                t && (delete t[Vt], e._hostNode = null)
            },
            precacheFiberNode: function(e, t) {
                t[Vt] = e
            },
            getFiberCurrentPropsFromNode: function(e) {
                return e[Gt] || null
            },
            updateFiberProps: function(e, t) {
                e[Gt] = t
            }
        },
        Xt = {
            remove: function(e) {
                e._reactInternalFiber = void 0
            },
            get: function(e) {
                return e._reactInternalFiber
            },
            has: function(e) {
                return void 0 !== e._reactInternalFiber
            },
            set: function(e, t) {
                e._reactInternalFiber = t
            }
        },
        Kt = {
            ReactCurrentOwner: mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
        },
        $t = {
            NoEffect: 0,
            PerformedWork: 1,
            Placement: 2,
            Update: 4,
            PlacementAndUpdate: 6,
            Deletion: 8,
            ContentReset: 16,
            Callback: 32,
            Err: 64,
            Ref: 128
        },
        Qt = Lt.HostComponent,
        Jt = Lt.HostRoot,
        Zt = Lt.HostPortal,
        en = Lt.HostText,
        tn = $t.NoEffect,
        nn = $t.Placement,
        rn = {
            isFiberMounted: function(e) {
                return 2 === h(e)
            },
            isMounted: function(e) {
                return !!(e = Xt.get(e)) && 2 === h(e)
            },
            findCurrentFiberUsingSlowPath: m,
            findCurrentHostFiber: function(e) {
                if (!(e = m(e))) return null;
                for (var t = e;;) {
                    if (t.tag === Qt || t.tag === en) return t;
                    if (t.child) t.child.return = t, t = t.child;
                    else {
                        if (t === e) break;
                        for (; !t.sibling;) {
                            if (!t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                }
                return null
            },
            findCurrentHostFiberWithNoPortals: function(e) {
                if (!(e = m(e))) return null;
                for (var t = e;;) {
                    if (t.tag === Qt || t.tag === en) return t;
                    if (t.child && t.tag !== Zt) t.child.return = t, t = t.child;
                    else {
                        if (t === e) break;
                        for (; !t.sibling;) {
                            if (!t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                }
                return null
            }
        },
        on = {
            _caughtError: null,
            _hasCaughtError: !1,
            _rethrowError: null,
            _hasRethrowError: !1,
            injection: {
                injectErrorUtils: function(e) {
                    "function" != typeof e.invokeGuardedCallback && r("197"), g = e.invokeGuardedCallback
                }
            },
            invokeGuardedCallback: function(e, t, n, r, o, i, a, u, s) {
                g.apply(on, arguments)
            },
            invokeGuardedCallbackAndCatchFirstError: function(e, t, n, r, o, i, a, u, s) {
                if (on.invokeGuardedCallback.apply(this, arguments), on.hasCaughtError()) {
                    var c = on.clearCaughtError();
                    on._hasRethrowError || (on._hasRethrowError = !0, on._rethrowError = c)
                }
            },
            rethrowCaughtError: function() {
                return v.apply(on, arguments)
            },
            hasCaughtError: function() {
                return on._hasCaughtError
            },
            clearCaughtError: function() {
                if (on._hasCaughtError) {
                    var e = on._caughtError;
                    return on._caughtError = null, on._hasCaughtError = !1, e
                }
                r("198")
            }
        },
        an = on,
        un = {
            isEndish: function(e) {
                return "topMouseUp" === e || "topTouchEnd" === e || "topTouchCancel" === e
            },
            isMoveish: function(e) {
                return "topMouseMove" === e || "topTouchMove" === e
            },
            isStartish: function(e) {
                return "topMouseDown" === e || "topTouchStart" === e
            },
            executeDirectDispatch: function(e) {
                var t = e._dispatchListeners,
                    n = e._dispatchInstances;
                return Array.isArray(t) && r("103"), e.currentTarget = t ? un.getNodeFromInstance(n) : null, t = t ? t(e) : null, e.currentTarget = null, e._dispatchListeners = null, e._dispatchInstances = null, t
            },
            executeDispatchesInOrder: function(e, t) {
                var n = e._dispatchListeners,
                    r = e._dispatchInstances;
                if (Array.isArray(n))
                    for (var o = 0; o < n.length && !e.isPropagationStopped(); o++) y(e, t, n[o], r[o]);
                else n && y(e, t, n, r);
                e._dispatchListeners = null, e._dispatchInstances = null
            },
            executeDispatchesInOrderStopAtTrue: function(e) {
                e: {
                    var t = e._dispatchListeners,
                        n = e._dispatchInstances;
                    if (Array.isArray(t)) {
                        for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
                            if (t[r](e, n[r])) {
                                t = n[r];
                                break e
                            }
                    } else if (t && t(e, n)) {
                        t = n;
                        break e
                    }
                    t = null
                }
                return e._dispatchInstances = null,
                e._dispatchListeners = null,
                t
            },
            hasDispatches: function(e) {
                return !!e._dispatchListeners
            },
            getFiberCurrentPropsFromNode: function(e) {
                return Ct.getFiberCurrentPropsFromNode(e)
            },
            getInstanceFromNode: function(e) {
                return Ct.getInstanceFromNode(e)
            },
            getNodeFromInstance: function(e) {
                return Ct.getNodeFromInstance(e)
            },
            injection: {
                injectComponentTree: function(e) {
                    Ct = e
                }
            }
        },
        sn = un,
        cn = null,
        ln = null,
        fn = null,
        dn = {
            injection: {
                injectFiberControlledHostComponent: function(e) {
                    cn = e
                }
            },
            enqueueStateRestore: function(e) {
                ln ? fn ? fn.push(e) : fn = [e] : ln = e
            },
            restoreStateIfNeeded: function() {
                if (ln) {
                    var e = ln,
                        t = fn;
                    if (fn = ln = null, _(e), t)
                        for (e = 0; e < t.length; e++) _(t[e])
                }
            }
        },
        hn = !1,
        pn = {
            batchedUpdates: function(e, t) {
                if (hn) return b(w, e, t);
                hn = !0;
                try {
                    return b(w, e, t)
                } finally {
                    hn = !1, dn.restoreStateIfNeeded()
                }
            },
            injection: {
                injectStackBatchedUpdates: function(e) {
                    b = e
                },
                injectFiberBatchedUpdates: function(e) {
                    x = e
                }
            }
        },
        mn = Ft.TEXT_NODE,
        gn = Lt.HostRoot,
        vn = [],
        yn = {
            _enabled: !0,
            _handleTopLevel: null,
            setHandleTopLevel: function(e) {
                yn._handleTopLevel = e
            },
            setEnabled: function(e) {
                yn._enabled = !!e
            },
            isEnabled: function() {
                return yn._enabled
            },
            trapBubbledEvent: function(e, t, n) {
                return n ? yt.listen(n, t, yn.dispatchEvent.bind(null, e)) : null
            },
            trapCapturedEvent: function(e, t, n) {
                return n ? yt.capture(n, t, yn.dispatchEvent.bind(null, e)) : null
            },
            dispatchEvent: function(e, t) {
                if (yn._enabled) {
                    var n = k(t);
                    if (n = Yt.getClosestInstanceFromNode(n), null === n || "number" != typeof n.tag || rn.isFiberMounted(n) || (n = null), vn.length) {
                        var r = vn.pop();
                        r.topLevelType = e, r.nativeEvent = t, r.targetInst = n, e = r
                    } else e = {
                        topLevelType: e,
                        nativeEvent: t,
                        targetInst: n,
                        ancestors: []
                    };
                    try {
                        pn.batchedUpdates(E, e)
                    } finally {
                        e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, 10 > vn.length && vn.push(e)
                    }
                }
            }
        },
        _n = yn,
        bn = null,
        xn = {
            injection: {
                injectEventPluginOrder: At.injectEventPluginOrder,
                injectEventPluginsByName: At.injectEventPluginsByName
            },
            getListener: function(e, t) {
                if ("number" == typeof e.tag) {
                    var n = e.stateNode;
                    if (!n) return null;
                    var o = sn.getFiberCurrentPropsFromNode(n);
                    if (!o) return null;
                    if (n = o[t], P(t, e.type, o)) return null
                } else {
                    if ("string" == typeof(o = e._currentElement) || "number" == typeof o || !e._rootNodeID) return null;
                    if (e = o.props, n = e[t], P(t, o.type, e)) return null
                }
                return n && "function" != typeof n && r("231", t, typeof n), n
            },
            extractEvents: function(e, t, n, r) {
                for (var o, i = At.plugins, a = 0; a < i.length; a++) {
                    var u = i[a];
                    u && (u = u.extractEvents(e, t, n, r)) && (o = C(o, u))
                }
                return o
            },
            enqueueEvents: function(e) {
                e && (bn = C(bn, e))
            },
            processEventQueue: function(e) {
                var t = bn;
                bn = null, e ? T(t, S) : T(t, N), bn && r("95"), an.rethrowCaughtError()
            }
        };
    gt.canUseDOM && (Tt = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", ""));
    var wn = {
            animationend: I("Animation", "AnimationEnd"),
            animationiteration: I("Animation", "AnimationIteration"),
            animationstart: I("Animation", "AnimationStart"),
            transitionend: I("Transition", "TransitionEnd")
        },
        kn = {},
        En = {};
    gt.canUseDOM && (En = document.createElement("div").style, "AnimationEvent" in window || (delete wn.animationend.animation, delete wn.animationiteration.animation, delete wn.animationstart.animation), "TransitionEvent" in window || delete wn.transitionend.transition);
    var Cn = {
            topAbort: "abort",
            topAnimationEnd: O("animationend") || "animationend",
            topAnimationIteration: O("animationiteration") || "animationiteration",
            topAnimationStart: O("animationstart") || "animationstart",
            topBlur: "blur",
            topCancel: "cancel",
            topCanPlay: "canplay",
            topCanPlayThrough: "canplaythrough",
            topChange: "change",
            topClick: "click",
            topClose: "close",
            topCompositionEnd: "compositionend",
            topCompositionStart: "compositionstart",
            topCompositionUpdate: "compositionupdate",
            topContextMenu: "contextmenu",
            topCopy: "copy",
            topCut: "cut",
            topDoubleClick: "dblclick",
            topDrag: "drag",
            topDragEnd: "dragend",
            topDragEnter: "dragenter",
            topDragExit: "dragexit",
            topDragLeave: "dragleave",
            topDragOver: "dragover",
            topDragStart: "dragstart",
            topDrop: "drop",
            topDurationChange: "durationchange",
            topEmptied: "emptied",
            topEncrypted: "encrypted",
            topEnded: "ended",
            topError: "error",
            topFocus: "focus",
            topInput: "input",
            topKeyDown: "keydown",
            topKeyPress: "keypress",
            topKeyUp: "keyup",
            topLoadedData: "loadeddata",
            topLoad: "load",
            topLoadedMetadata: "loadedmetadata",
            topLoadStart: "loadstart",
            topMouseDown: "mousedown",
            topMouseMove: "mousemove",
            topMouseOut: "mouseout",
            topMouseOver: "mouseover",
            topMouseUp: "mouseup",
            topPaste: "paste",
            topPause: "pause",
            topPlay: "play",
            topPlaying: "playing",
            topProgress: "progress",
            topRateChange: "ratechange",
            topScroll: "scroll",
            topSeeked: "seeked",
            topSeeking: "seeking",
            topSelectionChange: "selectionchange",
            topStalled: "stalled",
            topSuspend: "suspend",
            topTextInput: "textInput",
            topTimeUpdate: "timeupdate",
            topToggle: "toggle",
            topTouchCancel: "touchcancel",
            topTouchEnd: "touchend",
            topTouchMove: "touchmove",
            topTouchStart: "touchstart",
            topTransitionEnd: O("transitionend") || "transitionend",
            topVolumeChange: "volumechange",
            topWaiting: "waiting",
            topWheel: "wheel"
        },
        Tn = {},
        Mn = 0,
        Sn = "_reactListenersID" + ("" + Math.random()).slice(2),
        Nn = vt({}, {
            handleTopLevel: function(e, t, n, r) {
                e = xn.extractEvents(e, t, n, r), xn.enqueueEvents(e), xn.processEventQueue(!1)
            }
        }, {
            setEnabled: function(e) {
                _n && _n.setEnabled(e)
            },
            isEnabled: function() {
                return !(!_n || !_n.isEnabled())
            },
            listenTo: function(e, t) {
                var n = R(t);
                e = At.registrationNameDependencies[e];
                for (var r = 0; r < e.length; r++) {
                    var o = e[r];
                    n.hasOwnProperty(o) && n[o] || ("topWheel" === o ? A("wheel") ? _n.trapBubbledEvent("topWheel", "wheel", t) : A("mousewheel") ? _n.trapBubbledEvent("topWheel", "mousewheel", t) : _n.trapBubbledEvent("topWheel", "DOMMouseScroll", t) : "topScroll" === o ? _n.trapCapturedEvent("topScroll", "scroll", t) : "topFocus" === o || "topBlur" === o ? (_n.trapCapturedEvent("topFocus", "focus", t), _n.trapCapturedEvent("topBlur", "blur", t), n.topBlur = !0, n.topFocus = !0) : "topCancel" === o ? (A("cancel", !0) && _n.trapCapturedEvent("topCancel", "cancel", t), n.topCancel = !0) : "topClose" === o ? (A("close", !0) && _n.trapCapturedEvent("topClose", "close", t), n.topClose = !0) : Cn.hasOwnProperty(o) && _n.trapBubbledEvent(o, Cn[o], t), n[o] = !0)
                }
            },
            isListeningToAllDependencies: function(e, t) {
                t = R(t), e = At.registrationNameDependencies[e];
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (!t.hasOwnProperty(r) || !t[r]) return !1
                }
                return !0
            },
            trapBubbledEvent: function(e, t, n) {
                return _n.trapBubbledEvent(e, t, n)
            },
            trapCapturedEvent: function(e, t, n) {
                return _n.trapCapturedEvent(e, t, n)
            }
        }),
        Pn = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        An = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Pn).forEach(function(e) {
        An.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), Pn[t] = Pn[e]
        })
    });
    var In = {
            isUnitlessNumber: Pn,
            shorthandPropertyExpansions: {
                background: {
                    backgroundAttachment: !0,
                    backgroundColor: !0,
                    backgroundImage: !0,
                    backgroundPositionX: !0,
                    backgroundPositionY: !0,
                    backgroundRepeat: !0
                },
                backgroundPosition: {
                    backgroundPositionX: !0,
                    backgroundPositionY: !0
                },
                border: {
                    borderWidth: !0,
                    borderStyle: !0,
                    borderColor: !0
                },
                borderBottom: {
                    borderBottomWidth: !0,
                    borderBottomStyle: !0,
                    borderBottomColor: !0
                },
                borderLeft: {
                    borderLeftWidth: !0,
                    borderLeftStyle: !0,
                    borderLeftColor: !0
                },
                borderRight: {
                    borderRightWidth: !0,
                    borderRightStyle: !0,
                    borderRightColor: !0
                },
                borderTop: {
                    borderTopWidth: !0,
                    borderTopStyle: !0,
                    borderTopColor: !0
                },
                font: {
                    fontStyle: !0,
                    fontVariant: !0,
                    fontWeight: !0,
                    fontSize: !0,
                    lineHeight: !0,
                    fontFamily: !0
                },
                outline: {
                    outlineWidth: !0,
                    outlineStyle: !0,
                    outlineColor: !0
                }
            }
        },
        On = In.isUnitlessNumber,
        Rn = !1;
    if (gt.canUseDOM) {
        var Dn = document.createElement("div").style;
        try {
            Dn.font = ""
        } catch (e) {
            Rn = !0
        }
    }
    var Ln, Fn = {
            createDangerousStringForStyles: function() {},
            setValueForStyles: function(e, t) {
                e = e.style;
                for (var n in t)
                    if (t.hasOwnProperty(n)) {
                        var r = 0 === n.indexOf("--"),
                            o = n,
                            i = t[n];
                        if (o = null == i || "boolean" == typeof i || "" === i ? "" : r || "number" != typeof i || 0 === i || On.hasOwnProperty(o) && On[o] ? ("" + i).trim() : i + "px", "float" === n && (n = "cssFloat"), r) e.setProperty(n, o);
                        else if (o) e[n] = o;
                        else if (r = Rn && In.shorthandPropertyExpansions[n])
                            for (var a in r) e[a] = "";
                        else e[n] = ""
                    }
            }
        },
        jn = new RegExp("^[" + Dt.ATTRIBUTE_NAME_START_CHAR + "][" + Dt.ATTRIBUTE_NAME_CHAR + "]*$"),
        Un = {},
        zn = {},
        Hn = {
            setAttributeForID: function(e, t) {
                e.setAttribute(Dt.ID_ATTRIBUTE_NAME, t)
            },
            setAttributeForRoot: function(e) {
                e.setAttribute(Dt.ROOT_ATTRIBUTE_NAME, "")
            },
            getValueForProperty: function() {},
            getValueForAttribute: function() {},
            setValueForProperty: function(e, t, n) {
                var r = Dt.getPropertyInfo(t);
                if (r && Dt.shouldSetAttribute(t, n)) {
                    var o = r.mutationMethod;
                    o ? o(e, n) : null == n || r.hasBooleanValue && !n || r.hasNumericValue && isNaN(n) || r.hasPositiveNumericValue && 1 > n || r.hasOverloadedBooleanValue && !1 === n ? Hn.deleteValueForProperty(e, t) : r.mustUseProperty ? e[r.propertyName] = n : (t = r.attributeName, (o = r.attributeNamespace) ? e.setAttributeNS(o, t, "" + n) : r.hasBooleanValue || r.hasOverloadedBooleanValue && !0 === n ? e.setAttribute(t, "") : e.setAttribute(t, "" + n))
                } else Hn.setValueForAttribute(e, t, Dt.shouldSetAttribute(t, n) ? n : null)
            },
            setValueForAttribute: function(e, t, n) {
                D(t) && (null == n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            },
            deleteValueForAttribute: function(e, t) {
                e.removeAttribute(t)
            },
            deleteValueForProperty: function(e, t) {
                var n = Dt.getPropertyInfo(t);
                n ? (t = n.mutationMethod) ? t(e, void 0) : n.mustUseProperty ? e[n.propertyName] = !n.hasBooleanValue && "" : e.removeAttribute(n.attributeName) : e.removeAttribute(t)
            }
        },
        Bn = Hn,
        qn = Kt.ReactDebugCurrentFrame,
        Wn = {
            current: null,
            phase: null,
            resetCurrentFiber: function() {
                qn.getCurrentStack = null, Wn.current = null, Wn.phase = null
            },
            setCurrentFiber: function(e, t) {
                qn.getCurrentStack = L, Wn.current = e, Wn.phase = t
            },
            getCurrentFiberOwnerName: function() {
                return null
            },
            getCurrentFiberStackAddendum: L
        },
        Vn = Wn,
        Gn = {
            getHostProps: function(e, t) {
                var n = t.value,
                    r = t.checked;
                return vt({
                    type: void 0,
                    step: void 0,
                    min: void 0,
                    max: void 0
                }, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: null != n ? n : e._wrapperState.initialValue,
                    checked: null != r ? r : e._wrapperState.initialChecked
                })
            },
            initWrapperState: function(e, t) {
                var n = t.defaultValue;
                e._wrapperState = {
                    initialChecked: null != t.checked ? t.checked : t.defaultChecked,
                    initialValue: null != t.value ? t.value : n,
                    controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                }
            },
            updateWrapper: function(e, t) {
                var n = t.checked;
                null != n && Bn.setValueForProperty(e, "checked", n || !1), n = t.value, null != n ? 0 === n && "" === e.value ? e.value = "0" : "number" === t.type ? (t = parseFloat(e.value) || 0, (n != t || n == t && e.value != n) && (e.value = "" + n)) : e.value !== "" + n && (e.value = "" + n) : (null == t.value && null != t.defaultValue && e.defaultValue !== "" + t.defaultValue && (e.defaultValue = "" + t.defaultValue), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked))
            },
            postMountWrapper: function(e, t) {
                switch (t.type) {
                    case "submit":
                    case "reset":
                        break;
                    case "color":
                    case "date":
                    case "datetime":
                    case "datetime-local":
                    case "month":
                    case "time":
                    case "week":
                        e.value = "", e.value = e.defaultValue;
                        break;
                    default:
                        e.value = e.value
                }
                t = e.name, "" !== t && (e.name = ""), e.defaultChecked = !e.defaultChecked, e.defaultChecked = !e.defaultChecked, "" !== t && (e.name = t)
            },
            restoreControlledState: function(e, t) {
                Gn.updateWrapper(e, t);
                var n = t.name;
                if ("radio" === t.type && null != n) {
                    for (t = e; t.parentNode;) t = t.parentNode;
                    for (n = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var o = n[t];
                        if (o !== e && o.form === e.form) {
                            var i = Yt.getFiberCurrentPropsFromNode(o);
                            i || r("90"), Gn.updateWrapper(o, i)
                        }
                    }
                }
            }
        },
        Yn = Gn,
        Xn = {
            validateProps: function() {},
            postMountWrapper: function(e, t) {
                null != t.value && e.setAttribute("value", t.value)
            },
            getHostProps: function(e, t) {
                return e = vt({
                    children: void 0
                }, t), (t = F(t.children)) && (e.children = t), e
            }
        },
        Kn = {
            getHostProps: function(e, t) {
                return vt({}, t, {
                    value: void 0
                })
            },
            initWrapperState: function(e, t) {
                var n = t.value;
                e._wrapperState = {
                    initialValue: null != n ? n : t.defaultValue,
                    wasMultiple: !!t.multiple
                }
            },
            postMountWrapper: function(e, t) {
                e.multiple = !!t.multiple;
                var n = t.value;
                null != n ? j(e, !!t.multiple, n) : null != t.defaultValue && j(e, !!t.multiple, t.defaultValue)
            },
            postUpdateWrapper: function(e, t) {
                e._wrapperState.initialValue = void 0;
                var n = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = !!t.multiple;
                var r = t.value;
                null != r ? j(e, !!t.multiple, r) : n !== !!t.multiple && (null != t.defaultValue ? j(e, !!t.multiple, t.defaultValue) : j(e, !!t.multiple, t.multiple ? [] : ""))
            },
            restoreControlledState: function(e, t) {
                var n = t.value;
                null != n && j(e, !!t.multiple, n)
            }
        },
        $n = {
            getHostProps: function(e, t) {
                return null != t.dangerouslySetInnerHTML && r("91"), vt({}, t, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue
                })
            },
            initWrapperState: function(e, t) {
                var n = t.value,
                    o = n;
                null == n && (n = t.defaultValue, t = t.children, null != t && (null != n && r("92"), Array.isArray(t) && (1 >= t.length || r("93"), t = t[0]), n = "" + t), null == n && (n = ""), o = n), e._wrapperState = {
                    initialValue: "" + o
                }
            },
            updateWrapper: function(e, t) {
                var n = t.value;
                null != n && (n = "" + n, n !== e.value && (e.value = n), null == t.defaultValue && (e.defaultValue = n)), null != t.defaultValue && (e.defaultValue = t.defaultValue)
            },
            postMountWrapper: function(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && (e.value = t)
            },
            restoreControlledState: function(e, t) {
                $n.updateWrapper(e, t)
            }
        },
        Qn = $n,
        Jn = vt({
            menuitem: !0
        }, {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        }),
        Zn = {
            _getTrackerFromNode: function(e) {
                return e._valueTracker
            },
            track: function(e) {
                e._valueTracker || (e._valueTracker = H(e))
            },
            updateValueIfChanged: function(e) {
                if (!e) return !1;
                var t = e._valueTracker;
                if (!t) return !0;
                var n = t.getValue(),
                    r = "";
                return e && (r = z(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
            },
            stopTracking: function(e) {
                (e = e._valueTracker) && e.stopTracking()
            }
        },
        er = Mt.Namespaces,
        tr = function(e) {
            return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
                MSApp.execUnsafeLocalFunction(function() {
                    return e(t, n)
                })
            } : e
        }(function(e, t) {
            if (e.namespaceURI !== er.svg || "innerHTML" in e) e.innerHTML = t;
            else
                for (Ln = Ln || document.createElement("div"), Ln.innerHTML = "<svg>" + t + "</svg>", t = Ln.firstChild; t.firstChild;) e.appendChild(t.firstChild)
        }),
        nr = /["'&<>]/,
        rr = Ft.TEXT_NODE;
    gt.canUseDOM && ("textContent" in document.documentElement || (q = function(e, t) {
        if (e.nodeType === rr) e.nodeValue = t;
        else {
            if ("boolean" == typeof t || "number" == typeof t) t = "" + t;
            else {
                t = "" + t;
                var n = nr.exec(t);
                if (n) {
                    var r, o = "",
                        i = 0;
                    for (r = n.index; r < t.length; r++) {
                        switch (t.charCodeAt(r)) {
                            case 34:
                                n = "&quot;";
                                break;
                            case 38:
                                n = "&amp;";
                                break;
                            case 39:
                                n = "&#x27;";
                                break;
                            case 60:
                                n = "&lt;";
                                break;
                            case 62:
                                n = "&gt;";
                                break;
                            default:
                                continue
                        }
                        i !== r && (o += t.substring(i, r)), i = r + 1, o += n
                    }
                    t = i !== r ? o + t.substring(i, r) : o
                }
            }
            tr(e, t)
        }
    }));
    var or = q,
        ir = (Vn.getCurrentFiberOwnerName, Ft.DOCUMENT_NODE),
        ar = Ft.DOCUMENT_FRAGMENT_NODE,
        ur = Nn.listenTo,
        sr = At.registrationNameModules,
        cr = Mt.Namespaces.html,
        lr = Mt.getIntrinsicNamespace,
        fr = {
            topAbort: "abort",
            topCanPlay: "canplay",
            topCanPlayThrough: "canplaythrough",
            topDurationChange: "durationchange",
            topEmptied: "emptied",
            topEncrypted: "encrypted",
            topEnded: "ended",
            topError: "error",
            topLoadedData: "loadeddata",
            topLoadedMetadata: "loadedmetadata",
            topLoadStart: "loadstart",
            topPause: "pause",
            topPlay: "play",
            topPlaying: "playing",
            topProgress: "progress",
            topRateChange: "ratechange",
            topSeeked: "seeked",
            topSeeking: "seeking",
            topStalled: "stalled",
            topSuspend: "suspend",
            topTimeUpdate: "timeupdate",
            topVolumeChange: "volumechange",
            topWaiting: "waiting"
        },
        dr = {
            createElement: function(e, t, n, r) {
                return n = n.nodeType === ir ? n : n.ownerDocument, r === cr && (r = lr(e)), r === cr ? "script" === e ? (e = n.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : e = "string" == typeof t.is ? n.createElement(e, {
                    is: t.is
                }) : n.createElement(e) : e = n.createElementNS(r, e), e
            },
            createTextNode: function(e, t) {
                return (t.nodeType === ir ? t : t.ownerDocument).createTextNode(e)
            },
            setInitialProperties: function(e, t, n, r) {
                var o = B(t, n);
                switch (t) {
                    case "iframe":
                    case "object":
                        Nn.trapBubbledEvent("topLoad", "load", e);
                        var i = n;
                        break;
                    case "video":
                    case "audio":
                        for (i in fr) fr.hasOwnProperty(i) && Nn.trapBubbledEvent(i, fr[i], e);
                        i = n;
                        break;
                    case "source":
                        Nn.trapBubbledEvent("topError", "error", e), i = n;
                        break;
                    case "img":
                    case "image":
                        Nn.trapBubbledEvent("topError", "error", e), Nn.trapBubbledEvent("topLoad", "load", e), i = n;
                        break;
                    case "form":
                        Nn.trapBubbledEvent("topReset", "reset", e), Nn.trapBubbledEvent("topSubmit", "submit", e), i = n;
                        break;
                    case "details":
                        Nn.trapBubbledEvent("topToggle", "toggle", e), i = n;
                        break;
                    case "input":
                        Yn.initWrapperState(e, n), i = Yn.getHostProps(e, n), Nn.trapBubbledEvent("topInvalid", "invalid", e), W(r, "onChange");
                        break;
                    case "option":
                        Xn.validateProps(e, n), i = Xn.getHostProps(e, n);
                        break;
                    case "select":
                        Kn.initWrapperState(e, n), i = Kn.getHostProps(e, n), Nn.trapBubbledEvent("topInvalid", "invalid", e), W(r, "onChange");
                        break;
                    case "textarea":
                        Qn.initWrapperState(e, n), i = Qn.getHostProps(e, n), Nn.trapBubbledEvent("topInvalid", "invalid", e), W(r, "onChange");
                        break;
                    default:
                        i = n
                }
                U(t, i);
                var a, u = i;
                for (a in u)
                    if (u.hasOwnProperty(a)) {
                        var s = u[a];
                        "style" === a ? Fn.setValueForStyles(e, s) : "dangerouslySetInnerHTML" === a ? null != (s = s ? s.__html : void 0) && tr(e, s) : "children" === a ? "string" == typeof s ? or(e, s) : "number" == typeof s && or(e, "" + s) : "suppressContentEditableWarning" !== a && (sr.hasOwnProperty(a) ? null != s && W(r, a) : o ? Bn.setValueForAttribute(e, a, s) : null != s && Bn.setValueForProperty(e, a, s))
                    }
                switch (t) {
                    case "input":
                        Zn.track(e), Yn.postMountWrapper(e, n);
                        break;
                    case "textarea":
                        Zn.track(e), Qn.postMountWrapper(e, n);
                        break;
                    case "option":
                        Xn.postMountWrapper(e, n);
                        break;
                    case "select":
                        Kn.postMountWrapper(e, n);
                        break;
                    default:
                        "function" == typeof i.onClick && (e.onclick = _t)
                }
            },
            diffProperties: function(e, t, n, r, o) {
                var i = null;
                switch (t) {
                    case "input":
                        n = Yn.getHostProps(e, n), r = Yn.getHostProps(e, r), i = [];
                        break;
                    case "option":
                        n = Xn.getHostProps(e, n), r = Xn.getHostProps(e, r), i = [];
                        break;
                    case "select":
                        n = Kn.getHostProps(e, n), r = Kn.getHostProps(e, r), i = [];
                        break;
                    case "textarea":
                        n = Qn.getHostProps(e, n), r = Qn.getHostProps(e, r), i = [];
                        break;
                    default:
                        "function" != typeof n.onClick && "function" == typeof r.onClick && (e.onclick = _t)
                }
                U(t, r);
                var a, u;
                e = null;
                for (a in n)
                    if (!r.hasOwnProperty(a) && n.hasOwnProperty(a) && null != n[a])
                        if ("style" === a)
                            for (u in t = n[a]) t.hasOwnProperty(u) && (e || (e = {}), e[u] = "");
                        else "dangerouslySetInnerHTML" !== a && "children" !== a && "suppressContentEditableWarning" !== a && (sr.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
                for (a in r) {
                    var s = r[a];
                    if (t = null != n ? n[a] : void 0, r.hasOwnProperty(a) && s !== t && (null != s || null != t))
                        if ("style" === a)
                            if (t) {
                                for (u in t) !t.hasOwnProperty(u) || s && s.hasOwnProperty(u) || (e || (e = {}), e[u] = "");
                                for (u in s) s.hasOwnProperty(u) && t[u] !== s[u] && (e || (e = {}), e[u] = s[u])
                            } else e || (i || (i = []), i.push(a, e)), e = s;
                    else "dangerouslySetInnerHTML" === a ? (s = s ? s.__html : void 0, t = t ? t.__html : void 0, null != s && t !== s && (i = i || []).push(a, "" + s)) : "children" === a ? t === s || "string" != typeof s && "number" != typeof s || (i = i || []).push(a, "" + s) : "suppressContentEditableWarning" !== a && (sr.hasOwnProperty(a) ? (null != s && W(o, a), i || t === s || (i = [])) : (i = i || []).push(a, s))
                }
                return e && (i = i || []).push("style", e), i
            },
            updateProperties: function(e, t, n, r, o) {
                B(n, r), r = B(n, o);
                for (var i = 0; i < t.length; i += 2) {
                    var a = t[i],
                        u = t[i + 1];
                    "style" === a ? Fn.setValueForStyles(e, u) : "dangerouslySetInnerHTML" === a ? tr(e, u) : "children" === a ? or(e, u) : r ? null != u ? Bn.setValueForAttribute(e, a, u) : Bn.deleteValueForAttribute(e, a) : null != u ? Bn.setValueForProperty(e, a, u) : Bn.deleteValueForProperty(e, a)
                }
                switch (n) {
                    case "input":
                        Yn.updateWrapper(e, o), Zn.updateValueIfChanged(e);
                        break;
                    case "textarea":
                        Qn.updateWrapper(e, o);
                        break;
                    case "select":
                        Kn.postUpdateWrapper(e, o)
                }
            },
            diffHydratedProperties: function(e, t, n, r, o) {
                switch (t) {
                    case "iframe":
                    case "object":
                        Nn.trapBubbledEvent("topLoad", "load", e);
                        break;
                    case "video":
                    case "audio":
                        for (var i in fr) fr.hasOwnProperty(i) && Nn.trapBubbledEvent(i, fr[i], e);
                        break;
                    case "source":
                        Nn.trapBubbledEvent("topError", "error", e);
                        break;
                    case "img":
                    case "image":
                        Nn.trapBubbledEvent("topError", "error", e), Nn.trapBubbledEvent("topLoad", "load", e);
                        break;
                    case "form":
                        Nn.trapBubbledEvent("topReset", "reset", e), Nn.trapBubbledEvent("topSubmit", "submit", e);
                        break;
                    case "details":
                        Nn.trapBubbledEvent("topToggle", "toggle", e);
                        break;
                    case "input":
                        Yn.initWrapperState(e, n), Nn.trapBubbledEvent("topInvalid", "invalid", e), W(o, "onChange");
                        break;
                    case "option":
                        Xn.validateProps(e, n);
                        break;
                    case "select":
                        Kn.initWrapperState(e, n), Nn.trapBubbledEvent("topInvalid", "invalid", e), W(o, "onChange");
                        break;
                    case "textarea":
                        Qn.initWrapperState(e, n), Nn.trapBubbledEvent("topInvalid", "invalid", e), W(o, "onChange")
                }
                U(t, n), r = null;
                for (var a in n) n.hasOwnProperty(a) && (i = n[a], "children" === a ? "string" == typeof i ? e.textContent !== i && (r = ["children", i]) : "number" == typeof i && e.textContent !== "" + i && (r = ["children", "" + i]) : sr.hasOwnProperty(a) && null != i && W(o, a));
                switch (t) {
                    case "input":
                        Zn.track(e), Yn.postMountWrapper(e, n);
                        break;
                    case "textarea":
                        Zn.track(e), Qn.postMountWrapper(e, n);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        "function" == typeof n.onClick && (e.onclick = _t)
                }
                return r
            },
            diffHydratedText: function(e, t) {
                return e.nodeValue !== t
            },
            warnForDeletedHydratableElement: function() {},
            warnForDeletedHydratableText: function() {},
            warnForInsertedHydratedElement: function() {},
            warnForInsertedHydratedText: function() {},
            restoreControlledState: function(e, t, n) {
                switch (t) {
                    case "input":
                        Yn.restoreControlledState(e, n);
                        break;
                    case "textarea":
                        Qn.restoreControlledState(e, n);
                        break;
                    case "select":
                        Kn.restoreControlledState(e, n)
                }
            }
        },
        hr = void 0;
    if (gt.canUseDOM)
        if ("function" != typeof requestIdleCallback) {
            var pr = null,
                mr = null,
                gr = !1,
                vr = !1,
                yr = 0,
                _r = 33,
                br = 33,
                xr = {
                    timeRemaining: "object" == typeof performance && "function" == typeof performance.now ? function() {
                        return yr - performance.now()
                    } : function() {
                        return yr - Date.now()
                    }
                },
                wr = "__reactIdleCallback$" + Math.random().toString(36).slice(2);
            window.addEventListener("message", function(e) {
                e.source === window && e.data === wr && (gr = !1, e = mr, mr = null, null !== e && e(xr))
            }, !1);
            var kr = function(e) {
                vr = !1;
                var t = e - yr + br;
                t < br && _r < br ? (8 > t && (t = 8), br = t < _r ? _r : t) : _r = t, yr = e + br, gr || (gr = !0, window.postMessage(wr, "*")), t = pr, pr = null, null !== t && t(e)
            };
            hr = function(e) {
                return mr = e, vr || (vr = !0, requestAnimationFrame(kr)), 0
            }
        } else hr = requestIdleCallback;
    else hr = function(e) {
        return setTimeout(function() {
            e({
                timeRemaining: function() {
                    return 1 / 0
                }
            })
        }), 0
    };
    var Er, Cr, Tr = {
            rIC: hr
        },
        Mr = {
            enableAsyncSubtreeAPI: !0
        },
        Sr = {
            NoWork: 0,
            SynchronousPriority: 1,
            TaskPriority: 2,
            HighPriority: 3,
            LowPriority: 4,
            OffscreenPriority: 5
        },
        Nr = $t.Callback,
        Pr = Sr.NoWork,
        Ar = Sr.SynchronousPriority,
        Ir = Sr.TaskPriority,
        Or = Lt.ClassComponent,
        Rr = Lt.HostRoot,
        Dr = void 0,
        Lr = void 0,
        Fr = {
            addUpdate: function(e, t, n, r) {
                K(e, {
                    priorityLevel: r,
                    partialState: t,
                    callback: n,
                    isReplace: !1,
                    isForced: !1,
                    isTopLevelUnmount: !1,
                    next: null
                })
            },
            addReplaceUpdate: function(e, t, n, r) {
                K(e, {
                    priorityLevel: r,
                    partialState: t,
                    callback: n,
                    isReplace: !0,
                    isForced: !1,
                    isTopLevelUnmount: !1,
                    next: null
                })
            },
            addForceUpdate: function(e, t, n) {
                K(e, {
                    priorityLevel: n,
                    partialState: null,
                    callback: t,
                    isReplace: !1,
                    isForced: !0,
                    isTopLevelUnmount: !1,
                    next: null
                })
            },
            getUpdatePriority: function(e) {
                var t = e.updateQueue;
                return null === t || e.tag !== Or && e.tag !== Rr ? Pr : null !== t.first ? t.first.priorityLevel : Pr
            },
            addTopLevelUpdate: function(e, t, n, r) {
                var o = null === t.element;
                t = {
                    priorityLevel: r,
                    partialState: t,
                    callback: n,
                    isReplace: !1,
                    isForced: !1,
                    isTopLevelUnmount: o,
                    next: null
                }, e = K(e, t), o && (o = Dr, n = Lr, null !== o && null !== t.next && (t.next = null, o.last = t), null !== n && null !== e && null !== e.next && (e.next = null, n.last = t))
            },
            beginUpdateQueue: function(e, t, n, r, o, i, a) {
                null !== e && e.updateQueue === n && (n = t.updateQueue = {
                    first: n.first,
                    last: n.last,
                    callbackList: null,
                    hasForceUpdate: !1
                }), e = n.callbackList;
                for (var u = n.hasForceUpdate, s = !0, c = n.first; null !== c && 0 >= V(c.priorityLevel, a);) {
                    n.first = c.next, null === n.first && (n.last = null);
                    var l;
                    c.isReplace ? (o = $(c, r, o, i), s = !0) : (l = $(c, r, o, i)) && (o = s ? vt({}, o, l) : vt(o, l), s = !1), c.isForced && (u = !0), null === c.callback || c.isTopLevelUnmount && null !== c.next || (e = null !== e ? e : [], e.push(c.callback), t.effectTag |= Nr), c = c.next
                }
                return n.callbackList = e, n.hasForceUpdate = u, null !== n.first || null !== e || u || (t.updateQueue = null), o
            },
            commitCallbacks: function(e, t, n) {
                if (null !== (e = t.callbackList))
                    for (t.callbackList = null, t = 0; t < e.length; t++) {
                        var o = e[t];
                        "function" != typeof o && r("191", o), o.call(n)
                    }
            }
        },
        jr = [],
        Ur = -1,
        zr = {
            createCursor: function(e) {
                return {
                    current: e
                }
            },
            isEmpty: function() {
                return -1 === Ur
            },
            pop: function(e) {
                0 > Ur || (e.current = jr[Ur], jr[Ur] = null, Ur--)
            },
            push: function(e, t) {
                Ur++, jr[Ur] = e.current, e.current = t
            },
            reset: function() {
                for (; - 1 < Ur;) jr[Ur] = null, Ur--
            }
        },
        Hr = rn.isFiberMounted,
        Br = Lt.ClassComponent,
        qr = Lt.HostRoot,
        Wr = zr.createCursor,
        Vr = zr.pop,
        Gr = zr.push,
        Yr = Wr(bt),
        Xr = Wr(!1),
        Kr = bt,
        $r = {
            getUnmaskedContext: function(e) {
                return J(e) ? Kr : Yr.current
            },
            cacheContext: Q,
            getMaskedContext: function(e, t) {
                var n = e.type.contextTypes;
                if (!n) return bt;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                var o, i = {};
                for (o in n) i[o] = t[o];
                return r && Q(e, t, i), i
            },
            hasContextChanged: function() {
                return Xr.current
            },
            isContextConsumer: function(e) {
                return e.tag === Br && null != e.type.contextTypes
            },
            isContextProvider: J,
            popContextProvider: function(e) {
                J(e) && (Vr(Xr, e), Vr(Yr, e))
            },
            popTopLevelContextObject: function(e) {
                Vr(Xr, e), Vr(Yr, e)
            },
            pushTopLevelContextObject: function(e, t, n) {
                null != Yr.cursor && r("168"), Gr(Yr, t, e), Gr(Xr, n, e)
            },
            processChildContext: Z,
            pushContextProvider: function(e) {
                if (!J(e)) return !1;
                var t = e.stateNode;
                return t = t && t.__reactInternalMemoizedMergedChildContext || bt, Kr = Yr.current, Gr(Yr, t, e), Gr(Xr, Xr.current, e), !0
            },
            invalidateContextProvider: function(e, t) {
                var n = e.stateNode;
                if (n || r("169"), t) {
                    var o = Z(e, Kr);
                    n.__reactInternalMemoizedMergedChildContext = o, Vr(Xr, e), Vr(Yr, e), Gr(Yr, o, e)
                } else Vr(Xr, e);
                Gr(Xr, t, e)
            },
            resetContext: function() {
                Kr = bt, Yr.current = bt, Xr.current = !1
            },
            findCurrentUnmaskedContext: function(e) {
                for (Hr(e) && e.tag === Br ? void 0 : r("170"); e.tag !== qr;) {
                    if (J(e)) return e.stateNode.__reactInternalMemoizedMergedChildContext;
                    (e = e.return) || r("171")
                }
                return e.stateNode.context
            }
        },
        Qr = {
            NoContext: 0,
            AsyncUpdates: 1
        },
        Jr = Lt.IndeterminateComponent,
        Zr = Lt.ClassComponent,
        eo = Lt.HostRoot,
        to = Lt.HostComponent,
        no = Lt.HostText,
        ro = Lt.HostPortal,
        oo = Lt.CoroutineComponent,
        io = Lt.YieldComponent,
        ao = Lt.Fragment,
        uo = Sr.NoWork,
        so = Qr.NoContext,
        co = $t.NoEffect,
        lo = {
            createWorkInProgress: function(e, t) {
                var n = e.alternate;
                return null === n ? (n = new ee(e.tag, e.key, e.internalContextTag), n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.effectTag = co, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.pendingWorkPriority = t, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
            },
            createHostRootFiber: function() {
                return new ee(eo, null, so)
            },
            createFiberFromElement: function(e, t, n) {
                return t = te(e.type, e.key, t), t.pendingProps = e.props, t.pendingWorkPriority = n, t
            },
            createFiberFromFragment: function(e, t, n) {
                return t = new ee(ao, null, t), t.pendingProps = e, t.pendingWorkPriority = n, t
            },
            createFiberFromText: function(e, t, n) {
                return t = new ee(no, null, t), t.pendingProps = e, t.pendingWorkPriority = n, t
            },
            createFiberFromElementType: te,
            createFiberFromHostInstanceForDeletion: function() {
                var e = new ee(to, null, so);
                return e.type = "DELETED", e
            },
            createFiberFromCoroutine: function(e, t, n) {
                return t = new ee(oo, e.key, t), t.type = e.handler, t.pendingProps = e, t.pendingWorkPriority = n, t
            },
            createFiberFromYield: function(e, t) {
                return new ee(io, null, t)
            },
            createFiberFromPortal: function(e, t, n) {
                return t = new ee(ro, e.key, t), t.pendingProps = e.children || [], t.pendingWorkPriority = n, t.stateNode = {
                    containerInfo: e.containerInfo,
                    implementation: e.implementation
                }, t
            },
            largerPriority: function(e, t) {
                return e !== uo && (t === uo || t > e) ? e : t
            }
        },
        fo = lo.createHostRootFiber,
        ho = Lt.IndeterminateComponent,
        po = Lt.FunctionalComponent,
        mo = Lt.ClassComponent,
        go = Lt.HostComponent;
    "function" == typeof Symbol && Symbol.for ? (Er = Symbol.for("react.coroutine"), Cr = Symbol.for("react.yield")) : (Er = 60104, Cr = 60105);
    var vo = {
            createCoroutine: function(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: Er,
                    key: null == r ? null : "" + r,
                    children: e,
                    handler: t,
                    props: n
                }
            },
            createYield: function(e) {
                return {
                    $$typeof: Cr,
                    value: e
                }
            },
            isCoroutine: function(e) {
                return "object" == typeof e && null !== e && e.$$typeof === Er
            },
            isYield: function(e) {
                return "object" == typeof e && null !== e && e.$$typeof === Cr
            },
            REACT_YIELD_TYPE: Cr,
            REACT_COROUTINE_TYPE: Er
        },
        yo = "function" == typeof Symbol && Symbol.for && Symbol.for("react.portal") || 60106,
        _o = {
            createPortal: function(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: yo,
                    key: null == r ? null : "" + r,
                    children: e,
                    containerInfo: t,
                    implementation: n
                }
            },
            isPortal: function(e) {
                return "object" == typeof e && null !== e && e.$$typeof === yo
            },
            REACT_PORTAL_TYPE: yo
        },
        bo = vo.REACT_COROUTINE_TYPE,
        xo = vo.REACT_YIELD_TYPE,
        wo = _o.REACT_PORTAL_TYPE,
        ko = lo.createWorkInProgress,
        Eo = lo.createFiberFromElement,
        Co = lo.createFiberFromFragment,
        To = lo.createFiberFromText,
        Mo = lo.createFiberFromCoroutine,
        So = lo.createFiberFromYield,
        No = lo.createFiberFromPortal,
        Po = Array.isArray,
        Ao = Lt.FunctionalComponent,
        Io = Lt.ClassComponent,
        Oo = Lt.HostText,
        Ro = Lt.HostPortal,
        Do = Lt.CoroutineComponent,
        Lo = Lt.YieldComponent,
        Fo = Lt.Fragment,
        jo = $t.NoEffect,
        Uo = $t.Placement,
        zo = $t.Deletion,
        Ho = "function" == typeof Symbol && Symbol.iterator,
        Bo = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
        qo = ie(!0, !0),
        Wo = ie(!1, !0),
        Vo = ie(!1, !1),
        Go = {
            reconcileChildFibers: qo,
            reconcileChildFibersInPlace: Wo,
            mountChildFibersInPlace: Vo,
            cloneChildFibers: function(e, t) {
                if (null !== e && t.child !== e.child && r("153"), null !== t.child) {
                    e = t.child;
                    var n = ko(e, e.pendingWorkPriority);
                    for (n.pendingProps = e.pendingProps, t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, n = n.sibling = ko(e, e.pendingWorkPriority), n.pendingProps = e.pendingProps, n.return = t;
                    n.sibling = null
                }
            }
        },
        Yo = $t.Update,
        Xo = Qr.AsyncUpdates,
        Ko = $r.cacheContext,
        $o = $r.getMaskedContext,
        Qo = $r.getUnmaskedContext,
        Jo = $r.isContextConsumer,
        Zo = Fr.addUpdate,
        ei = Fr.addReplaceUpdate,
        ti = Fr.addForceUpdate,
        ni = Fr.beginUpdateQueue,
        ri = $r.hasContextChanged,
        oi = rn.isMounted,
        ii = Go.mountChildFibersInPlace,
        ai = Go.reconcileChildFibers,
        ui = Go.reconcileChildFibersInPlace,
        si = Go.cloneChildFibers,
        ci = Fr.beginUpdateQueue,
        li = $r.getMaskedContext,
        fi = $r.getUnmaskedContext,
        di = $r.hasContextChanged,
        hi = $r.pushContextProvider,
        pi = $r.pushTopLevelContextObject,
        mi = $r.invalidateContextProvider,
        gi = Lt.IndeterminateComponent,
        vi = Lt.FunctionalComponent,
        yi = Lt.ClassComponent,
        _i = Lt.HostRoot,
        bi = Lt.HostComponent,
        xi = Lt.HostText,
        wi = Lt.HostPortal,
        ki = Lt.CoroutineComponent,
        Ei = Lt.CoroutineHandlerPhase,
        Ci = Lt.YieldComponent,
        Ti = Lt.Fragment,
        Mi = Sr.NoWork,
        Si = Sr.OffscreenPriority,
        Ni = $t.PerformedWork,
        Pi = $t.Placement,
        Ai = $t.ContentReset,
        Ii = $t.Err,
        Oi = $t.Ref,
        Ri = Kt.ReactCurrentOwner,
        Di = Go.reconcileChildFibers,
        Li = $r.popContextProvider,
        Fi = $r.popTopLevelContextObject,
        ji = Lt.IndeterminateComponent,
        Ui = Lt.FunctionalComponent,
        zi = Lt.ClassComponent,
        Hi = Lt.HostRoot,
        Bi = Lt.HostComponent,
        qi = Lt.HostText,
        Wi = Lt.HostPortal,
        Vi = Lt.CoroutineComponent,
        Gi = Lt.CoroutineHandlerPhase,
        Yi = Lt.YieldComponent,
        Xi = Lt.Fragment,
        Ki = $t.Placement,
        $i = $t.Ref,
        Qi = $t.Update,
        Ji = Sr.OffscreenPriority,
        Zi = null,
        ea = null,
        ta = {
            injectInternals: function(e) {
                if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
                var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!t.supportsFiber) return !0;
                try {
                    var n = t.inject(e);
                    Zi = ce(function(e) {
                        return t.onCommitFiberRoot(n, e)
                    }), ea = ce(function(e) {
                        return t.onCommitFiberUnmount(n, e)
                    })
                } catch (e) {}
                return !0
            },
            onCommitRoot: function(e) {
                "function" == typeof Zi && Zi(e)
            },
            onCommitUnmount: function(e) {
                "function" == typeof ea && ea(e)
            }
        },
        na = Lt.ClassComponent,
        ra = Lt.HostRoot,
        oa = Lt.HostComponent,
        ia = Lt.HostText,
        aa = Lt.HostPortal,
        ua = Lt.CoroutineComponent,
        sa = Fr.commitCallbacks,
        ca = ta.onCommitUnmount,
        la = $t.Placement,
        fa = $t.Update,
        da = $t.Callback,
        ha = $t.ContentReset,
        pa = zr.createCursor,
        ma = zr.pop,
        ga = zr.push,
        va = {},
        ya = Lt.HostComponent,
        _a = Lt.HostText,
        ba = Lt.HostRoot,
        xa = $t.Deletion,
        wa = $t.Placement,
        ka = lo.createFiberFromHostInstanceForDeletion,
        Ea = $r.popContextProvider,
        Ca = zr.reset,
        Ta = Kt.ReactCurrentOwner,
        Ma = lo.createWorkInProgress,
        Sa = lo.largerPriority,
        Na = ta.onCommitRoot,
        Pa = Sr.NoWork,
        Aa = Sr.SynchronousPriority,
        Ia = Sr.TaskPriority,
        Oa = Sr.HighPriority,
        Ra = Sr.LowPriority,
        Da = Sr.OffscreenPriority,
        La = Qr.AsyncUpdates,
        Fa = $t.PerformedWork,
        ja = $t.Placement,
        Ua = $t.Update,
        za = $t.PlacementAndUpdate,
        Ha = $t.Deletion,
        Ba = $t.ContentReset,
        qa = $t.Callback,
        Wa = $t.Err,
        Va = $t.Ref,
        Ga = Lt.HostRoot,
        Ya = Lt.HostComponent,
        Xa = Lt.HostPortal,
        Ka = Lt.ClassComponent,
        $a = Fr.getUpdatePriority,
        Qa = $r.resetContext;
    me._injectFiber = function(e) {
        pe = e
    };
    var Ja = Fr.addTopLevelUpdate,
        Za = $r.findCurrentUnmaskedContext,
        eu = $r.isContextProvider,
        tu = $r.processChildContext,
        nu = Lt.HostComponent,
        ru = rn.findCurrentHostFiber,
        ou = rn.findCurrentHostFiberWithNoPortals;
    me._injectFiber(function(e) {
        var t = Za(e);
        return eu(e) ? tu(e, t, !1) : t
    });
    var iu = Ft.TEXT_NODE,
        au = null,
        uu = {
            getOffsets: function(e) {
                var t = window.getSelection && window.getSelection();
                if (!t || 0 === t.rangeCount) return null;
                var n = t.anchorNode,
                    r = t.anchorOffset,
                    o = t.focusNode,
                    i = t.focusOffset,
                    a = t.getRangeAt(0);
                try {
                    a.startContainer.nodeType, a.endContainer.nodeType
                } catch (e) {
                    return null
                }
                t = t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset ? 0 : a.toString().length;
                var u = a.cloneRange();
                return u.selectNodeContents(e), u.setEnd(a.startContainer, a.startOffset), e = u.startContainer === u.endContainer && u.startOffset === u.endOffset ? 0 : u.toString().length, a = e + t, t = document.createRange(), t.setStart(n, r), t.setEnd(o, i), n = t.collapsed, {
                    start: n ? a : e,
                    end: n ? e : a
                }
            },
            setOffsets: function(e, t) {
                if (window.getSelection) {
                    var n = window.getSelection(),
                        r = e[ye()].length,
                        o = Math.min(t.start, r);
                    if (t = void 0 === t.end ? o : Math.min(t.end, r), !n.extend && o > t && (r = t, t = o, o = r), r = ve(e, o), e = ve(e, t), r && e) {
                        var i = document.createRange();
                        i.setStart(r.node, r.offset), n.removeAllRanges(), o > t ? (n.addRange(i), n.extend(e.node, e.offset)) : (i.setEnd(e.node, e.offset), n.addRange(i))
                    }
                }
            }
        },
        su = Ft.ELEMENT_NODE,
        cu = {
            hasSelectionCapabilities: function(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && "text" === e.type || "textarea" === t || "true" === e.contentEditable)
            },
            getSelectionInformation: function() {
                var e = Et();
                return {
                    focusedElem: e,
                    selectionRange: cu.hasSelectionCapabilities(e) ? cu.getSelection(e) : null
                }
            },
            restoreSelection: function(e) {
                var t = Et(),
                    n = e.focusedElem;
                if (e = e.selectionRange, t !== n && wt(document.documentElement, n)) {
                    for (cu.hasSelectionCapabilities(n) && cu.setSelection(n, e), t = [], e = n; e = e.parentNode;) e.nodeType === su && t.push({
                        element: e,
                        left: e.scrollLeft,
                        top: e.scrollTop
                    });
                    for (kt(n), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
                }
            },
            getSelection: function(e) {
                return ("selectionStart" in e ? {
                    start: e.selectionStart,
                    end: e.selectionEnd
                } : uu.getOffsets(e)) || {
                    start: 0,
                    end: 0
                }
            },
            setSelection: function(e, t) {
                var n = t.start,
                    r = t.end;
                void 0 === r && (r = n), "selectionStart" in e ? (e.selectionStart = n, e.selectionEnd = Math.min(r, e.value.length)) : uu.setOffsets(e, t)
            }
        },
        lu = cu,
        fu = Ft.ELEMENT_NODE;
    xe._injectFiber = function(e) {
        _e = e
    }, xe._injectStack = function(e) {
        be = e
    };
    var du = Lt.HostComponent,
        hu = {
            isAncestor: function(e, t) {
                for (; t;) {
                    if (e === t || e === t.alternate) return !0;
                    t = we(t)
                }
                return !1
            },
            getLowestCommonAncestor: ke,
            getParentInstance: function(e) {
                return we(e)
            },
            traverseTwoPhase: function(e, t, n) {
                for (var r = []; e;) r.push(e), e = we(e);
                for (e = r.length; 0 < e--;) t(r[e], "captured", n);
                for (e = 0; e < r.length; e++) t(r[e], "bubbled", n)
            },
            traverseEnterLeave: function(e, t, n, r, o) {
                for (var i = e && t ? ke(e, t) : null, a = []; e && e !== i;) a.push(e), e = we(e);
                for (e = []; t && t !== i;) e.push(t), t = we(t);
                for (t = 0; t < a.length; t++) n(a[t], "bubbled", r);
                for (t = e.length; 0 < t--;) n(e[t], "captured", o)
            }
        },
        pu = xn.getListener,
        mu = {
            accumulateTwoPhaseDispatches: function(e) {
                T(e, Ce)
            },
            accumulateTwoPhaseDispatchesSkipTarget: function(e) {
                T(e, Te)
            },
            accumulateDirectDispatches: function(e) {
                T(e, Se)
            },
            accumulateEnterLeaveDispatches: function(e, t, n, r) {
                hu.traverseEnterLeave(n, r, Me, e, t)
            }
        },
        gu = {
            _root: null,
            _startText: null,
            _fallbackText: null
        },
        vu = {
            initialize: function(e) {
                return gu._root = e, gu._startText = vu.getText(), !0
            },
            reset: function() {
                gu._root = null, gu._startText = null, gu._fallbackText = null
            },
            getData: function() {
                if (gu._fallbackText) return gu._fallbackText;
                var e, t, n = gu._startText,
                    r = n.length,
                    o = vu.getText(),
                    i = o.length;
                for (e = 0; e < r && n[e] === o[e]; e++);
                var a = r - e;
                for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
                return gu._fallbackText = o.slice(e, 1 < t ? 1 - t : void 0), gu._fallbackText
            },
            getText: function() {
                return "value" in gu._root ? gu._root.value : gu._root[ye()]
            }
        },
        yu = vu,
        _u = "dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),
        bu = {
            type: null,
            target: null,
            currentTarget: _t.thatReturnsNull,
            eventPhase: null,
            bubbles: null,
            cancelable: null,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: null,
            isTrusted: null
        };
    vt(Ne.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = _t.thatReturnsTrue)
        },
        stopPropagation: function() {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = _t.thatReturnsTrue)
        },
        persist: function() {
            this.isPersistent = _t.thatReturnsTrue
        },
        isPersistent: _t.thatReturnsFalse,
        destructor: function() {
            var e, t = this.constructor.Interface;
            for (e in t) this[e] = null;
            for (t = 0; t < _u.length; t++) this[_u[t]] = null
        }
    }), Ne.Interface = bu, Ne.augmentClass = function(e, t) {
        function n() {}
        n.prototype = this.prototype;
        var r = new n;
        vt(r, e.prototype), e.prototype = r, e.prototype.constructor = e, e.Interface = vt({}, this.Interface, t), e.augmentClass = this.augmentClass, Ie(e)
    }, Ie(Ne), Ne.augmentClass(Oe, {
        data: null
    }), Ne.augmentClass(Re, {
        data: null
    });
    var xu = [9, 13, 27, 32],
        wu = gt.canUseDOM && "CompositionEvent" in window,
        ku = null;
    gt.canUseDOM && "documentMode" in document && (ku = document.documentMode);
    var Eu;
    if (Eu = gt.canUseDOM && "TextEvent" in window && !ku) {
        var Cu = window.opera;
        Eu = !("object" == typeof Cu && "function" == typeof Cu.version && 12 >= parseInt(Cu.version(), 10))
    }
    var Tu = Eu,
        Mu = gt.canUseDOM && (!wu || ku && 8 < ku && 11 >= ku),
        Su = String.fromCharCode(32),
        Nu = {
            beforeInput: {
                phasedRegistrationNames: {
                    bubbled: "onBeforeInput",
                    captured: "onBeforeInputCapture"
                },
                dependencies: ["topCompositionEnd", "topKeyPress", "topTextInput", "topPaste"]
            },
            compositionEnd: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionEnd",
                    captured: "onCompositionEndCapture"
                },
                dependencies: "topBlur topCompositionEnd topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")
            },
            compositionStart: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionStart",
                    captured: "onCompositionStartCapture"
                },
                dependencies: "topBlur topCompositionStart topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")
            },
            compositionUpdate: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionUpdate",
                    captured: "onCompositionUpdateCapture"
                },
                dependencies: "topBlur topCompositionUpdate topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")
            }
        },
        Pu = !1,
        Au = !1,
        Iu = {
            eventTypes: Nu,
            extractEvents: function(e, t, n, r) {
                var o;
                if (wu) e: {
                    switch (e) {
                        case "topCompositionStart":
                            var i = Nu.compositionStart;
                            break e;
                        case "topCompositionEnd":
                            i = Nu.compositionEnd;
                            break e;
                        case "topCompositionUpdate":
                            i = Nu.compositionUpdate;
                            break e
                    }
                    i = void 0
                } else Au ? De(e, n) && (i = Nu.compositionEnd) : "topKeyDown" === e && 229 === n.keyCode && (i = Nu.compositionStart);
                return i ? (Mu && (Au || i !== Nu.compositionStart ? i === Nu.compositionEnd && Au && (o = yu.getData()) : Au = yu.initialize(r)), i = Oe.getPooled(i, t, n, r), o ? i.data = o : null !== (o = Le(n)) && (i.data = o), mu.accumulateTwoPhaseDispatches(i), o = i) : o = null, (e = Tu ? Fe(e, n) : je(e, n)) ? (t = Re.getPooled(Nu.beforeInput, t, n, r), t.data = e, mu.accumulateTwoPhaseDispatches(t)) : t = null, [o, t]
            }
        },
        Ou = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        },
        Ru = {
            change: {
                phasedRegistrationNames: {
                    bubbled: "onChange",
                    captured: "onChangeCapture"
                },
                dependencies: "topBlur topChange topClick topFocus topInput topKeyDown topKeyUp topSelectionChange".split(" ")
            }
        },
        Du = null,
        Lu = null,
        Fu = !1;
    gt.canUseDOM && (Fu = A("input") && (!document.documentMode || 9 < document.documentMode));
    var ju = {
        eventTypes: Ru,
        _isInputEventSupported: Fu,
        extractEvents: function(e, t, n, r) {
            var o = t ? Yt.getNodeFromInstance(t) : window,
                i = o.nodeName && o.nodeName.toLowerCase();
            if ("select" === i || "input" === i && "file" === o.type) var a = qe;
            else if (Ue(o))
                if (Fu) a = Ke;
                else {
                    a = Ye;
                    var u = Ge
                } else !(i = o.nodeName) || "input" !== i.toLowerCase() || "checkbox" !== o.type && "radio" !== o.type || (a = Xe);
            if (a && (a = a(e, t))) return ze(a, n, r);
            u && u(e, o, t), "topBlur" === e && null != t && (e = t._wrapperState || o._wrapperState) && e.controlled && "number" === o.type && (e = "" + o.value, o.getAttribute("value") !== e && o.setAttribute("value", e))
        }
    };
    Ne.augmentClass($e, {
        view: function(e) {
            return e.view ? e.view : (e = k(e), e.window === e ? e : (e = e.ownerDocument) ? e.defaultView || e.parentWindow : window)
        },
        detail: function(e) {
            return e.detail || 0
        }
    });
    var Uu = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    $e.augmentClass(Ze, {
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        pageX: null,
        pageY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: Je,
        button: null,
        buttons: null,
        relatedTarget: function(e) {
            return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
        }
    });
    var zu = {
            mouseEnter: {
                registrationName: "onMouseEnter",
                dependencies: ["topMouseOut", "topMouseOver"]
            },
            mouseLeave: {
                registrationName: "onMouseLeave",
                dependencies: ["topMouseOut", "topMouseOver"]
            }
        },
        Hu = {
            eventTypes: zu,
            extractEvents: function(e, t, n, r) {
                if ("topMouseOver" === e && (n.relatedTarget || n.fromElement) || "topMouseOut" !== e && "topMouseOver" !== e) return null;
                var o = r.window === r ? r : (o = r.ownerDocument) ? o.defaultView || o.parentWindow : window;
                if ("topMouseOut" === e ? (e = t, t = (t = n.relatedTarget || n.toElement) ? Yt.getClosestInstanceFromNode(t) : null) : e = null, e === t) return null;
                var i = null == e ? o : Yt.getNodeFromInstance(e);
                o = null == t ? o : Yt.getNodeFromInstance(t);
                var a = Ze.getPooled(zu.mouseLeave, e, n, r);
                return a.type = "mouseleave", a.target = i, a.relatedTarget = o, n = Ze.getPooled(zu.mouseEnter, t, n, r), n.type = "mouseenter", n.target = o, n.relatedTarget = i, mu.accumulateEnterLeaveDispatches(a, n, e, t), [a, n]
            }
        },
        Bu = Ft.DOCUMENT_NODE,
        qu = gt.canUseDOM && "documentMode" in document && 11 >= document.documentMode,
        Wu = {
            select: {
                phasedRegistrationNames: {
                    bubbled: "onSelect",
                    captured: "onSelectCapture"
                },
                dependencies: "topBlur topContextMenu topFocus topKeyDown topKeyUp topMouseDown topMouseUp topSelectionChange".split(" ")
            }
        },
        Vu = null,
        Gu = null,
        Yu = null,
        Xu = !1,
        Ku = Nn.isListeningToAllDependencies,
        $u = {
            eventTypes: Wu,
            extractEvents: function(e, t, n, r) {
                var o = r.window === r ? r.document : r.nodeType === Bu ? r : r.ownerDocument;
                if (!o || !Ku("onSelect", o)) return null;
                switch (o = t ? Yt.getNodeFromInstance(t) : window, e) {
                    case "topFocus":
                        (Ue(o) || "true" === o.contentEditable) && (Vu = o, Gu = t, Yu = null);
                        break;
                    case "topBlur":
                        Yu = Gu = Vu = null;
                        break;
                    case "topMouseDown":
                        Xu = !0;
                        break;
                    case "topContextMenu":
                    case "topMouseUp":
                        return Xu = !1, et(n, r);
                    case "topSelectionChange":
                        if (qu) break;
                    case "topKeyDown":
                    case "topKeyUp":
                        return et(n, r)
                }
                return null
            }
        };
    Ne.augmentClass(tt, {
        animationName: null,
        elapsedTime: null,
        pseudoElement: null
    }), Ne.augmentClass(nt, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }), $e.augmentClass(rt, {
        relatedTarget: null
    });
    var Qu = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        Ju = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        };
    $e.augmentClass(it, {
        key: function(e) {
            if (e.key) {
                var t = Qu[e.key] || e.key;
                if ("Unidentified" !== t) return t
            }
            return "keypress" === e.type ? (e = ot(e), 13 === e ? "Enter" : String.fromCharCode(e)) : "keydown" === e.type || "keyup" === e.type ? Ju[e.keyCode] || "Unidentified" : ""
        },
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: Je,
        charCode: function(e) {
            return "keypress" === e.type ? ot(e) : 0
        },
        keyCode: function(e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        },
        which: function(e) {
            return "keypress" === e.type ? ot(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        }
    }), Ze.augmentClass(at, {
        dataTransfer: null
    }), $e.augmentClass(ut, {
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: Je
    }), Ne.augmentClass(st, {
        propertyName: null,
        elapsedTime: null,
        pseudoElement: null
    }), Ze.augmentClass(ct, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: null,
        deltaMode: null
    });
    var Zu = {},
        es = {};
    "abort animationEnd animationIteration animationStart blur cancel canPlay canPlayThrough click close contextMenu copy cut doubleClick drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error focus input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing progress rateChange reset scroll seeked seeking stalled submit suspend timeUpdate toggle touchCancel touchEnd touchMove touchStart transitionEnd volumeChange waiting wheel".split(" ").forEach(function(e) {
        var t = e[0].toUpperCase() + e.slice(1),
            n = "on" + t;
        t = "top" + t, n = {
            phasedRegistrationNames: {
                bubbled: n,
                captured: n + "Capture"
            },
            dependencies: [t]
        }, Zu[e] = n, es[t] = n
    });
    var ts = {
        eventTypes: Zu,
        extractEvents: function(e, t, n, o) {
            var i = es[e];
            if (!i) return null;
            switch (e) {
                case "topAbort":
                case "topCancel":
                case "topCanPlay":
                case "topCanPlayThrough":
                case "topClose":
                case "topDurationChange":
                case "topEmptied":
                case "topEncrypted":
                case "topEnded":
                case "topError":
                case "topInput":
                case "topInvalid":
                case "topLoad":
                case "topLoadedData":
                case "topLoadedMetadata":
                case "topLoadStart":
                case "topPause":
                case "topPlay":
                case "topPlaying":
                case "topProgress":
                case "topRateChange":
                case "topReset":
                case "topSeeked":
                case "topSeeking":
                case "topStalled":
                case "topSubmit":
                case "topSuspend":
                case "topTimeUpdate":
                case "topToggle":
                case "topVolumeChange":
                case "topWaiting":
                    var a = Ne;
                    break;
                case "topKeyPress":
                    if (0 === ot(n)) return null;
                case "topKeyDown":
                case "topKeyUp":
                    a = it;
                    break;
                case "topBlur":
                case "topFocus":
                    a = rt;
                    break;
                case "topClick":
                    if (2 === n.button) return null;
                case "topDoubleClick":
                case "topMouseDown":
                case "topMouseMove":
                case "topMouseUp":
                case "topMouseOut":
                case "topMouseOver":
                case "topContextMenu":
                    a = Ze;
                    break;
                case "topDrag":
                case "topDragEnd":
                case "topDragEnter":
                case "topDragExit":
                case "topDragLeave":
                case "topDragOver":
                case "topDragStart":
                case "topDrop":
                    a = at;
                    break;
                case "topTouchCancel":
                case "topTouchEnd":
                case "topTouchMove":
                case "topTouchStart":
                    a = ut;
                    break;
                case "topAnimationEnd":
                case "topAnimationIteration":
                case "topAnimationStart":
                    a = tt;
                    break;
                case "topTransitionEnd":
                    a = st;
                    break;
                case "topScroll":
                    a = $e;
                    break;
                case "topWheel":
                    a = ct;
                    break;
                case "topCopy":
                case "topCut":
                case "topPaste":
                    a = nt
            }
            return a || r("86", e), e = a.getPooled(i, t, n, o), mu.accumulateTwoPhaseDispatches(e), e
        }
    };
    _n.setHandleTopLevel(Nn.handleTopLevel), xn.injection.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), sn.injection.injectComponentTree(Yt), xn.injection.injectEventPluginsByName({
        SimpleEventPlugin: ts,
        EnterLeaveEventPlugin: Hu,
        ChangeEventPlugin: ju,
        SelectEventPlugin: $u,
        BeforeInputEventPlugin: Iu
    });
    var ns = Dt.injection.MUST_USE_PROPERTY,
        rs = Dt.injection.HAS_BOOLEAN_VALUE,
        os = Dt.injection.HAS_NUMERIC_VALUE,
        is = Dt.injection.HAS_POSITIVE_NUMERIC_VALUE,
        as = Dt.injection.HAS_STRING_BOOLEAN_VALUE,
        us = {
            Properties: {
                allowFullScreen: rs,
                allowTransparency: as,
                async: rs,
                autoPlay: rs,
                capture: rs,
                checked: ns | rs,
                cols: is,
                contentEditable: as,
                controls: rs,
                default: rs,
                defer: rs,
                disabled: rs,
                download: Dt.injection.HAS_OVERLOADED_BOOLEAN_VALUE,
                draggable: as,
                formNoValidate: rs,
                hidden: rs,
                loop: rs,
                multiple: ns | rs,
                muted: ns | rs,
                noValidate: rs,
                open: rs,
                playsInline: rs,
                readOnly: rs,
                required: rs,
                reversed: rs,
                rows: is,
                rowSpan: os,
                scoped: rs,
                seamless: rs,
                selected: ns | rs,
                size: is,
                start: os,
                span: is,
                spellCheck: as,
                style: 0,
                itemScope: rs,
                acceptCharset: 0,
                className: 0,
                htmlFor: 0,
                httpEquiv: 0,
                value: as
            },
            DOMAttributeNames: {
                acceptCharset: "accept-charset",
                className: "class",
                htmlFor: "for",
                httpEquiv: "http-equiv"
            },
            DOMMutationMethods: {
                value: function(e, t) {
                    if (null == t) return e.removeAttribute("value");
                    "number" !== e.type || !1 === e.hasAttribute("value") ? e.setAttribute("value", "" + t) : e.validity && !e.validity.badInput && e.ownerDocument.activeElement !== e && e.setAttribute("value", "" + t)
                }
            }
        },
        ss = Dt.injection.HAS_STRING_BOOLEAN_VALUE,
        cs = {
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace"
        },
        ls = {
            Properties: {
                autoReverse: ss,
                externalResourcesRequired: ss,
                preserveAlpha: ss
            },
            DOMAttributeNames: {
                autoReverse: "autoReverse",
                externalResourcesRequired: "externalResourcesRequired",
                preserveAlpha: "preserveAlpha"
            },
            DOMAttributeNamespaces: {
                xlinkActuate: cs.xlink,
                xlinkArcrole: cs.xlink,
                xlinkHref: cs.xlink,
                xlinkRole: cs.xlink,
                xlinkShow: cs.xlink,
                xlinkTitle: cs.xlink,
                xlinkType: cs.xlink,
                xmlBase: cs.xml,
                xmlLang: cs.xml,
                xmlSpace: cs.xml
            }
        },
        fs = /[\-\:]([a-z])/g;
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space".split(" ").forEach(function(e) {
        var t = e.replace(fs, lt);
        ls.Properties[t] = 0, ls.DOMAttributeNames[t] = e
    }), Dt.injection.injectDOMPropertyConfig(us), Dt.injection.injectDOMPropertyConfig(ls);
    var ds = ta.injectInternals,
        hs = Ft.ELEMENT_NODE,
        ps = Ft.TEXT_NODE,
        ms = Ft.COMMENT_NODE,
        gs = Ft.DOCUMENT_NODE,
        vs = Ft.DOCUMENT_FRAGMENT_NODE,
        ys = Dt.ROOT_ATTRIBUTE_NAME,
        _s = Mt.getChildNamespace,
        bs = dr.createElement,
        xs = dr.createTextNode,
        ws = dr.setInitialProperties,
        ks = dr.diffProperties,
        Es = dr.updateProperties,
        Cs = dr.diffHydratedProperties,
        Ts = dr.diffHydratedText,
        Ms = dr.warnForDeletedHydratableElement,
        Ss = dr.warnForDeletedHydratableText,
        Ns = dr.warnForInsertedHydratedElement,
        Ps = dr.warnForInsertedHydratedText,
        As = Yt.precacheFiberNode,
        Is = Yt.updateFiberProps;
    dn.injection.injectFiberControlledHostComponent(dr), xe._injectFiber(function(e) {
        return Ds.findHostInstance(e)
    });
    var Os = null,
        Rs = null,
        Ds = function(e) {
            var t = e.getPublicInstance;
            e = he(e);
            var n = e.scheduleUpdate,
                r = e.getPriorityContext;
            return {
                createContainer: function(e) {
                    var t = fo();
                    return e = {
                        current: t,
                        containerInfo: e,
                        isScheduled: !1,
                        nextScheduledRoot: null,
                        context: null,
                        pendingContext: null
                    }, t.stateNode = e
                },
                updateContainer: function(e, t, o, i) {
                    var a = t.current;
                    o = me(o), null === t.context ? t.context = o : t.pendingContext = o, t = i, i = r(a, Mr.enableAsyncSubtreeAPI && null != e && null != e.type && null != e.type.prototype && !0 === e.type.prototype.unstable_isAsyncReactComponent), e = {
                        element: e
                    }, Ja(a, e, void 0 === t ? null : t, i), n(a, i)
                },
                batchedUpdates: e.batchedUpdates,
                unbatchedUpdates: e.unbatchedUpdates,
                deferredUpdates: e.deferredUpdates,
                flushSync: e.flushSync,
                getPublicRootInstance: function(e) {
                    if (e = e.current, !e.child) return null;
                    switch (e.child.tag) {
                        case nu:
                            return t(e.child.stateNode);
                        default:
                            return e.child.stateNode
                    }
                },
                findHostInstance: function(e) {
                    return e = ru(e), null === e ? null : e.stateNode
                },
                findHostInstanceWithNoPortals: function(e) {
                    return e = ou(e), null === e ? null : e.stateNode
                }
            }
        }({
            getRootHostContext: function(e) {
                if (e.nodeType === gs) e = (e = e.documentElement) ? e.namespaceURI : _s(null, "");
                else {
                    var t = e.nodeType === ms ? e.parentNode : e;
                    e = t.namespaceURI || null, t = t.tagName, e = _s(e, t)
                }
                return e
            },
            getChildHostContext: function(e, t) {
                return _s(e, t)
            },
            getPublicInstance: function(e) {
                return e
            },
            prepareForCommit: function() {
                Os = Nn.isEnabled(), Rs = lu.getSelectionInformation(), Nn.setEnabled(!1)
            },
            resetAfterCommit: function() {
                lu.restoreSelection(Rs), Rs = null, Nn.setEnabled(Os), Os = null
            },
            createInstance: function(e, t, n, r, o) {
                return e = bs(e, t, n, r), As(o, e), Is(e, t), e
            },
            appendInitialChild: function(e, t) {
                e.appendChild(t)
            },
            finalizeInitialChildren: function(e, t, n, r) {
                ws(e, t, n, r);
                e: {
                    switch (t) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            e = !!n.autoFocus;
                            break e
                    }
                    e = !1
                }
                return e
            },
            prepareUpdate: function(e, t, n, r, o) {
                return ks(e, t, n, r, o)
            },
            commitMount: function(e) {
                e.focus()
            },
            commitUpdate: function(e, t, n, r, o) {
                Is(e, o), Es(e, t, n, r, o)
            },
            shouldSetTextContent: function(e, t) {
                return "textarea" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && "string" == typeof t.dangerouslySetInnerHTML.__html
            },
            resetTextContent: function(e) {
                e.textContent = ""
            },
            shouldDeprioritizeSubtree: function(e, t) {
                return !!t.hidden
            },
            createTextInstance: function(e, t, n, r) {
                return e = xs(e, t), As(r, e), e
            },
            commitTextUpdate: function(e, t, n) {
                e.nodeValue = n
            },
            appendChild: function(e, t) {
                e.appendChild(t)
            },
            appendChildToContainer: function(e, t) {
                e.nodeType === ms ? e.parentNode.insertBefore(t, e) : e.appendChild(t)
            },
            insertBefore: function(e, t, n) {
                e.insertBefore(t, n)
            },
            insertInContainerBefore: function(e, t, n) {
                e.nodeType === ms ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n)
            },
            removeChild: function(e, t) {
                e.removeChild(t)
            },
            removeChildFromContainer: function(e, t) {
                e.nodeType === ms ? e.parentNode.removeChild(t) : e.removeChild(t)
            },
            canHydrateInstance: function(e, t) {
                return e.nodeType === hs && t === e.nodeName.toLowerCase()
            },
            canHydrateTextInstance: function(e, t) {
                return "" !== t && e.nodeType === ps
            },
            getNextHydratableSibling: function(e) {
                for (e = e.nextSibling; e && e.nodeType !== hs && e.nodeType !== ps;) e = e.nextSibling;
                return e
            },
            getFirstHydratableChild: function(e) {
                for (e = e.firstChild; e && e.nodeType !== hs && e.nodeType !== ps;) e = e.nextSibling;
                return e
            },
            hydrateInstance: function(e, t, n, r, o, i) {
                return As(i, e), Is(e, n), Cs(e, t, n, o, r)
            },
            hydrateTextInstance: function(e, t, n) {
                return As(n, e), Ts(e, t)
            },
            didNotHydrateInstance: function(e, t) {
                1 === t.nodeType ? Ms(e, t) : Ss(e, t)
            },
            didNotFindHydratableInstance: function(e, t, n) {
                Ns(e, t, n)
            },
            didNotFindHydratableTextInstance: function(e, t) {
                Ps(e, t)
            },
            scheduleDeferredCallback: Tr.rIC,
            useSyncScheduling: !0
        });
    pn.injection.injectFiberBatchedUpdates(Ds.batchedUpdates);
    var Ls = {
        createPortal: pt,
        hydrate: function(e, t, n) {
            return ht(null, e, t, !0, n)
        },
        render: function(e, t, n) {
            return ht(null, e, t, !1, n)
        },
        unstable_renderSubtreeIntoContainer: function(e, t, n, o) {
            return null != e && Xt.has(e) || r("38"), ht(e, t, n, !1, o)
        },
        unmountComponentAtNode: function(e) {
            return ft(e) || r("40"), !!e._reactRootContainer && (Ds.unbatchedUpdates(function() {
                ht(null, null, e, !1, function() {
                    e._reactRootContainer = null
                })
            }), !0)
        },
        findDOMNode: xe,
        unstable_createPortal: pt,
        unstable_batchedUpdates: pn.batchedUpdates,
        unstable_deferredUpdates: Ds.deferredUpdates,
        flushSync: Ds.flushSync,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            EventPluginHub: xn,
            EventPluginRegistry: At,
            EventPropagators: mu,
            ReactControlledComponent: dn,
            ReactDOMComponentTree: Yt,
            ReactDOMEventListener: _n
        }
    };
    ds({
        findFiberByHostInstance: Yt.getClosestInstanceFromNode,
        findHostInstanceByFiber: Ds.findHostInstance,
        bundleType: 0,
        version: "16.0.0",
        rendererPackageName: "react-dom"
    }), e.exports = Ls
}, function(e, t, n) {
    "use strict";
    var r = !("undefined" == typeof window || !window.document || !window.document.createElement),
        o = {
            canUseDOM: r,
            canUseWorkers: "undefined" != typeof Worker,
            canUseEventListeners: r && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: r && !!window.screen,
            isInWorker: !r
        };
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = n(41),
        o = {
            listen: function(e, t, n) {
                return e.addEventListener ? (e.addEventListener(t, n, !1), {
                    remove: function() {
                        e.removeEventListener(t, n, !1)
                    }
                }) : e.attachEvent ? (e.attachEvent("on" + t, n), {
                    remove: function() {
                        e.detachEvent("on" + t, n)
                    }
                }) : void 0
            },
            capture: function(e, t, n) {
                return e.addEventListener ? (e.addEventListener(t, n, !0), {
                    remove: function() {
                        e.removeEventListener(t, n, !0)
                    }
                }) : {
                    remove: r
                }
            },
            registerDefault: function() {}
        };
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e !== e && t !== t
    }

    function o(e, t) {
        if (r(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var n = Object.keys(e),
            o = Object.keys(t);
        if (n.length !== o.length) return !1;
        for (var a = 0; a < n.length; a++)
            if (!i.call(t, n[a]) || !r(e[n[a]], t[n[a]])) return !1;
        return !0
    }
    var i = Object.prototype.hasOwnProperty;
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        return !(!e || !t) && (e === t || !o(e) && (o(t) ? r(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
    }
    var o = n(133);
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return o(e) && 3 == e.nodeType
    }
    var o = n(134);
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = e ? e.ownerDocument || e : document,
            n = t.defaultView || window;
        return !(!e || !("function" == typeof n.Node ? e instanceof n.Node : "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName))
    }
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        try {
            e.focus()
        } catch (e) {}
    }
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
        try {
            return e.activeElement || e.body
        } catch (t) {
            return e.body
        }
    }
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e) {
        var t = e.type,
            n = e.props,
            r = document.createElement(t);
        for (var o in n)
            if (n.hasOwnProperty(o) && "children" !== o && "dangerouslySetInnerHTML" !== o) {
                var i = f[o] || o.toLowerCase();
                r.setAttribute(i, n[o])
            }
        var a = n.children,
            u = n.dangerouslySetInnerHTML;
        return u ? r.innerHTML = u.__html || "" : a && (r.textContent = "string" == typeof a ? a : a.join("")), r
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(30),
        a = r(i),
        u = n(0),
        s = r(u),
        c = n(1),
        l = r(c),
        f = {
            acceptCharset: "accept-charset",
            className: "class",
            htmlFor: "for",
            httpEquiv: "http-equiv"
        },
        d = function() {
            function e() {
                (0, s.default)(this, e), this.updatePromise = null
            }
            return (0, l.default)(e, [{
                key: "updateHead",
                value: function(e) {
                    var t = this,
                        n = this.updatePromise = a.default.resolve().then(function() {
                            n === t.updatePromise && (t.updatePromise = null, t.doUpdateHead(e))
                        })
                }
            }, {
                key: "doUpdateHead",
                value: function(e) {
                    var t = this,
                        n = {};
                    e.forEach(function(e) {
                        var t = n[e.type] || [];
                        t.push(e), n[e.type] = t
                    }), this.updateTitle(n.title ? n.title[0] : null), ["meta", "base", "link", "style", "script"].forEach(function(e) {
                        t.updateElements(e, n[e] || [])
                    })
                }
            }, {
                key: "updateTitle",
                value: function(e) {
                    var t = void 0;
                    if (e) {
                        var n = e.props.children;
                        t = "string" == typeof n ? n : n.join("")
                    } else t = "";
                    t !== document.title && (document.title = t)
                }
            }, {
                key: "updateElements",
                value: function(e, t) {
                    var n = document.getElementsByTagName("head")[0],
                        r = Array.prototype.slice.call(n.querySelectorAll(e + ".next-head")),
                        i = t.map(o).filter(function(e) {
                            for (var t = 0, n = r.length; t < n; t++) {
                                if (r[t].isEqualNode(e)) return r.splice(t, 1), !1
                            }
                            return !0
                        });
                    r.forEach(function(e) {
                        return e.parentNode.removeChild(e)
                    }), i.forEach(function(e) {
                        return n.appendChild(e)
                    })
                }
            }]), e
        }();
    t.default = d
}, function(e, t, n) {
    n(139);
    var r = n(3).Object;
    e.exports = function(e, t, n) {
        return r.defineProperty(e, t, n)
    }
}, function(e, t, n) {
    var r = n(4);
    r(r.S + r.F * !n(13), "Object", {
        defineProperty: n(10).f
    })
}, function(e, t, n) {
    e.exports = {
        default: n(141),
        __esModule: !0
    }
}, function(e, t, n) {
    n(21), n(18), e.exports = n(142)
}, function(e, t, n) {
    var r = n(39),
        o = n(5)("iterator"),
        i = n(22);
    e.exports = n(3).isIterable = function(e) {
        var t = Object(e);
        return void 0 !== t[o] || "@@iterator" in t || i.hasOwnProperty(r(t))
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e) {
        var t = (0, k.getDisplayName)(e),
            n = function(t) {
                function n() {
                    return (0, l.default)(this, n), (0, p.default)(this, (n.__proto__ || (0, s.default)(n)).apply(this, arguments))
                }
                return (0, g.default)(n, t), (0, d.default)(n, [{
                    key: "render",
                    value: function() {
                        var t = (0, a.default)({
                            router: this.context.router
                        }, this.props);
                        return y.default.createElement(e, t)
                    }
                }]), n
            }(v.Component);
        return n.contextTypes = {
            router: b.default.object
        }, n.displayName = "withRoute(" + t + ")", (0, w.default)(n, e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(43),
        a = r(i),
        u = n(6),
        s = r(u),
        c = n(0),
        l = r(c),
        f = n(1),
        d = r(f),
        h = n(7),
        p = r(h),
        m = n(8),
        g = r(m);
    t.default = o;
    var v = n(2),
        y = r(v),
        _ = n(32),
        b = r(_),
        x = n(167),
        w = r(x),
        k = n(33)
}, function(e, t, n) {
    n(145), e.exports = n(3).Object.assign
}, function(e, t, n) {
    var r = n(4);
    r(r.S + r.F, "Object", {
        assign: n(146)
    })
}, function(e, t, n) {
    "use strict";
    var r = n(28),
        o = n(64),
        i = n(44),
        a = n(24),
        u = n(47),
        s = Object.assign;
    e.exports = !s || n(16)(function() {
        var e = {},
            t = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst";
        return e[n] = 7, r.split("").forEach(function(e) {
            t[e] = e
        }), 7 != s({}, e)[n] || Object.keys(s({}, t)).join("") != r
    }) ? function(e, t) {
        for (var n = a(e), s = arguments.length, c = 1, l = o.f, f = i.f; s > c;)
            for (var d, h = u(arguments[c++]), p = l ? r(h).concat(l(h)) : r(h), m = p.length, g = 0; m > g;) f.call(h, d = p[g++]) && (n[d] = h[d]);
        return n
    } : s
}, function(e, t, n) {
    n(148), e.exports = n(3).Object.getPrototypeOf
}, function(e, t, n) {
    var r = n(24),
        o = n(78);
    n(90)("getPrototypeOf", function() {
        return function(e) {
            return o(r(e))
        }
    })
}, function(e, t, n) {
    e.exports = {
        default: n(150),
        __esModule: !0
    }
}, function(e, t, n) {
    n(18), n(21), e.exports = n(66).f("iterator")
}, function(e, t, n) {
    e.exports = {
        default: n(152),
        __esModule: !0
    }
}, function(e, t, n) {
    n(153), n(40), n(156), n(157), e.exports = n(3).Symbol
}, function(e, t, n) {
    "use strict";
    var r = n(9),
        o = n(17),
        i = n(13),
        a = n(4),
        u = n(75),
        s = n(67).KEY,
        c = n(16),
        l = n(54),
        f = n(29),
        d = n(38),
        h = n(5),
        p = n(66),
        m = n(68),
        g = n(154),
        v = n(91),
        y = n(11),
        _ = n(23),
        b = n(51),
        x = n(27),
        w = n(36),
        k = n(155),
        E = n(93),
        C = n(10),
        T = n(28),
        M = E.f,
        S = C.f,
        N = k.f,
        P = r.Symbol,
        A = r.JSON,
        I = A && A.stringify,
        O = h("_hidden"),
        R = h("toPrimitive"),
        D = {}.propertyIsEnumerable,
        L = l("symbol-registry"),
        F = l("symbols"),
        j = l("op-symbols"),
        U = Object.prototype,
        z = "function" == typeof P,
        H = r.QObject,
        B = !H || !H.prototype || !H.prototype.findChild,
        q = i && c(function() {
            return 7 != w(S({}, "a", {
                get: function() {
                    return S(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(e, t, n) {
            var r = M(U, t);
            r && delete U[t], S(e, t, n), r && e !== U && S(U, t, r)
        } : S,
        W = function(e) {
            var t = F[e] = w(P.prototype);
            return t._k = e, t
        },
        V = z && "symbol" == typeof P.iterator ? function(e) {
            return "symbol" == typeof e
        } : function(e) {
            return e instanceof P
        },
        G = function(e, t, n) {
            return e === U && G(j, t, n), y(e), t = b(t, !0), y(n), o(F, t) ? (n.enumerable ? (o(e, O) && e[O][t] && (e[O][t] = !1), n = w(n, {
                enumerable: x(0, !1)
            })) : (o(e, O) || S(e, O, x(1, {})), e[O][t] = !0), q(e, t, n)) : S(e, t, n)
        },
        Y = function(e, t) {
            y(e);
            for (var n, r = g(t = _(t)), o = 0, i = r.length; i > o;) G(e, n = r[o++], t[n]);
            return e
        },
        X = function(e, t) {
            return void 0 === t ? w(e) : Y(w(e), t)
        },
        K = function(e) {
            var t = D.call(this, e = b(e, !0));
            return !(this === U && o(F, e) && !o(j, e)) && (!(t || !o(this, e) || !o(F, e) || o(this, O) && this[O][e]) || t)
        },
        $ = function(e, t) {
            if (e = _(e), t = b(t, !0), e !== U || !o(F, t) || o(j, t)) {
                var n = M(e, t);
                return !n || !o(F, t) || o(e, O) && e[O][t] || (n.enumerable = !0), n
            }
        },
        Q = function(e) {
            for (var t, n = N(_(e)), r = [], i = 0; n.length > i;) o(F, t = n[i++]) || t == O || t == s || r.push(t);
            return r
        },
        J = function(e) {
            for (var t, n = e === U, r = N(n ? j : _(e)), i = [], a = 0; r.length > a;) !o(F, t = r[a++]) || n && !o(U, t) || i.push(F[t]);
            return i
        };
    z || (P = function() {
        if (this instanceof P) throw TypeError("Symbol is not a constructor!");
        var e = d(arguments.length > 0 ? arguments[0] : void 0),
            t = function(n) {
                this === U && t.call(j, n), o(this, O) && o(this[O], e) && (this[O][e] = !1), q(this, e, x(1, n))
            };
        return i && B && q(U, e, {
            configurable: !0,
            set: t
        }), W(e)
    }, u(P.prototype, "toString", function() {
        return this._k
    }), E.f = $, C.f = G, n(92).f = k.f = Q, n(44).f = K, n(64).f = J, i && !n(35) && u(U, "propertyIsEnumerable", K, !0), p.f = function(e) {
        return W(h(e))
    }), a(a.G + a.W + a.F * !z, {
        Symbol: P
    });
    for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; Z.length > ee;) h(Z[ee++]);
    for (var te = T(h.store), ne = 0; te.length > ne;) m(te[ne++]);
    a(a.S + a.F * !z, "Symbol", {
        for: function(e) {
            return o(L, e += "") ? L[e] : L[e] = P(e)
        },
        keyFor: function(e) {
            if (!V(e)) throw TypeError(e + " is not a symbol!");
            for (var t in L)
                if (L[t] === e) return t
        },
        useSetter: function() {
            B = !0
        },
        useSimple: function() {
            B = !1
        }
    }), a(a.S + a.F * !z, "Object", {
        create: X,
        defineProperty: G,
        defineProperties: Y,
        getOwnPropertyDescriptor: $,
        getOwnPropertyNames: Q,
        getOwnPropertySymbols: J
    }), A && a(a.S + a.F * (!z || c(function() {
        var e = P();
        return "[null]" != I([e]) || "{}" != I({
            a: e
        }) || "{}" != I(Object(e))
    })), "JSON", {
        stringify: function(e) {
            if (void 0 !== e && !V(e)) {
                for (var t, n, r = [e], o = 1; arguments.length > o;) r.push(arguments[o++]);
                return t = r[1], "function" == typeof t && (n = t), !n && v(t) || (t = function(e, t) {
                    if (n && (t = n.call(this, e, t)), !V(t)) return t
                }), r[1] = t, I.apply(A, r)
            }
        }
    }), P.prototype[R] || n(15)(P.prototype, R, P.prototype.valueOf), f(P, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0)
}, function(e, t, n) {
    var r = n(28),
        o = n(64),
        i = n(44);
    e.exports = function(e) {
        var t = r(e),
            n = o.f;
        if (n)
            for (var a, u = n(e), s = i.f, c = 0; u.length > c;) s.call(e, a = u[c++]) && t.push(a);
        return t
    }
}, function(e, t, n) {
    var r = n(23),
        o = n(92).f,
        i = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        u = function(e) {
            try {
                return o(e)
            } catch (e) {
                return a.slice()
            }
        };
    e.exports.f = function(e) {
        return a && "[object Window]" == i.call(e) ? u(e) : o(r(e))
    }
}, function(e, t, n) {
    n(68)("asyncIterator")
}, function(e, t, n) {
    n(68)("observable")
}, function(e, t, n) {
    e.exports = {
        default: n(159),
        __esModule: !0
    }
}, function(e, t, n) {
    n(160), e.exports = n(3).Object.setPrototypeOf
}, function(e, t, n) {
    var r = n(4);
    r(r.S, "Object", {
        setPrototypeOf: n(161).set
    })
}, function(e, t, n) {
    var r = n(12),
        o = n(11),
        i = function(e, t) {
            if (o(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
        };
    e.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, r) {
            try {
                r = n(14)(Function.call, n(93).f(Object.prototype, "__proto__").set, 2), r(e, []), t = !(e instanceof Array)
            } catch (e) {
                t = !0
            }
            return function(e, n) {
                return i(e, n), t ? e.__proto__ = n : r(e, n), e
            }
        }({}, !1) : void 0),
        check: i
    }
}, function(e, t, n) {
    e.exports = {
        default: n(163),
        __esModule: !0
    }
}, function(e, t, n) {
    n(164);
    var r = n(3).Object;
    e.exports = function(e, t) {
        return r.create(e, t)
    }
}, function(e, t, n) {
    var r = n(4);
    r(r.S, "Object", {
        create: n(36)
    })
}, function(e, t, n) {
    "use strict";
    var r = n(41),
        o = n(61),
        i = n(166);
    e.exports = function() {
        function e(e, t, n, r, a, u) {
            u !== i && o(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
        }

        function t() {
            return e
        }
        e.isRequired = e;
        var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t
        };
        return n.checkPropTypes = r, n.PropTypes = n, n
    }
}, function(e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function(e, t, n) {
    "use strict";
    var r = {
            childContextTypes: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        },
        o = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        },
        i = Object.defineProperty,
        a = Object.getOwnPropertyNames,
        u = Object.getOwnPropertySymbols,
        s = Object.getOwnPropertyDescriptor,
        c = Object.getPrototypeOf,
        l = c && c(Object);
    e.exports = function e(t, n, f) {
        if ("string" != typeof n) {
            if (l) {
                var d = c(n);
                d && d !== l && e(t, d, f)
            }
            var h = a(n);
            u && (h = h.concat(u(n)));
            for (var p = 0; p < h.length; ++p) {
                var m = h[p];
                if (!(r[m] || o[m] || f && f[m])) {
                    var g = s(n, m);
                    try {
                        i(t, m, g)
                    } catch (e) {}
                }
            }
            return t
        }
        return t
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e) {
        return e.replace(/\/$/, "") || "/"
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(42),
        a = r(i),
        u = n(65),
        s = r(u),
        c = n(43),
        l = r(c),
        f = n(45),
        d = r(f),
        h = n(57),
        p = r(h),
        m = n(34),
        g = r(m),
        v = n(0),
        y = r(v),
        _ = n(1),
        b = r(_),
        x = n(178),
        w = n(70),
        k = r(w),
        E = n(101),
        C = r(E),
        T = n(185),
        M = r(T),
        S = n(33),
        N = n(62),
        P = function() {
            function e(t, n, r) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    a = i.pageLoader,
                    u = i.Component,
                    s = i.ErrorComponent,
                    c = i.err;
                (0, y.default)(this, e), this.route = o(t), this.components = {}, u !== s && (this.components[this.route] = {
                    Component: u,
                    err: c
                }), this.events = new k.default, this.pageLoader = a, this.prefetchQueue = new M.default({
                    concurrency: 2
                }), this.ErrorComponent = s, this.pathname = t, this.query = n, this.asPath = r, this.subscriptions = new g.default, this.componentLoadCancel = null, this.onPopState = this.onPopState.bind(this), "undefined" != typeof window && (this.changeState("replaceState", (0, x.format)({
                    pathname: t,
                    query: n
                }), (0, S.getURL)()), window.addEventListener("popstate", this.onPopState))
            }
            return (0, b.default)(e, [{
                key: "onPopState",
                value: function() {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    var t = (0, p.default)(d.default.mark(function e(t) {
                        var n, r, o, i, a, u;
                        return d.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t.state) {
                                        e.next = 4;
                                        break
                                    }
                                    return n = this.pathname, r = this.query, this.changeState("replaceState", (0, x.format)({
                                        pathname: n,
                                        query: r
                                    }), (0, S.getURL)()), e.abrupt("return");
                                case 4:
                                    o = t.state, i = o.url, a = o.as, u = o.options, this.replace(i, a, u);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "update",
                value: function(e, t) {
                    var n = this.components[e];
                    if (!n) throw new Error("Cannot update unavailable route: " + e);
                    var r = (0, l.default)({}, n, {
                        Component: t
                    });
                    this.components[e] = r, e === this.route && this.notify(r)
                }
            }, {
                key: "reload",
                value: function() {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    var t = (0, p.default)(d.default.mark(function e(t) {
                        var n, r, o, i, a;
                        return d.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (delete this.components[t], this.pageLoader.clearCache(t), t === this.route) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 4:
                                    return n = this.pathname, r = this.query, o = window.location.href, this.events.emit("routeChangeStart", o), e.next = 9, this.getRouteInfo(t, n, r, o);
                                case 9:
                                    if (i = e.sent, !(a = i.error) || !a.cancelled) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 13:
                                    if (this.notify(i), !a) {
                                        e.next = 17;
                                        break
                                    }
                                    throw this.events.emit("routeChangeError", a, o), a;
                                case 17:
                                    this.events.emit("routeChangeComplete", o);
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "back",
                value: function() {
                    window.history.back()
                }
            }, {
                key: "push",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return this.change("pushState", e, t, n)
                }
            }, {
                key: "replace",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return this.change("replaceState", e, t, n)
                }
            }, {
                key: "change",
                value: function() {
                    function e(e, n, r, o) {
                        return t.apply(this, arguments)
                    }
                    var t = (0, p.default)(d.default.mark(function e(t, n, r, i) {
                        var a, u, c, f, h, p, m, g, v, y, _, b;
                        return d.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (a = "object" === (void 0 === n ? "undefined" : (0, s.default)(n)) ? (0, x.format)(n) : n, u = "object" === (void 0 === r ? "undefined" : (0, s.default)(r)) ? (0, x.format)(r) : r, __NEXT_DATA__.nextExport && (u = (0, N._rewriteUrlForNextExport)(u)), this.abortComponentLoad(u), c = (0, x.parse)(a, !0), f = c.pathname, h = c.query, !this.onlyAHashChange(u)) {
                                        e.next = 9;
                                        break
                                    }
                                    return this.changeState(t, a, u), this.scrollToHash(u), e.abrupt("return");
                                case 9:
                                    if (this.urlIsNew(f, h) || (t = "replaceState"), p = o(f), m = i.shallow, g = void 0 !== m && m, v = null, this.events.emit("routeChangeStart", u), !g || !this.isShallowRoutingPossible(p)) {
                                        e.next = 18;
                                        break
                                    }
                                    v = this.components[p], e.next = 21;
                                    break;
                                case 18:
                                    return e.next = 20, this.getRouteInfo(p, f, h, u);
                                case 20:
                                    v = e.sent;
                                case 21:
                                    if (y = v, !(_ = y.error) || !_.cancelled) {
                                        e.next = 24;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 24:
                                    if (this.events.emit("beforeHistoryChange", u), this.changeState(t, a, u, i), b = window.location.hash.substring(1), this.set(p, f, h, u, (0, l.default)({}, v, {
                                            hash: b
                                        })), !_) {
                                        e.next = 31;
                                        break
                                    }
                                    throw this.events.emit("routeChangeError", _, u), _;
                                case 31:
                                    return this.events.emit("routeChangeComplete", u), e.abrupt("return", !0);
                                case 33:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "changeState",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    "pushState" === e && (0, S.getURL)() === n || window.history[e]({
                        url: t,
                        as: n,
                        options: r
                    }, null, n)
                }
            }, {
                key: "getRouteInfo",
                value: function() {
                    function e(e, n, r, o) {
                        return t.apply(this, arguments)
                    }
                    var t = (0, p.default)(d.default.mark(function e(t, n, r, o) {
                        var i, a, u, s, c, l;
                        return d.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (i = null, e.prev = 1, i = this.components[t]) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 6, this.fetchComponent(t, o);
                                case 6:
                                    e.t0 = e.sent, i = {
                                        Component: e.t0
                                    };
                                case 8:
                                    return a = i, u = a.Component, s = {
                                        pathname: n,
                                        query: r,
                                        asPath: o
                                    }, e.next = 12, this.getInitialProps(u, s);
                                case 12:
                                    i.props = e.sent, this.components[t] = i, e.next = 32;
                                    break;
                                case 16:
                                    if (e.prev = 16, e.t1 = e.catch(1), !e.t1.cancelled) {
                                        e.next = 20;
                                        break
                                    }
                                    return e.abrupt("return", {
                                        error: e.t1
                                    });
                                case 20:
                                    if (!e.t1.buildIdMismatched) {
                                        e.next = 24;
                                        break
                                    }
                                    return (0, N._notifyBuildIdMismatch)(o), e.t1.cancelled = !0, e.abrupt("return", {
                                        error: e.t1
                                    });
                                case 24:
                                    return 404 === e.t1.statusCode && (e.t1.ignore = !0), c = this.ErrorComponent, i = {
                                        Component: c,
                                        err: e.t1
                                    }, l = {
                                        err: e.t1,
                                        pathname: n,
                                        query: r
                                    }, e.next = 30, this.getInitialProps(c, l);
                                case 30:
                                    i.props = e.sent, i.error = e.t1;
                                case 32:
                                    return e.abrupt("return", i);
                                case 33:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this, [
                            [1, 16]
                        ])
                    }));
                    return e
                }()
            }, {
                key: "set",
                value: function(e, t, n, r, o) {
                    this.route = e, this.pathname = t, this.query = n, this.asPath = r, this.notify(o)
                }
            }, {
                key: "onlyAHashChange",
                value: function(e) {
                    if (!this.asPath) return !1;
                    var t = this.asPath.split("#"),
                        n = (0, a.default)(t, 2),
                        r = n[0],
                        o = n[1],
                        i = e.split("#"),
                        u = (0, a.default)(i, 2),
                        s = u[0],
                        c = u[1];
                    return r === s && o !== c
                }
            }, {
                key: "scrollToHash",
                value: function(e) {
                    var t = e.split("#"),
                        n = (0, a.default)(t, 2),
                        r = n[1],
                        o = document.getElementById(r);
                    o && o.scrollIntoView()
                }
            }, {
                key: "urlIsNew",
                value: function(e, t) {
                    return this.pathname !== e || !(0, C.default)(t, this.query)
                }
            }, {
                key: "isShallowRoutingPossible",
                value: function(e) {
                    return Boolean(this.components[e]) && this.route === e
                }
            }, {
                key: "prefetch",
                value: function() {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    var t = (0, p.default)(d.default.mark(function e(t) {
                        var n, r, i, a = this;
                        return d.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    e.next = 2;
                                    break;
                                case 2:
                                    return n = (0, x.parse)(t), r = n.pathname, i = o(r), e.abrupt("return", this.prefetchQueue.add(function() {
                                        return a.fetchRoute(i)
                                    }));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "fetchComponent",
                value: function() {
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    var t = (0, p.default)(d.default.mark(function e(t, n) {
                        var r, o, i, a;
                        return d.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = !1, o = this.componentLoadCancel = function() {
                                        r = !0
                                    }, e.prev = 2, e.next = 5, this.fetchRoute(t);
                                case 5:
                                    if (i = e.sent, !r) {
                                        e.next = 10;
                                        break
                                    }
                                    throw a = new Error('Abort fetching component for route: "' + t + '"'), a.cancelled = !0, a;
                                case 10:
                                    return o === this.componentLoadCancel && (this.componentLoadCancel = null), e.abrupt("return", i);
                                case 14:
                                    throw e.prev = 14, e.t0 = e.catch(2), window.location.href = n, e.t0;
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this, [
                            [2, 14]
                        ])
                    }));
                    return e
                }()
            }, {
                key: "getInitialProps",
                value: function() {
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    var t = (0, p.default)(d.default.mark(function e(t, n) {
                        var r, o, i, a;
                        return d.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = !1, o = function() {
                                        r = !0
                                    }, this.componentLoadCancel = o, e.next = 5, (0, S.loadGetInitialProps)(t, n);
                                case 5:
                                    if (i = e.sent, o === this.componentLoadCancel && (this.componentLoadCancel = null), !r) {
                                        e.next = 11;
                                        break
                                    }
                                    throw a = new Error("Loading initial props cancelled"), a.cancelled = !0, a;
                                case 11:
                                    return e.abrupt("return", i);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "fetchRoute",
                value: function() {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    var t = (0, p.default)(d.default.mark(function e(t) {
                        return d.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.pageLoader.loadPage(t);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "abortComponentLoad",
                value: function(e) {
                    this.componentLoadCancel && (this.events.emit("routeChangeError", new Error("Route Cancelled"), e), this.componentLoadCancel(), this.componentLoadCancel = null)
                }
            }, {
                key: "notify",
                value: function(e) {
                    this.subscriptions.forEach(function(t) {
                        return t(e)
                    })
                }
            }, {
                key: "subscribe",
                value: function(e) {
                    var t = this;
                    return this.subscriptions.add(e),
                        function() {
                            return t.subscriptions.delete(e)
                        }
                }
            }]), e
        }();
    t.default = P
}, function(e, t, n) {
    n(40), n(18), n(21), n(170), n(174), n(176), n(177), e.exports = n(3).Set
}, function(e, t, n) {
    "use strict";
    var r = n(95),
        o = n(69);
    e.exports = n(96)("Set", function(e) {
        return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function(e) {
            return r.def(o(this, "Set"), e = 0 === e ? 0 : e, e)
        }
    }, r)
}, function(e, t, n) {
    var r = n(14),
        o = n(47),
        i = n(24),
        a = n(37),
        u = n(172);
    e.exports = function(e, t) {
        var n = 1 == e,
            s = 2 == e,
            c = 3 == e,
            l = 4 == e,
            f = 6 == e,
            d = 5 == e || f,
            h = t || u;
        return function(t, u, p) {
            for (var m, g, v = i(t), y = o(v), _ = r(u, p, 3), b = a(y.length), x = 0, w = n ? h(t, b) : s ? h(t, 0) : void 0; b > x; x++)
                if ((d || x in y) && (m = y[x], g = _(m, x, v), e))
                    if (n) w[x] = g;
                    else if (g) switch (e) {
                case 3:
                    return !0;
                case 5:
                    return m;
                case 6:
                    return x;
                case 2:
                    w.push(m)
            } else if (l) return !1;
            return f ? -1 : c || l ? l : w
        }
    }
}, function(e, t, n) {
    var r = n(173);
    e.exports = function(e, t) {
        return new(r(e))(t)
    }
}, function(e, t, n) {
    var r = n(12),
        o = n(91),
        i = n(5)("species");
    e.exports = function(e) {
        var t;
        return o(e) && (t = e.constructor, "function" != typeof t || t !== Array && !o(t.prototype) || (t = void 0), r(t) && null === (t = t[i]) && (t = void 0)), void 0 === t ? Array : t
    }
}, function(e, t, n) {
    var r = n(4);
    r(r.P + r.R, "Set", {
        toJSON: n(97)("Set")
    })
}, function(e, t, n) {
    var r = n(31);
    e.exports = function(e, t) {
        var n = [];
        return r(e, !1, n.push, n, t), n
    }
}, function(e, t, n) {
    n(98)("Set")
}, function(e, t, n) {
    n(99)("Set")
}, function(e, t, n) {
    "use strict";

    function r() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
    }

    function o(e, t, n) {
        if (e && c.isObject(e) && e instanceof r) return e;
        var o = new r;
        return o.parse(e, t, n), o
    }

    function i(e) {
        return c.isString(e) && (e = o(e)), e instanceof r ? e.format() : r.prototype.format.call(e)
    }

    function a(e, t) {
        return o(e, !1, !0).resolve(t)
    }

    function u(e, t) {
        return e ? o(e, !1, !0).resolveObject(t) : t
    }
    var s = n(179),
        c = n(181);
    t.parse = o, t.resolve = a, t.resolveObject = u, t.format = i, t.Url = r;
    var l = /^([a-z0-9.+-]+:)/i,
        f = /:[0-9]*$/,
        d = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        h = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
        p = ["{", "}", "|", "\\", "^", "`"].concat(h),
        m = ["'"].concat(p),
        g = ["%", "/", "?", ";", "#"].concat(m),
        v = ["/", "?", "#"],
        y = /^[+a-z0-9A-Z_-]{0,63}$/,
        _ = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        b = {
            javascript: !0,
            "javascript:": !0
        },
        x = {
            javascript: !0,
            "javascript:": !0
        },
        w = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        },
        k = n(182);
    r.prototype.parse = function(e, t, n) {
        if (!c.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
        var r = e.indexOf("?"),
            o = -1 !== r && r < e.indexOf("#") ? "?" : "#",
            i = e.split(o),
            a = /\\/g;
        i[0] = i[0].replace(a, "/"), e = i.join(o);
        var u = e;
        if (u = u.trim(), !n && 1 === e.split("#").length) {
            var f = d.exec(u);
            if (f) return this.path = u, this.href = u, this.pathname = f[1], f[2] ? (this.search = f[2], this.query = t ? k.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
        }
        var h = l.exec(u);
        if (h) {
            h = h[0];
            var p = h.toLowerCase();
            this.protocol = p, u = u.substr(h.length)
        }
        if (n || h || u.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var E = "//" === u.substr(0, 2);
            !E || h && x[h] || (u = u.substr(2), this.slashes = !0)
        }
        if (!x[h] && (E || h && !w[h])) {
            for (var C = -1, T = 0; T < v.length; T++) {
                var M = u.indexOf(v[T]); - 1 !== M && (-1 === C || M < C) && (C = M)
            }
            var S, N;
            N = -1 === C ? u.lastIndexOf("@") : u.lastIndexOf("@", C), -1 !== N && (S = u.slice(0, N), u = u.slice(N + 1), this.auth = decodeURIComponent(S)), C = -1;
            for (var T = 0; T < g.length; T++) {
                var M = u.indexOf(g[T]); - 1 !== M && (-1 === C || M < C) && (C = M)
            } - 1 === C && (C = u.length), this.host = u.slice(0, C), u = u.slice(C), this.parseHost(), this.hostname = this.hostname || "";
            var P = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!P)
                for (var A = this.hostname.split(/\./), T = 0, I = A.length; T < I; T++) {
                    var O = A[T];
                    if (O && !O.match(y)) {
                        for (var R = "", D = 0, L = O.length; D < L; D++) O.charCodeAt(D) > 127 ? R += "x" : R += O[D];
                        if (!R.match(y)) {
                            var F = A.slice(0, T),
                                j = A.slice(T + 1),
                                U = O.match(_);
                            U && (F.push(U[1]), j.unshift(U[2])), j.length && (u = "/" + j.join(".") + u), this.hostname = F.join(".");
                            break
                        }
                    }
                }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), P || (this.hostname = s.toASCII(this.hostname));
            var z = this.port ? ":" + this.port : "",
                H = this.hostname || "";
            this.host = H + z, this.href += this.host, P && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== u[0] && (u = "/" + u))
        }
        if (!b[p])
            for (var T = 0, I = m.length; T < I; T++) {
                var B = m[T];
                if (-1 !== u.indexOf(B)) {
                    var q = encodeURIComponent(B);
                    q === B && (q = escape(B)), u = u.split(B).join(q)
                }
            }
        var W = u.indexOf("#"); - 1 !== W && (this.hash = u.substr(W), u = u.slice(0, W));
        var V = u.indexOf("?");
        if (-1 !== V ? (this.search = u.substr(V), this.query = u.substr(V + 1), t && (this.query = k.parse(this.query)), u = u.slice(0, V)) : t && (this.search = "", this.query = {}), u && (this.pathname = u), w[p] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
            var z = this.pathname || "",
                G = this.search || "";
            this.path = z + G
        }
        return this.href = this.format(), this
    }, r.prototype.format = function() {
        var e = this.auth || "";
        e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
        var t = this.protocol || "",
            n = this.pathname || "",
            r = this.hash || "",
            o = !1,
            i = "";
        this.host ? o = e + this.host : this.hostname && (o = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && c.isObject(this.query) && Object.keys(this.query).length && (i = k.stringify(this.query));
        var a = this.search || i && "?" + i || "";
        return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || w[t]) && !1 !== o ? (o = "//" + (o || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : o || (o = ""), r && "#" !== r.charAt(0) && (r = "#" + r), a && "?" !== a.charAt(0) && (a = "?" + a), n = n.replace(/[?#]/g, function(e) {
            return encodeURIComponent(e)
        }), a = a.replace("#", "%23"), t + o + n + a + r
    }, r.prototype.resolve = function(e) {
        return this.resolveObject(o(e, !1, !0)).format()
    }, r.prototype.resolveObject = function(e) {
        if (c.isString(e)) {
            var t = new r;
            t.parse(e, !1, !0), e = t
        }
        for (var n = new r, o = Object.keys(this), i = 0; i < o.length; i++) {
            var a = o[i];
            n[a] = this[a]
        }
        if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
        if (e.slashes && !e.protocol) {
            for (var u = Object.keys(e), s = 0; s < u.length; s++) {
                var l = u[s];
                "protocol" !== l && (n[l] = e[l])
            }
            return w[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
        }
        if (e.protocol && e.protocol !== n.protocol) {
            if (!w[e.protocol]) {
                for (var f = Object.keys(e), d = 0; d < f.length; d++) {
                    var h = f[d];
                    n[h] = e[h]
                }
                return n.href = n.format(), n
            }
            if (n.protocol = e.protocol, e.host || x[e.protocol]) n.pathname = e.pathname;
            else {
                for (var p = (e.pathname || "").split("/"); p.length && !(e.host = p.shift()););
                e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== p[0] && p.unshift(""), p.length < 2 && p.unshift(""), n.pathname = p.join("/")
            }
            if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
                var m = n.pathname || "",
                    g = n.search || "";
                n.path = m + g
            }
            return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
        }
        var v = n.pathname && "/" === n.pathname.charAt(0),
            y = e.host || e.pathname && "/" === e.pathname.charAt(0),
            _ = y || v || n.host && e.pathname,
            b = _,
            k = n.pathname && n.pathname.split("/") || [],
            p = e.pathname && e.pathname.split("/") || [],
            E = n.protocol && !w[n.protocol];
        if (E && (n.hostname = "", n.port = null, n.host && ("" === k[0] ? k[0] = n.host : k.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === p[0] ? p[0] = e.host : p.unshift(e.host)), e.host = null), _ = _ && ("" === p[0] || "" === k[0])), y) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, k = p;
        else if (p.length) k || (k = []), k.pop(), k = k.concat(p), n.search = e.search, n.query = e.query;
        else if (!c.isNullOrUndefined(e.search)) {
            if (E) {
                n.hostname = n.host = k.shift();
                var C = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                C && (n.auth = C.shift(), n.host = n.hostname = C.shift())
            }
            return n.search = e.search, n.query = e.query, c.isNull(n.pathname) && c.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
        }
        if (!k.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
        for (var T = k.slice(-1)[0], M = (n.host || e.host || k.length > 1) && ("." === T || ".." === T) || "" === T, S = 0, N = k.length; N >= 0; N--) T = k[N], "." === T ? k.splice(N, 1) : ".." === T ? (k.splice(N, 1), S++) : S && (k.splice(N, 1), S--);
        if (!_ && !b)
            for (; S--; S) k.unshift("..");
        !_ || "" === k[0] || k[0] && "/" === k[0].charAt(0) || k.unshift(""), M && "/" !== k.join("/").substr(-1) && k.push("");
        var P = "" === k[0] || k[0] && "/" === k[0].charAt(0);
        if (E) {
            n.hostname = n.host = P ? "" : k.length ? k.shift() : "";
            var C = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
            C && (n.auth = C.shift(), n.host = n.hostname = C.shift())
        }
        return _ = _ || n.host && k.length, _ && !P && k.unshift(""), k.length ? n.pathname = k.join("/") : (n.pathname = null, n.path = null), c.isNull(n.pathname) && c.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
    }, r.prototype.parseHost = function() {
        var e = this.host,
            t = f.exec(e);
        t && (t = t[0], ":" !== t && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
    }
}, function(e, t, n) {
    (function(e, r) {
        var o;
        ! function(i) {
            function a(e) {
                throw new RangeError(I[e])
            }

            function u(e, t) {
                for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
                return r
            }

            function s(e, t) {
                var n = e.split("@"),
                    r = "";
                return n.length > 1 && (r = n[0] + "@", e = n[1]), e = e.replace(A, "."), r + u(e.split("."), t).join(".")
            }

            function c(e) {
                for (var t, n, r = [], o = 0, i = e.length; o < i;) t = e.charCodeAt(o++), t >= 55296 && t <= 56319 && o < i ? (n = e.charCodeAt(o++), 56320 == (64512 & n) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), o--)) : r.push(t);
                return r
            }

            function l(e) {
                return u(e, function(e) {
                    var t = "";
                    return e > 65535 && (e -= 65536, t += D(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += D(e)
                }).join("")
            }

            function f(e) {
                return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : x
            }

            function d(e, t) {
                return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
            }

            function h(e, t, n) {
                var r = 0;
                for (e = n ? R(e / C) : e >> 1, e += R(e / t); e > O * k >> 1; r += x) e = R(e / O);
                return R(r + (O + 1) * e / (e + E))
            }

            function p(e) {
                var t, n, r, o, i, u, s, c, d, p, m = [],
                    g = e.length,
                    v = 0,
                    y = M,
                    _ = T;
                for (n = e.lastIndexOf(S), n < 0 && (n = 0), r = 0; r < n; ++r) e.charCodeAt(r) >= 128 && a("not-basic"), m.push(e.charCodeAt(r));
                for (o = n > 0 ? n + 1 : 0; o < g;) {
                    for (i = v, u = 1, s = x; o >= g && a("invalid-input"), c = f(e.charCodeAt(o++)), (c >= x || c > R((b - v) / u)) && a("overflow"), v += c * u, d = s <= _ ? w : s >= _ + k ? k : s - _, !(c < d); s += x) p = x - d, u > R(b / p) && a("overflow"), u *= p;
                    t = m.length + 1, _ = h(v - i, t, 0 == i), R(v / t) > b - y && a("overflow"), y += R(v / t), v %= t, m.splice(v++, 0, y)
                }
                return l(m)
            }

            function m(e) {
                var t, n, r, o, i, u, s, l, f, p, m, g, v, y, _, E = [];
                for (e = c(e), g = e.length, t = M, n = 0, i = T, u = 0; u < g; ++u)(m = e[u]) < 128 && E.push(D(m));
                for (r = o = E.length, o && E.push(S); r < g;) {
                    for (s = b, u = 0; u < g; ++u)(m = e[u]) >= t && m < s && (s = m);
                    for (v = r + 1, s - t > R((b - n) / v) && a("overflow"), n += (s - t) * v, t = s, u = 0; u < g; ++u)
                        if (m = e[u], m < t && ++n > b && a("overflow"), m == t) {
                            for (l = n, f = x; p = f <= i ? w : f >= i + k ? k : f - i, !(l < p); f += x) _ = l - p, y = x - p, E.push(D(d(p + _ % y, 0))), l = R(_ / y);
                            E.push(D(d(l, 0))), i = h(n, v, r == o), n = 0, ++r
                        }++n, ++t
                }
                return E.join("")
            }

            function g(e) {
                return s(e, function(e) {
                    return N.test(e) ? p(e.slice(4).toLowerCase()) : e
                })
            }

            function v(e) {
                return s(e, function(e) {
                    return P.test(e) ? "xn--" + m(e) : e
                })
            }
            var y = ("object" == typeof t && t && t.nodeType, "object" == typeof e && e && e.nodeType, "object" == typeof r && r);
            var _, b = 2147483647,
                x = 36,
                w = 1,
                k = 26,
                E = 38,
                C = 700,
                T = 72,
                M = 128,
                S = "-",
                N = /^xn--/,
                P = /[^\x20-\x7E]/,
                A = /[\x2E\u3002\uFF0E\uFF61]/g,
                I = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                O = x - w,
                R = Math.floor,
                D = String.fromCharCode;
            _ = {
                version: "1.4.1",
                ucs2: {
                    decode: c,
                    encode: l
                },
                decode: p,
                encode: m,
                toASCII: v,
                toUnicode: g
            }, void 0 !== (o = function() {
                return _
            }.call(t, n, t, e)) && (e.exports = o)
        }()
    }).call(t, n(100)(e), n(180))
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    e.exports = {
        isString: function(e) {
            return "string" == typeof e
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e
        },
        isNull: function(e) {
            return null === e
        },
        isNullOrUndefined: function(e) {
            return null == e
        }
    }
}, function(e, t, n) {
    "use strict";
    t.decode = t.parse = n(183), t.encode = t.stringify = n(184)
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    e.exports = function(e, t, n, i) {
        t = t || "&", n = n || "=";
        var a = {};
        if ("string" != typeof e || 0 === e.length) return a;
        var u = /\+/g;
        e = e.split(t);
        var s = 1e3;
        i && "number" == typeof i.maxKeys && (s = i.maxKeys);
        var c = e.length;
        s > 0 && c > s && (c = s);
        for (var l = 0; l < c; ++l) {
            var f, d, h, p, m = e[l].replace(u, "%20"),
                g = m.indexOf(n);
            g >= 0 ? (f = m.substr(0, g), d = m.substr(g + 1)) : (f = m, d = ""), h = decodeURIComponent(f), p = decodeURIComponent(d), r(a, h) ? o(a[h]) ? a[h].push(p) : a[h] = [a[h], p] : a[h] = p
        }
        return a
    };
    var o = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (e.map) return e.map(t);
        for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
        return n
    }
    var o = function(e) {
        switch (typeof e) {
            case "string":
                return e;
            case "boolean":
                return e ? "true" : "false";
            case "number":
                return isFinite(e) ? e : "";
            default:
                return ""
        }
    };
    e.exports = function(e, t, n, u) {
        return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? r(a(e), function(a) {
            var u = encodeURIComponent(o(a)) + n;
            return i(e[a]) ? r(e[a], function(e) {
                return u + encodeURIComponent(o(e))
            }).join(t) : u + encodeURIComponent(o(e[a]))
        }).join(t) : u ? encodeURIComponent(o(u)) + n + encodeURIComponent(o(e)) : ""
    };
    var i = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        },
        a = Object.keys || function(e) {
            var t = [];
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
            return t
        }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(30),
        i = r(o),
        a = n(63),
        u = r(a),
        s = n(0),
        c = r(s),
        l = n(1),
        f = r(l),
        d = function() {
            function e() {
                (0, c.default)(this, e), this._queue = []
            }
            return (0, f.default)(e, [{
                key: "enqueue",
                value: function(e) {
                    this._queue.push(e)
                }
            }, {
                key: "dequeue",
                value: function() {
                    return this._queue.shift()
                }
            }, {
                key: "size",
                get: function() {
                    return this._queue.length
                }
            }]), e
        }(),
        h = function() {
            function e(t) {
                if ((0, c.default)(this, e), t = (0, u.default)({
                        concurrency: 1 / 0,
                        queueClass: d
                    }, t), t.concurrency < 1) throw new TypeError("Expected `concurrency` to be a number from 1 and up");
                this.queue = new t.queueClass, this._pendingCount = 0, this._concurrency = t.concurrency, this._resolveEmpty = function() {}
            }
            return (0, f.default)(e, [{
                key: "_next",
                value: function() {
                    this._pendingCount--, this.queue.size > 0 ? this.queue.dequeue()() : this._resolveEmpty()
                }
            }, {
                key: "add",
                value: function(e, t) {
                    var n = this;
                    return new i.default(function(r, o) {
                        var i = function() {
                            n._pendingCount++, e().then(function(e) {
                                r(e), n._next()
                            }, function(e) {
                                o(e), n._next()
                            })
                        };
                        n._pendingCount < n._concurrency ? i() : n.queue.enqueue(i, t)
                    })
                }
            }, {
                key: "onEmpty",
                value: function() {
                    var e = this;
                    return new i.default(function(t) {
                        var n = e._resolveEmpty;
                        e._resolveEmpty = function() {
                            n(), t()
                        }
                    })
                }
            }, {
                key: "size",
                get: function() {
                    return this.queue.size
                }
            }, {
                key: "pending",
                get: function() {
                    return this._pendingCount
                }
            }]), e
        }();
    t.default = h
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e) {
        return {
            query: e.query,
            pathname: e.pathname,
            asPath: e.asPath,
            back: function() {
                (0, k.warn)("Warning: 'url.back()' is deprecated. Use \"window.history.back()\""), e.back()
            },
            push: function(t, n) {
                return (0, k.warn)("Warning: 'url.push()' is deprecated. Use \"next/router\" APIs."), e.push(t, n)
            },
            pushTo: function(t, n) {
                (0, k.warn)("Warning: 'url.pushTo()' is deprecated. Use \"next/router\" APIs.");
                var r = n ? t : null,
                    o = n || t;
                return e.push(r, o)
            },
            replace: function(t, n) {
                return (0, k.warn)("Warning: 'url.replace()' is deprecated. Use \"next/router\" APIs."), e.replace(t, n)
            },
            replaceTo: function(t, n) {
                (0, k.warn)("Warning: 'url.replaceTo()' is deprecated. Use \"next/router\" APIs.");
                var r = n ? t : null,
                    o = n || t;
                return e.replace(r, o)
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(43),
        a = r(i),
        u = n(6),
        s = r(u),
        c = n(0),
        l = r(c),
        f = n(1),
        d = r(f),
        h = n(7),
        p = r(h),
        m = n(8),
        g = r(m),
        v = n(2),
        y = r(v),
        _ = n(32),
        b = r(_),
        x = n(101),
        w = r(x),
        k = n(33),
        E = n(62),
        C = function(e) {
            function t() {
                var e, n, r, o;
                (0, l.default)(this, t);
                for (var i = arguments.length, a = Array(i), u = 0; u < i; u++) a[u] = arguments[u];
                return n = r = (0, p.default)(this, (e = t.__proto__ || (0, s.default)(t)).call.apply(e, [this].concat(a))), r.state = {
                    hasError: null
                }, o = n, (0, p.default)(r, o)
            }
            return (0, g.default)(t, e), (0, d.default)(t, [{
                key: "getChildContext",
                value: function() {
                    return {
                        headManager: this.props.headManager,
                        router: (0, E.makePublicRouterInstance)(this.props.router)
                    }
                }
            }, {
                key: "componentDidCatch",
                value: function(e, t) {
                    e.stack = e.stack + "\n\n" + t.componentStack, window.next.renderError(e), this.setState({
                        hasError: !0
                    })
                }
            }, {
                key: "render",
                value: function() {
                    if (this.state.hasError) return null;
                    var e = this.props,
                        t = e.Component,
                        n = e.props,
                        r = e.hash,
                        i = e.router,
                        a = o(i);
                    if ("function" != typeof t) throw new Error('The default export is not a React Component in page: "' + a.pathname + '"');
                    var u = {
                        Component: t,
                        props: n,
                        hash: r,
                        router: i,
                        url: a
                    };
                    return y.default.createElement("div", null, y.default.createElement(T, u))
                }
            }]), t
        }(v.Component);
    C.childContextTypes = {
        headManager: b.default.object,
        router: b.default.object
    }, t.default = C;
    var T = function(e) {
        function t() {
            return (0, l.default)(this, t), (0, p.default)(this, (t.__proto__ || (0, s.default)(t)).apply(this, arguments))
        }
        return (0, g.default)(t, e), (0, d.default)(t, [{
            key: "componentDidMount",
            value: function() {
                this.scrollToHash()
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.scrollToHash()
            }
        }, {
            key: "scrollToHash",
            value: function() {
                var e = this.props.hash;
                if (e) {
                    var t = document.getElementById(e);
                    t && setTimeout(function() {
                        return t.scrollIntoView()
                    }, 0)
                }
            }
        }, {
            key: "shouldComponentUpdate",
            value: function(e) {
                return !(0, w.default)(this.props, e)
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props,
                    t = e.Component,
                    n = e.props,
                    r = e.url;
                return y.default.createElement(t, (0, a.default)({}, n, {
                    url: r
                }))
            }
        }]), t
    }(v.Component)
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(2),
        i = r(o),
        a = n(188),
        u = r(a),
        s = n(102),
        c = r(s);
    t.default = function(e) {
        var t = e.error,
            n = e.error,
            r = n.name,
            o = n.message,
            a = n.module;
        return i.default.createElement("div", {
            style: f.errorDebug
        }, i.default.createElement(c.default, null, i.default.createElement("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0"
        })), a ? i.default.createElement("h1", {
            style: f.heading
        }, "Error in ", a.rawRequest) : null, "ModuleBuildError" === r ? i.default.createElement("pre", {
            style: f.stack,
            dangerouslySetInnerHTML: {
                __html: (0, u.default)(d(o))
            }
        }) : i.default.createElement(l, {
            error: t
        }))
    };
    var l = function(e) {
            var t = e.error,
                n = t.name,
                r = t.message,
                o = t.stack;
            return i.default.createElement("div", null, i.default.createElement("div", {
                style: f.heading
            }, r || n), i.default.createElement("pre", {
                style: f.stack
            }, o))
        },
        f = {
            errorDebug: {
                background: "#0e0d0d",
                boxSizing: "border-box",
                overflow: "auto",
                padding: "24px",
                position: "fixed",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                zIndex: 9999
            },
            stack: {
                fontFamily: '"SF Mono", "Roboto Mono", "Fira Mono", consolas, menlo-regular, monospace',
                fontSize: "13px",
                lineHeight: "18px",
                color: "#b3adac",
                margin: 0,
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
                marginTop: "16px"
            },
            heading: {
                fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "28px",
                color: "#fff",
                marginBottom: "0px",
                marginTop: "0px"
            }
        },
        d = function(e) {
            return e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
        };
    u.default.setColors({
        reset: ["6F6767", "0e0d0d"],
        darkgrey: "6F6767",
        yellow: "6F6767",
        green: "ebe7e5",
        magenta: "ebe7e5",
        blue: "ebe7e5",
        cyan: "ebe7e5",
        red: "ff001f"
    })
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (!i.test(e)) return e;
        var t = [],
            n = e.replace(/\033\[(\d+)*m/g, function(e, n) {
                var r = s[n];
                if (r) return ~t.indexOf(n) ? (t.pop(), "</span>") : (t.push(n), "<" === r[0] ? r : '<span style="' + r + ';">');
                var o = c[n];
                return o ? (t.pop(), o) : ""
            }),
            r = t.length;
        return r > 0 && (n += Array(r + 1).join("</span>")), n
    }

    function o(e) {
        s[0] = "font-weight:normal;opacity:1;color:#" + e.reset[0] + ";background:#" + e.reset[1], s[7] = "color:#" + e.reset[1] + ";background:#" + e.reset[0], s[90] = "color:#" + e.darkgrey;
        for (var t in u) {
            var n = u[t],
                r = e[n] || "000";
            s[t] = "color:#" + r, t = parseInt(t), s[(t + 10).toString()] = "background:#" + r
        }
    }
    e.exports = r;
    var i = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/,
        a = {
            reset: ["fff", "000"],
            black: "000",
            red: "ff0000",
            green: "209805",
            yellow: "e8bf03",
            blue: "0000ff",
            magenta: "ff00ff",
            cyan: "00ffee",
            lightgrey: "f0f0f0",
            darkgrey: "888"
        },
        u = {
            30: "black",
            31: "red",
            32: "green",
            33: "yellow",
            34: "blue",
            35: "magenta",
            36: "cyan",
            37: "lightgrey"
        },
        s = {
            1: "font-weight:bold",
            2: "opacity:0.5",
            3: "<i>",
            4: "<u>",
            8: "display:none",
            9: "<del>"
        },
        c = {
            23: "</i>",
            24: "</u>",
            29: "</del>"
        };
    [0, 21, 22, 27, 28, 39, 49].forEach(function(e) {
        c[e] = "</span>"
    }), r.setColors = function(e) {
        if ("object" != typeof e) throw new Error("`colors` parameter must be an Object.");
        var t = {};
        for (var n in a) {
            var r = e.hasOwnProperty(n) ? e[n] : null;
            if (r) {
                if ("reset" === n) {
                    if ("string" == typeof r && (r = [r]), !Array.isArray(r) || 0 === r.length || r.some(function(e) {
                            return "string" != typeof e
                        })) throw new Error("The value of `" + n + "` property must be an Array and each item could only be a hex string, e.g.: FF0000");
                    var i = a[n];
                    r[0] || (r[0] = i[0]), 1 !== r.length && r[1] || (r = [r[0]], r.push(i[1])), r = r.slice(0, 2)
                } else if ("string" != typeof r) throw new Error("The value of `" + n + "` property must be a hex string, e.g.: FF0000");
                t[n] = r
            } else t[n] = a[n]
        }
        o(t)
    }, r.reset = function() {
        o(a)
    }, r.tags = {}, Object.defineProperty ? (Object.defineProperty(r.tags, "open", {
        get: function() {
            return s
        }
    }), Object.defineProperty(r.tags, "close", {
        get: function() {
            return c
        }
    })) : (r.tags.open = s, r.tags.close = c), r.reset()
}, function(e, t, n) {
    n(18), n(190), e.exports = n(3).Array.from
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        o = n(4),
        i = n(24),
        a = n(79),
        u = n(80),
        s = n(37),
        c = n(191),
        l = n(56);
    o(o.S + o.F * !n(86)(function(e) {
        Array.from(e)
    }), "Array", {
        from: function(e) {
            var t, n, o, f, d = i(e),
                h = "function" == typeof this ? this : Array,
                p = arguments.length,
                m = p > 1 ? arguments[1] : void 0,
                g = void 0 !== m,
                v = 0,
                y = l(d);
            if (g && (m = r(m, p > 2 ? arguments[2] : void 0, 2)), void 0 == y || h == Array && u(y))
                for (t = s(d.length), n = new h(t); t > v; v++) c(n, v, g ? m(d[v], v) : d[v]);
            else
                for (f = y.call(d), n = new h; !(o = f.next()).done; v++) c(n, v, g ? a(f, m, [o.value, v], !0) : o.value);
            return n.length = v, n
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = n(10),
        o = n(27);
    e.exports = function(e, t, n) {
        t in e ? r.f(e, t, o(0, n)) : e[t] = n
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t, n) {
        if ("function" != typeof e) throw new Error("Expected reduceComponentsToState to be a function.");
        if ("function" != typeof t) throw new Error("Expected handleStateChangeOnClient to be a function.");
        if (void 0 !== n && "function" != typeof n) throw new Error("Expected mapStateOnServer to either be undefined or a function.");
        return function(r) {
            function o(r) {
                u = e([].concat((0, g.default)(i))), c.canUseDOM ? t.call(r, u) : n && (u = n(u))
            }
            if ("function" != typeof r) throw new Error("Expected WrappedComponent to be a React component.");
            var i = new y.default,
                u = void 0,
                c = function(e) {
                    function t() {
                        return (0, s.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, a.default)(t)).apply(this, arguments))
                    }
                    return (0, p.default)(t, e), (0, l.default)(t, [{
                        key: "componentWillMount",
                        value: function() {
                            i.add(this), o(this)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            o(this)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            i.delete(this), o(this)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return b.default.createElement(r, null, this.props.children)
                        }
                    }], [{
                        key: "peek",
                        value: function() {
                            return u
                        }
                    }, {
                        key: "rewind",
                        value: function() {
                            if (t.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
                            var e = u;
                            return u = void 0, i.clear(), e
                        }
                    }]), t
                }(_.Component);
            return c.displayName = "SideEffect(" + (0, x.getDisplayName)(r) + ")", c.contextTypes = r.contextTypes, c.canUseDOM = "undefined" != typeof window, c
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(6),
        a = r(i),
        u = n(0),
        s = r(u),
        c = n(1),
        l = r(c),
        f = n(7),
        d = r(f),
        h = n(8),
        p = r(h),
        m = n(103),
        g = r(m),
        v = n(34),
        y = r(v);
    t.default = o;
    var _ = n(2),
        b = r(_),
        x = n(33)
}, function(e, t, n) {
    "use strict";
    (function(e) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(30),
            i = r(o),
            a = n(0),
            u = r(a),
            s = n(1),
            c = r(s),
            l = n(70),
            f = r(l),
            d = e,
            h = function() {
                function e(t, n) {
                    (0, u.default)(this, e), this.buildId = t, this.assetPrefix = n, this.pageCache = {}, this.pageLoadedHandlers = {}, this.pageRegisterEvents = new f.default, this.loadingRoutes = {}, this.chunkRegisterEvents = new f.default, this.loadedChunks = {}
                }
                return (0, c.default)(e, [{
                    key: "normalizeRoute",
                    value: function(e) {
                        if ("/" !== e[0]) throw new Error('Route name should start with a "/", got "' + e + '"');
                        return e = e.replace(/\/index$/, "/"), "/" === e ? e : e.replace(/\/$/, "")
                    }
                }, {
                    key: "loadPage",
                    value: function(e) {
                        var t = this;
                        return e = this.normalizeRoute(e), new i.default(function(n, r) {
                            var o = function o(i) {
                                    var a = i.error,
                                        u = i.page;
                                    t.pageRegisterEvents.off(e, o), delete t.loadingRoutes[e], a ? r(a) : n(u)
                                },
                                i = t.pageCache[e];
                            if (i) {
                                var a = i.error,
                                    u = i.page;
                                return void(a ? r(a) : n(u))
                            }
                            t.pageRegisterEvents.on(e, o), document.getElementById("__NEXT_PAGE__" + e) || t.loadingRoutes[e] || (t.loadScript(e), t.loadingRoutes[e] = !0)
                        })
                    }
                }, {
                    key: "loadScript",
                    value: function(e) {
                        var t = this;
                        e = this.normalizeRoute(e), __NEXT_DATA__.nextExport && (e = "/" === e ? "/index.js" : e + "/index.js");
                        var n = document.createElement("script"),
                            r = this.assetPrefix + "/_next/" + encodeURIComponent(this.buildId) + "/page" + e;
                        n.src = r, n.type = "text/javascript", n.onerror = function() {
                            var n = new Error("Error when loading route: " + e);
                            t.pageRegisterEvents.emit(e, {
                                error: n
                            })
                        }, document.body.appendChild(n)
                    }
                }, {
                    key: "registerPage",
                    value: function(e, t) {
                        var n = this,
                            r = function() {
                                try {
                                    var r = t(),
                                        o = r.error,
                                        i = r.page;
                                    n.pageCache[e] = {
                                        error: o,
                                        page: i
                                    }, n.pageRegisterEvents.emit(e, {
                                        error: o,
                                        page: i
                                    })
                                } catch (o) {
                                    n.pageCache[e] = {
                                        error: o
                                    }, n.pageRegisterEvents.emit(e, {
                                        error: o
                                    })
                                }
                            };
                        if (d && d.hot && "idle" !== d.hot.status()) {
                            console.log('Waiting for webpack to become "idle" to initialize the page: "' + e + '"');
                            var o = function e(t) {
                                "idle" === t && (d.hot.removeStatusHandler(e), r())
                            };
                            d.hot.status(o)
                        } else r()
                    }
                }, {
                    key: "registerChunk",
                    value: function(e, t) {
                        var n = t();
                        this.loadedChunks[e] = !0, this.chunkRegisterEvents.emit(e, n)
                    }
                }, {
                    key: "waitForChunk",
                    value: function(e, t) {
                        var n = this;
                        return this.loadedChunks[e] ? i.default.resolve(!0) : new i.default(function(t) {
                            var r = function r(o) {
                                n.chunkRegisterEvents.off(e, r), t(o)
                            };
                            n.chunkRegisterEvents.on(e, r)
                        })
                    }
                }, {
                    key: "clearCache",
                    value: function(e) {
                        e = this.normalizeRoute(e), delete this.pageCache[e], delete this.loadingRoutes[e];
                        var t = document.getElementById("__NEXT_PAGE__" + e);
                        t && t.parentNode.removeChild(t)
                    }
                }]), e
            }();
        t.default = h
    }).call(t, n(100)(e))
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(2),
        i = r(o),
        a = n(195),
        u = r(a);
    t.default = function() {
        return i.default.createElement("div", null, i.default.createElement(u.default, null))
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(6),
        i = r(o),
        a = n(0),
        u = r(a),
        s = n(1),
        c = r(s),
        l = n(7),
        f = r(l),
        d = n(8),
        h = r(d),
        p = n(19),
        m = r(p),
        g = n(206),
        v = r(g),
        y = n(207),
        _ = r(y),
        b = n(208),
        x = r(b),
        w = n(209),
        k = r(w),
        E = n(210),
        C = r(E),
        T = n(211),
        M = r(T),
        S = n(20),
        N = n(212),
        P = r(N),
        A = n(2),
        I = r(A),
        O = n(213),
        R = r(O),
        D = function(e) {
            if (!e) return null;
            var t = j(),
                n = e.split("#")[1].split(",");
            return n ? (S.trackIds.forEach(function(e, r) {
                t.milestoneByTrack[e] = L(Number(n[r]))
            }), n[16] && (t.name = decodeURI(n[16])), n[17] && (t.title = decodeURI(n[17])), t) : null
        },
        L = function(e) {
            switch (e) {
                case 0:
                    return 0;
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 3:
                    return 3;
                case 4:
                    return 4;
                case 5:
                    return 5;
                default:
                    return 0
            }
        },
        F = function() {
            return {
                name: "",
                title: "",
                milestoneByTrack: {
                    MOBILE: 0,
                    WEB_CLIENT: 0,
                    FOUNDATIONS: 0,
                    SERVERS: 0,
                    PROJECT_MANAGEMENT: 0,
                    COMMUNICATION: 0,
                    CRAFT: 0,
                    INITIATIVE: 0,
                    CAREER_DEVELOPMENT: 0,
                    ORG_DESIGN: 0,
                    WELLBEING: 0,
                    ACCOMPLISHMENT: 0,
                    MENTORSHIP: 0,
                    EVANGELISM: 0,
                    RECRUITING: 0,
                    COMMUNITY: 0
                },
                focusedTrackId: "MOBILE"
            }
        },
        j = function() {
            return {
                name: "Cersei Lannister",
                title: "Staff Engineer",
                milestoneByTrack: {
                    MOBILE: 1,
                    WEB_CLIENT: 2,
                    FOUNDATIONS: 3,
                    SERVERS: 2,
                    PROJECT_MANAGEMENT: 4,
                    COMMUNICATION: 1,
                    CRAFT: 1,
                    INITIATIVE: 4,
                    CAREER_DEVELOPMENT: 3,
                    ORG_DESIGN: 2,
                    WELLBEING: 0,
                    ACCOMPLISHMENT: 4,
                    MENTORSHIP: 2,
                    EVANGELISM: 2,
                    RECRUITING: 3,
                    COMMUNITY: 0
                },
                focusedTrackId: "MOBILE"
            }
        },
        U = function(e) {
            return e && e.milestoneByTrack ? S.trackIds.map(function(t) {
                return e.milestoneByTrack[t]
            }).concat(encodeURI(e.name), encodeURI(e.title)).join(",") : null
        },
        z = function(e) {
            function t(e) {
                (0, u.default)(this, t);
                var n = (0, f.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e));
                return n.state = F(), n
            }
            return (0, h.default)(t, e), (0, c.default)(t, [{
                key: "componentDidUpdate",
                value: function() {
                    var e = U(this.state);
                    e && window.location.replace("#" + e)
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e = D(window.location.hash);
                    e ? this.setState(e) : this.setState(j())
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return I.default.createElement("main", {
                        className: "jsx-2126963245",
                    }, I.default.createElement(m.default, {
                        styleId: "2126963245",
                        css: ["body{font-family:Helvetica;}", "main{width:960px;margin:0 auto;}", ".name-input{border:none;display:block;border-bottom:2px solid #fff;font-size:30px;line-height:40px;font-weight:bold;width:380px;margin-bottom:10px;}", ".name-input:hover,.name-input:focus{border-bottom:2px solid #ccc;outline:0;}", "a{color:#888;text-decoration:none;}"]
                    }), I.default.createElement("div", {
                        style: {
                            margin: "19px auto 0",
                            width: 142
                        },
                        className: "jsx-2126963245"
                    })
                    , I.default.createElement("div", {
                        style: {
                            display: "flex",
                            display: "block",
                            margin: "auto",
                        },
                        className: "jsx-2126963245"
                    }, I.default.createElement("div", {
                        style: {
                            flex: 0,
                        },
                        className: "jsx-2126963245"
                    }, I.default.createElement("a", {
                        href: "index.html",
                        target: "_blank",
                        className: "jsx-2126963245"
                    }, I.default.createElement("img", {
                        src: "title.png",
                        width: 461,
                        height: 100,
                    })), I.default.createElement(_.default, {
                        milestoneByTrack: this.state.milestoneByTrack,
                        focusedTrackId: this.state.focusedTrackId,
                        handleTrackMilestoneChangeFn: function(t, n) {
                            return e.handleTrackMilestoneChange(t, n)
                        }
                    }))), I.default.createElement(x.default, {
                        selectNextTrackFn: this.shiftFocusedTrack.bind(this, 1),
                        selectPrevTrackFn: this.shiftFocusedTrack.bind(this, -1),
                        increaseFocusedMilestoneFn: this.shiftFocusedTrackMilestoneByDelta.bind(this, 1),
                        decreaseFocusedMilestoneFn: this.shiftFocusedTrackMilestoneByDelta.bind(this, -1)
                    }))
                }
            }, {
                key: "handleTrackMilestoneChange",
                value: function(e, t) {
                    var n = this.state.milestoneByTrack;
                    n[e] = t;
                    var r = (0, S.eligibleTitles)(n),
                        o = -1 === r.indexOf(this.state.title) ? r[0] : this.state.title;
                    this.setState({
                        milestoneByTrack: n,
                        focusedTrackId: e,
                        title: o
                    })
                }
            }, {
                key: "shiftFocusedTrack",
                value: function(e) {
                    var t = S.trackIds.indexOf(this.state.focusedTrackId);
                    t = (t + e + S.trackIds.length) % S.trackIds.length;
                    var n = S.trackIds[t];
                    this.setState({
                        focusedTrackId: n
                    })
                }
            }, {
                key: "setFocusedTrackId",
                value: function(e) {
                    var t = S.trackIds.indexOf(e),
                        n = S.trackIds[t];
                    this.setState({
                        focusedTrackId: n
                    })
                }
            }, {
                key: "shiftFocusedTrackMilestoneByDelta",
                value: function(e) {
                    var t = this.state.milestoneByTrack[this.state.focusedTrackId],
                        n = t + e;
                    n < 0 && (n = 0), n > 5 && (n = 5), this.handleTrackMilestoneChange(this.state.focusedTrackId, n)
                }
            }, {
                key: "setTitle",
                value: function(e) {
                    var t = (0, S.eligibleTitles)(this.state.milestoneByTrack);
                    e = -1 == t.indexOf(e) ? t[0] : e, this.setState({
                        title: e
                    })
                }
            }]), t
        }(I.default.Component);
    t.default = z
}, function(e, t, n) {
    n(40), n(18), n(21), n(197), n(198), n(199), n(200), e.exports = n(3).Map
}, function(e, t, n) {
    "use strict";
    var r = n(95),
        o = n(69);
    e.exports = n(96)("Map", function(e) {
        return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        get: function(e) {
            var t = r.getEntry(o(this, "Map"), e);
            return t && t.v
        },
        set: function(e, t) {
            return r.def(o(this, "Map"), 0 === e ? 0 : e, t)
        }
    }, r, !0)
}, function(e, t, n) {
    var r = n(4);
    r(r.P + r.R, "Map", {
        toJSON: n(97)("Map")
    })
}, function(e, t, n) {
    n(98)("Map")
}, function(e, t, n) {
    n(99)("Map")
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!e) throw new Error("StyleSheetRegistry: " + t + ".")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(71),
        a = r(i),
        u = n(0),
        s = r(u),
        c = n(1),
        l = r(c),
        f = n(204),
        d = r(f),
        h = n(205),
        p = r(h),
        m = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.styleSheet,
                    r = void 0 === n ? null : n,
                    o = t.optimizeForSpeed,
                    i = void 0 !== o && o,
                    a = t.isBrowser,
                    u = void 0 === a ? "undefined" != typeof window : a;
                (0, s.default)(this, e), this._sheet = r || new p.default({
                    name: "styled-jsx",
                    optimizeForSpeed: i
                }), this._sheet.inject(), this._isBrowser = u, this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}, this.computeId = this.createComputeId(), this.computeSelector = this.createComputeSelector()
            }
            return (0, l.default)(e, [{
                key: "add",
                value: function(e) {
                    var t = this;
                    void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.css), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._isBrowser && !this._fromServer && (this._fromServer = this.selectFromServer(), this._instancesCounts = (0, a.default)(this._fromServer).reduce(function(e, t) {
                        return e[t] = 0, e
                    }, {}));
                    var n = this.getIdAndRules(e),
                        r = n.styleId,
                        o = n.rules;
                    if (r in this._instancesCounts) return void(this._instancesCounts[r] += 1);
                    this._instancesCounts[r] = 1, this._indices[r] = o.map(function(e) {
                        return t._sheet.insertRule(e)
                    })
                }
            }, {
                key: "remove",
                value: function(e) {
                    var t = this,
                        n = this.getIdAndRules(e),
                        r = n.styleId;
                    if (o(r in this._instancesCounts, "styleId: `" + r + "` not found"), this._instancesCounts[r] -= 1, this._instancesCounts[r] < 1) {
                        var i = this._fromServer && this._fromServer[r];
                        i ? (i.parentNode.removeChild(i), delete this._fromServer[r]) : (this._indices[r].forEach(function(e) {
                            return t._sheet.deleteRule(e)
                        }), delete this._indices[r]), delete this._instancesCounts[r]
                    }
                }
            }, {
                key: "update",
                value: function(e, t) {
                    this.add(t), this.remove(e)
                }
            }, {
                key: "flush",
                value: function() {
                    this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}, this.computeId = this.createComputeId(), this.computeSelector = this.createComputeSelector()
                }
            }, {
                key: "cssRules",
                value: function() {
                    var e = this,
                        t = this._fromServer ? (0, a.default)(this._fromServer).map(function(t) {
                            return [t, e._fromServer[t]]
                        }) : [],
                        n = this._sheet.cssRules();
                    return t.concat((0, a.default)(this._indices).map(function(t) {
                        return [t, e._indices[t].map(function(e) {
                            return n[e].cssText
                        }).join("\n")]
                    }))
                }
            }, {
                key: "createComputeId",
                value: function() {
                    var e = {};
                    return function(t, n) {
                        if (!n) return "jsx-" + t;
                        var r = String(n),
                            o = t + r;
                        return e[o] || (e[o] = "jsx-" + (0, d.default)(t + "-" + r)), e[o]
                    }
                }
            }, {
                key: "createComputeSelector",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : /__jsx-style-dynamic-selector/g,
                        t = {};
                    return function(n, r) {
                        var o = n + r;
                        return t[o] || (t[o] = r.replace(e, n)), t[o]
                    }
                }
            }, {
                key: "getIdAndRules",
                value: function(e) {
                    var t = this;
                    if (e.dynamic) {
                        var n = this.computeId(e.styleId, e.dynamic);
                        return {
                            styleId: n,
                            rules: Array.isArray(e.css) ? e.css.map(function(e) {
                                return t.computeSelector(n, e)
                            }) : [this.computeSelector(n, e.css)]
                        }
                    }
                    return {
                        styleId: this.computeId(e.styleId),
                        rules: Array.isArray(e.css) ? e.css : [e.css]
                    }
                }
            }, {
                key: "selectFromServer",
                value: function() {
                    return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e, t) {
                        return e[t.id.slice(2)] = t, e
                    }, {})
                }
            }]), e
        }();
    t.default = m
}, function(e, t, n) {
    n(203), e.exports = n(3).Object.keys
}, function(e, t, n) {
    var r = n(24),
        o = n(28);
    n(90)("keys", function() {
        return function(e) {
            return o(r(e))
        }
    })
}, function(e, t) {
    e.exports = function(e) {
        for (var t = 5381, n = e.length; n;) t = 33 * t ^ e.charCodeAt(--n);
        return t >>> 0
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            if (!e) throw new Error("StyleSheet: " + t + ".")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0),
            a = r(i),
            u = n(1),
            s = r(u),
            c = e.env && !0,
            l = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.name,
                        r = void 0 === n ? "stylesheet" : n,
                        i = t.optimizeForSpeed,
                        u = void 0 === i ? c : i,
                        s = t.isBrowser,
                        l = void 0 === s ? "undefined" != typeof window : s;
                    (0, a.default)(this, e), o("string" == typeof r, "`name` must be a string"), this._name = r, this._deletedRulePlaceholder = "#" + r + "-deleted-rule____{}", o("boolean" == typeof u, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = u, this._isBrowser = l, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0
                }
                return (0, s.default)(e, [{
                    key: "setOptimizeForSpeed",
                    value: function(e) {
                        o("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"), o(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                    }
                }, {
                    key: "isOptimizeForSpeed",
                    value: function() {
                        return this._optimizeForSpeed
                    }
                }, {
                    key: "inject",
                    value: function() {
                        var e = this;
                        if (o(!this._injected, "sheet already injected"), this._injected = !0, this._isBrowser && this._optimizeForSpeed) return this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), void(this._optimizeForSpeed || (c || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0));
                        this._serverSheet = {
                            cssRules: [],
                            insertRule: function(t, n) {
                                return "number" == typeof n ? e._serverSheet.cssRules[n] = {
                                    cssText: t
                                } : e._serverSheet.cssRules.push({
                                    cssText: t
                                }), n
                            },
                            deleteRule: function(t) {
                                e._serverSheet.cssRules[t] = null
                            }
                        }
                    }
                }, {
                    key: "getSheetForTag",
                    value: function(e) {
                        if (e.sheet) return e.sheet;
                        for (var t = 0; t < document.styleSheets.length; t++)
                            if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                    }
                }, {
                    key: "getSheet",
                    value: function() {
                        return this.getSheetForTag(this._tags[this._tags.length - 1])
                    }
                }, {
                    key: "insertRule",
                    value: function(e, t) {
                        if (o("string" == typeof e, "`insertRule` accepts only strings"), !this._isBrowser) return "number" != typeof t && (t = this._serverSheet.cssRules.length), this._serverSheet.insertRule(e, t), this._rulesCount++;
                        if (this._optimizeForSpeed) {
                            var n = this.getSheet();
                            "number" != typeof t && (t = n.cssRules.length);
                            try {
                                n.insertRule(e, t)
                            } catch (t) {
                                c || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info")
                            }
                        } else {
                            var r = this._tags[t];
                            this._tags.push(this.makeStyleTag(this._name, e, r))
                        }
                        return this._rulesCount++
                    }
                }, {
                    key: "replaceRule",
                    value: function(e, t) {
                        if (this._optimizeForSpeed || !this._isBrowser) {
                            var n = this._isBrowser ? this.getSheet() : this._serverSheet;
                            t.trim() || (t = this._deletedRulePlaceholder), n.deleteRule(e), n.insertRule(t, e)
                        } else {
                            var r = this._tags[e];
                            o(r, "old rule at index `" + e + "` not found"), r.textContent = t
                        }
                        return e
                    }
                }, {
                    key: "deleteRule",
                    value: function(e) {
                        if (!this._isBrowser) return void this._serverSheet.deleteRule(e);
                        if (this._optimizeForSpeed) this.replaceRule(e, "");
                        else {
                            var t = this._tags[e];
                            o(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                        }
                    }
                }, {
                    key: "flush",
                    value: function() {
                        this._injected = !1, this._rulesCount = 0, this._isBrowser ? (this._tags.forEach(function(e) {
                            return e && e.parentNode.removeChild(e)
                        }), this._tags = []) : this._serverSheet.cssRules = []
                    }
                }, {
                    key: "cssRules",
                    value: function() {
                        var e = this;
                        return this._isBrowser ? this._tags.reduce(function(t, n) {
                            return n ? t = t.concat(e.getSheetForTag(n).cssRules.map(function(t) {
                                return t.cssText === e._deletedRulePlaceholder ? null : t
                            })) : t.push(null), t
                        }, []) : this._serverSheet.cssRules
                    }
                }, {
                    key: "makeStyleTag",
                    value: function(e, t, n) {
                        t && o("string" == typeof t, "makeStyleTag acceps only strings as second parameter");
                        var r = document.createElement("style");
                        r.type = "text/css", r.setAttribute("data-" + e, ""), t && r.appendChild(document.createTextNode(t));
                        var i = document.head || document.getElementsByTagName("head")[0];
                        return n ? i.insertBefore(r, n) : i.appendChild(r), r
                    }
                }, {
                    key: "length",
                    get: function() {
                        return this._rulesCount
                    }
                }]), e
            }();
        t.default = l
    }).call(t, n(94))
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(6),
        i = r(o),
        a = n(0),
        u = r(a),
        s = n(1),
        c = r(s),
        l = n(7),
        f = r(l),
        d = n(8),
        h = r(d),
        p = n(19),
        m = r(p),
        g = n(2),
        v = r(g),
        y = n(20),
        _ = function(e) {
            function t() {
                return (0, u.default)(this, t), (0, f.default)(this, (t.__proto__ || (0, i.default)(t)).apply(this, arguments))
            }
            return (0, h.default)(t, e), (0, c.default)(t, [{
                key: "render",
                value: function() {
                    var e = this;
                    return v.default.createElement("table", {
                        className: "jsx-886021826"
                    }, v.default.createElement(m.default, {
                        styleId: "886021826",
                        css: ["table.jsx-886021826{width:100%;border-spacing:3px;border-bottom:2px solid #ccc;padding-bottom:20px;margin-bottom:20px;margin-left:-3px;}", ".track-selector-value.jsx-886021826{line-height:50px;width:50px;text-align:center;background:#eee;font-weight:bold;font-size:24px;border-radius:3px;cursor:pointer;}", ".track-selector-label.jsx-886021826{text-align:center;font-size:9px;}"]
                    }), v.default.createElement("tbody", {
                        className: "jsx-886021826"
                    }, v.default.createElement("tr", {
                        className: "jsx-886021826"
                    }, y.trackIds.map(function(t) {
                        return v.default.createElement("td", {
                            key: t,
                            onClick: function() {
                                return e.props.setFocusedTrackIdFn(t)
                            },
                            className: "jsx-886021826 track-selector-label"
                        }, y.tracks[t].displayName)
                    })), v.default.createElement("tr", {
                        className: "jsx-886021826"
                    }, y.trackIds.map(function(t) {
                        return v.default.createElement("td", {
                            key: t,
                            style: {
                                border: "4px solid " + (t == e.props.focusedTrackId ? "#000" : (0, y.categoryColorScale)(y.tracks[t].category)),
                                background: (0, y.categoryColorScale)(y.tracks[t].category)
                            },
                            onClick: function() {
                                return e.props.setFocusedTrackIdFn(t)
                            },
                            className: "jsx-886021826 track-selector-value"
                        }, e.props.milestoneByTrack[t])
                    }))))
                }
            }]), t
        }(v.default.Component);
    t.default = _
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(6),
        i = r(o),
        a = n(0),
        u = r(a),
        s = n(1),
        c = r(s),
        l = n(7),
        f = r(l),
        d = n(8),
        h = r(d),
        p = n(19),
        m = r(p),
        g = n(2),
        v = r(g),
        y = n(72),
        _ = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }(y),
        b = n(20),
        x = 400,
        w = b.milestones.slice(1),
        k = function(e) {
            function t(e) {
                (0, u.default)(this, t);
                var n = (0, f.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e));
                return n.colorScale = _.scaleSequential(_.interpolateWarm).domain([0, 5]), n.radiusScale = _.scaleBand().domain(w).range([.15 * x, .45 * x]).paddingInner(.1), n.arcFn = _.arc().innerRadius(function(e) {
                    return n.radiusScale(e)
                }).outerRadius(function(e) {
                    return n.radiusScale(e) + n.radiusScale.bandwidth()
                }).startAngle(-Math.PI / 8).endAngle(Math.PI / 8).padAngle(Math.PI / 200).padRadius(.45 * x).cornerRadius(2), n
            }
            return (0, h.default)(t, e), (0, c.default)(t, [{
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props.milestoneByTrack[this.props.focusedTrackId];
                    return v.default.createElement("figure", {
                        className: "jsx-3023698355"
                    }, v.default.createElement(m.default, {
                        styleId: "3023698355",
                        css: ["figure.jsx-3023698355{margin:0;}", "svg.jsx-3023698355{width:" + x + "px;height:" + x + "px;}", ".track-milestone.jsx-3023698355{-webkit-fill:#eee;fill:#eee;cursor:pointer;}", ".track-milestone-current.jsx-3023698355,.track-milestone.jsx-3023698355:hover{stroke:#000;stroke-width:4px;stroke-linejoin:round;}"]
                    }), v.default.createElement("svg", {
                        className: "jsx-3023698355",
                        style: {
                            display: "block",
                            margin: "auto",
                        }
                    }, v.default.createElement("g", {
                        transform: "translate(" + x / 2 + "," + x / 2 + ") rotate(-33.75)",
                        className: "jsx-3023698355"
                    }, b.trackIds.map(function(n, r) {
                        var o = n == e.props.focusedTrackId;
                        return v.default.createElement("g", {
                            key: n,
                            transform: "rotate(" + 360 * r / 8 + ")",
                            className: "jsx-3023698355"
                        }, w.map(function(r) {
                            var i = o && r == t,
                                a = e.props.milestoneByTrack[n] >= r || 0 == r;
                            return v.default.createElement("path", {
                                key: r,
                                onClick: function() {
                                    return e.props.handleTrackMilestoneChangeFn(n, r)
                                },
                                d: e.arcFn(r),
                                style: {
                                    fill: a ? (0, b.categoryColorScale)(b.tracks[n].category) : void 0
                                },
                                className: "jsx-3023698355 " + ("track-milestone " + (a ? "is-met " : " ") + (i ? "track-milestone-current" : "") || "")
                            })
                        }), v.default.createElement("circle", {
                            r: "8",
                            cx: "0",
                            cy: "-50",
                            style: {
                                fill: (0, b.categoryColorScale)(b.tracks[n].category)
                            },
                            onClick: function() {
                                return e.props.handleTrackMilestoneChangeFn(n, 0)
                            },
                            className: "jsx-3023698355 " + ("track-milestone " + (o && !t ? "track-milestone-current" : "") || "")
                        }))
                    }))))
                }
            }]), t
        }(v.default.Component);
    t.default = k
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(6),
        i = r(o),
        a = n(0),
        u = r(a),
        s = n(1),
        c = r(s),
        l = n(7),
        f = r(l),
        d = n(8),
        h = r(d),
        p = n(2),
        m = r(p),
        g = function(e) {
            function t() {
                return (0, u.default)(this, t), (0, f.default)(this, (t.__proto__ || (0, i.default)(t)).apply(this, arguments))
            }
            return (0, h.default)(t, e), (0, c.default)(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    window.addEventListener("keydown", function(t) {
                        return e.handleKeyDown(t)
                    })
                }
            }, {
                key: "handleKeyDown",
                value: function(e) {
                    switch (e.code) {
                        case "ArrowUp":
                            this.props.increaseFocusedMilestoneFn(), e.preventDefault();
                            break;
                        case "ArrowRight":
                            this.props.selectNextTrackFn(), e.preventDefault();
                            break;
                        case "ArrowDown":
                            this.props.decreaseFocusedMilestoneFn(), e.preventDefault();
                            break;
                        case "ArrowLeft":
                            this.props.selectPrevTrackFn(), e.preventDefault()
                    }
                }
            }, {
                key: "render",
                value: function() {
                    return null
                }
            }]), t
        }(m.default.Component);
    t.default = g
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(6),
        i = r(o),
        a = n(0),
        u = r(a),
        s = n(1),
        c = r(s),
        l = n(7),
        f = r(l),
        d = n(8),
        h = r(d),
        p = n(19),
        m = r(p),
        g = n(20),
        v = n(2),
        y = r(v),
        _ = function(e) {
            function t() {
                return (0, u.default)(this, t), (0, f.default)(this, (t.__proto__ || (0, i.default)(t)).apply(this, arguments))
            }
            return (0, h.default)(t, e), (0, c.default)(t, [{
                key: "render",
                value: function() {
                    var e = this,
                        t = g.tracks[this.props.trackId],
                        n = this.props.milestoneByTrack[this.props.trackId],
                        r = t.milestones[n - 1];
                    return y.default.createElement("div", {
                        className: "jsx-2815140849 track"
                    }, y.default.createElement(m.default, {
                        styleId: "2815140849",
                        css: ["div.track.jsx-2815140849{margin:0 0 20px 0;padding-bottom:20px;border-bottom:2px solid #ccc;}", "h2.jsx-2815140849{margin:0 0 10px 0;}", "p.track-description.jsx-2815140849{margin-top:0;padding-bottom:20px;border-bottom:2px solid #ccc;}", "table.jsx-2815140849{border-spacing:3px;}", "td.jsx-2815140849{line-height:50px;width:50px;text-align:center;background:#eee;font-weight:bold;font-size:24px;border-radius:3px;cursor:pointer;}", "ul.jsx-2815140849{line-height:1.5em;}"]
                    }), y.default.createElement("h2", {
                        className: "jsx-2815140849"
                    }, t.displayName), y.default.createElement("p", {
                        className: "jsx-2815140849 track-description"
                    }, t.description), y.default.createElement("div", {
                        style: {
                            display: "flex"
                        },
                        className: "jsx-2815140849"
                    }, y.default.createElement("table", {
                        style: {
                            flex: 0,
                            marginRight: 50
                        },
                        className: "jsx-2815140849"
                    }, y.default.createElement("tbody", {
                        className: "jsx-2815140849"
                    }, g.milestones.slice().reverse().map(function(r) {
                        var o = r <= n;
                        return y.default.createElement("tr", {
                            key: r,
                            className: "jsx-2815140849"
                        }, y.default.createElement("td", {
                            onClick: function() {
                                return e.props.handleTrackMilestoneChangeFn(e.props.trackId, r)
                            },
                            style: {
                                border: "4px solid " + (r === n ? "#000" : o ? (0, g.categoryColorScale)(t.category) : "#eee"),
                                background: o ? (0, g.categoryColorScale)(t.category) : void 0
                            },
                            className: "jsx-2815140849"
                        }, r))
                    }))), r ? y.default.createElement("div", {
                        style: {
                            flex: 1
                        },
                        className: "jsx-2815140849"
                    }, y.default.createElement("h3", {
                        className: "jsx-2815140849"
                    }, r.summary), y.default.createElement("h4", {
                        className: "jsx-2815140849"
                    }, "Example behaviors:"), y.default.createElement("ul", {
                        className: "jsx-2815140849"
                    }, r.signals.map(function(e, t) {
                        return y.default.createElement("li", {
                            key: t,
                            className: "jsx-2815140849"
                        }, e)
                    })), y.default.createElement("h4", {
                        className: "jsx-2815140849"
                    }, "Example tasks:"), y.default.createElement("ul", {
                        className: "jsx-2815140849"
                    }, r.examples.map(function(e, t) {
                        return y.default.createElement("li", {
                            key: t,
                            className: "jsx-2815140849"
                        }, e)
                    }))) : null))
                }
            }]), t
        }(y.default.Component);
    t.default = _
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(2),
        o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r);
    t.default = function() {
        return o.default.createElement("svg", {
            class: "svgIcon-use",
            width: "138",
            height: "27",
            viewBox: "0 0 138 27"
        }, o.default.createElement("path", {
            d: "M130 27V16.96c0-3.26-.154-5.472-2.437-5.472-1.16 0-2.138.57-2.863 1.512.217.906.3 1.968.3 3.127 0 2.247.036 5.11 0 7.973 0 .472-.046.58.244.87L127 27h-8V16.96c0-3.297-.461-5.472-2.708-5.472-1.16 0-1.64.653-2.292 1.595V24.1c0  .472-.026.58.3.87L116 27h-8V11.56c0-.47-.07-.579-.36-.905L106 9h8v3.612c.906-2.537 2.437-4.112 5.372-4.112 2.682 0 4.494 1.466 5.255 4.257.834-2.392 3.008-4.257 6.053-4.257 3.588 0 5.32 2.626 5.32 7.627 0 2.392.036 5.11 0 7.973 0 .472.004.652.25.87L138 27h-8zm-27-3.045c0 .472-.149.617.178.906L105 27h-8v-4c-.906 2.465-2.956 4-5.637 4C87.775 27 86 24.39 86 19.461c0-2.391-.036-5 0-7.936 0-.471-.11-.58-.4-.87L84 9h8v9.628c0 3.225.269 5.4 2.298 5.4 1.16 0 2.086-.725 2.702-1.63V11.56c0-.471-.129-.58-.419-.906L95 9h8v14.955zM78.002.25A3.248 3.248 0 0 1 81.25 3.5 3.25 3.25 0 1 1 78.002.25zM75 27V11.56c0-.47.168-.579-.122-.905L73 9h8v15.1c0 .472-.01.678.24.9L83 27h-8zM64 11.706c-.507-.652-1.418-1.123-2.396-1.123-1.957 0-3.842 1.775-3.842 7.03 0 4.93 1.631 6.669 3.66 6.669.907 0 1.853-.436 2.578-1.378V11.706zm6 12.286c0 .47-.026.58.3.87L72 27h-8v-3.697C62.913 25.804 60.951 27 58.632 27 54.5 27 51.5 23.738 51.5 17.795c0-5.582 3.254-9.314 7.784-9.314 2.356 0 3.919 1.123 4.716 2.899V3.878c0-.471-.077-.617-.403-.906L62 1.305 70 .29v23.702zM43.9 16c.037-.471.037-.67.037-.815 0-4.747-.937-5.435-2.437-5.435-1.5 0-2.854.995-2.927 6.25h5.328zm-5.327 1c0 4.711 2.392 6.63 5.183 6.63 2.174 0 4.313-.943 5.509-3.335h.072c-.942 4.566-3.77 6.705-8.01 6.705-4.566 0-8.879-2.755-8.879-9.133 0-6.705 4.277-9.386 9.097-9.386 3.842 0 7.937 1.811 7.937 7.646 0 .109 0 .438-.036.873H38.573zM31.5 27h-12l2.39-2.646c.084-.084.11-.399.11-.87V7l-7.866 20L5.581 8.372C5.364 7.9 5.181 7.285 5 6.777V20.62c0 .58-.035.653.364 1.196L9 27H0l3.64-5.183c.399-.543.36-.616.36-1.196V6.27c0-.617.095-.69-.195-1.051L1 1h8.495l7.355 16.3L23.24 1h8.26l-2.2 2.75c-.326.326-.3.599-.3 1.106v18.629c0 .47.005.75.138.87L31.5 27z"
        }))
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(71),
        i = r(o),
        a = n(6),
        u = r(a),
        s = n(0),
        c = r(s),
        l = n(1),
        f = r(l),
        d = n(7),
        h = r(d),
        p = n(8),
        m = r(p),
        g = n(19),
        v = r(g),
        y = n(72),
        _ = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }(y),
        b = n(20),
        x = n(2),
        w = r(x),
        k = {
            top: 30,
            right: 20,
            bottom: 30,
            left: 10
        },
        E = 550,
        C = function(e) {
            function t(e) {
                (0, c.default)(this, t);
                var n = (0, h.default)(this, (t.__proto__ || (0, u.default)(t)).call(this, e));
                return n.pointScale = _.scaleLinear().domain([0, 135]).rangeRound([0, E - k.left - k.right]), n.topAxisFn = _.axisTop().scale(n.pointScale).tickValues((0, i.default)(b.pointsToLevels)).tickFormat(function(e) {
                    return b.pointsToLevels[e]
                }), n.bottomAxisFn = _.axisBottom().scale(n.pointScale).tickValues((0, i.default)(b.pointsToLevels)), n
            }
            return (0, m.default)(t, e), (0, f.default)(t, [{
                key: "componentDidMount",
                value: function() {
                    _.select(this.topAxis).call(this.topAxisFn).selectAll("text").attr("y", 0).attr("x", -25).attr("transform", "rotate(90)").attr("dy", ".35em").style("font-size", "12px").style("text-anchor", "start"), _.select(this.bottomAxis).call(this.bottomAxisFn).selectAll("text").attr("y", 0).attr("x", 10).attr("transform", "rotate(90)").attr("dy", ".35em").style("font-size", "12px").style("text-anchor", "start")
                }
            }, {
                key: "rightRoundedRect",
                value: function(e, t, n, r, o) {
                    return "M" + e + "," + t + "h" + (n - o) + "a" + o + "," + o + " 0 0 1 " + o + "," + o + "v" + (r - 2 * o) + "a" + o + "," + o + " 0 0 1 " + -o + "," + o + "h" + (o - n) + "z"
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = (0, b.categoryPointsFromMilestoneMap)(this.props.milestoneByTrack),
                        n = 0;
                    t.forEach(function(e, t) {
                        e.points && (n = t)
                    });
                    var r = 0;
                    return w.default.createElement("figure", {
                        className: "jsx-2708482886"
                    }, w.default.createElement(v.default, {
                        styleId: "2708482886",
                        css: ["figure.jsx-2708482886{margin:0 0 0 -10px;}", "svg.jsx-2708482886{width:" + E + "px;height:160px;}"]
                    }), w.default.createElement("svg", {
                        className: "jsx-2708482886"
                    }, w.default.createElement("g", {
                        transform: "translate(" + k.left + "," + k.top + ")",
                        className: "jsx-2708482886"
                    }, t.map(function(t, o) {
                        var i = e.pointScale(r),
                            a = e.pointScale(r + t.points) - i;
                        return r += t.points, o != n ? w.default.createElement("rect", {
                            key: t.categoryId,
                            x: i,
                            y: 0,
                            width: a,
                            height: 150 - k.top - k.bottom,
                            style: {
                                fill: (0, b.categoryColorScale)(t.categoryId),
                                borderRight: "1px solid #000"
                            },
                            className: "jsx-2708482886"
                        }) : w.default.createElement("path", {
                            key: t.categoryId,
                            d: e.rightRoundedRect(i, 0, a, 150 - k.top - k.bottom, 3),
                            style: {
                                fill: (0, b.categoryColorScale)(t.categoryId)
                            },
                            className: "jsx-2708482886"
                        })
                    }), w.default.createElement("g", {
                        ref: function(t) {
                            return e.topAxis = t
                        },
                        transform: "translate(0, -2)",
                        className: "jsx-2708482886 top-axis"
                    }), w.default.createElement("g", {
                        ref: function(t) {
                            return e.bottomAxis = t
                        },
                        transform: "translate(0," + (150 - k.top - k.bottom + 1) + ")",
                        className: "jsx-2708482886 bottom-axis"
                    }))))
                }
            }]), t
        }(w.default.Component);
    t.default = C
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(6),
        i = r(o),
        a = n(0),
        u = r(a),
        s = n(1),
        c = r(s),
        l = n(7),
        f = r(l),
        d = n(8),
        h = r(d),
        p = n(19),
        m = r(p),
        g = n(20),
        v = n(2),
        y = r(v),
        _ = function(e) {
            function t() {
                return (0, u.default)(this, t), (0, f.default)(this, (t.__proto__ || (0, i.default)(t)).apply(this, arguments))
            }
            return (0, h.default)(t, e), (0, c.default)(t, [{
                key: "render",
                value: function() {
                    for (var e = (0, g.totalPointsFromMilestoneMap)(this.props.milestoneByTrack), t = void 0, n = e; !(t = g.pointsToLevels[n]);) n--;
                    for (var r = 1; !g.pointsToLevels[e + r];)
                        if (++r > 135) {
                            r = "N/A";
                            break
                        }
                    var o = [{
                        label: "Current level",
                        value: t
                    }, {
                        label: "Total points",
                        value: e
                    }, {
                        label: "Points to next level",
                        value: r
                    }];
                    return y.default.createElement("table", {
                        className: "jsx-3403694977"
                    }, y.default.createElement(m.default, {
                        styleId: "3403694977",
                        css: ["table.jsx-3403694977{border-spacing:3px;margin-bottom:20px;margin-left:-3px;}", ".point-summary-label.jsx-3403694977{font-size:12px;text-align:center;font-weight:normal;width:120px;}", ".point-summary-value.jsx-3403694977{width:120px;background:#eee;font-size:24px;font-weight:bold;line-height:50px;border-radius:2px;text-align:center;}"]
                    }), y.default.createElement("tbody", {
                        className: "jsx-3403694977"
                    }, y.default.createElement("tr", {
                        className: "jsx-3403694977"
                    }, o.map(function(e, t) {
                        var n = e.label;
                        return y.default.createElement("th", {
                            key: t,
                            className: "jsx-3403694977 point-summary-label"
                        }, n)
                    })), y.default.createElement("tr", {
                        className: "jsx-3403694977"
                    }, o.map(function(e, t) {
                        var n = e.value;
                        return y.default.createElement("td", {
                            key: t,
                            className: "jsx-3403694977 point-summary-value"
                        }, n)
                    }))))
                }
            }]), t
        }(y.default.Component);
    t.default = _
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(6),
        i = r(o),
        a = n(0),
        u = r(a),
        s = n(1),
        c = r(s),
        l = n(7),
        f = r(l),
        d = n(8),
        h = r(d),
        p = n(19),
        m = r(p),
        g = n(2),
        v = r(g),
        y = n(20),
        _ = function(e) {
            function t() {
                return (0, u.default)(this, t), (0, f.default)(this, (t.__proto__ || (0, i.default)(t)).apply(this, arguments))
            }
            return (0, h.default)(t, e), (0, c.default)(t, [{
                key: "render",
                value: function() {
                    var e = this,
                        t = (0, y.eligibleTitles)(this.props.milestoneByTrack);
                    return v.default.createElement("select", {
                        value: this.props.currentTitle,
                        onChange: function(t) {
                            return e.props.setTitleFn(t.target.value)
                        },
                        className: "jsx-2295457571"
                    }, v.default.createElement(m.default, {
                        styleId: "2295457571",
                        css: ["select.jsx-2295457571{font-size:20px;line-height:20px;margin-bottom:20px;min-width:300px;}"]
                    }), t.map(function(e) {
                        return v.default.createElement("option", {
                            key: e,
                            className: "jsx-2295457571"
                        }, e)
                    }))
                }
            }]), t
        }(v.default.Component);
    t.default = _
}, function(e, t, n) {
    "use strict";
    e.exports = n(215)
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(6),
        i = r(o),
        a = n(0),
        u = r(a),
        s = n(1),
        c = r(s),
        l = n(7),
        f = r(l),
        d = n(8),
        h = r(d),
        p = n(2),
        m = r(p),
        g = n(32),
        v = r(g),
        y = n(216),
        _ = r(y),
        b = n(102),
        x = r(b),
        w = function(e) {
            function t() {
                return (0, u.default)(this, t), (0, f.default)(this, (t.__proto__ || (0, i.default)(t)).apply(this, arguments))
            }
            return (0, h.default)(t, e), (0, c.default)(t, [{
                key: "render",
                value: function() {
                    var e = this.props.statusCode,
                        t = 404 === e ? "This page could not be found" : _.default[e] || "An unexpected error has occurred";
                    return m.default.createElement("div", {
                        style: k.error
                    }, m.default.createElement(x.default, null, m.default.createElement("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    })), m.default.createElement("div", null, m.default.createElement("style", {
                        dangerouslySetInnerHTML: {
                            __html: "body { margin: 0 }"
                        }
                    }), e ? m.default.createElement("h1", {
                        style: k.h1
                    }, e) : null, m.default.createElement("div", {
                        style: k.desc
                    }, m.default.createElement("h2", {
                        style: k.h2
                    }, t, "."))))
                }
            }], [{
                key: "getInitialProps",
                value: function(e) {
                    var t = e.res,
                        n = e.err;
                    return {
                        statusCode: t ? t.statusCode : n ? n.statusCode : null
                    }
                }
            }]), t
        }(m.default.Component);
    w.propTypes = {
        statusCode: v.default.number
    }, t.default = w;
    var k = {
        error: {
            color: "#000",
            background: "#fff",
            fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
            height: "100vh",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
        desc: {
            display: "inline-block",
            textAlign: "left",
            lineHeight: "49px",
            height: "49px",
            verticalAlign: "middle"
        },
        h1: {
            display: "inline-block",
            borderRight: "1px solid rgba(0, 0, 0,.3)",
            margin: 0,
            marginRight: "20px",
            padding: "10px 23px 10px 0",
            fontSize: "24px",
            fontWeight: 500,
            verticalAlign: "top"
        },
        h2: {
            fontSize: "14px",
            fontWeight: "normal",
            lineHeight: "inherit",
            margin: 0,
            padding: 0
        }
    }
}, function(e, t) {
    e.exports = {
        100: "Continue",
        101: "Switching Protocols",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        207: "Multi Status",
        208: "Already Reported",
        226: "IM Used",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        306: "Switch Proxy",
        307: "Temporary Redirect",
        308: "Permanent Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Time-out",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Request Entity Too Large",
        414: "Request-URI Too Large",
        415: "Unsupported Media Type",
        416: "Requested Range not Satisfiable",
        417: "Expectation Failed",
        418: "I'm a teapot",
        421: "Misdirected Request",
        422: "Unprocessable Entity",
        423: "Locked",
        424: "Failed Dependency",
        426: "Upgrade Required",
        428: "Precondition Required",
        429: "Too Many Requests",
        431: "Request Header Fields Too Large",
        451: "Unavailable For Legal Reasons",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Time-out",
        505: "HTTP Version not Supported",
        506: "Variant Also Negotiates",
        507: "Insufficient Storage",
        508: "Loop Detected",
        510: "Not Extended",
        511: "Network Authentication Required",
        CONTINUE: 100,
        SWITCHING_PROTOCOLS: 101,
        OK: 200,
        CREATED: 201,
        ACCEPTED: 202,
        NON_AUTHORITATIVE_INFORMATION: 203,
        NO_CONTENT: 204,
        RESET_CONTENT: 205,
        PARTIAL_CONTENT: 206,
        MULTI_STATUS: 207,
        ALREADY_REPORTED: 208,
        IM_USED: 226,
        MULTIPLE_CHOICES: 300,
        MOVED_PERMANENTLY: 301,
        FOUND: 302,
        SEE_OTHER: 303,
        NOT_MODIFIED: 304,
        USE_PROXY: 305,
        SWITCH_PROXY: 306,
        TEMPORARY_REDIRECT: 307,
        PERMANENT_REDIRECT: 308,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        PAYMENT_REQUIRED: 402,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        METHOD_NOT_ALLOWED: 405,
        NOT_ACCEPTABLE: 406,
        PROXY_AUTHENTICATION_REQUIRED: 407,
        REQUEST_TIMEOUT: 408,
        CONFLICT: 409,
        GONE: 410,
        LENGTH_REQUIRED: 411,
        PRECONDITION_FAILED: 412,
        REQUEST_ENTITY_TOO_LARGE: 413,
        REQUEST_URI_TOO_LONG: 414,
        UNSUPPORTED_MEDIA_TYPE: 415,
        REQUESTED_RANGE_NOT_SATISFIABLE: 416,
        EXPECTATION_FAILED: 417,
        IM_A_TEAPOT: 418,
        MISDIRECTED_REQUEST: 421,
        UNPROCESSABLE_ENTITY: 422,
        UPGRADE_REQUIRED: 426,
        PRECONDITION_REQUIRED: 428,
        LOCKED: 423,
        FAILED_DEPENDENCY: 424,
        TOO_MANY_REQUESTS: 429,
        REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
        UNAVAILABLE_FOR_LEGAL_REASONS: 451,
        INTERNAL_SERVER_ERROR: 500,
        NOT_IMPLEMENTED: 501,
        BAD_GATEWAY: 502,
        SERVICE_UNAVAILABLE: 503,
        GATEWAY_TIMEOUT: 504,
        HTTP_VERSION_NOT_SUPPORTED: 505,
        VARIANT_ALSO_NEGOTIATES: 506,
        INSUFFICIENT_STORAGE: 507,
        LOOP_DETECTED: 508,
        NOT_EXTENDED: 510,
        NETWORK_AUTHENTICATION_REQUIRED: 511
    }
}, function(e, t, n) {
    "use strict";
    e.exports = n(218)
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        return t ? "/" === e ? "/index.js" : e + "/index.js" : e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.NextScript = t.Main = t.Head = void 0;
    var i = n(43),
        a = r(i),
        u = n(6),
        s = r(u),
        c = n(0),
        l = r(c),
        f = n(1),
        d = r(f),
        h = n(7),
        p = r(h),
        m = n(8),
        g = r(m),
        v = n(2),
        y = r(v),
        _ = n(32),
        b = r(_),
        x = n(219),
        w = r(x),
        k = n(220),
        E = r(k),
        C = function(e) {
            function t() {
                return (0, l.default)(this, t), (0, p.default)(this, (t.__proto__ || (0, s.default)(t)).apply(this, arguments))
            }
            return (0, g.default)(t, e), (0, d.default)(t, [{
                key: "getChildContext",
                value: function() {
                    return {
                        _documentProps: this.props
                    }
                }
            }, {
                key: "render",
                value: function() {
                    return y.default.createElement("html", null, y.default.createElement(T, null), y.default.createElement("body", null, y.default.createElement(M, null), y.default.createElement(S, null)))
                }
            }], [{
                key: "getInitialProps",
                value: function(e) {
                    var t = e.renderPage,
                        n = t();
                    return {
                        html: n.html,
                        head: n.head,
                        errorHtml: n.errorHtml,
                        chunks: n.chunks,
                        styles: (0, E.default)()
                    }
                }
            }]), t
        }(v.Component);
    C.childContextTypes = {
        _documentProps: b.default.any
    }, t.default = C;
    var T = t.Head = function(e) {
        function t() {
            return (0, l.default)(this, t), (0, p.default)(this, (t.__proto__ || (0, s.default)(t)).apply(this, arguments))
        }
        return (0, g.default)(t, e), (0, d.default)(t, [{
            key: "getChunkPreloadLink",
            value: function(e) {
                var t = this.context._documentProps.__NEXT_DATA__,
                    n = t.buildStats,
                    r = t.assetPrefix,
                    o = t.buildId,
                    i = n ? n[e].hash : o;
                return y.default.createElement("link", {
                    key: e,
                    rel: "preload",
                    href: r + "/_next/" + i + "/" + e,
                    as: "script"
                })
            }
        }, {
            key: "getPreloadMainLinks",
            value: function() {
                return this.context._documentProps.dev ? [this.getChunkPreloadLink("manifest.js"), this.getChunkPreloadLink("commons.js"), this.getChunkPreloadLink("main.js")] : [this.getChunkPreloadLink("app.js")]
            }
        }, {
            key: "getPreloadDynamicChunks",
            value: function() {
                var e = this.context._documentProps,
                    t = e.chunks,
                    n = e.__NEXT_DATA__,
                    r = n.assetPrefix,
                    o = n.buildId;
                return t.map(function(e) {
                    return y.default.createElement("link", {
                        key: e,
                        rel: "preload",
                        href: r + "/_next/" + o + "/webpack/chunks/" + e,
                        as: "script"
                    })
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this.context._documentProps,
                    t = e.head,
                    n = e.styles,
                    r = e.__NEXT_DATA__,
                    i = r.pathname,
                    a = r.buildId,
                    u = r.assetPrefix,
                    s = r.nextExport,
                    c = o(i, s);
                return y.default.createElement("head", this.props, y.default.createElement("link", {
                    rel: "preload",
                    href: u + "/_next/" + a + "/page" + c,
                    as: "script"
                }), y.default.createElement("link", {
                    rel: "preload",
                    href: u + "/_next/" + a + "/page/_error/index.js",
                    as: "script"
                }), this.getPreloadDynamicChunks(), this.getPreloadMainLinks(), (t || []).map(function(e, t) {
                    return y.default.cloneElement(e, {
                        key: t
                    })
                }), n || null, this.props.children)
            }
        }]), t
    }(v.Component);
    T.contextTypes = {
        _documentProps: b.default.any
    };
    var M = t.Main = function(e) {
        function t() {
            return (0, l.default)(this, t), (0, p.default)(this, (t.__proto__ || (0, s.default)(t)).apply(this, arguments))
        }
        return (0, g.default)(t, e), (0, d.default)(t, [{
            key: "render",
            value: function() {
                var e = this.context._documentProps,
                    t = e.html,
                    n = e.errorHtml,
                    r = this.props.className;
                return y.default.createElement("div", {
                    className: r
                }, y.default.createElement("div", {
                    id: "__next",
                    dangerouslySetInnerHTML: {
                        __html: t
                    }
                }), y.default.createElement("div", {
                    id: "__next-error",
                    dangerouslySetInnerHTML: {
                        __html: n
                    }
                }))
            }
        }]), t
    }(v.Component);
    M.propTypes = {
        className: b.default.string
    }, M.contextTypes = {
        _documentProps: b.default.any
    };
    var S = t.NextScript = function(e) {
        function t() {
            return (0, l.default)(this, t), (0, p.default)(this, (t.__proto__ || (0, s.default)(t)).apply(this, arguments))
        }
        return (0, g.default)(t, e), (0, d.default)(t, [{
            key: "getChunkScript",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = this.context._documentProps.__NEXT_DATA__,
                    r = n.buildStats,
                    o = n.assetPrefix,
                    i = n.buildId,
                    u = r ? r[e].hash : i;
                return y.default.createElement("script", (0, a.default)({
                    key: e,
                    type: "text/javascript",
                    src: o + "/_next/" + u + "/" + e
                }, t))
            }
        }, {
            key: "getScripts",
            value: function() {
                return this.context._documentProps.dev ? [this.getChunkScript("manifest.js"), this.getChunkScript("commons.js"), this.getChunkScript("main.js")] : [this.getChunkScript("app.js", {
                    async: !0
                })]
            }
        }, {
            key: "getDynamicChunks",
            value: function() {
                var e = this.context._documentProps,
                    t = e.chunks,
                    n = e.__NEXT_DATA__,
                    r = n.assetPrefix,
                    o = n.buildId;
                return y.default.createElement("div", null, t.map(function(e) {
                    return y.default.createElement("script", {
                        async: !0,
                        key: e,
                        type: "text/javascript",
                        src: r + "/_next/" + o + "/webpack/chunks/" + e
                    })
                }))
            }
        }, {
            key: "render",
            value: function() {
                var e = this.context._documentProps,
                    t = e.staticMarkup,
                    n = e.__NEXT_DATA__,
                    r = e.chunks,
                    i = n.pathname,
                    a = n.nextExport,
                    u = n.buildId,
                    s = n.assetPrefix,
                    c = o(i, a);
                return n.chunks = r, y.default.createElement("div", null, t ? null : y.default.createElement("script", {
                    dangerouslySetInnerHTML: {
                        __html: "\n          __NEXT_DATA__ = " + (0, w.default)(n) + "\n          module={}\n          __NEXT_LOADED_PAGES__ = []\n          __NEXT_LOADED_CHUNKS__ = []\n\n          __NEXT_REGISTER_PAGE = function (route, fn) {\n            __NEXT_LOADED_PAGES__.push({ route: route, fn: fn })\n          }\n\n          __NEXT_REGISTER_CHUNK = function (chunkName, fn) {\n            __NEXT_LOADED_CHUNKS__.push({ chunkName: chunkName, fn: fn })\n          }\n        "
                    }
                }), y.default.createElement("script", {
                    async: !0,
                    id: "__NEXT_PAGE__" + i,
                    type: "text/javascript",
                    src: s + "/_next/" + u + "/page" + c
                }), y.default.createElement("script", {
                    async: !0,
                    id: "__NEXT_PAGE__/_error",
                    type: "text/javascript",
                    src: s + "/_next/" + u + "/page/_error/index.js"
                }), t ? null : this.getDynamicChunks(), t ? null : this.getScripts())
            }
        }]), t
    }(v.Component);
    S.contextTypes = {
        _documentProps: b.default.any
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return i[e]
    }

    function o(e) {
        return u[e]
    }
    var i = {
            "&": "\\u0026",
            ">": "\\u003e",
            "<": "\\u003c",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029"
        },
        a = /[&><\u2028\u2029]/g;
    e.exports = function(e) {
        return JSON.stringify(e).replace(a, r)
    };
    var u = {
            "\u2028": "\\u2028",
            "\u2029": "\\u2029"
        },
        s = /[\u2028\u2029]/g;
    e.exports.sanitize = function(e) {
        return e.replace(s, o)
    }
}, function(e, t, n) {
    e.exports = n(221)
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o() {
        var e = (0, d.flush)(),
            t = [],
            n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = (0, c.default)(e); !(n = (i = a.next()).done); n = !0) {
                var s = (0, u.default)(i.value, 2),
                    l = s[0],
                    h = s[1];
                t.push(f.default.createElement("style", {
                    id: "__" + l,
                    key: "__" + l,
                    dangerouslySetInnerHTML: {
                        __html: h
                    }
                }))
            }
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && a.return && a.return()
            } finally {
                if (r) throw o
            }
        }
        return t
    }

    function i() {
        var e = (0, d.flush)(),
            t = "",
            n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = (0, c.default)(e); !(n = (i = a.next()).done); n = !0) {
                var s = (0, u.default)(i.value, 2);
                t += '<style id="__' + s[0] + '">' + s[1] + "</style>"
            }
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && a.return && a.return()
            } finally {
                if (r) throw o
            }
        }
        return t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(42),
        u = r(a),
        s = n(46),
        c = r(s);
    t.default = o, t.flushToHTML = i;
    var l = n(2),
        f = r(l),
        d = n(105)
}, function(e, t, n) {
    e.exports = n(107)
}, function(e, t, n) {
    e.exports = n(194)
}, function(e, t, n) {
    e.exports = n(214)
}, function(e, t, n) {
    e.exports = n(217)
}]);
module.exports = webpackJsonp([1], [], [222]);
