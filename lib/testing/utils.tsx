import { render, RenderOptions } from '@testing-library/react';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';

const Providers = ({ children }: { children: React.ReactElement }) => {
	return <ThemeProvider theme="">{children}</ThemeProvider>;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
	render(ui, { wrapper: Providers as React.ComponentType, ...options });

export * from '@testing-library/react';
export { customRender as render };
