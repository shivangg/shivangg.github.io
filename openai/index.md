---
layout: page
title: OpenAI Gym
permalink: /openai/
---

## Reinforcement Learning using OpenAI Gym

OpenAI gym was founded/invested by Elon Musk in order to open source the AI for everyone and also make it safe.
    

## Technical Concepts

### Reinforcement Learning
    
In RL, the agent performs an **action** in an environment and receives an **observation** and **reward** accordingly. The RL algorithms aim to maximize the total *reward* by the environment. Recently, RL + Deep Learning in Robotics led to promising results in _general_ algorithms like *Policy gradient* and *Q-Learning*.

### OpenAI gym

Serves the purpose of toolkit for RL. It includes:

1. Collection of *Benchmark problems*
2. *Common interface* for comparing performance of various RL algorithms.

#### Important Points

* OpenAI Gym has a wide collections of tasks called `environment`.

* It maintains an online scoreboard of all the environments.
<!-- The environment is formalized as the _POMDP_. -->

* OpenAI follows an episodic arrangement where each experience is broken down into series of `episodes`.

##### Episodes
Each episode starts with a *random* initial stage and continues until its termination.
_AIM_ of this type of arrangement is to

1. Maximize the reward probability.
2. Achieve higher performance in as few episodes as possible.

#### Design Process

1. **Making environments, not agents**
        Thus, giving the users the freedom to design their own agents interfaces.

2. **Quality comparisons**
        Rather than just comparing the final performance of the algorithm, OpenAI also takes into consideration the sample complexity, i.e, time taken by the agent to learn the environment. Final performance is measured as the average reward per episode after the agent has completed the learning. Learning time is measured as the number of iterations needed to attain a specified threshold value.  Without this, the comparisons would had been of the computational resources rather than the algorithm quality.