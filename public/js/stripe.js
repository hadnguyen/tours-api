/* eslint-disable */
import axios from 'axios';

const stripe = Stripe(
  'pk_test_51L5Pn1CDadMRNO6O5m5SNjXVFhRiRa3va4i0sfUQLPFwh6kBMciqTbMhDmVrHII8y53VhOnlu54fEcs4CeCw146W00b0bIP2zM'
);

export const bookTour = async (tourId) => {
  try {
    // Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
  }
};
