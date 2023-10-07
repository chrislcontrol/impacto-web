import { Root } from "./Root";
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
      <noscript>
        <img height="1" width="1" style={{display: 'none'}}
          src="https://www.facebook.com/tr?id=596724388976171&ev=PageView&noscript=1" />
      </noscript>
      <Root />

      <Helmet>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HHN0W4V75Y"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HHN0W4V75Y');
          `}
        </script>
      </Helmet>
    </div>
  )
};
export default App
