import LegalPage, { Todo } from "./LegalPage";
import { company, privacyContact } from "../data/site";

/**
 * Terms of service for the Mbolo Eats app, served at /legal/terms-of-service.
 *
 * Written from what the app actually does — the order statuses, payment
 * methods, delivery-fee rule and delivery code all come from the backend, not
 * from a template. Anything that is a legal choice rather than an observable
 * behaviour is left as a <Todo> for a practitioner to settle.
 */
const sections = [
  {
    id: "who-we-are",
    title: "Who we are and what these terms cover",
    body: (
      <>
        <p>
          Mbolo Eats is a food delivery service operating in Cameroon, run by{" "}
          {company.legalName}, of {company.registeredAddress}. These terms are the
          agreement between you and that company when you use the Mbolo Eats app to browse
          restaurants or place an order. Where they say &ldquo;we&rdquo; or &ldquo;us&rdquo;,
          they mean that company; &ldquo;you&rdquo; means you.
        </p>
        <p>
          By placing an order you accept these terms. If you do not accept them, do not place
          an order. How we handle your personal information is covered separately in our{" "}
          <a href="/legal/privacy-policy">Privacy Policy</a>.
        </p>
      </>
    ),
  },
  {
    id: "who-can-use-it",
    title: "Who can use Mbolo Eats",
    body: (
      <>
        <p>
          You must be at least 16 to hold an account, and you must be able to receive a
          delivery at the address you give us.
        </p>
        <p>
          You need to confirm your email address before you can place your first order. Until
          you do, you can browse restaurants but checkout will be refused.
        </p>
      </>
    ),
  },
  {
    id: "your-account",
    title: "Your account",
    body: (
      <>
        <p>
          Keep the details on your account accurate — particularly the phone number, because
          it is how the rider reaches you when they arrive.
        </p>
        <p>
          Your sign-in is yours. Do not share your password, and tell us promptly if you think
          someone else has got into your account. Orders placed from your account are treated
          as yours unless you tell us otherwise.
        </p>
      </>
    ),
  },
  {
    id: "our-role",
    title: "What we do, and what the restaurant does",
    body: (
      <>
        <p>
          Restaurants decide what is on their menu, what it costs, and how it is prepared. We
          show you those menus, take your order, pass it to the restaurant, and bring the food
          to you.
        </p>
        <p>
          <b>You buy the food from the restaurant, not from us.</b> For that sale we act as the
          restaurant&apos;s agent: we put its menu in front of you, take your order and collect
          your money on its behalf. The contract for the food is between you and the restaurant.
        </p>
        <p>
          Delivery is different. That is our own service, provided by us to you, and the
          delivery fee is ours. So the restaurant answers for the food, and we answer for
          getting it to you.
        </p>
      </>
    ),
  },
  {
    id: "placing-an-order",
    title: "Placing an order",
    body: (
      <>
        <p>
          When you check out, your order goes to the restaurant and sits as{" "}
          <b>pending</b> until they respond. Nothing is agreed at that point: the restaurant
          may not have the dish, or may be too busy to take it on.
        </p>
        <p>
          Your order is accepted when the restaurant confirms it, and the app moves it to{" "}
          <b>confirmed</b>. From there you will see it move through preparing, on its way, and
          delivered. If the restaurant cannot take it, the order is cancelled and you are told
          in the app.
        </p>
      </>
    ),
  },
  {
    id: "prices-and-fees",
    title: "Prices and fees",
    body: (
      <>
        <p>
          All prices are in Central African CFA francs (XAF), as shown in the app. Restaurants
          set the price of each dish, and can change it — the price you pay is the one shown
          when you check out.
        </p>
        <p>
          Delivery is charged by distance, at <b>500 XAF per mile</b> between the restaurant
          and the address you are ordering to. The app works this out before you confirm, and
          shows it as a separate line. Your total is the cost of the dishes plus that delivery
          fee; we do not add a service charge on top.
        </p>
        <p>
          Because the fee depends on where you are, we cannot price or route a delivery without
          your location. If you refuse the location permission, you can still browse but not
          order.
        </p>
      </>
    ),
  },
  {
    id: "paying",
    title: "Paying",
    body: (
      <>
        <p>You can pay in three ways:</p>
        <ul className="legal__list">
          <li>
            <b>MTN Mobile Money</b> or <b>Orange Money</b> — we send a charge request to your
            provider using the number you give us, and you authorise it with them. We never see
            or store your PIN.
          </li>
          <li>
            <b>Cash</b> — you pay the rider when your food arrives. Please have the right
            amount where you can; riders do not always carry change.
          </li>
        </ul>
        <p>
          We do not accept cards. If a mobile money payment fails, your order will not go
          ahead, and you are welcome to try again or choose cash.
        </p>
        <p>
          We collect the price of the food as the restaurant&apos;s agent, so paying us — or
          handing cash to the rider — settles what you owe the restaurant for that order. You
          do not have to pay the restaurant separately.
        </p>
      </>
    ),
  },
  {
    id: "delivery",
    title: "Delivery and your delivery code",
    body: (
      <>
        <p>
          Delivery times shown in the app are estimates, not promises. Traffic, weather and how
          busy a kitchen is all move them, and we would rather give you a realistic guess than a
          precise-sounding one we cannot keep.
        </p>
        <p>
          Every order gets a five-digit delivery code, shown on your order screen. Give it to
          the rider when they hand over your food; that is how the delivery is recorded as
          completed. Do not give the code to anyone before the food is in your hands, and never
          over the phone or by message.
        </p>
        <p>
          Please be reachable on the number you gave, and able to accept the delivery. If the
          rider cannot reach you, or nobody is at the address, the order is treated as
          delivered: we cannot refund it, and the food is not held for you to collect or sent
          out again later. The restaurant has already cooked it to order and will not take it
          back, so the cost stands whether or not the food reached you. That is why it matters
          that the number on your account is right and that someone is there to take the
          delivery.
        </p>
      </>
    ),
  },
  {
    id: "changing-or-cancelling",
    title: "Changing or cancelling an order",
    body: (
      <>
        <p>
          The app does not currently let you cancel an order yourself. If you need to change or
          cancel one, contact us straight away on{" "}
          <a href={`tel:${privacyContact.phone.replace(/\s+/g, "")}`}>
            {privacyContact.phone}
          </a>{" "}
          or <a href={`mailto:${privacyContact.email}`}>{privacyContact.email}</a>. Whether we
          can stop it depends on how far along the restaurant is.
        </p>
        <p>
          A restaurant can cancel an order it has taken — if an item runs out, for example. If
          that happens you are told in the app, and any payment you have already made is
          refunded in full, including the delivery fee. Refunds are usually back with you
          within the hour, and within two days at the latest.
        </p>
        <p>
          If you chose to pay cash, nothing has been taken from you, so there is nothing to
          return.
        </p>
      </>
    ),
  },
  {
    id: "if-something-goes-wrong",
    title: "If something goes wrong with your order",
    body: (
      <>
        <p>
          Tell us as soon as you can — the same day, while the facts are fresh and the
          restaurant still has its records. Send us the order number and, where it helps, a
          photograph.
        </p>
        <p>
          <Todo>set out the refund and redress policy</Todo>. We keep completed orders for six
          months, so raise anything you want looked at inside that window.
        </p>
      </>
    ),
  },
  {
    id: "the-food",
    title: "The food itself",
    body: (
      <>
        <p>
          The restaurant prepares your food and is responsible for what is in it, how it is
          cooked, and how it is packed. Your contract for the food is with them, as set out in{" "}
          <a href="#our-role">What we do, and what the restaurant does</a>.
        </p>
        <p>
          <b>Allergies.</b> The app does not carry allergen information, and we cannot tell you
          what a dish contains. If you have an allergy or intolerance, contact the restaurant
          directly before you order. Do not rely on the delivery notes field for this: it is
          passed to the rider for directions, not read by the kitchen.
        </p>
      </>
    ),
  },
  {
    id: "riders",
    title: "Riders",
    body: (
      <p>
        The rider carrying your order sees your name, delivery address, phone number and
        delivery notes, for that order only. Please treat them courteously. We may refuse
        service to anyone who abuses or threatens a rider or a restaurant.
      </p>
    ),
  },
  {
    id: "what-you-agree-not-to-do",
    title: "What you agree not to do",
    body: (
      <>
        <p>When using Mbolo Eats, you agree not to:</p>
        <ul className="legal__list">
          <li>Place orders you do not intend to pay for or accept.</li>
          <li>Give a false name, phone number or delivery address.</li>
          <li>Use someone else&apos;s account, or let someone else use yours.</li>
          <li>
            Abuse, threaten or harass restaurant staff, riders or our team, in the app or at the
            door.
          </li>
          <li>
            Try to break into, overload, scrape or reverse-engineer the app or the systems
            behind it.
          </li>
          <li>Use the service for anything unlawful.</li>
        </ul>
      </>
    ),
  },
  {
    id: "availability",
    title: "Availability of the service",
    body: (
      <p>
        We aim to keep Mbolo Eats running, but we do not promise it will always be available.
        It depends on restaurants being open, riders being on shift, and mobile networks and
        payment providers working. We may change features, add or remove restaurants, or take
        the service down for maintenance.
      </p>
    ),
  },
  {
    id: "our-responsibility",
    title: "Our responsibility to you",
    body: (
      <>
        <p>
          We are responsible for running the app, and for the delivery itself, with reasonable
          care and skill. We are not responsible for the food, which you buy from the
          restaurant — see <a href="#our-role">What we do, and what the restaurant does</a>.
          Nor are we responsible for things outside our control, such as a network outage at a
          payment provider or a road closed by weather.
        </p>
        <p>
          <Todo>set the limits of liability, and any cap</Todo>. Nothing in these terms removes
          a right you have under law that cannot be removed by agreement.
        </p>
      </>
    ),
  },
  {
    id: "ending-your-access",
    title: "Closing your account, and suspension",
    body: (
      <>
        <p>
          You can ask us to close your account at any time — see{" "}
          <a href="/legal/privacy-policy#deleting-your-account">
            Deleting your account
          </a>{" "}
          in the Privacy Policy for what happens to your information.
        </p>
        <p>
          We may suspend or close an account that breaks these terms, or where we reasonably
          suspect fraud. Where we can, we will tell you why.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        We may update these terms. If we do, we will change the effective date above and tell
        you in the app when the change matters. The terms that apply to an order are the ones
        in force when you placed it.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law and disputes",
    body: (
      <p>
        These terms are governed by <Todo>governing law</Todo>, and disputes go before{" "}
        <Todo>the courts that will hear them</Todo>. Please contact us first: most problems are
        quicker to fix directly.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <>
        <p>Questions about these terms, or about an order:</p>
        <ul className="legal__list">
          <li>
            <b>Email</b> <a href={`mailto:${privacyContact.email}`}>{privacyContact.email}</a>
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

export default function TermsOfService() {
  return (
    <LegalPage
      title="Mbolo Eats Terms of Service"
      standfirst="The agreement between you and us when you order food through the Mbolo Eats app."
      meta={[
        { label: "Version", value: "Draft 1" },
        { label: "Effective", value: "1 January 2027" },
        { label: "Applies to", value: "Mbolo Eats for Android and iOS" },
      ]}
      sections={sections}
    />
  );
}
