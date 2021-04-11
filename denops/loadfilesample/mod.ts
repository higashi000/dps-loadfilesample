import { start } from "/home/higashi/go/src/github.com/higashi000/denops-std-deno/mod.ts"

start(async (vim) => {
    vim.register({
        async echo(text: unknown): Promise<unknown> {
            if (typeof text !== "string") {
                throw new Error(`'text' in 'echo()' of ${vim.name} must be a string`);
            }

            console.log("echo is called");

            return await Promise.resolve(text);
        }
    })

    await vim.load(new URL('./', import.meta.url).pathname, 'script/keymap.vim')

    console.log('dps-fileloadsample has loaded');
})
