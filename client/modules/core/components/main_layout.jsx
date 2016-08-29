import React from 'react';
import {AppBar, Navigation, Link} from 'react-toolbox';

const Layout = ({
	content = () => null
}) => (
	<div>
		<div>
			<AppBar className="appbar" fixed>
				<a href="/">La Jungla</a>
				<Navigation className="appbar-right">
					<Link href={FlowRouter.path('product.list')} label="Test Link" icon="inbox"/>
				</Navigation>
			</AppBar>
			{content()}
		</div>
	</div>
);

export default Layout;
