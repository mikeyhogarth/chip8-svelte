# Chip8 Svelte

This is a frontend for a chip8 emulator, written in svelte.  The meat of the actual emulator itself is in the [https://github.com/mikeyhogarth/chip8-typescript](TypeScript Chip8) module. More details about how this all works are available there.

[https://chip8-svelte.netlify.app/](DEMO)

# Running the emulator
This is a svelte app - install using `npm install` then;

```
npm run dev
```

In order to build for production;
```
npm run build
npm start
```

# Roms
The Roms included with this emulator are all written by David Winter and obtained via ["http://www.pong-story.com/chip8/"](his website).