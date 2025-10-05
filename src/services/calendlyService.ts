const CALENDLY_API_BASE = 'https://api.calendly.com';

export const getCalendlyUser = async (accessToken: string) => {
  const response = await fetch(`${CALENDLY_API_BASE}/users/me`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

export const getEventTypes = async (accessToken: string, userUri: string) => {
  const response = await fetch(`${CALENDLY_API_BASE}/event_types?user=${userUri}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

export const getScheduledEvents = async (accessToken: string, userUri: string) => {
  const response = await fetch(`${CALENDLY_API_BASE}/scheduled_events?user=${userUri}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};
