import React from 'react';

const Header = props => {
	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="/">
					{props.title}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="/">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">
								Link
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="/"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Dropdown
							</a>
							<div
								className="dropdown-menu"
								aria-labelledby="navbarDropdown"
							>
								<a className="dropdown-item" href="/">
									Action
								</a>
								<a className="dropdown-item" href="/">
									Another action
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="/">
									Something else here
								</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
