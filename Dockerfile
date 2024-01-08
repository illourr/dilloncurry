FROM oven/bun

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN bun install --only=production

# Copy local code to the container image.
COPY . ./

# Build the application
RUN bun run build

ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000

# Run the web service on container startup.
CMD bun ./dist/server/entry.mjs
