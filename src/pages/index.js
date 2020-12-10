import React from "react";
import NavMenu from "../components/nav-menu/NavMenu";
import Helmet from "react-helmet";
import HeaderInputSection from "../components/main-page/sections/headerInput/HeaderInput";
import CompleteSolutionSection from "../components/main-page/sections/completeSolution/CompleteSolution";
import Truck from "../components/main-page/sections/truck/Truck";

import Cards from "../components/main-page/sections/cards/Cards";
import MapSection from "../components/main-page/sections/map/Map";
import EfficienceSection from "../components/main-page/sections/efficience/Efficience";
import OnlineDocumentsSection from "../components/main-page/sections/onlineDocuments/OnlineDocuments";
import ConsultingSection from "../components/main-page/sections/consulting/Consulting";
import { Link } from "gatsby";
import RequestFreeConsultationSection from "../components/main-page/sections/requestFreeConsultation/RequestFreeConsultation";
import Footer from "../components/main-page/sections/footer/Footer";

import styles from "./index.module.scss";
import * as actions from "../action";
import { connect } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n/i18n";
class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elementsLoaded: 0,
    };
    this.setElementsLoad = this.setElementsLoad.bind(this);
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.props.loadInitialInfo();

    /* HOTJAR cookies*/
    !(function (e, t) {
      if (!document.getElementById(e)) {
        var c = document.createElement("script");
        (c.src = "//js.hs-analytics.net/analytics/1591784400000/2937843.js"),
          (c.type = "text/javascript"),
          (c.id = e);
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(c, n);
      }
    })("hs-analytics");
    !(function (t, e, r) {
      if (!document.getElementById(t)) {
        var n = document.createElement("script");
        for (var a in ((n.src = "https://js.hs-banner.com/2937843.js"),
        (n.type = "text/javascript"),
        (n.id = t),
        r))
          r.hasOwnProperty(a) && n.setAttribute(a, r[a]);
        var i = document.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(n, i);
      }
    })("cookieBanner-2937843", 0, {
      "data-loader": "hs-scriptloader",
      "data-hsjs-portal": 2937843,
      "data-hsjs-env": "prod",
    });
    !(function (t, e, r) {
      if (!document.getElementById(t)) {
        var n = document.createElement("script");
        for (var a in ((n.src = "https://js.hsleadflows.net/leadflows.js"),
        (n.type = "text/javascript"),
        (n.id = t),
        r))
          r.hasOwnProperty(a) && n.setAttribute(a, r[a]);
        var i = document.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(n, i);
      }
    })("LeadFlows-2937843", 0, {
      crossorigin: "anonymous",
      "data-leadin-portal-id": 2937843,
      "data-leadin-env": "prod",
      "data-loader": "hs-scriptloader",
      "data-hsjs-portal": 2937843,
      "data-hsjs-env": "prod",
    });

    /* End cookies code*/

    (function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 1661105, hjsv: 6 };
      a = o.getElementsByTagName("head")[0];
      r = o.createElement("script");
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
    /* GOOGLE ANALYTIC */

    (function (i, s, o, g, r, a, m) {
      i["GoogleAnalyticsObject"] = r;
      (i[r] =
        i[r] ||
        function () {
          (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * new Date());
      (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m);
    })(
      window,
      document,
      "script",
      "https://www.google-analytics.com/analytics.js",
      "ga"
    );
    ga("create", "UA-33914519-2", "auto");
    ga("send", "pageview");
    ga("require", "GTM-TCQNW7R");
    ga("require", "GTM-MT2QWQ7");
    ga("trackerPro.send", "pageview");

    ////////////////////
    document.addEventListener("keydown", this._handleKeyDown);
  }

  _handleKeyDown = (event) => {
    console.log(event.keyCode);
    console.log(this.ref);
    if (event.keyCode == "13") {
      this.ref.current.focus();
    }
  };

  setElementsLoad(val) {
    this.setState({ elementsLoaded: val });
  }

  render() {
    const { keyCode } = this.state;
    return (
      <I18nextProvider i18n={i18n} defaultNS={"default"}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Schrott24 PRO │Altmetallverwertung - Komplettlösung für Industrie
            und Gewerbe
          </title>
          <meta
            name="description"
            content="Beste Preise für Altmetall und Komplettlösung für Altmetall Recycling in Industrie und Gewerbe. Jetzt Angebot erhalten."
          />
        </Helmet>
        <NavMenu />

        <div className={styles.breadcrumb}>
          <a href="https://www.schrott24.at/">Home</a>{" "}
          <span className={styles.separator}>/</span>
          <span> Pro</span>
        </div>

        <HeaderInputSection refff={this.ref} />

        <CompleteSolutionSection />

        <MapSection />

        <Cards />

        <Truck />

        <EfficienceSection />

        <OnlineDocumentsSection />

        <ConsultingSection />
        <RequestFreeConsultationSection />
        <Footer />
      </I18nextProvider>
    );
  }
}

function mapStateToProps({ leadForm }) {
  return {};
}

export default connect(mapStateToProps, actions)(IndexPage);
/*


     

       */
