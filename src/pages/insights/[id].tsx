import React from 'react';
import Head from 'next/head';
import Header from 'modules/_partials/Header';
import Footer from 'modules/_partials/Footer';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import { useRouter } from 'next/router';

const InsightArticle = () => {
  const router = useRouter();
  const url = `https://certalaw.rw/insights/${router.query.id}`;
  return (
    <>
      <Head>
        <title>CERTA LAW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen overflow-y-auto">
        <Header />
        <div className="bg-white p-4 md:px-8 py-8 md:py-12 flex flex-col items-center w-full">
          <div className="w-full md:max-w-6xl flex flex-col">
            <div className=" mt-3 mb-1 flex-wrap flex items-center text-xs tracking-wide space-x-4">
              <p>Published 14 June 2022.</p>
              <p>Author: Denise Isimbi</p>
            </div>
            <br />
            <div className="flex flex-col md:flex-row items-start gap-3 justify-between pb-2">
              <h1 className="text-3xl justify-left landingTexts font-semibold">
                Adjudication: Rwanda's Delayed Potential In
                Construction Disputes
              </h1>
              <div className="inline-grid grid-cols-4 gap-2">
                <TwitterShareButton url={url}>
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <FacebookShareButton url={url}>
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <WhatsappShareButton url={url}>
                  <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
                <LinkedinShareButton url={url}>
                  <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
              </div>
            </div>
            <img
              src="/assets/images/building.jpg"
              alt=""
              className=""
            />
            <article className="inline-grid gap-x-10 gap-y-5 mt-3">
              <section>
                Disputes in contracts are an inevitability that cannot
                be avoided. The construction industry is no exception
                to the susceptibility to disputes, and its very
                distinctive nature, in particular, poses a legal
                question about how to best handle such disputes in a
                timely manner that maintains a consistent cashflow.
              </section>
              <section>
                A construction boom is on the rise in Rwanda and in
                the last two decades, it has experienced an
                exponential growth with earnings from the sector
                rising over 60% since 2012. GDP From Construction in
                Rwanda increased to 181 RWF Billion in the first
                quarter of 2022 from 180 RWF Billion in the fourth
                quarter of 2021 courtesy of the National Institute of
                Statistics of Rwanda. It contributes around 8 percent
                to national employment.
              </section>
              <section>
                It is a no brainer that the government’s
                investor-friendly policy has contributed a great deal
                to this growth but factors such as the emerging middle
                class which has prompted the growth of the real estate
                sub-sector in affordable housing, government’s massive
                investment in infrastructure among others have had
                their share of contribution to this growth. Yet, as
                the construction industry grows so do disputes arising
                from construction projects and contracts. The
                uncertain and complex nature of construction projects
                makes such long-term transactions susceptible to
                disputes as it is almost impossible to cover all the
                tiny details and foresee every eventuality at the
                outset.
              </section>
              <section>
                The occurrence of disputes can be devastating
                especially when projects haven’t been completed. The
                implication of such as occurrence is that projects can
                be put on hold until such disputes are settled, and in
                instances where they are not, cashflow is greatly
                affected, a crucial tool for the day-to-day running of
                construction projects. Dispute resolution therefore,
                steps in as a form of damage control and aims to
                restore parties to their former positions before the
                dispute arose.
              </section>

              <section>
                Rwandan law avails a number of remedies parties can
                resort to in the occurrence of disputes namely;
                negotiation, mediation, arbitration and litigation. Of
                the accessible options, litigation is the popularly
                chosen one. With negotiations failing over and over,
                the non-binding nature of mediation, and arbitration
                as a relatively new concept, litigation remains the
                most sought-after remedy. Litigation entails a
                rigorous court process where a party files a case in a
                public court under what legal scholars’ term as civil
                action. Once the case has been admitted, the
                uncertainty of how long it may take, postponements,
                the outcome, the high cost of lawyers’ fees are a few
                of the parties’ expectations. Hence, when you consider
                the fact the public nature of the hearings and lack of
                confidentiality thereof, the long court procedure
                which may even include appeal making litigation a
                significant time consumer taking more than 12 months
                to reach the final verdict, litigation in construction
                disputes thus becomes more detrimental in the
                long-run!
              </section>
              <section>
                The good news for those in the construction industry
                is that not all remedies have been exhausted by the
                lawmakers and Adjudication could be an option parties
                in construction disputes could leverage in getting
                their disputes settled and projects up and running at
                minimal costs and time.
              </section>
              <section>
                Adjudication involves an independent third party
                considering the claims of both sides and making a
                binding decision. It is a simple and efficient method
                of settling disputes in a relatively speedy and
                cost-effective manner in comparison to other forms of
                dispute resolution which makes it the most favourable
                approach in construction cases. What makes
                Adjudication even more efficient is that adjudicators
                tend to be persons with direct experience in
                construction matters. These vary from architects,
                engineers, quantity surveyors or lawyers with specific
                construction knowledge and experience. Confidentiality
                of the adjudication process, the fact that you can
                adjudicate anytime and the enforceability of the
                adjudication decision are few of the many advantages
                of adjudication in construction disputes.
              </section>
              <section>
                Adjudication as a mode of dispute resolution has since
                long been adopted in jurisdictions such the UK,
                Singapore, Malaysia, New Zealand, Kenya, South Africa,
                and some states of Australia in the construction
                industry. In most cases, it is statutory with the
                objective of improving and maintain cashflow in the
                industry with the theme of “pay now, fight later”,
                where institutions have been established to ensure the
                smooth sailing of the Adjudication procedure and it
                has proved to be nothing less than effective.
              </section>
              <section>
                Rwanda needs to follow suit with a comprehensive
                legislative and institutional structure for
                incorporating adjudication into our conflict
                resolution mechanism. This would be set up in such a
                way that adjudication is the first choice in
                construction disputes, that it is designed to resolve
                such issues in the shortest amount of time possible,
                and that it is mandatory in nature. Producing the
                appropriate skills, regulations, and institutions for
                adjudication would provide some confidence and backup
                in the event of a conflict, while also acting as an
                incentive for investors. With Rwanda set to be
                Africa’s top investment hub, there is no doubt that
                construction is going to take the lion’s share of such
                investments especially in housing and other
                infrastructure! Establishing the necessary legal and
                institutional framework for adjudication could come in
                handy!
              </section>
            </article>{' '}
            <br />
            <br />
            <p className="text-primary font-semibold">
              About the Author:
            </p>
            <section className="text-primary">
              Denise Isimbi is a Junior Associate at CERTA Law. she
              handles ADR related cases and acts as a tribunal
              secretary in arbitration proceedings presided over the
              Partners. Denise was a legal fellow at the International
              Lawyers Project (ILP), where she assisted the Director
              of Partnerships in brokering pro bono legal partnerships
              for communities, civil society organizations,
              journalists, and governments in cases involving
              anti-bribery and corruption, tax reform, media freedom,
              and environmental and climate change in Sub-Saharan
              Africa.
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default InsightArticle;
