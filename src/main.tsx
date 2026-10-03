import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
if (rootElement == null) {
	throw new Error("Root element not found");
}

createRoot(rootElement).render(
	<StrictMode>
		<main>
			<header>
				<h1>Maksym Kutsenko</h1>
				<p>Backend Engineer · Lublin, Poland</p>
				<address>
					<a href="mailto:o01o11o011o0@gmail.com">o01o11o011o0@gmail.com</a>
					{" · "}
					<a href="tel:+380995251390">+380 99 525 13 90</a>
					{" · "}
					<a href="https://github.com/o01011">GitHub</a>
					{" · "}
					<a href="https://www.linkedin.com/in/maksym-kutsenko-7225ab269/">LinkedIn</a>
					{" · "}
					<a href="https://t.me/o0010111o">Telegram</a>
				</address>
			</header>

			<section>
				<h2>Summary</h2>
				<p>
					Full Stack Engineer with 5+ years of commercial experience designing and maintaining production-grade web applications. Backend-focused,
					building scalable REST and GraphQL APIs with NestJS, Express, and FastAPI, and integrating PostgreSQL, MongoDB, and Redis with robust
					authentication, caching, and queue systems. Frontend experience with React, Next.js, and TypeScript, including state management and
					performance optimization.
				</p>
				<p>
					Experienced in cross-functional teams with design, QA, and product management. Final-year Computer Science student at UCU with a foundation
					in distributed systems, microservices, cloud architecture, security, and networking.
				</p>
			</section>

			<section>
				<h2>Technical skills</h2>
				<ul>
					<li>
						<strong>Languages:</strong> TypeScript, JavaScript (ES2024), Python, SQL, Bash
					</li>
					<li>
						<strong>Backend:</strong> Node.js, NestJS, Express.js, FastAPI, REST, GraphQL (Apollo), WebSockets, JWT, Passport, class-validator,
						Swagger/OpenAPI, Helmet, rate limiting, Strategy and Repository patterns
					</li>
					<li>
						<strong>Frontend:</strong> React 18/19, Next.js 15 (App Router, SSR/ISR), TanStack Query, React Hook Form, Zod, Axios, MUI, Tailwind CSS
					</li>
					<li>
						<strong>Databases and ORMs:</strong> PostgreSQL (Prisma, Drizzle), MongoDB (Mongoose), Redis (ioredis), schema design, migrations, query
						optimization
					</li>
					<li>
						<strong>Architecture and distributed systems:</strong> Microservices, service discovery, message queues, inter-service communication,
						Strategy, Decorator, Builder, Proxy, Chain of Responsibility, and Facade patterns, UML
					</li>
					<li>
						<strong>DevOps and tooling:</strong> Docker, Docker Compose, GitHub Actions, AWS S3, NX and npm workspaces, Biome, commitlint, lint-staged
					</li>
					<li>
						<strong>Integrations:</strong> OpenAI, Notion, Slack webhooks, MQTT over TLS, third-party REST and GraphQL APIs
					</li>
					<li>
						<strong>Security and networking:</strong> OWASP, cryptography basics, Linux networking, VLANs, routing, VPNs, firewalls
					</li>
					<li>
						<strong>CS foundations:</strong> Algorithms and data structures, distributed computing, performance profiling, system design
					</li>
				</ul>
			</section>

			<section>
				<h2>Work experience</h2>

				<article>
					<h3>CodeGeeks Solutions — Full Stack Developer</h3>
					<p>
						<time>Jan 2023</time> – Present
					</p>

					<h4>AI-powered survey platform with asynchronous analytics</h4>
					<p>
						Built an asynchronous analysis pipeline for open-ended survey responses using OpenAI, so slow and costly analysis did not block requests.
						Added batching and deduplication to reduce token use, Redis caching to avoid repeat API calls, and retry with backoff for service outages.
						A rate-limited worker pool processes requests, while the dashboard uses optimistic updates.
					</p>
					<p>
						<strong>Technologies:</strong> Next.js 15, NestJS, BullMQ, Redis, PostgreSQL, Prisma, OpenAI API, TanStack Query, React Hook Form, Zod,
						Recharts
					</p>

					<h4>Multi-provider integration platform</h4>
					<p>
						Unified 3+ external REST APIs behind a shared domain model using provider strategies, a dependency-injected provider registry, and an
						anti-corruption layer. Added per-provider retries, circuit breakers, fallback providers, and shared frontend/backend contracts in an NX
						monorepo. The design allowed a new provider to be added without changing core logic.
					</p>
					<p>
						<strong>Technologies:</strong> NestJS, NX, Axios, MUI, TypeScript, Zod, PostgreSQL, Docker
					</p>

					<h4>GraphQL BFF with normalized cache and optimistic updates</h4>
					<p>
						Replaced multiple frontend REST requests with an Apollo GraphQL backend-for-frontend. Used DataLoader to batch requests and address N+1
						queries, normalized caching and optimistic updates in Apollo Client, and persisted queries to reduce payload size. Added server-side
						rendering with Next.js and a federation-ready schema.
					</p>
					<p>
						<strong>Technologies:</strong> Apollo Server, Apollo Client, GraphQL, Next.js, DataLoader, MUI, TypeScript
					</p>

					<h4>Slack-to-Notion activity automation</h4>
					<p>
						Automated team contribution tracking from Slack to Notion, saving an estimated five hours of manual work per week. Built queued webhook
						processing, idempotent event handling, identity and contribution mapping, and daily reconciliation. Added last-write-wins conflict
						resolution, retry and alerting, and throttling for Notion API limits.
					</p>
					<p>
						<strong>Technologies:</strong> Node.js, Slack API, Notion API, GitHub Actions, PostgreSQL, Redis, TypeScript
					</p>
				</article>

				<article>
					<h3>Golem Agency — Full Stack Developer</h3>
					<p>
						<time>Sep 2021</time> – <time>Jan 2023</time>
					</p>

					<h4>Real-time event streaming platform</h4>
					<p>
						Implemented real-time dashboard updates with a NestJS WebSocket gateway and Redis Pub/Sub for horizontal scaling. Used event-driven domain
						services, room-based subscriptions, buffered batch flushing to handle backpressure, and REST-based resynchronization after reconnects.
					</p>
					<p>
						<strong>Technologies:</strong> NestJS, Socket.IO, Redis Pub/Sub and Streams, PostgreSQL, React, TanStack Query, TypeScript, Docker
					</p>

					<h4>Multi-tenant API gateway with dynamic rate limiting</h4>
					<p>
						Built a gateway that proxies requests to internal services and enforces tenant isolation and quotas. Resolved tenants by subdomain, JWT
						claim, or header; implemented atomic sliding-window limits with Redis and Lua, circuit breakers for external APIs, request validation,
						audit logging, and centralized JWT authentication with refresh-token rotation and role-based access control.
					</p>
					<p>
						<strong>Technologies:</strong> NestJS, Express, Redis, Lua, JWT/Passport, Zod, Docker Compose, PostgreSQL
					</p>

					<h4>Background job processing system</h4>
					<p>
						Moved resource-intensive work out of HTTP requests into scalable worker containers. Implemented priority queues, exponential-backoff
						retries, a dead-letter queue with alerting, idempotency keys, scheduled jobs, and queue monitoring.
					</p>
					<p>
						<strong>Technologies:</strong> NestJS, BullMQ, Redis, Docker, PostgreSQL, Pino, Prometheus
					</p>

					<h4>Modular monolith with plugin architecture</h4>
					<p>
						Structured client-specific functionality as plugins in a NestJS modular monolith, avoiding separate client forks. Added database feature
						flags with Redis caching, shared contracts in an NX workspace, and module boundaries designed to support future service extraction.
					</p>
					<p>
						<strong>Technologies:</strong> NestJS, NX, PostgreSQL, Redis, TypeScript, Docker, GitHub Actions
					</p>
				</article>

				<article>
					<h3>Freelance — Full Stack Developer</h3>
					<p>
						<time>Jan 2019</time> – <time>Sep 2021</time>
					</p>
					<p>
						Delivered 10+ production web projects for diverse clients, from requirements gathering through deployment and maintenance. Built REST APIs
						with Node.js and Express, PostgreSQL and MongoDB schemas, and responsive React frontends. Implemented JWT authentication, role-based
						access, and third-party payment integrations, with direct client communication and post-launch support.
					</p>
				</article>
			</section>

			<section>
				<h2>Personal projects</h2>
				<ul>
					<li>
						<strong>
							<a href="https://github.com/o01011/dotfiles">Dotfiles</a>:
						</strong>{" "}
						Built a Bash tool to provision Git, Zsh, Homebrew, and NVM configurations, with repeatable installation, timestamped backups, symlink
						management, and uninstall support.
					</li>
					<li>
						<strong>
							<a href="https://github.com/o01011/docker">Docker</a>:
						</strong>{" "}
						Developed a lightweight Linux container runtime using user, mount, network, and PID namespaces. Implemented lifecycle commands, resource
						limits with cgroups, filesystem isolation, virtual networking with veth pairs and Netlink, configuration parsing, and a socket-based
						management server.
					</li>
					<li>
						<strong>
							<a href="https://github.com/maxonchickdev/software-development-blog">Software Development Blog</a>:
						</strong>{" "}
						Built a Vite, React, and TypeScript blog with Markdown publishing, GitHub-Flavored Markdown, syntax highlighting, strict type checking,
						Biome linting, commit hooks, and GitHub Pages deployment.
					</li>
					<li>
						<strong>
							<a href="https://github.com/o01011/distributed-botnet">Distributed Botnet</a>:
						</strong>{" "}
						Developed a containerized C++ master-worker platform with REST APIs, SQLite storage, and a React/TypeScript dashboard for monitoring
						worker status and response metrics.
					</li>
					<li>
						<strong>
							<a href="https://github.com/o01011/web-monorepo">Web Monorepo</a>:
						</strong>{" "}
						Created a TypeScript full-stack monorepo with NestJS and Express backends, Astro, Vite, and TanStack applications, and a shared
						Prisma/PostgreSQL data layer. Added JWT authentication, Redis caching, AWS S3, API documentation, rate limiting, Docker workflows, and
						automated checks.
					</li>
				</ul>
			</section>

			<section>
				<h2>Education</h2>
				<h3>Ukrainian Catholic University (UCU) — Faculty of Computer Science</h3>
				<p>BSc in Computer Science · English: Upper-Intermediate</p>

				<h4>Year 4</h4>
				<ul>
					<li>
						<strong>Computer Networks:</strong> OSI, L2 bridging, VLANs, STP, IPv4 routing, Linux networking, tunneling, VPNs, redundancy, and
						failover
					</li>
					<li>
						<strong>Digital Interfaces:</strong> UART, SPI, I²C, CAN, USB, and Ethernet hands-on labs
					</li>
					<li>
						<strong>Embedded Linux Systems:</strong> Buildroot and Radxa Zero 3E SBC bring-up
					</li>
					<li>
						<strong>IoT Systems Design:</strong> Secure web servers and dashboards, MQTT over TLS with ultrasonic sensors, Google Sheets cloud
						logging, and mobile monitoring
					</li>
				</ul>

				<h4>Year 3</h4>
				<ul>
					<li>
						<strong>Software Architecture:</strong> Microservices, service discovery with Consul, Hazelcast in-memory grid, message queues, and Docker
						Compose orchestration
					</li>
					<li>
						<strong>Artificial Intelligence:</strong> Intelligent agents, search, vector search and RAG, supervised learning, NLP, deep learning,
						computer vision, recommender systems, and reinforcement learning
					</li>
					<li>
						<strong>Information Security:</strong> Network and OS security, web application security, cryptography, and vulnerability scanning
					</li>
					<li>
						<strong>Systems Analysis:</strong> Random walks, cellular automata, epidemic and flocking simulations, network science, game theory, and
						reinforcement learning
					</li>
				</ul>

				<h4>Year 2</h4>
				<ul>
					<li>
						<strong>Computer Systems Architecture:</strong> C++ multithreading, parallel algorithms, SIMD, MPI, introductory CUDA, oneAPI and OpenCL,
						distributed solvers, and performance benchmarking
					</li>
					<li>
						<strong>Computer Organization:</strong> STM32 firmware, sensors, UART, x86 assembly, binary patching, logic synthesis, ALU design, and
						native C++ library development with Make and CMake
					</li>
					<li>
						<strong>Object-Oriented Programming (Java):</strong> OOP, generics, collections, GoF design patterns, UML, and refactoring
					</li>
					<li>
						<strong>Algorithms and Data Structures:</strong> Complexity analysis, sorting, searching, graphs, trees, dynamic programming, and
						algorithm benchmarking
					</li>
					<li>
						<strong>Web Technologies and Design:</strong> HTML, CSS, JavaScript, and a full-stack web project
					</li>
					<li>
						<strong>Databases, Mathematics, and Statistics:</strong> Relational modeling and SQL, linear algebra, Fourier transform, SVD, probability,
						Markov chains, estimation, hypothesis testing, and regression
					</li>
				</ul>

				<h4>Year 1</h4>
				<ul>
					<li>
						<strong>Programming Foundations (Python):</strong> Language fundamentals, OOP, file I/O, JSON, REST APIs, data structures, pandas EDA, and
						projects including a Telegram bot, game, and web application
					</li>
					<li>
						<strong>Discrete Mathematics:</strong> Logic, set theory, combinatorics, probability, graph theory, number theory, cryptography, Boolean
						functions, formal grammars, and automata
					</li>
					<li>
						<strong>Calculus I–II</strong>
					</li>
				</ul>
			</section>
		</main>
	</StrictMode>,
);
