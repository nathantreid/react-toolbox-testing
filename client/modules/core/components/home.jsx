import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid/lib/index';

const Home = () => (
	<Grid>
		<Row>
			<Col xs={12} sm={6}>
				<h1>Mantra</h1>
				<p>
					Welcome to Mantra 0.2.0.
				</p>
				<ul>
					<li>
						Read
						<a target="_blank" href="https://kadirahq.github.io/mantra/">spec</a>
					</li>
					<li>
						Learn
						<a target="_blank" href="https://github.com/sungwoncho/mantra-cli#commands">CLI</a>
					</li>
				</ul>
			</Col>
		</Row>
	</Grid>
);

export default Home;
