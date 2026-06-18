### Route 

## Echanges
https://www.wiki-masters.com/trades

#  Bouton échanger
<button class="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-accent)] text-[var(--color-accent-foreground)] text-sm font-semibold hover:bg-[var(--color-accent-light)] transition-colors cursor-pointer">
    <span>+</span> 
    <span class="hidden sm:inline">Proposer un échange</span>
    <span class="sm:inline">Échanger</span>
</button>

# -> document.querySelector('main > div > div > div > div > button');


## Input name search
<input placeholder="Rechercher..." class="w-full rounded-lg bg-[var(--color-surface-light)] border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-foreground)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50" type="text" value="" data-dashlane-rid="7ae19c6f589ee72b">

# -> document.querySelector('input');
# -> document.querySelector('input').value = '{UserName}'

## Cliquer pour valider l'échange avec l'user défini
<button class="w-full flex items-center gap-3 p-3 rounded-xl bg-[var(--color-surface-light)] hover:bg-[var(--color-accent)]/10 transition-colors cursor-pointer text-left" data-dashlane-label="true" data-dashlane-rid="5aec222edf994808">
    <div class="w-10 h-10 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0 overflow-hidden text-sm font-bold text-[var(--color-accent)]">
        <img alt="LELEAUPE" class="w-full h-full object-cover" style="object-position: 50% 50%;" src="https://upload.wikimedia.org/wikipedia/commons/e/e5/GreatStellatedDodecahedron.gif">
    </div>
    <span class="font-medium text-sm flex-1">LELEAUPE</span>
    <span class="text-[var(--color-accent)] text-xs font-semibold">Échanger →</span>
</button>

# document.querySelector('.backdrop-blur-sm > div > div:last-of-type > button')


# TEST
# document.querySelector('.backdrop-blur-sm > div > div:last-of-type > button > span:first-of-type')

##  Cliquer x 49 (Pour eviter le bug ou on ne peux pas changer de page si 50 cartes sont séléctionners)
<button class="relative w-full min-w-0 min-[500px]:w-auto rounded-2xl overflow-hidden border-2 transition-[border-color,transform,box-shadow] duration-200 touch-manipulation border-transparent hover:border-[var(--color-accent)]/40 cursor-pointer" data-dashlane-label="true" data-dashlane-rid="cdb99d6e97da6aa3">
<div class="
        w-[clamp(8.4rem,43vw,10rem)] h-[clamp(11.8rem,60vw,14rem)]
        glow-l
        relative rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-300 hover:scale-105 hover:z-10
        !w-full !h-auto aspect-[5/7] hover:scale-100 min-[500px]:!w-[10rem] min-[500px]:!h-[14rem] min-[500px]:aspect-auto
      ">
      <img alt="" decoding="async" data-nimg="fill" class="object-cover scale-[1.8]" style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;" sizes="(max-width: 768px) 160px, 288px" srcset="/_next/image?url=%2Flegendaire.png&amp;w=32&amp;q=75&amp;dpl=dpl_8JBdzJvPiDX3vWWirGLg9uqYYbA5 32w, /_next/image?url=%2Flegendaire.png&amp;w=48&amp;q=75&amp;dpl=dpl_8JBdzJvPiDX3vWWirGLg9uqYYbA5 48w, /_next/image?url=%2Flegendaire.png&amp;w=64&amp;q=75&amp;dpl=dpl_8JBdzJvPiDX3vWWirGLg9uqYYbA5 64w, /_next/image?url=%2Flegendaire.png&amp;w=96&amp;q=75&amp;dpl=dpl_8JBdzJvPiDX3vWWirGLg9uqYYbA5 96w, /_next/image?url=%2Flegendaire.png&amp;w=128&amp;q=75&amp;dpl=dpl_8JBdzJvPiDX3vWWirGLg9uqYYbA5 128w, /_next/image?url=%2Flegendaire.png&amp;w=256&amp;q=75&amp;dpl=dpl_8JBdzJvPiDX3vWWirGLg9uqYYbA5 256w, /_next/image?url=%2Flegendaire.png&amp;w=384&amp;q=75&amp;dpl=dpl_8JBdzJvPiDX3vWWirGLg9uqYYbA5 384w, /_next/image?url=%2Flegendaire.png&amp;w=640&amp;q=75&amp;dpl=dpl_8JBdzJvPiDX3vWWirGLg9uqYYbA5 640w, /_next/image?url=%2Flegendaire.png&amp;w=750&amp;q=75&amp;dpl=dpl_8JBdzJvPiDX3vWWirGLg9uqYYbA5 750w, /_next/image?url=%2Flegendaire.png&amp;w=828&amp;q=75&amp;dpl=dpl_8JBdzJvPiDX3vWWirGLg9uqYYbA5 828w, /_next/image?url=%2Flegendaire.png&amp;w=1080&amp;q=75&amp;dpl=dpl_8JBdzJvPiDX3vWWirGLg9uqYYbA5 1080w, /_next/image?url=%2Flegendaire.png&amp;w=1200&amp;q=75&amp;dpl=dpl_8JBdzJvPiDX3vWWirGLg9uqYYbA5 1200w, /_next/image?url=%2Flegendaire.png&amp;w=1920&amp;q=75&amp;dpl=dpl_8JBdzJvPiDX3vWWirGLg9uqYYbA5 1920w, /_next/image?url=%2Flegendaire.png&amp;w=2048&amp;q=75&amp;dpl=dpl_8JBdzJvPiDX3vWWirGLg9uqYYbA5 2048w, /_next/image?url=%2Flegendaire.png&amp;w=3840&amp;q=75&amp;dpl=dpl_8JBdzJvPiDX3vWWirGLg9uqYYbA5 3840w" src="/_next/image?url=%2Flegendaire.png&amp;w=3840&amp;q=75&amp;dpl=dpl_8JBdzJvPiDX3vWWirGLg9uqYYbA5">
      <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent pointer-events-none z-10">
      </div>
      <div class="absolute top-0 left-0 right-0 h-[45%] z-20 bg-black/20">
      <div class="relative h-full w-full min-h-0">
      <img alt="Guy de Maupassant" crossorigin="anonymous" loading="lazy" decoding="async" data-nimg="fill" class="object-cover" style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent; object-position: center 28%;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Maupassant_par_Nadar.jpg/330px-Maupassant_par_Nadar.jpg">
      <div class="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/50 to-transparent">
      </div>
      </div>
      </div>
      <div class="absolute top-2 left-2 px-2 py-0.5 rounded-md text-xs font-bold z-30" style="background-color: var(--color-rarity-l); color: rgb(13, 17, 23); box-shadow: 0 0 10px var(--color-rarity-l)99;">L</div>
      <div class="absolute top-[45%] left-0 right-0 bottom-0 flex min-h-0 flex-col p-3 z-20">
      <h3 class="text-xs shrink-0 font-bold leading-tight line-clamp-2 text-black drop-shadow-none" style="font-family: var(--font-heading);">Guy de Maupassant</h3>
      <p class="min-h-0 leading-snug text-neutral-900/90 overflow-hidden line-clamp-3 text-[9px] shrink-0">écrivain et journaliste littéraire français (1850-1893)</p>
      <div class="mt-auto flex min-h-0 w-full flex-col items-start gap-0.5 pt-1">
      <div class="flex w-full shrink-0 flex-wrap gap-0.5 pb-0.5">
      <span class="inline-block max-w-[104px] truncate rounded-full border border-solid px-2 py-0.5 text-[8px] font-semibold leading-tight" style="background-color: rgba(134, 239, 172, 0.38); color: rgb(15, 23, 42); border-color: rgba(134, 239, 172, 0.52);">Coin lecture 📖</span>
      </div>
      <div class="flex w-full shrink-0 items-center justify-between border-t border-black/20 pt-1 py-1 justify-between"><div class="text-[10px] flex items-center justify-center gap-1 ">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-swords size-[1em] shrink-0 text-red-800" aria-hidden="true"><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"></polyline><line x1="13" x2="19" y1="19" y2="13"></line><line x1="16" x2="20" y1="16" y2="20"></line><line x1="19" x2="21" y1="21" y2="19"></line><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"></polyline><line x1="5" x2="9" y1="14" y2="18"></line><line x1="7" x2="4" y1="17" y2="20"></line><line x1="3" x2="5" y1="19" y2="21"></line></svg><span class="font-bold text-black/90">9 990</span></div><div class="text-[10px] flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield size-[1em] shrink-0 text-blue-800" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg><span class="font-bold text-black/90">8 588</span></div></div></div></div><div class="absolute inset-0 z-40 overflow-hidden pointer-events-none"><div class="legendary-shimmer-sheen" aria-hidden="true">
      </div>
      </div>
      </div>
      </button>

# -> document.querySelector('body > div:last-of-type > div > div:nth-child(4) > div > div > div:nth-child(2) > div > button ')

## Cliquer pour changer de page de séléction des cartes
<button class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--color-surface-light)] border border-[var(--color-border)] text-[var(--color-foreground)]/70 hover:text-[var(--color-foreground)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer">→</button>

## Pour chopper la première carte
# document.querySelector('body > div:last-of-type > div > div:nth-child(4) > div > div > div:nth-child(2) > div > button ') 

## Pour chopper le reste des cartes
# document.querySelector('body > div:last-of-type > div > div:nth-child(4) > div > div > div:nth-child(3) > div > button')

## Pour changer de page 
# -> document.querySelector('body > div:last-of-type > div > div:nth-child(4) > div > div > div:nth-child(2) > div:nth-child(2) > button:last-of-type')

## Resélectionner 49 cartes, changer de pages encore et reprendre 2 cartes
<button class="flex-1 py-2.5 rounded-lg bg-[var(--color-accent)] text-[var(--color-accent-foreground)] text-sm font-semibold hover:bg-[var(--color-accent-light)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer" data-dashlane-label="true" data-dashlane-rid="403468e9f6c8e312">Envoyer l'offre</button>

# -> document.querySelector('body > div:last-of-type > div > div:nth-child(5) > div > button:last-of-type')

