const backendUrl = `http://localhost:8080/api`;

const frontendUrl = {
    host:`localhost:3001`,
    protocol: `http`
}

const tenantMode = 'multi'

const isPlanEnabled = false;
const stripePublishableKey = '';

export default {
  frontendUrl,
  backendUrl,
  tenantMode,
  isPlanEnabled,
  stripePublishableKey
};

