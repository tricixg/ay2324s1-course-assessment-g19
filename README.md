# PeerPrep

This is the GithubRepository for PeerPrep, a web-based platform for users to
collaborate on practicing Leetcode-style interview questions.

## Installation & Running the Application

#### Download the Release

Navigate to the
[Releases](https://github.com/CS3219-AY2324S1/ay2324s1-course-assessment-g19/releases)
on the right and select `Project`. Open the _Assets_ tab and click on _Source
code (zip)_ to download the release

#### Software Required

- [NodeJS](https://nodejs.org/en/)
- [Python3](https://www.python.org/downloads/)
- [Docker](https://www.docker.com/products/docker-desktop/)
- [Makefile](https://www.gnu.org/software/make/) (or
  [Make for Windows](https://gnuwin32.sourceforge.net/packages/make.htm))
- [Anaconda](https://www.anaconda.com/download) (or any Python environment
  management system)

#### Setup

- Ensure that Docker is running on your machine.
- Ensure ports 80, 3000, 3030, 5001, 5050, 5432, 6379, 8000, 9000 and 27017 are
  available on your machine.

#### Installation

Navigate into the `ay2324s1-course-assessment-g19` directory from the downloaded
release.

```bash
cd ay2324s1-course-assessment-g19
```

Run the following command to install all dependencies for the relevant modules.

```bash
make install
conda activate user-api
pip install -r ./user-api/requirements.txt
```

_If you do not have Makefile, then run the following commands in the command
line_

```bash
cd client/ && npm install
cd ../assistant-api/ && npm install
cd ../code-api/ && npm install
cd ../collaboration-api/ && npm install
cd ../question-api/ && npm install
cd ../user-api/
conda create --name user-api python=3.9
conda activate user-api
pip install -r ./user-api/requirements.txt
```

---

#### Running the Application

Run the following command to build and run the Docker containers for the
relevant modules.

```bash
make dev
```

_If you do not have Makefile, then run the following command_

```bash
docker-compose up
```

#### You can access the application @ [http://localhost:80](http://localhost:80)

#### Testing

You may sign in with an Admin account, use password 032190, and navigate to the
Questions tab on the sidebar. From there, you have access to a
`Prepopulate Questions (For Testing)` button to prepopulate your local database
with questions.
