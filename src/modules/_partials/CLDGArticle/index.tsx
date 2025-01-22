import React from 'react';

const CLDGArticle = () => {
  return (
    <>
      <h1 className="text-xl md:text-2xl font-semibold pb-4  text-black">
        Our social commitment to enable justice for just everyone.
      </h1>
      <article className="inline-grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5 mt-3  text-black">
        <section className="flex flex-col">
          At CERTA we are against any kind of injustice. Much of what
          wedo here is pro bono. We represent individuals who have
          beenvictims of sexual gender-based violence,
          defilement,reproductive rights such as surrogacy and
          abortion, rights of thearrested persons, right todefence and
          representation, victimsand witnesses protection among
          others. It is ourpassion andresponsibility to make sure that
          the guaranteed constitutionalrights arerespected, fulfilled
          and protected in Rwanda.
        </section>

        <section className="flex flex-col">
          CERTA is part of the leading law firms in Rwanda providing
          FullRange Estate PlanningServices. We advise our clients and
          helpthem draft all sorts of trusts and wills includingliving
          trusts, alast will and testament, durable powers of
          attorney, and a livingwill. <br />
          Planningfor future is very critical, it raises issues
          ofexecutors, heirs and beneficiaries we accordinglyassist
          inprobate matters such as a breach of fiduciary duty or a
          claimagainst executor. <br />
          Given the novelty of regulation of wills and trusts in
          Rwanda,our attorneys have quicklyspecialised in Wills and
          Trustsregistration, interpretation, professional execution
          and theentire administration of estate planning. .
        </section>

        <section className="flex flex-col">
          In Rwanda, Medical law is a nascent area of practice.
          However, at CERTA our lawyers have the in-depth knowledge in
          medical malpractice, negligence and confidentiality of
          patient data. 
          <div className="flex flex-col mt-6">
            <button
              type="button"
              className="hover:bg-gray-200 hover:text-primary uppercase px-12 py-2 rounded-lg bg-brand-yellow text-white"
            >
              Download report(pdf)
            </button>
          </div>
        </section>
      </article>
    </>
  );
};

export default CLDGArticle;
