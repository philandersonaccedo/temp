# Brightscript

## print 

Printing follows C++ [procedures](https://en.cppreference.com/w/cpp/io/c/fprintf)

```vb
Brightscript Debugger> ? 40
40

Brightscript Debugger> ? 40.toStr()
40

Brightscript Debugger> ? 40.toStr("%05d")
00040

Brightscript Debugger> ? 40.toStr("%o")
50

Brightscript Debugger> ? 31.toStr("%02x")
1f

Brightscript Debugger> ? 31.toStr("%02X")
1F

Brightscript Debugger> ? 99.toStr("%d red luftballoons")
99 red luftballoons

Brightscript Debugger> ? 65.toStr("%c")
A

Brightscript Debugger> ? 65.toStr("'%c'")
'A'

Brightscript Debugger> ? "this is a long string to be truncated".toStr("%.16s")
this is a long s

Brightscript Debugger> ? "short string".toStr("%32s")
                    short string

Brightscript Debugger> ? (3.14159).toStr("%f")
3.141590

Brightscript Debugger> ? (3.14159).toStr("%0.2f")
3.14

Brightscript Debugger> ? (3.14159).toStr("%e")
3.141590e+00

Brightscript Debugger> ? (3.14159).toStr("%010.2f")
0000003.14

Brightscript Debugger> ? "%d is bigger than %d".Format(32, 16)
32 is bigger than 16
```
