# _**Creating Snapshots**_

## Initializing a repository

    git init

## Staging files

> git add file1.js

`# Stages a single file`

> git add file1.js file2.js

`# Stages multiple files`

> git add \*.js

`# Stages with a pattern`

> git add .

`# Stages the current directory and all its content`

## Viewing the status

To see what changes have been staged,

> git status #

- `Full status`

> git status -s #

- `Short status` The `-s` option stands for `--short

## Committing the staged files

> git commit -m “Message”

- `# Commits with a one-line message`

> git commit

- `# Opens the default editor to type a long message`

## Skipping the staging area

    git commit -am “Message”

## Removing files

    git rm file1.js

- `# Removes from working directory and staging area`

> git rm --cached file1.js

- `# Removes from staging area only`

## Renaming or moving files

    git mv file1.js file1.txt

## Viewing the staged/unstaged changes

    git diff

`# Shows unstaged changes`

    git diff --staged

`# Shows staged changes`

    git diff --cached

`# Same as the above`

## Viewing the history

    git log

`# Full history`

    git log --oneline

`# Summary`

    git log --oneline --decor

    git log --reverse

`# Lists the commits from the oldest to the newest`

    git show [commit]

## Viewing a commit

    git show 921a2ff

`# Shows the given commit`

    git show HEAD

` # Shows the last commit`

    git show HEAD~2

`# Two steps before the last commit`

    git show HEAD:file.js

`# Shows the version of file.js stored in the last commit`

## Unstaging files (undoing git add)

    git restore --staged file.js

`# Copies the last version of file.js from repo to index`

## Discarding local changes

    git restore file.js

`# Copies file.js from index to working directory`

    git restore file1.js file2.js

`# Restores multiple files in working directory`

    git restore .

`# Discards all local changes (except untracked files)`

    git clean -fd

`# Removes all untracked files
Restoring an earlier version of a file`

    git checkout HEAD^ -- file

`# Checkout the version at the parent

    git restore --source=HEAD~2 file.js

## Ignoring files

**Create or update**

    .gitignore:

> file-to-ignore
> directory-to-ignore/

    \*.log

`# ignore all log files`

# _**Browsing History**_

## Viewing the history

    git log

    git log --stat

`# Shows the list of modified files`

    git log --patch

`# Show diffs between versions`

    git log -n3

`# Limit number of commits shown`

    git show

`<commit>` `# Shows commit`

    git log --patch

`# Shows the actual changes (patches)`

## Filtering the history

    git log -3

`# Shows the last 3 entries`

    git log master~2..master

`# Shows the difference between two branches`

    git log --follow <file>

`# Tracks a file over time, showing where it came from.`

## Searching the history

    git log -S<string>

    git log --author=“Mosh”

    git log --before=“2020-08-17”

    git log --after=“one week ago”

    git log --committer=“John"

    git log --grep=“GUI”

`# Commits with “GUI” in their message`

    git log -S“GUI”

`# Commits with “GUI” in their patches`

    git log hash1..hash2

`# Range of commits`

    git log file.txt

`# Commits that touched file.txt`

## Formatting the log output

    git log --pretty=format:”%an committed %H”

## Creating an alias

    git config --global alias.lg “log --oneline"

## Viewing a commit

    git show HEAD~2

    git show HEAD~2:file1.txt

`# Shows the version of file stored in this commit`

## Comparing commits

    git diff HEAD~2 HEAD

`# Shows the changes between two commits`

    git diff HEAD~2 HEAD file.txt

`# Changes to file.txt only`

## Checking out a commit

    git checkout dad47ed

`# Checks out the given commit`

    git checkout master

`# Checks out the master branch`

## Finding a bad commit

    git bisect start
    git bisect bad

`# Marks the current commit as a bad commit`

    git bisect good ca49180

`# Marks the given commit as a good commit`

    git bisect reset

`# Terminates the bisect session`

## Finding contributors

    git shortlog

## Viewing the history of a file

    git log file.txt

`# Shows the commits that touched file.txt`

    git log --stat file.txt

`# Shows statistics (the number of changes) for file.txt`

    git log --patch file.txt

`# Shows the patches (changes) applied to file.txt`

## Finding the author of lines

    git blame file.txt

`# Shows the author of each line in file.txt`

## Tagging

    git tag v1.0

`# Tags the last commit as v1.0`

    git tag v1.0 5e7a828

`# Tags an earlier commit`

    git tag

`# Lists all the tags`

    git tag -d v1.0

`# Deletes the given tag`

# _**Branching & Merging**_

## Managing branches

    git branch bugfix

`# Creates a new branch called bugfix`

    git checkout bugfix

`# Switches to the bugfix branch`

    git switch bugfix

`# Same as the above`

    git switch -C bugfix

`# Creates and switches`

    git branch -d bugfix

`# Deletes the bugfix branch`

## Comparing branches

    git log master..bugfix

`# Lists the commits in the bugfix branch not in master`

    git diff master..bugfix

`# Shows the summary of changes`

## Stashing

    git stash push -m “New tax rules”

`# Creates a new stash`

    git stash list `# Lists all the stashes

    git stash show stash@{1}

`# Shows the given stash`

    git stash show 1

`# shortcut for stash@{1}`

    git stash apply 1

`# Applies the given stash to the working dir`

    git stash drop 1

`# Deletes the given stash`

    git stash clear

`# Deletes all the stashes`

## Merging

    git merge bugfix

`# Merges the bugfix branch into the current branch`

    git merge --no-ff bugfix

`# Creates a merge commit even if FF is possible`

    git merge --squash bugfix

`# Performs a squash merge`

    git merge --abort

`# Aborts the merge`

## Viewing the merged branches

    git branch --merged

`# Shows the merged branches`

    git branch --no-merged

`# Shows the unmerged branches`

# Rebasing

    git rebase master

`# Changes the base of the current branch`

# Cherry picking

    git cherry-pick dad47ed

`# Applies the given commit on the current branch`

# **_Collaboration_**

## Cloning a repository

    git clone url

## Syncing with remotes

    git fetch origin master

`# Fetches master from origin`

    git fetch origin

`# Fetches all objects from origin`

    git fetch

    git merge origin/master

`# Shortcut for “git fetch origin”`

    git pull

`# Fetch + merge`

    git push origin master

`# Pushes master to origin`

    git push

`# Shortcut for “git push origin master”`

## Sharing tags

    git push origin v1.0 `# Pushes tag v1.0 to origin
    git push origin —delete v1.0

Sharing branches
git branch -r

`# Shows remote tracking branches`

    git branch -vv

`# Shows local & remote tracking branches`

    git push -u origin bugfix

`# Pushes bugfix to origin`

    git checkout master

    git push -d origin bugfix

`Deleting a remote branch:`

`# Removes bugfix from origin`

### **Writer the Details table contain**

| Topics | Code | Commands |
| ------ | ---- | -------- |

| Remove | git rm filenae | Removes from working|
| Data | git add filename | Adds to staging area|

# **WebDesign Code**

## HTML Programming

```HTML -Anirudh.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Best Music player List</title>
    <link rel="website icon" type="png" href="./Best.png" />
    <link rel="stylesheet" href="Anirudh.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
  </head>
  <body>
    <div class="main">
      <!-- top section -->
      <img class="image" src="./images Anirudh/main.jpg" />
      <div class="top_section">
        <h5>
          Anirudh Ravichander hit songs&nbsp;&nbsp;
          <i class="fa fa-headphones" aria-hidden="true"></i>
        </h5>
      </div>
      <div class="tracks"></div>
        <!-- list of song will add here from 'music_list.js' file -->
        <!-- small music player -->
        <div class="small_music_player">
          <div class="s_player_img">
            <div class="playing_img">
              <img src="images/1.jpeg" alt="" />
            </div>

            <!-- wave animation part -->
            <div class="wave_animation">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </div>
          </div>
          <div class="song_detail">
            <p id="song_name">Make Me Move</p>
            <p id="artist_name">Music Sound</p>
          </div>
          <i class="fa fa-chevron-up" aria-hidden="true" id="up_player"></i>
        </div>

        <!-- big music player -->
        <!--  popup music player part -->
        <div class="popup_music_player">
          <div class="top">
            <p>Nice songs</p>
            <i
              class="fa fa-chevron-down"
              aria-hidden="true"
              id="down_player"
            ></i>
          </div>
          <div class="song_img">
            <img src="images/1.jpeg" alt="" />
          </div>

          <div class="song_description">
            <h3 id="current_track_name">Make Me Move</h3>
            <p id="current_singer_name">Music Sound</p>
          </div>

          <div class="controlls">
            <div class="progress_part">
              <input
                type="range"
                min="0"
                max="100"
                value="0"
                id="slider"
                onchange="change_duration()"
              />
              <div class="durations">
                <p id="current_duration">0:00</p>
                <p id="total_duration">0:00</p>
              </div>
            </div>

            <!-- controlls btn's -->
            <div class="controlls_btns">
              <button id="backward_btn">
                <i class="fa fa-step-backward" aria-hidden="true"></i>
              </button>
              <button id="play_pause_btn">
                <i class="fa fa-play" aria-hidden="true"></i>
              </button>
              <button id="forward_btn">
                <i class="fa fa-step-forward" aria-hidden="true"></i>
              </button>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- song list file -->
    <script src="Amusic_list.js"></script>
    <!-- javascript -->
    <script src="Amain.js"></script>
    <div class="button">
      <a href="music.html" class="Previous"> Previous </a>
      <a href="imman.html" class="Next">Next</a>
    </div>
  </body>
</html>
```

```javaScript -Amain.js
// get the audio element and create a new Audio() object from it
var myAudio = document.getElementById("myAudio");
var musicPlayer = new Audio(myAudio);

// add event listeners to play/pause button
document.getElementById('play_pause_btn').addEventListener('click', function () {
  togglePlay(); // calls the 'togglePlay()' function
});
let btn = document.querySelectorAll(".song #play_btn");
let song = document.querySelectorAll("#music");

/*popup music player part*/
let p_m_player = document.querySelector(".popup_music_player");
let down_player = document.querySelector("#down_player");
let current_track_name = document.querySelector("#current_track_name");
let current_singer_name = document.querySelector("#current_singer_name");
let song_img = document.querySelector(".song_img");

/*controlls part*/
let play_pause_btn = document.querySelector("#play_pause_btn");
let slider = document.querySelector("#slider");
let forward_btn = document.querySelector("#forward_btn");
let backward_btn = document.querySelector("#backward_btn");

/*songs duration*/
let current_duration = document.querySelector(
  ".controlls .progress_part #current_duration"
);
let total_duration = document.querySelector(
  ".controlls .progress_part #total_duration"
);

/*small music player part*/
let s_m_player = document.querySelector(".small_music_player");
let playing_img = document.querySelector(".playing_img");
let wave_animation = document.querySelector(".wave_animation");
let up_player = document.querySelector("#up_player");
let song_name = document.querySelector("#song_name");
let artist_name = document.querySelector("#artist_name");

/*default values*/
let is_song_played = false;
let song_status = false;
let index_no = 0;

btn.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    s_m_player.style.transform = "translateY(0px)";

    if (index != index_no) {
      song_status = false;
    }

    index_no = index;

    song[index].currentTime = 0;

    if (song_status == false) {
      play_song();
    } else {
      pause_song();
    }
  });
});

/*pause song*/
function pause_song() {
  song[index_no].pause();
  song_status = false;
  clearInterval(update_second);
  wave_animation.style.opacity = "0";
  play_pause_btn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

/*This function will update every 1s*/
function update_second() {
  let position = 0;

  // update slider position
  if (!isNaN(song[index_no].duration)) {
    position = song[index_no].currentTime * (100 / song[index_no].duration);
    slider.value = position;
  }

  let durationMinutes = Math.floor(song[index_no].duration / 60);
  let durationSeconds = Math.floor(
    song[index_no].duration - durationMinutes * 60
  );
  total_duration.textContent = durationMinutes + ":" + durationSeconds;

  // Calculate the time left and the total duration
  let curr_minutes = Math.floor(song[index_no].currentTime / 60);
  let curr_seconds = Math.floor(song[index_no].currentTime - curr_minutes * 60);

  // Add a zero to the single digit time values
  if (curr_seconds < 10) {
    curr_seconds = "0" + curr_seconds;
  }
  if (durationSeconds < 10) {
    durationSeconds = "0" + durationSeconds;
  }

  // Display the updated duration
  current_duration.textContent = curr_minutes + ":" + curr_seconds;

  // function will run when the song is over
  if (song[index_no].ended) {
    clearInterval(update_second);
    wave_animation.style.opacity = "0";
    play_pause_btn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
  }
}

/*show popup music player */
up_player.addEventListener("click", function () {
  p_m_player.style.transform = "translateY(0%)";
});

/* Hide popup music player */
down_player.addEventListener("click", function () {
  p_m_player.style.transform = "translateY(110%)";
});

/*play pause btn inside the popup Music player*/
play_pause_btn.addEventListener("click", function () {
  if (song_status == false) {
    song[index_no].play();
    song_status = true;
    wave_animation.style.opacity = "1";
    this.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
  } else {
    song[index_no].pause();
    song_status = false;
    wave_animation.style.opacity = "0";
    this.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
  }
});

// change slider position
function change_duration() {
  slider_position = song[index_no].duration * (slider.value / 100);
  song[index_no].currentTime = slider_position;
}

/*forward btn (next)*/
forward_btn.addEventListener("click", function () {
  index_no = index_no + 1;
  if (index_no == All_song.length) {
    index_no = 0;
  }

  song[index_no].currentTime = 0;
  play_song();
});

/*backward btn (previous)*/
backward_btn.addEventListener("click", function () {
  if (index_no == 0) {
    index_no = All_song.length - 1;
  } else {
    index_no = index_no - 1;
  }

  song[index_no].currentTime = 0;

  play_song();
});

/*play function*/
function play_song() {
  song[index_no].play();

  if (is_song_played == true) {
    document.querySelector(".active_song").pause();
    document.querySelector(".active_song").classList.remove("active_song");
  } else {
    is_song_played = true;
  }

  song[index_no].classList.add("active_song");

  song_status = true;
  setInterval(update_second, 1000);
  wave_animation.style.opacity = "1";
  p_m_player.style.transform = "translateY(0%)";

  song_img.innerHTML = `<img src="${All_song[index_no].img}" />`;
  playing_img.innerHTML = `<img src="${All_song[index_no].img}" />`;

  song_name.innerHTML = All_song[index_no].name;
  artist_name.innerHTML = All_song[index_no].singer;

  current_track_name.innerHTML = All_song[index_no].name;
  current_singer_name.innerHTML = All_song[index_no].singer;
  play_pause_btn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

```
