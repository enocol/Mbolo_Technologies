import LegalPage, { Todo } from "./LegalPage";
import { company, privacyContact } from "../data/site";

/**
 * Privacy policy for the Mbolo Eats app, served at /legal/privacy-policy.
 *
 * Values still to be settled are wrapped in <Todo> so they are impossible to
 * miss on the rendered page. The source draft also carried a developer
 * appendix describing gaps in the app; it is deliberately not reproduced here,
 * because it was written for the team and describes internal weaknesses.
 */
const dataTable = [
  [
    "Name",
    "You type it when you create an account",
    "Identifying your account, and telling the restaurant and rider who the order belongs to",
  ],
  [
    "Email address",
    "You type it when you create an account",
    "Signing in, verifying the account is yours, and password resets",
  ],
  [
    "Phone number",
    "You type it at checkout",
    "So the rider can call you when they arrive. You can give a different number from the one paying",
  ],
  [
    "Mobile money number",
    "You type it when choosing how to pay",
    "Charging the order to your MTN MoMo or Orange Money wallet",
  ],
  [
    "Delivery location",
    "From your device, with your permission",
    "Working out the delivery fee, and guiding the rider to you",
  ],
  [
    "Delivery notes",
    "You write them at checkout, if you want to",
    "Passing directions to the rider — a gate colour, a landmark, which floor",
  ],
  [
    "Order history",
    "Created each time you order",
    "Showing your past orders, handling refunds and disputes, and our own accounting. Each order keeps the delivery address you sent it to",
  ],
  [
    "Your basket",
    "When you add an item, before you check out",
    "Holding your basket on our server so it is still there when you come back, on any device you sign in from",
  ],
  [
    "Favourite restaurants",
    "When you tap the heart on a restaurant",
    "Showing your favourites, and counting how many people have favourited a restaurant",
  ],
  [
    "Delivery code",
    "Generated when you place an order",
    "Proving to the rider that they handed the food to the right person",
  ],
  [
    "Device details",
    "Automatically, if you allow notifications",
    "Sending order updates to the right phone. We store a notification token, a device identifier, your platform, the app version and your language",
  ],
];

const sections = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          Mbolo Eats is a food delivery service operating in Cameroon. We connect you with
          local restaurants and arrange for a rider to bring your order to you.
        </p>
        <p>
          Mbolo Eats is operated by {company.legalName}, of{" "}
          <Todo>registered address</Todo>, and this policy is issued by that company. Where this policy says &ldquo;we&rdquo; or
          &ldquo;us&rdquo;, it means that company. Where it says &ldquo;you&rdquo;, it means
          anyone using the Mbolo Eats app to browse restaurants or place an order.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <>
        <p>
          We collect only what an order actually needs. Here is the complete list, and what
          each item is for.
        </p>

        {/* tabIndex makes the horizontal scroll reachable by keyboard on the
            widths where the table still scrolls rather than stacking. */}
        <div className="legal__tablewrap" tabIndex={0}>
          <table>
            <caption>Personal data held by Mbolo Eats</caption>
            <thead>
              <tr>
                <th scope="col">What</th>
                <th scope="col">When we get it</th>
                <th scope="col">What it is for</th>
              </tr>
            </thead>
            <tbody>
              {dataTable.map(([what, when, why]) => (
                <tr key={what}>
                  <th scope="row">{what}</th>
                  <td data-label="When we get it">{when}</td>
                  <td className="legal__why" data-label="What it is for">
                    {why}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>What we do not collect</h3>
        <p>
          We do not collect your microphone, camera, contacts, photos or calendar &mdash; the
          app does not ask for those permissions. It carries no advertising or analytics
          software, so we cannot track you across other apps or websites and we do not build
          an advertising profile of you. We do not sell your data to anyone. We never see or
          store your mobile money PIN &mdash; you enter that with your provider, not with us.
        </p>
      </>
    ),
  },
  {
    id: "why-we-collect-it",
    title: "Why we collect it",
    body: (
      <>
        <p>We use your information for four things, and nothing else:</p>
        <ul className="legal__list">
          <li>
            <b>Delivering your order.</b> Passing your address and phone number to the
            restaurant and the rider so the food reaches you.
          </li>
          <li>
            <b>Running your account.</b> Signing you in, keeping your order history, and
            answering you when you contact support.
          </li>
          <li>
            <b>Taking payment.</b> Sending a charge request to your mobile money provider and
            recording whether it succeeded.
          </li>
          <li>
            <b>Keeping the service working.</b> Diagnosing faults, preventing fraud, and
            meeting our legal and tax obligations.
          </li>
        </ul>
        <p>
          We do not use your information for advertising, and we do not build profiles of you
          for marketing.
        </p>
      </>
    ),
  },
  {
    id: "your-location",
    title: "Your location",
    body: (
      <>
        <p>
          Mbolo Eats asks for your location while the app is open. We use it to calculate the
          delivery fee, which depends on how far you are from the restaurant, and to show the
          rider where to bring your order.
        </p>
        <p>
          We do not track your location in the background, and we do not collect it when the
          app is closed.
        </p>
        <p>
          You can refuse the permission, or withdraw it later in your phone&apos;s settings.
          The app will still let you browse restaurants, but you will not be able to place an
          order, because we cannot price or route a delivery without knowing where it is
          going.
        </p>
        <p>
          While your order is on its way, you can see the rider&apos;s location. Riders can
          see the location you are delivering to, and only for the order they are carrying.
        </p>
      </>
    ),
  },
  {
    id: "your-delivery-code",
    title: "Your delivery code",
    body: (
      <>
        <p>
          Every order gets a numeric code, shown on your order screen. When the rider hands
          over your food, you give them the code, and that is how we record that the delivery
          actually happened.
        </p>
        <div className="legal__note">
          <p>
            <b>Keep it until the food is in your hands.</b> The code is proof of delivery, not
            proof of identity.
          </p>
          <p>
            Mbolo Eats staff will never ask you for it by phone or message, and a rider should
            only ask for it at your door. If anyone asks for your code before your food
            arrives, do not give it to them, and tell us.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "who-else-sees-your-data",
    title: "Who else sees your data",
    body: (
      <>
        <p>
          Placing an order necessarily involves other people. Here is everyone who receives
          part of your information, and what they get.
        </p>

        <h3>Restaurants</h3>
        <p>
          The restaurant you order from receives your name, the items you ordered, your
          delivery notes, and your contact number so they can reach you about the order.
        </p>

        <h3>Riders</h3>
        <p>
          The rider assigned to your order receives your name, delivery address, contact
          number and delivery notes. They keep this only for as long as they are carrying your
          order.
        </p>

        <h3>Companies that run parts of the service</h3>
        <ul className="legal__list">
          <li>
            <b>Google</b> &mdash; account sign-in and email verification, the map shown on
            your order screen, and delivery of notifications to Android phones.
          </li>
          <li>
            <b>Expo</b> &mdash; delivery of notifications.
          </li>
          <li>
            <b>Cloudinary</b> &mdash; hosting the restaurant and dish photographs you see.
            This does not involve your personal data.
          </li>
          <li>
            <b>Neon</b> &mdash; hosting the database that holds your account and orders.
          </li>
          <li>
            <b>Your mobile money provider</b> &mdash; MTN or Orange, to take payment.
          </li>
        </ul>
        <p>
          These companies process data on our instructions and may store it outside Cameroon.
          We do not permit them to use your information for their own purposes.
        </p>

        <h3>Authorities</h3>
        <p>
          We will disclose information where the law requires it, or where it is necessary to
          establish or defend a legal claim.
        </p>
      </>
    ),
  },
  {
    id: "google-services",
    title: "Google services and limited use",
    body: (
      <>
        <p>
          Parts of Mbolo Eats run on Google services. This is what each one receives.
        </p>
        <ul className="legal__list">
          <li>
            <b>Firebase Authentication</b> holds your sign-in. Your email address and password
            go to Google, not to us; we store no password for your account. Google also sends
            the verification and password-reset emails.
          </li>
          <li>
            <b>Google Maps</b> draws the map on your order screen, so Google receives the map
            requests your device makes while that screen is open.
          </li>
          <li>
            <b>Firebase Cloud Messaging</b> delivers order notifications to Android phones,
            using the notification token described above.
          </li>
        </ul>
        <p>
          Signing in is the only thing the app asks of your Google account. It does not
          request access to Gmail, Drive, Contacts, Calendar, Photos or any other Google
          service, and it cannot read them.
        </p>
        <div className="legal__note">
          <p>
            <b>Limited use.</b> Mbolo Eats&apos; use and transfer of information received from
            Google APIs to any other app adheres to the{" "}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google API Services User Data Policy
            </a>
            , including its Limited Use requirements.
          </p>
          <p>
            In plain terms: we do not use that information for targeted advertising, we do not
            sell it to data brokers or information resellers, we do not use it to judge
            credit-worthiness or for lending, and we do not use it to train generalised
            artificial-intelligence or machine-learning models. We use it to provide and
            improve Mbolo Eats, and for nothing else. No human reads it except where you have
            asked us to, where it is needed for security, or where the law requires it.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "payments",
    title: "Payments",
    body: (
      <>
        <p>
          Mbolo Eats accepts MTN Mobile Money and Orange Money. When you pay, we send a charge
          request to your provider using the number you gave us. You then authorise the
          payment with your provider directly.
        </p>
        <p>
          We record the number you paid from, the amount, and whether the payment succeeded or
          failed. We never receive your PIN, and we do not store card details, because we do
          not accept cards.
        </p>
      </>
    ),
  },
  {
    id: "notifications",
    title: "Notifications",
    body: (
      <>
        <p>
          If you allow notifications, we send you updates about your order &mdash; when the
          restaurant accepts it, when a rider collects it, and when it arrives.
        </p>
        <p>
          To do that we store a notification token for your device, along with your platform,
          app version and language. You can turn notifications off in your phone&apos;s
          settings at any time; your orders will still work, you will just have to open the
          app to check on them.
        </p>
      </>
    ),
  },
  {
    id: "how-long-we-keep-it",
    title: "How long we keep it",
    body: (
      <>
        <p>We keep your account details for as long as your account exists.</p>
        <p>
          We keep completed orders for six months, because we need them for refunds,
          disputes, and our accounting and tax obligations. After that they are deleted.
        </p>
        <p>Notification tokens are removed when you sign out or turn notifications off.</p>
      </>
    ),
  },
  {
    id: "your-choices-and-rights",
    title: "Your choices and rights",
    body: (
      <>
        <p>You can:</p>
        <ul className="legal__list">
          <li>
            <b>See and correct your details.</b> Your name and email are in your profile.
            Contact us to change anything you cannot edit yourself.
          </li>
          <li>
            <b>Get a copy of your data.</b> Ask us and we will send you what we hold about
            you.
          </li>
          <li>
            <b>Delete your account.</b>{" "}
            <Todo>describe the deletion route once it exists</Todo>
          </li>
          <li>
            <b>Withdraw permissions.</b> Turn off location or notifications in your
            phone&apos;s settings whenever you like.
          </li>
          <li>
            <b>Complain.</b> If you think we have mishandled your information, contact us
            first, and you may also raise it with <Todo>relevant Cameroonian authority</Todo>.
          </li>
        </ul>
        <p>
          Some information survives account deletion where the law requires us to keep it
          &mdash; completed order records needed for tax and accounting, for example. We keep
          only what we must, and nothing else.
        </p>
      </>
    ),
  },
  {
    id: "deleting-your-account",
    title: "Deleting your account",
    body: (
      <>
        <p>
          You can ask us to delete your Mbolo Eats account and the personal information
          attached to it. <Todo>describe the in-app route once it exists</Todo>, or write to{" "}
          <a href={`mailto:${privacyContact.email}`}>{privacyContact.email}</a> from the email
          address on the account and we will action it within one day.
        </p>
        <p>
          Deleting your account removes your name, email, phone number, saved basket,
          favourites and notification tokens. Completed orders are not removed, because we are
          required to keep sales records for accounting and tax; they are detached from your
          profile and kept for the period in{" "}
          <a href="#how-long-we-keep-it">How long we keep it</a>, then deleted.
        </p>
      </>
    ),
  },
  {
    id: "this-website",
    title: "This website",
    body: (
      <>
        <p>
          This policy also covers mbolotechnologies.com, where you are reading it. The site
          sets no advertising or analytics cookies and does not track visitors.
        </p>
        <p>
          If you send us a project enquiry through the contact form, we store the name,
          company, email address, phone number, enquiry type and description you type into it,
          so that we can reply. That form is separate from the Mbolo Eats app: it is not linked
          to any app account, and we use it only to answer you.
        </p>
      </>
    ),
  },
  {
    id: "keeping-it-secure",
    title: "Keeping it secure",
    body: (
      <>
        <p>
          Sign-in is handled by Google&apos;s Firebase Authentication. Your password goes to
          Google, never to us: we hold no password for your account and could not read one if
          we tried. Traffic between the app and our servers is encrypted in transit, and every
          request that touches your data is checked against your signed-in identity, so one
          account cannot read another&apos;s orders, basket or favourites. Access to the
          database is limited to the people who need it to run the service.
        </p>
        <p>
          No system is perfectly secure, and we will not pretend otherwise. If a breach
          affects your personal information, we will tell you and the relevant authority as
          required by law.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        Mbolo Eats is not intended for children under 16. We do not knowingly
        collect information from them. If you believe a child has created an account, contact
        us and we will remove it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <>
        <p>
          If we change this policy we will update the effective date above, and tell you in the
          app when the change is significant. Continuing to use Mbolo Eats after a change means
          you accept the updated policy.
        </p>
        <p>
          If we ever change what we do with information that comes from Google &mdash; a new
          permission, a new purpose, a new party it is shared with &mdash; we will say so here
          and notify you in the app before the change takes effect.
        </p>
      </>
    ),
  },
  {
    id: "contact-us",
    title: "Contact us",
    body: (
      <>
        <p>Questions about this policy, or about your information:</p>
        <ul className="legal__list">
          <li>
            <b>Email</b>{" "}
            <a href={`mailto:${privacyContact.email}`}>{privacyContact.email}</a>
          </li>
          <li>
            <b>Phone</b>{" "}
            <a href={`tel:${privacyContact.phone.replace(/\s+/g, "")}`}>
              {privacyContact.phone}
            </a>
          </li>
          <li>
            <b>Post</b> {privacyContact.post}
          </li>
        </ul>
        <p>We aim to respond within one day.</p>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Mbolo Eats Privacy Policy"
      standfirst="How we collect, use and share your information when you order food through the Mbolo Eats app."
      meta={[
        { label: "Version", value: "Draft 1" },
        { label: "Effective", value: "1 January 2027" },
        { label: "Applies to", value: "Mbolo Eats for Android and iOS" },
      ]}
      note={{
        title: "This policy is a draft",
        body: (
          <p>
            It describes what the Mbolo Eats app actually does, but it has not yet been
            reviewed by a qualified practitioner against Cameroonian law, and the items marked{" "}
            <Todo>like this</Todo> are not yet settled. It is published here for review and is
            not yet in force.
          </p>
        ),
      }}
      sections={sections}
    />
  );
}
