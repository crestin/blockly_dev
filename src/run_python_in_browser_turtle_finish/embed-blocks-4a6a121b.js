!function(a, b, c, d) {
    "use strict";
    function e(a) {
        return ("string" == typeof a || a instanceof String) && (a = a.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")),
        a
    }
    var f = function(b) {
        for (var c = b.length, d = a("head"); c--; )
            0 === d.has("." + b[c]).length && d.append('<meta class="' + b[c] + '" />')
    };
    f(["foundation-mq-small", "foundation-mq-small-only", "foundation-mq-medium", "foundation-mq-medium-only", "foundation-mq-large", "foundation-mq-large-only", "foundation-mq-xlarge", "foundation-mq-xlarge-only", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]),
    a(function() {
        "undefined" != typeof FastClick && "undefined" != typeof c.body && FastClick.attach(c.body)
    });
    var g = function(b, d) {
        if ("string" == typeof b) {
            if (d) {
                var e;
                if (d.jquery) {
                    if (e = d[0],
                    !e)
                        return d
                } else
                    e = d;
                return a(e.querySelectorAll(b))
            }
            return a(c.querySelectorAll(b))
        }
        return a(b, d)
    }
      , h = function(a) {
        var b = [];
        return a || b.push("data"),
        this.namespace.length > 0 && b.push(this.namespace),
        b.push(this.name),
        b.join("-")
    }
      , i = function(a) {
        for (var b = a.split("-"), c = b.length, d = []; c--; )
            0 !== c ? d.push(b[c]) : this.namespace.length > 0 ? d.push(this.namespace, b[c]) : d.push(b[c]);
        return d.reverse().join("-")
    }
      , j = function(b, c) {
        var d = this
          , e = !g(this).data(this.attr_name(!0));
        return g(this.scope).is("[" + this.attr_name() + "]") ? (g(this.scope).data(this.attr_name(!0) + "-init", a.extend({}, this.settings, c || b, this.data_options(g(this.scope)))),
        e && this.events(this.scope)) : g("[" + this.attr_name() + "]", this.scope).each(function() {
            var e = !g(this).data(d.attr_name(!0) + "-init");
            g(this).data(d.attr_name(!0) + "-init", a.extend({}, d.settings, c || b, d.data_options(g(this)))),
            e && d.events(this)
        }),
        "string" == typeof b ? this[b].call(this, c) : void 0
    }
      , k = function(a, b) {
        function c() {
            b(a[0])
        }
        function d() {
            if (this.one("load", c),
            /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                var a = this.attr("src")
                  , b = a.match(/\?/) ? "&" : "?";
                b += "random=" + (new Date).getTime(),
                this.attr("src", a + b)
            }
        }
        return a.attr("src") ? void (a[0].complete || 4 === a[0].readyState ? c() : d.call(a)) : void c()
    };
    b.matchMedia = b.matchMedia || function(a) {
        var b, c = a.documentElement, d = c.firstElementChild || c.firstChild, e = a.createElement("body"), f = a.createElement("div");
        return f.id = "mq-test-1",
        f.style.cssText = "position:absolute;top:-100em",
        e.style.background = "none",
        e.appendChild(f),
        function(a) {
            return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>',
            c.insertBefore(e, d),
            b = 42 === f.offsetWidth,
            c.removeChild(e),
            {
                matches: b,
                media: a
            }
        }
    }(c),
    function(a) {
        function c() {
            d && (g(c),
            i && jQuery.fx.tick())
        }
        for (var d, e = 0, f = ["webkit", "moz"], g = b.requestAnimationFrame, h = b.cancelAnimationFrame, i = "undefined" != typeof jQuery.fx; e < f.length && !g; e++)
            g = b[f[e] + "RequestAnimationFrame"],
            h = h || b[f[e] + "CancelAnimationFrame"] || b[f[e] + "CancelRequestAnimationFrame"];
        g ? (b.requestAnimationFrame = g,
        b.cancelAnimationFrame = h,
        i && (jQuery.fx.timer = function(a) {
            a() && jQuery.timers.push(a) && !d && (d = !0,
            c())
        }
        ,
        jQuery.fx.stop = function() {
            d = !1
        }
        )) : (b.requestAnimationFrame = function(a) {
            var c = (new Date).getTime()
              , d = Math.max(0, 16 - (c - e))
              , f = b.setTimeout(function() {
                a(c + d)
            }, d);
            return e = c + d,
            f
        }
        ,
        b.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        }
        )
    }(jQuery),
    b.Foundation = {
        name: "Foundation",
        version: "5.5.0",
        media_queries: {
            small: g(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            "small-only": g(".foundation-mq-small-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            medium: g(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            "medium-only": g(".foundation-mq-medium-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            large: g(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            "large-only": g(".foundation-mq-large-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xlarge: g(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            "xlarge-only": g(".foundation-mq-xlarge-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xxlarge: g(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
        },
        stylesheet: a("<style></style>").appendTo("head")[0].sheet,
        global: {
            namespace: d
        },
        init: function(a, c, d, e, f) {
            var h = [a, d, e, f]
              , i = [];
            if (this.rtl = /rtl/i.test(g("html").attr("dir")),
            this.scope = a || this.scope,
            this.set_namespace(),
            c && "string" == typeof c && !/reflow/i.test(c))
                this.libs.hasOwnProperty(c) && i.push(this.init_lib(c, h));
            else
                for (var j in this.libs)
                    i.push(this.init_lib(j, c));
            return g(b).load(function() {
                g(b).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")
            }),
            a
        },
        init_lib: function(b, c) {
            return this.libs.hasOwnProperty(b) ? (this.patch(this.libs[b]),
            c && c.hasOwnProperty(b) ? ("undefined" != typeof this.libs[b].settings ? a.extend(!0, this.libs[b].settings, c[b]) : "undefined" != typeof this.libs[b].defaults && a.extend(!0, this.libs[b].defaults, c[b]),
            this.libs[b].init.apply(this.libs[b], [this.scope, c[b]])) : (c = c instanceof Array ? c : new Array(c),
            this.libs[b].init.apply(this.libs[b], c))) : function() {}
        },
        patch: function(a) {
            a.scope = this.scope,
            a.namespace = this.global.namespace,
            a.rtl = this.rtl,
            a.data_options = this.utils.data_options,
            a.attr_name = h,
            a.add_namespace = i,
            a.bindings = j,
            a.S = this.utils.S
        },
        inherit: function(a, b) {
            for (var c = b.split(" "), d = c.length; d--; )
                this.utils.hasOwnProperty(c[d]) && (a[c[d]] = this.utils[c[d]])
        },
        set_namespace: function() {
            var b = this.global.namespace === d ? a(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
            this.global.namespace = b === d || /false/i.test(b) ? "" : b
        },
        libs: {},
        utils: {
            S: g,
            throttle: function(a, b) {
                var c = null;
                return function() {
                    var d = this
                      , e = arguments;
                    null == c && (c = setTimeout(function() {
                        a.apply(d, e),
                        c = null
                    }, b))
                }
            },
            debounce: function(a, b, c) {
                var d, e;
                return function() {
                    var f = this
                      , g = arguments
                      , h = function() {
                        d = null,
                        c || (e = a.apply(f, g))
                    }
                      , i = c && !d;
                    return clearTimeout(d),
                    d = setTimeout(h, b),
                    i && (e = a.apply(f, g)),
                    e
                }
            },
            data_options: function(b, c) {
                function d(a) {
                    return !isNaN(a - 0) && null !== a && "" !== a && a !== !1 && a !== !0
                }
                function e(b) {
                    return "string" == typeof b ? a.trim(b) : b
                }
                c = c || "options";
                var f, g, h, i = {}, j = function(a) {
                    var b = Foundation.global.namespace;
                    return b.length > 0 ? a.data(b + "-" + c) : a.data(c)
                }, k = j(b);
                if ("object" == typeof k)
                    return k;
                for (h = (k || ":").split(";"),
                f = h.length; f--; )
                    g = h[f].split(":"),
                    g = [g[0], g.slice(1).join(":")],
                    /true/i.test(g[1]) && (g[1] = !0),
                    /false/i.test(g[1]) && (g[1] = !1),
                    d(g[1]) && (-1 === g[1].indexOf(".") ? g[1] = parseInt(g[1], 10) : g[1] = parseFloat(g[1])),
                    2 === g.length && g[0].length > 0 && (i[e(g[0])] = e(g[1]));
                return i
            },
            register_media: function(b, c) {
                Foundation.media_queries[b] === d && (a("head").append('<meta class="' + c + '"/>'),
                Foundation.media_queries[b] = e(a("." + c).css("font-family")))
            },
            add_custom_rule: function(a, b) {
                if (b === d && Foundation.stylesheet)
                    Foundation.stylesheet.insertRule(a, Foundation.stylesheet.cssRules.length);
                else {
                    var c = Foundation.media_queries[b];
                    c !== d && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[b] + "{ " + a + " }")
                }
            },
            image_loaded: function(a, b) {
                var c = this
                  , d = a.length;
                0 === d && b(a),
                a.each(function() {
                    k(c.S(this), function() {
                        d -= 1,
                        0 === d && b(a)
                    })
                })
            },
            random_str: function() {
                return this.fidx || (this.fidx = 0),
                this.prefix = this.prefix || [this.name || "F", (+new Date).toString(36)].join("-"),
                this.prefix + (this.fidx++).toString(36)
            },
            match: function(a) {
                return b.matchMedia(a).matches
            },
            is_small_up: function() {
                return this.match(Foundation.media_queries.small)
            },
            is_medium_up: function() {
                return this.match(Foundation.media_queries.medium)
            },
            is_large_up: function() {
                return this.match(Foundation.media_queries.large)
            },
            is_xlarge_up: function() {
                return this.match(Foundation.media_queries.xlarge)
            },
            is_xxlarge_up: function() {
                return this.match(Foundation.media_queries.xxlarge)
            },
            is_small_only: function() {
                return !(this.is_medium_up() || this.is_large_up() || this.is_xlarge_up() || this.is_xxlarge_up())
            },
            is_medium_only: function() {
                return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
            },
            is_large_only: function() {
                return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
            },
            is_xlarge_only: function() {
                return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up()
            },
            is_xxlarge_only: function() {
                return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up()
            }
        }
    },
    a.fn.foundation = function() {
        var a = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            return Foundation.init.apply(Foundation, [this].concat(a)),
            this
        })
    }
}(jQuery, window, window.document),
function(a, b, c, d) {
    "use strict";
    Foundation.libs.accordion = {
        name: "accordion",
        version: "5.5.0",
        settings: {
            content_class: "content",
            active_class: "active",
            multi_expand: !1,
            toggleable: !0,
            callback: function() {}
        },
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function() {
            var b = this
              , c = this.S;
            c(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] > .accordion-navigation > a", function(d) {
                var e = c(this).closest("[" + b.attr_name() + "]")
                  , f = b.attr_name() + "=" + e.attr(b.attr_name())
                  , g = e.data(b.attr_name(!0) + "-init") || b.settings
                  , h = c("#" + this.href.split("#")[1])
                  , i = a("> .accordion-navigation", e)
                  , j = i.children("." + g.content_class)
                  , k = j.filter("." + g.active_class);
                return d.preventDefault(),
                e.attr(b.attr_name()) && (j = j.add("[" + f + "] dd > ." + g.content_class),
                i = i.add("[" + f + "] .accordion-navigation")),
                g.toggleable && h.is(k) ? (h.parent(".accordion-navigation").toggleClass(g.active_class, !1),
                h.toggleClass(g.active_class, !1),
                g.callback(h),
                h.triggerHandler("toggled", [e]),
                void e.triggerHandler("toggled", [h])) : (g.multi_expand || (j.removeClass(g.active_class),
                i.removeClass(g.active_class)),
                h.addClass(g.active_class).parent().addClass(g.active_class),
                g.callback(h),
                h.triggerHandler("toggled", [e]),
                void e.triggerHandler("toggled", [h]))
            })
        },
        off: function() {},
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b, c, d) {
    "use strict";
    Foundation.libs.alert = {
        name: "alert",
        version: "5.5.0",
        settings: {
            callback: function() {}
        },
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function() {
            var b = this
              , c = this.S;
            a(this.scope).off(".alert").on("click.fndtn.alert", "[" + this.attr_name() + "] .close", function(a) {
                var d = c(this).closest("[" + b.attr_name() + "]")
                  , e = d.data(b.attr_name(!0) + "-init") || b.settings;
                a.preventDefault(),
                Modernizr.csstransitions ? (d.addClass("alert-close"),
                d.on("transitionend webkitTransitionEnd oTransitionEnd", function(a) {
                    c(this).trigger("close").trigger("close.fndtn.alert").remove(),
                    e.callback()
                })) : d.fadeOut(300, function() {
                    c(this).trigger("close").trigger("close.fndtn.alert").remove(),
                    e.callback()
                })
            })
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b, c, d) {
    "use strict";
    Foundation.libs.dropdown = {
        name: "dropdown",
        version: "5.5.0",
        settings: {
            active_class: "open",
            disabled_class: "disabled",
            mega_class: "mega",
            align: "bottom",
            is_hover: !1,
            hover_timeout: 150,
            opened: function() {},
            closed: function() {}
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "throttle"),
            a.extend(!0, this.settings, c, d),
            this.bindings(c, d)
        },
        events: function(c) {
            var d = this
              , e = d.S;
            e(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]", function(b) {
                var c = e(this).data(d.attr_name(!0) + "-init") || d.settings;
                (!c.is_hover || Modernizr.touch) && (b.preventDefault(),
                e(this).parent("[data-reveal-id]") && b.stopPropagation(),
                d.toggle(a(this)))
            }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function(a) {
                var b, c, f = e(this);
                clearTimeout(d.timeout),
                f.data(d.data_attr()) ? (b = e("#" + f.data(d.data_attr())),
                c = f) : (b = f,
                c = e("[" + d.attr_name() + '="' + b.attr("id") + '"]'));
                var g = c.data(d.attr_name(!0) + "-init") || d.settings;
                e(a.currentTarget).data(d.data_attr()) && g.is_hover && d.closeall.call(d),
                g.is_hover && d.open.apply(d, [b, c])
            }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function(a) {
                var b, c = e(this);
                if (c.data(d.data_attr()))
                    b = c.data(d.data_attr(!0) + "-init") || d.settings;
                else
                    var f = e("[" + d.attr_name() + '="' + e(this).attr("id") + '"]')
                      , b = f.data(d.attr_name(!0) + "-init") || d.settings;
                d.timeout = setTimeout(function() {
                    c.data(d.data_attr()) ? b.is_hover && d.close.call(d, e("#" + c.data(d.data_attr()))) : b.is_hover && d.close.call(d, c)
                }
                .bind(this), b.hover_timeout)
            }).on("click.fndtn.dropdown", function(b) {
                var c = e(b.target).closest("[" + d.attr_name() + "-content]")
                  , f = c.find("a");
                return f.length > 0 && "false" !== c.attr("aria-autoclose") && d.close.call(d, e("[" + d.attr_name() + "-content]")),
                e(b.target).closest("[" + d.attr_name() + "]").length > 0 ? void 0 : !e(b.target).data("revealId") && c.length > 0 && (e(b.target).is("[" + d.attr_name() + "-content]") || a.contains(c.first()[0], b.target)) ? void b.stopPropagation() : void d.close.call(d, e("[" + d.attr_name() + "-content]"))
            }).on("opened.fndtn.dropdown", "[" + d.attr_name() + "-content]", function() {
                d.settings.opened.call(this)
            }).on("closed.fndtn.dropdown", "[" + d.attr_name() + "-content]", function() {
                d.settings.closed.call(this)
            }),
            e(b).off(".dropdown").on("resize.fndtn.dropdown", d.throttle(function() {
                d.resize.call(d)
            }, 50)),
            this.resize()
        },
        close: function(b) {
            var c = this;
            b.each(function() {
                var d = a("[" + c.attr_name() + "=" + b[0].id + "]") || a("aria-controls=" + b[0].id + "]");
                d.attr("aria-expanded", "false"),
                c.S(this).hasClass(c.settings.active_class) && (c.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").attr("aria-hidden", "true").removeClass(c.settings.active_class).prev("[" + c.attr_name() + "]").removeClass(c.settings.active_class).removeData("target"),
                c.S(this).trigger("closed").trigger("closed.fndtn.dropdown", [b]))
            }),
            b.removeClass("f-open-" + this.attr_name(!0))
        },
        closeall: function() {
            var b = this;
            a.each(b.S(".f-open-" + this.attr_name(!0)), function() {
                b.close.call(b, b.S(this))
            })
        },
        open: function(a, b) {
            this.css(a.addClass(this.settings.active_class), b),
            a.prev("[" + this.attr_name() + "]").addClass(this.settings.active_class),
            a.data("target", b.get(0)).trigger("opened").trigger("opened.fndtn.dropdown", [a, b]),
            a.attr("aria-hidden", "false"),
            b.attr("aria-expanded", "true"),
            a.focus(),
            a.addClass("f-open-" + this.attr_name(!0))
        },
        data_attr: function() {
            return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name
        },
        toggle: function(a) {
            if (!a.hasClass(this.settings.disabled_class)) {
                var b = this.S("#" + a.data(this.data_attr()));
                0 !== b.length && (this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(b)),
                b.hasClass(this.settings.active_class) ? (this.close.call(this, b),
                b.data("target") !== a.get(0) && this.open.call(this, b, a)) : this.open.call(this, b, a))
            }
        },
        resize: function() {
            var a = this.S("[" + this.attr_name() + "-content].open")
              , b = this.S("[" + this.attr_name() + '="' + a.attr("id") + '"]');
            a.length && b.length && this.css(a, b)
        },
        css: function(a, b) {
            var c = Math.max((b.width() - a.width()) / 2, 8)
              , d = b.data(this.attr_name(!0) + "-init") || this.settings;
            if (this.clear_idx(),
            this.small()) {
                var e = this.dirs.bottom.call(a, b, d);
                a.attr("style", "").removeClass("drop-left drop-right drop-top").css({
                    position: "absolute",
                    width: "95%",
                    "max-width": "none",
                    top: e.top
                }),
                a.css(Foundation.rtl ? "right" : "left", c)
            } else
                this.style(a, b, d);
            return a
        },
        style: function(b, c, d) {
            var e = a.extend({
                position: "absolute"
            }, this.dirs[d.align].call(b, c, d));
            b.attr("style", "").css(e)
        },
        dirs: {
            _base: function(a) {
                var d = this.offsetParent()
                  , e = d.offset()
                  , f = a.offset();
                f.top -= e.top,
                f.left -= e.left,
                f.missRight = !1,
                f.missTop = !1,
                f.missLeft = !1,
                f.leftRightFlag = !1;
                var g;
                g = c.getElementsByClassName("row")[0] ? c.getElementsByClassName("row")[0].clientWidth : b.outerWidth;
                var h = (b.outerWidth - g) / 2
                  , i = g;
                return this.hasClass("mega") || (a.offset().top <= this.outerHeight() && (f.missTop = !0,
                i = b.outerWidth - h,
                f.leftRightFlag = !0),
                a.offset().left + this.outerWidth() > a.offset().left + h && a.offset().left - h > this.outerWidth() && (f.missRight = !0,
                f.missLeft = !1),
                a.offset().left - this.outerWidth() <= 0 && (f.missLeft = !0,
                f.missRight = !1)),
                f
            },
            top: function(a, b) {
                var c = Foundation.libs.dropdown
                  , d = c.dirs._base.call(this, a);
                return this.addClass("drop-top"),
                1 == d.missTop && (d.top = d.top + a.outerHeight() + this.outerHeight(),
                this.removeClass("drop-top")),
                1 == d.missRight && (d.left = d.left - this.outerWidth() + a.outerWidth()),
                (a.outerWidth() < this.outerWidth() || c.small() || this.hasClass(b.mega_menu)) && c.adjust_pip(this, a, b, d),
                Foundation.rtl ? {
                    left: d.left - this.outerWidth() + a.outerWidth(),
                    top: d.top - this.outerHeight()
                } : {
                    left: d.left,
                    top: d.top - this.outerHeight()
                }
            },
            bottom: function(a, b) {
                var c = Foundation.libs.dropdown
                  , d = c.dirs._base.call(this, a);
                return 1 == d.missRight && (d.left = d.left - this.outerWidth() + a.outerWidth()),
                (a.outerWidth() < this.outerWidth() || c.small() || this.hasClass(b.mega_menu)) && c.adjust_pip(this, a, b, d),
                c.rtl ? {
                    left: d.left - this.outerWidth() + a.outerWidth(),
                    top: d.top + a.outerHeight()
                } : {
                    left: d.left,
                    top: d.top + a.outerHeight()
                }
            },
            left: function(a, b) {
                var c = Foundation.libs.dropdown.dirs._base.call(this, a);
                return this.addClass("drop-left"),
                1 == c.missLeft && (c.left = c.left + this.outerWidth(),
                c.top = c.top + a.outerHeight(),
                this.removeClass("drop-left")),
                {
                    left: c.left - this.outerWidth(),
                    top: c.top
                }
            },
            right: function(a, b) {
                var c = Foundation.libs.dropdown.dirs._base.call(this, a);
                this.addClass("drop-right"),
                1 == c.missRight ? (c.left = c.left - this.outerWidth(),
                c.top = c.top + a.outerHeight(),
                this.removeClass("drop-right")) : c.triggeredRight = !0;
                var d = Foundation.libs.dropdown;
                return (a.outerWidth() < this.outerWidth() || d.small() || this.hasClass(b.mega_menu)) && d.adjust_pip(this, a, b, c),
                {
                    left: c.left + a.outerWidth(),
                    top: c.top
                }
            }
        },
        adjust_pip: function(a, b, c, d) {
            var e = Foundation.stylesheet
              , f = 8;
            a.hasClass(c.mega_class) ? f = d.left + b.outerWidth() / 2 - 8 : this.small() && (f += d.left - 8),
            this.rule_idx = e.cssRules.length;
            var g = ".f-dropdown.open:before"
              , h = ".f-dropdown.open:after"
              , i = "left: " + f + "px;"
              , j = "left: " + (f - 1) + "px;";
            1 == d.missRight && (f = a.outerWidth() - 23,
            g = ".f-dropdown.open:before",
            h = ".f-dropdown.open:after",
            i = "left: " + f + "px;",
            j = "left: " + (f - 1) + "px;"),
            1 == d.triggeredRight && (g = ".f-dropdown.open:before",
            h = ".f-dropdown.open:after",
            i = "left:-12px;",
            j = "left:-14px;"),
            e.insertRule ? (e.insertRule([g, "{", i, "}"].join(" "), this.rule_idx),
            e.insertRule([h, "{", j, "}"].join(" "), this.rule_idx + 1)) : (e.addRule(g, i, this.rule_idx),
            e.addRule(h, j, this.rule_idx + 1))
        },
        clear_idx: function() {
            var a = Foundation.stylesheet;
            "undefined" != typeof this.rule_idx && (a.deleteRule(this.rule_idx),
            a.deleteRule(this.rule_idx),
            delete this.rule_idx)
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        off: function() {
            this.S(this.scope).off(".fndtn.dropdown"),
            this.S("html, body").off(".fndtn.dropdown"),
            this.S(b).off(".fndtn.dropdown"),
            this.S("[data-dropdown-content]").off(".fndtn.dropdown")
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b, c, d) {
    "use strict";
    Foundation.libs.offcanvas = {
        name: "offcanvas",
        version: "5.5.0",
        settings: {
            open_method: "move",
            close_on_click: !1
        },
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function() {
            var b = this
              , c = b.S
              , d = ""
              , e = ""
              , f = "";
            "move" === this.settings.open_method ? (d = "move-",
            e = "right",
            f = "left") : "overlap_single" === this.settings.open_method ? (d = "offcanvas-overlap-",
            e = "right",
            f = "left") : "overlap" === this.settings.open_method && (d = "offcanvas-overlap"),
            c(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle", function(f) {
                b.click_toggle_class(f, d + e),
                "overlap" !== b.settings.open_method && c(".left-submenu").removeClass(d + e),
                a(".left-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".left-off-canvas-menu a", function(f) {
                var g = b.get_settings(f)
                  , h = c(this).parent();
                !g.close_on_click || h.hasClass("has-submenu") || h.hasClass("back") ? c(this).parent().hasClass("has-submenu") ? (f.preventDefault(),
                c(this).siblings(".left-submenu").toggleClass(d + e)) : h.hasClass("back") && (f.preventDefault(),
                h.parent().removeClass(d + e)) : (b.hide.call(b, d + e, b.get_wrapper(f)),
                h.parent().removeClass(d + e)),
                a(".left-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function(e) {
                b.click_toggle_class(e, d + f),
                "overlap" !== b.settings.open_method && c(".right-submenu").removeClass(d + f),
                a(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function(e) {
                var g = b.get_settings(e)
                  , h = c(this).parent();
                !g.close_on_click || h.hasClass("has-submenu") || h.hasClass("back") ? c(this).parent().hasClass("has-submenu") ? (e.preventDefault(),
                c(this).siblings(".right-submenu").toggleClass(d + f)) : h.hasClass("back") && (e.preventDefault(),
                h.parent().removeClass(d + f)) : (b.hide.call(b, d + f, b.get_wrapper(e)),
                h.parent().removeClass(d + f)),
                a(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(g) {
                b.click_remove_class(g, d + f),
                c(".right-submenu").removeClass(d + f),
                e && (b.click_remove_class(g, d + e),
                c(".left-submenu").removeClass(d + f)),
                a(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(c) {
                b.click_remove_class(c, d + f),
                a(".left-off-canvas-toggle").attr("aria-expanded", "false"),
                e && (b.click_remove_class(c, d + e),
                a(".right-off-canvas-toggle").attr("aria-expanded", "false"))
            })
        },
        toggle: function(a, b) {
            b = b || this.get_wrapper(),
            b.is("." + a) ? this.hide(a, b) : this.show(a, b)
        },
        show: function(a, b) {
            b = b || this.get_wrapper(),
            b.trigger("open").trigger("open.fndtn.offcanvas"),
            b.addClass(a)
        },
        hide: function(a, b) {
            b = b || this.get_wrapper(),
            b.trigger("close").trigger("close.fndtn.offcanvas"),
            b.removeClass(a)
        },
        click_toggle_class: function(a, b) {
            a.preventDefault();
            var c = this.get_wrapper(a);
            this.toggle(b, c)
        },
        click_remove_class: function(a, b) {
            a.preventDefault();
            var c = this.get_wrapper(a);
            this.hide(b, c)
        },
        get_settings: function(a) {
            var b = this.S(a.target).closest("[" + this.attr_name() + "]");
            return b.data(this.attr_name(!0) + "-init") || this.settings
        },
        get_wrapper: function(a) {
            var b = this.S(a ? a.target : this.scope).closest(".off-canvas-wrap");
            return 0 === b.length && (b = this.S(".off-canvas-wrap")),
            b
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b, c, d) {
    "use strict";
    function e(a) {
        var b = /fade/i.test(a)
          , c = /pop/i.test(a);
        return {
            animate: b || c,
            pop: c,
            fade: b
        }
    }
    Foundation.libs.reveal = {
        name: "reveal",
        version: "5.5.0",
        locked: !1,
        settings: {
            animation: "fadeAndPop",
            animation_speed: 250,
            close_on_background_click: !0,
            close_on_esc: !0,
            dismiss_modal_class: "close-reveal-modal",
            bg_class: "reveal-modal-bg",
            bg_root_element: "body",
            root_element: "body",
            open: function() {},
            opened: function() {},
            close: function() {},
            closed: function() {},
            bg: a(".reveal-modal-bg"),
            css: {
                open: {
                    opacity: 0,
                    visibility: "visible",
                    display: "block"
                },
                close: {
                    opacity: 1,
                    visibility: "hidden",
                    display: "none"
                }
            }
        },
        init: function(b, c, d) {
            a.extend(!0, this.settings, c, d),
            this.bindings(c, d)
        },
        events: function(a) {
            var b = this
              , d = b.S;
            return d(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])", function(a) {
                if (a.preventDefault(),
                !b.locked) {
                    var c = d(this)
                      , e = c.data(b.data_attr("reveal-ajax"));
                    if (b.locked = !0,
                    "undefined" == typeof e)
                        b.open.call(b, c);
                    else {
                        var f = e === !0 ? c.attr("href") : e;
                        b.open.call(b, c, {
                            url: f
                        })
                    }
                }
            }),
            d(c).on("click.fndtn.reveal", this.close_targets(), function(a) {
                if (a.preventDefault(),
                !b.locked) {
                    var c = d("[" + b.attr_name() + "].open").data(b.attr_name(!0) + "-init") || b.settings
                      , e = d(a.target)[0] === d("." + c.bg_class)[0];
                    if (e) {
                        if (!c.close_on_background_click)
                            return;
                        a.stopPropagation()
                    }
                    b.locked = !0,
                    b.close.call(b, e ? d("[" + b.attr_name() + "].open") : d(this).closest("[" + b.attr_name() + "]"))
                }
            }),
            d("[" + b.attr_name() + "]", this.scope).length > 0 ? d(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : d(this.scope).on("open.fndtn.reveal", "[" + b.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + b.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + b.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + b.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + b.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + b.attr_name() + "]", this.close_video),
            !0
        },
        key_up_on: function(a) {
            var b = this;
            return b.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function(a) {
                var c = b.S("[" + b.attr_name() + "].open")
                  , d = c.data(b.attr_name(!0) + "-init") || b.settings;
                d && 27 === a.which && d.close_on_esc && !b.locked && b.close.call(b, c)
            }),
            !0
        },
        key_up_off: function(a) {
            return this.S("body").off("keyup.fndtn.reveal"),
            !0
        },
        open: function(c, d) {
            var e, f = this;
            c ? "undefined" != typeof c.selector ? e = f.S("#" + c.data(f.data_attr("reveal-id"))).first() : (e = f.S(this.scope),
            d = c) : e = f.S(this.scope);
            var g = e.data(f.attr_name(!0) + "-init");
            if (g = g || this.settings,
            e.hasClass("open") && c.attr("data-reveal-id") == e.attr("id"))
                return f.close(e);
            if (!e.hasClass("open")) {
                var h = f.S("[" + f.attr_name() + "].open");
                if ("undefined" == typeof e.data("css-top") && e.data("css-top", parseInt(e.css("top"), 10)).data("offset", this.cache_offset(e)),
                this.key_up_on(e),
                e.trigger("open").trigger("open.fndtn.reveal"),
                h.length < 1 && this.toggle_bg(e, !0),
                "string" == typeof d && (d = {
                    url: d
                }),
                "undefined" != typeof d && d.url) {
                    var i = "undefined" != typeof d.success ? d.success : null;
                    a.extend(d, {
                        success: function(b, c, d) {
                            if (a.isFunction(i)) {
                                var j = i(b, c, d);
                                "string" == typeof j && (b = j)
                            }
                            e.html(b),
                            f.S(e).foundation("section", "reflow"),
                            f.S(e).children().foundation(),
                            h.length > 0 && f.hide(h, g.css.close),
                            f.show(e, g.css.open)
                        }
                    }),
                    a.ajax(d)
                } else
                    h.length > 0 && this.hide(h, g.css.close),
                    this.show(e, g.css.open)
            }
            f.S(b).trigger("resize")
        },
        close: function(a) {
            var a = a && a.length ? a : this.S(this.scope)
              , b = this.S("[" + this.attr_name() + "].open")
              , c = a.data(this.attr_name(!0) + "-init") || this.settings;
            b.length > 0 && (this.locked = !0,
            this.key_up_off(a),
            a.trigger("close").trigger("close.fndtn.reveal"),
            this.toggle_bg(a, !1),
            this.hide(b, c.css.close, c))
        },
        close_targets: function() {
            var a = "." + this.settings.dismiss_modal_class;
            return this.settings.close_on_background_click ? a + ", ." + this.settings.bg_class : a
        },
        toggle_bg: function(b, c, e) {
            var f = b.data(this.attr_name(!0) + "-init") || this.settings
              , g = f.bg_root_element;
            0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = a("<div />", {
                "class": this.settings.bg_class
            }).appendTo(g).hide());
            var h = this.settings.bg.filter(":visible").length > 0;
            e != h && ((e == d ? h : !e) ? this.hide(this.settings.bg) : this.show(this.settings.bg))
        },
        show: function(b, c) {
            if (c) {
                var d = b.data(this.attr_name(!0) + "-init") || this.settings
                  , f = d.root_element;
                if (0 === b.parent(f).length) {
                    var g = b.wrap('<div style="display: none;" />').parent();
                    b.on("closed.fndtn.reveal.wrapped", function() {
                        b.detach().appendTo(g),
                        b.unwrap().unbind("closed.fndtn.reveal.wrapped")
                    }),
                    b.detach().appendTo(f)
                }
                var h = e(d.animation);
                if (h.animate || (this.locked = !1),
                h.pop) {
                    c.top = a(f).scrollTop() - b.data("offset") + "px";
                    var i = {
                        top: a(f).scrollTop() + b.data("css-top") + "px",
                        opacity: 1
                    };
                    return setTimeout(function() {
                        return b.css(c).animate(i, d.animation_speed, "linear", function() {
                            this.locked = !1,
                            b.trigger("opened").trigger("opened.fndtn.reveal")
                        }
                        .bind(this)).addClass("open")
                    }
                    .bind(this), d.animation_speed / 2)
                }
                if (h.fade) {
                    c.top = a(f).scrollTop() + b.data("css-top") + "px";
                    var i = {
                        opacity: 1
                    };
                    return setTimeout(function() {
                        return b.css(c).animate(i, d.animation_speed, "linear", function() {
                            this.locked = !1,
                            b.trigger("opened").trigger("opened.fndtn.reveal")
                        }
                        .bind(this)).addClass("open")
                    }
                    .bind(this), d.animation_speed / 2)
                }
                return b.css(c).show().css({
                    opacity: 1
                }).addClass("open").trigger("opened").trigger("opened.fndtn.reveal")
            }
            var d = this.settings;
            return e(d.animation).fade ? b.fadeIn(d.animation_speed / 2) : (this.locked = !1,
            b.show())
        },
        hide: function(b, c) {
            if (c) {
                var d = b.data(this.attr_name(!0) + "-init") || this.settings
                  , f = d.root_element
                  , g = e(d.animation);
                if (g.animate || (this.locked = !1),
                g.pop) {
                    var h = {
                        top: -a(f).scrollTop() - b.data("offset") + "px",
                        opacity: 0
                    };
                    return setTimeout(function() {
                        return b.animate(h, d.animation_speed, "linear", function() {
                            this.locked = !1,
                            b.css(c).trigger("closed").trigger("closed.fndtn.reveal")
                        }
                        .bind(this)).removeClass("open")
                    }
                    .bind(this), d.animation_speed / 2)
                }
                if (g.fade) {
                    var h = {
                        opacity: 0
                    };
                    return setTimeout(function() {
                        return b.animate(h, d.animation_speed, "linear", function() {
                            this.locked = !1,
                            b.css(c).trigger("closed").trigger("closed.fndtn.reveal")
                        }
                        .bind(this)).removeClass("open")
                    }
                    .bind(this), d.animation_speed / 2)
                }
                return b.hide().css(c).removeClass("open").trigger("closed").trigger("closed.fndtn.reveal")
            }
            var d = this.settings;
            return e(d.animation).fade ? b.fadeOut(d.animation_speed / 2) : b.hide()
        },
        close_video: function(b) {
            var c = a(".flex-video", b.target)
              , d = a("iframe", c);
            d.length > 0 && (d.attr("data-src", d[0].src),
            d.attr("src", d.attr("src")),
            c.hide())
        },
        open_video: function(b) {
            var c = a(".flex-video", b.target)
              , e = c.find("iframe");
            if (e.length > 0) {
                var f = e.attr("data-src");
                if ("string" == typeof f)
                    e[0].src = e.attr("data-src");
                else {
                    var g = e[0].src;
                    e[0].src = d,
                    e[0].src = g
                }
                c.show()
            }
        },
        data_attr: function(a) {
            return this.namespace.length > 0 ? this.namespace + "-" + a : a
        },
        cache_offset: function(a) {
            var b = a.show().height() + parseInt(a.css("top"), 10);
            return a.hide(),
            b
        },
        off: function() {
            a(this.scope).off(".fndtn.reveal")
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b, c, d) {
    "use strict";
    Foundation.libs.tooltip = {
        name: "tooltip",
        version: "5.5.0",
        settings: {
            additional_inheritable_classes: [],
            tooltip_class: ".tooltip",
            append_to: "body",
            touch_close_text: "Tap To Close",
            disable_for_touch: !1,
            hover_delay: 200,
            show_on: "all",
            tip_template: function(a, b) {
                return '<span data-selector="' + a + '" id="' + a + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '" role="tooltip">' + b + '<span class="nub"></span></span>'
            }
        },
        cache: {},
        init: function(a, b, c) {
            Foundation.inherit(this, "random_str"),
            this.bindings(b, c)
        },
        should_show: function(b, c) {
            var d = a.extend({}, this.settings, this.data_options(b));
            return "all" === d.show_on ? !0 : this.small() && "small" === d.show_on ? !0 : this.medium() && "medium" === d.show_on ? !0 : this.large() && "large" === d.show_on ? !0 : !1
        },
        medium: function() {
            return matchMedia(Foundation.media_queries.medium).matches
        },
        large: function() {
            return matchMedia(Foundation.media_queries.large).matches
        },
        events: function(b) {
            var c = this
              , d = c.S;
            c.create(this.S(b)),
            a(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "]", function(b) {
                var e = d(this)
                  , f = a.extend({}, c.settings, c.data_options(e))
                  , g = !1;
                if (Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type) && d(b.target).is("a"))
                    return !1;
                if (/mouse/i.test(b.type) && c.ie_touch(b))
                    return !1;
                if (e.hasClass("open"))
                    Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type) && b.preventDefault(),
                    c.hide(e);
                else {
                    if (f.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type))
                        return;
                    !f.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type) && (b.preventDefault(),
                    d(f.tooltip_class + ".open").hide(),
                    g = !0),
                    /enter|over/i.test(b.type) ? this.timer = setTimeout(function() {
                        c.showTip(e)
                    }
                    .bind(this), c.settings.hover_delay) : "mouseout" === b.type || "mouseleave" === b.type ? (clearTimeout(this.timer),
                    c.hide(e)) : c.showTip(e)
                }
            }).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "].open", function(b) {
                return /mouse/i.test(b.type) && c.ie_touch(b) ? !1 : void (("touch" != a(this).data("tooltip-open-event-type") || "mouseleave" != b.type) && ("mouse" == a(this).data("tooltip-open-event-type") && /MSPointerDown|touchstart/i.test(b.type) ? c.convert_to_touch(a(this)) : c.hide(a(this))))
            }).on("DOMNodeRemoved DOMAttrModified", "[" + this.attr_name() + "]:not(a)", function(a) {
                c.hide(d(this))
            })
        },
        ie_touch: function(a) {
            return !1
        },
        showTip: function(a) {
            var b = this.getTip(a);
            return this.should_show(a, b) ? this.show(a) : void 0
        },
        getTip: function(b) {
            var c = this.selector(b)
              , d = a.extend({}, this.settings, this.data_options(b))
              , e = null;
            return c && (e = this.S('span[data-selector="' + c + '"]' + d.tooltip_class)),
            "object" == typeof e ? e : !1
        },
        selector: function(a) {
            var b = a.attr("id")
              , c = a.attr(this.attr_name()) || a.attr("data-selector");
            return (b && b.length < 1 || !b) && "string" != typeof c && (c = this.random_str(6),
            a.attr("data-selector", c).attr("aria-describedby", c)),
            b && b.length > 0 ? b : c
        },
        create: function(c) {
            var d = this
              , e = a.extend({}, this.settings, this.data_options(c))
              , f = this.settings.tip_template;
            "string" == typeof e.tip_template && b.hasOwnProperty(e.tip_template) && (f = b[e.tip_template]);
            var g = a(f(this.selector(c), a("<div></div>").html(c.attr("title")).html()))
              , h = this.inheritable_classes(c);
            g.addClass(h).appendTo(e.append_to),
            Modernizr.touch && (g.append('<span class="tap-to-close">' + e.touch_close_text + "</span>"),
            g.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", function(a) {
                d.hide(c)
            })),
            c.removeAttr("title").attr("title", "")
        },
        reposition: function(b, c, d) {
            var e, f, g, h, i;
            if (c.css("visibility", "hidden").show(),
            e = b.data("width"),
            f = c.children(".nub"),
            g = f.outerHeight(),
            h = f.outerHeight(),
            this.small() ? c.css({
                width: "100%"
            }) : c.css({
                width: e ? e : "auto"
            }),
            i = function(a, b, c, d, e, f) {
                return a.css({
                    top: b ? b : "auto",
                    bottom: d ? d : "auto",
                    left: e ? e : "auto",
                    right: c ? c : "auto"
                }).end()
            }
            ,
            i(c, b.offset().top + b.outerHeight() + 10, "auto", "auto", b.offset().left),
            this.small())
                i(c, b.offset().top + b.outerHeight() + 10, "auto", "auto", 12.5, a(this.scope).width()),
                c.addClass("tip-override"),
                i(f, -g, "auto", "auto", b.offset().left);
            else {
                var j = b.offset().left;
                Foundation.rtl && (f.addClass("rtl"),
                j = b.offset().left + b.outerWidth() - c.outerWidth()),
                i(c, b.offset().top + b.outerHeight() + 10, "auto", "auto", j),
                c.removeClass("tip-override"),
                d && d.indexOf("tip-top") > -1 ? (Foundation.rtl && f.addClass("rtl"),
                i(c, b.offset().top - c.outerHeight(), "auto", "auto", j).removeClass("tip-override")) : d && d.indexOf("tip-left") > -1 ? (i(c, b.offset().top + b.outerHeight() / 2 - c.outerHeight() / 2, "auto", "auto", b.offset().left - c.outerWidth() - g).removeClass("tip-override"),
                f.removeClass("rtl")) : d && d.indexOf("tip-right") > -1 && (i(c, b.offset().top + b.outerHeight() / 2 - c.outerHeight() / 2, "auto", "auto", b.offset().left + b.outerWidth() + g).removeClass("tip-override"),
                f.removeClass("rtl"))
            }
            c.css("visibility", "visible").hide()
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        inheritable_classes: function(b) {
            var c = a.extend({}, this.settings, this.data_options(b))
              , d = ["tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round"].concat(c.additional_inheritable_classes)
              , e = b.attr("class")
              , f = e ? a.map(e.split(" "), function(b, c) {
                return -1 !== a.inArray(b, d) ? b : void 0
            }).join(" ") : "";
            return a.trim(f)
        },
        convert_to_touch: function(b) {
            var c = this
              , d = c.getTip(b)
              , e = a.extend({}, c.settings, c.data_options(b));
            0 === d.find(".tap-to-close").length && (d.append('<span class="tap-to-close">' + e.touch_close_text + "</span>"),
            d.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose", function(a) {
                c.hide(b)
            })),
            b.data("tooltip-open-event-type", "touch")
        },
        show: function(a) {
            var b = this.getTip(a);
            "touch" == a.data("tooltip-open-event-type") && this.convert_to_touch(a),
            this.reposition(a, b, a.attr("class")),
            a.addClass("open"),
            b.fadeIn(150)
        },
        hide: function(a) {
            var b = this.getTip(a);
            b.fadeOut(150, function() {
                b.find(".tap-to-close").remove(),
                b.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"),
                a.removeClass("open")
            })
        },
        off: function() {
            var b = this;
            this.S(this.scope).off(".fndtn.tooltip"),
            this.S(this.settings.tooltip_class).each(function(c) {
                a("[" + b.attr_name() + "]").eq(c).attr("title", a(this).text())
            }).remove()
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a) {
    var b, c = {}, d = {};
    try {
        b = localStorage
    } catch (e) {}
    var f;
    b && b.getItem ? f = b.getItem("__browser_id__") : (f = document.cookie.match(/browser_id=(id\d+\.\d+);/),
    f && (f = f[1])),
    f || (f = "id" + Date.now() + Math.random(),
    b && b.setItem && b.setItem("__browser_id__", f)),
    document.cookie = "browser_id=" + f,
    a.TrinketIO = {
        "export": function(a, b) {
            for (var d = a.split("."), e = d.pop(), f = c, g = 0; g < d.length; g++)
                null == f[d[g]] && (f[d[g]] = {}),
                f = f[d[g]];
            if (f[e])
                throw new Error("Module " + a + " has already been defined!");
            return f[e] = b,
            b
        },
        "import": function(a) {
            for (var b = a.split("."), d = c, e = 0; e < b.length; e++)
                if (d = d[b[e]],
                null == d)
                    throw new Error("Module " + a + " could not be found!");
            return d
        },
        runtime: function(a, b) {
            return arguments.length > 1 && (d[a] = b),
            d[a]
        },
        clearRuntime: function() {
            d = {}
        }
    }
}(window),
function(a) {
    window.trinketConfig = {
        get: function(b) {
            return a[b]
        },
        prefix: function(b, c) {
            if ("/" !== b.charAt(0) && (b = "/" + b),
            a.testing)
                return b;
            if ("undefined" == typeof c) {
                var d = b.match(/\/(\w+)\//);
                d && (c = d[1])
            }
            return c && a.prefixes[c] ? "/" + a.prefixes[c] + b : "/" + a.cachePrefix + Date.now() + b
        },
        component: function(b, c) {
            return [a.vendorHost, b, a.components[b], c].join("/")
        },
        getUrl: function(b) {
            return "/" !== b.charAt(0) && (b = "/" + b),
            a.protocol + "://" + a.apphostname + b
        },
        getClassUrl: function(b, c) {
            var d = "/" + c;
            return a.usersubdomains ? "//" + b + "." + a.apphostname + d : "/u/" + b + "/classes" + d
        }
    }
}(window.trinket.config),
function(a, b) {
    "use strict";
    function c(a) {
        return new Function("o",'return "' + a.replace(/["\n\r\u2028\u2029]/g, function(a) {
            return e[a]
        }).replace(/\{\{([\s\S]+?)\}\}/g, '" + (o["$1"] !== undefined ? o["$1"] : "") + "') + '";')
    }
    function d(a, b) {
        return f[a] || (f[a] = c($("#" + a).text()),
        $("#" + a).remove()),
        f[a](b || {})
    }
    var e = {
        "\n": "\\n",
        '"': '\\"',
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    }
      , f = {};
    d.compile = c,
    b["export"]("utils.template", d)
}(window, window.TrinketIO),
function(a, b) {
    "use strict";
    function c() {
        return +new Date
    }
    function d(a) {
        return k + a
    }
    function e(a) {
        return l + a
    }
    function f(a, b) {
        var d = parseInt(m.getItem(e(a)), 10);
        return d && d < (b || c()) ? !0 : !1
    }
    function g(a, b, f) {
        if (m && a) {
            var g = e(a);
            if (f) {
                var h = 1e3 * f;
                m.setItem(g, c() + h)
            } else
                m.removeItem(g);
            return b = JSON.stringify(b),
            m.setItem(d(a), b)
        }
    }
    function h(a) {
        if (!m || !a)
            return null;
        if (f(a))
            return i(a),
            null;
        var b = m.getItem(d(a));
        if (b)
            try {
                return JSON.parse(b)
            } catch (c) {
                return null
            }
        return b
    }
    function i(a) {
        m && a && (m.removeItem(e(a)),
        m.removeItem(d(a)))
    }
    function j() {
        if (m) {
            var a, b, d = m.length, e = k, g = c();
            for (b = 0; d > b; b++)
                a = m.key(b),
                a && 0 === a.indexOf(e) && (a = a.substr(e.length),
                f(a, g) && i(a))
        }
    }
    var k = "__trinket__"
      , l = "__trinket_expire__"
      , m = function() {
        try {
            return a.localStorage.setItem(k, ""),
            a.localStorage.getItem(k),
            a.localStorage.removeItem(k),
            a.localStorage
        } catch (b) {
            return
        }
    }();
    b["export"]("utils.cache", {
        get: h,
        set: g,
        remove: i,
        purge: j
    })
}(window, window.TrinketIO),
$("document").ready(function() {
    function a(a) {
        return window.location.protocol + "//" + window.location.hostname + a
    }
    function b(a) {
        var b, d, e, f, g, h = a.split("="), i = "", j = !1;
        if (("console" === this.getType() || ("python3" === this.getType() || "python" === this.getType()) && "console" === this._queryString.runMode) && (j = !0),
        "code" === h[0] && h[1])
            if (i = decodeURIComponent(h[1]),
            "java" === this.getType() && (f = i.match(/^----\{(\w[\w\.\-]*)\}----\n/),
            f && (e = f[1],
            i = i.substring(i.indexOf("\n") + 1))),
            b = /\n----\{(\w[\w\.\-]*)\}----\n/,
            d = i.split(b),
            d.length > 1 || e) {
                if (e = e || this.getMainFile()) {
                    for (i = [{
                        name: e,
                        content: d.shift()
                    }],
                    j && (i[0].content = c(i[0].content)),
                    g = 0; g < d.length; g += 2)
                        i.push({
                            name: d[g],
                            content: "undefined" != typeof d[g + 1] && d[g + 1].length ? d[g + 1] : ""
                        });
                    i = JSON.stringify(i)
                }
            } else
                j && (i = c(i));
        return i
    }
    function c(a) {
        var b, c, d, e;
        return /^>>>/.test(a) && (b = [],
        c = a.split("\n"),
        c.forEach(function(a) {
            (d = /^(>>>|\.\.\.) /.exec(a)) && (e = a.substring(4, a.length),
            "..." === d[1] ? b[b.length - 1] += "\\n" + e : "undefined" != typeof e && e.length && b.push(e))
        }),
        a = b.join("\n")),
        a
    }
    function d(a) {
        if ("undefined" == typeof a || null === a)
            return null;
        if (a instanceof Array)
            for (var b = 0; b < a.length; b++)
                a[b] = d(a[b]);
        else if ("object" == typeof a)
            for (var b in a)
                a.hasOwnProperty(b) && (a[b] = d(a[b]));
        else
            "string" == typeof a && (a = _.unescape(a));
        return a
    }
    function e() {
        var a = {};
        if (window.location.search)
            for (var b = window.location.search.substr(1).split("&"), c = 0; c < b.length; c++) {
                var d = b[c].split("=");
                d[0] && "undefined" != typeof d[1] && (a[d[0]] = decodeURIComponent(d[1].replace(/\+/g, " ")),
                "true" === a[d[0]] && (a[d[0]] = !0),
                "false" === a[d[0]] && (a[d[0]] = !1))
            }
        return a
    }
    function f(a, b) {
        b && o.clearRuntime();
        var c = Object.keys(a);
        c.forEach(function(b) {
            o.runtime(b, a[b])
        })
    }
    function g(a, b) {
        return function(c, d, e) {
            var f = d ? n(d).serialize() : n("#accountForm").serialize()
              , g = d || "#accountForm";
            c.stopPropagation(),
            c.preventDefault(),
            n.ajax({
                type: "POST",
                url: a,
                data: f,
                success: n.proxy(b.onLoginComplete, b, g),
                dataType: "json"
            }),
            b.sendInterfaceAnalytics(this, e)
        }
    }
    function h(a, b, c) {
        var d = n.Deferred();
        return JSZipUtils.getBinaryContent(a, function(a, e) {
            a ? d.reject(a) : (c.file(b, e, {
                binary: !0
            }),
            d.resolve(e))
        }),
        d
    }
    function i(c, h) {
        var i, j, k = this, l = ["on", "off", "trigger", "once"], p = n("body").data("view-only");
        this._$ = n(this);
        for (var s = 0; s < l.length; s++) {
            var u = l[s];
            this[u] = n.proxy(this._$[u], this._$)
        }
        if (this.$shareModal = n("#shareModal"),
        this.$shareUrl = n("#shareUrl"),
        this.$embedModal = n("#embedModal"),
        this.$embedCode = n("#embedCode"),
        this.$emailModal = n("#emailModal"),
        this.$overlay = n("#content-overlay"),
        this.$resetModal = n("#confirmResetModal"),
        this.$upgradeModal = n("#upgradeModal"),
        this.$draftMessage = n("#draftMessage"),
        this.assignment = n("body").data("assignment"),
        o.runtime("mission-zero", n("body").data("mission-zero") || !1),
        this.$responsiveIndicators = n(".responsive-indicator"),
        n(document).on("click touchstart", ".menu-button", function(a) {
            var b = n(this).data("action")
              , c = "trinket." + b;
            if (!n(this).hasClass("disabled")) {
                if ("touchstart" === a.type)
                    n(this).addClass("touched");
                else if ("click" === a.type && n(this).hasClass("touched"))
                    return void n(this).removeClass("touched");
                n(this).trigger(c, {
                    action: b,
                    data: n(this).data("data")
                }),
                n(this).data("no-analytics") || k.sendInterfaceAnalytics(this)
            }
        }),
        n(document).on("trinket.sharing.share", n.proxy(this.onShareClick, this)),
        n(document).on("trinket.sharing.embed", n.proxy(this.onEmbedClick, this)),
        n(document).on("trinket.sharing.email", n.proxy(this.onEmailClick, this)),
        n(document).on("trinket.group.post", n.proxy(this.onGroupPostClick, this)),
        n(document).on("trinket.group.submit", n.proxy(this.onGroupSubmitClick, this)),
        n(document).on("trinket.library.add", n.proxy(this.onSaveClick, this)),
        n(document).on("trinket.code.save", n.proxy(this.onUpdateClick, this)),
        n(document).on("trinket.code.fontsize", n.proxy(this.onFontSizeClick, this)),
        n(document).on("trinket.view.gallery", n.proxy(this.onGalleryClick, this)),
        n(document).on("trinket.mode.fullscreen", n.proxy(this.onFullScreenClick, this)),
        n(document).on("trinket.mode.download", n.proxy(this.onDownloadClick, this)),
        n(document).on("trinket.mode.upload", n.proxy(this.onUploadClick, this)),
        n(document).on("trinket.menu.upgrade", n.proxy(this.onUpgradeClick, this)),
        n(document).on("trinket.open.link", n.proxy(this.onLinkClick, this)),
        n(document).on("trinket.code.reset", function() {
            k.$resetModal.foundation("reveal", "open")
        }),
        n(document).on("trinket.code.confirm-reset", n.proxy(this.onResetClick, this)),
        n(document).on("trinket.code.cancel-reset", function() {
            k.$resetModal.foundation("reveal", "close")
        }),
        n(document).on("trinket.code.settings", function() {
            n("#settingsModal").foundation("reveal", "open")
        }),
        n(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange", function(a) {
            var b = n(".trinket-content-wrapper").width()
              , c = n("#editor").width();
            c > b && n("#editor").css("width", .5 * b)
        }),
        n(document).on("trinket.sharing.social", function(b, c) {
            var d, e, f = !1;
            if (m && m.toolbox) {
                (k.isModified() || !k._trinket.id) && (d = Date.now(),
                e = k._trinket.code + k.getType(),
                n("#user").val() && (e += n("#user").val()),
                k._trinket.id && (e += k._trinket.id),
                e += d,
                k._trinket.shortCode = CryptoJS.SHA1(e).toString(CryptoJS.enc.Hex).substring(0, 10),
                f = !0);
                var g = k.getShareInfo(k._trinket)
                  , h = a(g.url);
                m.toolbox("#addthis", {}, {
                    url: h
                })
            }
            if (n(c.data).click(),
            f) {
                var i = {}
                  , j = k.serialize()
                  , l = function() {};
                j.shortCode = k._trinket.shortCode,
                j._timestamp = d,
                k._trinket.id ? k.fork(k._trinket, j, i, l) : k.create(j, i, l)
            }
        }),
        n(document).on("trinket.account.login", g("/api/users/login", this)),
        n(document).on("trinket.account.create", g("/api/users", this)),
        n("#brand").click(n.proxy(this.onLogoClick, this)),
        n("#shareUrl").click(n.proxy(this.onShareFocus, this)),
        n("#embedCode").click(n.proxy(this.onEmbedFocus, this)),
        n("#emailModalForm").submit(n.proxy(this.onSendEmailClick, this)),
        n(document).on("change", "input[data-trinket-settings]", n.proxy(this.settingsChange, this)),
        o.runtime("settingsModified", !1),
        t.init(),
        n("#version-toggle").change(function() {
            n(this).is(":checked") ? (k.reset(k._original),
            k._viewingOriginal(!1),
            n(".menu-button").not(".allow-original").removeClass("disabled")) : (n.extend(!0, k._original, k.serialize()),
            k.reset(k._original.original),
            k._viewingOriginal(!0),
            n(".menu-button").not(".allow-original").addClass("disabled"),
            n(".revert-remix").removeClass("disabled"))
        }),
        this._notification_open = !1,
        n("#notification-container").click(n.proxy(this.onNotificationClick, this)),
        m && m.addEventListener && m.addEventListener("addthis.menu.share", n.proxy(this.onSocialShare, this)),
        this._currentMode = "",
        this._updates = {},
        this._original = d(c),
        this._viewingDraft = !1,
        this._predraft = n.extend(!0, {}, this._original),
        h) {
            if (this._original_draft = d(h),
            ["code", "assets", "settings"].forEach(function(a) {
                k._original_draft[a] && (k._original[a] = k._original_draft[a],
                k._viewingDraft = !0,
                "settings" === a && f(k._original_draft[a] || {}))
            }),
            this._viewingDraft) {
                var v = r("draftTextTemplate", {
                    draftText: "Viewing Draft"
                });
                this.$draftMessage.html(v),
                n(".save-it").removeClass("disabled")
            }
        } else
            f(this._original.settings || {});
        if (this._queryString = e(),
        window.location.hash) {
            var w = window.location.href
              , x = b.call(this, w.substr(w.indexOf("#") + 1));
            x && (this._original.code = x)
        }
        this.setTrinket(this._original);
        try {
            window.sessionStorage
        } catch (y) {
            this._queryString.noStorage = !0
        }
        if (this._queryString.clearStorage) {
            this.generateGUID();
            try {
                window.sessionStorage && window.sessionStorage.removeItem(this.guid),
                q.remove(this.guid)
            } catch (y) {}
        }
        this._queryString.noStorage || this._queryString.outputOnly || (this.generateGUID(),
        this._queryString.autoRestore !== !1 && window.sessionStorage && window.sessionStorage.getItem(this.guid) ? (this._trinket.code = window.sessionStorage.getItem(this.guid),
        window.parent && window.parent.postMessage("autorestored", "*")) : (this._previousSession = q.get(this.guid)) && (q.remove(this.guid),
        this._queryString.autoRestore !== !1 ? (this._trinket.code = this._previousSession,
        window.parent && window.parent.postMessage("autorestored", "*")) : k.showRestoreMessage())),
        this.setUI(),
        "console" !== this.getType() && "guest" !== this.getUIType() && !this.assignment && !p && this._original && this._original.id && (i = !0),
        this.assignment && !p && (j = !0),
        i ? n(this).on("trinket.code.change", _.debounce(function() {
            n(".save-it").removeClass("disabled"),
            k.updateDraft()
        }, 1e3)) : j ? n(this).on("trinket.code.change", _.debounce(function() {
            n(".save-it").removeClass("disabled"),
            k.autoSave()
        }, 1e3)) : n(this).on("trinket.code.change", _.debounce(function() {
            k.updateSessionCache()
        }, 500)),
        this._queryString.externalInit || this.initialize(this._trinket),
        this.toggleUI(this.getUIType()),
        n(document).keydown(function(a) {
            k.hasOverlay && 27 === a.keyCode && k.hideAll()
        }),
        n(document).foundation({
            offcanvas: {
                close_on_click: !0
            },
            dropdown: {
                active_class: "open"
            }
        }),
        n(".left-off-canvas-toggle, .right-off-canvas-toggle").on("click", function() {}),
        n(document).on("close.fndtn.alert", function(a) {
            n("body").removeClass("has-status-bar")
        }),
        this.setFontSize(this._queryString.font || "1em"),
        this.parsedInstructions = "",
        n(document).on("click", "#edit-instructions-link", n.proxy(this.onEditInstructionsClick, this)),
        n(document).on("click", "#cancel-edit-instructions", n.proxy(this.onCancelEditInstructionsClick, this)),
        n(document).on("click", "#save-instructions", n.proxy(this.onSaveInstructionsClick, this)),
        k.serversideTimeoutDelay = k.hasRole("trinket-connect") ? 6e5 : 18e4
    }
    function j(a, b, c, d) {
        var e = r("statusMessageTemplate", {
            type: d || "success",
            message: a
        })
          , f = n(e);
        n("body").addClass("has-status-bar").append(f),
        b && f.find(".yep").on("click", b),
        c && f.find(".nope").on("click", c),
        n(document).foundation("alert", "reflow")
    }
    function k(a, b, c) {
        var d = !1
          , e = new RegExp("\\." + c)
          , f = new RegExp("import\\s*" + b)
          , g = new RegExp("from\\s*" + b + "\\s*import");
        return _.map(a, function(a, b) {
            b.match(e) && (a.match(f) || a.match(g)) && (d = !0)
        }),
        d
    }
    var l, m = window.addthis, n = window.jQuery, o = window.TrinketIO, p = 1728e3, q = o["import"]("utils.cache"), r = o["import"]("utils.template"), s = o["import"]("utils.selectText"), t = o["import"]("trinket.share"), u = o["import"]("trinket.roles"), v = "undefined" != typeof trinketMarkdown ? trinketMarkdown({}) : void 0;
    q.purge(),
    n.fn.serializeObject = function() {
        var a = {}
          , b = this.serializeArray();
        return n.each(b, function() {
            a[this.name] ? (a[this.name].push || (a[this.name] = [a[this.name]]),
            a[this.name].push(this.value || "")) : a[this.name] = this.value || ""
        }),
        a
    }
    ;
    if (n.extend(i.prototype, {
        showRestoreMessage: function() {
            var a, b, c, d = this;
            b = 'Do you want to restore your last session? <a title="restore the previous session" data-action="code.restore" class="text-link yep"><i class="fa fa-check"></i>&nbsp;Restore</a>&nbsp;&nbsp;or&nbsp;&nbsp;<a class="text-link nope"><i class="fa fa-trash"></i>&nbsp;Discard</a>',
            c = '<i class="fa fa-check-circle-o"></i>&nbsp;Your session has been restored. <a class="text-link yep"><i class="fa fa-thumbs-o-up">&nbsp;</i>Accept</a>&nbsp;&nbsp;or&nbsp;&nbsp;<a class="text-link nope"><i class="fa fa-undo"></i>&nbsp;Undo</a>',
            j(b, function() {
                n("#statusMessages .close").click(),
                a = d._trinket.code,
                d._trinket.code = d._previousSession,
                d.reset(d._trinket),
                n(d).trigger("trinket.code.change"),
                j(c, function() {
                    n("#statusMessages .close").click()
                }, function() {
                    n("#statusMessages .close").click(),
                    d._trinket.code = a,
                    d.reset(d._trinket),
                    n(d).trigger("trinket.code.change"),
                    d.showRestoreMessage()
                })
            }, function() {
                n("#statusMessages .close").click()
            })
        },
        initialize: function(a) {
            throw new Error("initialize is not implemented")
        },
        generateGUID: function() {
            var a;
            if (!this.guid) {
                var a = (this._trinket.id || JSON.stringify(this._trinket)) + (document.referrer || document.location);
                this.guid = CryptoJS.MD5(a).toString(CryptoJS.enc.Hex)
            }
        },
        getTour: function() {
            return []
        },
        startTour: function() {
            this.tour = this.getTour(),
            this.tour && this.tour.length && this.nextStop()
        },
        nextStop: function() {
            var a, b = this, c = b.tour, d = c ? c.shift() : null;
            if (prepareStop = function(c, d) {
                n(c).addClass("attention"),
                n(document).one("trinket." + d, function() {
                    n(c).removeClass("attention"),
                    0 === --a && b.nextStop()
                })
            }
            ,
            d) {
                d instanceof Array || (d = [d]),
                a = d.length;
                for (var e = 0; e < d.length; e++)
                    prepareStop(d[e].el, d[e].event)
            }
        },
        onFontSizeClick: function(a, b) {
            this.setFontSize(b && b.data)
        },
        onFullScreenClick: function(a, b) {
            var c = document
              , d = c.documentElement
              , e = d.requestFullscreen || d.msRequestFullscreen || d.mozRequestFullScreen || d.webkitRequestFullscreen
              , f = c.exitFullscreen || c.msExitFullscreen || c.mozCancelFullScreen || c.webkitExitFullscreen;
            try {
                if (!e || c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement || c.msFullscreenElement) {
                    if (!f)
                        throw new Error("fullscreen unavailable");
                    f.call(c),
                    this.sendInterfaceAnalytics(a.target, {
                        data: "exit"
                    })
                } else
                    e.call(d),
                    this.sendInterfaceAnalytics(a.target, {
                        data: "enter"
                    })
            } catch (g) {
                if (confirm("Your browser does not support fullscreen mode. Would you like to open this trinket in a new window?")) {
                    var h = window.location.href;
                    if (this.isModified()) {
                        var i = "code=" + window.encodeURIComponent(this.getValue());
                        h = h.indexOf("#") > 0 ? h.replace(h.substr(h.indexOf("#") + 1), i) : h + "#" + i
                    }
                    window.open(h)
                }
            }
        },
        onDownloadClick: function(a, b) {
            var c, d, e, f = this.downloadable(), g = this, i = new JSZip, l = [];
            n.each(f.assets, function(a, b) {
                c = /^data:image/.test(b.url) ? b.url : n("#proxy").val() + "/" + b.url,
                l.push(h(c, b.name, i))
            }),
            n.when.apply(n, l).done(function() {
                for (d in f.files)
                    i.file(d, f.files[d]);
                e = g.getTrinketIdentifier(),
                g._trinket && g._trinket.name && (e = g._trinket.name + "-" + e),
                e = "Trinket Download-" + e + ".zip",
                new JSZip.external.Promise(function(a, b) {
                    if (o.runtime("downloadExtra")) {
                        var c = n("#proxy").val() + "/" + o.runtime("downloadExtra");
                        JSZipUtils.getBinaryContent(c, function(c, d) {
                            c ? b(c) : a(d)
                        })
                    } else
                        a()
                }
                ).then(function(a) {
                    return a ? i.loadAsync(a) : void 0
                }).then(function() {
                    i.generateAsync({
                        type: "blob"
                    }).then(function(a) {
                        saveAs(a, e)
                    }, function(a) {
                        throw new Error("Could not generate download.")
                    })
                })
            }).done(function() {
                g.callAnalytics("Interaction", "Click", "Download"),
                k(f.files, "sense_hat", "py") && g.callAnalytics("Sense Hat Event", "Click", "Download")
            }).fail(function(a) {
                j(a, function() {
                    n("#statusMessages .close").click()
                }, function() {
                    n("#statusMessages .close").click()
                }, "alert")
            })
        },
        onUpgradeClick: function(a, b) {
            this.$upgradeModal.foundation("reveal", "open")
        },
        onLinkClick: function(b) {
            b.preventDefault(),
            window.open(a(n(b.target).data("href")))
        },
        setFontSize: function(a) {
            n(".trinket-content-wrapper").children().css("font-size", a || "1em")
        },
        setUI: function() {
            this._userId = n("#user").val(),
            this._userId ? this._trinket && this._trinket._owner === this._userId ? this._ui = "owner" : this._queryString.inLibrary ? this._ui = "library" : this._ui = "user" : this._ui = "guest"
        },
        toggleUI: function(a) {
            var b = this
              , c = r(a + "MenuTemplate");
            n("#userMenu").empty().append(c).foundation(),
            "guest" === a && (n("#login").click(g("/api/users/login", b)),
            n("#register").click(g("/api/users", b))),
            n(".ui-option").addClass("hide").filter("." + a + "-option").removeClass("hide")
        },
        getUIType: function() {
            return this._ui
        },
        getUserId: function() {
            return this._userId
        },
        hasPermission: function() {
            var a = Array.prototype.slice.call(arguments);
            return u.hasPermission.apply(this, a)
        },
        hasRole: function() {
            var a = Array.prototype.slice.call(arguments);
            return u.hasRole.apply(this, a)
        },
        triggerChange: function() {
            n(document).trigger("trinket.code.change"),
            this.trigger("trinket.code.change"),
            this.assignment && window.parent && window.parent.postMessage(this.serialize(), "*")
        },
        onLoginComplete: function(a, b, c, d) {
            var e = this;
            if (b && "success" === b.status) {
                var f = n(a + ' input[name="email"]').val();
                window.TrinketIO["import"]("debug.sessions").onLogin(f, b.data),
                this._ui = b.data.id === this._trinket._owner ? "owner" : "user",
                this.toggleUI(this._ui),
                n(document).trigger("trinket.account.success"),
                n("body").append("<input id='roles' type='hidden' value='" + b.data.roles + "'>"),
                "console" !== this.getType() && "guest" !== this.getUIType() && this._original && this._original.id && (n(this).off("trinket.code.change"),
                n(this).on("trinket.code.change", _.debounce(function() {
                    n(".save-it").removeClass("disabled"),
                    e.updateDraft()
                }, 1e3)));
                var g = "create-" + this.getType() + "-trinket"
                  , h = this.hasPermission(g) ? !1 : !0;
                "owner" === this._ui ? (n("a.create-remix").data("action", "code.save"),
                n("a.create-remix").attr("title", "Save changes."),
                n("a.create-remix").find("i").removeClass().addClass("fa fa-save"),
                n("a.create-remix").find("label").html("Save")) : h || n("a.create-remix").data("action", "library.add"),
                h || (n("a.create-copy").data("action", "library.add"),
                n("a.save-remix").data("action", "library.add"),
                n("a.revert-remix").data("action", "library.add"))
            } else
                b && b.flash && b.flash.validation ? n(a + " .message").addClass("error").text(b.flash.validation.email || b.flash.validation.password) : b && b.flash && b.flash.duplicates ? n(a + " .message").addClass("error").text("This email is already registered; try logging in.") : b && b.message ? n(a + " .message").addClass("error").text(b.message) : n(a + " .message").addClass("error").text("We were unable to log you in; please try again later.")
        },
        updateSessionCache: function() {
            var a = this
              , b = a.getValue();
            if (b === a._original.code)
                try {
                    window.sessionStorage && window.sessionStorage.removeItem(a.guid),
                    q.remove(a.guid)
                } catch (c) {}
            else
                try {
                    window.sessionStorage && window.sessionStorage.setItem(a.guid, b),
                    q.set(a.guid, b, p)
                } catch (c) {}
        },
        updateDraft: function() {
            var a = this;
            "BROADCASTING" !== window.TrinketAPI._receiverBroadcastState && a.$draftMessage.fadeOut("fast", function() {
                a.$draftMessage.text("Saving Draft").fadeIn("slow", function() {
                    a._updateDraft()
                })
            })
        },
        _updateDraft: function() {
            var a, b = this, c = b.serialize(), d = "/api/trinkets/" + b._original.id + "/draft";
            a = {
                code: c.code,
                assets: c.assets,
                settings: c.settings
            },
            n.post(d, a).done(function(a) {
                a.success && (b._viewingDraft = !0,
                b.$draftMessage.fadeOut("slow", function() {
                    var a = r("draftTextTemplate", {
                        draftText: "Draft Saved"
                    });
                    b.$draftMessage.html(a).fadeIn("slow")
                }))
            })
        },
        discardDraft: function(a) {
            var b = this
              , c = "/api/drafts/" + b._original.id;
            n.ajax({
                url: c,
                method: "DELETE"
            }).done(function(c) {
                c.success && (JSON.stringify(b._trinket.settings) !== JSON.stringify(b._predraft.settings) && (b.discardDraftSettings(),
                o.runtime("settingsModified", !1),
                b._original_draft && f(b._predraft.settings || {}, !0)),
                n("#confirmDiscardModal").foundation("reveal", "close"),
                b._original = n.extend(!0, {}, b._predraft),
                n(document).trigger("trinket.draft.discard"),
                n(b).trigger("trinket.draft.discard"),
                b.$draftMessage.fadeOut("fast", function() {
                    b.$draftMessage.empty(),
                    b._viewingDraft = !1,
                    n(".save-it").addClass("disabled")
                })),
                a()
            })
        },
        discardDraftSettings: function() {},
        _viewingOriginal: function(a) {
            return void 0 !== a && (this._viewingOriginalFlag = !!a,
            a ? n("body").addClass("viewing-original") : n("body").removeClass("viewing-original")),
            this._viewingOriginalFlag
        },
        autoSave: function() {
            var a, b = this, c = b.serialize(), d = "/api/trinkets/" + b._original.id + "/autosave";
            b.$draftMessage.fadeOut("fast", function() {
                b.$draftMessage.text("Saving ...").fadeIn("slow", function() {
                    a = {
                        code: c.code,
                        assets: c.assets,
                        settings: c.settings
                    },
                    n.post(d, a).done(function(a) {
                        a.success ? (b.$draftMessage.fadeOut("slow", function() {
                            b.$draftMessage.text("Saved").fadeIn("slow")
                        }),
                        n(b).trigger("trinket.code.autosave"),
                        b.assignment && window.parent && window.parent.postMessage("trinket.code.autosave", "*")) : b.$draftMessage.fadeOut("slow", function() {
                            b.$draftMessage.text("Error Saving").fadeIn("slow")
                        })
                    })
                })
            })
        },
        onSaveClick: function() {
            var a = Date.now();
            n("body").addClass("saving");
            var b = function() {
                var c = Date.now() - a;
                return 750 > c ? window.setTimeout(b, 750 - c) : void n("body").removeClass("saving")
            };
            this._original && this._original.id ? this._viewingOriginal() ? this.restore(b) : this._original.original ? this.save(void 0, b) : this.remix(b) : this.addToLibrary(b)
        },
        keys: function() {
            return this._keys || (this._keys = {
                code: 1,
                assets: 1,
                settings: 1
            })
        },
        restore: function(a) {
            var b = this
              , c = r("restoreOriginalModalTemplate", {})
              , d = n(c);
            remix = this._original,
            original = remix.original,
            n("body").append(d),
            d.foundation("reveal", "open"),
            d.on("close.fndtn.reveal", function() {
                a()
            }),
            d.find(".button").click(function() {
                var c, e, f = n(this).data("action"), g = {};
                if ("confirm" === f) {
                    d.off("close.fndtn.reveal");
                    for (c in b.keys())
                        g[c] = original[c],
                        "code" === c && (e = JSON.parse(g[c]),
                        e = e.map(function(a) {
                            return _.omit(a, "comments")
                        }),
                        g[c] = JSON.stringify(e));
                    n.extend(!0, remix, g),
                    n("#version-toggle").prop("checked", !0).change(),
                    window.setTimeout(function() {
                        b.save(void 0, a),
                        b.updateSessionCache()
                    })
                } else
                    a();
                d.foundation("reveal", "close"),
                d.remove()
            })
        },
        remix: function(a) {
            var b = this;
            b._createCopy("Remix", function(c) {
                n("body").addClass("has-remix"),
                c.original = b._original,
                b.setTrinket(c, !0),
                b.reset(c),
                "function" == typeof a && a()
            })
        },
        addToLibrary: function(a) {
            this._createCopy("Copy", function(b) {
                var c = r("statusMessageTemplate", {
                    type: "success",
                    message: 'A copy of this trinket has been saved for you. View or edit <a class="text-link" href="/library/trinkets/' + b.shortCode + '" target="_blank">your copy here</a>.'
                })
                  , d = n(c);
                n("body").addClass("has-status-bar").append(d),
                d.parent().foundation().trigger("open.fndtn.alert"),
                a && "function" == typeof a && a(b)
            })
        },
        _createCopy: function(a, b) {
            var c = this
              , d = c.serialize({
                removeComments: !0
            })
              , e = {
                library: !0
            }
              , f = c._original && c._original.id
              , g = function(d) {
                c.$overlay.addClass("hide"),
                b && "function" == typeof b && b(d),
                n(".save-it").addClass("disabled"),
                c.$draftMessage.fadeOut("slow", function() {
                    c.$draftMessage.empty(),
                    c._viewingDraft = !1
                }),
                c.callAnalytics("Interaction", a, "Library"),
                o.runtime("usingSenseHat") && c.callAnalytics("Sense Hat Event", a, "Library")
            };
            n("#statusMessages .close").click(),
            c.$overlay.removeClass("hide"),
            f && (d._origin_id = f),
            "Remix" == a && (d._remix = !0),
            c._trinket.id ? c.fork(c._trinket, d, e, g) : c.create(d, e, g)
        },
        getTrinket: function(a, b) {
            var c = this;
            return "function" == typeof a && (b = a,
            a = void 0),
            c.isModified() || !c._trinket.id ? c._trinket.id ? c.fork(c._trinket, c.serialize(), a, b) : c.create(c.serialize(), a, b) : setTimeout(function() {
                b(c._trinket)
            })
        },
        setTrinket: function(a, b) {
            b && (this._original = a),
            this._trinket = n.extend(!0, {}, a)
        },
        isModified: function() {
            var a = this.getValue()
              , b = a !== (this._trinket.code || "") || this.settingsModified();
            return b
        },
        settingsModified: function() {
            return o.runtime("settingsModified")
        },
        viewingDraft: function() {
            return this._viewingDraft
        },
        getType: function() {
            throw new Error("getType is not implemented")
        },
        getValue: function() {
            throw new Error("getValue is not implemented")
        },
        getMainFile: function() {
            return ""
        },
        getShareType: function() {
            return n("#shareType").val() || this.getType()
        },
        getTimeoutDelay: function() {
            return this.serversideTimeoutDelay
        },
        serialize: function(a) {
            return {
                code: this.getValue(a)
            }
        },
        fork: function(a, b, c, d) {
            var e = this
              , f = "/api/trinkets/" + a.id + "/forks";
            "function" == typeof c && (d = c,
            c = void 0),
            c && c.library && (f += "?library=true"),
            n.post(f, b).done(function(a) {
                e.setTrinket(a.data),
                n("#emailToken").val(""),
                e.postSave().then(function() {
                    "function" == typeof d && d(e._trinket)
                })
            })
        },
        create: function(a, b, c) {
            var d = this
              , e = "/api/trinkets";
            "function" == typeof b && (c = b,
            b = void 0),
            b && b.library && (e += "?library=true"),
            a.lang = this.getType(),
            n.post(e, a).done(function(a) {
                d.setTrinket(a.data),
                n("#emailToken").val(""),
                d.postSave().then(function() {
                    "function" == typeof c && c(d._trinket)
                })
            })
        },
        save: function(a, b) {
            var c = this
              , d = (new Date).getTime();
            a || (a = this.serialize()),
            c.$overlay.removeClass("hide"),
            n.ajax({
                url: "/api/trinkets/" + c._original.id + "/code",
                data: JSON.stringify(a),
                type: "PUT",
                contentType: "application/json"
            }).done(function(e) {
                n(".save-it").addClass("disabled"),
                c.$draftMessage.fadeOut("slow", function() {
                    c.$draftMessage.empty(),
                    c._viewingDraft = !1
                });
                var f = (new Date).getTime() - d;
                for (var g in a)
                    c._trinket[g] = a[g];
                c._original.original && (c._trinket.original = c._original.original),
                c._original = c._predraft = c._trinket,
                setTimeout(function() {
                    c.$overlay.addClass("hide")
                }, Math.max(0, 500 - f)),
                "function" == typeof b && b(),
                c.postSave()
            }).fail(function(a, c, d) {
                "function" == typeof b && b({
                    responseText: a.responseText,
                    status: c,
                    error: d
                })
            })
        },
        onResetClick: function(a) {
            var b = this;
            this.$resetModal.foundation("reveal", "close");
            var c = function() {
                b.setTrinket(b._original),
                b.reset(b._trinket),
                n(document).trigger("trinket.resetted")
            };
            this.viewingDraft() ? this.discardDraft(c) : c();
            try {
                window.sessionStorage && window.sessionStorage.removeItem(this.guid),
                q.remove(this.guid)
            } catch (d) {}
            window.parent && window.parent.postMessage("reset", "*"),
            this.callAnalytics("Interaction", "Click", "Reset"),
            o.runtime("usingSenseHat") && this.callAnalytics("Sense Hat Event", "Click", "Reset"),
            n(".file-name-error").length && n(".file-name-error").find(".close").trigger("click")
        },
        reset: function(a) {},
        clickReset: function() {
            n(document).trigger("trinket.code.reset")
        },
        focus: function() {},
        onUpdateClick: function() {
            this.save(this.serialize())
        },
        onShareClick: function(b) {
            var c = this
              , d = []
              , e = "";
            b.isDefaultPrevented() || c.getTrinket(function(b) {
                var f = c.getShareInfo(b)
                  , g = a(f.url);
                n("#runOptionLink").data("trinket-shortCode", b.shortCode),
                n("#runOptionLink").data("trinket-runMode", c.runMode),
                n("#displayOptionLink").data("trinket-shortCode", b.shortCode),
                n("#displayOptionLink").data("trinket-runMode", c.runMode),
                n("#displayOptionLink").val() && d.push(n("#displayOptionLink").val() + "=true"),
                n("#runOptionLink").val() && d.push("runOption=" + n("#runOptionLink").val()),
                c.runMode && d.push("runMode=" + c.runMode),
                d.length && (e = "?" + d.join("&")),
                g = g.replace(b.shortCode, b.shortCode + e),
                m && m.toolbox && m.toolbox("#addthis", {}, {
                    url: g
                }),
                c.$shareUrl.text(g),
                c.$shareModal.foundation("reveal", "open"),
                c.sendAnalytics("Navigation", {
                    action: "View Modal",
                    label: "share"
                }, {
                    name: "Snippet Modal Viewed",
                    modalType: "share"
                })
            })
        },
        onEmailClick: function(b) {
            var c = this;
            b.isDefaultPrevented() || c.getTrinket(function(b) {
                var d = c.getShareInfo(b)
                  , e = a(d.url);
                c.$shareUrl.text(e),
                c.$emailModal.foundation("reveal", "open"),
                c.sendAnalytics("Navigation", {
                    action: "View Modal",
                    label: "email"
                }, {
                    name: "Snippet Modal Viewed",
                    modalType: "email"
                })
            })
        },
        getShareInfo: function(a) {
            return {
                url: "/" + this.getShareType() + "/" + this.getTrinketIdentifier(a)
            }
        },
        onShareFocus: function(a) {
            s.byId("shareUrl"),
            this.updateMetric("linkShares"),
            this.sendAnalytics("Shares", {
                action: "Focus",
                label: "link"
            }, {
                name: "Snippet Shared",
                shareType: "link"
            })
        },
        onEmbedClick: function(b) {
            var c = this
              , d = []
              , e = "";
            b.isDefaultPrevented() || c.getTrinket(function(b) {
                var f = c.getEmbedInfo(b)
                  , g = a(f.url)
                  , h = '<iframe src="' + g + '" width="100%" height="' + (f.height || 356) + '" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>';
                n("#runOptionEmbed").data("trinket-shortCode", b.shortCode),
                n("#runOptionEmbed").data("trinket-runMode", c.runMode),
                n("#displayOptionEmbed").data("trinket-shortCode", b.shortCode),
                n("#displayOptionEmbed").data("trinket-runMode", c.runMode),
                n("#displayOptionEmbed").val() && d.push(n("#displayOptionEmbed").val() + "=true"),
                n("#runOptionEmbed").val() && d.push("runOption=" + n("#runOptionEmbed").val()),
                n("#autorunEmbedToggle").is(":checked") && d.push("start=result"),
                c.runMode && d.push("runMode=" + c.runMode),
                d.length && (e = "?" + d.join("&")),
                h = h.replace(b.shortCode, b.shortCode + e),
                c.$embedCode.text(h),
                c.$embedModal.foundation("reveal", "open"),
                c.sendAnalytics("Navigation", {
                    action: "View Modal",
                    label: "embed"
                }, {
                    name: "Snippet Modal Viewed",
                    modalType: "embed"
                })
            })
        },
        onGroupPostClick: function(a) {
            try {
                window.parent.groups.post(this.serialize())
            } catch (b) {
                console.log(b)
            }
        },
        onGroupSubmitClick: function(a) {
            try {
                window.parent.groups.submit(this.serialize())
            } catch (b) {
                console.log(b)
            }
        },
        getEmbedInfo: function(a) {
            var b = "/" + this.getTrinketIdentifier(a);
            return {
                url: "/embed/" + this.getType() + b,
                height: 356
            }
        },
        onEmbedFocus: function(a) {
            s.byId("embedCode"),
            this.updateMetric("embedShares"),
            this.sendAnalytics("Shares", {
                action: "Focus",
                label: "embed"
            }, {
                name: "Snippet Shared",
                shareType: "embed"
            })
        },
        updateMetric: function(a, b) {
            var c = n("body").data("no-metrics");
            if (a && !c && this._trinket && this._trinket.id) {
                if (b) {
                    var d = CryptoJS.MD5(b);
                    b = d.toString(CryptoJS.enc.Hex)
                } else
                    b = this._trinket.id;
                if (this._updates[a] || (this._updates[a] = {}),
                !this._updates[a][b]) {
                    this._updates[a][b] = !0;
                    var e = {};
                    e[a] = !0,
                    n.ajax({
                        url: "/api/trinkets/" + this._trinket.id + "/metrics",
                        type: "PUT",
                        dataType: "json",
                        data: e
                    })
                }
            }
        },
        onLogoClick: function(b) {
            var c = this;
            b.preventDefault(),
            c.getTrinket(function(b) {
                var d = c.getShareInfo(b);
                c.sendAnalytics("Navigation", {
                    action: "Click",
                    label: "Logo"
                }, {
                    name: "Snippet Logo Clicked"
                }),
                window.open(a(d.url))
            })
        },
        onGalleryClick: function(b) {
            b.preventDefault(),
            window.open(a("/gallery"))
        },
        onNotificationClick: function(a) {
            a.preventDefault();
            var b = this;
            this._notification_open ? n("#notification-content").animate({
                "margin-top": "-100%"
            }, 400, function() {
                b._notification_open = !1
            }) : n("#notification-content").animate({
                "margin-top": 0
            }, 400, function() {
                b._notification_open = !0,
                b.sendAnalytics("Navigation", {
                    action: "Click",
                    label: "Notification"
                }, {
                    name: "Snippet Notification Clicked"
                })
            })
        },
        onSendEmailClick: function(a) {
            var b = this;
            if (a.preventDefault(),
            n("#share-email").val() && n("#share-yourname").val() && n("#share-youremail").val())
                n(".close").click(),
                n("#sendEmail").attr("value", "Sending ..."),
                n("#sendEmail").addClass("disabled"),
                n.post("/api/trinkets/" + b._trinket.id + "/email", {
                    email: n("#share-email").val(),
                    name: n("#share-yourname").val(),
                    replyTo: n("#share-youremail").val(),
                    token: n("#emailToken").val()
                }).done(function(a) {
                    b.$emailModal.foundation("reveal", "close");
                    var c = '<div data-alert class="alert-box success"> Your email was sent! Thanks for sharing! <a href="#" class="close">&times;</a></div>';
                    n("#flashMessage").show(),
                    n("#flashContent").html(c),
                    n(document).foundation("alert"),
                    n("#share-email").val(""),
                    n("#sendEmail").attr("value", "Send"),
                    n("#sendEmail").removeClass("disabled"),
                    setTimeout(function() {
                        n("#flashMessage .close").trigger("click")
                    }, 3e3),
                    b.sendAnalytics("Shares", {
                        action: "Send Email"
                    }, {
                        name: "Snippet Email Sent"
                    })
                }).fail(function(a, b, c) {
                    var d = '<div data-alert class="alert-box warning"> There was a problem sending your email. Please try again later. <a href="#" class="close">&times;</a></div>';
                    n("#emailAlert").show().html(d),
                    n(document).foundation("alert")
                });
            else {
                var c = '<div data-alert class="alert-box warning"> Please complete all fields to send your email. <a href="#" class="close">&times;</a></div>';
                n("#emailAlert").show().html(c),
                n(document).foundation("alert")
            }
        },
        onSocialShare: function(a) {
            var b = a.data.service;
            this.sendAnalytics("Shares", {
                action: "Click Social",
                label: b
            }, {
                name: "Snippet Social Clicked",
                service: b
            })
        },
        getAnalyticsCategory: function() {
            return "Snippet"
        },
        sendInterfaceAnalytics: function(a, b) {
            b || (b = {});
            var c = n(a)
              , d = c.data("action") || b.action
              , e = c.data("data") || b.data
              , f = c.closest("[data-interface]").data("interface") || b["interface"]
              , g = c.data("library-override") || !1
              , h = this.$responsiveIndicators.filter(function(a) {
                return "none" !== n(this).css("display")
            }).data("size") || ""
              , i = [h, f, d.replace(/\./g, "-")];
            e && i.push(e),
            i = i.join(" ").replace(/[a-zA-Z0-9](?:[^\s\-\._]*)/g, function(a) {
                return a.charAt(0).toUpperCase() + a.substr(1)
            }),
            this.sendAnalytics("Interface", {
                action: i,
                label: this.getTrinketIdentifier()
            }, g)
        },
        sendAnalytics: function(a, b, c) {
            var d, e = this, f = e.getEmbedInfo(e._trinket), g = e._queryString && e._queryString.inLibrary;
            b = n.extend({
                category: "Embedded " + e.getAnalyticsCategory() + " " + a
            }, b, {
                data: {
                    page: f.url
                }
            }),
            d = ["send", "event", b.category, b.action],
            b.label && d.push(b.label),
            b.value && d.push(b.value),
            b.data && d.push(b.data),
            window.ga && !e._queryString.snapshot && (!g || g && c) && window.ga.apply(null, d)
        },
        callAnalytics: function(a, b, c) {
            this.sendAnalytics(a, {
                action: b,
                label: c
            })
        },
        logClientMetric: function(a) {
            try {
                a.lang = this.getType(),
                this._trinket && this._trinket.id && (a.trinketId = this._trinket.id),
                n.post("/api/trinkets/clientmetric", a).done(function() {})
            } catch (b) {}
        },
        toggleOverlay: function(a) {
            n(a).toggleClass("hide"),
            n(a).hasClass("hide") ? (this.hasOverlay = !1,
            this.onCloseOverlay()) : (this.hasOverlay = !0,
            this.onOpenOverlay())
        },
        closeOverlay: function(a) {
            n(a).addClass("hide"),
            this.hasOverlay = !1
        },
        closeAnyModal: function() {
            n(".close-reveal-modal").is(":visible") && n(".close-reveal-modal").click()
        },
        closeAnyMessage: function() {
            n(".close").is(":visible") && n(".close").click()
        },
        draggable: function(a) {
            var b = (n("#dragbar").width(),
            n("#editor"))
              , c = this;
            n(document).on("mousedown.dragbar", "#dragbar", function(d) {
                d.preventDefault();
                var e = n(".trinket-content-wrapper").width();
                n("#content-overlay").show(),
                c.dragging = !0;
                var f = n("<div>", {
                    id: "ghostbar",
                    css: {
                        height: b.outerHeight(),
                        top: b.offset().top,
                        left: b.offset().left
                    }
                }).appendTo("body");
                n(document).on("mousemove.dragbar", function(b) {
                    var c = b.pageX / e
                      , d = (e - b.pageX) / e;
                    c >= .3 && d >= .25 && (f.css("left", b.pageX + 2),
                    n("#editor").css("width", b.pageX + 2),
                    a && a())
                }),
                n(document).one("mouseup.dragbar", function(a) {
                    n("#content-overlay").hide(),
                    c.dragging && (n("#ghostbar").remove(),
                    n(document).off("mousemove.dragbar"),
                    c.dragging = !1)
                })
            })
        },
        toggleAll: function() {},
        onOpenOverlay: function() {},
        onCloseOverlay: function() {},
        postSave: function() {
            function a() {
                return b.resolve()
            }
            var b = n.Deferred()
              , c = this
              , d = c._trinket.shortCode;
            return c.saveClientSnapshot() ? (c.captureAndSaveSnapshot(function(b) {
                return b ? void n.post("/api/trinkets/" + d + "/snapshot", {
                    snapshotData: b
                }).done(a) : a()
            }),
            b) : a()
        },
        saveClientSnapshot: function() {
            return !1
        },
        isDirty: function() {
            return this._trinket ? !(this.getValue() === this._original.code) : !1
        },
        destroy: function() {
            this._trinket = void 0
        },
        getTrinketIdentifier: function(a) {
            return a || (a = this._trinket),
            a.shortCode ? a.shortCode : CryptoJS.MD5(a.code).toString(CryptoJS.enc.Hex)
        },
        getTrinketIdentifierOrNull: function() {
            var a = null;
            return this._trinket && (a = this._trinket.original ? this._trinket.original.shortCode : this._trinket.shortCode),
            a
        },
        logError: function(a) {
            a.lang = this.getType(),
            window.__experiment_name_errors_id && ("NameError" === a.type && (window.optimizely = window.optimizely || [],
            window.optimizely.push(["trackEvent", "PythonNameError"])),
            a.label = (a.label ? a.label + " " : "") + window.__experiment_name_errors_id),
            this._trinket && this._trinket.shortCode && (a.shortCode = this._trinket.shortCode),
            n.post("/api/trinkets/codeerror", a).done(function() {})
        },
        triggerRunModeChange: function() {
            n(document).trigger("trinket.runMode.change", {
                runMode: this.runMode
            }),
            this.trigger("trinket.runMode.change", {
                runMode: this.runMode
            })
        },
        settingsChange: function(a) {
            var b, c = n(a.target)[0].type;
            this._trinket.settings = n.extend(!0, {}, this._trinket.settings),
            "checkbox" === c ? b = n(a.target).is(":checked") : ("range" === c || "hidden" === c) && (b = n(a.target).val()),
            "undefined" != typeof b && (this._trinket.settings[a.target.id] = b,
            o.runtime("settingsModified", !0)),
            n(a.target).data("settings-action") && "function" == typeof this[n(a.target).data("settings-action")] && this[n(a.target).data("settings-action")](),
            n(a.target).data("skip-trigger") ? n(a.target).removeData("skip-trigger") : this.triggerChange()
        },
        showOutput: function() {
            n("#codeOutput").removeClass("hide"),
            n("#editor").addClass("hide"),
            this.closeOverlay("#modules"),
            n("#instructionsContainer").addClass("hide"),
            n("#outputContainer").removeClass("hide"),
            n("#codeOutputTab").addClass("active"),
            n("#instructionsTab").removeClass("active")
        },
        showInstructions: function() {
            n("#codeOutput").removeClass("hide"),
            n("#editor").addClass("hide"),
            this.closeOverlay("#modules"),
            this.parsedInstructions || this.displayInstructions(),
            n("#outputContainer").addClass("hide"),
            n("#blocklyCodeContainer").addClass("hide"),
            n("#instructionsContainer").removeClass("hide"),
            n("#codeViewTab").removeClass("active"),
            n("#codeOutputTab").removeClass("active"),
            n("#instructionsTab").addClass("active")
        },
        displayInstructions: function() {
            if ("undefined" != typeof v) {
                var a = this;
                a._trinket.description || "owner" !== a.getUIType() ? a.parsedInstructions = v(a._trinket.description) : a.parsedInstructions = r("addInstructionsTemplate"),
                n("#instructionsOutput").html(a.parsedInstructions),
                n("#instructionsActions").length && n("#instructionsActions").removeClass("hide")
            }
        },
        onEditInstructionsClick: function() {
            var a = this;
            n("#instructionsActions").addClass("hide"),
            n("#instructionsToolbar").removeClass("hide"),
            n("#instructionsContainer").addClass("editor"),
            a.parsedInstructions = r("editInstructionsTemplate"),
            n("#instructionsOutput").empty(),
            n("#instructionsContainer").append(a.parsedInstructions);
            var b = n("#instructionsContainer").height();
            l = ace.edit("embedded-instructions");
            var c = b - 65;
            n("#embedded-instructions").height(c + "px"),
            l.resize(),
            l.$blockScrolling = 1 / 0,
            l.setTheme("ace/theme/xcode"),
            l.getSession().setMode("ace/mode/markdown"),
            l.getSession().setUseSoftTabs(!0),
            l.getSession().setTabSize(2),
            l.setShowPrintMargin(!1),
            null !== a._trinket.description && a._trinket.description.length && l.getSession().setValue(a._trinket.description, -1)
        },
        onCancelEditInstructionsClick: function() {
            var a = this;
            n("#instructionsContainer").removeClass("editor"),
            n("#instructionsToolbar").addClass("hide"),
            n("#instructionsActions").removeClass("hide"),
            l && l.destroy(),
            n("#embedded-instructions").remove(),
            a.displayInstructions()
        },
        onSaveInstructionsClick: function(a) {
            var b = this
              , c = l.getValue();
            n("#save-instructions").find("i").removeClass().addClass("fa fa-circle-o-notch fa-spin"),
            n.ajax({
                url: "/api/trinkets/" + b._original.id + "/description",
                data: JSON.stringify({
                    description: c
                }),
                type: "PUT",
                contentType: "application/json"
            }).done(function(a) {
                setTimeout(function() {
                    n("#save-instructions").find("i").removeClass().addClass("fa fa-save"),
                    b._trinket.description = c,
                    n("#instructionsContainer").removeClass("editor"),
                    n("#instructionsToolbar").addClass("hide"),
                    n("#instructionsActions").removeClass("hide"),
                    l && l.destroy(),
                    n("#embedded-instructions").remove(),
                    b.displayInstructions()
                }, 500)
            }).fail(function(a, b, c) {})
        }
    }, window.TrinketAPI),
    window.TrinketApp = new i(window.trinketObject,window.draftObject),
    window.parent)
        if (window.TrinketApp._queryString && window.TrinketApp._queryString.inLibrary)
            window.parent.postMessage("TrinketApp ready", a(""));
        else if (window.TrinketApp.assignment) {
            window.parent.postMessage("TrinketApp ready", "*");
            var w = window.TrinketApp.serialize();
            w._initial = !0,
            window.parent.postMessage(w, "*")
        }
}),
function() {
    function a(a, b) {
        var c = window.TrinketIO["import"]("utils.cache")
          , d = c.get("user-log")
          , e = document.cookie.match(/session=([^;]+);/);
        a = a || $("#requestedLogin").val(),
        b = b || $("#whoami").val(),
        d || (d = {
            log: [],
            user: b
        }),
        d.log.push({
            time: Date.now(),
            user: b || "",
            requested: a || "",
            path: window.location.href,
            referrer: document.referrer,
            userAgent: navigator.userAgent,
            sesh: e ? e[1] : ""
        }),
        a && a !== b || !a && b && d.user !== b,
        d.user = b,
        d.log.length > 10 && (d.log = d.log.slice(d.log.length - 10)),
        c.set("user-log", d)
    }
    window.TrinketIO["export"]("debug.sessions", {
        onLogin: function(b, c) {
            (b === c.username || b === c.email) && (b = c.username),
            a(b, c.username)
        }
    }),
    $(function() {
        a()
    })
}(),
function(a, b) {
    "use strict";
    function c(a) {
        e(document.getElementById(a))
    }
    function d(a) {
        $("." + a).click(function(a) {
            e($(a.target)[0])
        })
    }
    function e(b) {
        if (document.selection) {
            var c = document.body.createTextRange();
            c.moveToElementText(b),
            c.select()
        } else if (a.getSelection) {
            var c = document.createRange();
            c.selectNodeContents(b),
            a.getSelection().removeAllRanges(),
            a.getSelection().addRange(c)
        }
    }
    b["export"]("utils.selectText", {
        byId: c,
        byClass: d
    })
}(window, window.TrinketIO),
function(a, b) {
    function c() {
        var b = {
            autorunEmbed: {
                paramName: "start",
                paramValue: "result"
            },
            hideGeneratedCodeEmbed: {
                paramName: "hideGeneratedCode",
                paramValue: "true"
            },
            showInstructionsEmbed: {
                paramName: "showInstructions",
                paramValue: "true"
            },
            showInstructionsShare: {
                paramName: "showInstructions",
                paramValue: "true"
            }
        };
        $("input:checkbox.checkboxToggle").change(function(a) {
            var c, d, f, g, h = $(a.target), i = $(h).val(), j = a.target.name, k = b[j].paramName, l = $("#" + i), m = l.text(), n = [], o = "";
            "shareUrl" === i ? (c = $("#displayOptionLink").data("trinket-shortCode"),
            d = new RegExp(c + ".*"),
            f = "") : (c = $("#displayOptionEmbed").data("trinket-shortCode"),
            d = new RegExp(c + '[^"]*"'),
            f = '"'),
            $(h).is(":checked") ? e[k] = b[j].paramValue : e[k] = "",
            e.runMode = $(h).prev().data("trinket-runMode") || "";
            for (var p in e)
                e[p] && n.push(p + "=" + e[p]);
            n.length && (o = "?" + n.join("&")),
            g = m.replace(d, c + o + f),
            l.text(g)
        }),
        $(":input.runOptions").change(function(b) {
            var c, d, f, g = $(b.target), h = $(g).data("type"), i = $(g).val(), j = $("#" + h), k = j.text(), l = $(g).data("trinket-shortCode"), m = [], n = "";
            "shareUrl" === h ? (c = new RegExp(l + ".*"),
            d = "") : (c = new RegExp(l + '[^"]*"'),
            d = '"'),
            e.runOption = i,
            e.runMode = $(g).data("trinket-runMode") || "";
            for (var o in e)
                e[o] && m.push(o + "=" + e[o]);
            m.length && (n = "?" + m.join("&")),
            f = k.replace(c, l + n + d),
            j.text(f),
            "shareUrl" === h && a.addthis && a.addthis.toolbox && a.addthis.toolbox("#addthis", {}, {
                url: f
            })
        }),
        $(":input.displayOptions").change(function(b) {
            var c, d, f, g = $(b.target), h = $(g).data("type"), i = $(g).val(), j = $("#" + h), k = j.text(), l = $(g).data("trinket-shortCode"), m = [], n = "";
            "shareUrl" === h ? (c = new RegExp(l + ".*"),
            d = "") : (c = new RegExp(l + '[^"]*"'),
            d = '"'),
            e.outputOnly = "",
            e.toggleCode = "",
            i && "undefined" != typeof e[i] && (e[i] = "true"),
            e.runMode = $(g).data("trinket-runMode") || "";
            for (var o in e)
                e[o] && m.push(o + "=" + e[o]);
            m.length && (n = "?" + m.join("&")),
            f = k.replace(c, l + n + d),
            j.text(f),
            "shareUrl" === h && a.addthis && a.addthis.toolbox && a.addthis.toolbox("#addthis", {}, {
                url: f
            })
        })
    }
    function d() {
        e = {
            outputOnly: "",
            toggleCode: "",
            runOption: "",
            start: "",
            runMode: "",
            hideGeneratedCode: "",
            showInstructions: ""
        }
    }
    var e;
    d(),
    b["export"]("trinket.share", {
        init: c,
        resetParams: d
    })
}(window, window.TrinketIO),
function(a) {
    function b() {
        if ("undefined" == typeof g && $("#roles").length && $("#roles").val().length)
            try {
                var a = $("#roles").val().split("+")
                  , b = a[0]
                  , c = a.slice(1).join("+")
                  , d = CryptoJS.AES.decrypt(c, b);
                g = JSON.parse(CryptoJS.enc.Utf8.stringify(d))
            } catch (c) {
                console.log("roles decrypt error:", c)
            }
    }
    function c(a, c, d) {
        b(),
        d = _.extend(d || {}),
        c || (c = "site"),
        d.id && (c = c + ":" + d.id);
        var e = _.find(g, function(a) {
            return a.context === c
        });
        return e && e.permissions.indexOf(a) >= 0 ? e.thru && e.thru[a] ? moment().isBefore(e.thru[a]) : !0 : !1
    }
    function d(a, c, d) {
        b(),
        d = _.extend(d || {}),
        c || (c = "site"),
        d.id && (c = c + ":" + d.id);
        var e = _.find(g, function(a) {
            return a.context === c
        });
        return e && e.roles.indexOf(a) >= 0 ? e.thru && e.thru[a] ? moment().isBefore(e.thru[a]) : !0 : !1
    }
    function e() {
        var a = !1
          , c = this;
        return b(),
        g && g.forEach(function(b) {
            /^group/.test(b.context) && c.hasRole("group-member", b.context) && (a = !0)
        }),
        a
    }
    function f(a) {
        var c = {};
        return b(),
        g && (c = _.find(g, function(b) {
            return b.context === a
        })),
        c
    }
    var g;
    a["export"]("trinket.roles", {
        hasPermission: c,
        hasRole: d,
        inGroup: e,
        getByContext: f
    })
}(window.TrinketIO),
function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, O = [].slice;
    a = jQuery,
    J = 0,
    K = 1,
    L = 2,
    A = 13,
    G = 9,
    x = 46,
    w = 8,
    C = 37,
    F = 39,
    H = 38,
    y = 40,
    B = 36,
    z = 35,
    E = 33,
    D = 34,
    j = "jqconsole-",
    e = j + "cursor",
    f = j + "header",
    k = j + "prompt",
    l = k + "-text",
    i = j + "old-prompt",
    g = j + "input",
    h = j + "old-input",
    d = j + "blurred",
    u = "keypress",
    r = "<span/>",
    p = "<div/>",
    q = ":empty",
    I = "\n",
    o = ">>> ",
    n = "... ",
    m = 2,
    c = j + "ansi-",
    s = "",
    t = /\[(\d*)(?:;(\d*))*m/,
    b = function() {
        function a() {
            this.stylize = N(this.stylize, this),
            this._closeSpan = N(this._closeSpan, this),
            this._openSpan = N(this._openSpan, this),
            this.getClasses = N(this.getClasses, this),
            this._style = N(this._style, this),
            this._color = N(this._color, this),
            this._remove = N(this._remove, this),
            this._append = N(this._append, this),
            this.klasses = []
        }
        return a.prototype.COLORS = ["black", "red", "green", "yellow", "blue", "magenta", "cyan", "white"],
        a.prototype._append = function(a) {
            return a = "" + c + a,
            -1 === this.klasses.indexOf(a) ? this.klasses.push(a) : void 0
        }
        ,
        a.prototype._remove = function() {
            var a, b, d, e, f, g;
            for (e = 1 <= arguments.length ? O.call(arguments, 0) : [],
            g = [],
            b = 0,
            f = e.length; f > b; b++)
                d = e[b],
                "fonts" === d || "color" === d || "background-color" === d ? g.push(this.klasses = function() {
                    var b, e, f, g;
                    for (f = this.klasses,
                    g = [],
                    b = 0,
                    e = f.length; e > b; b++)
                        a = f[b],
                        a.indexOf(d) !== c.length && g.push(a);
                    return g
                }
                .call(this)) : (d = "" + c + d,
                g.push(this.klasses = function() {
                    var b, c, e, f;
                    for (e = this.klasses,
                    f = [],
                    b = 0,
                    c = e.length; c > b; b++)
                        a = e[b],
                        a !== d && f.push(a);
                    return f
                }
                .call(this)));
            return g
        }
        ,
        a.prototype._color = function(a) {
            return this.COLORS[a]
        }
        ,
        a.prototype._style = function(a) {
            if ("" === a && (a = 0),
            a = parseInt(a),
            !isNaN(a))
                switch (a) {
                case 0:
                    return this.klasses = [];
                case 1:
                    return this._append("bold");
                case 2:
                    return this._append("lighter");
                case 3:
                    return this._append("italic");
                case 4:
                    return this._append("underline");
                case 5:
                    return this._append("blink");
                case 6:
                    return this._append("blink-rapid");
                case 8:
                    return this._append("hidden");
                case 9:
                    return this._append("line-through");
                case 10:
                    return this._remove("fonts");
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                    return this._remove("fonts"),
                    this._append("fonts-" + (a - 10));
                case 20:
                    return this._append("fraktur");
                case 21:
                    return this._remove("bold", "lighter");
                case 22:
                    return this._remove("bold", "lighter");
                case 23:
                    return this._remove("italic", "fraktur");
                case 24:
                    return this._remove("underline");
                case 25:
                    return this._remove("blink", "blink-rapid");
                case 28:
                    return this._remove("hidden");
                case 29:
                    return this._remove("line-through");
                case 30:
                case 31:
                case 32:
                case 33:
                case 34:
                case 35:
                case 36:
                case 37:
                    return this._remove("color"),
                    this._append("color-" + this._color(a - 30));
                case 39:
                    return this._remove("color");
                case 40:
                case 41:
                case 42:
                case 43:
                case 44:
                case 45:
                case 46:
                case 47:
                    return this._remove("background-color"),
                    this._append("background-color-" + this._color(a - 40));
                case 49:
                    return this._remove("background-color");
                case 51:
                    return this._append("framed");
                case 53:
                    return this._append("overline");
                case 54:
                    return this._remove("framed");
                case 55:
                    return this._remove("overline")
                }
        }
        ,
        a.prototype.getClasses = function() {
            return this.klasses.join(" ")
        }
        ,
        a.prototype._openSpan = function(a) {
            return '<span class="' + this.getClasses() + '">' + a
        }
        ,
        a.prototype._closeSpan = function(a) {
            return a + "</span>"
        }
        ,
        a.prototype.stylize = function(a) {
            var b, c, d, e, f, g;
            for (a = this._openSpan(a),
            d = 0; (d = a.indexOf(s, d)) && -1 !== d; )
                if (c = a.slice(d).match(t)) {
                    for (g = c.slice(1),
                    e = 0,
                    f = g.length; f > e; e++)
                        b = g[e],
                        this._style(b);
                    a = this._closeSpan(a.slice(0, d)) + this._openSpan(a.slice(d + 1 + c[0].length))
                } else
                    d++;
            return this._closeSpan(a)
        }
        ,
        a
    }(),
    M = function(a, b) {
        return '<span class="' + a + '">' + (b || "") + "</span>"
    }
    ,
    v = function() {
        function c(c, d, e, g, h) {
            null == h && (h = !1),
            this._HideComposition = N(this._HideComposition, this),
            this._ShowComposition = N(this._ShowComposition, this),
            this._UpdateComposition = N(this._UpdateComposition, this),
            this._EndComposition = N(this._EndComposition, this),
            this._StartComposition = N(this._StartComposition, this),
            this._CheckComposition = N(this._CheckComposition, this),
            this._ProcessMatch = N(this._ProcessMatch, this),
            this._HandleKey = N(this._HandleKey, this),
            this._HandleChar = N(this._HandleChar, this),
            this.isMobile = !!navigator.userAgent.match(/iPhone|iPad|iPod|Android/i),
            this.isIos = !!navigator.userAgent.match(/iPhone|iPad|iPod/i),
            this.isAndroid = !!navigator.userAgent.match(/Android/i),
            this.auto_focus = !h,
            this.$window = a(window),
            this.header = d || "",
            this.prompt_label_main = "string" == typeof e ? e : o,
            this.prompt_label_continue = g || n,
            this.indent_width = m,
            this.state = K,
            this.input_queue = [],
            this.input_callback = null,
            this.multiline_callback = null,
            this.history = [],
            this.history_index = 0,
            this.history_new = "",
            this.history_active = !1,
            this.shortcuts = {},
            this.$container = a("<div/>").appendTo(c),
            this.$container.css({
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                position: "absolute",
                overflow: "auto"
            }),
            this.$console = a('<pre class="jqconsole"/>').appendTo(this.$container),
            this.$console.css({
                margin: 0,
                position: "relative",
                "min-height": "100%",
                "box-sizing": "border-box",
                "-moz-box-sizing": "border-box",
                "-webkit-box-sizing": "border-box"
            }),
            this.$console_focused = !0,
            this.$input_container = a(p).appendTo(this.$container),
            this.$input_container.css({
                position: "absolute",
                width: 1,
                height: 0,
                overflow: "hidden"
            }),
            this.$input_source = a(this.isAndroid ? "<input/>" : "<textarea/>"),
            this.$input_source.attr({
                wrap: "off",
                autocapitalize: "off",
                autocorrect: "off",
                spellcheck: "false",
                autocomplete: "off"
            }),
            this.$input_source.css({
                position: "absolute",
                width: 2
            }),
            this.$input_source.appendTo(this.$input_container),
            this.$composition = a(p),
            this.$composition.addClass(j + "composition"),
            this.$composition.css({
                display: "inline",
                position: "relative"
            }),
            this.matchings = {
                openings: {},
                closings: {},
                clss: []
            },
            this.ansi = new b,
            this._InitPrompt(),
            this._SetupEvents(),
            this.Write(this.header, f),
            a(c).data("jqconsole", this)
        }
        return c.prototype.ResetHistory = function() {
            return this.SetHistory([])
        }
        ,
        c.prototype.ResetShortcuts = function() {
            return this.shortcuts = {}
        }
        ,
        c.prototype.ResetMatchings = function() {
            return this.matchings = {
                openings: {},
                closings: {},
                clss: []
            }
        }
        ,
        c.prototype.Reset = function() {
            this.state !== K && this.ClearPromptText(!0),
            this.state = K,
            this.input_queue = [],
            this.input_callback = null,
            this.multiline_callback = null,
            this.custom_control_key_handler = null,
            this.custom_keypress_handler = null,
            this.ResetHistory(),
            this.ResetShortcuts(),
            this.ResetMatchings(),
            this.$prompt.detach(),
            this.$input_container.detach(),
            this.$console.html(""),
            this.$prompt.appendTo(this.$console),
            this.$input_container.appendTo(this.$container),
            this.Write(this.header, f)
        }
        ,
        c.prototype.GetHistory = function() {
            return this.history
        }
        ,
        c.prototype.SetHistory = function(a) {
            return this.history = a.slice(),
            this.history_index = this.history.length
        }
        ,
        c.prototype._CheckKeyCode = function(a) {
            if (a = isNaN(a) ? a.charCodeAt(0) : parseInt(a, 10),
            !(a > 0 && 256 > a) || isNaN(a))
                throw new Error("Key code must be a number between 0 and 256 exclusive.");
            return a
        }
        ,
        c.prototype._LetterCaseHelper = function(a, b) {
            return b(a),
            a >= 65 && 90 >= a && b(a + 32),
            a >= 97 && 122 >= a ? b(a - 32) : void 0
        }
        ,
        c.prototype.RegisterShortcut = function(a, b) {
            var c;
            if (a = this._CheckKeyCode(a),
            "function" != typeof b)
                throw new Error("Callback must be a function, not " + b + ".");
            c = function(a) {
                return function(c) {
                    return c in a.shortcuts || (a.shortcuts[c] = []),
                    a.shortcuts[c].push(b)
                }
            }(this),
            this._LetterCaseHelper(a, c)
        }
        ,
        c.prototype.UnRegisterShortcut = function(a, b) {
            var c;
            a = this._CheckKeyCode(a),
            c = function(a) {
                return function(c) {
                    return c in a.shortcuts ? b ? a.shortcuts[c].splice(a.shortcuts[c].indexOf(b), 1) : delete a.shortcuts[c] : void 0
                }
            }(this),
            this._LetterCaseHelper(a, c)
        }
        ,
        c.prototype.GetColumn = function() {
            var a;
            return this.$prompt_right.detach(),
            this.$prompt_cursor.text(""),
            a = this.$console.text().split(I),
            this.$prompt_cursor.html("&nbsp;"),
            this.$prompt_cursor.after(this.$prompt_right),
            a[a.length - 1].length
        }
        ,
        c.prototype.GetLine = function() {
            return this.$console.text().split(I).length - 1
        }
        ,
        c.prototype.ClearPromptText = function(a) {
            if (this.state === K)
                throw new Error("ClearPromptText() is not allowed in output state.");
            this.$prompt_before.html(""),
            this.$prompt_after.html(""),
            this.$prompt_label.text(a ? "" : this._SelectPromptLabel(!1)),
            this.$prompt_left.text(""),
            this.$prompt_right.text("")
        }
        ,
        c.prototype.GetPromptText = function(b) {
            var c, d, e, f, g;
            if (this.state === K)
                throw new Error("GetPromptText() is not allowed in output state.");
            return b ? (this.$prompt_cursor.text(""),
            g = this.$prompt.text(),
            this.$prompt_cursor.html("&nbsp;"),
            g) : (f = function(b) {
                var c;
                return c = [],
                b.children().each(function() {
                    return c.push(a(this).children().last().text())
                }),
                c.join(I)
            }
            ,
            d = f(this.$prompt_before),
            d && (d += I),
            e = this.$prompt_left.text() + this.$prompt_right.text(),
            c = f(this.$prompt_after),
            c && (c = I + c),
            d + e + c)
        }
        ,
        c.prototype.SetPromptText = function(a) {
            if (this.state === K)
                throw new Error("SetPromptText() is not allowed in output state.");
            this.ClearPromptText(!1),
            this._AppendPromptText(a),
            this._ScrollToEnd()
        }
        ,
        c.prototype.SetPromptLabel = function(a, b) {
            this.prompt_label_main = a,
            null != b && (this.prompt_label_continue = b)
        }
        ,
        c.prototype.UpdatePromptLabel = function() {
            var a, b;
            return b = ">span+span>span:first-child",
            a = "." + k + b,
            this.$console.find(a).text(this.prompt_label_main)
        }
        ,
        c.prototype.Write = function(b, c, d) {
            var e;
            return null == d && (d = !0),
            d && (b = this.ansi.stylize(a(r).text(b).html())),
            e = a(r).html(b),
            null != c && e.addClass(c),
            this.Append(e)
        }
        ,
        c.prototype.Append = function(b) {
            var c;
            return c = a(b).insertBefore(this.$prompt),
            this._ScrollToEnd(),
            this.$prompt_cursor.detach().insertAfter(this.$prompt_left),
            c
        }
        ,
        c.prototype.Input = function(a) {
            var b, c, d, e;
            if (this.state === L)
                d = this.input_callback,
                e = this.multiline_callback,
                c = this.history_active,
                b = this.async_multiline,
                this.AbortPrompt(),
                this.input_queue.unshift(function(a) {
                    return function() {
                        return a.Prompt(c, d, e, b)
                    }
                }(this));
            else if (this.state !== K)
                return void this.input_queue.push(function(b) {
                    return function() {
                        return b.Input(a)
                    }
                }(this));
            this.history_active = !1,
            this.input_callback = a,
            this.multiline_callback = null,
            this.state = J,
            this.$prompt.attr("class", g),
            this.$prompt_label.text(this._SelectPromptLabel(!1)),
            this.Focus(),
            this._ScrollToEnd()
        }
        ,
        c.prototype.Prompt = function(a, b, c, d) {
            return this.state !== K ? void this.input_queue.push(function(e) {
                return function() {
                    return e.Prompt(a, b, c, d)
                }
            }(this)) : (this.history_active = a,
            this.input_callback = b,
            this.multiline_callback = c,
            this.async_multiline = d,
            this.state = L,
            this.$prompt.attr("class", k + " " + this.ansi.getClasses()),
            this.$prompt_label.text(this._SelectPromptLabel(!1)),
            this.auto_focus && this.Focus(),
            void this._ScrollToEnd())
        }
        ,
        c.prototype.AbortPrompt = function() {
            var a;
            if (this.state === K)
                throw new Error("Cannot abort prompt when not in prompt or input state.");
            a = this.GetPromptText(!0),
            this.state === J ? 0 !== a.trim().length && this.Write(a + I, h) : this.Write(a + I, i),
            this.ClearPromptText(!0),
            this.state = K,
            this.input_callback = this.multiline_callback = null,
            this._CheckInputQueue()
        }
        ,
        c.prototype.Focus = function() {
            this.IsDisabled() || this.$input_source.focus()
        }
        ,
        c.prototype.SetIndentWidth = function(a) {
            return this.indent_width = a
        }
        ,
        c.prototype.GetIndentWidth = function() {
            return this.indent_width
        }
        ,
        c.prototype.RegisterMatching = function(a, b, c) {
            var d;
            return d = {
                opening_char: a,
                closing_char: b,
                cls: c
            },
            this.matchings.clss.push(c),
            this.matchings.openings[a] = d,
            this.matchings.closings[b] = d
        }
        ,
        c.prototype.UnRegisterMatching = function(a, b) {
            var c;
            return c = this.matchings.openings[a].cls,
            delete this.matchings.openings[a],
            delete this.matchings.closings[b],
            this.matchings.clss.splice(this.matchings.clss.indexOf(c), 1)
        }
        ,
        c.prototype.Dump = function() {
            var b, c;
            return b = this.$console.find("." + f).nextUntil("." + k).addBack(),
            function() {
                var d, e, f;
                for (f = [],
                d = 0,
                e = b.length; e > d; d++)
                    c = b[d],
                    a(c).is("." + i) ? f.push(a(c).text().replace(/^\s+/, ">>> ")) : f.push(a(c).text());
                return f
            }().join("")
        }
        ,
        c.prototype.GetState = function() {
            return this.state === J ? "input" : this.state === K ? "output" : "prompt"
        }
        ,
        c.prototype.Disable = function() {
            return this.$input_source.attr("disabled", !0),
            this.$input_source.blur()
        }
        ,
        c.prototype.Enable = function() {
            return this.$input_source.attr("disabled", !1)
        }
        ,
        c.prototype.IsDisabled = function() {
            return Boolean(this.$input_source.attr("disabled"))
        }
        ,
        c.prototype.MoveToStart = function(a) {
            this._MoveTo(a, !0)
        }
        ,
        c.prototype.MoveToEnd = function(a) {
            this._MoveTo(a, !1)
        }
        ,
        c.prototype.Clear = function() {
            var a;
            return a = this.state === J ? g : k,
            this.$console.find("." + f).nextUntil("." + a).addBack().text(""),
            this.$prompt_cursor.detach(),
            this.$prompt_right.before(this.$prompt_cursor)
        }
        ,
        c.prototype._CheckInputQueue = function() {
            return this.input_queue.length ? this.input_queue.shift()() : void 0
        }
        ,
        c.prototype._InitPrompt = function() {
            return this.$prompt = a(M(g)).appendTo(this.$console),
            this.$prompt_before = a(r).appendTo(this.$prompt),
            this.$prompt_current = a(r).appendTo(this.$prompt),
            this.$prompt_after = a(r).appendTo(this.$prompt),
            this.$prompt_label = a(r).appendTo(this.$prompt_current),
            this.$prompt_left = a(r).appendTo(this.$prompt_current),
            this.$prompt_right = a(r).appendTo(this.$prompt_current),
            this.$prompt_right.css({
                position: "relative"
            }),
            this.$prompt_left.addClass(l),
            this.$prompt_cursor = a(M(e, "&nbsp;")),
            this.$prompt_cursor.insertBefore(this.$prompt_right),
            this.$prompt_cursor.css({
                color: "transparent",
                display: "inline",
                zIndex: 0
            }),
            this.isMobile ? void 0 : this.$prompt_cursor.css("position", "absolute")
        }
        ,
        c.prototype._SetupEvents = function() {
            return this.isMobile ? this.$console.click(function(a) {
                return function(b) {
                    return b.preventDefault(),
                    a.Focus()
                }
            }(this)) : this.$console.mouseup(function(a) {
                return function(b) {
                    var c;
                    return 2 === b.which ? a.Focus() : (c = function() {
                        return window.getSelection().toString() ? void 0 : (b.preventDefault(),
                        a.Focus())
                    }
                    ,
                    setTimeout(c, 0))
                }
            }(this)),
            this.$input_source.focus(function(a) {
                return function() {
                    var b, c;
                    return a._ScrollToEnd(),
                    a.$console_focused = !0,
                    a.$console.removeClass(d),
                    c = function() {
                        return a.$console_focused ? a.$console.removeClass(d) : void 0
                    }
                    ,
                    setTimeout(c, 100),
                    b = function() {
                        return a.isIos && a.$console_focused ? a.$input_source.hide() : void 0
                    }
                    ,
                    setTimeout(b, 500)
                }
            }(this)),
            this.$input_source.blur(function(a) {
                return function() {
                    var b;
                    return a.$console_focused = !1,
                    a.isIos && a.$input_source.show(),
                    b = function() {
                        return a.$console_focused ? void 0 : a.$console.addClass(d)
                    }
                    ,
                    setTimeout(b, 100)
                }
            }(this)),
            this.$input_source.bind("paste", function(a) {
                return function() {
                    var b;
                    return b = function() {
                        return a.in_composition ? void 0 : (a._AppendPromptText(a.$input_source.val()),
                        a.$input_source.val(""),
                        a.Focus())
                    }
                    ,
                    setTimeout(b, 0)
                }
            }(this)),
            this.$input_source.keypress(this._HandleChar),
            this.$input_source.keydown(this._HandleKey),
            this.$input_source.keydown(this._CheckComposition),
            this.$input_source.bind("compositionstart", this._StartComposition),
            this.$input_source.bind("compositionend", function(a) {
                return function(b) {
                    return setTimeout(function() {
                        return a._EndComposition(b)
                    }, 0)
                }
            }(this)),
            this.isAndroid ? (this.$input_source.bind("input", this._StartComposition),
            this.$input_source.bind("input", this._UpdateComposition)) : this.$input_source.bind("text", this._UpdateComposition)
        }
        ,
        c.prototype.SetKeyPressHandler = function(a) {
            return this.custom_keypress_handler = a
        }
        ,
        c.prototype.SetControlKeyHandler = function(a) {
            return this.custom_control_key_handler = a
        }
        ,
        c.prototype._HandleChar = function(a) {
            var b;
            return this.state === K || a.metaKey || a.ctrlKey ? !0 : (b = a.which,
            8 === b || 9 === b || 13 === b ? !1 : null != this.custom_keypress_handler && this.custom_keypress_handler.call(this, a) === !1 ? !1 : (this.$prompt_left.text(this.$prompt_left.text() + String.fromCharCode(b)),
            this._ScrollToEnd(),
            !1))
        }
        ,
        c.prototype._HandleKey = function(b) {
            var c;
            if (this.state === K)
                return !0;
            if (c = b.keyCode || b.which,
            setTimeout(a.proxy(this._CheckMatchings, this), 0),
            null != this.custom_control_key_handler && this.custom_control_key_handler.call(this, b) === !1)
                return !1;
            if (b.altKey)
                return !0;
            if (b.ctrlKey || b.metaKey)
                return this._HandleCtrlShortcut(c);
            if (b.shiftKey) {
                switch (c) {
                case A:
                    this._HandleEnter(!0);
                    break;
                case G:
                    this._Unindent();
                    break;
                case H:
                    this._MoveUp();
                    break;
                case y:
                    this._MoveDown();
                    break;
                case E:
                    this._ScrollPage("up");
                    break;
                case D:
                    this._ScrollPage("down");
                    break;
                default:
                    return !0
                }
                return !1
            }
            switch (c) {
            case A:
                this._HandleEnter(!1);
                break;
            case G:
                this._Indent();
                break;
            case x:
                this._Delete(!1);
                break;
            case w:
                this._Backspace(!1);
                break;
            case C:
                this._MoveLeft(!1);
                break;
            case F:
                this._MoveRight(!1);
                break;
            case H:
                this._HistoryPrevious();
                break;
            case y:
                this._HistoryNext();
                break;
            case B:
                this.MoveToStart(!1);
                break;
            case z:
                this.MoveToEnd(!1);
                break;
            case E:
                this._ScrollPage("up");
                break;
            case D:
                this._ScrollPage("down");
                break;
            default:
                return !0
            }
            return !1
        }
        ,
        c.prototype._HandleCtrlShortcut = function(a) {
            var b, c, d, e;
            switch (a) {
            case x:
                this._Delete(!0);
                break;
            case w:
                this._Backspace(!0);
                break;
            case C:
                this._MoveLeft(!0);
                break;
            case F:
                this._MoveRight(!0);
                break;
            case H:
                this._MoveUp();
                break;
            case y:
                this._MoveDown();
                break;
            case z:
                this.MoveToEnd(!0);
                break;
            case B:
                this.MoveToStart(!0);
                break;
            default:
                if (a in this.shortcuts) {
                    for (e = this.shortcuts[a],
                    c = 0,
                    d = e.length; d > c; c++)
                        b = e[c],
                        b.call(this);
                    return !1
                }
                return !0
            }
            return !1
        }
        ,
        c.prototype._HandleEnter = function(a) {
            var b, c;
            return this._EndComposition(),
            a ? this._InsertNewLine(!0) : (c = this.GetPromptText(),
            b = function(a) {
                return function(b) {
                    var d, e, f, g, h, i;
                    if (b !== !1) {
                        for (a.MoveToEnd(!0),
                        a._InsertNewLine(!0),
                        i = [],
                        d = g = 0,
                        h = Math.abs(b); h >= 0 ? h > g : g > h; d = h >= 0 ? ++g : --g)
                            b > 0 ? i.push(a._Indent()) : i.push(a._Unindent());
                        return i
                    }
                    return f = a.state === J ? "input" : "prompt",
                    a.Write(a.GetPromptText(!0) + I, j + "old-" + f),
                    a.ClearPromptText(!0),
                    a.history_active && (a.history.length && a.history[a.history.length - 1] === c || a.history.push(c),
                    a.history_index = a.history.length),
                    a.state = K,
                    e = a.input_callback,
                    a.input_callback = null,
                    e && e(c),
                    a._CheckInputQueue()
                }
            }(this),
            this.multiline_callback ? this.async_multiline ? this.multiline_callback(c, b) : b(this.multiline_callback(c)) : b(!1))
        }
        ,
        c.prototype._GetDirectionals = function(b) {
            var c, d, e, f, g, h, i, j;
            return f = b ? this.$prompt_left : this.$prompt_right,
            c = b ? this.$prompt_right : this.$prompt_left,
            e = b ? this.$prompt_before : this.$prompt_after,
            d = b ? this.$prompt_after : this.$prompt_before,
            h = b ? a.proxy(this.MoveToStart, this) : a.proxy(this.MoveToEnd, this),
            g = b ? a.proxy(this._MoveLeft, this) : a.proxy(this._MoveRight, this),
            j = b ? "last" : "first",
            i = b ? "prependTo" : "appendTo",
            {
                $prompt_which: f,
                $prompt_opposite: c,
                $prompt_relative: e,
                $prompt_rel_opposite: d,
                MoveToLimit: h,
                MoveDirection: g,
                which_end: j,
                where_append: i
            }
        }
        ,
        c.prototype._VerticalMove = function(a) {
            var b, c, d, e, f, g, h, i;
            return h = this._GetDirectionals(a),
            d = h.$prompt_which,
            b = h.$prompt_opposite,
            c = h.$prompt_relative,
            f = h.MoveToLimit,
            e = h.MoveDirection,
            c.is(q) ? void 0 : (g = this.$prompt_left.text().length,
            f(),
            e(),
            i = d.text(),
            b.text(a ? i.slice(g) : i.slice(0, g)),
            d.text(a ? i.slice(0, g) : i.slice(g)))
        }
        ,
        c.prototype._MoveUp = function() {
            return this._VerticalMove(!0)
        }
        ,
        c.prototype._MoveDown = function() {
            return this._VerticalMove()
        }
        ,
        c.prototype._HorizontalMove = function(b, c) {
            var d, e, f, g, h, i, j, k, l, m, n, o, p, s;
            if (k = this._GetDirectionals(c),
            h = k.$prompt_which,
            e = k.$prompt_opposite,
            g = k.$prompt_relative,
            f = k.$prompt_rel_opposite,
            p = k.which_end,
            o = k.where_append,
            l = c ? /\w*\W*$/ : /^\w*\W*/,
            m = h.text()) {
                if (b) {
                    if (s = m.match(l),
                    !s)
                        return;
                    return s = s[0],
                    n = e.text(),
                    e.text(c ? s + n : n + s),
                    j = s.length,
                    h.text(c ? m.slice(0, -j) : m.slice(j))
                }
                return n = e.text(),
                e.text(c ? m.slice(-1) + n : n + m[0]),
                h.text(c ? m.slice(0, -1) : m.slice(1))
            }
            return g.is(q) ? void 0 : (i = a(r)[o](f),
            i.append(a(r).text(this.$prompt_label.text())),
            i.append(a(r).text(e.text())),
            d = g.children()[p]().detach(),
            this.$prompt_label.text(d.children().first().text()),
            h.text(d.children().last().text()),
            e.text(""))
        }
        ,
        c.prototype._MoveLeft = function(a) {
            return this._HorizontalMove(a, !0)
        }
        ,
        c.prototype._MoveRight = function(a) {
            return this._HorizontalMove(a)
        }
        ,
        c.prototype._MoveTo = function(a, b) {
            var c, d, e, f, g, h, i;
            if (h = this._GetDirectionals(b),
            e = h.$prompt_which,
            c = h.$prompt_opposite,
            d = h.$prompt_relative,
            g = h.MoveToLimit,
            f = h.MoveDirection,
            a) {
                for (i = []; !d.is(q) || "" !== e.text(); )
                    g(!1),
                    i.push(f(!1));
                return i
            }
            return c.text(this.$prompt_left.text() + this.$prompt_right.text()),
            e.text("")
        }
        ,
        c.prototype._Delete = function(a) {
            var b, c, d;
            if (c = this.$prompt_right.text()) {
                if (a) {
                    if (d = c.match(/^\w*\W*/),
                    !d)
                        return;
                    return d = d[0],
                    this.$prompt_right.text(c.slice(d.length))
                }
                return this.$prompt_right.text(c.slice(1))
            }
            return this.$prompt_after.is(q) ? void 0 : (b = this.$prompt_after.children().first().detach(),
            this.$prompt_right.text(b.children().last().text()))
        }
        ,
        c.prototype._Backspace = function(b) {
            var c, d, e;
            if (setTimeout(a.proxy(this._ScrollToEnd, this), 0),
            d = this.$prompt_left.text()) {
                if (b) {
                    if (e = d.match(/\w*\W*$/),
                    !e)
                        return;
                    return e = e[0],
                    this.$prompt_left.text(d.slice(0, -e.length))
                }
                return this.isAndroid ? (this.$input_source.val(d.slice(0, -1)),
                this.$composition.text(d.slice(0, -1))) : this.$prompt_left.text(d.slice(0, -1))
            }
            return this.$prompt_before.is(q) ? void 0 : (c = this.$prompt_before.children().last().detach(),
            this.$prompt_label.text(c.children().first().text()),
            this.$prompt_left.text(c.children().last().text()))
        }
        ,
        c.prototype._Indent = function() {
            var a;
            return this.$prompt_left.prepend(function() {
                var b, c, d;
                for (d = [],
                a = b = 1,
                c = this.indent_width; c >= 1 ? c >= b : b >= c; a = c >= 1 ? ++b : --b)
                    d.push(" ");
                return d
            }
            .call(this).join(""))
        }
        ,
        c.prototype._Unindent = function() {
            var a, b, c, d, e;
            for (c = this.$prompt_left.text() + this.$prompt_right.text(),
            e = [],
            a = b = 1,
            d = this.indent_width; (d >= 1 ? d >= b : b >= d) && /^ /.test(c); a = d >= 1 ? ++b : --b)
                this.$prompt_left.text() ? this.$prompt_left.text(this.$prompt_left.text().slice(1)) : this.$prompt_right.text(this.$prompt_right.text().slice(1)),
                e.push(c = c.slice(1));
            return e
        }
        ,
        c.prototype._InsertNewLine = function(b) {
            var c, d, e;
            return null == b && (b = !1),
            e = this._SelectPromptLabel(!this.$prompt_before.is(q)),
            c = a(r).appendTo(this.$prompt_before),
            c.append(a(r).text(e)),
            c.append(a(r).addClass(l).text(this.$prompt_left.text())),
            this.$prompt_label.text(this._SelectPromptLabel(!0)),
            b && (d = this.$prompt_left.text().match(/^\s+/)) ? this.$prompt_left.text(d[0]) : this.$prompt_left.text(""),
            this._ScrollToEnd()
        }
        ,
        c.prototype._AppendPromptText = function(a) {
            var b, c, d, e, f, g;
            for (e = a.split(I),
            this.$prompt_left.text(this.$prompt_left.text() + e[0]),
            f = e.slice(1),
            g = [],
            b = 0,
            c = f.length; c > b; b++)
                d = f[b],
                this._InsertNewLine(),
                g.push(this.$prompt_left.text(d));
            return g
        }
        ,
        c.prototype._ScrollPage = function(a) {
            var b;
            return b = this.$container[0].scrollTop,
            "up" === a ? b -= this.$container.height() : b += this.$container.height(),
            this.$container.stop().animate({
                scrollTop: b
            }, "fast")
        }
        ,
        c.prototype._ScrollToEnd = function() {
            var a;
            return this.$container.scrollTop(this.$container[0].scrollHeight),
            a = this.$prompt_cursor.position(),
            this.$input_container.css({
                left: a.left,
                top: a.top
            }),
            this.auto_focus ? setTimeout(this.ScrollWindowToPrompt.bind(this), 50) : void 0
        }
        ,
        c.prototype.ScrollWindowToPrompt = function() {
            var a, b, c, d, e, f;
            if (b = this.$prompt_cursor.height(),
            f = this.$window.scrollTop(),
            e = this.$window.scrollLeft(),
            a = document.documentElement.clientHeight,
            d = this.$prompt_cursor.offset(),
            c = d.top - 2 * b,
            this.isMobile && "undefined" != typeof orientation && null !== orientation) {
                if (f < d.top || f > d.top)
                    return this.$window.scrollTop(c)
            } else {
                if (f + a < d.top)
                    return this.$window.scrollTop(d.top - a + b);
                if (f > c)
                    return this.$window.scrollTop(d.top)
            }
        }
        ,
        c.prototype._SelectPromptLabel = function(a) {
            return this.state === L ? a ? " \n" + this.prompt_label_continue : this.prompt_label_main : a ? "\n " : " "
        }
        ,
        c.prototype._Wrap = function(a, b, c) {
            var d, e;
            return e = a.html(),
            d = e.slice(0, b) + M(c, e[b]) + e.slice(b + 1),
            a.html(d)
        }
        ,
        c.prototype._WalkCharacters = function(a, b, c, d, e) {
            var f, g, h;
            for (g = e ? a.length : 0,
            a = a.split(""),
            h = function() {
                var b, c, d, f;
                return e ? (c = a,
                a = 2 <= c.length ? O.call(c, 0, b = c.length - 1) : (b = 0,
                []),
                f = c[b++]) : (d = a,
                f = d[0],
                a = 2 <= d.length ? O.call(d, 1) : []),
                f && (g += e ? -1 : 1),
                f
            }
            ; f = h(); )
                if (f === b ? d++ : f === c && d--,
                0 === d)
                    return {
                        index: g,
                        current_count: d
                    };
            return {
                index: -1,
                current_count: d
            }
        }
        ,
        c.prototype._ProcessMatch = function(b, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p;
            return m = c ? [b.closing_char, b.opening_char] : [b.opening_char, b.closing_char],
            h = m[0],
            l = m[1],
            n = this._GetDirectionals(c),
            g = n.$prompt_which,
            f = n.$prompt_relative,
            i = 1,
            j = !1,
            p = g.html(),
            c || (p = p.slice(1)),
            d && c && (p = p.slice(0, -1)),
            o = this._WalkCharacters(p, h, l, i, c),
            k = o.index,
            i = o.current_count,
            k > -1 ? (this._Wrap(g, k, b.cls),
            j = !0) : (e = f.children(),
            e = c ? Array.prototype.reverse.call(e) : e,
            e.each(function(d) {
                return function(e, f) {
                    var g, m;
                    return g = a(f).children().last(),
                    p = g.html(),
                    m = d._WalkCharacters(p, h, l, i, c),
                    k = m.index,
                    i = m.current_count,
                    k > -1 ? (c || k--,
                    d._Wrap(g, k, b.cls),
                    j = !0,
                    !1) : void 0
                }
            }(this))),
            j
        }
        ,
        c.prototype._CheckMatchings = function(b) {
            var c, d, e, f, g, h, i;
            for (e = b ? this.$prompt_left.text().slice(this.$prompt_left.text().length - 1) : this.$prompt_right.text()[0],
            i = this.matchings.clss,
            g = 0,
            h = i.length; h > g; g++)
                c = i[g],
                a("." + c, this.$console).contents().unwrap();
            if ((d = this.matchings.closings[e]) ? f = this._ProcessMatch(d, !0, b) : (d = this.matchings.openings[e]) ? f = this._ProcessMatch(d, !1, b) : b || this._CheckMatchings(!0),
            b) {
                if (f)
                    return this._Wrap(this.$prompt_left, this.$prompt_left.html().length - 1, d.cls)
            } else if (f)
                return this._Wrap(this.$prompt_right, 0, d.cls)
        }
        ,
        c.prototype._HistoryPrevious = function() {
            return !this.history_active || this.history_index <= 0 ? void 0 : (this.history_index === this.history.length && (this.history_new = this.GetPromptText()),
            this.SetPromptText(this.history[--this.history_index]))
        }
        ,
        c.prototype._HistoryNext = function() {
            return !this.history_active || this.history_index >= this.history.length ? void 0 : this.history_index === this.history.length - 1 ? (this.history_index++,
            this.SetPromptText(this.history_new)) : this.SetPromptText(this.history[++this.history_index])
        }
        ,
        c.prototype._CheckComposition = function(a) {
            var b;
            return b = a.keyCode || a.which,
            229 === b ? this.in_composition ? this._UpdateComposition() : this._StartComposition() : void 0
        }
        ,
        c.prototype._StartComposition = function() {
            return this.in_composition ? void 0 : (this.in_composition = !0,
            this._ShowComposition(),
            setTimeout(this._UpdateComposition, 0))
        }
        ,
        c.prototype._EndComposition = function() {
            return this.in_composition ? (this._HideComposition(),
            this.$prompt_left.text(this.$prompt_left.text() + this.$composition.text()),
            this.$composition.text(""),
            this.$input_source.val(""),
            this.in_composition = !1) : void 0
        }
        ,
        c.prototype._UpdateComposition = function(a) {
            var b;
            return b = function(a) {
                return function() {
                    return a.in_composition ? a.$composition.text(a.$input_source.val()) : void 0
                }
            }(this),
            setTimeout(b, 0)
        }
        ,
        c.prototype._ShowComposition = function() {
            return this.$composition.css("height", this.$prompt_cursor.height()),
            this.$composition.empty(),
            this.$composition.appendTo(this.$prompt_left)
        }
        ,
        c.prototype._HideComposition = function() {
            return this.$composition.detach()
        }
        ,
        c
    }(),
    a.fn.jqconsole = function(a, b, c, d) {
        return new v(this,a,b,c,d)
    }
    ,
    a.fn.jqconsole.JQConsole = v,
    a.fn.jqconsole.Ansi = b
}
.call(this),
function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.Pygame = b()
}(this, function() {
    "use strict";
    function a() {
        throw new Sk.builtin.NotImplementedError("this function is not implemented in Sklupt")
    }
    function b(a) {
        return a
    }
    function c() {
        var a;
        return this instanceof c ? void Sk.builtin.StandardError.apply(this, arguments) : (a = Object.create(c.prototype),
        a.constructor.apply(a, arguments),
        a)
    }
    function d(a) {
        return Sk.builtin.pyCheckArgs("get_height", arguments, 1, 1, !1, !1),
        a.height
    }
    function e(a) {
        return Sk.builtin.pyCheckArgs("get_width", arguments, 1, 1, !1, !1),
        a.width
    }
    function f(a) {
        return Sk.builtin.pyCheckArgs("get_size", arguments, 1, 1, !1, !1),
        Sk.builtin.tuple([a.width, a.height])
    }
    function g() {
        return Sk.builtin.pyCheckArgs("get_flags", arguments, 1, 1, !1, !1),
        new Sk.builtin.int_(0)
    }
    function h(a) {
        return a.Surface = P(a),
        a.Surface.$isclass = !0,
        a
    }
    function i() {
        if (!Q)
            throw new c("video system not initialized")
    }
    function j() {
        Q = !0
    }
    function k() {
        Q = !1
    }
    function l(a) {
        return function(b) {
            var c = s(a, b)
              , d = S.reduce(function(a, b) {
                return a || b(c)
            }, !1);
            !d && m(c) && T.push(c)
        }
    }
    function m(a) {
        return V.size > 0 ? X(a, Array.from(V)) : U.size > 0 ? !X(a, Array.from(U)) : !0
    }
    function n() {
        S.length = 0
    }
    function o() {
        return Z.Event = I(Z),
        Z.Event.$isclass = !0,
        Z
    }
    function p(a, b) {
        var c = function(b, c) {
            return da = ("keyup" === a ? function(a, b) {
                return a - b
            }
            : function(a, b) {
                return a + b
            }
            )(b, c)
        };
        switch (b.code) {
        case "ShiftLeft":
            return ea(b, c(da, 1));
        case "ShiftRight":
            return ea(b, c(da, 2));
        case "ControlRight":
            return ea(b, c(da, 64));
        case "ControlLeft":
            return ea(b, c(da, 128));
        case "AltRight":
            return ea(b, c(da, 256));
        case "AltLeft":
            return ea(b, c(da, 512));
        case "MetaRight":
            return ea(b, c(da, 1024));
        case "MetaLeft":
            return ea(b, c(da, 2048));
        default:
            return ea(b, da)
        }
    }
    function q(a) {
        var b = $[Object.keys($).find(function(b) {
            return $[b] === a
        })];
        return b && _.hasOwnProperty(b) ? _[b] : "Unknown"
    }
    function r(a) {
        if (!a.code) {
            var b = fa[[a.key.toLowerCase(), a.keyCode, a.location].toString()];
            b && (a.code = b)
        }
        return a
    }
    function s(a, b) {
        return b = r(b),
        Sk.misceval.callsimOrSuspend(o().Event, Sk.ffi.remapToPy(aa[a]), Sk.ffi.remapToPy({
            unicode: 1 === b.key.length ? b.key : "",
            key: ba[b.code],
            scancode: ca[b.code] || 0,
            mod: p(a, b)
        }))
    }
    function t() {
        da = 0
    }
    function u(a) {
        if ("function" == typeof a)
            return function() {
                return u(a())
            }
            ;
        var b = {};
        for (var c in a)
            a[c].$isclass ? (b[c] = a[c],
            delete b[c].$isclass) : b[c] = Sk.ffi.remapToPy(a[c]);
        return b
    }
    function v(a) {
        var b = new Sk.builtin.module;
        return b.$d = u(a),
        b
    }
    function w(a, b) {
        var c = {};
        return Object.keys(b).filter(function(a) {
            return "_" !== a[0]
        }).forEach(function(a) {
            return c[a] = b[a]
        }),
        K(a, c)
    }
    function x(a, b) {
        ga.listeners = ga.listeners || {},
        ga.listeners[a] = ga.listeners[a] || [],
        ga.listeners[a].push(b)
    }
    function y(a) {
        return function(b) {
            return function(c) {
                a(c) && b(c)
            }
        }
    }
    function z(a, b, c) {
        var d = l(b)
          , e = a(d);
        if (c)
            c(e);
        else {
            var f = ha(b, d.name);
            f || (x(b, d.name),
            ga.addEventListener(b, e))
        }
    }
    function A(a, b, c) {
        z(a, "keyup", c),
        z(a, "keydown", b)
    }
    function B(a) {
        return a.display = v(R(a.Surface, ga)),
        a
    }
    if ("function" == typeof require) {
        var C = require("fs")
          , D = C.readFileSync("bower_components/skulpt/skulpt.min.js").toString();
        (1,
        eval)(D)
    }
    var E = function(a, b, c) {
        return Sk.builtin.pyCheckArgs("__init__", arguments, 2, 3, !1, !1),
        Sk.abstr.sattr(a, "dict", c ? c : new Sk.builtin.dict, !1),
        Sk.abstr.sattr(a, "type", b, !1),
        Sk.builtin.none.none$
    };
    E.co_name = new Sk.builtins.str("__init__"),
    E.co_varnames = ["self", "type", "dict"];
    var F = function(a) {
        var b = Sk.ffi.remapToJs(Sk.abstr.gattr(a, "dict", !1).$r())
          , c = Sk.ffi.remapToJs(Sk.abstr.gattr(a, "type", !1).$r());
        return Sk.ffi.remapToPy("<Event(" + c + "-" + q(parseInt(c, 10)) + " " + b + ")>")
    };
    F.co_name = new Sk.builtins.str("__repr__"),
    F.co_varnames = ["self"];
    var G = function(a, b) {
        Sk.builtin.pyCheckArgs("__getattr__", arguments, 2, 2, !1, !1);
        var c = Sk.abstr.gattr(a, "dict", !1);
        return c.mp$subscript(b)
    };
    F.co_name = new Sk.builtins.str("__getattr__"),
    F.co_varnames = ["self", "attr"];
    var H = function(a, b) {
        b.__init__ = new Sk.builtins["function"](E,a),
        b.__repr__ = new Sk.builtins["function"](F,a),
        b.__getattr__ = new Sk.builtins["function"](G,a)
    };
    H.co_name = new Sk.builtins.str("Event");
    var I = function(a) {
        return Sk.misceval.buildClass(a, H, "Event", [])
    };
    Sk.abstr.setUpInheritance("pygame.error", c, Sk.builtin.StandardError);
    var J = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
        return typeof a
    }
    : function(a) {
        return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
    }
      , K = Object.assign || function(a) {
        for (var b = 1; b < arguments.length; b++) {
            var c = arguments[b];
            for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
        }
        return a
    }
      , L = function() {
        function a(a, b) {
            var c = []
              , d = !0
              , e = !1
              , f = void 0;
            try {
                for (var g, h = a[Symbol.iterator](); !(d = (g = h.next()).done) && (c.push(g.value),
                !b || c.length !== b); d = !0)
                    ;
            } catch (i) {
                e = !0,
                f = i
            } finally {
                try {
                    !d && h["return"] && h["return"]()
                } finally {
                    if (e)
                        throw f
                }
            }
            return c
        }
        return function(b, c) {
            if (Array.isArray(b))
                return b;
            if (Symbol.iterator in Object(b))
                return a(b, c);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
      , M = function(a, b) {
        Sk.builtin.pyCheckArgs("__init__", arguments, 2, 5, !1, !1);
        var d = Sk.ffi.remapToJs(b)
          , e = L(d, 2);
        if (a.width = e[0],
        a.height = e[1],
        a.width < 0 || a.height < 0)
            throw new c("Invalid resolution for Surface");
        return Sk.builtin.none.none$
    };
    M.co_name = new Sk.builtins.str("__init__"),
    M.co_varnames = ["self", "size", "flags", "depth", "masks"],
    M.$defaults = [new Sk.builtin.int_(0), new Sk.builtin.int_(0), Sk.builtin.none.none$];
    var N = function(a) {
        var b = Sk.ffi.remapToJs(a.width)
          , c = Sk.ffi.remapToJs(a.height);
        return Sk.ffi.remapToPy("<Surface(" + b + "x" + c + "x32 SW)>")
    };
    N.co_name = new Sk.builtins.str("__repr__"),
    N.co_varnames = ["self"],
    d.co_name = new Sk.builtins.str("get_height"),
    d.co_varnames = ["self"],
    e.co_name = new Sk.builtins.str("get_width"),
    e.co_varnames = ["self"],
    f.co_name = new Sk.builtins.str("get_size"),
    f.co_varnames = ["self"],
    g.co_name = new Sk.builtins.str("get_flags"),
    g.co_varnames = ["self"];
    var O = function(a, b) {
        b.__init__ = new Sk.builtins["function"](M,a),
        b.__repr__ = new Sk.builtins["function"](N,a),
        b.get_width = new Sk.builtins["function"](e,a),
        b.get_height = new Sk.builtins["function"](d,a),
        b.get_size = new Sk.builtins["function"](f,a),
        b.get_flags = new Sk.builtins["function"](g,a)
    };
    O.co_name = new Sk.builtins.str("Surface");
    var P = function(a) {
        return Sk.misceval.buildClass(a, O, "Surface", [])
    }
      , Q = !1
      , R = function(c, d) {
        return {
            __doc__: "pygame module to control the display window and screen",
            __name__: "pygame.display",
            __package__: Sk.builtin.none.none$,
            __PYGAMEinit__: a,
            quit: b(Sk.builtin.none.none$),
            init: function() {
                return j(),
                Sk.builtin.none.none$
            },
            update: b(Sk.builtin.none.none$),
            set_mode: function(a) {
                j();
                var b = a ? a : new Sk.builtin.tuple([d.innerWidth, d.innerHeight]);
                return Sk.misceval.callsim(c, b)
            },
            get_init: function() {
                return Sk.ffi.remapToPy(Q)
            },
            get_caption: a,
            mode_ok: a,
            set_icon: a,
            get_active: a,
            iconify: a,
            set_gamma: a,
            set_palette: a,
            get_wm_info: a,
            set_gamma_ramp: a,
            Info: a,
            get_surface: a,
            toggle_fullscreen: a,
            get_driver: a,
            set_caption: a,
            flip: a,
            _PYGAME_C_API: a,
            gl_get_attribute: a,
            gl_set_attribute: a,
            list_modes: a
        }
    }
      , S = []
      , T = []
      , U = new Set
      , V = new Set
      , W = function(a, b, c) {
        return function(d) {
            return b.result = d,
            a(d),
            c
        }
    }
      , X = function(a, b) {
        return -1 !== b.indexOf(Sk.ffi.remapToJs(Sk.abstr.gattr(a, "type", !1)))
    }
      , Y = function(a) {
        return !!T.find(function(b) {
            return X(b, a)
        })
    }
      , Z = {
        __package__: Sk.builtin.none.none$,
        __doc__: "pygame module for interacting with events and queues",
        __name__: "pygame.event",
        get_grab: b(Sk.builtin.bool.true$),
        set_grab: b(Sk.builtin.none.none$),
        pump: b(Sk.builtin.none.none$),
        poll: function() {
            return i(),
            T.length ? T.pop() : Sk.misceval.callsimOrSuspend(Z.Event, Sk.ffi.remapToPy(0))
        },
        post: function(a) {
            i(),
            Sk.builtin.pyCheckArgs("post", arguments, 1, 1),
            m(a) && T.push(a)
        },
        get: function(a) {
            if (i(),
            a) {
                var b = function() {
                    var b = Sk.builtin.checkIterable(a) ? Sk.ffi.remapToJs(a) : [Sk.ffi.remapToJs(a)];
                    try {
                        return {
                            v: Sk.ffi.remapToPy(T.filter(function(a) {
                                return X(a, b)
                            }))
                        }
                    } finally {
                        T = T.filter(function(a) {
                            return !X(a, b)
                        })
                    }
                }();
                if ("object" === ("undefined" == typeof b ? "undefined" : J(b)))
                    return b.v
            }
            try {
                return Sk.ffi.remapToPy(T)
            } finally {
                T.length = 0
            }
        },
        clear: function() {
            return i(),
            T.length = 0,
            Sk.builtin.none.none$
        },
        peek: function(a) {
            if (i(),
            a) {
                if (Sk.builtin.checkIterable(a)) {
                    var b = Sk.ffi.remapToJs(a);
                    return Sk.ffi.remapToPy(Y(b))
                }
                return Sk.ffi.remapToPy(Y([Sk.ffi.remapToJs(a)]))
            }
            return T.length ? T[0] : Sk.misceval.callsimOrSuspend(Z.Event, Sk.ffi.remapToPy(0))
        },
        wait: function() {
            i();
            var a = null
              , b = new Sk.misceval.Suspension;
            return b.data = {
                type: "Sk.promise",
                promise: new Promise(function(c) {
                    a = W(c, b, !0),
                    S.push(a)
                }
                )
            },
            b.resume = function() {
                return S.splice(S.indexOf(a), 1),
                b.result
            }
            ,
            b
        },
        event_name: function(a) {
            return Sk.ffi.remapToPy(q(Sk.ffi.remapToJs(a)))
        },
        set_blocked: function(a) {
            i(),
            Sk.builtin.pyCheckArgs("set_blocked", arguments, 1, 1);
            var b = Sk.builtin.checkIterable(a) ? Sk.ffi.remapToJs(a) : [Sk.ffi.remapToJs(a)];
            return b.forEach(function(a) {
                return U.add(a)
            }),
            Sk.builtin.none.none$
        },
        set_allowed: function(a) {
            i(),
            Sk.builtin.pyCheckArgs("set_allowed", arguments, 1, 1);
            var b = Sk.builtin.checkIterable(a) ? Sk.ffi.remapToJs(a) : [Sk.ffi.remapToJs(a)];
            return b.forEach(function(a) {
                return V.add(a)
            }),
            Sk.builtin.none.none$
        },
        get_blocked: function(a) {
            i(),
            Sk.builtin.pyCheckArgs("get_blocked", arguments, 1, 1);
            var b = Sk.ffi.remapToJs(a);
            return Sk.ffi.remapToPy(U.has(b))
        },
        EventType: a,
        _PYGAME_C_API: a
    }
      , $ = {
        __doc__: "Set of functions from PyGame that are handy to have in\nthe local namespace for your module",
        __name__: "pygame.locals",
        __package__: "pygame",
        ACTIVEEVENT: 1,
        ANYFORMAT: 268435456,
        ASYNCBLIT: 4,
        AUDIO_S16: 32784,
        AUDIO_S16LSB: 32784,
        AUDIO_S16MSB: 36880,
        AUDIO_S16SYS: 32784,
        AUDIO_S8: 32776,
        AUDIO_U16: 16,
        AUDIO_U16LSB: 16,
        AUDIO_U16MSB: 4112,
        AUDIO_U16SYS: 16,
        AUDIO_U8: 8,
        BIG_ENDIAN: 4321,
        BLEND_ADD: 1,
        BLEND_MAX: 5,
        BLEND_MIN: 4,
        BLEND_MULT: 3,
        BLEND_PREMULTIPLIED: 17,
        BLEND_RGBA_ADD: 6,
        BLEND_RGBA_MAX: 16,
        BLEND_RGBA_MIN: 9,
        BLEND_RGBA_MULT: 8,
        BLEND_RGBA_SUB: 7,
        BLEND_RGB_ADD: 1,
        BLEND_RGB_MAX: 5,
        BLEND_RGB_MIN: 4,
        BLEND_RGB_MULT: 3,
        BLEND_RGB_SUB: 2,
        BLEND_SUB: 2,
        BUTTON_X1: 6,
        BUTTON_X2: 7,
        DOUBLEBUF: 1073741824,
        FULLSCREEN: -2147483648,
        GL_ACCELERATED_VISUAL: 15,
        GL_ACCUM_ALPHA_SIZE: 11,
        GL_ACCUM_BLUE_SIZE: 10,
        GL_ACCUM_GREEN_SIZE: 9,
        GL_ACCUM_RED_SIZE: 8,
        GL_ALPHA_SIZE: 3,
        GL_BLUE_SIZE: 2,
        GL_BUFFER_SIZE: 4,
        GL_DEPTH_SIZE: 6,
        GL_DOUBLEBUFFER: 5,
        GL_GREEN_SIZE: 1,
        GL_MULTISAMPLEBUFFERS: 13,
        GL_MULTISAMPLESAMPLES: 14,
        GL_RED_SIZE: 0,
        GL_STENCIL_SIZE: 7,
        GL_STEREO: 12,
        GL_SWAP_CONTROL: 16,
        HAT_CENTERED: 0,
        HAT_DOWN: 4,
        HAT_LEFT: 8,
        HAT_LEFTDOWN: 12,
        HAT_LEFTUP: 9,
        HAT_RIGHT: 2,
        HAT_RIGHTDOWN: 6,
        HAT_RIGHTUP: 3,
        HAT_UP: 1,
        HWACCEL: 256,
        HWPALETTE: 536870912,
        HWSURFACE: 1,
        IYUV_OVERLAY: 1448433993,
        JOYAXISMOTION: 7,
        JOYBALLMOTION: 8,
        JOYBUTTONDOWN: 10,
        JOYBUTTONUP: 11,
        JOYHATMOTION: 9,
        KEYDOWN: 2,
        KEYUP: 3,
        KMOD_ALT: 768,
        KMOD_CAPS: 8192,
        KMOD_CTRL: 192,
        KMOD_LALT: 256,
        KMOD_LCTRL: 64,
        KMOD_LMETA: 1024,
        KMOD_LSHIFT: 1,
        KMOD_META: 3072,
        KMOD_MODE: 16384,
        KMOD_NONE: 0,
        KMOD_NUM: 4096,
        KMOD_RALT: 512,
        KMOD_RCTRL: 128,
        KMOD_RMETA: 2048,
        KMOD_RSHIFT: 2,
        KMOD_SHIFT: 3,
        K_0: 48,
        K_1: 49,
        K_2: 50,
        K_3: 51,
        K_4: 52,
        K_5: 53,
        K_6: 54,
        K_7: 55,
        K_8: 56,
        K_9: 57,
        K_AMPERSAND: 38,
        K_ASTERISK: 42,
        K_AT: 64,
        K_BACKQUOTE: 96,
        K_BACKSLASH: 92,
        K_BACKSPACE: 8,
        K_BREAK: 318,
        K_CAPSLOCK: 301,
        K_CARET: 94,
        K_CLEAR: 12,
        K_COLON: 58,
        K_COMMA: 44,
        K_DELETE: 127,
        K_DOLLAR: 36,
        K_DOWN: 274,
        K_END: 279,
        K_EQUALS: 61,
        K_ESCAPE: 27,
        K_EURO: 321,
        K_EXCLAIM: 33,
        K_F1: 282,
        K_F10: 291,
        K_F11: 292,
        K_F12: 293,
        K_F13: 294,
        K_F14: 295,
        K_F15: 296,
        K_F2: 283,
        K_F3: 284,
        K_F4: 285,
        K_F5: 286,
        K_F6: 287,
        K_F7: 288,
        K_F8: 289,
        K_F9: 290,
        K_FIRST: 0,
        K_GREATER: 62,
        K_HASH: 35,
        K_HELP: 315,
        K_HOME: 278,
        K_INSERT: 277,
        K_KP0: 256,
        K_KP1: 257,
        K_KP2: 258,
        K_KP3: 259,
        K_KP4: 260,
        K_KP5: 261,
        K_KP6: 262,
        K_KP7: 263,
        K_KP8: 264,
        K_KP9: 265,
        K_KP_DIVIDE: 267,
        K_KP_ENTER: 271,
        K_KP_EQUALS: 272,
        K_KP_MINUS: 269,
        K_KP_MULTIPLY: 268,
        K_KP_PERIOD: 266,
        K_KP_PLUS: 270,
        K_LALT: 308,
        K_LAST: 323,
        K_LCTRL: 306,
        K_LEFT: 276,
        K_LEFTBRACKET: 91,
        K_LEFTPAREN: 40,
        K_LESS: 60,
        K_LMETA: 310,
        K_LSHIFT: 304,
        K_LSUPER: 311,
        K_MENU: 319,
        K_MINUS: 45,
        K_MODE: 313,
        K_NUMLOCK: 300,
        K_PAGEDOWN: 281,
        K_PAGEUP: 280,
        K_PAUSE: 19,
        K_PERIOD: 46,
        K_PLUS: 43,
        K_POWER: 320,
        K_PRINT: 316,
        K_QUESTION: 63,
        K_QUOTE: 39,
        K_QUOTEDBL: 34,
        K_RALT: 307,
        K_RCTRL: 305,
        K_RETURN: 13,
        K_RIGHT: 275,
        K_RIGHTBRACKET: 93,
        K_RIGHTPAREN: 41,
        K_RMETA: 309,
        K_RSHIFT: 303,
        K_RSUPER: 312,
        K_SCROLLOCK: 302,
        K_SEMICOLON: 59,
        K_SLASH: 47,
        K_SPACE: 32,
        K_SYSREQ: 317,
        K_TAB: 9,
        K_UNDERSCORE: 95,
        K_UNKNOWN: 0,
        K_UP: 273,
        K_a: 97,
        K_b: 98,
        K_c: 99,
        K_d: 100,
        K_e: 101,
        K_f: 102,
        K_g: 103,
        K_h: 104,
        K_i: 105,
        K_j: 106,
        K_k: 107,
        K_l: 108,
        K_m: 109,
        K_n: 110,
        K_o: 111,
        K_p: 112,
        K_q: 113,
        K_r: 114,
        K_s: 115,
        K_t: 116,
        K_u: 117,
        K_v: 118,
        K_w: 119,
        K_x: 120,
        K_y: 121,
        K_z: 122,
        LIL_ENDIAN: 1234,
        MOUSEBUTTONDOWN: 5,
        MOUSEBUTTONUP: 6,
        MOUSEMOTION: 4,
        NOEVENT: 0,
        NOFRAME: 32,
        NUMEVENTS: 32,
        OPENGL: 2,
        OPENGLBLIT: 10,
        PREALLOC: 16777216,
        QUIT: 12,
        RESIZABLE: 16,
        RLEACCEL: 16384,
        RLEACCELOK: 8192,
        SCRAP_BMP: "image/bmp",
        SCRAP_CLIPBOARD: 0,
        SCRAP_PBM: "image/pbm",
        SCRAP_PPM: "image/ppm",
        SCRAP_SELECTION: 1,
        SCRAP_TEXT: "text/plain",
        SRCALPHA: 65536,
        SRCCOLORKEY: 4096,
        SWSURFACE: 0,
        SYSWMEVENT: 13,
        TIMER_RESOLUTION: 10,
        USEREVENT: 24,
        USEREVENT_DROPFILE: 4096,
        UYVY_OVERLAY: 1498831189,
        VIDEOEXPOSE: 17,
        VIDEORESIZE: 16,
        YUY2_OVERLAY: 844715353,
        YV12_OVERLAY: 842094169,
        YVYU_OVERLAY: 1431918169
    }
      , _ = {
        0: "NoEvent",
        1: "ActiveEvent",
        2: "KeyDown",
        3: "KeyUp",
        4: "MouseMotion",
        5: "MouseButtonDown",
        6: "MouseButtonUp",
        7: "JoyAxisMotion",
        8: "JoyBallMotion",
        9: "JoyHatMotion",
        10: "JoyButtonDown",
        11: "JoyButtonUp",
        12: "Quit",
        13: "SysWMEvent",
        16: "VideoResize",
        17: "VideoExpose",
        24: "UserEvent",
        27: "UserEvent"
    }
      , aa = {
        keyup: $.KEYUP,
        keydown: $.KEYDOWN
    }
      , ba = {
        AltLeft: $.K_LALT,
        AltRight: $.K_RALT,
        ControlLeft: $.K_LCTRL,
        ControlRight: $.K_LCTRL,
        MetaLeft: $.K_LMETA,
        MetaRight: $.K_RMETA,
        ShiftLeft: $.K_LSHIFT,
        ShiftRight: $.K_RSHIFT,
        CapsLock: $.K_CAPSLOCK,
        Escape: $.K_ESCAPE,
        F1: $.K_F1,
        F2: $.K_F2,
        F3: $.K_F3,
        F4: $.K_F4,
        F5: $.K_F5,
        F6: $.K_F6,
        F7: $.K_F7,
        F8: $.K_F8,
        F9: $.K_F9,
        F10: $.K_F10,
        F11: $.K_F11,
        F12: $.K_F12,
        ArrowUp: $.K_UP,
        ArrowLeft: $.K_LEFT,
        ArrowRight: $.K_RIGHT,
        ArrowDown: $.K_DOWN,
        Semicolon: $.K_SEMICOLON,
        Quote: $.K_QUOTE,
        BracketRight: $.K_RIGHTBRACKET,
        BracketLeft: $.K_LEFTBRACKET,
        Digit0: $.K_0,
        Digit1: $.K_1,
        Digit2: $.K_2,
        Digit3: $.K_3,
        Digit4: $.K_4,
        Digit5: $.K_5,
        Digit6: $.K_6,
        Digit7: $.K_7,
        Digit8: $.K_8,
        Digit9: $.K_9,
        Backspace: $.K_BACKSPACE,
        Enter: $.K_RETURN,
        Tab: $.K_TAB,
        Space: $.K_SPACE,
        Comma: $.K_COMMA,
        Period: $.K_PERIOD,
        Slash: $.K_SLASH,
        Backslash: $.K_BACKSLASH,
        IntlBackslash: $.K_BACKQUOTE,
        Minus: $.K_MINUS,
        Equals: $.K_EQUALS,
        KeyQ: $.K_q,
        KeyW: $.K_w,
        KeyE: $.K_e,
        KeyR: $.K_r,
        KeyT: $.K_t,
        KeyY: $.K_y,
        KeyU: $.K_u,
        KeyI: $.K_i,
        KeyO: $.K_o,
        KeyP: $.K_p,
        KeyA: $.K_a,
        KeyS: $.K_s,
        KeyD: $.K_d,
        KeyF: $.K_f,
        KeyG: $.K_g,
        KeyH: $.K_h,
        KeyJ: $.K_j,
        KeyK: $.K_k,
        KeyL: $.K_l,
        KeyZ: $.K_z,
        KeyX: $.K_x,
        KeyC: $.K_c,
        KeyV: $.K_v,
        KeyB: $.K_b,
        KeyN: $.K_n,
        KeyM: $.K_m,
        Backquote: 160
    }
      , ca = {
        KeyA: 0,
        KeyS: 1,
        KeyD: 2,
        KeyF: 3,
        KeyH: 4,
        KeyG: 5,
        KeyZ: 6,
        KeyX: 7,
        KeyC: 8,
        KeyV: 9,
        Backquote: 10,
        KeyB: 11,
        KeyQ: 12,
        KeyW: 13,
        KeyE: 14,
        KeyR: 15,
        KeyY: 16,
        KeyT: 17,
        Digit1: 18,
        Digit2: 19,
        Digit3: 20,
        Digit4: 21,
        Digit6: 22,
        Digit5: 23,
        Equals: 24,
        Digit9: 25,
        Digit7: 26,
        Minus: 27,
        Digit8: 28,
        Digit0: 29,
        BracketRight: 30,
        KeyO: 31,
        KeyU: 32,
        BracketLeft: 33,
        KeyI: 34,
        KeyP: 35,
        Enter: 36,
        KeyL: 37,
        KeyJ: 38,
        Quote: 39,
        KeyK: 40,
        Semicolon: 41,
        Backslash: 42,
        Comma: 43,
        Slash: 44,
        KeyN: 45,
        KeyM: 46,
        Period: 47,
        Tab: 48,
        Space: 49,
        IntlBackslash: 50,
        Backspace: 51,
        Escape: 53,
        F5: 96,
        F6: 97,
        F7: 98,
        F3: 99,
        F8: 100,
        F9: 101,
        F10: 109,
        F11: 110,
        F12: 111,
        F4: 118,
        F2: 120,
        F1: 122,
        ArrowLeft: 123,
        ArrowRight: 124,
        ArrowDown: 125,
        ArrowUp: 126
    }
      , da = 0
      , ea = function(a, b) {
        return a.getModifierState("CapsLock") ? b + 8192 : b
    }
      , fa = {
        "shift,16,1": "ShiftLeft",
        "shift,16,2": "ShiftRight",
        "control,17,1": "ControlLeft",
        "control,17,2": "ControlRight",
        "alt,18,1": "AltLeft",
        "alt,18,2": "AltRight",
        "win,91,1": "MetaLeft",
        "win,91,2": "MetaRight",
        "f12,123,0": "F12",
        "f11,122,0": "F11",
        "f10,121,0": "F10",
        "f9,120,0": "F9",
        "f8,119,0": "F8",
        "f7,118,0": "F7",
        "f6,117,0": "F6",
        "f5,116,0": "F5",
        "f4,115,0": "F4",
        "f3,114,0": "F3",
        "f2,113,0": "F2",
        "f1,112,0": "F1",
        "esc,27,0": "Escape",
        "enter,13,0": "Enter",
        "capslock,20,0": "CapsLock",
        "tab,9,0": "Tab",
        "backspace,8,0": "Backspace",
        "down,40,0": "ArrowDown",
        "right,39,0": "ArrowRight",
        "up,38,0": "ArrowUp",
        "left,37,0": "ArrowLeft",
        "=,187,0": "Equals",
        "-,189,0": "Minus",
        "0,48,0": "Digit0",
        "9,57,0": "Digit9",
        "8,56,0": "Digit8",
        "7,55,0": "Digit7",
        "6,54,0": "Digit6",
        "5,53,0": "Digit5",
        "4,52,0": "Digit4",
        "3,51,0": "Digit3",
        "2,50,0": "Digit2",
        "1,49,0": "Digit1",
        "`,192,0": "IntlBackslash",
        "/,191,0": "Slash",
        ".,190,0": "Period",
        ",,188,0": "Comma",
        "m,77,0": "KeyM",
        "n,78,0": "KeyN",
        "b,66,0": "KeyB",
        "v,86,0": "KeyV",
        "c,67,0": "KeyC",
        "x,88,0": "KeyX",
        "z,90,0": "KeyZ",
        ",226,0": "BackSlash",
        ",220,0": "BackSlash",
        "',222,0": "Quote",
        ";,186,0": "SemiColon",
        "l,76,0": "KeyL",
        "k,75,0": "KeyK",
        "j,74,0": "KeyJ",
        "h,72,0": "KeyH",
        "g,71,0": "KeyG",
        "f,70,0": "KeyF",
        "d,68,0": "KeyD",
        "s,83,0": "KeyS",
        "a,65,0": "KeyA",
        "],221,0": "BracketRight",
        "[,219,0": "BracketLeft",
        "p,80,0": "KeyP",
        "o,79,0": "KeyO",
        "i,73,0": "KeyI",
        "u,85,0": "KeyU",
        "y,89,0": "KeyY",
        "t,84,0": "KeyT",
        "r,82,0": "KeyR",
        "e,69,0": "KeyE",
        "w,87,0": "KeyW",
        "q,81,0": "KeyQ"
    }
      , ga = "undefined" != typeof window ? window : global
      , ha = function(a, b) {
        var c = ga.listeners && ga.listeners[a] && ga.listeners[a].indexOf(b) > -1;
        return c
    }
      , ia = {
        init: function(a, b, c, d) {
            var e = b || function() {
                return !0
            }
            ;
            A(y(e), c, d),
            Sk.externalLibraries = Sk.externalLibraries || {},
            K(Sk.externalLibraries, {
                pygame: {
                    path: a + "/__init__.js"
                },
                "pygame.locals": {
                    path: a + "/locals.js"
                },
                "pygame.display": {
                    path: a + "/display.js"
                },
                "pygame.event": {
                    path: a + "/event.js"
                }
            }),
            k()
        },
        main: function() {
            return n(),
            t(),
            u(B(h(w({
                init: function() {
                    return j(),
                    new Sk.builtin.tuple([6, 0])
                },
                quit: b,
                error: a,
                get_error: a,
                set_error: a,
                get_sdl_version: a,
                get_sql_byteorder: a,
                register_quie: a,
                encode_string: a,
                encode_file_quit: a,
                locals: v($),
                event: v(o())
            }, $))))
        },
        locals: u($),
        display: u(R),
        event: u(o),
        Sk: Sk,
        eventIsOf: X
    };
    return ia
}),
function(a) {
    a["export"]("sendSignalToSkulpt", function(a) {
        null != Sk.signals && null != Sk.signals.signal && Sk.signals.signal(a)
    })
}(window.TrinketIO),
function(a) {
    function b() {
        this._eventListeners,
        this._eventQueue = [],
        this._threadHandler = null,
        this._isDownDict = {},
        this._signal = i
    }
    function c(c) {
        var d, e, f;
        p[c.which] ? (c.preventDefault(),
        d = "",
        f = g(c.which),
        e = p[f].keyword,
        a.runtime("usingSenseHat3d") ? ($("#_sense_hat_joystick_").removeClass(n).addClass(p[f].transform),
        $("#_astro_pi_joystick_top_").removeClass(n).addClass(p[f].transform),
        $("#_astro_pi_joystick_base_").removeClass(n).addClass(p[f].transform),
        n = p[f].transform) : ($("#_sense_hat" + l).hide(),
        $("#_sense_hat" + p[f].state).show(),
        l = p[f].state),
        Sk.sense_hat.sensestick.isKeyDown(e) ? d = b.STATE_HOLD : Sk.sense_hat.sensestick.addKeyDownEventToDict(e),
        window.sense_hat.sensestick.push(p[f].key, d || b.STATE_PRESS)) : c.ctrlKey && "c" === String.fromCharCode(c.which).toLowerCase() ? $(document).trigger("trinket.code.stop") : a.runtime("usingSenseHat3d") && "astro-pi" === a.runtime("sense_hat_enclosure") && q[c.which] && (e = q[c.which].key,
        $("#_astro_pi_button_" + e + "_").addClass(o))
    }
    function d(c) {
        var d, e;
        p[c.which] ? (c.preventDefault(),
        e = g(c.which),
        d = p[e].keyword,
        a.runtime("usingSenseHat3d") ? ($("#_sense_hat_joystick_").removeClass(n).addClass(m),
        $("#_astro_pi_joystick_top_").removeClass(n).addClass(m),
        $("#_astro_pi_joystick_base_").removeClass(n).addClass(m),
        n = m) : ($("#_sense_hat" + l).hide(),
        $("#_sense_hat_joystick_rest_").show(),
        l = "_joystick_rest_"),
        Sk.sense_hat.sensestick.removeKeyDownEventFromDict(d),
        window.sense_hat.sensestick.push(p[e].key, b.STATE_RELEASE)) : a.runtime("usingSenseHat3d") && "astro-pi" === a.runtime("sense_hat_enclosure") && q[c.which] && (d = q[c.which].key,
        $("#_astro_pi_button_" + d + "_").removeClass(o))
    }
    function e(c) {
        var d, e, f, h;
        p[c.which] ? (c.preventDefault(),
        d = "",
        f = g(c.which),
        e = p[f].keyword,
        h = a.runtime("sense_hat_enclosure") || "sense-hat",
        h = "sense-hat" === h ? "_sense_hat" : "_astro_pi",
        $("#" + h + l).hide(),
        $("#" + h + p[f].state).show(),
        l = p[f].state,
        Sk.sense_hat.sensestick.isKeyDown(e) ? d = b.STATE_HOLD : Sk.sense_hat.sensestick.addKeyDownEventToDict(e),
        window.sense_hat.sensestick.push(p[f].key, d || b.STATE_PRESS)) : c.ctrlKey && "c" === String.fromCharCode(c.which).toLowerCase() ? $(document).trigger("trinket.code.stop") : a.runtime("usingSenseHat3d") && "astro-pi" === a.runtime("sense_hat_enclosure") && q[c.which] && (e = q[c.which].key,
        $("#_astro_pi_button_" + e + "_rest_").hide(),
        $("#_astro_pi_button_" + e + "_pressed_").show())
    }
    function f(c) {
        var d, e, f;
        p[c.which] ? (c.preventDefault(),
        e = g(c.which),
        d = p[e].keyword,
        f = a.runtime("sense_hat_enclosure") || "sense-hat",
        f = "sense-hat" === f ? "_sense_hat" : "_astro_pi",
        $("#" + f + l).hide(),
        $("#" + f + "_joystick_rest_").show(),
        l = "_joystick_rest_",
        Sk.sense_hat.sensestick.removeKeyDownEventFromDict(d),
        window.sense_hat.sensestick.push(p[e].key, b.STATE_RELEASE)) : a.runtime("usingSenseHat3d") && "astro-pi" === a.runtime("sense_hat_enclosure") && q[c.which] && (d = q[c.which].key,
        $("#_astro_pi_button_" + d + "_pressed_").hide(),
        $("#_astro_pi_button_" + d + "_rest_").show())
    }
    function g(a) {
        var b;
        return "Enter" === p[a].keyword ? a : (b = Math.abs($("#sense_hat_angle").val()),
        b && (a += b / 90,
        a > 40 && (a -= 4)),
        a)
    }
    function h() {
        var b = a.runtime("usingSenseHatFlat") ? !0 : !1;
        if (!a.runtime("usingSenseHat3d") || b) {
            var g = ["_sense_hat"]
              , h = ["_joystick_enter_", "_joystick_up_", "_joystick_down_", "_joystick_left_", "_joystick_right_"]
              , i = ["_joystick_rest_"];
            b && g.push("_astro_pi"),
            g.forEach(function(a) {
                h.forEach(function(b) {
                    $("#" + a + b).hide()
                }),
                i.forEach(function(b) {
                    $("#" + a + b).show()
                })
            })
        }
        b ? (j = e,
        k = f) : (j = c,
        k = d),
        $(document).on("keydown", "#sense-hat-listener", j),
        $(document).on("keyup", "#sense-hat-listener", k)
    }
    !function(a) {
        a.eventEmitter = {
            _JQInit: function() {
                this._JQ = a(this)
            },
            emit: function(a, b) {
                !this._JQ && this._JQInit(),
                this._JQ.trigger(a, b)
            },
            once: function(a, b) {
                !this._JQ && this._JQInit(),
                this._JQ.one(a, b)
            },
            on: function(a, b) {
                !this._JQ && this._JQInit(),
                this._JQ.bind(a, b)
            },
            off: function(a, b) {
                !this._JQ && this._JQInit(),
                this._JQ.unbind(a, b)
            }
        }
    }($);
    var i = a["import"]("sendSignalToSkulpt");
    $.extend(b.prototype, jQuery.eventEmitter),
    b.prototype.triggerKeyboardInterrupt = function() {
        this.emit("sensestick.input", {
            type: "keyboardinterrupt"
        })
    }
    ,
    b.prototype.addKeyDownEventToDict = function(a) {
        this._isDownDict[a] = !0
    }
    ,
    b.prototype.removeKeyDownEventFromDict = function(a) {
        delete this._isDownDict[a]
    }
    ,
    b.prototype.isKeyDown = function(a) {
        return this._isDownDict[a] === !0
    }
    ,
    b.prototype.push = function(a, c, d) {
        var e = {
            type: null != d ? parseInt(d) : b.EV_KEY,
            key: parseInt(a),
            state: parseInt(c),
            timestamp: Date.now()
        };
        this._eventQueue.push(e),
        this.emit("sensestick.input", e)
    }
    ,
    b.prototype.destroy = function() {
        this._threadHandler && this.off("sensestick.input", this._threadHandler),
        $(document).off("keydown", "#sense-hat-listener", j),
        $(document).off("keyup", "#sense-hat-listener", k),
        this._isDownDict = {},
        this._eventQueue = []
    }
    ,
    b.EV_KEY = 1,
    b.STATE_RELEASE = 0,
    b.STATE_PRESS = 1,
    b.STATE_HOLD = 2,
    b.KEY_UP = 103,
    b.KEY_LEFT = 105,
    b.KEY_RIGHT = 106,
    b.KEY_DOWN = 108,
    b.KEY_ENTER = 28;
    var j, k, l = "_joystick_rest_", m = "rest", n = m, o = "pressed", p = {
        13: {
            state: "_joystick_enter_",
            key: b.KEY_ENTER,
            keyword: "Enter",
            transform: "enter"
        },
        37: {
            state: "_joystick_left_",
            key: b.KEY_LEFT,
            keyword: "ArrowLeft",
            transform: "left"
        },
        38: {
            state: "_joystick_up_",
            key: b.KEY_UP,
            keyword: "ArrowUp",
            transform: "up"
        },
        39: {
            state: "_joystick_right_",
            key: b.KEY_RIGHT,
            keyword: "ArrowRight",
            transform: "right"
        },
        40: {
            state: "_joystick_down_",
            key: b.KEY_DOWN,
            keyword: "ArrowDown",
            transform: "down"
        }
    }, q = {
        65: {
            key: "a"
        },
        66: {
            key: "b"
        },
        68: {
            key: "d"
        },
        76: {
            key: "l"
        },
        82: {
            key: "r"
        },
        85: {
            key: "u"
        }
    };
    a["export"]("python.sense-stick", {
        initJoystick: h,
        SenseStickDevice: b
    })
}(window.TrinketIO),
function(a, b) {
    function c() {
        var a = Date.now()
          , b = 1e3 * a;
        return b
    }
    function d(a) {
        return 0 > a && (a += 360),
        Math.round(10 * a) / 10 % 361
    }
    function e(b) {
        a.sense_hat.rtimu.raw_orientation = b.asArray();
        var c, e, f, g, h = {
            pitch: d(b.pitch),
            roll: d(b.roll),
            yaw: d(b.yaw),
            rotation_matrix: b.matrix
        };
        for (c = 0; z > c; c++)
            g = y[c],
            e = "sense-hat-" + g,
            f = "sense_hat_" + g,
            $("span." + e).length && $("span." + e).html(h[g]),
            $("#" + f).val(h[g]).change()
    }
    function f() {
        var b = a.sense_hat.rtimu.timestamp;
        (null === b || void 0 === b) && (b = c());
        var d = c()
          , e = (d - b) / 1e6;
        0 === e && (e = 1);
        var f = a.sense_hat.rtimu.raw_old_orientation
          , h = Geometry.degToRad(a.sense_hat.rtimu.raw_orientation)
          , i = [h[0] - f[0], h[1] - f[1], h[2] - f[2]];
        i = Geometry.divideArrayWithScalar(i, e);
        var j = h[0]
          , k = h[1]
          , l = h[2]
          , m = Math.cos(l)
          , n = Math.cos(k)
          , o = Math.cos(j)
          , p = Math.sin(l)
          , q = Math.sin(k)
          , r = Math.sin(j)
          , s = [[m * n, m * q * r - o * p, p * r + m * o * q], [n * p, m * o + p * q * r, o * p * q - m * r], [-q, n * r, n * o]]
          , t = Geometry.transpose3x3Matrix(s)
          , u = Geometry.dot3x3and3x1(t, Geometry.Defaults.GRAVITY)
          , v = Geometry.dot3x3and3x1(t, Geometry.Defaults.NORTH);
        a.sense_hat.rtimu.raw_old_orientation = h,
        a.sense_hat.rtimu.fusionPose = h,
        a.sense_hat.rtimu.timestamp = d,
        u = g(u, .1),
        a.sense_hat.rtimu.accel = [Geometry.clamp(u[0], -8, 8), Geometry.clamp(u[1], -8, 8), Geometry.clamp(u[2], -8, 8)],
        i = g(i, .5),
        a.sense_hat.rtimu.gyro = [i[0], i[1], i[2]],
        v = g(v, .01),
        a.sense_hat.rtimu.compass = [100 * v[0], 100 * v[1], 100 * v[2]]
    }
    function g(a, b, c) {
        null == c && (c = 5);
        for (var d = [0, 0, 0], e = 0; c > e; e++)
            d[0] += i(a[0], b),
            d[1] += i(a[1], b),
            d[2] += i(a[2], b);
        return d[0] /= c,
        d[1] /= c,
        d[2] /= c,
        d
    }
    function h() {
        if (this.haveNextNextGaussian)
            return this.haveNextNextGaussian = !1,
            this.nextNextGaussian;
        var a, b, c;
        do
            a = 2 * Math.random() - 1,
            b = 2 * Math.random() - 1,
            c = a * a + b * b;
        while (c >= 1 || 0 === c);var d = Math.sqrt(-2 * Math.log(c) / c);
        return this.nextNextGaussian = b * d,
        this.haveNextNextGaussian = !0,
        a * d
    }
    function i(a, b, c) {
        var d = .2 * h()
          , e = a + d * b;
        return c && console.info("mean: ", a, d, b, " rg:", e),
        e
    }
    function j(a, b) {
        var c = h()
          , d = a + c * b
          , e = a + b
          , f = a - b;
        return Math.min(Math.max(f, d), e)
    }
    function k(a, b, c, d) {
        this.pitch = a,
        this.roll = b,
        this.yaw = c,
        this.matrix = d
    }
    function l() {
        t = $(".orientation-stage"),
        u = $(".orientation-layer"),
        v = $("#orientation-reset-btn"),
        w = $("#enclosure-toggle"),
        b.runtime("mission-zero") && $("#enclosure-toggle-container").hide();
        var c, d;
        for (c = 0; c < y.length; c++)
            d = "sense_hat_" + y[c],
            $("#" + d).data("skip-trigger", !0),
            "undefined" != typeof b.runtime(d) && ($("#" + d).val(b.runtime(d)),
            b.runtime(d, void 0));
        var f = $("#sense_hat_pitch").val()
          , g = $("#sense_hat_roll").val()
          , h = $("#sense_hat_yaw").val()
          , i = parseInt($("#sense_hat_angle").val())
          , j = $("#sense_hat_rotation_matrix").val();
        a.requestAnimationFrame(function() {
            var b = {
                stage: "orientation-stage",
                rotationCallback: function(b) {
                    var c = a.getComputedStyle(u.get(0), null)
                      , d = c.getPropertyValue(B + "transform");
                    e(new k(b.pitch,b.roll,-b.yaw,d))
                }
            };
            j ? (u.get(0).style.webkitTransform = j,
            u.get(0).style.transform = j,
            e(new k(f,g,h,j))) : i ? (b.axis = [0, 0, 1],
            270 === i ? i = 180 : 180 === i ? i = 270 : 90 === i && (i = 0),
            b.angle = Geometry.degToRad(i),
            e(new k(0,0,i))) : (b.axis = [0, 0, 1],
            b.angle = Geometry.degToRad(h),
            e(new k(0,0,h))),
            x = new Traqball(b)
        }),
        v.on("click", function(a) {
            a.preventDefault();
            var c, d = 0, f = 0, g = 90, h = [0, 0, 1];
            "astro-pi" === b.runtime("sense_hat_enclosure") && (g = 180,
            h[0] = 0,
            h[2] = 1),
            c = Geometry.degToRad(g);
            var i = new k(d,f,g);
            x.stop(function() {
                x.setup({
                    axis: h,
                    angle: c
                }),
                e(i)
            })
        }),
        b.runtime("sense_hat_enclosure") && "sense-hat" !== b.runtime("sense_hat_enclosure") ? b.runtime("sense_hat_enclosure", "sense-hat") : b.runtime("sense_hat_enclosure", "astro-pi"),
        $("#sense_hat_enclosure").data("skip-trigger", !0);
        var l = b.runtime("usingSenseHatFlat") ? n : m;
        l(),
        w.on("click", l)
    }
    function m(a) {
        var c = document.getElementById("_sense_hat_");
        "sense-hat" === b.runtime("sense_hat_enclosure") ? (c.setAttribute("viewBox", "22 0 460 445"),
        $("#_sense_hat_wrapper_").addClass("hide"),
        $("#_astro_pi_wrapper_").removeClass("hide"),
        b.runtime("sense_hat_enclosure", "astro-pi"),
        $("#enclosure-toggle").attr("src", "https://trinket-app-assets.trinket.io/sense-hat-v0/sense-hat-top.png")) : (c.setAttribute("viewBox", "22 85 460 315"),
        $("#_sense_hat_wrapper_").removeClass("hide"),
        $("#_astro_pi_wrapper_").addClass("hide"),
        b.runtime("sense_hat_enclosure", "sense-hat"),
        $("#enclosure-toggle").attr("src", "https://trinket-app-assets.trinket.io/sense-hat-v0/astro-pi-top.png")),
        p(),
        $("#sense_hat_enclosure").val(b.runtime("sense_hat_enclosure")).trigger("change")
    }
    function n() {
        var a = document.getElementById("_sense_hat_")
          , c = document.getElementById("_sense_hat_bottom_")
          , d = $("#sense-hat-enclosure").attr("class") ? $("#sense-hat-enclosure").attr("class").split(/\s+/) : []
          , e = d.indexOf("hide")
          , f = $("#_sense_hat_leds_").attr("class") ? $("#_sense_hat_leds_").attr("class").split(/\s+/) : []
          , g = f.indexOf("hide")
          , h = $("#_sense_hat_joystick_").attr("class") ? $("#_sense_hat_joystick_").attr("class").split(/\s+/) : []
          , i = h.indexOf("hide")
          , j = $("#_sense_hat_back_").attr("class") ? $("#_sense_hat_back_").attr("class").split(/\s+/) : []
          , k = j.indexOf("hide")
          , l = $("#astro-pi-enclosure").attr("class") ? $("#astro-pi-enclosure").attr("class").split(/\s+/) : []
          , m = l.indexOf("hide")
          , n = $("#_astro_pi_back_").attr("class") ? $("#_astro_pi_back_").attr("class").split(/\s+/) : []
          , q = n.indexOf("hide");
        "sense-hat" === b.runtime("sense_hat_enclosure") ? (a.setAttribute("viewBox", "22 0 460 445"),
        c.setAttribute("viewBox", "22 0 460 445"),
        0 > e && (d.push("hide"),
        $("#sense-hat-enclosure").attr("class", d.join(" "))),
        0 > g && (f.push("hide"),
        $("#_sense_hat_leds_").attr("class", f.join(" "))),
        0 > i && (h.push("hide"),
        $("#_sense_hat_joystick_").attr("class", h.join(" "))),
        0 > k && (j.push("hide"),
        $("#_sense_hat_back_").attr("class", j.join(" "))),
        m >= 0 && (l.splice(m, 1),
        $("#astro-pi-enclosure").attr("class", l.join(" "))),
        q >= 0 && (n.splice(q, 1),
        $("#_astro_pi_back_").attr("class", n.join(" "))),
        b.runtime("sense_hat_enclosure", "astro-pi"),
        $("#enclosure-toggle").attr("src", "https://trinket-app-assets.trinket.io/sense-hat-v0/sense-hat-top.png")) : (a.setAttribute("viewBox", "22 85 460 315"),
        c.setAttribute("viewBox", "22 85 460 315"),
        e >= 0 && (d.splice(e, 1),
        $("#sense-hat-enclosure").attr("class", d.join(" "))),
        g >= 0 && (f.splice(g, 1),
        $("#_sense_hat_leds_").attr("class", f.join(" "))),
        i >= 0 && (h.splice(i, 1),
        $("#_sense_hat_joystick_").attr("class", h.join(" "))),
        k >= 0 && (j.splice(k, 1),
        $("#_sense_hat_back_").attr("class", j.join(" "))),
        0 > m && (l.push("hide"),
        $("#astro-pi-enclosure").attr("class", l.join(" "))),
        0 > q && (n.push("hide"),
        $("#_astro_pi_back_").attr("class", n.join(" "))),
        b.runtime("sense_hat_enclosure", "sense-hat"),
        $("#enclosure-toggle").attr("src", "https://trinket-app-assets.trinket.io/sense-hat-v0/astro-pi-top.png")),
        o(),
        p(),
        $("#sense_hat_enclosure").val(b.runtime("sense_hat_enclosure")).trigger("change")
    }
    function o() {
        var a = $(".orientation-box").width()
          , c = $("#_sense_hat_").height()
          , d = "rotateY(180deg)";
        $(".orientation-box").css({
            width: a + "px",
            height: c + "px"
        }),
        $(".orientation-front").css({
            width: a + "px",
            height: c + "px"
        }),
        "astro-pi" !== b.runtime("sense_hat_enclosure") && (d += " rotateZ(180deg)"),
        $(".orientation-back").css({
            width: a + "px",
            height: c + "px",
            transform: d,
            msTransform: d
        })
    }
    function p() {
        if (a.sense_hat && a.sense_hat.pixels) {
            var c, d, e, f, g = 47, h = g, i = .4, j = 180, k = 255, l = 0, m = 0, n = 0, o = 1, p = 1;
            for (c = 0; c < a.sense_hat.pixels.length; c++)
                if (l = 0,
                m = 0,
                n = 0,
                o = 1,
                p = 1,
                d = a.sense_hat.pixels[c],
                e = b.runtime("sense_hat_enclosure") && "sense-hat" !== b.runtime("sense_hat_enclosure") && b.runtime("usingSenseHat3d") ? "_astro_pi_led_" : "_sense_hat_led_",
                f = $("#" + e + q(c) + "_"),
                a.sense_hat.pixels[c] = [-8 & d[0], -4 & d[1], -8 & d[2]],
                d[0] > h || d[1] > h || d[2] > h ? (l = d[0] > h ? (d[0] / 255 * (k - j) + j) / 255 : i,
                m = d[1] > h ? (d[1] / 255 * (k - j) + j) / 255 : i,
                n = d[2] > h ? (d[2] / 255 * (k - j) + j) / 255 : i,
                o = 0,
                p = 1) : f.attr("filter", ""),
                !D && C)
                    f.children(".rled").css({
                        opacity: l
                    }),
                    f.children(".gled").css({
                        opacity: m
                    }),
                    f.children(".bled").css({
                        opacity: n
                    }),
                    f.children(".oled").css({
                        opacity: o
                    }),
                    f.children(".kled").css({
                        opacity: p
                    });
                else {
                    var r, s, t, u, v, w;
                    r = parseInt(255 * l),
                    s = parseInt(255 * m),
                    t = parseInt(255 * n),
                    w = "rgb(" + [r, s, t].join(",") + ")",
                    r + s + t === 0 ? (u = 0,
                    v = 1) : (u = 1,
                    v = 0),
                    f.children(".rled").css({
                        opacity: 0
                    }),
                    f.children(".gled").css({
                        opacity: 0
                    }),
                    f.children(".bled").css({
                        opacity: 0
                    }),
                    f.children(".oled").css({
                        opacity: v
                    }),
                    f.children(".kled").css({
                        opacity: u
                    }),
                    f.children(".kled").attr("fill", w)
                }
        }
    }
    function q(a) {
        return 2 === a.toString().length ? a : "0" + a
    }
    function r() {
        $("#sense-hat-enclosure").attr("class", ""),
        $("#_sense_hat_leds_").attr("class", "leds"),
        $("#_sense_hat_joystick_").attr("class", "joystick_states")
    }
    function s() {
        var a = $("#graphic-wrap").width()
          , c = a - .05 * a
          , d = $("#sense-hat-sensor-controls-container").height()
          , e = $("#orientation-overlay").height()
          , f = $("#graphic").height() - d - e;
        if (b.runtime("usingSenseHatFlat")) {
            var g = Math.floor(c / f);
            g > 1 && (c /= g)
        }
        if ($(".orientation-stage").css({
            width: c + "px",
            height: f + "px"
        }),
        x && x.setup({
            axis: void 0,
            angle: void 0
        }),
        !b.runtime("usingSenseHatFlat") && "astro-pi" === b.runtime("sense_hat_enclosure")) {
            var h = 200
              , i = 500
              , j = Math.min(c, f);
            j = Math.min(Math.max(j, h), i),
            $("#sensehat-node").css("font-size", j + "%");
            var k = $("#sensehat-node").css("font-size").replace("px", "")
              , l = .7 * parseFloat(k);
            $("#_astro_pi_wrapper_").css("font-size", l + "px")
        }
    }
    var t, u, v, w, x, y = ["pitch", "roll", "yaw", "rotation_matrix", "angle"], z = y.length, A = a.getComputedStyle(document.documentElement, ""), B = (Array.prototype.slice.call(A).join("").match(/-(moz|webkit|ms)-/) || "" === A.OLink && ["", "o"])[1];
    B && (B = "-" + B + "-"),
    Geometry = {
        _Eps: 1e-5
    },
    Geometry.Vector = function(a, b, c) {
        this.x = a,
        this.y = b,
        this.z = c
    }
    ,
    Geometry.Vector.prototype = {
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        normalize: function() {
            var a = this.length();
            a <= Geometry._Eps || (this.x /= a,
            this.y /= a,
            this.z /= a)
        }
    },
    Geometry.transpose3x3Matrix = function(a) {
        var b = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        return b[0][0] = a[0][0],
        b[0][1] = a[1][0],
        b[0][2] = a[2][0],
        b[1][0] = a[0][1],
        b[1][1] = a[1][1],
        b[1][2] = a[2][1],
        b[2][0] = a[0][2],
        b[2][1] = a[1][2],
        b[2][2] = a[2][2],
        b
    }
    ,
    Geometry.dot3x3and3x1 = function(a, b) {
        var c = [];
        return c[0] = a[0][0] * b[0] + a[0][1] * b[1] + a[0][2] * b[2],
        c[1] = a[1][0] * b[0] + a[1][1] * b[1] + a[1][2] * b[2],
        c[2] = a[2][0] * b[0] + a[2][1] * b[1] + a[2][2] * b[2],
        c
    }
    ,
    Geometry.multiplyArrayWithScalar = function(a, b) {
        return [a[0] * b, a[1] * b, a[2] * b]
    }
    ,
    Geometry.divideArrayWithScalar = function(a, b) {
        return [a[0] / b, a[1] / b, a[2] / b]
    }
    ,
    Geometry.Defaults = {},
    Geometry.Defaults.O = [0, 0, 0],
    Geometry.Defaults.X = [1, 0, 0],
    Geometry.Defaults.Y = [0, 1, 0],
    Geometry.Defaults.Z = [0, 0, 1],
    Geometry.Defaults.NORTH = Geometry.multiplyArrayWithScalar(Geometry.Defaults.X, .33),
    Geometry.Defaults.GRAVITY = Geometry.Defaults.Z,
    Geometry.clamp = function(a, b, c) {
        var d = Math.min(c, Math.max(b, a));
        return d
    }
    ,
    Geometry.degToRad = function(a) {
        return $.isArray(a) ? [a[0] * Math.PI / 180, a[1] * Math.PI / 180, a[2] * Math.PI / 180] : a * Math.PI / 180
    }
    ,
    Geometry.radToDeg = function(a) {
        return $.isArray(a) ? [180 * a[0] / Math.PI, 180 * a[1] / Math.PI, 180 * a[2] / Math.PI] : 180 * a / Math.PI
    }
    ,
    k.prototype.asArray = function() {
        return [this.roll, this.pitch, this.yaw]
    }
    ,
    Modernizr.addTest("mixblendmode", function() {
        return Modernizr.testProp("mixBlendMode")
    });
    var C = Modernizr.mixblendmode && "linux" !== Detectizr.os.name
      , D = "firefox" === Detectizr.browser.name && "windows" == Detectizr.os.name;
    a.TrinketIO["export"]("python.sense-orientation", {
        initOrientation: l,
        updateRTIMU: f,
        randomGaussian: j,
        updateStage: s,
        initSenseHatEnclosure: r
    })
}(window, window.TrinketIO),
function() {
    function a() {
        var a, b, c, d;
        for (a = 0; E > a; a++)
            c = D[a],
            d = "sense_hat_" + c,
            b = $("#" + d).val(),
            l(b, {
                sensor: c,
                focus: !1
            })
    }
    function b() {
        x && clearInterval(x),
        x = window.setInterval(r.updateRTIMU, 16)
    }
    function c() {
        var b, c, d, e;
        for (c = 0; E > c; c++)
            d = D[c],
            e = "sense_hat_" + d,
            "undefined" != typeof TrinketIO.runtime(e) && ($("#" + e).val(TrinketIO.runtime(e)),
            TrinketIO.runtime(e, void 0)),
            F[d] = {
                $slider: $("#" + e + "[data-rangeslider]")
            },
            F[d].$slider.rangeslider({
                polyfill: !1,
                onInit: function() {
                    var a = this.$element[0].id.replace("sense_hat_", "");
                    l(this.value, {
                        sensor: a,
                        focus: !1
                    })
                },
                onSlideEnd: function() {
                    n()
                }
            }).on("input", function() {
                var a = this.id.replace("sense_hat_", "");
                l(this.value, {
                    sensor: a,
                    focus: !0
                })
            });
        v = setTimeout(function() {
            a(),
            w = setInterval(a, 250)
        }, 1500),
        TrinketIO.runtime("usingSenseHat3d") || ("undefined" != typeof TrinketIO.runtime("sense_hat_angle") ? (u = TrinketIO.runtime("sense_hat_angle"),
        TrinketIO.runtime("sense_hat_angle", void 0)) : "undefined" == typeof u && (u = 0),
        b = Math.abs(u % 360),
        $("#_sense_hat_").css("transform", "rotate(-" + Math.abs(u) + "deg)"),
        $("#sense_hat_angle").data("skip-trigger", !0),
        $("#sense-hat-display-angle").html(b + "&deg;"),
        270 === b && $("#_sense_hat_").css("margin-top", "10%"),
        u > 0 && (u *= -1),
        $("#sense_hat_angle").val(u).trigger("change"))
    }
    function d() {
        TrinketIO.runtime("sense_hat_enclosure", "astro-pi"),
        TrinketIO.runtime("sense_hat_yaw", 180),
        TrinketIO.runtime("missionZero", !0)
    }
    function e(a) {
        var b, c, d, e, f;
        for (b = 0; E > b; b++)
            c = D[b],
            d = "sense_hat_" + c,
            f = $("#" + d).length ? !0 : !1,
            f && $("#" + d).data("skip-trigger", !0),
            "undefined" != typeof a[d] ? e = a[d] : f && (e = $("#" + d).prop("defaultValue")),
            F[c] && F[c].$slider.val(e).change()
    }
    function f() {
        var a, b;
        for (a = 0; E > a; a++)
            b = D[a],
            F[b].$slider.rangeslider("update", !1, !1);
        r.updateStage()
    }
    function g() {
        var a, b;
        for (a = 0; E > a; a++)
            b = D[a],
            F[b].$slider.rangeslider("destroy")
    }
    function h(a) {
        var b = !1;
        return _.map(a, function(a, c) {
            /\.py$/.test(c) && (/import\s*sense_hat/.test(a) || /from\s*sense_hat\s*import/.test(a)) && (b = !0)
        }),
        b
    }
    function i() {
        TrinketIO.runtime("downloadExtra", s)
    }
    function j() {
        v && clearTimeout(v),
        w && clearInterval(w),
        x && clearInterval(x)
    }
    function k() {
        f()
    }
    function l(a, b) {
        var c, d, e = !isNaN(parseFloat(a)) && isFinite(a);
        if (e) {
            switch (a = Number(parseFloat(a).toFixed(2)),
            b.sensor) {
            case "temperature":
                switch (c = "&deg; C",
                !0) {
                case a >= 15 && 40 >= a:
                    d = .5;
                    break;
                case a >= 0 && 60 >= a:
                    d = 1;
                    break;
                default:
                    d = 2
                }
                break;
            case "pressure":
                c = "hPa",
                d = .1;
                break;
            case "humidity":
                c = "%",
                d = a >= 20 && 80 >= a ? 3.5 : 5
            }
            d /= 3,
            window.sense_hat.rtimu[b.sensor] = [1, r.randomGaussian(a, d)],
            $(".sense-hat-" + b.sensor).html(a + c)
        } else
            window.sense_hat.rtimu[b.sensor] = [0, -1];
        Sk.sense_hat && Sk.sense_hat.rtimu && (Sk.sense_hat.rtimu[b.sensor] = window.sense_hat.rtimu[b.sensor]),
        b.focus && n()
    }
    function m(a) {
        return 2 === a.toString().length ? a : "0" + a
    }
    function n(a) {
        if ("undefined" != typeof a && (t = a),
        t) {
            var b = $("#graphic-wrap").scrollTop();
            $("#sense-hat-listener").focus(),
            b && $("#graphic-wrap").scrollTop(b)
        }
    }
    Modernizr.addTest("mixblendmode", function() {
        return Modernizr.testProp("mixBlendMode")
    });
    var o = Modernizr.mixblendmode && "linux" !== Detectizr.os.name
      , p = "firefox" === Detectizr.browser.name && "windows" == Detectizr.os.name || "safari" === Detectizr.browser.name
      , q = TrinketIO["import"]("python.sense-stick")
      , r = TrinketIO["import"]("python.sense-orientation")
      , s = "https://trinket-app-assets.trinket.io/sense-hat/v2.2.0.zip"
      , t = !1;
    window.sense_hat = {
        rtimu: {
            temperature: [1, $("#sense_hat_temperature").val()],
            humidity: [1, $("#sense_hat_humidity").val()],
            pressure: [1, $("#sense_hat_pressure").val()],
            gyro: [0, 0, 0],
            accel: [0, 0, 1],
            compass: [0, 0, 0],
            fusionPose: [0, 0, 0],
            raw_orientation: [0, 0, 0],
            raw_old_orientation: [0, 0, 0]
        },
        sensestick: new q.SenseStickDevice
    },
    window.Sk_interrupt = !1;
    var u, v, w, x, y, z = 8, A = 47, B = A, C = function(a, b) {
        var c, d, e, f, g = .4, h = 180, i = 255, j = 0, k = 0, l = 0, n = 1, q = 1;
        if (a && "setpixel" === a)
            if (c = b,
            d = window.sense_hat.pixels[c],
            e = TrinketIO.runtime("sense_hat_enclosure") && "sense-hat" !== TrinketIO.runtime("sense_hat_enclosure") && TrinketIO.runtime("usingSenseHat3d") ? "_astro_pi_led_" : "_sense_hat_led_",
            f = $("#" + e + m(c) + "_"),
            window.sense_hat.pixels[c] = [-8 & d[0], -4 & d[1], -8 & d[2]],
            d[0] > B || d[1] > B || d[2] > B ? (j = d[0] > B ? (d[0] / 255 * (i - h) + h) / 255 : g,
            k = d[1] > B ? (d[1] / 255 * (i - h) + h) / 255 : g,
            l = d[2] > B ? (d[2] / 255 * (i - h) + h) / 255 : g,
            n = 0,
            q = 1) : f.attr("filter", ""),
            !p && o)
                f.children(".rled").css({
                    opacity: j
                }),
                f.children(".gled").css({
                    opacity: k
                }),
                f.children(".bled").css({
                    opacity: l
                }),
                f.children(".oled").css({
                    opacity: n
                }),
                f.children(".kled").css({
                    opacity: q
                });
            else {
                var r, s, t, u, v, w;
                r = parseInt(255 * j),
                s = parseInt(255 * k),
                t = parseInt(255 * l),
                w = "rgb(" + [r, s, t].join(",") + ")",
                r + s + t === 0 ? (u = 0,
                v = 1) : (u = 1,
                v = 0),
                f.children(".rled").css({
                    opacity: 0
                }),
                f.children(".gled").css({
                    opacity: 0
                }),
                f.children(".bled").css({
                    opacity: 0
                }),
                f.children(".oled").css({
                    opacity: v
                }),
                f.children(".kled").css({
                    opacity: u
                }),
                f.children(".kled").attr("fill", w)
            }
        else
            a && "changeLowlight" === a && (B = b === !0 ? z : A)
    }, D = ["temperature", "pressure", "humidity"], E = D.length, F = {}, G = !1;
    window.onresize = function() {
        TrinketIO.runtime("usingSenseHat") && (clearTimeout(y),
        y = setTimeout(k, 500))
    }
    ,
    $(document).on("click", ".exit-off-canvas", function() {
        TrinketIO.runtime("usingSenseHat") && setTimeout(function() {
            f()
        }, 500)
    }),
    $(document).on("click.sense-hat-focus", "#graphic", function() {
        n(!0)
    }),
    $(document).on("click", "#sense-hat-info-button", function(a) {
        a.preventDefault(),
        $("#sense-hat-info-button").addClass("hide"),
        $("#sense-hat-info").removeClass("hide"),
        $("#sense-hat-rotate-container").addClass("hide")
    }),
    $(document).on("click", "#sense-hat-info-close", function(a) {
        a.preventDefault(),
        $("#sense-hat-info").addClass("hide"),
        $("#sense-hat-info-button").removeClass("hide"),
        $("#sense-hat-rotate-container").removeClass("hide")
    }),
    $(document).on("click", "#sense-hat-rotate-button", function(a) {
        if (!G) {
            var b = u - 90
              , c = Math.abs(b % 360)
              , d = 0;
            G = !0,
            $({
                deg: u
            }).animate({
                deg: b
            }, {
                duration: 350,
                step: function(a) {
                    $("#_sense_hat_").css({
                        transform: "rotate(" + a + "deg)"
                    })
                },
                complete: function() {
                    u = b,
                    $("#sense_hat_angle").val(c).trigger("change"),
                    $("#sense-hat-display-angle").html(c + "&deg;"),
                    G = !1,
                    270 === c && (d = "10%"),
                    $("#_sense_hat_").css("margin-top", d)
                }
            })
        }
    }),
    $("#graphic-wrap").scroll(function() {
        if (TrinketIO.runtime("usingSenseHat")) {
            var a = $(this).scrollTop()
              , b = -a + "px";
            $("#sense-hat-info-button").css({
                bottom: b
            }),
            $("#sense-hat-info").css({
                bottom: b
            }),
            $("#sense-hat-rotate-container").css({
                bottom: b
            })
        }
    }),
    window.TrinketIO["export"]("python.sense-hat", {
        sense_hat_emit: C,
        focus: n,
        initSensors: c,
        initIMU: b,
        destroySliders: g,
        updateSliders: f,
        resetSensors: e,
        usingSenseHat: h,
        addSrc: i,
        stopSenseHat: j,
        initMissionZero: d
    })
}(),
function(a, b) {
    function c(c, d, e, f, g, k) {
        var l, m, n, o;
        d && !d.complete && (d.stop = !0);
        var p = {
            print_function: !1,
            division: !0,
            absolute_import: null,
            unicode_literals: !0,
            set_repr: !0,
            class_repr: !0,
            inherit_from_object: !0,
            super_args: !0
        }
          , q = {
            print_function: !1,
            division: !1,
            absolute_import: null,
            unicode_literals: !1,
            set_repr: !1,
            class_repr: !1,
            inherit_from_object: !1,
            super_args: !1
        }
          , r = {
            print_function: !0,
            division: !0,
            absolute_import: null,
            unicode_literals: !0,
            set_repr: !0,
            class_repr: !0,
            inherit_from_object: !0,
            super_args: !0
        };
        f = f.replace(/\r(?!\n)/gm, "\r\n");
        var t = f.match(/^\s*#!.*?python(\d)/i)
          , u = f.match(/^\s*#\s*python\s*[=:]?\s*(\d)/i);
        u ? Sk.__future__ = "2" === u[1] ? q : p : t ? Sk.__future__ = "3" === t[1] ? r : q : Sk.__future__ = p,
        a.runtime("missionZero") && (Sk.__future__ = r);
        var v = function(a) {
            var b, d = j(a.toString());
            if (a.traceback && a.traceback.length) {
                for (b = 0; b < a.traceback.length; b++)
                    c.userFiles && "undefined" != typeof c.userFiles[a.traceback[b].filename] && (a.filename = a.traceback[b].filename,
                    a.lineno = a.traceback[b].lineno);
                "undefined" == typeof a.filename && (a.traceback = a.traceback.filter(function(a) {
                    return "main.py" === a.filename
                }),
                a.filename = a.traceback[0].filename,
                a.lineno = a.traceback[0].lineno)
            }
            if (c.includeFileInErrors && a.filename && (d = d.replace(/on line \d+/, "on line " + a.lineno),
            d = d + " in " + a.filename.replace(/^\.\//, "")),
            /^ImportError: No module named/.test(d) && (d += ". You can find a list of available modules at <a href='/docs/python' class='text-link' target='_blank'>docs/python</a>."),
            "repl" === c.evalMode) {
                d += "\n";
                var e = -1;
                -1 !== (e = a.toString().indexOf("on line")) && (e = parseInt(a.toString().substr(e + 8), 10));
                var f = 0;
                d += m ? "1>: " + n[0].substr(z.length) : n.map(function(a) {
                    return ++f + (e === f ? ">" : " ") + ": " + a
                }).join("\n")
            }
            c.error(d, a),
            k && "function" == typeof k && k(d, a)
        };
        Sk.configure({
            inputfun: c.inputfun,
            __future__: Sk.__future__,
            retainglobals: "repl" === c.evalMode,
            output: e,
            read: function(a) {
                return c.read(a, Sk.builtinFiles.files || {}, c.userFiles || {})
            },
            write: function() {},
            nonreadopen: !0,
            fileopen: h,
            filewrite: i,
            imageProxy: c.imageProxy || "",
            uncaughtException: v,
            signals: !0,
            killableWhile: s,
            killableFor: !1
        });
        var w = document.getElementById("codeOutput");
        if (c.suspensionHandler = {
            "*": function() {
                if (window.Sk_interrupt === !0)
                    throw new Error("interrupt");
                return null
            }
        },
        Pygame.init("/components/pygame.sk/skulpt_module", function(a) {
            return a.target === document.body || w && w.contains(a.target)
        }),
        b.extend(Sk.externalLibraries, c.externalLibraries),
        c.allowGraphics && (Sk.availableWidth = c.graphicsWidth(),
        Sk.availableHeight = c.graphicsHeight()),
        Sk.domOutput = function(a) {
            return b(c.graphicsTarget()).append(a).children().last()
        }
        ,
        Sk.onBeforeImport = function(a) {
            if (H.test(a)) {
                if (!c.allowGraphics)
                    return "Graphics libraries are not allowed";
                if (l) {
                    if (l !== a && (!I[l] || I[l].indexOf(a) < 0))
                        return "You may only use a single graphics library at a time and the " + l + " library is already in use."
                } else
                    "function" == typeof c.onGraphicsInit && c.onGraphicsInit(),
                    c.graphicsSetup[a](c, b(c.graphicsTarget())),
                    l = a
            }
            return c.onBeforeImport ? c.onBeforeImport(a) : void 0
        }
        ,
        c.onAfterImport && (Sk.onAfterImport = c.onAfterImport),
        "repl" === c.evalMode) {
            if (n = f.split("\n").filter(function(a) {
                return !D.test(a)
            }),
            m = 1 === n.length || /"""/.test(n[0]) && /"""/.test(n[n.length - 1]),
            m && !E.test(n[0]) && !C.test(n[0]) && !B.test(n[0]) && n[0].length > 0 && (A.test(n[0]) || F.test(n[0]) || (n.unshift(z + n.shift()),
            n.push("if not evaluationresult == None: print evaluationresult"))),
            n = n.filter(function(a) {
                return !D.test(a)
            }),
            0 === n.length)
                return;
            f = n.join("\n")
        }
        return {
            code: f,
            lines: n,
            oneLiner: m,
            errorMessage: o,
            handleError: v
        }
    }
    function d(a, c) {
        G[a] || b.ajax({
            async: !1,
            type: "GET",
            url: a,
            dataType: c && c.dataType ? c.dataType : "script",
            success: function(b, d) {
                G[a] = !0,
                c && c.success && c.success(b)
            }
        })
    }
    function e(a) {
        var c = b("#console-output");
        c.removeClass("hide"),
        c.html(c.html() + a)
    }
    function f(a, c) {
        var d, e = "code-error";
        if (c instanceof Sk.builtin.ExternalError && (c = c.nativeError),
        c && "validation" === c.type && (e = "info",
        a = c.message),
        !(c && "interrupt" === c.message || a && /\b(?:SystemExit|KeyboardInterrupt)\b/.test(a))) {
            var d = m("statusMessageTemplate", {
                type: e,
                message: a
            })
              , f = b(d);
            b("body").append(f),
            b("body").addClass("has-status-bar"),
            f.parent().foundation().trigger("open.fndtn.alert")
        }
    }
    function g(a, b, c) {
        var d = c[a] || b[a];
        if (void 0 === d)
            throw "File not found: '" + a + "'";
        return d
    }
    function h(a) {
        var b = document.createEvent("Event");
        b.data = a.mode.v + ":" + a.name,
        b.initEvent("SkfileOpen", !0, !0),
        document.dispatchEvent(b)
    }
    function i(a, b) {
        var c = document.createEvent("Event");
        c.data = a.name + ":" + b.v,
        c.initEvent("SkfileWrite", !0, !0),
        document.dispatchEvent(c)
    }
    function j(a) {
        return a.replace(/[&<>]/g, function(a) {
            return y[a] || a
        })
    }
    var k, l, m = a["import"]("utils.template"), n = a["import"]("python.sense-hat"), o = a["import"]("python.sense-stick"), p = a["import"]("python.sense-orientation"), q = Detectizr.browser.name, r = q + ":" + Detectizr.os.name, s = "midori" === q || "iceweasel" === q || "epiphany" === q ? !1 : !0, t = parseInt(Detectizr.browser.version), u = q + "-gte-3d", v = 400, w = function(c, d) {
        function e() {
            if (0 === b("#_sense_hat_").height())
                setTimeout(e, 250);
            else {
                var a = b("#_sense_hat_").height();
                j = Math.floor(h / a),
                j > 1 && (h /= j),
                b(".orientation-box").css({
                    width: h + "px",
                    height: a + "px"
                }),
                b(".orientation-front").css({
                    width: h + "px",
                    height: a + "px"
                }),
                b(".orientation-back").css({
                    width: h + "px",
                    height: a + "px",
                    transform: "rotateY(180deg) rotateZ(180deg)",
                    msTransform: "rotateY(180deg) rotateZ(180deg)"
                })
            }
        }
        var f;
        d.html(k),
        d.css({
            height: "100%"
        });
        var g = b("#graphic-wrap").width()
          , h = g - .05 * g;
        try {
            f = b("#sense-hat-enclosure").get(0).getBBox().height
        } catch (i) {
            f = v
        }
        f || (f = v);
        var j = Math.floor(h / f);
        j > 1 && (h /= j),
        p.updateStage(),
        a.runtime("usingSenseHat3d") || (b(".orientation-box").css({
            width: h + "px",
            height: f + "px"
        }),
        b(".orientation-front").css({
            width: h + "px",
            height: f + "px"
        })),
        function l() {
            0 === b("#sense-hat-sensor-controls-container").width() ? setTimeout(l, 100) : (a.runtime("usingSenseHatFlat") && e(),
            c._3d ? (d.find(".3d").removeClass("hide"),
            a.runtime("usingSenseHat3d", !0),
            p.initOrientation(),
            b(".save-it").removeClass("blue-highlight"),
            b(".save-it").removeClass("green-highlight")) : (d.find(".2d").removeClass("hide"),
            a.runtime("usingSenseHat3d", void 0),
            p.initSenseHatEnclosure()),
            c.snapshot && (d.find(".hide-for-snapshot").addClass("hide"),
            d.find(".orientation-stage").addClass("snapshot")),
            n.initSensors())
        }(),
        b("#graphic-wrap").addClass("sense-hat")
    };
    b("#graphic-wrap").on("split-output", function(c) {
        if (a.runtime("usingSenseHat") && b(".orientation-stage").length) {
            var d = b(".orientation-stage").height() - b("#console-wrap").height();
            b(".orientation-stage").css({
                height: d + "px"
            })
        }
    });
    var x, y = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;"
    }, z = "evaluationresult = ", A = /^\s*print\b/, B = /^\s*(from\s+\w+\s+)?import\b/, C = /(def|class|for|while|del)\b.*/, D = /^\s*$/, E = /[^!=<>]=[^=]/, F = /^\s*#/, G = {}, H = /^(turtle|pygal|processing|matplotlib\.pyplot|image|sense_hat)$/i, I = {
        sense_hat: ["image"],
        image: ["sense_hat"]
    }, J = {
        turtle: function(a, b) {
            "function" == typeof x && x();
            var c = a.graphicsWidth()
              , d = a.graphicsHeight()
              , e = Math.min(c, d);
            return Sk.TurtleGraphics || (Sk.TurtleGraphics = {}),
            Sk.TurtleGraphics.width = e,
            Sk.TurtleGraphics.height = e,
            Sk.TurtleGraphics.worldWidth = 400,
            Sk.TurtleGraphics.worldHeight = 400,
            Sk.TurtleGraphics.target = b[0],
            Sk.TurtleGraphics.assets = function(b) {
                if (a.userAssets)
                    for (var c = 0; c < a.userAssets.length; c++)
                        if (a.userAssets[c].name === b)
                            return a.userAssets[c].url
            }
            ,
            b.data("graphicMode", "turtle"),
            b.empty()
        },
        pygal: function(a, b) {
            return "function" == typeof x && x(),
            b.data("graphicMode", "pygal"),
            b.empty()
        },
        image: function(a, b) {
            return "function" == typeof x && x(),
            Sk.canvas = "graphic",
            "undefined" != typeof ImageMod && (ImageMod.canvasLib = []),
            Sk.imageProxy = function(b) {
                if (!a.userAssets)
                    return b;
                for (var c = 0; c < a.userAssets.length; c++)
                    if (a.userAssets[c].name === b)
                        return a.userAssets[c].url;
                return b
            }
            ,
            b.empty()
        },
        processing: function(a, b) {
            var c = trinketConfig.prefix("/components/processing.sk/processing-sk-min.js");
            d(c, {
                success: function(b) {
                    var c = trinketConfig.prefix("/components/processing.sk/skulpt_module");
                    ProcessingSk.init(c, a.suspensionHandler, a.suspensionHandler["*"]),
                    Sk.externalLibraries.processing.dependencies = [trinketConfig.prefix("/components/Processing.js/processing.min.js")]
                }
            }),
            "function" == typeof x && x();
            var e = Sk.canvas = "processingCanvas";
            return b.data("graphicMode", "processing"),
            Sk.imageProxy = function(b) {
                if (!a.userAssets)
                    return b;
                for (var c = 0; c < a.userAssets.length; c++)
                    if (a.userAssets[c].name === b)
                        return a.userAssets[c].url;
                return b
            }
            ,
            setTimeout(function() {
                window.readyForSnapshot = !0
            }, 1e4),
            b.html('<canvas style="display:none" id="' + e + '" width="400" height="400"></canvas>')
        },
        "matplotlib.pyplot": function(a, b) {
            "function" == typeof x && x();
            var c = Sk.canvas = "matplotlibCanvas";
            return b.data("graphicMode", "matplot"),
            b.html('<div id="' + c + '"></div>')
        },
        sense_hat: function(c, e) {
            if (Sk.sense_hat || (Sk.sense_hat = c.sense_hat),
            Sk.sense_hat_emit || (Sk.sense_hat_emit = c.sense_hat_emit),
            k)
                0 === b("#sense-hat-sensor-controls-container").length && w(c, e);
            else {
                var f, g = !1, h = ["sense-hat"];
                l = window.senseHatConfig || {},
                l[u] && t >= l[u] && (g = !0),
                l[q] && !g && h.push(l[q]),
                l[r] && h.push(l[r]),
                c._3d || (h.indexOf("flat") >= 0 && h.splice(h.indexOf("flat"), 1),
                h.push("2d")),
                h.indexOf("flat") >= 0 && a.runtime("usingSenseHatFlat", !0),
                f = h.join("-"),
                f = trinketConfig.prefix("/partials/" + f + ".html"),
                d(f, {
                    dataType: "html",
                    success: function(d) {
                        if (k = d,
                        w(c, e),
                        a.runtime("usingSenseHatFlat")) {
                            var f = m("statusMessageTemplate", {
                                type: "info",
                                message: "Try <a href='https://www.google.com/chrome/browser/desktop/' class='text-link' target='_blank'><strong>Chrome</strong></a> or Safari for a richer 3D experience."
                            })
                              , g = b(f);
                            b("body").append(g),
                            b("body").addClass("has-status-bar"),
                            g.parent().foundation().trigger("open.fndtn.alert")
                        }
                    }
                })
            }
            o.initJoystick(),
            x = function() {
                n.destroySliders(),
                b("#graphic-wrap").removeClass("sense-hat"),
                x = void 0
            }
            ,
            e.data("graphicMode", "sense hat")
        }
    }, K = {
        pygal: {
            path: trinketConfig.prefix("/components/pygal.js/__init__.js"),
            dependencies: [trinketConfig.prefix("/js/vendor/highcharts/highcharts.js"), trinketConfig.prefix("/js/vendor/highcharts/highcharts-more.js")]
        },
        numpy: {
            path: trinketConfig.prefix("/components/skulpt_numpy/dist/numpy/__init__.js")
        },
        "numpy.random": {
            path: trinketConfig.prefix("/components/skulpt_numpy/dist/numpy/random/__init__.js")
        },
        matplotlib: {
            path: trinketConfig.prefix("/components/skulpt_matplotlib/matplotlib/__init__.js")
        },
        "matplotlib.pyplot": {
            path: trinketConfig.prefix("/components/skulpt_matplotlib/matplotlib/pyplot/__init__.js"),
            dependencies: [trinketConfig.component("d3", "d3.min.js")]
        },
        json: {
            path: trinketConfig.prefix("/components/json.sk/__init__.js"),
            dependencies: [trinketConfig.prefix("/components/json.sk/stringify.js")]
        },
        xml: {
            path: trinketConfig.prefix("/components/xml.sk/__init__.js")
        },
        "xml.etree": {
            path: trinketConfig.prefix("/components/xml.sk/etree/__init__.js")
        },
        "xml.etree.ElementTree": {
            path: trinketConfig.prefix("/components/xml.sk/etree/ElementTree.js")
        },
        itertools: {
            path: trinketConfig.prefix("/js/skulpt/itertools.js")
        },
        os: {
            path: trinketConfig.prefix("/js/skulpt/os.js")
        },
        "trinket.checks": {
            path: trinketConfig.prefix("/js/skulpt/trinket/checks.js")
        },
        "trinket.tester": {
            path: trinketConfig.prefix("/js/skulpt/trinket/tester/__init__.py")
        },
        "trinket.ast": {
            path: trinketConfig.prefix("/js/skulpt/trinket/ast/__init__.py")
        },
        _ast: {
            path: trinketConfig.prefix("/js/skulpt/trinket/ast/_ast.js")
        },
        trinket: {
            path: trinketConfig.prefix("/js/skulpt/trinket/__init__.js")
        },
        turtletalk: {
            path: trinketConfig.prefix("/js/skulpt/turtletalk.py")
        }
    };
    a["export"]("Skulpt", function(a) {
        var d = {
            evalMode: "main",
            allowGraphics: !0,
            autoEscape: !1,
            read: g,
            write: e,
            error: f,
            graphicsSetup: J,
            includeFileInErrors: !1,
            graphicsWidth: function() {
                return b(a.graphicsTarget()).parent().width()
            },
            graphicsHeight: function() {
                return b(a.graphicsTarget()).parent().height()
            },
            externalLibraries: K
        };
        a = b.extend({}, d, a),
        a.allowGraphics && (a.graphicsSetup = b.extend({}, J, a.graphicsSetup),
        a.graphicsTarget = a.graphicsTarget || function() {
            return b("#graphic")
        }
        );
        var h, i = function(b) {
            a.autoEscape && (b = j(b)),
            a.write(b)
        }, k = "__abort_code__", l = function(b, c, d, e, f, g) {
            var h = {
                complete: !1
            };
            "repl" !== a.evalMode && Sk.TurtleGraphics && Sk.TurtleGraphics.reset && Sk.TurtleGraphics.reset();
            return Sk.misceval.asyncToPromise(function() {
                return Sk.importMainWithBody(a.evalMode, !1, b, !0)
            }, a.suspensionHandler).then(function(a) {
                h.complete = !0,
                e && "function" == typeof e && e(),
                Sk.sense_hat && Sk.sense_hat.sensestick.destroy()
            }, function(a) {
                return a === k ? void (g && "function" == typeof g && g()) : (h.complete = !0,
                f(a),
                void (Sk.sense_hat && Sk.sense_hat.sensestick.destroy()))
            }),
            h
        };
        return function(b, d, e, f) {
            if (!b || /^\s*$/.test(b))
                return d();
            var g = c(a, h, i, b, d, e);
            return h = l(g.code, g.oneLiner, g.lines, d, g.handleError, f),
            g.errorMessage ? !1 : !0
        }
    }),
    a["export"]("SkRuntimeConfig", c)
}(window.TrinketIO, window.jQuery),
function(a, b) {
    "use strict";
    b["export"]("blocks.shared", function(a) {
        $("#blocks-upload").fileReaderJS({
            accept: !1,
            readAsDefault: "Text",
            on: {
                load: function(b, c) {
                    var d, e;
                    a.resetUpload(),
                    d = b.target.result,
                    $("#blocks-upload-filename").text(c.name);
                    try {
                        a.upload_xml = Blockly.Xml.textToDom(d),
                        e = new Blockly.Workspace,
                        Blockly.Xml.domToWorkspace(a.upload_xml, e),
                        $(".blocks-button").removeClass("disabled")
                    } catch (b) {
                        console.log("e:", b),
                        a.upload_xml = "",
                        $(".blocks-button").addClass("disabled"),
                        $("#uploadMessage").html('<i class="fa fa-exclamation-circle alert"></i> We had a problem uploading your file. Please check that your file is properly formatted XML and try again.'),
                        $("#uploadMessage").removeClass("hide")
                    }
                }
            }
        })
    })
}(window, window.TrinketIO),
function(a, b) {
    function c() {
        q || (q = !0,
        $("#console-wrap").removeClass("hide"),
        r ? g() : $("#console-wrap").css("height", "100%"),
        m = $("#console-output").jqconsole(),
        m.Write('Powered by <img src="' + trinketConfig.prefix("/img/trinket-logo.png") + '">\n', "jqconsole-header", !1))
    }
    function d() {
        return j || (j = $('<div class="turtle-overlay hide" data-action="graphic.focus" data-interface="output"></div>'),
        j.insertAfter("#graphic"),
        j.on("click", function() {
            e(!0)
        })),
        j
    }
    function e(a) {
        return o ? (void 0 !== a && (a = !!a,
        a ? (d().addClass("hide"),
        $("#graphic").focus(),
        $(document).on("keydown.turtle-focus", function(a) {
            a.preventDefault()
        }),
        i.sendInterfaceAnalytics(d()),
        $(document).on("mousedown.turtle-focus", function(a) {
            $("#graphic-wrap").is(":hover") || e(!1)
        })) : ($(document).off("keydown.turtle-focus"),
        $(document).off("mousedown.turtle-focus"),
        d().removeClass("hide"))),
        Sk.TurtleGraphics.focus(a)) : void 0
    }
    function f(a) {
        m && (m.Write("[0m"),
        m.Reset(),
        m.Write('Powered by <img src="' + trinketConfig.prefix("/img/trinket-logo.png") + '">\n', "jqconsole-header", !1)),
        a || ($("#graphic").empty(),
        $("#graphic").removeData("graphicMode"))
    }
    function g() {
        if ($("#output-dragbar").hasClass("hide")) {
            $("#output-dragbar").removeClass("hide");
            var a = $("#outputTabs").height()
              , b = $(".trinket-content-wrapper").height() - a
              , c = $("#output-dragbar").height()
              , d = .8 * b - c / 2
              , e = b - d - c / 2;
            $("#graphic-wrap").css("height", d),
            $("#console-wrap").css("height", e)
        }
    }
    function h() {
        $(".reveal-modal").foundation("reveal", "close"),
        Blockly.Python.disableInitVariables_ = !0;
        var b = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)
          , c = Blockly.Xml.domToText(b)
          , e = Blockly.Python.workspaceToCode(Blockly.mainWorkspace);
        $("#graphic");
        f(),
        l && $("#statusMessages").trigger("close.fndtn.alert").remove(),
        o = !1,
        d().addClass("hide");
        document.activeElement;
        u(e, function() {
            l = !1,
            v = void 0,
            a.readyForSnapshot = !0
        }, function(b) {
            l = !0,
            v = void 0,
            a.readyForSnapshot = !0
        }, function() {
            a.readyForSnapshot = !0
        }),
        v = !1,
        o && $("#graphic").focus(),
        i.updateMetric("runs", c),
        !n[c] && i.isModified() && i.sendAnalytics("Interaction", {
            action: "Modify",
            label: "Code"
        }),
        n[c] = !0
    }
    var i, j, k, l, m, n = {}, o = !1, p = b["import"]("Skulpt"), q = !1, r = !1, s = b["import"]("utils.template"), t = b["import"]("blocks.shared"), u = p({
        write: function(a) {
            c(),
            a = a.replace(/\0(33)\[/g, "["),
            m.Write(a)
        },
        inputfun: function(b) {
            return c(),
            a.readyForSnapshot = !0,
            new Promise(function(a, c) {
                var d = document.activeElement;
                m.Write(b),
                $("#console-output").addClass("console-active"),
                m.Input(function(b) {
                    $("#console-output").removeClass("console-active"),
                    a(b),
                    d && $(d).focus()
                }),
                v || m.Focus()
            }
            )
        },
        onGraphicsInit: function() {
            r || (r = !0,
            $("#graphic-wrap").removeClass("hide"),
            q ? g() : $("#graphic-wrap").css("height", "100%"))
        },
        onAfterImport: function(a) {
            i._queryString.snapshot && (Sk.TurtleGraphics || (Sk.TurtleGraphics = {}),
            Sk.TurtleGraphics.animate = !1,
            Sk.TurtleGraphics.allowUndo = !1,
            Sk.TurtleGraphics.width = 320,
            Sk.TurtleGraphics.height = 320)
        }
    }), v = void 0;
    a.TrinketAPI = {
        initialize: function(b) {
            i = this,
            k = $("#start-value").val(),
            v = "result" === k,
            $(document).on("trinket.code.edit", $.proxy(this.showCode, this)),
            $(document).on("trinket.code.run", $.proxy(this.showResult, this)),
            $(document).on("trinket.code.view", $.proxy(this.toggleCodeView, this)),
            $(document).on("trinket.output.view", $.proxy(this.toggleOutputView, this)),
            $(document).on("trinket.instructions.view", $.proxy(i.showInstructions, i)),
            $(document).on("trinket.code.pythonfromblocks", $.proxy(this.createPythonTrinket, this)),
            i.$uploadModal = $("#uploadModal"),
            i.upload_xml = "",
            i.upload_modal_open = !1,
            t(i),
            $(document).on("trinket.code.replace-blocks", $.proxy(this.replaceBlocks, this)),
            $(document).on("trinket.code.add-blocks", $.proxy(this.addBlocks, this)),
            this.viewer = "#codeOutput",
            this.outputView = "result",
            $("#reset-output").click(function() {
                f(!0)
            }),
            $("#menu").on("trinket.sharing.share trinket.sharing.embed trinket.sharing.email", function(a) {
                i.isModified() && !n[i.getValue()] && ($("#runFirstModal").foundation("reveal", "open"),
                a.preventDefault())
            }),
            $("#modalRun").click(function() {
                $("#runFirstModal").foundation("reveal", "close"),
                i.toggleOutputView()
            }),
            a.blocklyLoaded = function(c) {
                a.Blockly = c,
                i.reset(b.code ? b : i._trinket),
                Blockly.mainWorkspace.addChangeListener(function(a) {
                    var b = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)
                      , c = Blockly.Xml.domToText(b);
                    c !== i._original.code && i.triggerChange(),
                    "code" === i.outputView && i.updateCodeView()
                }),
                Blockly.mainWorkspace.getCanvas().addEventListener("blocklySelectChange", function() {
                    "code" === i.outputView && i.updateCodeView()
                })
            }
            ,
            i.draggable(),
            $("#output-dragbar").mousedown(function(a) {
                a.preventDefault();
                var b = $("#outputTabs").height()
                  , c = $(".trinket-content-wrapper").height() - b
                  , d = $(".trinket-content-wrapper").offset().top + b
                  , e = $("#output-dragbar").height();
                $(document).on("mousemove.output-dragbar", function(a) {
                    var b = a.pageY - d - e / 2
                      , f = c - b - e / 2;
                    b >= 20 && f >= 20 && ($("#graphic-wrap").css("height", b),
                    $("#console-wrap").css("height", f))
                }),
                $(document).on("mouseup.output-dragbar", function(a) {
                    $(document).off("mousemove.output-dragbar mouseup.output-dragbar")
                })
            }),
            i._queryString && i._trinket.description && i._queryString.showInstructions && i._trinket.description.length && $(document).trigger("trinket.instructions.view")
        },
        getType: function() {
            return "blocks"
        },
        getValue: function(a) {
            var b, c;
            try {
                b = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace),
                c = a && a.pretty ? Blockly.Xml.domToPrettyText(b) : Blockly.Xml.domToText(b)
            } catch (d) {
                c = this._original.code
            }
            return c
        },
        getAnalyticsCategory: function() {
            return "Blocks"
        },
        serialize: function() {
            return {
                code: this.getValue()
            }
        },
        showMessage: function(a, b) {
            var c = s("statusMessageTemplate", {
                type: a,
                message: b
            })
              , d = $(c);
            $("body").addClass("has-status-bar").append(d),
            d.parent().foundation().trigger("open.fndtn.alert")
        },
        showCode: function(a) {
            $("#codeOutput").addClass("hide"),
            $("#editor").removeClass("hide"),
            i.focus()
        },
        showResult: function(a) {
            $("#codeOutput").removeClass("hide"),
            $("#editor").addClass("hide"),
            $("#codeOutputTab").addClass("active"),
            $("#codeViewTab").removeClass("active"),
            $("#instructionsTab").removeClass("active"),
            $("#blocklyCodeContainer").addClass("hide"),
            $("#instructionsContainer").addClass("hide"),
            $("#outputContainer").removeClass("hide"),
            h(),
            a && i.sendAnalytics("Interaction", {
                action: "Click",
                label: "Run"
            })
        },
        toggleCodeView: function() {
            this.outputView = "code",
            $("#codeViewTab").addClass("active"),
            $("#codeOutputTab").removeClass("active"),
            $("#instructionsTab").removeClass("active"),
            this.updateCodeView(),
            $("#outputContainer").addClass("hide"),
            $("#instructionsContainer").addClass("hide"),
            $("#blocklyCodeContainer").removeClass("hide"),
            i.sendAnalytics("Interaction", {
                action: "Click",
                label: "Source"
            })
        },
        toggleOutputView: function(a) {
            this.outputView = "result",
            $("#codeOutputTab").addClass("active"),
            $("#codeViewTab").removeClass("active"),
            $("#instructionsTab").removeClass("active"),
            $("#outputContainer").removeClass("hide"),
            $("#blocklyCodeContainer").addClass("hide"),
            $("#instructionsContainer").addClass("hide"),
            h(),
            a && i.sendAnalytics("Interaction", {
                action: "Click",
                label: "Run"
            })
        },
        updateCodeView: function() {
            function a(a) {
                return a.replace(/\/\*\* \S+ \*\*\//g, "").replace(/\/\*\* end \S+ \*\*\//g, "")
            }
            try {
                Blockly.Python.disableInitVariables_ = !0,
                Blockly.Python.mapBlocks_ = !0;
                var b = Blockly.Python.workspaceToCode(Blockly.mainWorkspace);
                Blockly.Python.mapBlocks_ = !1,
                Blockly.selected ? (b = b.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace("/** " + Blockly.selected.id + " **/", '<span class="block-selected">').replace("/** end " + Blockly.selected.id + " **/", "</span>"),
                b = a(b)) : (b = a(b),
                b = hljs.highlight("python", b).value),
                $("#blocklyPythonCode").html('<pre><code class="hljs">' + b + "</code></pre>"),
                $("#createPythonLink").removeClass("hide")
            } catch (c) {
                $("#blocklyPythonCode").html('<p class="blocks-codeview-message">We had a problem translating your blocks to python. Please check your code and try again.</p>'),
                $("#createPythonLink").addClass("hide")
            }
        },
        createPythonTrinket: function() {
            var a, b, c, d, e, f, g = this;
            try {
                Blockly.Python.disableInitVariables_ = !0,
                a = Blockly.Python.workspaceToCode(Blockly.mainWorkspace)
            } catch (h) {}
            "undefined" != typeof a && (b = {
                lang: "python",
                code: a
            },
            this._trinket && this._trinket.name && (b.name = this._trinket.name + " (python)"),
            $.post("/api/trinkets?library=true", b).done(function(a) {
                c = a.data.shortCode,
                e = g._userId ? 'A python version of this trinket has been created for you. View or edit <a class="text-link" href="/library/trinkets/' + c + '" target="_blank">your trinket here</a>.' : 'A python version of this trinket has been created. View or remix <a class="text-link" href="/python/' + c + '" target="_blank">the trinket here</a>.',
                d = s("statusMessageTemplate", {
                    type: "success",
                    message: e
                }),
                f = $(d),
                $("body").addClass("has-status-bar").append(f),
                f.parent().foundation().trigger("open.fndtn.alert")
            }))
        },
        onOpenOverlay: function() {
            $("#codeOutput").addClass("hide"),
            $("#editor").addClass("hide")
        },
        onCloseOverlay: function() {
            $("#codeOutput").removeClass("hide"),
            $("#editor").removeClass("hide"),
            i.focus()
        },
        reset: function(b) {
            if (a.Blockly) {
                if (Blockly.mainWorkspace.clear(),
                b.code) {
                    var c = Blockly.Xml.textToDom(b.code);
                    Blockly.Xml.domToWorkspace(c, Blockly.mainWorkspace)
                }
                b.code && "result" === k && v !== !1 ? this.showResult() : (this.showCode(),
                $("#console-output").html(""),
                $("#graphic").html(""))
            }
        },
        downloadable: function() {
            return {
                files: {
                    "trinket_blocks.xml": this.getValue({
                        pretty: !0
                    })
                },
                assets: []
            }
        },
        onUploadClick: function() {
            i.resetUpload(),
            this.$uploadModal.foundation("reveal", "open"),
            this.upload_modal_open = !0
        },
        replaceBlocks: function() {
            Blockly.mainWorkspace.clear(),
            Blockly.Xml.domToWorkspace(this.upload_xml, Blockly.mainWorkspace),
            $("#uploadModal").foundation("reveal", "close"),
            this.upload_modal_open = !1,
            this.showMessage("success", "Your blocks have been added.")
        },
        addBlocks: function() {
            Blockly.Xml.domToWorkspace(this.upload_xml, Blockly.mainWorkspace),
            $("#uploadModal").foundation("reveal", "close"),
            this.upload_modal_open = !1,
            this.showMessage("success", "Your blocks have been added on top of any existing blocks.")
        },
        resetUpload: function() {
            this.upload_xml = "",
            $("#blocks-upload-filename").text("[No file selected]"),
            $(".blocks-button").addClass("disabled"),
            $("#uploadMessage").empty(),
            $("#uploadMessage").addClass("hide")
        }
    }
}(window, window.TrinketIO);
