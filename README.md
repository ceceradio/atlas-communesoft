atlas-commmunesoft

atlas, a world carrying environment

CAPABILITIES

1. Astro.build website
2. Postgres
3. Redis

NEXT STEP:

1. Group Event scheduler
2. Instacart-esque integration?

PREREQUISITES

1. brew
2. nvm
3. node16
4. xcode-select --install

INITIAL SETUP

1. `brew install podman podman-compose`
1. `sudo /opt/homebrew/Cellar/podman/4.3.1/bin/podman-mac-helper install`
1. `podman machine init`
1. `podman machine start`
1. `echo '127.0.0.1 commune.local' | sudo tee -a /etc/hosts`
1. `podman-compose up -d`
1. open `https://commune.local:8443`

BUILD PAGES

1. `npm run build` in `./astro`

