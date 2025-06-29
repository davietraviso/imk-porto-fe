import React, { createContext, useContext, useEffect, useState } from 'react';

const Tema = createContext();

export const useTheme = () => useContext(Tema);

