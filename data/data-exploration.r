library(tidyverse)

# load data and change to factors  
d <- read_csv('raw-data.csv') %>% 
  mutate(
    variant = as.factor(variant),
    chain = as.factor(chain)
    )

# check whether there are double submissions
d %>% pull(prolific_pid) %>% table() %>% max()

# check distribution of chain-variant-generation triples
d %>% select(submission_id, chain, variant, generation) %>% 
  unique() %>% 
  group_by(chain, variant, generation) %>% 
  summarize(n = n()) %>% 
  View()

# built "generation 0" data from initial seeds (from trial.csv)
d_initial <-  d %>% 
  filter(generation == 1) %>% 
  mutate(
    generation = 0,
    guess = anchor
  )

# plot development of guesses over generations
# for each item and variant (= seed)
d %>% 
  rbind(d_initial) %>% 
  ggplot(aes(x = generation, y = guess, color = chain)) +
  geom_path() +
  facet_grid(item ~ variant, scales = "free")
# it looks like the effect of the initial seed is washed out 
# quickly after a number of trials

# check if 'anchor' is always previous participant's 'guess'
d %>% select(submission_id, variant, item, chain, generation, anchor, guess) %>% 
  arrange(item,variant,chain,generation) %>% 
  View()
