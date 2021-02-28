import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';
function MetaComponent(props) {
  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>{props.title || ''}</title>
        <meta name="description" content={props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={props.icon} />
        <link rel="apple-touch-icon" href={props.icon} />
        <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
        <meta property="og:url" content={props.url} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta name="twitter:site" content={props.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={props.ogImage} />
        <meta property="og:image" content={props.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {props.jsonLd && (
          <script type="application/ld+json">{JSON.stringify(props.jsonLd)}</script>
        )}
        {/* <script type="application/ld+json">{JSON.stringify(jsonLd)} */}
      </Helmet>
      <img src={props.icon} />
    </div>

  );
}

MetaComponent.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  ogImage: PropTypes.string,
};

MetaComponent.defaultProps = {
  title: 'Demo SEO Mongker',
  icon: 'https://vnreview.vn/ThemeReview-theme/images/background/favicon-16x16.png',
  description: 'Một bé gái 3 tuổi tự trèo ra lan can, treo mình lơ lửng từ ban công tầng 12A của một tòa chung cư ở đường Nguyễn Huy Tưởng, Q.Thanh Xuân, Hà Nội, khiến nhiều người chứng kiến không khỏi một phen hoảng hồn.',
  url: 'https://thanhnien.vn/content/MTA0MTY1Mg==.html',
  ogImage: 'https://vanhienblog.info/wp-content/uploads/2019/02/anh-gai-xinh-dep-hot-girl-1-00-600x445.jpg',
}

export default MetaComponent;