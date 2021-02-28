// import React from "react";
// import MetaTags from "react-meta-tags";
// // import JsonLd from "path_to_jsonld";

// export default class MetaComponent extends React.Component {
//   render() {
//     const { jsonLd } = this.props;
//     console.log(JSON.stringify(jsonLd));

//     return (
//       <div className="wrapper">
//         <MetaTags encodeSpecialCharacters={false}>
//           <title>{this.props.title}</title>
//           <meta property="og:type" content="website" />
//           <meta name="description" content={this.props.description} />
//           <meta name="og:description" content={this.props.description} />
//           <meta property="og:title" content={this.props.title} />
//           <meta property="og:url" content={window.location.href} />
//           <meta property="og:site_name" content={"content"} />
//           {/* {this.props.jsonLd && <JsonLd data={this.props.jsonLd} />} */}
//           {this.props.jsonLd && (
//             <script type="application/ld+json">{JSON.stringify(this.props.jsonLd)}</script>
//           )}
//           {/* <script type="application/ld+json">{JSON.stringify(jsonLd)} */}
//         </MetaTags>
//       </div>
//     );
//   }
// }
