papers = open('papers.txt', 'r', encoding='utf8').read().splitlines()

index_papers = '\n'.join([('<tr%s><td>%02d</td><td>%s</td></tr>' % (' style="display: none;"' if i >= 5 else '', i + 1, papers[i])) for i in range(len(papers))])
filtered_papers = [papers[i] for i in range(len(papers)) if 'Wei Ye' in papers[i]]
weiye_papers = '\n'.join([('<tr><td>%02d</td><td>%s</td></tr>' % (i + 1, papers[i])) for i in range(len(filtered_papers))])

with open('index.html', 'w', encoding='utf8') as outfile:
    print(open('index_template.html', 'r', encoding='utf8').read().replace('[!template]', index_papers), file=outfile)
with open('weiye.html', 'w', encoding='utf8') as outfile:
    print(open('weiye_template.html', 'r', encoding='utf8').read().replace('[!template]', weiye_papers), file=outfile)