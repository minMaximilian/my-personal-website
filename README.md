# My Personal Website
## How to build it
To build the docker image you need to clone the repo, and run docker build.

To do so you need to follow docker installation process on:
https://docs.docker.com/get-docker/

Then run these following commands,

`git clone https://github.com/minMaximilian/my-personal-website`

`docker build . -t my-personal-website`

## How to run the docker image

`docker run -p 80:80 my-personal-website`
