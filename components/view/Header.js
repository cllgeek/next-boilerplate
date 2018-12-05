import NextSeo from 'next-seo';
import SEO from '../../seo/home-seo.js';

export default () => (
  <div className={'nav nav-main'}>
    <NextSeo config={SEO}></NextSeo>
		Hello,nextjs,boilerplate。
  </div>
)
