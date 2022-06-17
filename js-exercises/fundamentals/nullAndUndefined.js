const first = {name: 'Teste'}
            console.log(first)

const second = first
            console.log(second) // Second pointed to the same address as First.

second.name = 'Samba'
            console.log(first)

            /*  Now First pointed to the same address as Second. The equal sign is 2-way.
                Second = First  and  First = Second
            */

            /* So far console.log will display:
                { name: 'Teste' }
                { name: 'Teste' }
                { name: 'Samba' }
            */
