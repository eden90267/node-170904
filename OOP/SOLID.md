# SOLID(物件導向設計)

這五個原則出自於《Agile Software Development》這本書。原來這五個原則，都在談「改變」這件事。

它們在談「面對原始碼改變的五種不同策略」，或是說「從五種不同的角度，來應付、管理原始碼改變」。哪五個角度?

- **S**ingle responsibility

  單一功能原則

  認為<span style='color: blue;'>物件</span>應該僅具有單一功能的概念。

  SRP：降低單一類別被「改變」所影響的機會，類別設計符合SRP便可避免Divergent
  Change(發散式變化)。

- **O**pen-closed

  開閉原則

  認為「軟體應該是對於擴展開放的，但是對於修改封閉的」的概念。

  OCP：當新增需求的時候(功能變化)，在不改變現有程式碼的前提之下，藉由增加新的程式碼來實作新的功能。

- **L**iskov substitution(Subcontracting)

  里氏替換原則

  認為「程序中的物件應該是可以在不改變程序正確性的前提下被它的子類所替換的」的概念。

  LSP：談的是繼承，也就是透過繼承時子類別所造成的「行為變化」要如何設計，才可以讓程式在runtime透過多型所繫結(bind)到的子類別實作，不至於違反父類別介面的合約

- **I**nterface segregation

  接口隔離原則

  認為「多個特定客戶端接口要好於一個寬泛用途的接口」的概念。

  ISP：針對不同的客戶端，只開放其所需要的介面讓它使用，如此一來可避免與降低客戶端因為不相關介面改變也一起被迫需要改變的問題。

- **D**ependency inversion

  依賴反轉原則

  認為一個方法應該遵從「依賴於抽象而不是實例」的概念。依賴注入是該原則的一種實現方式。

  DIP：DIP談的是caller和callee之間的關係，在兩者之間增加一個抽象介面，避免caller(上層程式)因為callee(底層程式)改變而被迫改變。

---

參考文獻：

- [https://www.wikiwand.com/zh-tw/SOLID_(%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E8%AE%BE%E8%AE%A1)](https://www.wikiwand.com/zh-tw/SOLID_(%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E8%AE%BE%E8%AE%A1))
- [http://teddy-chen-tw.blogspot.tw/2014/04/solid.html](http://teddy-chen-tw.blogspot.tw/2014/04/solid.html)