import React from 'react';

const ProbonoArticle = () => {
  return (
    <>
      <h1 className="text-xl md:text-2xl font-semibold pb-4">
        Our social commitment to enable justice for just everyone.
      </h1>
      <section className="flex flex-col">
        <h1>Human Right Law</h1>
        At CERTA we are against any kind of injustice. Much of what
        wedo here is pro bono. We represent individuals who have
        beenvictims of sexual gender-based violence,
        defilement,reproductive rights such as surrogacy and abortion,
        rights of thearrested persons, right todefence and
        representation, victimsand witnesses protection among others.
        It is ourpassion andresponsibility to make sure that the
        guaranteed constitutionalrights arerespected, fulfilled and
        protected in Rwanda.
      </section>
      <a
        href="http://certafoundation.rw"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 text-brand-yellow"
      >
        For more information on the Reproductive rights please visit
        at: certafoundation.rw
      </a>
    </>
  );
};

export default ProbonoArticle;
