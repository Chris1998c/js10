const order = {};

if (!order?.customer?.address?.city) {
  console.log('La città è obbligatoria');
}