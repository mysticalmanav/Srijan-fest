import { useEffect } from "react";
import Navbar from "../components/Navbar/navbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { animateScroll as scroll } from "react-scroll";

function TermsAndConditions() {
    useEffect(() => {
        scroll.scrollToTop({ duration: 1000 });
    }, []);
    return (
        <>
            <Navbar />
            {/* <div className="bg-[url('https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967623/fotofreaks_iitism_1675510867_3030727283148499964_5457821429_e2sk8e.jpg')] bg-cover bg-no-repeat bg-[#0d0c06] jusitfy-center items-center mt-5 h-full w-full backdrop-brightness-50"> */}
            <div className="bg-[#0d0c06] jusitfy-center items-center mt-5 h-full w-full backdrop-brightness-50">
                <div className="pt-8 pb-4 px-2 sm:px-4 max-w-screen-xl flex flex-col sm:flex-row items-center lg:py-16 mx-4 sm:mx-10 text-white">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        layout
                        transition={{ duration: 1 }}
                    >
                        <h1 className="mb-4 text-4xl mt-10 font-bold tracking-tight leading-none text-[#dad3a5] md:text-5xl lg:text-6xl titleHeading">
                            Terms & Conditions
                        </h1>
                    </motion.div>
                </div>
                <div className="text-white px-14 pb-14 text-sm">

                    <p>Welcome to Srijan IIT ISM!</p>

                    <p>These terms and conditions outline the rules and regulations for the use of Srijan&apos;s Website, located at https://www.srijan-iitism.com/.</p>

                    <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Srijan IIT ISM if you do not agree to take all of the terms and conditions stated on this page.</p>

                    <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: &apos;Client&apos;, &apos;You&apos; and &apos;Your&apos; refers to you, the person log on this website and compliant to the Company&apos;s terms and conditions. &apos;The Company&apos;, &apos;Ourselves&apos;, &apos;We&apos;, &apos;Our&apos; and &apos;Us&apos;, refers to our Company. &apos;Party&apos;, &apos;Parties&apos;, or &apos;Us&apos;, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client&apos;s needs in respect of provision of the Company&apos;s stated services, in accordance with and subject to, prevailing law of in. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>

                    <p className="text-lg text-left mt-2"><strong>Cookies</strong></p>

                    <p>We employ the use of cookies. By accessing Srijan IIT ISM, you agreed to use cookies in agreement with the Srijan&apos;s Privacy Policy. </p>

                    <p>Most interactive websites use cookies to let us retrieve the user&apos;s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>

                    <p className="text-lg text-left mt-2"><strong>License</strong></p>

                    <p>Unless otherwise stated, Srijan and/or its licensors own the intellectual property rights for all material on Srijan IIT ISM. All intellectual property rights are reserved. You may access this from Srijan IIT ISM for your own personal use subjected to restrictions set in these terms and conditions.</p>

                    <p>You must not:</p>
                    <ul className="list-decimal mx-14">
                        <li>Republish material from Srijan IIT ISM</li>
                        <li>Sell, rent or sub-license material from Srijan IIT ISM</li>
                        <li>Reproduce, duplicate or copy material from Srijan IIT ISM</li>
                        <li>Redistribute content from Srijan IIT ISM</li>
                    </ul>

                    <p>This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the <a href="https://www.termsandconditionsgenerator.com/">Free Terms and Conditions Generator</a>.</p>

                    <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Srijan does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Srijan,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Srijan shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>

                    <p>Srijan reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>

                    <p>You warrant and represent that:</p>

                    <ul className="list-decimal mx-14">
                        <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                        <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
                        <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
                        <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
                    </ul>

                    <p>You hereby grant Srijan a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>

                    <p className="text-lg text-left mt-2"><strong>Hyperlinking to our Content</strong></p>

                    <p>The following organizations may link to our Website without prior written approval:</p>

                    <ul className="list-decimal mx-14">
                        <li>Government agencies;</li>
                        <li>Search engines;</li>
                        <li>News organizations;</li>
                        <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                        <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
                    </ul>

                    <p>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party&apos;s site.</p>

                    <p>We may consider and approve other link requests from the following types of organizations:</p>

                    <ul className="list-decimal mx-14">
                        <li>commonly-known consumer and/or business information sources;</li>
                        <li>dot.com community sites;</li>
                        <li>associations or other groups representing charities;</li>
                        <li>online directory distributors;</li>
                        <li>internet portals;</li>
                        <li>accounting, law and consulting firms; and</li>
                        <li>educational institutions and trade associations.</li>
                    </ul>

                    <p>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Srijan; and (d) the link is in the context of general resource information.</p>

                    <p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party&apos;s site.</p>

                    <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Srijan. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>

                    <p>Approved organizations may hyperlink to our Website as follows:</p>

                    <ul className="list-decimal mx-14">
                        <li>By use of our corporate name; or</li>
                        <li>By use of the uniform resource locator being linked to; or</li>
                        <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party&apos;s site.</li>
                    </ul>

                    <p>No use of Srijan&apos;s logo or other artwork will be allowed for linking absent a trademark license agreement.</p>

                    <p className="text-lg text-left mt-2"><strong>iFrames</strong></p>

                    <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>

                    <p className="text-lg text-left mt-2"><strong>Content Liability</strong></p>

                    <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>

                    <p className="text-lg text-left mt-2"><strong>Reservation of Rights</strong></p>

                    <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it&apos;s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>

                    <p className="text-lg text-left mt-2"><strong>Removal of links from our website</strong></p>

                    <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>

                    <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>

                    <p className="text-lg text-left mt-2"><strong>Disclaimer</strong></p>

                    <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>

                    <ul className="list-decimal mx-14">
                        <li>limit or exclude our or your liability for death or personal injury;</li>
                        <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                        <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                        <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                    </ul>

                    <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>

                    <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
                </div>
                <Footer />
            </div >
        </>
    );
}

export default TermsAndConditions;
