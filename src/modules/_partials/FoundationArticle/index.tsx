import React from 'react';

const FoundationArticle = () => {
  return (
    <>
      <h1 className="text-xl md:text-2xl font-semibold pb-4">
        Our social commitment to enable justice for just everyone.
      </h1>
      <article className="inline-grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5 mt-3">
        <section className="flex flex-col">
          <h1>Human Right Law</h1>
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
          <h1>WILLS, TRUSTS & PROBATE LAW:</h1>
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
          <h1>MEDICAL LAW</h1>
          In Rwanda, Medical law is a nascent area of practice.
          However, at CERTA our lawyers have the in-depth knowledge in
          medical malpractice, negligence and confidentiality of
          patient data. When handling this kind of sensitive cases, we
          are obliged by law and legal ethics to observe the rights
          and responsibilities of medical professionals and their
          patients. We have successfully represented hospitals,
          patients, and individual medical professionals in surgical
          claims, medical liability, and failure to observe medical
          procedures. Our lawyers are as well very conversant and
          highly experienced in advising the medical statutory bodies
          and doctors in matters related to professional misconduct,
          and breaches of ethical code.
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

export default FoundationArticle;
