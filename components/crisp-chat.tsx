"use client";

import { useEffect } from "react";
 import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
     Crisp.configure("118e9c6a-df6e-4866-881c-ec6fb4ac2bbe");
  }, []);

  return null;
};