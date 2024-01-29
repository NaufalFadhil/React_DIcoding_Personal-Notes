import React from 'react';

const ThemeContext = React.createContext();

export const AuthProvider = ThemeContext.Provider;
export const AuthConsumer = ThemeContext.Consumer;

export default ThemeContext;