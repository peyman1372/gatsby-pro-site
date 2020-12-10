import React from "react";
import Helmet from "react-helmet";

import Finish from "../../components/form-page/finish/finish";
import styles from "./index.module.scss";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n/i18n";

class ThankYouPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elementsLoaded: 0,
      defaultRegularly: null,
    };
    this.setElementsLoad = this.setElementsLoad.bind(this);
  }

  componentDidMount() {
    /* HOTJAR */

    (function(h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function() {
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

    (function(i, s, o, g, r, a, m) {
      i["GoogleAnalyticsObject"] = r;
      (i[r] =
        i[r] ||
        function() {
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
  }

  setElementsLoad(val) {
    this.setState({ elementsLoaded: val });
  }
  render() {
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
        <div>
          <Finish />
        </div>
      </I18nextProvider>
    );
  }
}

export default ThankYouPage;
