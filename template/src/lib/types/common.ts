export type UserBase = {
  id: string;
  first_name: string;
  username: string;
  email: string;
  last_name: string;
  last_login: string;
  profile_picture_url: string;
  phone_number: string;
  mfa_enabled: boolean;
};

/**
 * Shape of the auth context that Care FE exposes to plugs through
 * `window.AuthUserContext`. Mirrors `AuthContextType` in care_fe
 * (`src/hooks/useAuthUser.ts`); only the members a plug commonly needs are
 * typed here — extend this type if your plug uses more of the host context.
 */
export type AuthContextType = {
  user: UserBase | undefined;
  isAuthenticating: boolean;
  isVerifyingMFA: boolean;
  signOut: () => Promise<void>;
};
