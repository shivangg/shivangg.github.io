---
layout: post
title:  "Finally started with Jekyll!"
date:   2014-02-12 10:01:48
categories: jekyll update
---

## Journey of starting with Jekyll

So, after making up my mind to start blogging, I was particularly inclined 
towards **Jekyll**, `a blog-aware static site generator`. Installing it on linux wasnt a problem and had many guides and tutorials to
getting it installed by

* Installing Ruby
* Installing NodeJS
* Finally, installing Jekyll using the `gem` command.

Easy, but my problem was to install it on Windows as I do have to regularly
switch to Windows for tasks I find easier there(MATLAB, LabView, tinkering with software only available in Windows, etc). I could 
again go the same course of installing everything on Windows too but that would be cumbersome(and repetetive too, not cool!).

After exploring various options I had, I chose to download `portable Jekyll for Windows`. Just clone this repo and we're good to go! That's it!
But this method did have its flaws with its incremental generation. Whats that? It is a feature using which Jekyll
autogenerates the site, if you make any changes in your code. Otherwise, you would have to restart the Jekyll server everytime
to view the effect of your changes. 

Its really easy to get going just after getting Jekyll. Just put your posts in the `_posts` folder(folders really important ot Jekyll have _ 
bore their name). Only one thing to be really careful about-the naming convections for your posts.

`yyyy-dd-mm-the-name-of-post.md`

After doing this, just write your posts in Markdown in this file. To finally view your post, navigate to the root of your site folder and
run `jekyll serve` add `--incremental` flag to get auto-regeneration. Now, just visit, `localhost:4000` (see this in your terminal) in your browser to see your site up and running!

So, finally its started. I'll be blogging about everything that I will find was difficult to get through in the electrnics domain. `**Onto, the grand Line!**`

