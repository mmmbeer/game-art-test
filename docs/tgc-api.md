# Introduction to the Wing API

Generated from local HTML files.

## Contents

- [Acrylic Shape](#acrylic-shape)
- [AcrylicShape Properties](#acrylicshape-properties)
- [Action Shot Properties](#action-shot-properties)
- [ActionShot Properties](#actionshot-properties)
- [AddressProperties](#addressproperties)
- [Address Properties](#address-properties)
- [Announcement](#announcement)
- [Announcement Properties](#announcement-properties)
- [API Key](#api-key)
- [Art Test](#art-test)
- [ArtTest Properties](#arttest-properties)
- [Booklet](#booklet)
- [Booklet Page](#booklet-page)
- [BookletPage Properties](#bookletpage-properties)
- [Booklet Properties](#booklet-properties)
- [Box Face](#box-face)
- [BoxFace Properties](#boxface-properties)
- [Box Top](#box-top)
- [Box Top Gloss](#box-top-gloss)
- [BoxTopGloss Properties](#boxtopgloss-properties)
- [BoxTop Properties](#boxtop-properties)
- [Card](#card)
- [Card Properties](#card-properties)
- [Using a Cart](#using-a-cart)
- [Changes](#changes)
- [Coil Book](#coil-book)
- [Coil Book Page](#coil-book-page)
- [CoilBookPage Properties](#coilbookpage-properties)
- [CoilBook Properties](#coilbook-properties)
- [Crafter Point Currency](#crafter-point-currency)
- [C# Example](#c-example)
- [Curl Example](#curl-example)
- [Custom Color D4](#custom-color-d4)
- [CustomColorD4 Properties](#customcolord4-properties)
- [Custom Color D6](#custom-color-d6)
- [CustomColorD6 Properties](#customcolord6-properties)
- [Custom Color D8](#custom-color-d8)
- [CustomColorD8 Properties](#customcolord8-properties)
- [Custom Cut One Sided Slugged](#custom-cut-one-sided-slugged)
- [CustomCutOneSidedSlugged Properties](#customcutonesidedslugged-properties)
- [Custom Cut Two Sided Slugged](#custom-cut-two-sided-slugged)
- [CustomCutTwoSidedSlugged Properties](#customcuttwosidedslugged-properties)
- [Custom Printed Meeple](#custom-printed-meeple)
- [CustomPrintedMeeple Properties](#customprintedmeeple-properties)
- [Custom Wood D6](#custom-wood-d6)
- [CustomWoodD6 Properties](#customwoodd6-properties)
- [Deck](#deck)
- [Deck Properties](#deck-properties)
- [Designer Properties](#designer-properties)
- [Designer Associate Properties](#designer-associate-properties)
- [DesignerAssociate Properties](#designerassociate-properties)
- [Designer Properties](#designer-properties)
- [Dial Types](#dial-types)
- [Dial Properties](#dial-properties)
- [Document Properties](#document-properties)
- [Document Properties](#document-properties)
- [Error Codes](#error-codes)
- [File Properties](#file-properties)
- [File Properties](#file-properties)
- [Folder Properties](#folder-properties)
- [Folder Properties](#folder-properties)
- [F# Example](#f-example)
- [Game Properties](#game-properties)
- [Game Download Properties](#game-download-properties)
- [GameDownload Properties](#gamedownload-properties)
- [Game Part](#game-part)
- [GamePart Properties](#gamepart-properties)
- [Game Properties](#game-properties)
- [Hook Box](#hook-box)
- [HookBox Properties](#hookbox-properties)
- [Idea](#idea)
- [Idea Opinion](#idea-opinion)
- [IdeaOpinion Properties](#ideaopinion-properties)
- [Idea Properties](#idea-properties)
- [Introduction to the Wing API](#introduction-to-the-wing-api)
- [Java Example](#java-example)
- [jQuery Example](#jquery-example)
- [Lua Example](#lua-example)
- [One Sided](#one-sided)
- [One Sided Gloss](#one-sided-gloss)
- [OneSidedGloss Properties](#onesidedgloss-properties)
- [OneSided Properties](#onesided-properties)
- [One Sided Slugged](#one-sided-slugged)
- [OneSidedSlugged Properties](#onesidedslugged-properties)
- [One Sided Slugged Set](#one-sided-slugged-set)
- [OneSidedSluggedSet Properties](#onesidedsluggedset-properties)
- [OrderItem Properties](#orderitem-properties)
- [Order Properties](#order-properties)
- [Part Properties](#part-properties)
- [Part Properties](#part-properties)
- [Perfect Bound Book](#perfect-bound-book)
- [Perfect Bound Book Page](#perfect-bound-book-page)
- [PerfectBoundBookPage Properties](#perfectboundbookpage-properties)
- [PerfectBoundBook Properties](#perfectboundbook-properties)
- [Perl Example](#perl-example)
- [PHP Example](#php-example)
- [Python Example](#python-example)
- [Receipt](#receipt)
- [Review Properties](#review-properties)
- [Review Properties](#review-properties)
- [Ruby Example](#ruby-example)
- [Score Pad](#score-pad)
- [ScorePad Properties](#scorepad-properties)
- [Searching](#searching)
- [Session Properties](#session-properties)
- [Shipment](#shipment)
- [Shipment Properties](#shipment-properties)
- [Sku Methods](#sku-methods)
- [Status](#status)
- [Test](#test)
- [TGC Information](#tgc-information)
- [Three Sided Custom Cut](#three-sided-custom-cut)
- [Three Sided Custom Cut Set](#three-sided-custom-cut-set)
- [Tuck Box](#tuck-box)
- [TuckBox Properties](#tuckbox-properties)
- [Two Sided](#two-sided)
- [Two Sided Box](#two-sided-box)
- [Two Sided Box Gloss](#two-sided-box-gloss)
- [TwoSidedBoxGloss Properties](#twosidedboxgloss-properties)
- [TwoSidedBox Properties](#twosidedbox-properties)
- [TwoSided Properties](#twosided-properties)
- [Two Sided Set](#two-sided-set)
- [TwoSidedSet Properties](#twosidedset-properties)
- [Two Sided Slugged](#two-sided-slugged)
- [TwoSidedSlugged Properties](#twosidedslugged-properties)
- [Two Sided Slugged Set](#two-sided-slugged-set)
- [TwoSidedSluggedSet Properties](#twosidedsluggedset-properties)
- [User](#user)
- [User Properties](#user-properties)
- [Visual Basic Example](#visual-basic-example)
- [Web Hook](#web-hook)
- [WebHook Properties](#webhook-properties)
- [Wishlist](#wishlist)

---


<a id="acrylic-shape"></a>

## Acrylic Shape

> Source file: `AcrylicShape.html`

-   [Acrylic Shape](#Acrylic_Shape)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

This API allows you to create custom acrylic shape objects like meeples and tokens. Accessible via `/api/acrylicshape`.

### [Identities](#___top "click to go to top of document")

AcrylicShape125

AcrylicShape250

LargeAcrylicShape125

### [Properties](#___top "click to go to top of document")

Each acrylic shape object is accessed via `/api/acrylicshape` and has the following properties. Complete details in [AcrylicShapeProperties](/developer/AcrylicShapeProperties.html).

id

The unique id for this acrylic shape object. It will never change.

identity

The style of acrylic shape object you want.

object\_type

`acrylicshape`

date\_created

A date when the acrylic shape object was created.

date\_updated

A date when the acrylic shape object was last updated.

name

The name the acrylic shape object is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this acrylic shape object belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a acrylic shape object to be included in the game.

side1\_id

A [File](/developer/File.html) id. Optional. Sets the side1 image of the acrylic shape object. The ID is from a [File](/developer/File.html). If a side1\_id is specified, then an extra property called `side1` will be added which will briefly describe the image.

has\_proofed\_side1

A boolean indicating whether the side1 image has been verified by the user to be correct.

side2\_id

A [File](/developer/File.html) id. Optional. Sets the side2 image of the acrylic shape object. The ID is from a [File](/developer/File.html). If a side2\_id is specified, then an extra property called `side2` will be added which will briefly describe the image.

has\_proofed\_side2

A boolean indicating whether the side2 image has been verified by the user to be correct.

cut\_id

A [File](/developer/File.html) id. Sets the SVG cut file for this shape. If a cut\_id is specified, then an extra property called `cut` will be added which will briefly describe the svg image.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this acrylic shape object is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate acrylic shape objects.

## [Create](#___top "click to go to top of document")

```
 POST /api/acrylicshape
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

side1\_id

Optional.

has\_proofed\_side1

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/acrylicshape/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/acrylicshape/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/acrylicshape/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) and **Related Objects** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="acrylicshape-properties"></a>

## AcrylicShape Properties

> Source file: `AcrylicShapeProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| color | Everyone | Owner | No | varchar | CLRAT | No |
| cut\_id | Owner | Owner | No | char |  | Yes |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| has\_proofed\_side1 | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_side2 | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |
| side1\_id | Owner | Owner | No | char |  | Yes |
| side1\_is | Everyone | Owner | No | varchar | has\_art | No |
| side2\_id | Owner | Owner | No | char |  | Yes |
| side2\_is | Everyone | Owner | No | varchar | has\_art | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="action-shot-properties"></a>

## Action Shot Properties

> Source file: `ActionShot.html`

-   [Action Shot Properties](#Action_Shot_Properties)
-   [Related Objects](#Related_Objects)
-   [Action Shot Methods](#Action_Shot_Methods)
    -   [Create Action Shot](#Create_Action_Shot)
    -   [Update Action Shot](#Update_Action_Shot)
    -   [Delete Action Shot](#Delete_Action_Shot)
    -   [Fetch Action Shot](#Fetch_Action_Shot)

Each actionshot is accessed via `/api/actionshot` and has the following properties. Complete details in [ActionShotProperties](/developer/ActionShotProperties.html).

id

The unique id for this actionshot. It will never change.

game\_id

The unique id of a game that this actionshot belongs to.

image\_id

Sets the image you want people to see. The ID is from a [File](/developer/File.html). If a image\_id is specified, then an extra property called `image` will be added which will briefly describe the image.

sequence

The order in which the action shots will be displayed, from lowest to highest.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this actionshot is a member of.

### [Action Shot Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate actionshots.

## [Create Action Shot](#___top "click to go to top of document")

```
 POST /api/actionshot
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

game\_id

Required.

image\_id

Required.

Returns:

```
 {
   "id" : "xxx",
   "image_id" : "xxx",
   ...
 }
```

## [Update Action Shot](#___top "click to go to top of document")

```
 PUT /api/actionshot/xxx
```

See **Create Action Shot** for details.

## [Delete Action Shot](#___top "click to go to top of document")

```
 DELETE /api/actionshot/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch Action Shot](#___top "click to go to top of document")

```
 GET /api/actionshot/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Action Shot Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "image_id" : "xxx",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="actionshot-properties"></a>

## ActionShot Properties

> Source file: `ActionShotProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| id | Everyone | Read Only | No | char |  | No |
| image\_id | Owner | Owner | No | char |  | Yes |
| sequence | Everyone | Owner | No | tinyint | 1 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="addressproperties"></a>

## AddressProperties

> Source file: `Address.html`

-   [AddressProperties](#AddressProperties)
-   [Address Options](#Address_Options)
-   [Relationships](#Relationships)
-   [Related Objects](#Related_Objects)
-   [Address Methods](#Address_Methods)
    -   [Create Address](#Create_Address)
    -   [Update Address](#Update_Address)
    -   [Delete Address](#Delete_Address)
    -   [Fetch Address](#Fetch_Address)
    -   [Fetch List of Countries](#Fetch_List_of_Countries)
    -   [Fetch List of States](#Fetch_List_of_States)

Each address is accessed via `/api/address` and has the following properties. Complete details in [AddressProperties](/developer/AddressProperties.html).

id

The unique id for this address. It will never change.

object\_type

`address`.

date\_created

A date when the address was created.

date\_updated

A date when the address was last updated.

user\_id

The unique id of a [User](/developer/User.html) that this address belongs to.

name

The name of the person you're shipping this order to.

company

Optional. The name of the company located at this address if any.

address1

The first part of the street address.

address2

Optional. The second part of the street address.

city

A city name.

state

A state or province. If a US State, the two letter code should be used. See the address options for details.

postal\_code

A zip code or other postal code.

country

A two character country code. See the address options for details.

phone\_number

A number that can be called at the address if any problems occur.

tax\_id

Some countries require that a tax ID for the recipient be added to customs declarations. To get a list of these countries, fetch the ["Address Options"](#Address_Options) and check the `countries_requiring_tax_ids` field.

### [Address Options](#___top "click to go to top of document")

Provides a list of the options that can be used to fill out various fields when creating or updating an address.

```
 GET /api/address/_options
```

Returns:

```
 {
    "country" : [...],
    "_country" : {...},
    "state" : [...],
    "_state" : {...}
    "countries_requiring_tax_ids" [...],
 }
```

**NOTE:** You can also get this data by adding `_include_options=1` to the parameter list when fetching an address.

### [Relationships](#___top "click to go to top of document")

shipments

A list of [Receipts](/developer/Receipts.html) to which this address is attached as a shipping address.

### [Related Objects](#___top "click to go to top of document")

user

The [User](/developer/User.html) that this address is owned by.

### [Address Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate addreses.

## [Create Address](#___top "click to go to top of document")

```
 POST /api/address
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

user\_id

Required.

name

Required.

company

Optional.

address1

Required.

address2

Optional.

city

Required.

state

Required. May be set to `N/A` when country is not `US`.

postal\_code

Required.

country

Required.

phone\_number

Required.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Andy Dufresne",
   "company" : "Shawshank Prison",
   "address1" : "1600 Heartbreak Ln",
   "address2" : "Room: Prison Library",
   "state" : "ME",
   "postal_code" : "04093",
   "country" : "US",
   "phone_number" : "207-555-1111"
   ...
 }
```

## [Update Address](#___top "click to go to top of document")

```
 PUT /api/address/xxx
```

See **Create Address** for details.

**NOTE:** Updating addresses is only allowed by admins.

## [Delete Address](#___top "click to go to top of document")

```
 DELETE /api/address/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch Address](#___top "click to go to top of document")

```
 GET /api/address/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Address Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "image_id" : "xxx",
   ...
 }
```

## [Fetch List of Countries](#___top "click to go to top of document")

```
 GET /api/address/countries
```

Returns:

```
 {
  "US" : "United States",
  "GB" : "United Kingdom",
  "CA" : "Canada",
 ...
 }
```

## [Fetch List of States](#___top "click to go to top of document")

```
 GET /api/address/states
```

Returns:

```
 {
  "WI" : "Wisconsin",
  "IL" : "Illinois",
  "CA" : "California",
 ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="address-properties"></a>

## Address Properties

> Source file: `AddressProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| address1 | Owner | Owner | No | varchar |  | No |
| address2 | Owner | Owner | No | varchar |  | Yes |
| city | Owner | Owner | No | varchar |  | No |
| company | Owner | Owner | No | varchar |  | Yes |
| country | Owner | Owner | No | char | US | No |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| hidden | Everyone | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| name | Owner | Owner | No | varchar |  | No |
| phone\_number | Owner | Owner | No | varchar |  | Yes |
| postal\_code | Owner | Owner | No | varchar |  | No |
| state | Owner | Owner | No | varchar |  | Yes |
| user\_id | Everyone | Owner | Yes | char |  | No |
| verified | Everyone | Read Only | No | tinyint | 0 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="announcement"></a>

## Announcement

> Source file: `Announcement.html`

-   [Announcement](#Announcement)
-   [Related Objects](#Related_Objects)
-   [Announcement Methods](#Announcement_Methods)
    -   [Create Announcement](#Create_Announcement)
    -   [Update Announcement](#Update_Announcement)
    -   [Delete Announcement](#Delete_Announcement)
    -   [Fetch Announcement](#Fetch_Announcement)
    -   [List Announcements](#List_Announcements)

Each announcement is accessed via `/api/announcement` and has the following properties. Complete details in [AnnouncementProperties](/developer/AnnouncementProperties.html).

id

The unique id for this announcement. It will never change.

wing\_object\_type

`announcement`.

date\_created

A date when the announcement was created.

date\_updated

A date when the announcement was last updated.

user\_id

The unique id of a user that this announcement belongs to.

name

The name or title of the announcement.

body

A text representation of the body. No HTML should be present here. URLs are allowed.

body\_html

The rendered HTML version of the `body`.

### [Related Objects](#___top "click to go to top of document")

user

The [User](/developer/User.html) that this announcement is controlled by.

### [Announcement Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate announcements.

## [Create Announcement](#___top "click to go to top of document")

```
 POST /api/announcement
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

user\_id

body

Required.

Returns:

```
 {
   "id" : "xxx",
   "name" : "My Game Just Dropped",
   ...
 }
```

## [Update Announcement](#___top "click to go to top of document")

```
 PUT /api/announcement/xxx
```

See **Create Announcement** for details.

## [Delete Announcement](#___top "click to go to top of document")

```
 DELETE /api/announcement/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch Announcement](#___top "click to go to top of document")

```
 GET /api/announcement/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Announcement Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "My Game Just Dropped",
   ...
 }
```

## [List Announcements](#___top "click to go to top of document")

```
 GET /api/announcement
```

The list is returned descending by `date_created`.

Returns:

```
 {
  ...,
  "items" : [
   {
    "id" : "xxx",
    "name" : "My Game Just Dropped",
    ...
   },
   ...
  ]
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="announcement-properties"></a>

## Announcement Properties

> Source file: `AnnouncementProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| body | Everyone | Owner | No | mediumtext |  | No |
| body\_html | Everyone | Read Only | No | mediumtext |  | No |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| id | Everyone | Read Only | No | char |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| page\_views | Everyone | Admin | No | bigint | 0 | No |
| public | Everyone | Read Only | No | tinyint | 0 | No |
| publish\_date | Everyone | Read Only | No | datetime |  | No |
| rss\_views | Everyone | Admin | No | bigint | 0 | No |
| uri\_part | Everyone | Read Only | No | varchar |  | No |
| user\_id | Everyone | Owner | Yes | char |  | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="api-key"></a>

## API Key

> Source file: `APIKey.html`

-   [API Key](#API_Key)
-   [Requesting An API Key](#Requesting_An_API_Key)
-   [API Key Permissions](#API_Key_Permissions)
    -   [Private Details](#Private_Details)
    -   [Permissions](#Permissions)
    -   [Making a Single-Sign-On Request](#Making_a_Single-Sign-On_Request)

An API Key is required to create a [Session](/developer/Session.html) in the API, so that you can access the more advanced functions of the API. API Keys are free, you simply need to request one.

### [Requesting An API Key](#___top "click to go to top of document")

Requesting a key is very simple. To request an API Key, follow these instructions:

-   Log in to your account (["account"](#account)).
-   In the preferences, answer the question about you being a developer as **Yes** and hit save.
-   You should now have an **API Keys** tab. Click it.
-   Request an API key.

### [API Key Permissions](#___top "click to go to top of document")

API Key Permissions allow you to request access to a user's data while you are logged in as them. The following is a list of permissions currently available:

## [Private Details](#___top "click to go to top of document")

You can access the public details of any object in the system without any special privileges. However, many objects have private details. For example, [User](/developer/User.html)s have email addresses, [Designer](/developer/Designer.html)s have payment preferences, and the details of [Receipt](/developer/Receipt.html)s are almost entirely private. Having `view` permissions on these objects allow you access those private details.

## [Permissions](#___top "click to go to top of document")

view\_my\_account

Allows you to view the private details of a [User](/developer/User.html) account, such as their email address.

edit\_my\_account

Allows you to manipulate a [User](/developer/User.html)'s account information.

view\_my\_games

Allows you to view the private details of [Game](/developer/Game.html)s controlled by this user.

edit\_my\_games

Allows you to manipulate the [Game](/developer/Game.html)s controlled by this user.

view\_my\_files

Allows you to view the private details of [File](/developer/File.html)s and [Folder](/developer/Folder.html)s controlled by this user.

edit\_my\_files

Allows you to manipulate the [File](/developer/File.html)s and [Folder](/developer/Folder.html)s controlled by this user.

view\_my\_reciepts

Allows you to view the private details of the [Receipt](/developer/Receipt.html)s created by this user.

view\_my\_carts

Allows you to view the private details of the [Cart](/developer/Cart.html)s and [Wishlist](/developer/Wishlist.html)s controlled by this user.

edit\_my\_carts

Allows you to manipulate the [Cart](/developer/Cart.html)s and [Wishlist](/developer/Wishlist.html)s controlled by this user.

view\_my\_reviews

Allows you to view the private details of the [Review](/developer/Review.html)s created by this user.

edit\_my\_reviews

Allows you to manipulate the [Review](/developer/Review.html)s created by this user.

view\_my\_designers

Allows you to view the private details of the [Designer](/developer/Designer.html)s controlled by this user.

edit\_my\_designers

Allows you to manipulate the [Designer](/developer/Designer.html)s controlled by this user.

## [Making a Single-Sign-On Request](#___top "click to go to top of document")

To make an SSO request you'll redirect the user's web browser to The Game Crafter site at this URL:

```
 https://www.thegamecrafter.com/sso
```

**NOTE:** If you are writing a native desktop or mobile app then you'll need to open a panel with a web browser control in it, and direct them to the above URL.

You'll need to include a number of parameters in the request:

api\_key\_id

This is your API Key that you requested at the beginning of this document.

permission

A permission such as `view_my_account` as described in the permission list above. You may add permission to the URL multiple times, once for each permission requested.

postback\_uri

The URI where you'd like the user to be returned after they have logged in and authorized your request.

**NOTE:** If you're writing a native app use `native` instead of a uri here. After the user has been logged in they'll be redirected to this URL:

```
 https://www.thegamecrafter.com/sso/success?sso_id=xxx
```

You can then read the fragment from the end of the URL to continue.

Therefore the URL you redirect the user to will look something like this:

```
 https://www.thegamecrafter.com/sso?api_key_id=xxx&permission=view_my_account&permission=view_my_files&postback_uri=http://example.com/postback.php
```

One way or another the result of this request should be that you'd get an `sso_id`. Using the above example, you'd get a postback like this:

```
 http://example.com/postback.php?sso_id=xxx
```

With your `sso_id` you can now request a [Session](/developer/Session.html) on behalf of the user. See the `POST /session/sso/xxx` method in [Session](/developer/Session.html) for details.

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="art-test"></a>

## Art Test

> Source file: `ArtTest.html`

-   [Art Test](#Art_Test)
-   [ArtTest Properties](#ArtTest_Properties)
-   [Related Objects](#Related_Objects)
-   [Art Test Methods](#Art_Test_Methods)
    -   [Fetch Art Test](#Fetch_Art_Test)

Art Tests allow you to gather anonymous (and therefore unfiltered) feedback about the artwork in your game.

### [ArtTest Properties](#___top "click to go to top of document")

Each Art Test is accessed via `/api/arttest` and has the following properties. Complete properties in [ArtTestProperties](/developer/ArtTestProperties.html).

id

The unique id for this art test. It will never change.

wing\_object\_type

`arttest`.

date\_created

A date when the arttest was created.

date\_updated

A date when the arttest was last updated.

name

The name the arttest is known by.

vote\_count

The total count of votes for the arttest.

pretty\_total

The total number of votes for "pretty" art.

functional\_total

The total number of votes for "functional" art.

completed

A boolean which will be true if that arttest is complete.

completion\_date

The date and time when the arttest was completed.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this arttest is a member of.

### [Art Test Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate arttests.

## [Fetch Art Test](#___top "click to go to top of document")

```
 GET /api/arttest/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Art Test Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="arttest-properties"></a>

## ArtTest Properties

> Source file: `ArtTestProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| complete | Everyone | Admin | No | tinyint | 0 | No |
| completion\_date | Everyone | Read Only | No | datetime |  | No |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| functional\_total | Everyone | Read Only | No | int | 0 | No |
| game\_id | Everyone | Read Only | No | char |  | Yes |
| id | Everyone | Read Only | No | char |  | No |
| pretty\_total | Everyone | Read Only | No | int | 0 | No |
| vote\_count | Everyone | Read Only | No | int | 0 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="booklet"></a>

## Booklet

> Source file: `Booklet.html`

-   [Booklet](#Booklet)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Relationships](#Relationships)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

All saddle-stitched booklets share this API just using different identities to differentiate by size. They are all accessed via `/api/booklet`.

### [Identities](#___top "click to go to top of document")

SmallBooklet

TarotBooklet

LargeBooklet

MediumBooklet

JumboBooklet

TallBooklet

### [Properties](#___top "click to go to top of document")

Each booklet has the following properties with complete details in [BookletProperties](/developer/BookletProperties.html):

id

The unique id for this booklet. It will never change.

identity

The size of booklet you want. See Identities above.

wing\_object\_type

`booklet`

date\_created

A date when the booklet was created.

date\_updated

A date when the booklet was last updated.

name

The name the booklet is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this booklet belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a booklet to be included in the game.

page\_count

The number of pages in the booklet.

### [Relationships](#___top "click to go to top of document")

pages

The list of [BookletPage](/developer/BookletPage.html)s that are attached to this booklet.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this booklet is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate booklets.

## [Create](#___top "click to go to top of document")

```
 POST /api/booklet
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Rules",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/booklet/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /booklet/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/booklet/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Booklet Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Rules",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="booklet-page"></a>

## Booklet Page

> Source file: `BookletPage.html`

-   [Booklet Page](#Booklet_Page)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

The child element of [Booklet](/developer/Booklet.html)s are booklet pages, which are accessible via `/api/bookletpage`.

### [Properties](#___top "click to go to top of document")

Each booklet page has the following properties with full details found at [BookletPageProperties](/developer/BookletPageProperties.html):

id

The unique id for this booklet page. It will never change.

wing\_object\_type

`largebookletpage`

date\_created

A date when the booklet page was created.

date\_updated

A date when the booklet page was last updated.

name

The name the booklet page is known by.

sequence\_number

An integer between 1 and 20. The order this page should be included. Another way to think of it is the page number.

booklet\_id

A [Booklet](/developer/Booklet.html) id. The unique id of a booklet that this booklet page belongs to.

image\_id

A [File](/developer/File.html) id. ets the image of the booklet page. The ID is from a [File](/developer/File.html). If a image\_id is specified, then an extra property called `image` will be added which will briefly describe the image.

has\_proofed\_image

A boolean indicating whether the image has been verified by the user to be correct.

### [Related Objects](#___top "click to go to top of document")

booklet

The [Booklet](/developer/Booklet.html) that this booklet page is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate booklet pages.

## [Create](#___top "click to go to top of document")

```
 POST /api/bookletpage
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

booklet\_id

Required.

sequence\_number

Optional.

image\_id

Optional.

has\_proofed\_image

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Setup",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/bookletpage/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /bookletpage/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/bookletpage/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_related\_objects

Optional. See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) and **Related Objects** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Setup",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="bookletpage-properties"></a>

## BookletPage Properties

> Source file: `BookletPageProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| booklet\_id | Everyone | Owner | Yes | char |  | No |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| has\_proofed\_image | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| image\_id | Owner | Owner | No | char |  | Yes |
| name | Everyone | Owner | Yes | varchar |  | No |
| sequence\_number | Owner | Owner | No | tinyint | 1 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="booklet-properties"></a>

## Booklet Properties

> Source file: `BookletProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="box-face"></a>

## Box Face

> Source file: `BoxFace.html`

-   [Box Face](#Box_Face)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

Boxes that have a face. Accessible via `/api/boxface`.

### [Identities](#___top "click to go to top of document")

PokerBooster

PokerEnvelope

### [Properties](#___top "click to go to top of document")

Each box face has the following properties. Complete details in [BoxFaceProperties](/developer/BoxFaceProperties.html).

id

The unique id for this box face. It will never change.

identity

The style of box you want.

wing\_object\_type

`boxface`.

date\_created

A date when the box face was created.

date\_updated

A date when the box face was last updated.

name

The name the box face is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this box face belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a box face to be included in the game.

face\_id

A [File](/developer/File.html) id. Sets the image that will be printed on the face part of the box. The ID is from a [File](/developer/File.html). If a face\_id is specified, then an extra property called `face` will be added which will briefly describe the image.

has\_proofed\_face

A boolean indicating whether the face image has been verified by the user to be correct.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this box face is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate box facees.

## [Create](#___top "click to go to top of document")

```
 POST /api/boxface
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

top\_id

Optional.

has\_proofed\_top

Optional.

bottom\_id

Optional.

has\_proofed\_bottom

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Box",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/boxface/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/boxface/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/boxface/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_related\_objects

Optional. See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) and **Related Objects** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Box",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="boxface-properties"></a>

## BoxFace Properties

> Source file: `BoxFaceProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| face\_id | Owner | Owner | No | char |  | Yes |
| game\_id | Everyone | Owner | Yes | char |  | No |
| has\_proofed\_face | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="box-top"></a>

## Box Top

> Source file: `BoxTop.html`

-   [Box Top](#Box_Top)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

Boxes that only have a top. Accessible via `/api/boxtop`.

### [Identities](#___top "click to go to top of document")

DeckBoxTopAndSide

LargeStoutBoxTop

MediumStoutBoxTopAndSide

### [Properties](#___top "click to go to top of document")

Each box top has the following properties. Complete details in [BoxTopProperties](/developer/BoxTopProperties.html).

id

The unique id for this box top. It will never change.

identity

The style of box you want.

wing\_object\_type

`boxtop`.

date\_created

A date when the box top was created.

date\_updated

A date when the box top was last updated.

name

The name the box top is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this box top belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a box top to be included in the game.

top\_id

A [File](/developer/File.html) id. Sets the image that will be printed on the top part of the box. The ID is from a [File](/developer/File.html). If a top\_id is specified, then an extra property called `top` will be added which will briefly describe the image.

has\_proofed\_top

A boolean indicating whether the top image has been verified by the user to be correct.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this box top is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate box topes.

## [Create](#___top "click to go to top of document")

```
 POST /api/boxtop
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

top\_id

Optional.

has\_proofed\_top

Optional.

bottom\_id

Optional.

has\_proofed\_bottom

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Box",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/boxtop/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/boxtop/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/boxtop/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_related\_objects

Optional. See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) and **Related Objects** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Box",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="box-top-gloss"></a>

## Box Top Gloss

> Source file: `BoxTopGloss.html`

-   [Box Top Gloss](#Box_Top_Gloss)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

Boxes that only have a top. Accessible via `/api/boxtopgloss`.

### [Identities](#___top "click to go to top of document")

LargeStoutBoxTopAndSide

### [Properties](#___top "click to go to top of document")

Each box top has the following properties. Complete details in [BoxTopGlossProperties](/developer/BoxTopGlossProperties.html).

id

The unique id for this box top. It will never change.

identity

The style of box you want.

wing\_object\_type

`boxtopgloss`.

date\_created

A date when the box top was created.

date\_updated

A date when the box top was last updated.

name

The name the box top is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this box top belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a box top to be included in the game.

top\_id

A [File](/developer/File.html) id. Sets the image that will be printed on the top part of the box. The ID is from a [File](/developer/File.html). If a top\_id is specified, then an extra property called `top` will be added which will briefly describe the image.

has\_proofed\_top

A boolean indicating whether the top image has been verified by the user to be correct.

surfacing\_treatment

What type of surfacing to perform on the box. Enumerated options, use the ["Options" in Intro](/developer/Intro.html#Options) API.

spot\_gloss\_id

Only used if `surfacing_treatment` is set to `spot_gloss`. A [File](/developer/File.html) id. Sets the image that will be printed on top of the the top art in gloss. The ID is from a [File](/developer/File.html). If a spot\_gloss\_id is specified, then an extra property called `spot_gloss` will be added which will briefly describe the image.

has\_proofed\_spot\_gloss

A boolean indicating whether the spot\_gloss image has been verified by the user to be correct.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this box top is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate box topes.

## [Create](#___top "click to go to top of document")

```
 POST /api/boxtopgloss
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

top\_id

Optional.

has\_proofed\_top

Optional.

bottom\_id

Optional.

has\_proofed\_bottom

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Box",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/boxtopgloss/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/boxtopgloss/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/boxtopgloss/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_related\_objects

Optional. See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) and **Related Objects** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Box",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="boxtopgloss-properties"></a>

## BoxTopGloss Properties

> Source file: `BoxTopGlossProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| has\_proofed\_spot\_gloss | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_top | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |
| spot\_gloss\_id | Owner | Owner | No | char |  | Yes |
| surfacing\_treatment | Everyone | Owner | No | varchar | Matte Finish | No |
| top\_id | Owner | Owner | No | char |  | Yes |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="boxtop-properties"></a>

## BoxTop Properties

> Source file: `BoxTopProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| has\_proofed\_top | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |
| top\_id | Owner | Owner | No | char |  | Yes |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="card"></a>

## Card

> Source file: `Card.html`

-   [Card](#Card)
-   [Card Properties](#Card_Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Options](#Options)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete Card](#Delete_Card)
    -   [Fetch](#Fetch)

The child element of [Deck](/developer/Deck.html)s are cards which are accessible via `/api/card`.

### [Card Properties](#___top "click to go to top of document")

Each card has the following properties. Complete details in [CardProperties](/developer/CardProperties.html).

id

The unique id for this card. It will never change.

wing\_object\_type

`pokercard`

date\_created

A date when the card was created.

date\_updated

A date when the card was last updated.

name

The name the card is known by.

deck\_id

A [Deck](/developer/Deck.html) id. The unique id of a deck that this card belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a card to be included in the deck.

back\_from

Defaults to `Deck`. Allows the card to inherit a back from the deck, or set to `Card` to use one from the card itself. See **Card Options** below for details.

face\_id

A [File](/developer/File.html) id. Sets the face image of the card. The ID is from a [File](/developer/File.html). If a face\_id is specified, then an extra property called `face` will be added which will briefly describe the image.

back\_id

A [File](/developer/File.html) id. Sets the face image of the card. The ID is from a [File](/developer/File.html). Not needed if `back_from` = `Deck`. If a back\_id is specified, then an extra property called `back` will be added which will briefly describe the image.

has\_proofed\_face

A boolean indicating whether the face image has been verified by the user to be correct.

has\_proofed\_back

A boolean indicating whether the back image has been verified by the user to be correct.

### [Related Objects](#___top "click to go to top of document")

deck

The [Deck](/developer/Deck.html) that this card is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate cards.

## [Options](#___top "click to go to top of document")

Provides a list of the options that can be used to fill out various fields when creating or updating a card.

```
 GET /api/card/_options
```

Returns:

```
 {
    "back_from" : [...]
 }
```

**NOTE:** You can also get this data by adding `_include_options=1` to the parameter list when fetching a card.

## [Create](#___top "click to go to top of document")

```
 POST /api/card
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

deck\_id

Required.

quantity

Optional.

back\_from

Optional.

face\_id

Optional.

back\_id

Optional.

has\_proofed\_face

Optional.

has\_proofed\_back

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Rope",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/card/xxx
```

See **Card** for details.

## [Delete Card](#___top "click to go to top of document")

```
 DELETE /api/card/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/card/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_options

Optional. See ["Options" in Intro](/developer/Intro.html#Options) and **Card Options** above for details.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Card Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Rope",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="card-properties"></a>

## Card Properties

> Source file: `CardProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| back\_from | Owner | Owner | No | char | Deck | No |
| back\_id | Owner | Owner | No | char |  | Yes |
| class\_number | Owner | Owner | No | tinyint | 1 | No |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| deck\_id | Everyone | Owner | Yes | char |  | No |
| face\_id | Owner | Owner | No | char |  | Yes |
| has\_proofed\_back | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_face | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="using-a-cart"></a>

## Using a Cart

> Source file: `Cart.html`

-   [Using a Cart](#Using_a_Cart)
-   [Cart Properties](#Cart_Properties)
-   [Relationships](#Relationships)
-   [Related Objects](#Related_Objects)
-   [Cart Methods](#Cart_Methods)
    -   [Cart Options](#Cart_Options)
    -   [Create Cart](#Create_Cart)
    -   [Update Cart](#Update_Cart)
    -   [Delete Cart](#Delete_Cart)
    -   [Fetch Cart](#Fetch_Cart)
    -   [Add Items To Cart](#Add_Items_To_Cart)
    -   [Adjust Items In Cart](#Adjust_Items_In_Cart)
    -   [Attach A Shipping Address](#Attach_A_Shipping_Address)
    -   [Get Shipping Method Options](#Get_Shipping_Method_Options)
    -   [Attach A User](#Attach_A_User)
    -   [Pay With Shop Credit](#Pay_With_Shop_Credit)
    -   [Pay With Invoice](#Pay_With_Invoice)
    -   [Pay With Credit Card](#Pay_With_Credit_Card)
    -   [Convert To A Wishlist](#Convert_To_A_Wishlist)
    -   [Fetch List of Cart Items](#Fetch_List_of_Cart_Items)

Using a cart is a multi-step process. You'll need to do the following things in order:

-   Create a Cart
-   You can do the following in any order:
    -   Add Items To Cart
    -   Attach A Shipping Address
    -   Attach A Shipping Method
    -   Attach A User
-   Checkout
    
    When you successfully attach a payment method to a cart you'll convert it into a [Receipt](/developer/Receipt.html). It is at this point that shop credit will be deducted from the order before sending the request to the payment provider.
    
    -   Pay With Shop Credit
    -   Pay With Invoice
    -   Pay With A Credit Card
    
    Another way to checkout is to hand off the checkout process to our web interface. It is recommended that you skip attaching a user and addresses to this cart if you use this method. To do this redirect the user to:
    
    ```
     https://www.thegamecrafter.com/cart/XXX
    ```
    
    Or:
    
    ```
     https://www.thegamecrafter.com/checkout/cart/XXX
    ```
    
    Replace `XXX` with the `cart_id` of the cart you'd like them to check out with. The first URI will bring them to the cart so they can view, modify, or continue shopping. The second URI will bring them directly to the checkout process.
    

### [Cart Properties](#___top "click to go to top of document")

Each cart has the following properties and is accessed via `/api/cart`. Complete details in [OrderProperties](/developer/OrderProperties.html) and [OrderItemProperties](/developer/OrderItemProperties.html).

id

The unique id for this cart. It will never change.

wing\_object\_type

`cart`.

name

A label to identify an cart. This is useful if you're going to allow multiple carts open at the same time, or if you want to name wishlists.

user\_id

A [User](/developer/User.html) id. If specified, the unique id of the user that controls this cart. Once a user has been attached to an cart, it cannot be viewed or manipulated except by passing a working session id for that user. See Cart Options below for details. Defaults to `Cart`.

items

An array of items that are in the cart. See ["Cart Related Objects"](#Cart_Related_Objects) below for details.

shipping\_address\_id

An [Address](/developer/Address.html) id. The unique id of an address. See [Address](/developer/Address.html) for details on creating an address.

shipping\_address

A hash of address properties associated with the `shipping_address_id`. See ["Cart Related Objects"](#Cart_Related_Objects) below for details.

shipping\_method

The shipping mechanism that will be used to transport the cart to the purchaser. Defaults to `USPS Priority`. See Cart Options below for details.

shipping\_cost

The amount added to the cart to account for the cost of shipping. This will be added to the cart once both a shipping address and a shipping method are known.

subtotal

The cost of all the items attached to the cart before taxes, shop credit, and shipping are applied.

taxes

The amount of taxes to be paid to purchase this cart. Will always be zero until a shipping address has been specified.

insured

A boolean indicating whether this order is marked to be insured for damages. Defaults to 1.

insurance\_cost

The cost associated with flipping the `insured` bit.

urgent

A boolean indicating whether this order is marked for expedited production. Defaults to 0.

urgent\_fee

The cost associated with flipping the `urgent` bit.

total

The total cost of the cart including taxes and shipping. If this is a Receipt it will also include the discount as a result of shop credit used.

payment\_method

The method used to pay for the cart. Defaults to `Credit Card`. See ["Cart Options"](#Cart_Options) below for details.

payment\_transaction\_id

If an attempt has been made to pay for this cart then the id returned from the payment gateway will be logged here.

payment\_status

If an attempt has been made to pay for this cart then the status code returned from the payment gateway will be logged here.

payment\_message

If an attempt has been made to pay for this cart then the message returned from the payment gateway will be logged here.

ip\_address

The IP address of the user at the time of cart creation.

date\_created

A date when the cart was created.

date\_updated

A date when the cart's account was last updated.

### [Relationships](#___top "click to go to top of document")

See ["Relationships" in Intro](/developer/Intro.html#Relationships) for details.

items

An array of items that are currently placed in the cart

```
      "items" : [
         {
            "quantity" : "1",
            "name" : "Prison Break",
            "price_each" : "0.8900",
            "id" : "563C57FE-47F0-11E2-836F-50F9C28E391D"
            ...
         }
         ...
    ]
```

Please see [Game](/developer/Game.html) and [Part](/developer/Part.html) for more details about what items may contain.

The user attached to this cart, if any.

### [Related Objects](#___top "click to go to top of document")

See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) for details.

user

The user attached to this cart, if any. Will return:

```
 {
    "shop_credit" : "0.00",
    "username" : "andy",
    "id" : "xxx",
    ...
 }
```

shipping\_address

The [Address](/developer/Address.html) attached to the cart that the cart should be shipped to. Will return:

```
 {
    "id" : "xxx",
    "user_id" : "xxx",
    "name" : "Andy Dufresne",
    "company" : "Shawshank Prison",
    "address1" : "123 Prison Lane",
    "address2" : "Shawshank Prison Library",
    "city" : "Portland",
    "state" : "Maine",
    "postal_code" : "04101",
    "country" : "US",
    "phone_number" : "207-874-8300"
 }
```

### [Cart Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate carts.

**NOTE:** Any methods that require the cart ID in the URI, can have the ID ommitted to use the current cart stored in the browser's cookie. For example:

```
 POST /api/cart/xxx/sku/xxx
```

Can become:

```
 POST /api/cart//sku/xxx
```

## [Cart Options](#___top "click to go to top of document")

Provides a list of the options that can be used to fill out various fields when creating or updating a cart.

```
 GET /api/cart/_options
```

Returns:

```
 {
    "identity" : [...],
    "shipping_method" : [...],
    "_shipping_method" : {...},
 }
```

**NOTE:** You can also get this data by adding `_include_options=1` to the parameter list when fetching a cart.

## [Create Cart](#___top "click to go to top of document")

```
 POST /api/cart
```

api\_key\_id

See [APIKey](/developer/APIKey.html). Required.

name

Optional.

shipping\_address\_id

Optional. Will be required before checkout.

Returns:

```
 {
   "id" : "xxx",
   "cartname" : "andy",
   ...
 }
```

## [Update Cart](#___top "click to go to top of document")

PUT /api/cart/xxx

See **Create Cart** for details. Can only be done by an admin or the cart owner itself.

## [Delete Cart](#___top "click to go to top of document")

DELETE /api/cart/xxx

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Can only be done by an admin or the cart owner itself.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch Cart](#___top "click to go to top of document")

GET /api/cart/xxx

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

Can by done by anybody.

Returns:

```
 {
   "id" : "xxx",
   ...
 }
```

## [Add Items To Cart](#___top "click to go to top of document")

```
 POST /api/cart/xxx/sku/xxx
```

Allows you to add a [Sku](/developer/Sku.html) to the cart.

quantity

Optional. Defaults to 0. Adds or subtracts items to or from the cart depending on whether this number is positive or negative.

## [Adjust Items In Cart](#___top "click to go to top of document")

PUT /api/cart/xxx/sku/xxx

Allows you to adjust the quantity of this [Sku](/developer/Sku.html) in the cart.

quantity

Optional. Defaults to 0. Sets the number of this item contained in the cart. Setting to 0 will remove it from the cart. If you set a quantity and the item isn't already in the cart it will be added.

## [Attach A Shipping Address](#___top "click to go to top of document")

Attaching a shipping address is easy using the Create Cart or Update Cart methods documented above as long as you already have an address. If you don't, then you'll need to create on using the [Address](/developer/Address.html) service first.

## [Get Shipping Method Options](#___top "click to go to top of document")

Provides a list of shipping options the user can choose from. Every order will have a different set of options based upon the shipping destination, size, and weight of the order.

GET /api/cart/xxx/shipping-method-options

```
 {
    "Will Call" : {
        "description" : "By selecting Will Call you agree to pick up your order at The Game Crafter facility in Madison, Wisconsin.",
        "cost" : "0.00",
        "handling_fee" : "0.00",
        "insurance_rate" : "0",
        "weight" : 20,
        "number_of_parcels" : 1,
    },
    ...
 }
```

Description informs the user a little about this shipping option.

Cost is the cost the shipping provider is charging The Game Crafter, and therefore is passed along to the customer.

Handling Fee is the extra cost The Game Cafter applies. This covers the cost of the shipping box as well as any special paperwork that needs to be filled out to complete this shipping method.

Insurance rate is a decimal percentage that can be multiplied against the order subtotal to determine the shipping insurance cost.

Weight is the number of ounces the shipment will weigh.

Number of parcels is the total number of packages that will be used to send this shipment.

## [Attach A User](#___top "click to go to top of document")

POST /api/cart/xxx/user

Before checkout you need to attach a user to the cart. This can either be done by attaching an authenticated session, or by simply specifying an email address.

```
 {
    "order" : { ... },
    "session_id" : "xxx"
 }
```

**NOTE:** The session\_id returned here needs (or any session\_id attached to the user\_id attached to this cart) to be used on all subsequent interactions with the cart.

session\_id

A session id as created by [Session](/developer/Session.html).

email

An email address of the user checking out. This only works if the user is not already in the system.

## [Pay With Shop Credit](#___top "click to go to top of document")

POST /api/cart/xxx/payment/shopcredit

A common way for people to use our API to private label their own processes is to use shop credit. Just keep your account stocked up with shop credit, and then when a customer checks out on your site, you can pay for it on ours using shop credit.

Returns a [Receipt](/developer/Receipt.html).

## [Pay With Invoice](#___top "click to go to top of document")

POST /api/cart/xxx/payment/invoice

Attaches an invoice to this cart to pay for the items in it. The invoice will be emailed you using terms set during pre-approval.

**NOTE:** You must be pre-approved to use this method.

Returns a [Receipt](/developer/Receipt.html).

po\_number

Purchase order number. Any characters up to 30 digits. Required.

## [Pay With Credit Card](#___top "click to go to top of document")

POST /api/cart/xxx/payment/creditcard

Attaches a credit card to this cart to pay for the items in it.

**NOTE:** You must be pre-approved to use this method.

Returns a [Receipt](/developer/Receipt.html).

card\_number

The credit card number.

expiration\_month

The month that the card expires.

expiration\_year

The year that the card expires.

cvv2

The three digit code on the back of the card, or the 4 digit code on the front of an American Express card.

## [Convert To A Wishlist](#___top "click to go to top of document")

POST /api/cart/xxx/wishlist

Converts this cart to a [Wishlist](/developer/Wishlist.html).

## [Fetch List of Cart Items](#___top "click to go to top of document")

```
 GET /api/cart/xxx/items
```

Returns:

```
 {
   "items" : [
         {
            "quantity" : "1",
            "name" : "Prison Break",
            "price_each" : "0.8900",
            "id" : "563C57FE-47F0-11E2-836F-50F9C28E391D",
            ...
         }
         ...
    ],
    "paging" : {}
   }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="changes"></a>

## Changes

> Source file: `Changes.html`

-   [Changes](#Changes)
    -   [September 24, 2021](#September_24%2C_2021)
    -   [Early 2021 TBD](#Early_2021_TBD)
    -   [February 20, 2021](#February_20%2C_2021)
    -   [February 4, 2021](#February_4%2C_2021)
    -   [February 3, 2021](#February_3%2C_2021)
    -   [February 1, 2021](#February_1%2C_2021)
    -   [January 31, 2021](#January_31%2C_2021)
    -   [January 30, 2021](#January_30%2C_2021)
    -   [December 9, 2020](#December_9%2C_2020)
    -   [November 1, 2020](#November_1%2C_2020)

We strive to keep our APIs backward compatible. We often add new features, but rarely do we actually break old APIs. When we do break APIs we'll log those changes here for you.

Note also that we do not document all the incremental changes as that would mostly be information overload. We only note major API changes here.

## [September 24, 2021](#___top "click to go to top of document")

Deprecated the Printed Component API in [TGC](/developer/TGC.html). We have no estimated date where it will be removed, but we are no longer using it ourselves, as we're using a new schema API at the endpoint: https://www.thegamecrafter.com/api/tgc/products

## [Early 2021 TBD](#___top "click to go to top of document")

We will be discontinuing a compatibility layer we created in December of 2020. Further, we'll be merging some APIs, for example [BoxFace](/developer/BoxFace.html) and [BoxTop](/developer/BoxTop.html) will likely be merged into [OneSided](/developer/OneSided.html).

All of these changes should take place over the first 3 months of 2021 and will be announced as they happen. We are sorry for the inconvenience. If you have questions please contact info@thegamecrafter.com.

## [February 20, 2021](#___top "click to go to top of document")

We've added a new [WebHook](/developer/WebHook.html) API so that your applications can be notified when events occur in our system.

We have removed the old fashioned `notify_of_sale_via_postback_uri` on [Designer](/developer/Designer.html)s in favor of our new [WebHook](/developer/WebHook.html)s system.

## [February 4, 2021](#___top "click to go to top of document")

This release breaks the API for [OneSidedSlugged](/developer/OneSidedSlugged.html). It now requires a [OneSidedSluggedSet](/developer/OneSidedSluggedSet.html), similiar to the relationship between [Card](/developer/Card.html)s and [Deck](/developer/Deck.html)s. This example will create a Set, and then add a OneSidedSlugged object to it.

```
 curl -X POST -F session_id=SESSIONIDGOESHERE -F name="Jeffs Dice Stickers" -F game_id="XXX" -F identity="DiceSticker" https://www.thegamecrafter.com/api/onesidedsluggedset
 curl -X POST -F session_id=SESSIONIDGOESHERE -F name="D6_4 Face6" -F quantity="99" -F set_id="XXX" https://www.thegamecrafter.com/api/onesidedslugged
```

## [February 3, 2021](#___top "click to go to top of document")

This release breaks the API for [TwoSidedSlugged](/developer/TwoSidedSlugged.html). It now requires a [TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html), similiar to the relationship between [Card](/developer/Card.html)s and [Deck](/developer/Deck.html)s. This example will create a Set, and then add a TwoSidedSlugged object to it.

```
 curl -X POST -F session_id=SESSIONIDGOESHERE -F name="My Square Tiles" -F game_id="XXX" -F identity="SquareTile" https://www.thegamecrafter.com/api/twosidedsluggedset
 curl -X POST -F session_id=SESSIONIDGOESHERE -F name="Green Square Tile" -F set_id="XXX" https://www.thegamecrafter.com/api/twosidedslugged
```

## [February 1, 2021](#___top "click to go to top of document")

This release breaks the API for [TwoSided](/developer/TwoSided.html). It now requires a [TwoSidedSet](/developer/TwoSidedSet.html), similiar to the relationship between [Card](/developer/Card.html)s and [Deck](/developer/Deck.html)s. This example will create a Set, and then add a TwoSided object to it.

```
 curl -X POST -F session_id=SESSIONIDGOESHERE -F name="My Skinny Mats" -F game_id="XXX" -F identity="SkinnyMat" https://www.thegamecrafter.com/api/twosidedset
 curl -X POST -F session_id=SESSIONIDGOESHERE -F name="Player1 Skinny Mat" -F set_id="XXX" https://www.thegamecrafter.com/api/twosided
```

## [January 31, 2021](#___top "click to go to top of document")

Added the ["Bulk Create Cards" in Deck](/developer/Deck.html#Bulk_Create_Cards) endpoint.

## [January 30, 2021](#___top "click to go to top of document")

Added the ["Grid Image Upload" in File](/developer/File.html#Grid_Image_Upload) endpoint.

## [December 9, 2020](#___top "click to go to top of document")

We've replaced our old game component APIs with new ones, but we've built in some short-term backward compatibility so everything is still working as it was. You should migrate to these new APIs as soon as possible as we'll be removing the compatibility layer in early 2021.

All game component APIs have been affected. The gist of the change is that instead of an end point per component, we are now having 1 endpoint per component type. For example `/api/pokerdeck` becomes `/api/deck`. When you create a deck you specify what type it is by passing an `identity` parameter, such as `PokerDeck`. These changes are documented inside of each of the APIs, so check out [Deck](/developer/Deck.html) as an example.

Thus:

```
 curl -X POST -F session_id=SESSIONIDGOESHERE -F name="My Cool Deck" https://www.thegamecrafter.com/api/pokerdeck
```

Would instead become:

```
 curl -X POST -F session_id=SESSIONIDGOESHERE -F name="My Cool Deck" -F identity=PokerDeck https://www.thegamecrafter.com/api/deck
```

## [November 1, 2020](#___top "click to go to top of document")

We're moving into a new era now that we have our new game editor out. As such the old changes don't matter anymore.

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="coil-book"></a>

## Coil Book

> Source file: `CoilBook.html`

-   [Coil Book](#Coil_Book)
-   [Identities](#Identities)
-   [CoilBook Properties](#CoilBook_Properties)
-   [Relationships](#Relationships)
-   [Related Objects](#Related_Objects)
-   [CoilBook Methods](#CoilBook_Methods)
    -   [Create CoilBook](#Create_CoilBook)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

All coil bound books share this API just using different identities to differentiate by size. They are all accessed via `/api/coilbook`.

### [Identities](#___top "click to go to top of document")

JumboCoilBook

### [CoilBook Properties](#___top "click to go to top of document")

Each coilbook has the following properties with complete details in [CoilBookProperties](/developer/CoilBookProperties.html):

id

The unique id for this coilbook. It will never change.

identity

The size of coilbook you want. See Identities above.

wing\_object\_type

`coilbook`

date\_created

A date when the coilbook was created.

date\_updated

A date when the coilbook was last updated.

name

The name the coilbook is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this coilbook belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a coilbook to be included in the game.

page\_count

The number of pages in the coilbook.

### [Relationships](#___top "click to go to top of document")

pages

The list of [CoilBookPage](/developer/CoilBookPage.html)s that are attached to this coilbook.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this coilbook is a member of.

### [CoilBook Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate coilbooks.

## [Create CoilBook](#___top "click to go to top of document")

```
 POST /api/coilbook
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Rules",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/coilbook/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /coilbook/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/coilbook/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **CoilBook Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Rules",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="coil-book-page"></a>

## Coil Book Page

> Source file: `CoilBookPage.html`

-   [Coil Book Page](#Coil_Book_Page)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

The child element of [CoilBook](/developer/CoilBook.html)s are coil book pages, which are accessible via `/api/coilbookpage`.

### [Properties](#___top "click to go to top of document")

Each coil book page has the following properties with full details found at [CoilBookPageProperties](/developer/CoilBookPageProperties.html):

id

The unique id for this coil book page. It will never change.

wing\_object\_type

`coilbookpage`

date\_created

A date when the coil book page was created.

date\_updated

A date when the coil book page was last updated.

name

The name the coil book page is known by.

sequence\_number

An integer between 1 and 20. The order this page should be included. Another way to think of it is the page number.

coilbook\_id

A [CoilBook](/developer/CoilBook.html) id. The unique id of a coil book that this coil book page belongs to.

image\_id

A [File](/developer/File.html) id. ets the image of the coil book page. The ID is from a [File](/developer/File.html). If a image\_id is specified, then an extra property called `image` will be added which will briefly describe the image.

has\_proofed\_image

A boolean indicating whether the image has been verified by the user to be correct.

### [Related Objects](#___top "click to go to top of document")

coilbook

The [CoilBook](/developer/CoilBook.html) that this coil book page is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate coil book pages.

## [Create](#___top "click to go to top of document")

```
 POST /api/coilbookpage
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

coil book\_id

Required.

sequence\_number

Optional.

image\_id

Optional.

has\_proofed\_image

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Setup",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/coilbookpage/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /coilbookpage/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/coilbookpage/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_related\_objects

Optional. See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) and **Related Objects** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Setup",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="coilbookpage-properties"></a>

## CoilBookPage Properties

> Source file: `CoilBookPageProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| book\_id | Everyone | Owner | Yes | char |  | No |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| has\_proofed\_image | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| image\_id | Owner | Owner | No | char |  | Yes |
| is\_blank | Owner | Owner | No | tinyint | 0 | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| sequence\_number | Owner | Owner | No | smallint | 1 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="coilbook-properties"></a>

## CoilBook Properties

> Source file: `CoilBookProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="crafter-point-currency"></a>

## Crafter Point Currency

> Source file: `CrafterPointCurrency.html`

-   [Crafter Point Currency](#Crafter_Point_Currency)
    -   [Requesting Payment](#Requesting_Payment)
    -   [Claim a Payment](#Claim_a_Payment)
    -   [Payouts](#Payouts)
    -   [Processing Refunds](#Processing_Refunds)

Crafter Points [http://help.thegamecrafter.com/article/113-crafter-points](http://help.thegamecrafter.com/article/113-crafter-points) are a virtual currency system used within The Game Crafter for all kinds of things. However, they can also be used on remote sites as a way for your fans to pay for things via micro transactions. This document describes how to integrate Crafter Point Currency into your app.

## [Requesting Payment](#___top "click to go to top of document")

To request a payment of a user, you'll need to set up a form that will post to our API, so that the user can approve the request. The form will look like this:

```
 <form method="POST" action="https://www.thegamecrafter.com/account/spendcp">
    <input type="hidden" name="redirect_uri" value="http://www.example.com/back/to/me">
    <input type="hidden" name="amount" value="3000">
    <input type="hidden" name="reason" value="A Big Warm Fuzzy">
    <input type="hidden" name="transaction_id" value="whatever you like">
    <input type="hidden" name="api_key_id" value="XXX-XXXX-XX-XXXX-X-XXX">
    <button>Buy a Big Warm Fuzzy for 3,000 CP</button>
 </form>
```

redirect\_uri

A URI pointing to where you want the user to be redirected after they have approved or declined your purchase.

We will append a variable named `claim_key` to the URI parameters that you'll need to claim the payment.

amount

The amount of crafter points you are requesting from the user. This should be a multiple of 100 to maximize your benefit.

reason

A description of why you're charging the user some crafter points.

transaction\_id

A way for you to correlate the payment request to the payment claim.

api\_key\_id

See [APIKey](/developer/APIKey.html).

When the user clicks this button they'll go to our site where they will approve or decline the transaction. If they decline they'll simply be redirected back to the Redirect URI. If they approve we move on to the claiming a payment phase.

## [Claim a Payment](#___top "click to go to top of document")

If a user approves a payment, they'll be redirected back to your site via the `redirect_uri` you specified. We will attach a `claim_key` parameter to that URI. You'll use the `claim_key` to claim the purchase once the user is redirected back to your site. To do that you'll

```
 POST https://www.thegamecrafter.com/api/claim-cp-purchase
```

claim\_key

A string passed to you after requesting payment.

If the claim key is invalid then we'll return a standard error response. But if it is valid then we'll credit your account and return a result similar to the following:

```
 {
    "result" : {
        "amount" : "3000",
        "transaction_id" : "whatever you like",
        "user" : {
            "id" : "xxx",
            "display_name" : "Joe Schmoe",
            "email" : "joe@schmoe.com"
        }
    }
 }
```

**NOTE:** The claim key is only valid for 1 minute after the approval.

amount

The amount of crafter points you requested.

transaction\_id

A way for you to correlate the payment request to the payment claim.

user

The description of the [User](/developer/User.html) that approved the payment.

## [Payouts](#___top "click to go to top of document")

After collecting all these crafter points from people, you will be able to turn them into cold hard cash, which will be paid out via our Payout system [https://www.thegamecrafter.com/account/payout](https://www.thegamecrafter.com/account/payout). The conversion ratio is 100 crafter points equals 1 US cent. Since 1 cent is the minimum conversion, you'll want to price your items in multiples of 100. So if you want to make $5 on something, then you should charge 50,000 crafter points for it.

## [Processing Refunds](#___top "click to go to top of document")

If you need to process a refund you can use the following service.

```
 POST https://www.thegamecrafter.com/api/refund-cp-purchase
```

session\_id

A [Session](/developer/Session.html) id for your developer account.

amount

The amount of crafter points you wish to refund to the user. This should be done in multiples of 100. Anything less than 100 will subtract 1 cent from your payouts owed.

user\_id

The user\_id of the [User](/developer/User.html) that you wish to give the refund to.

reason

The reason you're processing the refund.

If successful this method will return:

```
 {
    "success" : 1
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="c-example"></a>

## C# Example

> Source file: `CSharpExample.html`

**NOTE:** Get an [APIKey](/developer/APIKey.html).

This code will allow you to get a session, fetch account info, upload a file, and search games. From it you should be able to discern how to work with the entire TGC API.

```
 using System;
 using System.Threading;
 using Newtonsoft.Json;
 using RestSharp;
 
 namespace TGCTutorial
 {
     class Program
     {
         const string API_KEY_ID = ""; // get your own
         const string USERNAME = ""; // put your username here;
         const string PASSWORD = ""; // put your password here;
         static RestClient client;
         static string session_id;
         static string user_id;
 
         static void Main(string[] args)
         {
             client = new RestClient("https://www.thegamecrafter.com/api/");
 
             Console.WriteLine("Getting A Session...");
             GetASession(USERNAME, PASSWORD);
             Console.WriteLine("Session ID:   " + session_id);
             Console.WriteLine("User ID:      " + user_id);
             Thread.Sleep(1000);
 
             Console.WriteLine("\n");
             Console.WriteLine("Fetching My Account Info...");
             dynamic user = FetchMyAccountInfo();
             Console.WriteLine("Display Name: " + user.display_name);
             Console.WriteLine("email:        " + user.email);
             Thread.Sleep(1000);
 
             Console.WriteLine("\n");
             Console.WriteLine("Uploading A File...");
             dynamic file = UploadAFile(user, "path/to/image.png", "image.png");
             Console.WriteLine("File name:    " + file.name);
             Console.WriteLine("File ID:      " + file.id);
             Thread.Sleep(1000);
 
             Console.WriteLine("\n");
             Console.WriteLine("Searching Games...");
             dynamic games = SearchGames();
             foreach (dynamic game in games)
             {
                 Console.WriteLine("Game Name:    " + game.name);
                 Console.WriteLine("Game ID:      " + game.id);
                 Thread.Sleep(100);
             }
 
             Console.WriteLine("\n");
             Console.Write("Hit any key to close...");
             Console.ReadKey();
         }
 
         static void GetASession(string username, string password)
         {
             RestRequest request = new RestRequest("session", Method.POST);
             request.AddParameter("username", username);
             request.AddParameter("password", password);
             request.AddParameter("api_key_id", API_KEY_ID);
 
             var response = client.Execute(request);
             dynamic data = JsonConvert.DeserializeObject(response.Content);
 
             session_id = data.result.id;
             user_id = data.result.user_id;
         }
 
         static dynamic FetchMyAccountInfo()
         {
             RestRequest request = new RestRequest("user/" + user_id, Method.GET);
             request.AddParameter("session_id", session_id);
 
             var response = client.Execute(request);
             dynamic data = JsonConvert.DeserializeObject(response.Content);
 
             dynamic user = data.result;
 
             return user;
         }
 
         static dynamic UploadAFile(dynamic user, string filepath, string filename)
         {
             RestRequest request = new RestRequest("file", Method.POST);
             request.AddFile("file", filepath);
             request.AddParameter("name", filename);
             request.AddParameter("folder_id", user.root_folder_id);
             request.AddParameter("session_id", session_id);
 
             var response = client.Execute(request);
             dynamic data = JsonConvert.DeserializeObject(response.Content);
             var file = data.result;
 
             return file;
         }
 
         static dynamic SearchGames()
         {
             RestRequest request = new RestRequest("game", Method.GET);
             request.AddParameter("q", "Steampunk");
             request.AddParameter("session_id", session_id);
 
             var response = client.Execute(request);
             dynamic data = JsonConvert.DeserializeObject(response.Content);
 
             dynamic games = data.result.items;
 
             return games;
         }
     }
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="curl-example"></a>

## Curl Example

> Source file: `CurlExample.html`

-   [Curl Example](#Curl_Example)
    -   [Get a Session](#Get_a_Session)
    -   [Fetch My Account Info](#Fetch_My_Account_Info)
    -   [Upload a File](#Upload_a_File)
    -   [Search Games](#Search_Games)
    -   [Create a Game](#Create_a_Game)
    -   [Create a Large Acrylic Shape](#Create_a_Large_Acrylic_Shape)
    -   [Create a Cart](#Create_a_Cart)
    -   [Add a Game to a Cart](#Add_a_Game_to_a_Cart)

**NOTE:** Get an [APIKey](/developer/APIKey.html).

## [Get a Session](#___top "click to go to top of document")

```
 curl -X POST -F username=joe -F password=abc123 -F api_key_id=XXX https://www.thegamecrafter.com/api/session
```

## [Fetch My Account Info](#___top "click to go to top of document")

```
 curl -X GET -F session_id=XXX https://www.thegamecrafter.com/api/user/YYY
```

You can get the user\_id (YYY) from the session.

## [Upload a File](#___top "click to go to top of document")

```
 curl -X POST -F session_id=XXX -F name=image.jpg -F folder_id=YYY -F file=@/path/to/image.jpg https://www.thegamecrafter.com/api/file
```

You can get the folder\_id (YYY) from the root\_folder\_id in the user account info.

## [Search Games](#___top "click to go to top of document")

```
 curl -X GET -F session_id=XXX -F q=Steampunk https://www.thegamecrafter.com/api/game
```

Session ID is optional for this.

## [Create a Game](#___top "click to go to top of document")

```
 curl -X POST -F session_id=SESSIONIDGOESHERE -F name=NAMEITSOMTHING https://www.thegamecrafter.com/api/game
```

## [Create a Large Acrylic Shape](#___top "click to go to top of document")

```
 curl -X POST -F session_id=SESSIONIDGOESHERE -F name=NAMEITSOMETHING -F identity=LargeAcrylicShape125 -F game_id=GAMEIDGOESHERE -F side1_is=has_art -F side2_is=has_art -F quantity=1 -F side1_id=IDOFFACEART -F side2_id=IDOFBACKART -F cut_id=IDOFCUTSVGFILE -F has_proofed_side1=1 -F has_proofed_side2=1  https://www.thegamecrafter.com/api/acrylicshape
```

## [Create a Cart](#___top "click to go to top of document")

```
 curl -X POST -F session_id=SESSIONID -F api_key_id=APIKEY http://www.thegamecrafter.com/api/cart
```

## [Add a Game to a Cart](#___top "click to go to top of document")

```
 curl -X POST -F session_id=SESSIONID https://www.thegamecrafter.com/api/cart/CARTID/sku/SKUID
```

The Cart ID was in the output when you created a cart. The Sku ID was in the output when you created your game.

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="custom-color-d4"></a>

## Custom Color D4

> Source file: `CustomColorD4.html`

-   [Custom Color D4](#Custom_Color_D4)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

This API allows you to create custom color D4 objects. Accessible via `/api/customcolord4`.

### [Identities](#___top "click to go to top of document")

CustomColorD4

### [Properties](#___top "click to go to top of document")

Each custom color D4 object is accessed via `/api/customcolord4` and has the following properties. Complete details in [CustomColorD4Properties](/developer/CustomColorD4Properties.html).

id

The unique id for this custom color D4 object. It will never change.

identity

The style of custom color D4 object you want.

object\_type

`customcolord4`

date\_created

A date when the custom color D4 object was created.

date\_updated

A date when the custom color D4 object was last updated.

name

The name the custom color D4 object is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this custom color D4 object belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a custom color D4 object to be included in the game.

diecolor

The color of the dice itself before printing. Defaults to `white`.

side1\_id

A [File](/developer/File.html) id. Optional. Sets the side1 image of the custom color D4 object. The ID is from a [File](/developer/File.html). If a side1\_id is specified, then an extra property called `side1` will be added which will briefly describe the image.

has\_proofed\_side1

A boolean indicating whether the side1 image has been verified by the user to be correct.

side2\_id

A [File](/developer/File.html) id. Optional. Sets the side2 image of the custom color D4 object. The ID is from a [File](/developer/File.html). If a side2\_id is specified, then an extra property called `side2` will be added which will briefly describe the image.

has\_proofed\_side2

A boolean indicating whether the side2 image has been verified by the user to be correct.

side3\_id ... side4\_id

Same as side1 and side2.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this custom color D4 object is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate custom color D4 objects.

## [Create](#___top "click to go to top of document")

```
 POST /api/customcolord4
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

side1\_id

Optional.

has\_proofed\_side1

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/customcolord4/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/customcolord4/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/customcolord4/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) and **Related Objects** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="customcolord4-properties"></a>

## CustomColorD4 Properties

> Source file: `CustomColorD4Properties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| diecolor | Everyone | Owner | No | varchar | white | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| has\_proofed\_side1 | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_side2 | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_side3 | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_side4 | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |
| side1\_id | Owner | Owner | No | char |  | Yes |
| side2\_id | Owner | Owner | No | char |  | Yes |
| side2\_is | Everyone | Owner | No | varchar | has\_art | No |
| side3\_id | Owner | Owner | No | char |  | Yes |
| side3\_is | Everyone | Owner | No | varchar | has\_art | No |
| side4\_id | Owner | Owner | No | char |  | Yes |
| side4\_is | Everyone | Owner | No | varchar | has\_art | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="custom-color-d6"></a>

## Custom Color D6

> Source file: `CustomColorD6.html`

-   [Custom Color D6](#Custom_Color_D6)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

This API allows you to create custom color D6 objects. Accessible via `/api/customcolord6`.

### [Identities](#___top "click to go to top of document")

CustomColorD6

### [Properties](#___top "click to go to top of document")

Each custom color D6 object is accessed via `/api/customcolord6` and has the following properties. Complete details in [CustomColorD6Properties](/developer/CustomColorD6Properties.html).

id

The unique id for this custom color D6 object. It will never change.

identity

The style of custom color D6 object you want.

object\_type

`customcolord6`

date\_created

A date when the custom color D6 object was created.

date\_updated

A date when the custom color D6 object was last updated.

name

The name the custom color D6 object is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this custom color D6 object belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a custom color D6 object to be included in the game.

diecolor

The color of the dice itself before printing. Defaults to `white`.

side1\_id

A [File](/developer/File.html) id. Optional. Sets the side1 image of the custom color D6 object. The ID is from a [File](/developer/File.html). If a side1\_id is specified, then an extra property called `side1` will be added which will briefly describe the image.

has\_proofed\_side1

A boolean indicating whether the side1 image has been verified by the user to be correct.

side2\_id

A [File](/developer/File.html) id. Optional. Sets the side2 image of the custom color D6 object. The ID is from a [File](/developer/File.html). If a side2\_id is specified, then an extra property called `side2` will be added which will briefly describe the image.

has\_proofed\_side2

A boolean indicating whether the side2 image has been verified by the user to be correct.

side3\_id ... side6\_id

Same as side1 and side2.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this custom color D6 object is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate custom color D6 objects.

## [Create](#___top "click to go to top of document")

```
 POST /api/customcolord6
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

side1\_id

Optional.

has\_proofed\_side1

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/customcolord6/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/customcolord6/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/customcolord6/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) and **Related Objects** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="customcolord6-properties"></a>

## CustomColorD6 Properties

> Source file: `CustomColorD6Properties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| diecolor | Everyone | Owner | No | varchar | white | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| has\_proofed\_side1 | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_side2 | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_side3 | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_side4 | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_side5 | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_side6 | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |
| side1\_id | Owner | Owner | No | char |  | Yes |
| side2\_id | Owner | Owner | No | char |  | Yes |
| side2\_is | Everyone | Owner | No | varchar | has\_art | No |
| side3\_id | Owner | Owner | No | char |  | Yes |
| side3\_is | Everyone | Owner | No | varchar | has\_art | No |
| side4\_id | Owner | Owner | No | char |  | Yes |
| side4\_is | Everyone | Owner | No | varchar | has\_art | No |
| side5\_id | Owner | Owner | No | char |  | Yes |
| side5\_is | Everyone | Owner | No | varchar | has\_art | No |
| side6\_id | Owner | Owner | No | char |  | Yes |
| side6\_is | Everyone | Owner | No | varchar | has\_art | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="custom-color-d8"></a>

## Custom Color D8

> Source file: `CustomColorD8.html`

-   [Custom Color D8](#Custom_Color_D8)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

This API allows you to create custom color D8 objects. Accessible via `/api/customcolord8`.

### [Identities](#___top "click to go to top of document")

CustomColorD8

### [Properties](#___top "click to go to top of document")

Each custom color D8 object is accessed via `/api/customcolord8` and has the following properties. Complete details in [CustomColorD8Properties](/developer/CustomColorD8Properties.html).

id

The unique id for this custom color D8 object. It will never change.

identity

The style of custom color D8 object you want.

object\_type

`customcolord8`

date\_created

A date when the custom color D8 object was created.

date\_updated

A date when the custom color D8 object was last updated.

name

The name the custom color D8 object is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this custom color D8 object belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a custom color D8 object to be included in the game.

diecolor

The color of the dice itself before printing. Defaults to `white`.

side1\_id

A [File](/developer/File.html) id. Optional. Sets the side1 image of the custom color D8 object. The ID is from a [File](/developer/File.html). If a side1\_id is specified, then an extra property called `side1` will be added which will briefly describe the image.

has\_proofed\_side1

A boolean indicating whether the side1 image has been verified by the user to be correct.

side2\_id

A [File](/developer/File.html) id. Optional. Sets the side2 image of the custom color D8 object. The ID is from a [File](/developer/File.html). If a side2\_id is specified, then an extra property called `side2` will be added which will briefly describe the image.

has\_proofed\_side2

A boolean indicating whether the side2 image has been verified by the user to be correct.

side3\_id ... side8\_id

Same as side1 and side2.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this custom color D8 object is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate custom color D8 objects.

## [Create](#___top "click to go to top of document")

```
 POST /api/customcolord8
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

side1\_id

Optional.

has\_proofed\_side1

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/customcolord8/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/customcolord8/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/customcolord8/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) and **Related Objects** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="customcolord8-properties"></a>

## CustomColorD8 Properties

> Source file: `CustomColorD8Properties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| diecolor | Everyone | Owner | No | varchar | white | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| has\_proofed\_side1 | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_side2 | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_side3 | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_side4 | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_side5 | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_side6 | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_side7 | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_side8 | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |
| side1\_id | Owner | Owner | No | char |  | Yes |
| side2\_id | Owner | Owner | No | char |  | Yes |
| side2\_is | Everyone | Owner | No | varchar | has\_art | No |
| side3\_id | Owner | Owner | No | char |  | Yes |
| side3\_is | Everyone | Owner | No | varchar | has\_art | No |
| side4\_id | Owner | Owner | No | char |  | Yes |
| side4\_is | Everyone | Owner | No | varchar | has\_art | No |
| side5\_id | Owner | Owner | No | char |  | Yes |
| side5\_is | Everyone | Owner | No | varchar | has\_art | No |
| side6\_id | Owner | Owner | No | char |  | Yes |
| side6\_is | Everyone | Owner | No | varchar | has\_art | No |
| side7\_id | Owner | Owner | No | char |  | Yes |
| side7\_is | Everyone | Owner | No | varchar | has\_art | No |
| side8\_id | Owner | Owner | No | char |  | Yes |
| side8\_is | Everyone | Owner | No | varchar | has\_art | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="custom-cut-one-sided-slugged"></a>

## Custom Cut One Sided Slugged

> Source file: `CustomCutOneSidedSlugged.html`

-   [Custom Cut One Sided Slugged](#Custom_Cut_One_Sided_Slugged)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

This API allows you to create sticker objects. Accessible via `/api/customcutonesidedslugged`.

### [Identities](#___top "click to go to top of document")

CustomLargeSticker

CustomMediumSticker

CustomMiniSticker

CustomSmallSticker

### [Properties](#___top "click to go to top of document")

Each custom cut one sided slugged object is accessed via `/api/customcutonesidedslugged` and has the following properties. Complete details in [CustomCutOneSidedSluggedProperties](/developer/CustomCutOneSidedSluggedProperties.html).

id

The unique id for this custom cut one sided slugged object. It will never change.

identity

The style of custom cut one sided slugged object you want.

object\_type

`customcutonesidedslugged`

date\_created

A date when the custom cut one sided slugged object was created.

date\_updated

A date when the custom cut one sided slugged object was last updated.

name

The name the custom cut one sided slugged object is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this custom cut one sided slugged object belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a custom cut one sided slugged object to be included in the game.

side1\_id

A [File](/developer/File.html) id. Optional. Sets the side1 image of the custom cut one sided slugged object. The ID is from a [File](/developer/File.html). If a side1\_id is specified, then an extra property called `side1` will be added which will briefly describe the image.

has\_proofed\_side1

A boolean indicating whether the side1 image has been verified by the user to be correct.

cut\_id

A [File](/developer/File.html) id. Sets the SVG cut file for this shape. If a cut\_id is specified, then an extra property called `cut` will be added which will briefly describe the svg image.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this custom cut one sided slugged object is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate custom cut one sided slugged objects.

## [Create](#___top "click to go to top of document")

```
 POST /api/customcutonesidedslugged
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

side1\_id

Optional.

has\_proofed\_side1

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/customcutonesidedslugged/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/customcutonesidedslugged/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/customcutonesidedslugged/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) and **Related Objects** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="customcutonesidedslugged-properties"></a>

## CustomCutOneSidedSlugged Properties

> Source file: `CustomCutOneSidedSluggedProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| cut\_id | Owner | Owner | No | char |  | Yes |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| face\_id | Owner | Owner | No | char |  | Yes |
| game\_id | Everyone | Owner | Yes | char |  | No |
| has\_proofed\_face | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="custom-cut-two-sided-slugged"></a>

## Custom Cut Two Sided Slugged

> Source file: `CustomCutTwoSidedSlugged.html`

-   [Custom Cut Two Sided Slugged](#Custom_Cut_Two_Sided_Slugged)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

This API allows you to create custom acrylic shape objects like meeples and tokens. Accessible via `/api/customcuttwosidedslugged`.

### [Identities](#___top "click to go to top of document")

CustomLargeCardstock

CustomLargePunchout

CustomMediumCardstock

CustomMediumPunchout

CustomMiniCardstock

CustomSmallCardstock

CustomSmallPunchout

### [Properties](#___top "click to go to top of document")

Each acrylic shape object is accessed via `/api/customcuttwosidedslugged` and has the following properties. Complete details in [CustomCutTwoSidedSluggedProperties](/developer/CustomCutTwoSidedSluggedProperties.html).

id

The unique id for this acrylic shape object. It will never change.

identity

The style of acrylic shape object you want.

object\_type

`customcuttwosidedslugged`

date\_created

A date when the acrylic shape object was created.

date\_updated

A date when the acrylic shape object was last updated.

name

The name the acrylic shape object is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this acrylic shape object belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a acrylic shape object to be included in the game.

side1\_id

A [File](/developer/File.html) id. Optional. Sets the side1 image of the acrylic shape object. The ID is from a [File](/developer/File.html). If a side1\_id is specified, then an extra property called `side1` will be added which will briefly describe the image.

has\_proofed\_side1

A boolean indicating whether the side1 image has been verified by the user to be correct.

side2\_id

A [File](/developer/File.html) id. Optional. Sets the side2 image of the acrylic shape object. The ID is from a [File](/developer/File.html). If a side2\_id is specified, then an extra property called `side2` will be added which will briefly describe the image.

has\_proofed\_side2

A boolean indicating whether the side2 image has been verified by the user to be correct.

cut\_id

A [File](/developer/File.html) id. Sets the SVG cut file for this shape. If a cut\_id is specified, then an extra property called `cut` will be added which will briefly describe the svg image.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this acrylic shape object is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate acrylic shape objects.

## [Create](#___top "click to go to top of document")

```
 POST /api/customcuttwosidedslugged
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

side1\_id

Optional.

has\_proofed\_side1

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/customcuttwosidedslugged/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/customcuttwosidedslugged/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/customcuttwosidedslugged/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) and **Related Objects** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="customcuttwosidedslugged-properties"></a>

## CustomCutTwoSidedSlugged Properties

> Source file: `CustomCutTwoSidedSluggedProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| back\_id | Owner | Owner | No | char |  | Yes |
| cut\_id | Owner | Owner | No | char |  | Yes |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| face\_id | Owner | Owner | No | char |  | Yes |
| game\_id | Everyone | Owner | Yes | char |  | No |
| has\_proofed\_back | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_face | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="custom-printed-meeple"></a>

## Custom Printed Meeple

> Source file: `CustomPrintedMeeple.html`

-   [Custom Printed Meeple](#Custom_Printed_Meeple)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

This API allows you to create printed meeples. Accessible via `/api/customprintedmeeple`.

### [Identities](#___top "click to go to top of document")

CustomPrintedMeeple

### [Properties](#___top "click to go to top of document")

Each printed meeple object is accessed via `/api/customprintedmeeple` and has the following properties. Complete details in [CustomPrintedMeepleProperties](/developer/CustomPrintedMeepleProperties.html).

id

The unique id for this printed meeple object. It will never change.

identity

The style of printed meeple object you want.

object\_type

`customprintedmeeple`

date\_created

A date when the printed meeple object was created.

date\_updated

A date when the printed meeple object was last updated.

name

The name the printed meeple object is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this printed meeple object belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a printed meeple object to be included in the game.

diecolor

The color of the dice itself before printing. Defaults to `white`.

side1\_id

A [File](/developer/File.html) id. Optional. Sets the side1 image of the printed meeple object. The ID is from a [File](/developer/File.html). If a side1\_id is specified, then an extra property called `side1` will be added which will briefly describe the image.

has\_proofed\_side1

A boolean indicating whether the side1 image has been verified by the user to be correct.

side2\_id

A [File](/developer/File.html) id. Optional. Sets the side2 image of the printed meeple object. The ID is from a [File](/developer/File.html). If a side2\_id is specified, then an extra property called `side2` will be added which will briefly describe the image.

has\_proofed\_side2

A boolean indicating whether the side2 image has been verified by the user to be correct.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this printed meeple object is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate printed meeple objects.

## [Create](#___top "click to go to top of document")

```
 POST /api/customprintedmeeple
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

side1\_id

Optional.

has\_proofed\_side1

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/customprintedmeeple/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/customprintedmeeple/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/customprintedmeeple/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) and **Related Objects** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="customprintedmeeple-properties"></a>

## CustomPrintedMeeple Properties

> Source file: `CustomPrintedMeepleProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| diecolor | Everyone | Owner | No | varchar | meeplewoodwhite | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| has\_proofed\_side1 | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_side2 | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |
| side1\_id | Owner | Owner | No | char |  | Yes |
| side2\_id | Owner | Owner | No | char |  | Yes |
| side2\_is | Everyone | Owner | No | varchar | has\_art | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="custom-wood-d6"></a>

## Custom Wood D6

> Source file: `CustomWoodD6.html`

-   [Custom Wood D6](#Custom_Wood_D6)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

This API allows you to create custom engraved wood d6 objects. Accessible via `/api/customwoodd6`.

### [Identities](#___top "click to go to top of document")

CustomWoodD6

### [Properties](#___top "click to go to top of document")

Each custom wood d6 object is accessed via `/api/customwoodd6` and has the following properties. Complete details in [CustomWoodD6Properties](/developer/CustomWoodD6Properties.html).

id

The unique id for this custom wood d6 object. It will never change.

identity

The style of custom wood d6 object you want.

object\_type

`customwoodd6`

date\_created

A date when the custom wood d6 object was created.

date\_updated

A date when the custom wood d6 object was last updated.

name

The name the custom wood d6 object is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this custom wood d6 object belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a custom wood d6 object to be included in the game.

side1\_id

A [File](/developer/File.html) id. Optional. Sets the side1 image of the custom wood d6 object. The ID is from a [File](/developer/File.html). If a side1\_id is specified, then an extra property called `side1` will be added which will briefly describe the image.

has\_proofed\_side1

A boolean indicating whether the side1 image has been verified by the user to be correct.

side2\_id

A [File](/developer/File.html) id. Optional. Sets the side2 image of the custom wood d6 object. The ID is from a [File](/developer/File.html). If a side2\_id is specified, then an extra property called `side2` will be added which will briefly describe the image.

has\_proofed\_side2

A boolean indicating whether the side2 image has been verified by the user to be correct.

side3\_id ... side6\_id

Same as side1 and side2.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this custom wood d6 object is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate custom wood d6 objects.

## [Create](#___top "click to go to top of document")

```
 POST /api/customwoodd6
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

side1\_id

Optional.

has\_proofed\_side1

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/customwoodd6/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/customwoodd6/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/customwoodd6/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) and **Related Objects** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2023 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="customwoodd6-properties"></a>

## CustomWoodD6 Properties

> Source file: `CustomWoodD6Properties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| diecolor | Everyone | Owner | No | varchar | darkwood | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| has\_proofed\_side1 | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_side2 | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_side3 | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_side4 | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_side5 | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_side6 | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |
| side1\_id | Owner | Owner | No | char |  | Yes |
| side2\_id | Owner | Owner | No | char |  | Yes |
| side2\_is | Everyone | Owner | No | varchar | has\_art | No |
| side3\_id | Owner | Owner | No | char |  | Yes |
| side3\_is | Everyone | Owner | No | varchar | has\_art | No |
| side4\_id | Owner | Owner | No | char |  | Yes |
| side4\_is | Everyone | Owner | No | varchar | has\_art | No |
| side5\_id | Owner | Owner | No | char |  | Yes |
| side5\_is | Everyone | Owner | No | varchar | has\_art | No |
| side6\_id | Owner | Owner | No | char |  | Yes |
| side6\_is | Everyone | Owner | No | varchar | has\_art | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2023 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="deck"></a>

## Deck

> Source file: `Deck.html`

-   [Deck](#Deck)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Relationships](#Relationships)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)
    -   [Bulk Create Cards](#Bulk_Create_Cards)

Decks of [Card](/developer/Card.html)s are the foundation to any game and through our API they are accessed at `/api/deck`.

### [Identities](#___top "click to go to top of document")

We have many types of standard decks which you can access through one of these identities:

BridgeDeck

BusinessDeck

ClearCardCraftingDeck

CardCraftingDeck

CircleDeck

DividerDeck

DominoDeck

EuroPokerDeck

EuroSquareDeck

FoilPokerDeck

FoilTarotDeck

HexDeck

JumboDeck

MicroDeck

MiniDeck

MintTinDeck

PokerDeck

SmallSquareDeck

SquareDeck

TarotDeck

USGameDeck

### [Properties](#___top "click to go to top of document")

Each deck has the following properties. Complete details in [DeckProperties](/developer/DeckProperties.html).

id

The unique id for this deck. It will never change.

identity

The style of deck you want. See Identities above.

wing\_object\_type

`pokerdeck`

date\_created

A date when the deck was created.

date\_updated

A date when the deck was last updated.

name

The name the deck is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this deck belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a deck to be included in the game.

back\_id

A [File](/developer/File.html) id. Sets the back image of the card. The ID is from a [File](/developer/File.html). If a back\_id is specified, then an extra property called `back` will be added which will briefly describe the image. If the two sided set has no back, and a member is assigned a back, then that back will also be assigned to the set.

has\_proofed\_back

A boolean indicating whether the back image has been verified by the user to be correct.

card\_count

The number of cards in the deck.

### [Relationships](#___top "click to go to top of document")

cards

The list of [Card](/developer/Card.html)s that are attached to this deck.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this deck is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate decks.

## [Create](#___top "click to go to top of document")

```
 POST /api/deck
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

back\_id

Optional.

has\_proofed\_back

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Tools",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/deck/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/deck/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/deck/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Deck Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Tools",
   ...
 }
```

## [Bulk Create Cards](#___top "click to go to top of document")

Normally you'd use the ["Create" in Card](/developer/Card.html#Create) to attach cards to a deck, but there is a special utility endpoint to create up to 100 cards in a single API call.

```
 POST /api/deck/xxx/bulk-cards
```

cards

A JSON array, with each element of the array being a JSON object containing all the parameters you'd use in ["Create" in Card](/developer/Card.html#Create) to create a card. At most can create 100 cards in one call.

```
  [
    {
      "name" : "card 16", 
      "face_id" : "6936C64A-63EA-11EB-83C6-F9DE983DDA9C"
    },
    {
      "name" : "card 17", 
      "face_id" : "69544350-63EA-11EB-83C6-F9DE983DDA9C"
    },
    {
      "name" : "card 18", 
      "face_id" : "this will fail"
    }
  ]
```

Returns:

```
  {
    "result" : {
        "cards" : [
          {
              "date_created" : "2021-01-31 17:35:34",
              "can_edit" : 1,
              "back_from" : "Deck",
              "object_type" : "card",
              "has_proofed_back" : 0,
              "has_proofed_face" : 0,
              "face_id" : "6936C64A-63EA-11EB-83C6-F9DE983DDA9C",
              "can_view" : 1,
              "quantity" : 1,
              "object_name" : "Card",
              "face_size" : "825x1125",
              "id" : "B9106FC2-63EA-11EB-83C6-F9DE983DDA9C",
              "back_id" : null,
              "class_number" : 1,
              "deck_id" : "01D110E2-63E9-11EB-9E85-C916AE721651",
              "date_updated" : "2021-01-31 17:35:34",
              "back_size" : "825x1125",
              "name" : "card 16"
          },
          {
              "date_created" : "2021-01-31 17:35:34",
              "can_edit" : 1,
              "back_from" : "Deck",
              "object_type" : "card",
              "has_proofed_face" : 0,
              "has_proofed_back" : 0,
              "can_view" : 1,
              "face_id" : "69544350-63EA-11EB-83C6-F9DE983DDA9C",
              "quantity" : 1,
              "face_size" : "825x1125",
              "object_name" : "Card",
              "id" : "B9689D6E-63EA-11EB-83C6-F9DE983DDA9C",
              "deck_id" : "01D110E2-63E9-11EB-9E85-C916AE721651",
              "class_number" : 1,
              "back_id" : null,
              "date_updated" : "2021-01-31 17:35:34",
              "name" : "card 17",
              "back_size" : "825x1125"
          },
          { 
            "error" : {
              "code" : 440,
              "message" : "face_id 'this will fail' not found."
            },
          }
        ],
        "errors" : 1
    }
  }
```

The `errors` element lets you know how many errors (if any) happened while processing the cards. And any errors that happened will be in the position in the `cards` array of the card the failed.

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="deck-properties"></a>

## Deck Properties

> Source file: `DeckProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| back\_id | Owner | Owner | No | char |  | Yes |
| class\_1\_name | Everyone | Owner | No | varchar | Common | No |
| class\_1\_quantity | Everyone | Owner | No | int | 0 | No |
| class\_2\_name | Everyone | Owner | No | varchar | Uncommon | No |
| class\_2\_quantity | Everyone | Owner | No | int | 0 | No |
| class\_3\_name | Everyone | Owner | No | varchar | Rare | No |
| class\_3\_quantity | Everyone | Owner | No | int | 0 | No |
| class\_4\_name | Everyone | Owner | No | varchar | Hero | No |
| class\_4\_quantity | Everyone | Owner | No | int | 0 | No |
| class\_5\_name | Everyone | Owner | No | varchar | Mana | No |
| class\_5\_quantity | Everyone | Owner | No | int | 0 | No |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| has\_proofed\_back | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |
| randomized | Everyone | Owner | No | tinyint | 0 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="designer-properties"></a>

## Designer Properties

> Source file: `Designer.html`

-   [Designer Properties](#Designer_Properties)
-   [Relationships](#Relationships)
-   [Related Objects](#Related_Objects)
    -   [Designer Options](#Designer_Options)
-   [Designer Methods](#Designer_Methods)
    -   [Create Designer](#Create_Designer)
    -   [Update Designer](#Update_Designer)
    -   [Delete Designer](#Delete_Designer)
    -   [Fetch Designer](#Fetch_Designer)
    -   [List All Designers](#List_All_Designers)
    -   [List Designer's Games](#List_Designer%27s_Games)

A designer is an entity that designs games. Often times it represents a company or a brand. Each designer has the following properties. Complete details in [DesignerProperties](/developer/DesignerProperties.html).

id

The unique id for this designer. It will never change.

wing\_object\_type

`designer`

name

Another unique way of identifying a designer. However, this can be changed by an admin or the user that controls the designer.

user\_id

A [User](/developer/User.html) id. The unique id of a user that has control over a designer, and therefore the games that the designer owns.

contact\_email

An email address associated with this designer. This will be publicly available so people can contact the designer.

website\_uri

A URI for the designer's public web site.

shop\_uri

A URI for the designer's profile in the shop.

date\_created

A date when the designer was created.

date\_updated

A date when the designer was last updated.

logo\_id

A [File](/developer/File.html) id. Sets the logo. The ID is from a [File](/developer/File.html). If a `logo_id` is specified, then an extra property called `logo` will be added which will briefly describe the image.

### [Relationships](#___top "click to go to top of document")

games

The list of [Game](/developer/Game.html)s that are controlled by this designer.

associates

The list of [DesignerAssociate](/developer/DesignerAssociate.html)s attached to this designer.

### [Related Objects](#___top "click to go to top of document")

user

The [User](/developer/User.html) that controls this designer.

## [Designer Options](#___top "click to go to top of document")

Provides a list of the options that can be used to fill out various fields when creating or updating a designer.

```
 GET /api/designer/_options
```

Returns:

```
 {
    "payout_via" : [...]
 }
```

**NOTE:** You can also get this data by adding `_include_options=1` to the parameter list when fetching a designer.

### [Designer Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate designers.

## [Create Designer](#___top "click to go to top of document")

```
 POST /api/designer
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

user\_id

Required.

contact\_email

Optional.

website\_uri

Optional.

logo\_id

Optional.

payout\_via

Optional.

paypal\_email

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Shawshank Games",
   ...
 }
```

## [Update Designer](#___top "click to go to top of document")

```
 PUT /api/designer/xxx
```

See **Create Designer** for details.

## [Delete Designer](#___top "click to go to top of document")

```
 DELETE /api/designer/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch Designer](#___top "click to go to top of document")

```
 GET /api/designer/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_options

Optional. See ["Options" in Intro](/developer/Intro.html#Options) and **Designer Options** above for details.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Designer Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Shawshank Games",
   ...
 }
```

## [List All Designers](#___top "click to go to top of document")

```
 GET /api/designer
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "pager" : { ... },
   "items" : [
     {
       "id" : "xxx",
       "name" : "Shawshank Games",
       ...
     },
     ...
   ]
 }
```

## [List Designer's Games](#___top "click to go to top of document")

```
 GET /api/designer/xxx/games
```

Returns:

```
 {
   "pager" : { ... },
   "items" : [
     {
       "id" : "xxx",
       "name" : "Prison Break",
       ...
     },
     ...
   ]
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="designer-associate-properties"></a>

## Designer Associate Properties

> Source file: `DesignerAssociate.html`

-   [Designer Associate Properties](#Designer_Associate_Properties)
-   [Relationships](#Relationships)
-   [Related Objects](#Related_Objects)
-   [Designer Associate Methods](#Designer_Associate_Methods)
    -   [Create Designer Associate](#Create_Designer_Associate)
    -   [Update Designer Associate](#Update_Designer_Associate)
    -   [Delete Designer Associate](#Delete_Designer_Associate)
    -   [Fetch Designer Associate](#Fetch_Designer_Associate)

A Designer Associate has access to edit a [Designer](/developer/Designer.html)'s games and receive a percentage share of a [Designer](/developer/Designer.html)'s earnings. Complete details in [DesignerAssociateProperties](/developer/DesignerAssociateProperties.html).

id

The unique id for this designer associate. It will never change.

wing\_object\_type

`designerassociate`

user\_id

A [User](/developer/User.html) id. The unique id of the associate user.

designer\_id

A [Designer](/developer/Designer.html) id. The unique id of the designer to which this associate is a member.

profit\_share

The percentage of profit (expressed as a decimal) that this associate is entitled to.

### [Relationships](#___top "click to go to top of document")

designer

A [Designer](/developer/Designer.html).

### [Related Objects](#___top "click to go to top of document")

user

A [User](/developer/User.html).

### [Designer Associate Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate designer associates.

## [Create Designer Associate](#___top "click to go to top of document")

```
 POST /api/designerassociate
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

user\_id

Required.

designer\_id

Required.

share\_percent

Optional.

Returns:

```
 {
   "id" : "xxx",
   "share_percent" : "0.10",
   ...
 }
```

## [Update Designer Associate](#___top "click to go to top of document")

```
 PUT /api/designerassociate/xxx
```

See **Create Designer Associate** for details.

## [Delete Designer Associate](#___top "click to go to top of document")

```
 DELETE /api/designer/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch Designer Associate](#___top "click to go to top of document")

```
 GET /api/designerassociate/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Designer Associate Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "share_percent" : "0.10",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="designerassociate-properties"></a>

## DesignerAssociate Properties

> Source file: `DesignerAssociateProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| designer\_id | Everyone | Owner | Yes | char |  | No |
| id | Everyone | Read Only | No | char |  | No |
| share\_percent | Everyone | Owner | No | float | 0 | No |
| user\_id | Everyone | Owner | Yes | char |  | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="designer-properties"></a>

## Designer Properties

> Source file: `DesignerProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| contact\_address\_id | Owner | Owner | No | char |  | Yes |
| contact\_email | Everyone | Owner | No | varchar |  | Yes |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| goat\_code | Everyone | Owner | No | varchar |  | Yes |
| id | Everyone | Read Only | No | char |  | No |
| labor\_rate | Owner | Admin | No | float | 40 | Yes |
| logo\_id | Owner | Owner | No | char |  | Yes |
| monthly\_rate\_per\_bin | Owner | Admin | No | float | 4 | Yes |
| monthly\_rate\_per\_pallet | Owner | Admin | No | float | 19 | Yes |
| monthly\_warehouse\_report\_opt\_in | Owner | Owner | No | int | 0 | Yes |
| name | Everyone | Owner | Yes | varchar |  | No |
| notify\_about\_discontinued\_parts | Owner | Owner | No | int | 1 | Yes |
| notify\_about\_low\_quantity\_parts | Owner | Owner | No | int | 0 | Yes |
| notify\_of\_sale\_via\_email | Owner | Owner | No | int | 0 | Yes |
| packing\_slip\_notes | Owner | Owner | No | mediumtext |  | Yes |
| payout\_via | Owner | Owner | No | varchar | shop\_credit | No |
| paypal\_email | Owner | Owner | No | varchar |  | Yes |
| rewards\_manufacturing\_discount | Owner | Admin | No | float | 0 | No |
| royalty\_percentage | Owner | Admin | No | float | 0.7 | No |
| uri\_part | Everyone | Read Only | No | varchar |  | No |
| user\_id | Everyone | Owner | Yes | char |  | No |
| wants\_stock\_notifications | Owner | Owner | No | tinyint | 0 | No |
| warehouse\_access | Owner | Admin | No | int | 0 | Yes |
| warehouse\_parts\_in\_shop | Owner | Admin | No | int | 0 | Yes |
| website\_uri | Everyone | Owner | No | varchar |  | Yes |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="dial-types"></a>

## Dial Types

> Source file: `Dial.html`

-   [Dial Types](#Dial_Types)
-   [Identities](#Identities)
-   [Dial Properties](#Dial_Properties)
-   [Related Objects](#Related_Objects)
-   [Dial Methods](#Dial_Methods)
    -   [Create Dial](#Create_Dial)
    -   [Update Dial](#Update_Dial)
    -   [Delete Dial](#Delete_Dial)
    -   [Fetch Dial](#Fetch_Dial)

Dials are accessed via `/api/dial`.

### [Identities](#___top "click to go to top of document")

SmallDial

DualDial

### [Dial Properties](#___top "click to go to top of document")

Each dial has the following properties. Complete details in [DialProperties](/developer/DialProperties.html).

id

The unique id for this dial. It will never change.

identity

The style of dial you want. See Identities above.

wing\_object\_type

`smalldial`

date\_created

A date when the dial was created.

date\_updated

A date when the dial was last updated.

name

The name the dial is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this dial belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a dial to be included in the game.

outside\_id

A [File](/developer/File.html) id. Sets the image that will be printed on the outside of the dial. The ID is from a [File](/developer/File.html). If a outside\_id is specified, then an extra property called `outside` will be added which will briefly describe the image.

has\_proofed\_outside

A boolean indicating whether the outside image has been verified by the user to be correct.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this dial is a member of.

### [Dial Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate diales.

## [Create Dial](#___top "click to go to top of document")

```
 POST /api/dial
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

outside\_id

Optional.

has\_proofed\_outside

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Dial",
   ...
 }
```

## [Update Dial](#___top "click to go to top of document")

```
 PUT /api/dial/xxx
```

See **Create Dial** for details.

## [Delete Dial](#___top "click to go to top of document")

```
 DELETE /api/dial/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch Dial](#___top "click to go to top of document")

```
 GET /api/dial/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Dial Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Dial",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="dial-properties"></a>

## Dial Properties

> Source file: `DialProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| has\_proofed\_outside | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| outside\_id | Owner | Owner | No | char |  | Yes |
| quantity | Everyone | Owner | No | int | 1 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="document-properties"></a>

## Document Properties

> Source file: `Document.html`

-   [Document Properties](#Document_Properties)
-   [Related Objects](#Related_Objects)
-   [Document Options](#Document_Options)
    -   [use\_for](#use_for)
-   [Document Methods](#Document_Methods)
    -   [Create Document](#Create_Document)
    -   [Update Document](#Update_Document)
    -   [Delete Document](#Delete_Document)
    -   [Fetch Document](#Fetch_Document)

Each document has the following properties and is accessed via `/api/document`. Complete details in [DocumentProperties](/developer/DocumentProperties.html).

id

The unique id for this document. It will never change.

wing\_object\_type

`document`

date\_created

A date when the document was created.

date\_updated

A date when the document was last updated.

name

The name the document is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this document belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a document to be included in the game.

pdf\_id

A [File](/developer/File.html) id. Sets the PDF that will be used to print the document. The ID is from a [File](/developer/File.html). If a pdf\_id is specified, then an extra property called `pdf` will be added which will briefly describe the image.

use\_for

Defaults to `Print and Download`. Tells the document whether it should be downloadable, printable, or both.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this document is a member of.

### [Document Options](#___top "click to go to top of document")

## [use\_for](#___top "click to go to top of document")

The list of available options for the `use_for` field.

### [Document Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate documents.

## [Create Document](#___top "click to go to top of document")

```
 POST /api/document
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

pdf\_id

Optional.

use\_for

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Rules",
   ...
 }
```

## [Update Document](#___top "click to go to top of document")

```
 PUT /api/document/xxx
```

See **Create Document** for details.

## [Delete Document](#___top "click to go to top of document")

```
 DELETE /api/document/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch Document](#___top "click to go to top of document")

```
 GET /api/document/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Document Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Rules",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="document-properties"></a>

## Document Properties

> Source file: `DocumentProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| pdf\_id | Owner | Owner | No | char |  | Yes |
| quantity | Everyone | Owner | No | int | 1 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="error-codes"></a>

## Error Codes

> Source file: `ErrorCodes.html`

-   [Error Codes](#Error_Codes)
    -   [Client Errors](#Client_Errors)
        -   [404 Resource Not Found](#404_Resource_Not_Found)
    -   [Parameter Errors](#Parameter_Errors)
        -   [440 Object Not Found](#440_Object_Not_Found)
        -   [441 Missing Required Parameter](#441_Missing_Required_Parameter)
        -   [442 Out Of Range](#442_Out_Of_Range)
        -   [443 Not Available](#443_Not_Available)
        -   [444 File Type Not Supported](#444_File_Type_Not_Supported)
        -   [445 File Mismatch](#445_File_Mismatch)
        -   [446 Payment Declined](#446_Payment_Declined)
    -   [Account Errors](#Account_Errors)
        -   [450 Insufficient Privileges](#450_Insufficient_Privileges)
        -   [451 Session Expired](#451_Session_Expired)
        -   [452 RPC Request Limit Exceeded](#452_RPC_Request_Limit_Exceeded)
        -   [453 Prequisite Failed](#453_Prequisite_Failed)
        -   [454 Password Incorrect](#454_Password_Incorrect)
    -   [499 Offline Processing](#499_Offline_Processing)
    -   [Server Errors](#Server_Errors)
        -   [500 Undefined Error](#500_Undefined_Error)
        -   [504 Could Not Connect](#504_Could_Not_Connect)

This document describes the error codes thrown by TGC's REST API. They map directly onto the W3C's standard HTTP status codes ([http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)). When functioning properly the web service will always return a 200 HTTP status code.

**NOTE:** While the error codes documented here are returned as HTTP status codes, they are also returned in the JSON response of the body.

## [Client Errors](#___top "click to go to top of document")

These are errors caused by the client providing invalid or outdated information.

### [404 Resource Not Found](#___top "click to go to top of document")

The URI path you tried to call does not exist. See also `440`.

## [Parameter Errors](#___top "click to go to top of document")

These errors have to do with invalid parameters, missing parameters, or parameters specified out of range. The data section of the error will contain a string listing the parameter name having the problem.

### [440 Object Not Found](#___top "click to go to top of document")

The object you requested doesn't exist. This refers to an object specified in the query string, not in the path. See also `404`.

### [441 Missing Required Parameter](#___top "click to go to top of document")

You're missing a required parameter.

### [442 Out Of Range](#___top "click to go to top of document")

The value specified for a field was out of range. If it's a numeric field make sure you're above the minumum and below the maximum. If it's an enumerated field make sure you've specfified an valid option.

### [443 Not Available](#___top "click to go to top of document")

The name or resource requested is already in use by someone else.

### [444 File Type Not Supported](#___top "click to go to top of document")

You tried to upload a file that the system doesn't allow.

### [445 File Mismatch](#___top "click to go to top of document")

You tried to assign a file to a field that doesn't match the field's criteria. For example you tried to assign a PDF to a field looking for images.

### [446 Payment Declined](#___top "click to go to top of document")

For one reason or another the payment requested was declined. Usually due to typos, but could also do with credit card holds, insufficient funds, etc.

## [Account Errors](#___top "click to go to top of document")

These errors have to do with authentication and authorization.

### [450 Insufficient Privileges](#___top "click to go to top of document")

You do not have the privileges necessary to complete that operation. Note: you will see this error if you have not included the session\_id parameter in a request.

### [451 Session Expired](#___top "click to go to top of document")

The session you are using has expired. Request a new one before continuing.

### [452 RPC Request Limit Exceeded](#___top "click to go to top of document")

You have exceeded the maximum number of requests allowed per minute. This exception is telling you to slow down so you don't denial of service the server with your requests.

### [453 Prequisite Failed](#___top "click to go to top of document")

A prerequisite of performing the requested action has not been met.

### [454 Password Incorrect](#___top "click to go to top of document")

The password you specified does not match our records.

## [499 Offline Processing](#___top "click to go to top of document")

This request was going to take too long so it was handed off to be processed in the background.

## [Server Errors](#___top "click to go to top of document")

These errors are systemic in nature. In general, these should never happen.

### [500 Undefined Error](#___top "click to go to top of document")

An unhandled exception has occurred in the server. Under normal operating procedures this should never happen, as all exceptions should be trapped within the code and returned as a defined exception. Therefore this is an untrapped exception, and is in all cases a bug.

### [504 Could Not Connect](#___top "click to go to top of document")

Could not connect to an external resource, such as a database or web service.

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="file-properties"></a>

## File Properties

> Source file: `File.html`

-   [File Properties](#File_Properties)
-   [Related Objects](#Related_Objects)
-   [File Methods](#File_Methods)
    -   [Create File](#Create_File)
    -   [Update File](#Update_File)
    -   [Delete File](#Delete_File)
    -   [Fetch File](#Fetch_File)
    -   [File References](#File_References)
    -   [Grid Image Upload](#Grid_Image_Upload)

Each file has the following properties and is accessed via `/api/file`. Complete details in [FileProperties](/developer/FileProperties.html).

id

The unique id for this file. It will never change.

wing\_object\_type

`file`.

date\_created

A date when the file was created.

date\_updated

A date when the file was last updated.

name

The name the file is known by.

sha1\_digest

A unique hash of the file. This is useful when you want to cache files locally, or avoid uploading a file you've already uploaded, because it is always unique to a file.

folder\_id

A [Folder](/developer/Folder.html) id. The unique id of a [Folder](/developer/Folder.html) that this file is contained in.

file\_size

The file's size in bytes.

file\_type

A string representing what kind of file this is.

details

A string describing the file. If it's a PDF it will be how many pages it contains. If it's an image it will give some resolution information.

status

Either `Ready` or `Processing`. This indicates wehther the file has been processed for inclusion into The Game Crafter's file handling system. Things like generating a preview image and creating a permanent storage location are done while processing.

preview\_uri

A URI to an image that shows a small representation of the original image or the first page of a PDF document.

file\_uri

A URI to the permanent storage location of the file.

### [Related Objects](#___top "click to go to top of document")

folder

The [Folder](/developer/Folder.html) that this file is contained in.

metadata

A hash providing all the extra goodies we know about the file.

### [File Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate files.

## [Create File](#___top "click to go to top of document")

```
 POST /api/file
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Optional. If not passed in, the filename will be used as the name.

file

Required. The file that you wish to upload.

folder\_id

Required. A [Folder](/developer/Folder.html) id.

watermark

Optional. Add a watermark to the thumbnail that's will be generated for an uploaded image file.

Returns:

```
 {
   "id" : "xxx",
   "name" : "A Card",
   ...
 }
```

## [Update File](#___top "click to go to top of document")

```
 PUT /api/file/xxx
```

See **Create File** for details.

## [Delete File](#___top "click to go to top of document")

```
 DELETE /api/file/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch File](#___top "click to go to top of document")

```
 GET /api/file/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_related\_objects

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **File Relationships** above for details.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **File Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "My Game",
   ...
 }
```

## [File References](#___top "click to go to top of document")

```
 GET /api/file/xxx/references
```

Return a list of all objects that use this File. Each object will have a full description of itself.

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   items : [ 
    {
       "id" : "xxx",
       "name" : "My Avatar",
       ...
    },
    {
       "id" : "xxx",
       "name" : "My Deck Card Back",
       ...
    },
    ...
   ]
 }
```

## [Grid Image Upload](#___top "click to go to top of document")

```
 POST /api/file/grid-image
```

You can create a bunch of File objects all at once by uploading a grid image to this API. The image will be split into smaller images, and you'll get an array of File objects back.

The images will be extracted across and then down. So if your grid has 9 images in 3 rows of 3 then it would be like:

```
 1 2 3
 4 5 6
 7 8 9
```

If you only have 7 images, but the same grid layout then you would set `quantity=7` the images extracted would be:

```
 1 2 3
 4 5 6
 7
```

For that case the last to spaces in the grid will be ignored.

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Optional. If not passed in, the filename will be used as the name.

file

Required. The image that you wish to upload. The image cannot exceed 5000x5000 pixels.

folder\_id

Required. A [Folder](/developer/Folder.html) id.

quantity

The number of images that should be extracted from this image. Range between 1 and 100.

width

The width (in pixels) of the images to be extracted from this image.

height

The height (in pixels) of the images to be extracted from this image.

Returns:

```
  {
    "files" : [ 
      {
        "file_uri" : "//s3.amazonaws.com/files.dev.thegamecrafter.com/78353d61fcfba20d113cbcb91adc1153780f91b8",
        "file_type" : "PNG",
        "sha1_digest" : "78353d61fcfba20d113cbcb91adc1153780f91b8",
        "date_updated" : "2021-01-30 23:28:36",
        "date_created" : "2021-01-30 23:28:36",
        "id" : "E024AC38-6352-11EB-92B1-B403F0027F2A",
        "status" : "Processing",
        "can_edit" : 1,
        "object_name" : "File",
        "file_size" : 8294.4,
        "image_size" : "825x1125",
        "s3file_id" : "D0F0FF3E-6350-11EB-A921-E51985A17141",
        "preview_uri" : "/preview_not_ready.gif",
        "can_view" : 1,
        "object_type" : "file",
        "folder_id" : "0AFF1012-373B-11E2-B3AB-C942AB40E458",
        "_warnings" : [],
        "details" : "825x1125 pixels",
        "name" : "1_gridimage.png"
      },  
      ...
    ]
  }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="file-properties"></a>

## File Properties

> Source file: `FileProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| folder\_id | Everyone | Owner | Yes | char |  | No |
| id | Everyone | Read Only | No | char |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| s3file\_id | Owner | Admin | No | char |  | Yes |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="folder-properties"></a>

## Folder Properties

> Source file: `Folder.html`

-   [Folder Properties](#Folder_Properties)
-   [Relationships](#Relationships)
-   [Related Objects](#Related_Objects)
-   [Folder Methods](#Folder_Methods)
    -   [Create Folder](#Create_Folder)
    -   [Update Folder](#Update_Folder)
    -   [Delete Folder](#Delete_Folder)
    -   [Fetch Folder](#Fetch_Folder)

Each folder has the following properties and is accessed via `/api/folder`. Complete details in [FolderProperties](/developer/FolderProperties.html).

id

The unique id for this folder. It will never change.

wing\_object\_type

`folder`.

date\_created

A date when the folder was created.

date\_updated

A date when the folder was last updated.

name

The name the folder is known by.

parent\_id

The unique id of a folder that this folder is a child of.

user\_id

The unique id of a [User](/developer/User.html) that controls this folder.

### [Relationships](#___top "click to go to top of document")

folders

The [Folder](/developer/Folder.html)s contained in this folder.

files

The [File](/developer/File.html)s contained in this folder.

ancestors

The [Folder](/developer/Folder.html)s before this one in the hierarchy.

### [Related Objects](#___top "click to go to top of document")

user

The [User](/developer/User.html) that this folder is controlled by.

parent

The [Folder](/developer/Folder.html) that this folder is contained by, if any.

### [Folder Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate folders.

## [Create Folder](#___top "click to go to top of document")

```
 POST /api/folder
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

user\_id

Required.

parent\_id

Required.

Returns:

```
 {
   "id" : "xxx",
   "name" : "My Game",
   ...
 }
```

## [Update Folder](#___top "click to go to top of document")

```
 PUT /api/folder/xxx
```

See **Create Folder** for details.

## [Delete Folder](#___top "click to go to top of document")

```
 DELETE /api/folder/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch Folder](#___top "click to go to top of document")

```
 GET /api/folder/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Folder Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "My Game",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="folder-properties"></a>

## Folder Properties

> Source file: `FolderProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| id | Everyone | Read Only | No | char |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| parent\_id | Everyone | Owner | No | char |  | Yes |
| user\_id | Everyone | Owner | Yes | char |  | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="f-example"></a>

## F# Example

> Source file: `FSharpExample.html`

**NOTE:** Get an [APIKey](/developer/APIKey.html).

This code will allow you to get a session, fetch account info, upload a file, and search games. From it you should be able to discern how to work with the entire TGC API.

```
 open System
 open System.Threading
 open Newtonsoft.Json // get this here = http://james.newtonking.com/json
 open RestSharp // get this here = http://restsharp.org/
 open Dynamitey 
 open System.Dynamic
 open System.Collections.Generic
 open System.Xml.Linq
 open System.Numerics
 open Microsoft.CSharp.RuntimeBinder
 
 let API_KEY_ID = "" // get your own
 let USERNAME = "" // put your username here;
 let PASSWORD = "" // put your password here;
 let client = RestSharp.RestClient("https://www.thegamecrafter.com/api/")
 let mutable session_id = ""
 let mutable user_id = ""
 let GetASession(username : string, password : string) =
     let request = new RestSharp.RestRequest("session", RestSharp.Method.POST);
     ignore (request.AddParameter("username", username))
     ignore (request.AddParameter("password", password))
     ignore (request.AddParameter("api_key_id", API_KEY_ID))
     let response = client.Execute(request)
     let data:Newtonsoft.Json.Linq.JObject = JsonConvert.DeserializeObject(response.Content) :?> Newtonsoft.Json.Linq.JObject
     session_id <- data.GetValue("result").SelectToken("id").ToString()
     user_id <-  data.GetValue("result").SelectToken("user_id").ToString()
 
 let FetchMyAccountInfo() =
     let request = new RestRequest("user/" + user_id, Method.GET)
     ignore (request.AddParameter("session_id", session_id))
     let response = client.Execute(request)
     let data:Newtonsoft.Json.Linq.JObject = JsonConvert.DeserializeObject(response.Content) :?> Newtonsoft.Json.Linq.JObject
     let user = data.GetValue("result")
     user
         
 let UploadAFile(user:Newtonsoft.Json.Linq.JToken, filepath, filename) =
     let request = new RestSharp.RestRequest("file", Method.POST)
     ignore (request.AddFile("file", filepath))
     ignore (request.AddParameter("name", filename))
     ignore (request.AddParameter("folder_id", user.SelectToken("root_folder_id")))
     ignore (request.AddParameter("session_id", session_id))
     let response = client.Execute(request)
     let data:Newtonsoft.Json.Linq.JObject = JsonConvert.DeserializeObject(response.Content) :?> Newtonsoft.Json.Linq.JObject
     let file = data.GetValue("result")
     file
 
 let SearchGames() =
     let request = new RestSharp.RestRequest("game", Method.GET)
     ignore (request.AddParameter("q", "Steampunk"))
     ignore (request.AddParameter("session_id", session_id))
     let response = client.Execute(request)
     let data:Newtonsoft.Json.Linq.JObject = JsonConvert.DeserializeObject(response.Content) :?> Newtonsoft.Json.Linq.JObject
     let games = data //.GetValue("result")
     games
 
 Console.WriteLine("Getting A Session...")
 GetASession(USERNAME, PASSWORD)
 Console.WriteLine("Session ID:   " + session_id)
 Console.WriteLine("User ID:      " + user_id)
 Thread.Sleep(1000);
 
 Console.WriteLine("\n")
 Console.WriteLine("Fetching My Account Info...");
 let user = FetchMyAccountInfo()
 Console.WriteLine("Display Name: " + user.SelectToken("display_name").ToString())
 Console.WriteLine("email:        " + user.SelectToken("email").ToString())
 Thread.Sleep(1000);
 
 Console.WriteLine("\n")
 Console.WriteLine("Uploading A File...")
 let file = UploadAFile(user, "c:\\erase\\hi.png", "image.png")
 Console.WriteLine("File name:    " + file.SelectToken("name").ToString())
 Console.WriteLine("File ID:      " + file.SelectToken("id").ToString())
 Thread.Sleep(1000);
 
 Console.WriteLine("\n");
 Console.WriteLine("Searching Games...")
 let games = SearchGames()
 
 
 for game in games do
     Console.WriteLine("Game Name:    " + game.Value.SelectToken("items").First.SelectToken("name").ToString())
     Console.WriteLine("Game ID:      " + game.Value.SelectToken("items").First.SelectToken("id").ToString())
     Thread.Sleep(100)
 
 Console.WriteLine("\n");
 Console.Write("Hit any key to close...");
 ignore (Console.ReadKey())
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="game-properties"></a>

## Game Properties

> Source file: `Game.html`

-   [Game Properties](#Game_Properties)
-   [Game Relationships](#Game_Relationships)
-   [Related Objects](#Related_Objects)
-   [Game Methods](#Game_Methods)
    -   [Game Options](#Game_Options)
    -   [Create Game](#Create_Game)
    -   [Update Game](#Update_Game)
    -   [Delete Game](#Delete_Game)
    -   [Fetch Game](#Fetch_Game)
    -   [Fetch Game By URI Part](#Fetch_Game_By_URI_Part)
    -   [Add/Update Review](#Add%2FUpdate_Review)
    -   [Copy Game](#Copy_Game)
    -   [Publish Game](#Publish_Game)
    -   [Unpublish Game](#Unpublish_Game)
    -   [Search All Games](#Search_All_Games)
    -   [Bulk Pricing](#Bulk_Pricing)
    -   [Cost Breakdown](#Cost_Breakdown)

Each game has the following properties. Complete details in [GameProperties](/developer/GameProperties.html).

id

The unique id for this game. It will never change.

wing\_object\_type

`game`.

date\_created

A date when the game was created.

date\_updated

A date when the game was last updated.

name

The name the game is known by.

Setting this will also set the shop URI for the game. A game name like **Ninjas: Kill Or Be Killed!!!** will generate a URI like **ninjas-kill-or-be-killed**. It should also be said that **Kill Or Be Killed** probably belongs in the `short_description` field, unless it is part of the game name.

designer\_id

The unique id of a designer that has control over the game.

description

A brief text description of the game.

description\_html

The `description` field formatted as HTML.

short\_description

A short phrase to describe the game, like you'd put on a movie poster.

has\_promoed\_featured

A boolean indicating whether this game has been featured in TGC's featured section yet or not.

website\_uri

The URI for the web site for this specific game, or the product page on the designer's web site for this specific game.

cool\_factor\_1

If you could tell a potential buyer just one thing about your game to make them want to buy it, this is the place you'd put that.

cool\_factor\_2

If you could tell a potential buyer a second thing about your game to make them want to buy it, this is the place you'd put that.

cool\_factor\_3

If you were lucky enough to be able to tell a potential buyer a third reason they should buy your game, this is where you'd put that.

public

A boolean indicating whether the game is ready to be sold in TGC's shop.

archived

A boolean that indicates whether this game should be displayed in the designer's game library default.

collection

A string that a designer can use to group this game with other games to make it easier to find in their games library.

date\_published

A date when the game was first made public in TGC's shop.

edition

Usually "First" or "1". Some indication of the version number of the game in case you've made changes.

min\_age

The minimum age to play the game. See **Game Options** below for details.

min\_players

The minimum number of players required to play the game. Default 1. Max 99.

max\_players

The maximum number of players that can play the game. Default 99. Min see `min_players`.

play\_time

The average amount of minutes it takes to play the game. See **Game Options** below for details.

average\_rating

An integer between 1 and 5 representing the average rating of a game across all reviews and ratings.

bayesian\_ranking

A believability score for the `average_rating` based upon the number of ratings it has received compared to other games in the system.

ratings\_at\_5

An integer which represents how many 5 star ratings have been made of this game.

ratings\_at\_4

An integer which represents how many 4 star ratings have been made of this game.

ratings\_at\_3

An integer which represents how many 3 star ratings have been made of this game.

ratings\_at\_2

An integer which represents how many 2 star ratings have been made of this game.

ratings\_at\_1

An integer which represents how many 1 star ratings have been made of this game.

msrp

The manufacturer's suggested retail price of the game as set by the Designer. Must be an integer between 0 and 99. All prices automatically have .99 tacked on to them in the shop.

cost

The minimum cost to produce one copy of the game, based upon all the components it has in it.

price

The higher of `msrp` or `cost`.

sku\_id

A [Sku](/developer/Sku.html) id. The stock keeping unit to be used when adding this to the [Cart](/developer/Cart.html).

staff\_pick

A boolean indicating whether this game is picked as one of the TGC staff's favorites.

featured

A boolean indicating whether this game is marked as a featured product in the shop.

featured\_expires

A date indicating when the featured status of the game will expire.

shop\_uri

The URI to this game in the TGC shop.

bgg\_id

The unique id for this game on Board Game Geek ([http://www.boardgamegeek.com](http://www.boardgamegeek.com)).

backdrop\_id

A [File](/developer/File.html) id. Sets the image used at the top of the shop page. The ID is from a [File](/developer/File.html). If a backdrop\_id is specified, then an extra property called `backdrop` will be added which will briefly describe the image.

logo\_id

A [File](/developer/File.html) id. Sets the image used inline in the shop page. The ID is from a [File](/developer/File.html). If a logo\_id is specified, then an extra property called `logo` will be added which will briefly describe the image.

advertisement\_id

A [File](/developer/File.html) id. Sets the image used to advertise the game on the site. The ID is from a [File](/developer/File.html). If a advertisement\_id is specified, then an extra property called `advertisement` will be added which will briefly describe the image.

my\_review\_id

A [Review](/developer/Review.html) id. The unique id of the [Review](/developer/Review.html) that the current user, as identified by the `session_id`, has posted about this game. If no `session_id` is specified in the request, or the user has not posted a review, then nothing will be listed here.

### [Game Relationships](#___top "click to go to top of document")

gametags

dotds

Deal of the Day

gameledgerentries

Breakdown of costs.

games\_related\_to\_this\_game

games\_this\_game\_is\_related\_to

arttests

[ArtTest](/developer/ArtTest.html)

customcolord6s

[CustomColorD6](/developer/CustomColorD6.html)

customcolord4s

[CustomColorD4](/developer/CustomColorD4.html)

customcolord8s

[CustomColorD8](/developer/CustomColorD8.html)

customprintedmeeples

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

acrylicshapes

[AcrylicShape](/developer/AcrylicShape.html)

sanitytests

bofgames

gameparts

[GamePart](/developer/GamePart.html)

embeddedgames

embeddedin

perfectboundbooks

[PerfectBoundBook](/developer/PerfectBoundBook.html)

coilbooks

[CoilBook](/developer/CoilBook.html)

decks

[Deck](/developer/Deck.html)

onesidedglosses

[OneSidedGloss](/developer/OneSidedGloss.html)

twosideds

[TwoSided](/developer/TwoSided.html)

onesideds

[OneSided](/developer/OneSided.html)

dials

[Dial](/developer/Dial.html)

documents

[Document](/developer/Document.html)

actionshots

[ActionShot](/developer/ActionShot.html)

downloads

[GameDownload](/developer/GameDownload.html)

owners

reviews

[GameOwner](/developer/GameOwner.html)

accolades

tuckboxes

[TuckBox](/developer/TuckBox.html)

hookboxes

[HookBox](/developer/HookBox.html)

twosidedboxes

[TwoSidedBox](/developer/TwoSidedBox.html)

boxfaces

[BoxFace](/developer/BoxFace.html)

boxtops

[BoxTop](/developer/BoxTop.html)

twosidedboxglosses

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

boxtopglosses

[BoxTopGloss](/developer/BoxTopGloss.html)

twosidedsluggeds

[TwoSidedSlugged](/developer/TwoSidedSlugged.html)

onesidedsluggeds

[OneSidedSlugged](/developer/OneSidedSlugged.html)

customcuttwosidedsluggeds

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

customcutonesidedsluggeds

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

booklets

[Booklet](/developer/Booklet.html)

scorepads

[ScorePad](/developer/ScorePad.html)

crowdsale\_game1

crowdsale\_game2

crowdsale\_game3

contestentries

images

### [Related Objects](#___top "click to go to top of document")

designer

The [Designer](/developer/Designer.html) that this game is controlled by.

my\_review

The [Review](/developer/Review.html) that the current user, as identified by the `session_id`, has posted about this game. If no `session_id` is specified in the request, or the user has not posted a review, then nothing will be listed here.

logo

Returns the details of the logo image.

backdrop

Returns the details of the backdrop image.

advertisement

Returns the details of the advertisement image.

sku

[Sku](/developer/Sku.html)

### [Game Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate games.

## [Game Options](#___top "click to go to top of document")

Provides a list of the options that can be used to fill out various fields when creating or updating a game.

```
 GET /api/game/_options
```

Returns:

```
 {
    "min_age" : [...],
    "play_time" : [...],
    "audience" : [...],
    "game_type" : [...],
    "genre" : [...],
    "theme" : [...],
    "setting" : [...],
    "primary_mechanic" : [...],
    ...
 }
```

**NOTE:** You can also get this data by adding `_include_options=1` to the parameter list when fetching a game.

## [Create Game](#___top "click to go to top of document")

```
 POST /api/game
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

designer\_id

Required.

description

Optional.

short\_description

Optional.

website\_uri

Optional.

cool\_factor\_1

Optional.

cool\_factor\_2

Optional.

cool\_factor\_3

Optional.

edition

Optional.

min\_age

Optional.

play\_time

Optional.

min\_players

Optional.

max\_players

Optional.

play\_time

Optional.

genre

Optional.

theme

Optional.

setting

Optional.

game\_type

Optional.

audience

Optional.

primary\_mechanic

Optional.

msrp

Optional.

bgg\_id

Optional.

backdrop\_id

Optional.

advertisement\_id

Optional.

logo\_id

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Prison Break",
   ...
 }
```

## [Update Game](#___top "click to go to top of document")

```
 PUT /api/game/xxx
```

See **Create Game** for details.

## [Delete Game](#___top "click to go to top of document")

```
 DELETE /api/game/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch Game](#___top "click to go to top of document")

```
 GET /api/game/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_options

Optional. See ["Options" in Intro](/developer/Intro.html#Options) and **Game Options** above for details.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Game Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Prison Break",
   ...
 }
```

## [Fetch Game By URI Part](#___top "click to go to top of document")

```
 GET /api/game/uri/xxx
```

Replace `xxx` with a URI Part for a game from https://www.thegamecrafter.com/games/uri-part-goes-here and then this will return a game the same as ["Fetch Game"](#Fetch_Game) above.

## [Add/Update Review](#___top "click to go to top of document")

```
 POST /api/game/xxx/review
```

Adds or updates a [Review](/developer/Review.html) for this game by the current [User](/developer/User.html).

session\_id

Required.

rating

Optional. See [Review](/developer/Review.html) for details.

review

Optional. See [Review](/developer/Review.html) for details.

## [Copy Game](#___top "click to go to top of document")

```
 POST /api/game/xxx/copy
```

session\_id

Required.

Returns:

```
 {
    "wing_object_type" : "game",
    "id" : "xxx",
    "name" : "Jail Break (Copy)",
    ...
 }
```

## [Publish Game](#___top "click to go to top of document")

```
 POST /api/game/xxx/public
```

session\_id

Required.

## [Unpublish Game](#___top "click to go to top of document")

```
 DELETE /api/game/xxx/public
```

session\_id

Required.

## [Search All Games](#___top "click to go to top of document")

See [Search](/developer/Search.html).

## [Bulk Pricing](#___top "click to go to top of document")

```
 GET /api/game/xxx/bulk-pricing
```

Returns the pricing the user can expect when buying lots of copies of their own game.

```
 {
    "id" : "xxx",
    "name" : "Prison Break",
    "msrp" : "24.99",
    "prices" : [
        { "units" : 1, "price" : "19.00" },
        { "units" : 10, "price" : "18.00" },
        { "units" : 20, "price" : "17.00" },
        { "units" : 30, "price" : "16.00" },
        { "units" : 40, "price" : "15.00" },
        { "units" : 50, "price" : "14.00" },
        { "units" : 60, "price" : "13.00" },
        { "units" : 70, "price" : "12.00" },
        { "units" : 80, "price" : "12.00" },
        { "units" : 90, "price" : "10.00" },
        { "units" : 100, "price" : "9.00" },
    ]
 }
```

## [Cost Breakdown](#___top "click to go to top of document")

```
 GET /api/game/xxx/gameledgerentries
```

Returns an array with a breakdown of the game's costs:

```
 {
    [
        {
            "name" : "PokerDeck",
            "price1" : "0.89",
            "weight" : 0.02,
            "surfacing" : 1,
            "sheets_used" : 1,
            "slugs_used" : 0,
            "count" : 1,
            "group" : "Decks",
        }
        ...
    ]
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="game-download-properties"></a>

## Game Download Properties

> Source file: `GameDownload.html`

-   [Game Download Properties](#Game_Download_Properties)
-   [Related Objects](#Related_Objects)
-   [Game Download Methods](#Game_Download_Methods)
    -   [Create Game Download](#Create_Game_Download)
    -   [Update Game Download](#Update_Game_Download)
    -   [Delete Game Download](#Delete_Game_Download)
    -   [Fetch Game Download](#Fetch_Game_Download)

Game downloads are files that can be downloaded freely, or after the purchase of a [Game](/developer/Game.html). Each game download has the following properties. Complete details in [GameDownloadProperties](/developer/GameDownloadProperties.html).

id

The unique id for this download. It will never change.

wing\_object\_type

`gamedownload`.

date\_created

A date when the download was created.

date\_updated

A date when the download was last updated.

free

A boolean defaults to 0. If 1 users can download this file without first purchasing the game. If 0 [User](/developer/User.html)s must first purchase the game to download the file.

game\_id

A [Game](/developer/Game.html) id. The id of the game associated with this download.

file\_id

A [File](/developer/File.html) id. The id of the file associated with this download.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that uses this download.

file

The [File](/developer/File.html) that this download references.

### [Game Download Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate downloads.

## [Create Game Download](#___top "click to go to top of document")

```
 POST /api/gamedownload
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

file\_id

Required.

game\_id

Required.

Returns:

```
 {
   "id" : "xxx",
   "file_id : "xxx",
   ...
 }
```

## [Update Game Download](#___top "click to go to top of document")

```
 PUT /api/gamedownload/xxx
```

See **Create Game Download** for details.

## [Delete Game Download](#___top "click to go to top of document")

```
 DELETE /api/gamedownload/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch Game Download](#___top "click to go to top of document")

```
 GET /api/download/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Game Download Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "part" : { ... },
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="gamedownload-properties"></a>

## GameDownload Properties

> Source file: `GameDownloadProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| download\_count | Owner | Read Only | No | int | 0 | No |
| file\_id | Owner | Owner | No | char |  | Yes |
| free | Everyone | Owner | No | tinyint | 0 | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| id | Everyone | Read Only | No | char |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="game-part"></a>

## Game Part

> Source file: `GamePart.html`

-   [Game Part](#Game_Part)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Game Part Methods](#Game_Part_Methods)
    -   [Create Game Part](#Create_Game_Part)
    -   [Update Game Part](#Update_Game_Part)
    -   [Delete Game Part](#Delete_Game_Part)
    -   [Fetch Game Part](#Fetch_Game_Part)

Game parts are the relationship between [Game](/developer/Game.html)s and [Part](/developer/Part.html)s.

### [Properties](#___top "click to go to top of document")

Each gamepart has the following properties. Complete details in [GamePartProperties](/developer/GamePartProperties.html).

id

The unique id for this gamepart. It will never change.

wing\_object\_type

`gamepart`.

date\_created

A date when the gamepart was created.

date\_updated

A date when the gamepart was last updated.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a gamepart to be included in the game.

game\_id

A [Game](/developer/Game.html) id. The id of the game associated with this gamepart.

part\_id

A [Part](/developer/Part.html) id. The id of the part associated with this gamepart.

part

A hash that is a brief representation of the part associated with this gamepart. It is provided so that when you get the list of gameparts for a game, you don't also have to make a call to [Part](/developer/Part.html).

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that uses this gamepart.

part

The [Part](/developer/Part.html) that this gamepart references.

### [Game Part Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate gameparts.

## [Create Game Part](#___top "click to go to top of document")

```
 POST /api/gamepart
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

part\_id

Required.

**NOTE:** Multiple parts of the same `part_id` are not allowed as separate part gamepart entries. Therefore if you try to create a new game part with a part\_id that already exists in the game, it will update the existing gamepart and return that as the result.

game\_id

Required.

quantity

Optional.

Returns:

```
 {
   "id" : "xxx",
   "part" : { ... },
   ...
 }
```

## [Update Game Part](#___top "click to go to top of document")

```
 PUT /api/gamepart/xxx
```

See **Create Game Part** for details.

## [Delete Game Part](#___top "click to go to top of document")

```
 DELETE /api/gamepart/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch Game Part](#___top "click to go to top of document")

```
 GET /api/gamepart/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Game Part Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "part" : { ... },
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="gamepart-properties"></a>

## GamePart Properties

> Source file: `GamePartProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| id | Everyone | Read Only | No | char |  | No |
| part\_id | Everyone | Owner | Yes | char |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="game-properties"></a>

## Game Properties

> Source file: `GameProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| accolade\_count | Everyone | Admin | No | bigint | 0 | No |
| advertisement\_id | Everyone | Owner | No | char |  | Yes |
| approved\_for\_showcase | Owner | Admin | No | tinyint | 0 | No |
| archived | Owner | Owner | No | int | 0 | Yes |
| average\_rating | Everyone | Read Only | No | tinyint | 0 | No |
| average\_score | Everyone | Read Only | No | float | 0 | No |
| backdrop\_id | Everyone | Owner | No | char |  | Yes |
| bayesian\_ranking | Everyone | Read Only | No | float | 0 | No |
| bgg\_id | Everyone | Owner | No | int | 0 | No |
| box\_required | Owner | Owner | No | tinyint | 1 | No |
| bulk\_made | Owner | Admin | No | tinyint | 0 | No |
| calculation\_warnings | Everyone | Read Only | No | mediumblob |  | Yes |
| category | Everyone | Owner | No | varchar |  | Yes |
| collection | Owner | Owner | No | varchar |  | Yes |
| community\_verified | Owner | Admin | No | tinyint | 0 | Yes |
| component\_list | Everyone | Read Only | No | mediumblob |  | Yes |
| contains\_gore | Everyone | Owner | No | int | 0 | Yes |
| contains\_laser\_cut | Everyone | Read Only | No | tinyint | 0 | No |
| contains\_nudity | Everyone | Owner | No | int | 0 | Yes |
| contains\_profanity | Everyone | Owner | No | int | 0 | Yes |
| contains\_sexuality | Everyone | Owner | No | int | 0 | Yes |
| contains\_substance\_abuse | Everyone | Owner | No | int | 0 | Yes |
| cool\_factor\_1 | Everyone | Owner | No | varchar |  | Yes |
| cool\_factor\_2 | Everyone | Owner | No | varchar |  | Yes |
| cool\_factor\_3 | Everyone | Owner | No | varchar |  | Yes |
| copyright\_checked | Owner | Admin | No | tinyint | 0 | No |
| crafterseconds1 | Owner | Read Only | No | int |  | Yes |
| crafterseconds10 | Owner | Read Only | No | int |  | Yes |
| crafterseconds100 | Owner | Read Only | No | int |  | Yes |
| crafterseconds1000 | Owner | Read Only | No | int |  | Yes |
| crafterseconds500 | Owner | Read Only | No | int |  | Yes |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_published | Everyone | Admin | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| department | Everyone | Owner | No | varchar | games | No |
| depth | Everyone | Read Only | No | float | 10.75 | No |
| description | Everyone | Owner | No | mediumtext |  | No |
| description\_html | Everyone | Read Only | No | mediumtext |  | No |
| designer\_id | Everyone | Owner | Yes | char |  | No |
| desired\_markup | Owner | Owner | No | float | 5 | No |
| digital\_delivery | Everyone | Read Only | No | tinyint | 0 | No |
| dotd | Everyone | Read Only | No | tinyint | 0 | No |
| edition | Everyone | Owner | No | varchar | First | No |
| enable\_linen\_texture | Everyone | Owner | No | tinyint | 0 | No |
| enable\_uv\_coating | Everyone | Owner | No | tinyint | 0 | No |
| featured | Everyone | Admin | No | tinyint | 0 | No |
| featured\_expires | Owner | Admin | No | datetime |  | No |
| goat\_code | Everyone | Owner | No | varchar |  | Yes |
| has\_promoed\_featured | Owner | Admin | No | int | 0 | No |
| has\_promoed\_showcase | Owner | Admin | No | int | 0 | No |
| height | Everyone | Read Only | No | float | 1.75 | No |
| id | Everyone | Read Only | No | char |  | No |
| last\_sale\_date | Owner | Admin | No | datetime |  | No |
| logo\_id | Everyone | Owner | No | char |  | Yes |
| max\_players | Everyone | Owner | No | tinyint | 99 | No |
| min\_age | Everyone | Owner | No | char | 18+ | No |
| min\_players | Everyone | Owner | No | tinyint | 1 | No |
| msrp | Everyone | Owner | No | float | 0.99 | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| nibbles | Owner | Admin | No | bigint | 0 | No |
| oncrowdsale | Everyone | Read Only | No | tinyint | 0 | No |
| page\_views | Owner | Admin | No | bigint | 0 | No |
| parts\_only | Everyone | Read Only | No | tinyint | 0 | No |
| perma\_lock | Owner | Admin | No | tinyint | 0 | No |
| play\_time | Everyone | Owner | No | varchar | 30-60 | No |
| price1 | Owner | Owner | No | float | 0 | No |
| price10 | Owner | Owner | No | float | 0 | No |
| price100 | Owner | Owner | No | float | 0 | No |
| price1000 | Owner | Owner | No | float | 0 | No |
| price500 | Owner | Owner | No | float | 0 | No |
| private\_sales | Owner | Owner | No | tinyint | 0 | No |
| private\_viewing | Owner | Owner | No | tinyint | 0 | No |
| promo\_markup | Owner | Owner | No | float | 1 | No |
| promo\_opt\_in | Owner | Owner | No | int | 0 | No |
| public | Everyone | Read Only | No | tinyint | 0 | No |
| ratings\_at\_1 | Everyone | Read Only | No | int | 0 | No |
| ratings\_at\_2 | Everyone | Read Only | No | int | 0 | No |
| ratings\_at\_3 | Everyone | Read Only | No | int | 0 | No |
| ratings\_at\_4 | Everyone | Read Only | No | int | 0 | No |
| ratings\_at\_5 | Everyone | Read Only | No | int | 0 | No |
| review\_quote | Everyone | Owner | No | text |  | Yes |
| review\_reviewer | Everyone | Owner | No | varchar |  | Yes |
| review\_uri | Everyone | Owner | No | text |  | Yes |
| sales | Owner | Admin | No | bigint | 0 | No |
| short\_description | Everyone | Owner | No | varchar |  | Yes |
| showcase | Everyone | Admin | No | tinyint | 0 | No |
| showcase\_expires | Owner | Admin | No | datetime |  | No |
| sku\_id | Everyone | Read Only | No | char |  | Yes |
| staff\_pick | Everyone | Admin | No | tinyint | 0 | No |
| sws\_markup | Owner | Owner | No | float | 1 | No |
| sws\_opt\_in | Owner | Owner | No | int | 0 | No |
| trashed | Everyone | Admin | No | tinyint | 0 | No |
| uri\_part | Everyone | Read Only | No | varchar |  | No |
| use\_automatic\_pricing | Owner | Owner | No | int | 1 | Yes |
| website\_uri | Everyone | Owner | No | text |  | Yes |
| weight | Everyone | Read Only | No | float | 0 | No |
| width | Everyone | Read Only | No | float | 10.75 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="hook-box"></a>

## Hook Box

> Source file: `HookBox.html`

-   [Hook Box](#Hook_Box)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

Boxes that have an inside and outside. Accessible via `/api/hookbox`.

### [Identities](#___top "click to go to top of document")

JumboHookBox36

PokerHookBox18

### [Properties](#___top "click to go to top of document")

Each hook box has the following properties. Complete details in [HookBoxProperties](/developer/HookBoxProperties.html).

id

The unique id for this hook box. It will never change.

identity

The style of box you want.

wing\_object\_type

`hookbox`.

date\_created

A date when the hook box was created.

date\_updated

A date when the hook box was last updated.

name

The name the hook box is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this hook box belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a hook box to be included in the game.

outside\_id

A [File](/developer/File.html) id. Sets the image that will be printed on the outside of the box. The ID is from a [File](/developer/File.html). If a outside\_id is specified, then an extra property called `outside` will be added which will briefly describe the image.

has\_proofed\_outside

A boolean indicating whether the outside image has been verified by the user to be correct.

inside\_id

A [File](/developer/File.html) id. Sets the image that will be printed on the inside of the box. The ID is from a [File](/developer/File.html). If a inside\_id is specified, then an extra property called `inside` will be added which will briefly describe the image.

has\_proofed\_inside

A boolean indicating whether the inside image has been verified by the user to be correct.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this hook box is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate hook boxes.

## [Create](#___top "click to go to top of document")

```
 POST /api/hookbox
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

top\_id

Optional.

has\_proofed\_top

Optional.

bottom\_id

Optional.

has\_proofed\_bottom

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Box",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/hookbox/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/hookbox/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/hookbox/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_related\_objects

Optional. See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) and **Related Objects** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Box",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="hookbox-properties"></a>

## HookBox Properties

> Source file: `HookBoxProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| has\_proofed\_inside | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_outside | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| inside\_id | Owner | Owner | No | char |  | Yes |
| is\_inside\_blank | Everyone | Owner | Yes | tinyint | 1 | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| outside\_id | Owner | Owner | No | char |  | Yes |
| quantity | Everyone | Owner | No | int | 1 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="idea"></a>

## Idea

> Source file: `Idea.html`

-   [Idea](#Idea)
-   [Properties](#Properties)
-   [Relationships](#Relationships)
-   [Related Objects](#Related_Objects)
-   [Idea Methods](#Idea_Methods)
    -   [Create Idea](#Create_Idea)
    -   [Update Idea](#Update_Idea)
    -   [Delete Idea](#Delete_Idea)
    -   [Fetch Idea](#Fetch_Idea)
    -   [Fetch Ideas List](#Fetch_Ideas_List)
    -   [Create / Update an Opinion](#Create_%2F_Update_an_Opinion)
    -   [Merge Ideas](#Merge_Ideas)
    -   [Fetch An Unvoted Idea](#Fetch_An_Unvoted_Idea)
    -   [Lock an Idea](#Lock_an_Idea)
    -   [Unock an Idea](#Unock_an_Idea)

This is the primary API for the ideas system. Each idea is accessed via `/api/idea`.

### [Properties](#___top "click to go to top of document")

Complete details in [IdeaProperties](/developer/IdeaProperties.html).

id

The unique id for this idea. It will never change.

object\_type

`idea`.

date\_created

A date when the idea was created.

date\_updated

A date when the idea was last updated.

user\_id

A [User](/developer/User.html) id. The unique id of a [User](/developer/User.html) that this idea was submitted by.

name

The name of this idea.

description

255 character description of what the user would like to happen.

yes

An integer containing the yes vote count.

skip

An integer containing the count of times this idea was skipped rather than voted on.

currency

An integer indicating the number of crafter points attached to this idea.

locked

A boolean indicating whether or not this idea is locked (aka closed).

locked\_status

Must be one of `Infeasible` `Completed` `Merged` or `Unlocked`.

### [Relationships](#___top "click to go to top of document")

opinions

A list of [Opinion](/developer/Opinion.html)s users have given for this idea.

### [Related Objects](#___top "click to go to top of document")

user

The [User](/developer/User.html) that this idea is owned by.

merged\_into

If this idea has been merged into another idea, this object will tell you what idea it was merged into.

### [Idea Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate ideas.

## [Create Idea](#___top "click to go to top of document")

```
 POST /api/idea
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

user\_id

Required.

name

Required.

description

Required.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Pink Unicorns",
   "description" : "Pink unicorn pawns would be ideal for any game.",
   ...
 }
```

## [Update Idea](#___top "click to go to top of document")

```
 PUT /api/idea/xxx
```

See **Create Idea** for details.

## [Delete Idea](#___top "click to go to top of document")

```
 DELETE /api/idea/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch Idea](#___top "click to go to top of document")

```
 GET /api/idea/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Idea Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Pink Unicorns",
   ...
 }
```

## [Fetch Ideas List](#___top "click to go to top of document")

```
 GET /api/idea

 {
  "paging" : { ... },
  "items" : [
    {
            "object_type" : "idea",
            "date_updated" : "2012-07-13T02:59:03+00:00",
            "date_created" : "2012-07-13T02:59:03+00:00",
            "name" : "Pink Unicorns",
            ...
    },
    ...
  ]
 }
```

## [Create / Update an Opinion](#___top "click to go to top of document")

```
 POST /api/idea/xxx/opinions
```

opinion

Required. Must be one of `yes` or `skip`.

currency

Optional. An integer representing the number of crafter points you'd like to add to an idea.

next

Optional. A boolean which, if 1, will make this method return the next unvoted idea rather than the current idea that you're voting on.

Logs an opinion and then returns the idea.

## [Merge Ideas](#___top "click to go to top of document")

```
 POST /api/idea-merge
```

idea1\_id

The id of the idea to become the master idea.

idea2\_id

The id of the idea to merge into the master idea.

Returns:

```
 {
   "success" : 1,
 }
```

## [Fetch An Unvoted Idea](#___top "click to go to top of document")

```
 GET /api/idea/get_low_vote
```

Returns the same as **Fetch an Idea**.

## [Lock an Idea](#___top "click to go to top of document")

```
 PUT /api/idea/xxx/lock
```

Returns:

```
 {
   "success" : 1,
 }
```

## [Unock an Idea](#___top "click to go to top of document")

```
 PUT /api/idea/xxx/unlock
```

Returns:

```
 {
   "success" : 1,
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="idea-opinion"></a>

## Idea Opinion

> Source file: `IdeaOpinion.html`

-   [Idea Opinion](#Idea_Opinion)
-   [Related Objects](#Related_Objects)
-   [Opinion Methods](#Opinion_Methods)
    -   [Create Opinion](#Create_Opinion)
    -   [Update Opinion](#Update_Opinion)
    -   [Delete Opinion](#Delete_Opinion)
    -   [Fetch Opinion](#Fetch_Opinion)

An opinion is a vote for an [Idea](/developer/Idea.html). Each opinion is accessed via `/api/ideaopinion` and has the following properties. Complete details in [IdeaOpinionProperties](/developer/IdeaOpinionProperties.html).

id

The unique id for this opinion. It will never change.

object\_type

`ideaopinion`.

date\_created

A date when the opinion was created.

date\_updated

A date when the opinion was last updated.

user\_id

A [User](/developer/User.html) id. The unique id of a [User](/developer/User.html) that this opinion was submitted by.

opinion

Must be one of `yes` or `skip`.

currency

An integer indicating the number of crafter points attached to this opinion.

idea\_id

An [Idea](/developer/Idea.html) id. The idea that this opinion is about.

### [Related Objects](#___top "click to go to top of document")

user

The [User](/developer/User.html) that this opinion is owned by.

idea

This [Idea](/developer/Idea.html) this opinion is about.

### [Opinion Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate opinions.

## [Create Opinion](#___top "click to go to top of document")

```
 POST /api/ideaopinion
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

user\_id

Required.

opinion

Returns:

```
 {
   "id" : "xxx",
   "opinion" : "yes",
   ...
 }
```

## [Update Opinion](#___top "click to go to top of document")

```
 PUT /api/ideaopinion/xxx
```

See **Create Opinion** for details.

## [Delete Opinion](#___top "click to go to top of document")

```
 DELETE /api/ideaopinion/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch Opinion](#___top "click to go to top of document")

```
 GET /api/ideaopinion/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Opinion Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "opinion" : "yes",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="ideaopinion-properties"></a>

## IdeaOpinion Properties

> Source file: `IdeaOpinionProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| crafter\_points | Everyone | Owner | No | int | 0 | No |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| id | Everyone | Read Only | No | char |  | No |
| idea\_id | Everyone | Owner | Yes | char |  | No |
| opinion | Everyone | Owner | Yes | varchar |  | No |
| user\_id | Everyone | Owner | Yes | char |  | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="idea-properties"></a>

## Idea Properties

> Source file: `IdeaProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| comment\_count | Everyone | Read Only | No | int | 0 | Yes |
| crafter\_points | Everyone | Read Only | No | bigint | 0 | Yes |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| description | Everyone | Owner | Yes | text |  | No |
| id | Everyone | Read Only | No | char |  | No |
| locked | Everyone | Owner | No | tinyint | 0 | Yes |
| locked\_status | Everyone | Owner | No | varchar | Unlocked | No |
| merged\_into\_id | Everyone | Owner | No | char |  | Yes |
| name | Everyone | Owner | Yes | varchar |  | No |
| skip | Everyone | Read Only | No | bigint | 0 | Yes |
| subscription\_count | Everyone | Read Only | No | int | 0 | Yes |
| uri\_part | Everyone | Read Only | No | varchar |  | No |
| user\_id | Everyone | Owner | Yes | char |  | No |
| weighted | Everyone | Read Only | No | bigint | 0 | Yes |
| yes | Everyone | Read Only | No | bigint | 0 | Yes |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="introduction-to-the-wing-api"></a>

## Introduction to the Wing API

> Source file: `Intro.html`

-   [Introduction to the Wing API](#Introduction_to_the_Wing_API)
    -   [Conventions](#Conventions)
        -   [Ellipsis](#Ellipsis)
        -   [No Result Wrappers](#No_Result_Wrappers)
        -   [ID's](#ID%27s)
        -   [Prefix](#Prefix)
    -   [Requests and Responses](#Requests_and_Responses)
        -   [Authenticated Requests](#Authenticated_Requests)
    -   [Consistency](#Consistency)
        -   [Object Properties](#Object_Properties)
        -   [Dates](#Dates)
        -   [Response Format](#Response_Format)
            -   [Success](#Success)
            -   [Success With Pagination](#Success_With_Pagination)
            -   [Exceptions](#Exceptions)
            -   [Warnings](#Warnings)
        -   [Relationships](#Relationships)
            -   [Queryable](#Queryable)
            -   [Qualifiers](#Qualifiers)
        -   [Related Objects](#Related_Objects)
        -   [Includes](#Includes)
        -   [Options](#Options)
    -   [HTTP Method Tunnelling](#HTTP_Method_Tunnelling)
    -   [Rate Limiting](#Rate_Limiting)
    -   [Fault Tolerance](#Fault_Tolerance)
        -   [Scheduled Maintenance](#Scheduled_Maintenance)
    -   [Clients](#Clients)
    -   [Language Specific Examples](#Language_Specific_Examples)
    -   [Testing](#Testing)

The Wing API ([http://wingapi.com](http://wingapi.com)) is a restful protocol developed by Plain Black Corporation ([http://www.plainblack.com](http://www.plainblack.com)). It is designed to make web services easy to use, easy to implement, easy to wrap in a software layer, and most important, maintain absolute consistency.

## [Conventions](#___top "click to go to top of document")

There are several conventions used in this documentation to keep things shorter. They are documented here.

### [Ellipsis](#___top "click to go to top of document")

We often shorten pieces of return values with ellipsis (three dots: ...) to show that there would be additional data there, but it is not directly relevent to the documentation at hand.

### [No Result Wrappers](#___top "click to go to top of document")

Though all Wing results have a wrapper like:

```
 { "result" : { ... } }
```

Or

```
 { "error" : { ... } }
```

They are left out in most of the documentaiton for the sake of brevity. Only the `{...}` portion is discussed in most cases.

### [ID's](#___top "click to go to top of document")

ID's everywhere are represented as 3 x's: `xxx`. If you see `xxx` anywhere that means that would be replaced by a legitimate ID and shouldn't be interpreted literally. Also, ID's are case-sensitive strings, so store them as such.

### [Prefix](#___top "click to go to top of document")

When referencing any object herein, the following prefix is assumed:

```
 https://www.thegamecrafter.com/
```

Therefore if you were going to fetch information about a game, you'd do:

```
 GET https://www.thegamecrafter.com/api/game/xxx
```

## [Requests and Responses](#___top "click to go to top of document")

To make a request to a Wing web service you need nothing more than a command line tool like `curl`, but you can of course use any network aware programming language as well. Here's an example request:

Create an object:

```
 curl -X POST -F title="Ethics in Prisons" -F author="Andy Dufresne" http://wing.example.com/article

 {
   "result" : {
     "id" : "xxx",
     "author" : "Andy Dufresne",
     "title" : "Ethics in Prisons"
   }
 }
```

Read an object:

```
 curl http://wing.example.com/article/xxx

 {
   "result" : {
     "id" : "xxx",
     "author" : "Andy Dufresne",
     "title" : "Ethics in Prisons"
   }
 }
```

Update an object:

```
 curl -X PUT -F body="..." http://wing.example.com/article/xxx

 {
   "result" : {
     "id" : "xxx",
     "author" : "Andy Dufresne",
     "title" : "Ethics in Prisons",
     "body" : "..."
   }
 }
```

Delete an object:

```
 curl -X DELETE http://wing.example.com/article/xxx

 {
   "result" : { "success" : 1 }
 }
```

### [Authenticated Requests](#___top "click to go to top of document")

With each request you can choose to either send a cookie with `session_id` or pass it in the query params. If you choose not to pass the `session_id`, then the result you receive will be the public result set. If you do pass the `session_id` then you'll get the private result set (provided your session has the privileges to receive the private result set). For example, if you request information about your user account without specifying a `session_id` then all you'd get back is an ID and some other basic information, like this:

```
 {
    "id" : "xxx",
    "display_name" : "Andy Dufresne"
 }
```

But if you request your account information with your `session_id`, then you'd get a result set with everything we know about you:

```
 {
    "id" : "xxx",
    "display_name" : "Andy Dufresne",
    "username" : "andy",
    "email" : "andy@shawshank.jail",
    ...
 }
```

However, if I requested information about your account, and specified my own `session_id`, then I would only get the public data. Because I don't have the privileges necessary to access your private information.

See Also: [Session](/developer/Session.html)

## [Consistency](#___top "click to go to top of document")

A big part of the Wing specification is that you can reliably expect it to do the same thing in all circumstances. Here are a few key points of consistency.

### [Object Properties](#___top "click to go to top of document")

All objects contain the following minimum shared set of properties.

id

A unique id that will never change. It is a 36 character GUID (global unique id).

date\_created

The date this object came into existence.

date\_updated

The last time this object was written to the database.

view\_uri

A link to where you can see this object on the Tabletop.Events web site.

edit\_uri

A link to where you can edit this object on the Tabletop.Events web site.

object\_type

A string representing the type of object this is in case you need to identify it in the future.

object\_name

A human friendly version of the object\_type.

### [Dates](#___top "click to go to top of document")

Dates are always returned in the format of `YYYY-MM-DD HH:MM:SS` and are represented as the UTC time zone.

### [Response Format](#___top "click to go to top of document")

Wing will always return a JSON response in the form of an object.

```
 {
   "result" : { "success" : 1 }
 }
```

#### [Success](#___top "click to go to top of document")

Results will always start with a top level element called "result" and the data contained therein will always be returned as a hash.

```
 {
    "result" : {
      "session_id" : "xxx",
      "user" : {
        "username" : "andy",
        "email" : "andy@shawshank.jail"
      }
    }
 }
```

#### [Success With Pagination](#___top "click to go to top of document")

Paginated lists are always handled exactly the same way, and always have the same minimum set of parameters for manipulation.

```
 curl -X GET -F _items_per_page=25 -F _page_number=3 http://example.com/api/article
```

You can tell how many items per page to return and which page number to return. That will give you a result set like this:

```
 {
   "result" : {
     "paging" : {
       "total_items" : 937,
       "page_number" : 3,
       "items_per_page" : 25,
       "total_pages" : 313,
       "next_page_number" : 4,
       "previous_page_number" : 2,
     },
     "items" : [
       {
         "id" : "xxx",
         "title" : "Ethics in Prisons",
         "author" : "Andy Dufresne",
         "body" : "..."
       },
       ...
     ]
   }
 }
```

\_items\_per\_page

Defaults to 25. Minimum 1. Maximum 100. The number of items to be returned in a given result set.

\_page\_number

Defaults to 1. The page of results to return.

\_max\_items

If you wish to abitrarily limit the number of items that can be pulled from a query, rather than allowing pagination until you run out of records in the database, then you can set this to that limit.

\_order\_by

By default result set order is determined by the server, and will be different based upon the object you're accessing. However, you can order by any field that you can edit.

\_sort\_order

By default result sets are returned in ascending order (`asc`). You can set `_sort_order` equal to `desc` to reverse the order.

#### [Exceptions](#___top "click to go to top of document")

Exceptions will always start with a top level element called `error` and then will have a hash of 3 properties: `code`, `message`, and `data`.

```
 {
   "error" : {
     "code" : 500,
     "message" : "An unknown error has occurred.",
     "data" : null
   }
 }
```

The code is always an integer and conforms to the standard list of Wing [ErrorCodes](/developer/ErrorCodes.html). These numbers are used consistently so that app developers can trap and handle specific types of exceptions more gracefully.

The message is a human readable message that you can display to a user.

The data element many times will be null, but it can have important debug information. For example, if a required field was left empty, the field name could be put in the data element so that the app could highlight the field for the user.

#### [Warnings](#___top "click to go to top of document")

In addition to exceptions there can be less severe issues that come up. These are handled via warnings. Warnings are just like exceptions, but they don't cause execution to halt. As such there can be any number of warnings. And warnings are returned with the result.

```
 {
    "result" : {
        "_warnings" : [
            {
                "code" : 445,
                "message" : "Logo image is too big.",
                "data" : "logo"
            }
        ],
        ...
    }
 }
```

### [Relationships](#___top "click to go to top of document")

All objects can have relationships to each other. When you fetch an object, you can pass `_include_relationships=1` as a parameter if you want to get the relationship data as well.

```
 curl -X GET -F _include_relationships=1  http://wing.example.com/article/xxx

 {
   "result" : {
     "id" : "xxx",
     "author" : "Andy Dufresne",
     "title" : "Ethics in Prisons",
     "body" : "...",
     "user_id" : "xxx",
     "_relationships" : {
        "user" : "http://wing.example.com/api/user/xxx",
        "related_articles" : "http://wing.example.com/article/xxx/related_articles"
     }
   }
 }
```

You can then in-turn call the URI provided by each relationship to fetch the items in that list.

#### [Queryable](#___top "click to go to top of document")

Some relationships will allow you to use a `query` parameter on the URL that will allow you to search the result set. The documentation will tell you when this is the case and which fields will be searched to provide you with a result set.

```
 GET /api/article/xxx/related-articles?query=prison
```

#### [Qualifiers](#___top "click to go to top of document")

In search engines these are sometimes called facets. They are criteria that allow you to filter the result set that comes back from a relationship. The documentation will tell you when a relationship has a qualifier. To use it you'd add a parameter of the name of the qualifier to the URL along with the value you want to search for.

```
 GET /api/article/xxx/related-articles?user_id=xxx
```

That will search for all related articles with a user\_id of xxx.

You can also modify the qualifier by prepending operators such as >, >=, <=, and <> onto the value. For example:

```
 GET /api/article/xxx/related-articles?word_count=>=100
```

Get all related articles with a word count greater than or equal to 100.

You can also request that a qualifier be limited to a `null` value.

```
 GET /api/article/xxx/related-articles?user_id=null
```

If you did this with an empty value rather than specifically `null` then this qualifier will be skipped.

### [Related Objects](#___top "click to go to top of document")

Likewise you can request that the short version of the related objects be included directly in the result by adding the name of the related object like `_include_related_objects=user` as a parameter:

```
 curl -X GET -F _include_related_objects=user  http://wing.example.com/article/xxx

 {
   "result" : {
     "id" : "xxx",
     "author" : "Andy Dufresne",
     "title" : "Ethics in Prisons",
     "body" : "...",
     "user_id" : "xxx",
     "user" : {
        "id" : "xxx",
        "username" : "andy",
        "display_name" : "Andy Dufresne"
     }
   }
 }
```

All related objects are also inherently relationships of the object. Therefore the documentation will leave them out of the list of relationships in each object, but will include them in the list of related objects.

**NOTE:** The only related objects that can be returned in this manner are 1:1 relationships. If the relationship is 1:N as in the case of related articles above, then those cannot not be included in the result, and must be fetched separately.

### [Includes](#___top "click to go to top of document")

Some objects will allow for Includes, and will show this in the documenation. Includes are extra bits of data you can pull back when you request the object. If you want to include a single thing you can add this to the URL:

```
 _include=foo
```

And you can add multiple includes to the URL if you want to include many things. The result will then have `foo` in it like so:

```
 {
    "id" : "xxx",
    "foo" : {...},
    ...
 }
```

### [Options](#___top "click to go to top of document")

Sometimes an object will have fields that require you to choose an option from an enumerated list. There are two ways to see what those options are:

This way would be most often used when you need the list of options in order to create an object.

```
 curl http://wing.example.com/article/_options
 
 {
    "result" : {
        "book_type" : ["Hardcover","Paperback"]
    }
 }
```

This way would be most often used when you need the list of options to update an object, because you can get the properties of the object and the options in one call.

```
 curl -X GET -F _include_options=1  http://wing.example.com/article/xxx

 {
   "result" : {
     "id" : "xxx",
     "author" : "Andy Dufresne",
     "title" : "Ethics in Prisons",
     "body" : "...",
     "book_type" : "Hardcover"
     "_options" : {
        "book_type" : ["Hardcover","Paperback"]
     }
   }
 }
```

Options will always be returned as an array as displayed above. However, they can be accompanied by a hash of human readable labels such as:

```
 {
    "result" : {
        "_options" : {
            "country" : ["CA","GB","US",...],
            "_country" : {
                "US" : "United States of America",
                "GB: : "Great Britain",
                "CA" : "Canada",
                ...
            }
        }
    }
 }
```

## [HTTP Method Tunnelling](#___top "click to go to top of document")

Sometimes it's not possible to use all HTTP methods. For example if you were to trigger a form post through Javascript the browser only knows how to do GET and POST. You can get around this by using XmlHttpRequest, but there is another way: HTTP Method Tunnelling.

Instead of doing a request like:

```
 curl -X DELETE http://wing.example.com/article/xxx
```

You can instead do a POST and pass the actual method via an HTTP Header like this:

```
 curl -H "X-HTTP-Method: DELETE" -X POST http://wing.example.com/article/xxx
```

Or you can pass it as part of the URI like:

```
 curl -X POST http://wing.example.com/article/xxx?X-HTTP-Method=DELETE
```

Here's the same example as an HTML form:

```
 <form method="POST" action="http://wing.example.com/article/xxx?X-HTTP-Method=DELETE">
 ...
 </form>
```

## [Rate Limiting](#___top "click to go to top of document")

Our API will return `500` errors if you exceed **240 requests per minute** (4 requests per second). Therefore you should build your application so that it's mindful of how many requests its sending to our API.

## [Fault Tolerance](#___top "click to go to top of document")

Our site will automatically scale out extra servers when under increased load. And its capable of self-healing for most things. That said, we will experience down time from time to time either due to human error or unforseeable circumstances (like our hosting provider having trouble). Therefore you should build your applications to be as fault tolerant as possible and not expect 100% uptime from our APIs.

### [Scheduled Maintenance](#___top "click to go to top of document")

Sometimes for large database structure changes we will have to take the site down to ensure data consistency. These maintenance windows will be posted to our blog ([http://news.thegamecrafter.com](http://news.thegamecrafter.com)) and will occur between 11pm and 7am US Central time.

## [Clients](#___top "click to go to top of document")

There are clients available to help you interface with our APIs.

Perl: [http://search.cpan.org/~rizen/TheGameCrafter-Client/lib/TheGameCrafter/Client.pm](http://search.cpan.org/~rizen/TheGameCrafter-Client/lib/TheGameCrafter/Client.pm)

## [Language Specific Examples](#___top "click to go to top of document")

[CurlExample](/developer/CurlExample.html)

[PerlExample](/developer/PerlExample.html)

[JqueryExample](/developer/JqueryExample.html)

[JavaExample](/developer/JavaExample.html)

[PhpExample](/developer/PhpExample.html)

[CSharpExample](/developer/CSharpExample.html)

[FSharpExample](/developer/FSharpExample.html)

[VisualBasicExample](/developer/VisualBasicExample.html)

[RubyExample](/developer/RubyExample.html)

[PythonExample](/developer/PythonExample.html)

[LuaExample](/developer/LuaExample.html)

## [Testing](#___top "click to go to top of document")

If you don't want to use an available client, but instead write your own, there is a [Test](/developer/Test.html) API that can help make sure your client is working before you start using the real web service.

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="java-example"></a>

## Java Example

> Source file: `JavaExample.html`

**NOTE:** Get an [APIKey](/developer/APIKey.html).

This code will allow you to get a session, fetch account info, upload a file, and search games. From it you should be able to discern how to work with the entire TGC API.

```
 package playground;
 
 import java.io.BufferedReader;
 import java.io.File;
 import java.io.IOException;
 import java.io.InputStream;
 import java.io.InputStreamReader;
 import java.net.URLEncoder;
 import java.util.ArrayList;
 import java.util.List;
 
 import org.apache.http.HttpEntity;
 import org.apache.http.client.ClientProtocolException;
 import org.apache.http.client.entity.UrlEncodedFormEntity;
 import org.apache.http.client.methods.CloseableHttpResponse;
 import org.apache.http.client.methods.HttpGet;
 import org.apache.http.client.methods.HttpPost;
 import org.apache.http.entity.ContentType;
 import org.apache.http.entity.mime.MultipartEntityBuilder;
 import org.apache.http.entity.mime.content.FileBody;
 import org.apache.http.entity.mime.content.StringBody;
 import org.apache.http.impl.client.CloseableHttpClient;
 import org.apache.http.impl.client.HttpClients;
 import org.apache.http.message.BasicNameValuePair;
 import org.apache.http.util.EntityUtils;
 import org.json.JSONException;
 import org.json.JSONObject;
 
 public class TGCJavaAPI {
 
     public static void main(String[] args) throws ClientProtocolException, IOException {
         CloseableHttpClient httpclient = HttpClients.createDefault();
         
         String sessionId = "";
         String userId = "";
         
         // Get a session
         // TODO: Replace _USER_ with your username, _PASS_ with your password, and _APIKEY_ with your API Key Id
         String session = getSession(httpclient, "_USER_", "_PASS_", "_APIKEY_");
         if (session != null){
             //System.out.println(session); //Prints out full response
             //Parse the results. This uses the JSON.org library
             try {
                 JSONObject sessionObject = new JSONObject(session);
                 if (sessionObject.has("result")){
                     sessionId = sessionObject.getJSONObject("result").getString("id");
                     userId = sessionObject.getJSONObject("result").getString("user_id");
                 }
                 else if(sessionObject.has("error")){
                     System.out.println("Error: " + sessionObject.getJSONObject("error").getString("message"));
                     return;
                 }
             } catch (JSONException e) {
                 e.printStackTrace();
                 System.out.println("Error parsing session results.");
                 return;
             }
         }
         else {
             return;
         }
         
         String rootFolderId = "";
         
         //Fetch account info
         String account = fetchAccountInfo(httpclient, sessionId, userId);
         if (account != null){
             //System.out.println(account); //Prints out full response
             //Parse the results. This uses the JSON.org library
             try {
                 JSONObject accountObject = new JSONObject(account);
                 rootFolderId = accountObject.getJSONObject("result").getString("root_folder_id");
             } catch (JSONException e) {
                 e.printStackTrace();
                 System.out.println("Error parsing account results.");
                 return;
             }
         }
         
         //Upload a file
         // TODO: Replace _FILEPATH_ with the path to the file, and _FILENAME_ with the name for your file once uploaded to TGC
         String fileUplaod = fileUpload(httpclient, sessionId, "_FILEPATH_", "_FILENAME_", rootFolderId);
         if (fileUplaod != null){
             //System.out.println(fileUplaod); //Prints out full response
         }
         
         //Search games
         String searchResults = searchGames(httpclient, "pirate booty grab", sessionId);
         if (searchResults != null){
             //System.out.println(searchResults); //Prints out full response
         }
         
         httpclient.close();
     }
     
     private static String getSession(CloseableHttpClient httpclient, String username, String password, String apikeyid) throws ClientProtocolException, IOException {
         HttpPost httpPost = new HttpPost("https://www.thegamecrafter.com/api/session");
         List<BasicNameValuePair> nvps = new ArrayList<BasicNameValuePair>();
         nvps.add(new BasicNameValuePair("username", username));
         nvps.add(new BasicNameValuePair("password", password));
         nvps.add(new BasicNameValuePair("api_key_id", apikeyid));
         httpPost.setEntity(new UrlEncodedFormEntity(nvps));
         CloseableHttpResponse response = httpclient.execute(httpPost);
         StringBuffer content = new StringBuffer();
         
         try {
             HttpEntity entity = response.getEntity();
             InputStream is = entity.getContent();
             BufferedReader rd = new BufferedReader(new InputStreamReader(is));
             String line;
             while ((line = rd.readLine()) != null) {
                 content.append(line);
                 content.append('\r');
             }
             rd.close();
             // Ensure it is fully consumed
             EntityUtils.consume(entity);
         } finally {
             response.close();
         }
         return content.toString();
     }
 
     private static String fetchAccountInfo(CloseableHttpClient httpclient, String sessionId, String userId) throws ClientProtocolException, IOException {
         HttpGet httpGet = new HttpGet("https://www.thegamecrafter.com/api/user/" + userId + "?session_id=" + sessionId);
         CloseableHttpResponse response = httpclient.execute(httpGet);
         StringBuffer content = new StringBuffer();
         
         try {
             HttpEntity entity = response.getEntity();
             InputStream is = entity.getContent();
             BufferedReader rd = new BufferedReader(new InputStreamReader(is));
             String line;
             while ((line = rd.readLine()) != null) {
                 content.append(line);
                 content.append('\r');
             }
             rd.close();
             // Ensure it is fully consumed
             EntityUtils.consume(entity);
         } finally {
             response.close();
         }
         return content.toString();
     }
     
     private static String fileUpload(CloseableHttpClient httpclient, String sessionId, String filepath, String filename, String rootFolderId) throws ClientProtocolException, IOException {
         HttpPost httpPost = new HttpPost("https://www.thegamecrafter.com/api/file");
         File file = new File(filepath);
         if (!file.exists()){
             return "File does not exist.\r";
         }
         MultipartEntityBuilder entityBuilder = MultipartEntityBuilder.create();
         entityBuilder.addPart("file", new FileBody(file));
         entityBuilder.addPart("name", new StringBody(filepath, ContentType.TEXT_PLAIN));
         entityBuilder.addPart("folder_id", new StringBody(rootFolderId, ContentType.TEXT_PLAIN));
         entityBuilder.addPart("session_id", new StringBody(sessionId, ContentType.TEXT_PLAIN));
         HttpEntity entity = entityBuilder.build();
         httpPost.setEntity(entity);
         CloseableHttpResponse response = httpclient.execute(httpPost);
         StringBuffer content = new StringBuffer();
         
         try {
             HttpEntity entity2 = response.getEntity();
             InputStream is = entity2.getContent();
             BufferedReader rd = new BufferedReader(new InputStreamReader(is));
             String line;
             while ((line = rd.readLine()) != null) {
                 content.append(line);
                 content.append('\r');
             }
             rd.close();
             // Ensure it is fully consumed
             EntityUtils.consume(entity2);
         } finally {
             response.close();
         }
         return content.toString();
     }
     
     private static String searchGames(CloseableHttpClient httpclient, String query, String sessionId) throws ClientProtocolException, IOException {
         HttpGet httpGet = new HttpGet("https://www.thegamecrafter.com/api/game?q=" + URLEncoder.encode(query, "UTF-8") + "&_sort_by=Relevance" + (sessionId != null ? "&session_id=" + sessionId : ""));
         CloseableHttpResponse response = httpclient.execute(httpGet);
         StringBuffer content = new StringBuffer();
         
         try {
             HttpEntity entity = response.getEntity();
             InputStream is = entity.getContent();
             BufferedReader rd = new BufferedReader(new InputStreamReader(is));
             String line;
             while ((line = rd.readLine()) != null) {
                 content.append(line);
                 content.append('\r');
             }
             rd.close();
             // Ensure it is fully consumed
             EntityUtils.consume(entity);
         } finally {
             response.close();
         }
         return content.toString();
     }
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="jquery-example"></a>

## jQuery Example

> Source file: `JqueryExample.html`

-   [jQuery Example](#jQuery_Example)
    -   [Get a Session](#Get_a_Session)
    -   [Fetch My Account Info](#Fetch_My_Account_Info)
    -   [Upload a File](#Upload_a_File)
    -   [Search Games](#Search_Games)

**NOTE:** Get an [APIKey](/developer/APIKey.html).

## [Get a Session](#___top "click to go to top of document")

```
 <script src="https://code.jquery.com/jquery-1.10.2.min.js" type="text/javascript"></script>
 <script type="text/javascript">
    jQuery.ajax('https://www.thegamecrafter.com/api/session', {
        type : 'POST',
        data : {
            username : "joe",
            password : "abc123",
            api_key_id : "" // get your own
        },
        dataType : "json",
        success : function(data) {
            var session = data.result;
            alert('Session ID: ' + session.id);
        },
        error : function(jqxhr, text_status, error_thrown) {
            var result = jQuery.parseJSON(jqxhr.responseText);
            if (result.error) {
                alert(result.error.message);
            }
            else {
                alert('Error communicating with server.');
            }
        }
    });
 </script>
```

## [Fetch My Account Info](#___top "click to go to top of document")

```
    jQuery.ajax('https://www.thegamecrafter.com/api/user/' + session.user_id, {
        type : 'GET',
        data : {
            session_id : session.id
        },
        dataType : "json",
        success : function(data) {
            var user = data.result;
        }
    });
```

## [Upload a File](#___top "click to go to top of document")

```
    jQuery.ajax('https://www.thegamecrafter.com/api/file', {
        type : 'POST',
        enctype : 'multipart/form-data',
        data : {
            file : '/path/to/image.jpg',
            name : 'image.jpg',
            folder_id : user.root_folder_id,
            session_id : session.id
        },
        dataType : "json",
        success : function(data) {
            var file = data.result;
        }
    });
```

## [Search Games](#___top "click to go to top of document")

```
 <script type="text/javascript">
    jQuery.ajax('https://www.thegamecrafter.com/api/game', {
        type : 'GET',
        data : {
            q : "Steampunk",
            session_id : "XXX", // optional
        },
        dataType : "json",
        success : function(data) {
            // output the list of games to the page
            jQuery.each(data.result.items, function(game) {
             $('body').append('<div id="'+ game.id +'">' + game.name + '</div>');
            });
        }
    });
 </script>
```

Session ID is optional for this.

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="lua-example"></a>

## Lua Example

> Source file: `LuaExample.html`

**NOTE:** Get an [APIKey](/developer/APIKey.html).

This code will allow you to get a session, fetch account info, upload a file, and search games. From it you should be able to discern how to work with the entire TGC API.

```
 -- tgc api
 
 -- Use this function to perform your initial setup
 function setup()
     username=url_encode("USERNAME")
     password=url_encode("PASSWORD")
     key="API-KEY"
     
     headers={}
     headers["Content-Type"]="application/x-www-form-urlencoded"
     params={
         method="POST",
         headers=headers,
         data="api_key_id=" .. key .. "&username=" ..username .. "&password=" .. password
     }
     http.request("https://www.thegamecrafter.com/api/session", sessionSuccess, tgcError, params)
 end
 
 function sessionSuccess(data)
     print(data)
     tbl=json.decode(data)
 
     sessionId=tbl["result"]["id"] 
     user=tbl["result"]["user_id"]
     
     params={
         method="GET"
     }
     http.request("https://www.thegamecrafter.com/api/user/" .. user .. 
         "?session_id=" .. sessionId, userSuccess, tgcError, params)
 end
 
 function userSuccess(data)
     print(data)
     tbl=json.decode(data)
     
     fileStr=readAll(os.getenv("HOME") .. "/Documents/FILENAME.png")
     folderId=tbl["result"]["root_folder_id"]
     fileName="FILENAME.png"
     fileType="image/png"
     boundary="SOME_BOUNDARY_NAME"
     crlf="\r\n"
     
     headers={}
     headers["Content-Type"]="multipart/form-data; boundary=" .. boundary
     message="--" .. boundary .. crlf ..
             "Content-Disposition: form-data; name=\"folder_id\"" .. crlf .. crlf..
             folderId .. crlf .. "--" .. boundary .. crlf ..
             "Content-Disposition: form-data; name=\"session_id\"" .. crlf .. crlf ..
             sessionId .. crlf .. "--" .. boundary .. crlf ..
             "Content-Disposition: form-data; name=\"file\"; filename=\"" ..
             fileName .."\"" .. crlf ..
             "Content-Type: " .. fileType .. crlf .. crlf ..
             fileStr .. "\r\n" .. "--" .. boundary .. "--"
     headers["Content-Length"]=tostring(string.len(message))
     params={
         method="POST",
         headers=headers,
         data=message
     }
     http.request("https://www.thegamecrafter.com/api/file", uploadSuccess, tgcError, params)
 end
 
 function uploadSuccess(data)
     print(data)
 
     query="Steampunk"
     
     params={
         method="GET"
     }
     http.request("https://www.thegamecrafter.com/api/game" ..
         "?session_id=" .. sessionId .. "&q=" .. query, logout, tgcError, params)
 end
 
 function logout(data)
     print(data)
     
     params={
         method="DELETE"
     }
     http.request("https://www.thegamecrafter.com/api/session/" .. sessionId, function(data)
         print(data)
     end, tgcError, params)
 end
 
 function tgcError(error)
     print(error)
 end
 
 function url_encode(str)
   if (str) then
     str = string.gsub (str, "\n", "\r\n")
     str = string.gsub (str, "([^%w %-%_%.%~])",
         function (c) return string.format ("%%%02X", string.byte(c)) end)
     str = string.gsub (str, " ", "%%20")
   end
   return str    
 end
 
 function readAll(file)
     local f = io.open(file, "rb")
     local content = f:read("*all")
     f:close()
     return content
 end
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="one-sided"></a>

## One Sided

> Source file: `OneSided.html`

-   [One Sided](#One_Sided)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

This API allows you to create one-sided items like neoprene mats. Accessible via ["api/onesided"](#api%2Fonesided)

### [Identities](#___top "click to go to top of document")

BiFoldBoard

MediumGameMat

SmallGameMat

VHSBox

### [Properties](#___top "click to go to top of document")

Complete details in [OneSidedProperties](/developer/OneSidedProperties.html).

id

The unique id. It will never change.

identity

See Identities above for details.

wing\_object\_type

`onesided`

date\_created

A date when was created.

date\_updated

A date when was last updated.

name

The name is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies to be included in the game.

face\_id

A [File](/developer/File.html) id. The id of the image attached to the face side. The ID is from a [File](/developer/File.html). If a face\_id is specified, then an extra property called `face` will be added which will briefly describe the image.

has\_proofed\_face

A boolean indicating whether the face image has been verified by the user to be correct.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate.

## [Create](#___top "click to go to top of document")

```
 POST /api/onesided
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

face\_id

Optional.

has\_proofed\_face

Returns:

```
 {
   "id" : "xxx",
   "name" : "Cell Block",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/onesided/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/onesided/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/onesided/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Cell Block",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="one-sided-gloss"></a>

## One Sided Gloss

> Source file: `OneSidedGloss.html`

-   [One Sided Gloss](#One_Sided_Gloss)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

This API allows you to create one-sided folding game boards. Accessible via ["api/onesidedgloss"](#api%2Fonesidedgloss)

### [Identities](#___top "click to go to top of document")

MediumSixFoldBoard

QuadFoldBoard

LargeQuadFoldBoard

SixFoldBoard

### [Properties](#___top "click to go to top of document")

Complete details in [OneSidedGlossProperties](/developer/OneSidedGlossProperties.html).

id

The unique id. It will never change.

identity

See Identities above for details.

wing\_object\_type

`onesidedgloss`

date\_created

A date when was created.

date\_updated

A date when was last updated.

name

The name is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies to be included in the game.

face\_id

A [File](/developer/File.html) id. The id of the image attached to the face side. The ID is from a [File](/developer/File.html). If a face\_id is specified, then an extra property called `face` will be added which will briefly describe the image.

has\_proofed\_face

A boolean indicating whether the face image has been verified by the user to be correct.

surfacing\_treatment

What type of surfacing to perform on the item. Enumerated options, use the ["Options" in Intro](/developer/Intro.html#Options) API.

spot\_gloss\_id

Only used if `surfacing_treatment` is set to `spot_gloss`. A [File](/developer/File.html) id. Sets the image that will be printed on top of the the face art in gloss. The ID is from a [File](/developer/File.html). If a spot\_gloss\_id is specified, then an extra property called `spot_gloss` will be added which will briefly describe the image.

has\_proofed\_spot\_gloss

A boolean indicating whether the spot\_gloss image has been verified by the user to be correct.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate.

## [Create](#___top "click to go to top of document")

```
 POST /api/onesidedgloss
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

face\_id

Optional.

has\_proofed\_face

Returns:

```
 {
   "id" : "xxx",
   "name" : "Cell Block",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/onesidedgloss/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/onesidedgloss/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/onesidedgloss/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Cell Block",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="onesidedgloss-properties"></a>

## OneSidedGloss Properties

> Source file: `OneSidedGlossProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| face\_id | Owner | Owner | No | char |  | Yes |
| game\_id | Everyone | Owner | Yes | char |  | No |
| has\_proofed\_face | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_spot\_gloss | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |
| spot\_gloss\_id | Owner | Owner | No | char |  | Yes |
| surfacing\_treatment | Everyone | Owner | No | varchar | Matte Finish | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="onesided-properties"></a>

## OneSided Properties

> Source file: `OneSidedProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| face\_id | Owner | Owner | No | char |  | Yes |
| game\_id | Everyone | Owner | Yes | char |  | No |
| has\_proofed\_face | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="one-sided-slugged"></a>

## One Sided Slugged

> Source file: `OneSidedSlugged.html`

-   [One Sided Slugged](#One_Sided_Slugged)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

This API allows you to create stickers. Accessible via `/api/onesidedslugged`.

Complete details in [OneSidedSluggedProperties](/developer/OneSidedSluggedProperties.html).

id

The unique id for this onesidedslugged. It will never change.

wing\_object\_type

`onesidedslugged`

date\_created

A date when the onesidedslugged was created.

date\_updated

A date when the onesidedslugged was last updated.

name

The name the onesidedslugged is known by.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a onesidedslugged to be included in the set.

face\_id

A [File](/developer/File.html) id. Sets the face image of the onesidedslugged. The ID is from a [File](/developer/File.html). If a face\_id is specified, then an extra property called `face` will be added which will briefly describe the image.

has\_proofed\_face

A boolean indicating whether the face image has been verified by the user to be correct.

### [Related Objects](#___top "click to go to top of document")

set

The [Set](/developer/Set.html) that this onesidedslugged is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate onesidedsluggeds.

## [Create](#___top "click to go to top of document")

```
 POST /api/onesidedslugged
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

setid

Required.

quantity

Optional.

face\_id

Optional.

has\_proofed\_face

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/onesidedslugged/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/onesidedslugged/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/onesidedslugged/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_related\_objects

Optional. See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) and **Related Objects** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="onesidedslugged-properties"></a>

## OneSidedSlugged Properties

> Source file: `OneSidedSluggedProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| face\_id | Owner | Owner | No | char |  | Yes |
| game\_id | Everyone | Owner | No | char |  | No |
| has\_proofed\_face | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | No | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |
| set\_id | Everyone | Owner | Yes | char |  | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="one-sided-slugged-set"></a>

## One Sided Slugged Set

> Source file: `OneSidedSluggedSet.html`

-   [One Sided Slugged Set](#One_Sided_Slugged_Set)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Relationships](#Relationships)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

This API allows you to create sets of one sided sets like mats and boards. Accessible via `/api/onesidedsluggedset`.

### [Identities](#___top "click to go to top of document")

DiceSticker

MeepleSticker

PawnSticker

TokenSticker

### [Properties](#___top "click to go to top of document")

Each one sided set is accessed via `/api/onesidedsluggedset` and has the following properties. Complete details in [OneSidedSluggedSetProperties](/developer/OneSidedSluggedSetProperties.html).

id

The unique id for this one sided set. It will never change.

identity

The style of one sided set you want.

object\_type

`onesidedsluggedset`

date\_created

A date when the one sided set was created.

date\_updated

A date when the one sided set was last updated.

name

The name the one sided set is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this one sided set belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a one sided set to be included in the game.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this one sided set is a member of.

### [Relationships](#___top "click to go to top of document")

members

The [OneSidedSlugged](/developer/OneSidedSlugged.html) members that belong to this set.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate one sided sets.

## [Create](#___top "click to go to top of document")

```
 POST /api/onesidedsluggedset
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/onesidedsluggedset/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/onesidedsluggedset/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/onesidedsluggedset/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_related\_objects

Optional. See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) and **Related Objects** above for details.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="onesidedsluggedset-properties"></a>

## OneSidedSluggedSet Properties

> Source file: `OneSidedSluggedSetProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="orderitem-properties"></a>

## OrderItem Properties

> Source file: `OrderItemProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| copyright\_checked | Owner | Admin | No | tinyint | 0 | No |
| coupon\_savings | Everyone | Read Only | No | float | 0 | No |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| id | Everyone | Read Only | No | char |  | No |
| name | Everyone | Admin | No | varchar |  | No |
| order\_id | Everyone | Owner | Yes | char |  | No |
| preview\_uri | Everyone | Read Only | No | varchar |  | Yes |
| price\_each | Everyone | Admin | No | float | 0 | No |
| quantity | Everyone | Owner | No | int | 1 | No |
| retail\_price\_each | Everyone | Read Only | No | float | 0 | No |
| sales\_tax | Everyone | Read Only | No | float | 0 | No |
| sales\_tax\_code | Everyone | Read Only | No | varchar |  | No |
| shop\_uri | Everyone | Read Only | No | varchar |  | Yes |
| sku\_id | Everyone | Owner | Yes | char |  | No |
| stitch\_plan | Owner | Admin | No | mediumblob |  | Yes |
| weight\_each | Everyone | Admin | No | float | 0 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="order-properties"></a>

## Order Properties

> Source file: `OrderProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| api\_key\_id | Owner | Owner | Yes | char |  | No |
| bof\_id | Owner | Owner | No | char |  | Yes |
| checkout\_date | Everyone | Read Only | No | datetime |  | No |
| copyright\_checked | Owner | Admin | No | tinyint | 0 | No |
| coupon\_id | Everyone | Owner | No | char |  | Yes |
| coupon\_savings | Everyone | Read Only | No | float | 0 | No |
| crafter\_points | Owner | Read Only | No | int | 0 | No |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| defect\_reported | Owner | Admin | No | int | 0 | No |
| downloaded | Owner | Admin | No | tinyint | 0 | No |
| generations | Owner | Admin | No | int | 1 | No |
| handling\_fee | Owner | Read Only | No | float | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Read Only | No | varchar | Cart | No |
| in\_production | Owner | Admin | No | tinyint | 0 | No |
| infinite\_hold | Owner | Read Only | No | tinyint | 0 | No |
| insurance\_cost | Owner | Read Only | No | float | 0 | No |
| insured | Owner | Owner | No | tinyint | 1 | No |
| ip\_address | Owner | Read Only | No | varchar |  | Yes |
| name | Everyone | Owner | No | varchar |  | Yes |
| notes | Owner | Owner | No | mediumtext |  | Yes |
| order\_number | Everyone | Read Only | No | int |  | Yes |
| original\_estimated\_ship\_date | Everyone | Read Only | No | datetime |  | No |
| packing\_list | Owner | Read Only | No | mediumblob |  | Yes |
| payment\_message | Owner | Read Only | No | varchar |  | Yes |
| payment\_method | Owner | Read Only | No | varchar | Credit Card | Yes |
| payment\_status | Owner | Read Only | No | varchar |  | Yes |
| payment\_transaction\_id | Owner | Read Only | No | varchar |  | Yes |
| po\_number | Everyone | Owner | No | varchar |  | Yes |
| production\_time | Owner | Read Only | No | integer |  | Yes |
| refunded | Owner | Admin | No | tinyint | 0 | No |
| refunded\_amount | Owner | Read Only | No | float | 0 | No |
| refunded\_to | Owner | Admin | No | varchar |  | No |
| ship\_date | Everyone | Read Only | No | datetime |  | No |
| shipped | Owner | Admin | No | tinyint | 0 | No |
| shipping\_address\_id | Owner | Owner | No | char |  | Yes |
| shipping\_cost | Owner | Read Only | No | float | 0 | No |
| shipping\_email | Owner | Owner | No | varchar |  | Yes |
| shipping\_method | Everyone | Owner | No | varchar | USPS Priority Mail | No |
| shipping\_notes | Owner | Owner | No | mediumtext |  | Yes |
| shop\_credit\_used | Owner | Read Only | No | float | 0 | No |
| start\_production\_date | Everyone | Read Only | No | datetime |  | No |
| stripe\_card\_id | Owner | Owner | No | varchar |  | Yes |
| taxes | Owner | Read Only | No | float | 0 | No |
| total | Everyone | Read Only | No | float | 0 | No |
| urgent | Owner | Read Only | No | tinyint | 0 | No |
| urgent\_fee | Owner | Read Only | No | float | 0 | No |
| use\_urgent\_token | Owner | Read Only | No | tinyint | 0 | No |
| user\_id | Owner | Admin | No | char |  | Yes |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="part-properties"></a>

## Part Properties

> Source file: `Part.html`

-   [Part Properties](#Part_Properties)
-   [Part Relationships](#Part_Relationships)
-   [Part Methods](#Part_Methods)
    -   [Part Options](#Part_Options)
    -   [Create Part](#Create_Part)
    -   [Update Part](#Update_Part)
    -   [Delete Part](#Delete_Part)
    -   [Fetch Part](#Fetch_Part)
    -   [Search All Parts](#Search_All_Parts)

Each part has the following properties and is accessed via `/api/part`. Complete details in [PartProperties](/developer/PartProperties.html).

id

The unique id for this part. It will never change.

wing\_object\_type

`part`.

date\_created

A date when the part was created.

date\_updated

A date when the part was last updated.

name

The name the part is known by.

quantity

An integer between 1 and 2147483647. Defaults to `1`. This is how many of the part are in stock.

photo\_id

A [File](/developer/File.html) id. Sets an image of the part. The ID is from a [File](/developer/File.html). If a photo\_id is specified, then an extra property called `photo` will be added which will briefly describe the image.

description

A full written description of the part.

price

The retail price of this part.

price\_10

The same as `price`, but represents the price for each when purchased in quantities of 10 or greater.

price\_100

The same as `price_10`, but represents the price for each when purchased in quantities of 100 or greater.

price\_1000

The same as `price_100`, but represents the price for each when purchased in quantities of 1000 or greater.

original\_price

The same as `price`, but ignores sales.

original\_price\_10

The same as `original_price`, but represents the price for each when purchased in quantities of 10 or greater.

original\_price\_100

The same as `original_price_10`, but represents the price for each when purchased in quantities of 100 or greater.

original\_price\_1000

The same as `original_price_100`, but represents the price for each when purchased in quantities of 1000 or greater.

sku\_id

A [Sku](/developer/Sku.html) id. The stock keeping unit to be used when adding this to the [Cart](/developer/Cart.html).

weight

The weight of this part in pounds.

color

The color of the part. Defaults to `Pictured`. See **Part Options** below for details.

category

Basic taxonomy for the part. Defaults to `Miscellaneous`. See **Part Options** below for details.

### [Part Relationships](#___top "click to go to top of document")

gameparts

The list of [GamePart](/developer/GamePart.html) that use this part.

sku

[Sku](/developer/Sku.html)

### [Part Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate parts.

## [Part Options](#___top "click to go to top of document")

Provides a list of the options that can be used to fill out various fields when creating or updating a part.

```
 GET /api/part/_options
```

Returns:

```
 {
    "color" : [...],
    "category" : [...]
 }
```

**NOTE:** You can also get this data by adding `_include_options=1` to the parameter list when fetching a part.

## [Create Part](#___top "click to go to top of document")

```
 POST /api/part
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

photo\_id

Optional.

weight

Optional.

quantity

Optional.

low\_quantity

Optional.

color

Optional.

category

Optional.

notes

Optional.

description

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Joystick Pawn",
   ...
 }
```

## [Update Part](#___top "click to go to top of document")

```
 PUT /api/part/xxx
```

See **Create Part** for details.

## [Delete Part](#___top "click to go to top of document")

```
 DELETE /api/part/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch Part](#___top "click to go to top of document")

```
 GET /api/part/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_options

Optional. See ["Options" in Intro](/developer/Intro.html#Options) and **Part Options** above for details.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Part Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Rope",
   ...
 }
```

## [Search All Parts](#___top "click to go to top of document")

See [Search](/developer/Search.html).

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="part-properties"></a>

## Part Properties

> Source file: `PartProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| assembly\_time | Owner | Owner | No | int | 0 | No |
| box | Everyone | Owner | No | tinyint | 0 | No |
| box\_insert | Everyone | Owner | No | tinyint | 0 | No |
| cannot\_be\_reordered | Owner | Owner | No | tinyint | 0 | No |
| category | Everyone | Owner | No | varchar |  | Yes |
| color | Everyone | Owner | No | varchar | Pictured | No |
| cost | Owner | Owner | No | float | 0.0001 | No |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_published | Everyone | Admin | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| departments | Everyone | Owner | No | mediumblob |  | Yes |
| depth | Everyone | Owner | No | float | 0 | No |
| description | Everyone | Owner | No | text |  | Yes |
| designer\_id | Owner | Owner | No | char |  | Yes |
| discontinued | Everyone | Owner | No | tinyint | 0 | No |
| family | Everyone | Owner | No | varchar |  | Yes |
| filament\_meters\_per\_batch | Owner | Owner | No | float | 1 | No |
| for\_resale | Everyone | Owner | No | tinyint | 0 | No |
| height | Everyone | Owner | No | float | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| in\_game\_sales | Owner | Admin | No | bigint | 0 | No |
| in\_production | Owner | Owner | No | tinyint | 0 | No |
| in\_production\_on\_machine | Owner | Owner | No | varchar |  | Yes |
| interior\_depth | Everyone | Owner | No | float | 0 | No |
| interior\_height | Everyone | Owner | No | float | 0 | No |
| interior\_width | Everyone | Owner | No | float | 0 | No |
| is\_3d\_printed | Everyone | Owner | No | tinyint | 0 | No |
| keywords | Everyone | Owner | No | text |  | Yes |
| last\_order\_date | Owner | Owner | No | date |  | No |
| last\_order\_quantity | Owner | Owner | No | int | 0 | No |
| last\_price\_change | Everyone | Owner | No | datetime |  | No |
| last\_sale\_date | Owner | Admin | No | datetime |  | No |
| low\_quantity | Owner | Owner | No | int | 1 | No |
| low\_volume | Everyone | Owner | No | tinyint | 0 | No |
| made\_in\_the\_usa | Everyone | Owner | No | tinyint | 0 | No |
| made\_on\_demand | Everyone | Owner | No | tinyint | 0 | No |
| markup\_percent | Owner | Owner | No | float | 2 | No |
| markup\_percent\_10 | Owner | Owner | No | float | 1.5 | No |
| markup\_percent\_100 | Owner | Owner | No | float | 1 | No |
| markup\_percent\_1000 | Owner | Owner | No | float | 0.5 | No |
| material | Everyone | Owner | No | varchar |  | Yes |
| minutes\_per\_batch | Owner | Owner | No | int | 1 | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| natural\_sales | Owner | Admin | No | bigint | 0 | No |
| nibbles | Owner | Admin | No | bigint | 0 | No |
| notes | Owner | Owner | No | text |  | Yes |
| number\_of\_sides | Everyone | Owner | No | tinyint | 0 | No |
| on\_demand\_station | Owner | Owner | No | varchar |  | Yes |
| on\_sale | Everyone | Owner | No | tinyint | 0 | No |
| owner\_carton\_label | Everyone | Owner | No | varchar |  | Yes |
| owner\_sku | Everyone | Owner | No | varchar |  | Yes |
| page\_views | Owner | Admin | No | bigint | 0 | No |
| photo\_id | Owner | Owner | No | char |  | Yes |
| production\_start | Owner | Owner | No | datetime |  | No |
| public | Everyone | Owner | No | tinyint | 0 | No |
| quantity | Everyone | Admin | No | int | 0 | No |
| quantity\_per\_batch | Owner | Owner | No | int | 1 | No |
| sale\_ends | Everyone | Owner | No | datetime |  | No |
| sale\_price | Everyone | Owner | No | float | 0 | No |
| size\_in\_mm | Everyone | Owner | No | tinyint | 0 | No |
| skip\_boxing\_in\_game | Owner | Owner | No | tinyint | 0 | No |
| sku\_id | Everyone | Read Only | No | char |  | Yes |
| spare\_parts | Everyone | Owner | No | tinyint | 0 | No |
| supplier\_id | Owner | Owner | No | char |  | Yes |
| supplier\_order\_ratio | Owner | Owner | No | int | 1 | No |
| supplier\_part\_number | Owner | Owner | No | varchar |  | Yes |
| supplier\_product\_url | Owner | Owner | No | text |  | Yes |
| supplies | Everyone | Owner | No | tinyint | 0 | No |
| tgc\_order\_ratio | Owner | Owner | No | int | 1 | No |
| units\_per\_carton | Everyone | Owner | No | int | 1 | No |
| upc | Everyone | Owner | No | varchar |  | Yes |
| uri\_part | Everyone | Read Only | No | varchar |  | No |
| usable\_in\_games | Everyone | Owner | No | tinyint | 1 | No |
| use\_insert\_with\_boxes | Everyone | Owner | No | mediumblob |  | Yes |
| use\_insert\_with\_parts\_boxes | Everyone | Owner | No | mediumblob |  | Yes |
| vintage | Everyone | Owner | No | tinyint | 0 | No |
| virtual | Everyone | Owner | No | tinyint | 0 | No |
| weight | Everyone | Owner | No | float | 0 | No |
| width | Everyone | Owner | No | float | 0 | No |
| youtube\_video\_id | Everyone | Owner | No | varchar |  | Yes |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="perfect-bound-book"></a>

## Perfect Bound Book

> Source file: `PerfectBoundBook.html`

-   [Perfect Bound Book](#Perfect_Bound_Book)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Relationships](#Relationships)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

All perfect bound books share this API just using different identities to differentiate by size. They are all accessed via `/api/perfectboundbook`.

### [Identities](#___top "click to go to top of document")

DigestPerfectBoundBook

LetterPerfectBoundBook

### [Properties](#___top "click to go to top of document")

Each perfect bound book has the following properties with complete details in [PerfectBoundBookProperties](/developer/PerfectBoundBookProperties.html):

id

The unique id for this perfect bound book. It will never change.

identity

The size of perfect bound book you want. See Identities above.

wing\_object\_type

`perfectboundbook`

date\_created

A date when the perfect bound book was created.

date\_updated

A date when the perfect bound book was last updated.

name

The name the perfect bound book is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this perfect bound book belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a perfect bound book to be included in the game.

page\_count

The number of pages in the perfect bound book.

spine\_image\_id

A [File](/developer/File.html) id. The image to be printed on the spine of the book.

has\_proofed\_spine

A boolean indicating whether the user has looked at the spine image and approved it.

### [Relationships](#___top "click to go to top of document")

pages

The list of [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)s that are attached to this perfect bound book.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this perfect bound book is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate perfect bound book.

## [Create](#___top "click to go to top of document")

```
 POST /api/perfectboundbook
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Rules",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/perfectboundbook/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /perfectboundbook/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/perfectboundbook/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **PerfectBoundBook Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Rules",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="perfect-bound-book-page"></a>

## Perfect Bound Book Page

> Source file: `PerfectBoundBookPage.html`

-   [Perfect Bound Book Page](#Perfect_Bound_Book_Page)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

The child element of [PerfectBoundBook](/developer/PerfectBoundBook.html)s are perfect bound book pages, which are accessible via `/api/perfectboundbookpage`.

### [Properties](#___top "click to go to top of document")

Each perfect bound book page has the following properties with full details found at [PerfectBoundBookPageProperties](/developer/PerfectBoundBookPageProperties.html):

id

The unique id for this perfect bound book page. It will never change.

wing\_object\_type

`largeperfectboundbookpage`

date\_created

A date when the perfect bound book page was created.

date\_updated

A date when the perfect bound book page was last updated.

name

The name the perfect bound book page is known by.

sequence\_number

An integer between 1 and 20. The order this page should be included. Another way to think of it is the page number.

booklet\_id

A [PerfectBoundBook](/developer/PerfectBoundBook.html) id. The unique id of a booklet that this perfect bound book page belongs to.

image\_id

A [File](/developer/File.html) id. ets the image of the perfect bound book page. The ID is from a [File](/developer/File.html). If a image\_id is specified, then an extra property called `image` will be added which will briefly describe the image.

has\_proofed\_image

A boolean indicating whether the image has been verified by the user to be correct.

### [Related Objects](#___top "click to go to top of document")

booklet

The [Booklet](/developer/Booklet.html) that this perfect bound book page is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate perfect bound book pages.

## [Create](#___top "click to go to top of document")

```
 POST /api/perfectboundbookpage
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

booklet\_id

Required.

sequence\_number

Optional.

image\_id

Optional.

has\_proofed\_image

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Setup",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/perfectboundbookpage/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /perfectboundbookpage/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/perfectboundbookpage/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_related\_objects

Optional. See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) and **Related Objects** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Setup",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="perfectboundbookpage-properties"></a>

## PerfectBoundBookPage Properties

> Source file: `PerfectBoundBookPageProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| book\_id | Everyone | Owner | Yes | char |  | No |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| has\_proofed\_image | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| image\_id | Owner | Owner | No | char |  | Yes |
| is\_blank | Owner | Owner | No | tinyint | 0 | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| sequence\_number | Owner | Owner | No | smallint | 1 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="perfectboundbook-properties"></a>

## PerfectBoundBook Properties

> Source file: `PerfectBoundBookProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| has\_proofed\_spine\_image | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |
| spine\_image\_id | Owner | Owner | No | char |  | Yes |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="perl-example"></a>

## Perl Example

> Source file: `PerlExample.html`

-   [Perl Example](#Perl_Example)
    -   [Get a Session](#Get_a_Session)
    -   [Fetch My Account Info](#Fetch_My_Account_Info)
    -   [Upload a File](#Upload_a_File)
    -   [Search Games](#Search_Games)
-   [Perl Client Wrapper](#Perl_Client_Wrapper)

**NOTE:** Get an [APIKey](/developer/APIKey.html).

## [Get a Session](#___top "click to go to top of document")

```
 #!/usr/bin/env perl

 use Modern::Perl;
 use LWP::UserAgent;
 use HTTP::Request::Common;
 use JSON;
 use Data::Dumper;
 
 my $response = LWP::UserAgent->new->request( POST 'https://www.thegamecrafter.com/api/session', [
    username    => 'joe',
    password    => 'abc123',
    api_key_id  => '', # get your own
 ]);

 my $result = from_json($response->decoded_content); 
 if ($response->is_success) {
    say 'Session ID: ', $result->{result}{id};
 }
 else {
    die 'Error: ', $result->{error}{message};
 }

 my $session = $result->{result};
```

## [Fetch My Account Info](#___top "click to go to top of document")

```
 my $response = LWP::UserAgent->new->request( GET 'https://www.thegamecrafter.com/api/user/'.$session->{user_id}, [
    session_id  => $session->{id},
 ]);

 my $result = from_json($response->decoded_content); 
 if ($response->is_success) {
    say Dumper($result->{result});
 }
 else {
    die 'Error: ', $result->{error}{message};
 }
 
 my $user = $result->{result};
```

## [Upload a File](#___top "click to go to top of document")

```
 my $response = LWP::UserAgent->new->request( POST 'https://www.thegamecrafter.com/api/file', [
    name        => 'image.jpg',
    file        => \'/path/to/file.jpg',
    folder_id   => $user->{root_folder_id},
    session_id  => $session->{id},
 ]);

 my $result = from_json($response->decoded_content); 
 if ($response->is_success) {
    say Dumper($result->{result});
 }
 else {
    die 'Error: ', $result->{error}{message};
 }
```

## [Search Games](#___top "click to go to top of document")

```
 my $response = LWP::UserAgent->new->request( GET 'https://www.thegamecrafter.com/api/game', [
    q           => 'Steampunk',
    session_id  => $session->{id}, # optional
 ]);

 my $result = from_json($response->decoded_content); 
 if ($response->is_success) {
    say Dumper($result->{result});
 }
 else {
    say 'Error: ', $result->{error}{message};
 }
```

Session ID is optional for this.

### [Perl Client Wrapper](#___top "click to go to top of document")

You can make this even easier on yourself by using the Perl client wrapper for TGC: [https://metacpan.org/pod/TheGameCrafter::Client](https://metacpan.org/pod/TheGameCrafter::Client)

```
 use TheGameCrafter::Client;
 
 my $session = tgc_post('session', { username => 'me', password => '123qwe', api_key_id => 'abcdefghijklmnopqrztuz' });

 my $user = tgc_get('user/'.$session->{user_id}, {session_id => $session->{id}});
 
 my $file = tgc_post('file', {name => 'image.jpg', file => \'/path/to/file.jpg', folder_id => $user->{root_folder_id}, session_id => $session->{id}});
 
 my $games = tgc_get('game', {q => 'Steampunk', session_id => $session->{id}});
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="php-example"></a>

## PHP Example

> Source file: `PhpExample.html`

**NOTE:** Get an [APIKey](/developer/APIKey.html).

This code will allow you to get a session, fetch account info, and upload a file. From it you should be able to discern how to work with the entire TGC API.

```
 <?php
 
 // reading in secret info via environment variables so I don't accidentally share it with anyone
 $username = $_ENV['TGC_USER'];
 $password = $_ENV['TGC_PASS'];
 $apikey = $_ENV['TGC_API_KEY'];
 
 
 // create a session
 $session = post('session', array(
  'username'    => $username,
  'password'    => $password,
  'api_key_id'  => $apikey,
 ));
 $session_id = $session->{'result'}->{'id'};
 
 // fetch info about the user
 $user = get('user/'.$session->{'result'}->{'user_id'}, array(
  'session_id'  => $session_id,
 ));
 
 // upload a file to the filesystem
 $file = post('file', array(
  'session_id'  => $session_id,
  'file'                => '@/Users/jt/Desktop/jt.jpg', // note the @ symbol at the start of the file path
  'name'                => 'jt.jpg',
  'folder_id'   => $user->{'result'}->{'root_folder_id'},
 ));
 
 // dump what we know about the file
 var_dump($file);
 
 
 // execute a POST operation to TGC's web services and return an object
 function post($url, $params) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,'https://www.thegamecrafter.com/api/'.$url);
        curl_setopt($ch, CURLOPT_POST,1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
         curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
        $result=curl_exec($ch);
        if(curl_errno($ch)) {  //catch if curl error exists and show it
                echo 'Curl error: ' . curl_error($ch);
                curl_close ($ch);
         }
        else {
                curl_close ($ch);
                return json_decode($result);
         }
 }
 
 // execute a GET operation to TGC's web services and return an object
 function get($url, $params) {
        $query = '?';
         if ($params) {
                foreach($params as $key=>$value) {
                        $query .= $key.'='.$value.'&';
                 }
         }
         $query = trim($query, '&');
        $ch = curl_init();
        $timeout = 5;
        curl_setopt($ch, CURLOPT_URL, 'https://www.thegamecrafter.com/api/'.$url.$query);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        $result = curl_exec($ch);
        if (curl_errno($ch)) {  //catch if curl error exists and show it
                echo 'Curl error: ' . curl_error($ch);
                curl_close ($ch);
         }
        else {
                curl_close ($ch);
                return json_decode($result);
         }
 }
 
 
 ?>
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="python-example"></a>

## Python Example

> Source file: `PythonExample.html`

**NOTE:** Get an [APIKey](/developer/APIKey.html).

This code will allow you to get a session, fetch account info, upload a file, and search games. From it you should be able to discern how to work with the entire TGC API.

```
 #!/usr/bin/env python3
 """The Game Crafter API client script."""
 
 #  Create a .env file in the same directory:
 
 #  TGC_API_KEY_ID=your_api_key_here
 #  TGC_USERNAME=your_username_here
 #  TGC_PASSWORD=your_password_here
 
 #  Install dependencies:
 
 #  pip install httpx python-dotenv
 
 
 import os
 import sys
 from pathlib import Path
 from typing import Any
 
 import httpx
 from dotenv import load_dotenv
 
 
 def get_env_var(name: str) -> str:
     """Get a required environment variable or exit with error."""
     value = os.getenv(name)
     if not value:
         print(f"Error: Missing required environment variable: {name}")
         sys.exit(1)
     return value
 
 
 def create_session(client: httpx.Client, api_url: str, api_key_id: str, username: str, password: str) -> dict[str, Any]:
     """Authenticate and create a new session."""
     response = client.post(
         f"{api_url}/session",
         params={"api_key_id": api_key_id, "username": username, "password": password},
     )
     response.raise_for_status()
     return response.json()["result"]
 
 
 def get_user_info(client: httpx.Client, api_url: str, session_id: str, user_id: str) -> dict[str, Any]:
     """Fetch user account information."""
     response = client.get(
         f"{api_url}/user/{user_id}",
         params={"session_id": session_id},
     )
     response.raise_for_status()
     return response.json()["result"]
 
 
 def upload_file(
     client: httpx.Client,
     api_url: str,
     session_id: str,
     folder_id: str,
     file_path: Path,
 ) -> dict[str, Any]:
     """Upload a file to a folder."""
     with file_path.open("rb") as f:
         response = client.post(
             f"{api_url}/file",
             params={
                 "name": file_path.name,
                 "folder_id": folder_id,
                 "session_id": session_id,
             },
             files={"file": (file_path.name, f, "application/octet-stream")},
         )
     response.raise_for_status()
     return response.json()["result"]
 
 
 def search_games(
     client: httpx.Client,
     api_url: str,
     query: str,
     session_id: str | None = None,
 ) -> list[dict[str, Any]]:
     """Search for games by query string."""
     params: dict[str, str] = {"q": query}
     if session_id:
         params["session_id"] = session_id
     response = client.get(f"{api_url}/game", params=params)
     response.raise_for_status()
     result = response.json()["result"]
     return result.get("items", [])
 
 
 def main() -> None:
     """Main entry point."""
     load_dotenv()
 
     api_url = "https://www.thegamecrafter.com/api"
     api_key_id = get_env_var("TGC_API_KEY_ID")
     username = get_env_var("TGC_USERNAME")
     password = get_env_var("TGC_PASSWORD")
 
     try:
         with httpx.Client() as client:
             # Get a session
             print("--- Creating session ---")
             session = create_session(client, api_url, api_key_id, username, password)
             print(f"Session ID: {session['id']}")
             print(f"User ID: {session['user_id']}")
             print("------------------------")
 
             # Fetch account info
             print("--- Fetching account info ---")
             user = get_user_info(client, api_url, session["id"], session["user_id"])
             print(f"Username: {user.get('username')}")
             print(f"Email: {user.get('email')}")
             print("-----------------------------")
 
             # Search for games
             print("--- Searching games ---")
             games = search_games(client, api_url, "Steampunk", session["id"])
             print(f"Found {len(games)} results")
             for game in games[:5]:  # Show first 5
                 print(f"  - {game.get('name')}")
             print("-----------------------")
 
             # Upload a file
             root_folder_id = user.get("root_folder_id")
             if root_folder_id:
                 print("--- Uploading file ---")
                 file_result = upload_file(
                     client, api_url, session["id"], root_folder_id, Path("example.png")
                 )
                 print(f"Uploaded: {file_result.get('name')}")
                 print("----------------------")
 
     except httpx.HTTPStatusError as e:
         print(f"HTTP error {e.response.status_code}: {e.response.text}")
         sys.exit(1)
     except httpx.RequestError as e:
         print(f"Request error: {e}")
         sys.exit(1)
     except FileNotFoundError as e:
         print(f"File not found: {e}")
         sys.exit(1)
 
 
 if __name__ == "__main__":
     main()
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="receipt"></a>

## Receipt

> Source file: `Receipt.html`

-   [Receipt](#Receipt)
-   [Properties](#Properties)
-   [Relationships](#Relationships)
-   [Related Objects](#Related_Objects)
-   [Includes](#Includes)
-   [Receipt Methods](#Receipt_Methods)
    -   [Fetch Receipt](#Fetch_Receipt)
    -   [Cancel Receipt](#Cancel_Receipt)

Each receipt is accessed via `/api/receipt`.

### [Properties](#___top "click to go to top of document")

Complete details in [OrderProperties](/developer/OrderProperties.html) and [OrderItemProperties](/developer/OrderItemProperties.html).

id

The unique id for this receipt. It will never change.

wing\_object\_type

`receipt`.

name

A label to identify an receipt. This is a holdover in case the cart or wishlist the receipt was created from was named.

order\_number

A unique integer attached to this receipt. Used by support personnel to identify an receipt in case of trouble.

user\_id

A [User](/developer/User.html) id. The unique id of the user attached to the receipt.

shipping\_address\_id

An [Address](/developer/Address.html) id. The unique id of an address.

shipping\_address

A hash of address properties associated with the `shipping_address_id`. See Receipt Related Objects below for details.

shipping\_method

The shipping method being used to ship this order.

shipping\_cost

The amount added to the receipt to account for the cost of shipping.

subtotal

The cost of all the items attached to the receipt before taxes, shop credit, and shipping are applied.

taxes

The amount of taxes to be paid to purchase this receipt.

total

The total cost of the receipt including taxes and shipping.

payment\_method

The method used to pay for the receipt.

payment\_transaction\_id

If the payment method provided a transaction id it will be provided here.

payment\_status

If the payment method provided a status code that will be provided here.

payment\_message

If the payment method provided a status message that will be provided here.

ip\_address

The IP address of the user at the time of receipt creation.

date\_created

A date when the receipt was created.

date\_updated

A date when the receipt's account was last updated.

refunded\_amount

A dollar amount of credits applied to this receipt.

refunded

A boolean indicating that the entire order was marked refunded.

shop\_credit\_used

A dollar amount of shop credit applied to the `total` of this receipt.

grand\_total

The `total` minus `shop_credit_used` minus `refunded_amount`.

notes

If an receipt has been held, or some adjustment needs to be made to an receipt, an admin will make a note of it here.

### [Relationships](#___top "click to go to top of document")

See ["Relationships" in Intro](/developer/Intro.html#Relationships) for details.

items

An array of items that are currently placed in the receipt

```
      "items" : [
         {
            "quantity" : "1",
            "name" : "Prison Break",
            "price_each" : "0.8900",
            "id" : "563C57FE-47F0-11E2-836F-50F9C28E391D"
            ...
         }
         ...
    ]
```

Please see [Game](/developer/Game.html) and [Part](/developer/Part.html) for more details about what items may contain.

shipments

An array of [Shipment](/developer/Shipment.html)s associated with this receipt.

The user attached to this cart, if any.

### [Related Objects](#___top "click to go to top of document")

See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) for details.

user

The [User](/developer/User.html) attached to this receipt. Will return:

```
 {
    "shop_credit" : "0.00",
    "username" : "andy",
    "id" : "xxx",
    ...
 }
```

shipping\_address

The [Address](/developer/Address.html) attached to the receipt that the receipt should be shipped to. Will return:

```
 {
    "id" : "xxx",
    "name" : "Andy Dufresne",
    "company" : "Shawshank Prison",
    "address1" : "123 Prison Lane",
    "address2" : "Shawshank Prison Library",
    "city" : "Portland",
    "state" : "Maine",
    "postal_code" : "04101",
    "country" : "US",
    "phone_number" : "207-874-8300"
 }
```

### [Includes](#___top "click to go to top of document")

shipments

Returns a summary of [Shipment](/developer/Shipment.html)s associated with this receipt in the receipts data set rather than as a separate request in the Relationships above.

### [Receipt Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate receipts.

## [Fetch Receipt](#___top "click to go to top of document")

```
 GET /api/receipt/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "id" : "xxx",
   "order_number" : "4301",
   ...
 }
```

## [Cancel Receipt](#___top "click to go to top of document")

```
 POST /api/receipt/xxx/cancel
```

Cancels the receipt and generates a refund to store credit. You must provide a reason for the cancellation.

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

cancel\_reason

Required. The reason this order is being cancelled. For example, "I want to make some changes to the order.", "I no longer want these items.", "The estimated ship date is too long."

Returns:

```
 {
   "success" : 1,
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="review-properties"></a>

## Review Properties

> Source file: `Review.html`

-   [Review Properties](#Review_Properties)
-   [Related Objects](#Related_Objects)
-   [Review Methods](#Review_Methods)
    -   [Create Review](#Create_Review)
    -   [Update Review](#Update_Review)
    -   [Delete Review](#Delete_Review)
    -   [Fetch Review](#Fetch_Review)
    -   [List Reviews](#List_Reviews)

Each review has the following properties and is accessed via `/api/review`. Complete details in [ReviewProperties](/developer/ReviewProperties.html).

id

The unique id for this review. It will never change.

wing\_object\_type

`review`.

date\_created

A date when the review was created.

date\_updated

A date when the review was last updated.

review

A block of text, not to exceed 65000 characters.

rating

An integer between 1 and 5, 5 being best.

game\_id

A [Game](/developer/Game.html) id. The unique id of a [Game](/developer/Game.html) that this review is about.

user\_id

A [User](/developer/User.html) id. The unique id of a [User](/developer/User.html) that created this review.

### [Related Objects](#___top "click to go to top of document")

user

The [User](/developer/User.html) that this review is created by.

game

The [Game](/developer/Game.html) that this review is about.

### [Review Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate reviews.

## [Create Review](#___top "click to go to top of document")

```
 POST /api/review
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

user\_id

Required.

game\_id

Required.

rating

Optional.

review

Optional.

Returns:

```
 {
   "id" : "xxx",
   "rating" : 3,
   ...
 }
```

## [Update Review](#___top "click to go to top of document")

```
 PUT /api/review/xxx
```

See **Create Review** for details.

## [Delete Review](#___top "click to go to top of document")

```
 DELETE /api/review/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch Review](#___top "click to go to top of document")

```
 GET /api/review/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Review Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "rating" : 3,
   ...
 }
```

## [List Reviews](#___top "click to go to top of document")

```
 GET /api/review
```

Returns a list of reviews sorted by date created.

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="review-properties"></a>

## Review Properties

> Source file: `ReviewProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| fun | Everyone | Owner | No | tinyint | 0 | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| high\_replay\_value | Everyone | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| nice\_artwork | Everyone | Owner | No | tinyint | 0 | No |
| own\_it | Everyone | Owner | No | tinyint | 0 | No |
| played\_it | Everyone | Owner | No | tinyint | 0 | No |
| priced\_well | Everyone | Owner | No | tinyint | 0 | No |
| rating | Everyone | Owner | No | tinyint | 0 | No |
| review | Everyone | Owner | No | text |  | Yes |
| total\_score | Everyone | Read Only | No | tinyint | 0 | No |
| user\_id | Everyone | Owner | Yes | char |  | No |
| well\_written\_rules | Everyone | Owner | No | tinyint | 0 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="ruby-example"></a>

## Ruby Example

> Source file: `RubyExample.html`

-   [Ruby Example](#Ruby_Example)
    -   [Using HTTParty](#Using_HTTParty)
    -   [Using Rest Client](#Using_Rest_Client)

**NOTE:** Get an [APIKey](/developer/APIKey.html).

This code will allow you to get a session, fetch account info, upload a file, and search games. From it you should be able to discern how to work with the entire TGC API.

## [Using HTTParty](#___top "click to go to top of document")

```
 #!/usr/bin/env ruby
 
 # This Ruby client for The Game Crafter is more involved than simply using HTTParty standalone.
 # With this code, you can expand upon the client and easily add your own encapsulated functionality!
 # It also shows some good Ruby design practices if you're still new to the language.
 
 # You'll need at least Ruby 1.9.3 or so and Bundler.
 
 # make it easy to do multi-part requests
 require 'httmultiparty'
 
 module TheGameCrafter
   # wrap up our basic client actions in a class
   class Client
     include HTTMultiParty
 
     base_uri 'https://www.thegamecrafter.com/api'.freeze
 
     # we set these in the initializer...
     attr_accessor :api_key, :username, :password
 
     # these get set after #get_session!
     attr_reader :user_id, :session_id
 
     def initialize(username, password, api_key)
       @username, @password, @api_key = username, password, api_key
     end
 
     # get a session and user id
     def get_session!
       response = post '/session', query: { 'username' => username, 'password' => password, 'api_key_id' => api_key }
 
       @session_id = response['id']
       @user_id = response['user_id']
     end
 
     # get user account info
     def account_info
       get '/user/' + @user_id, query: default_query_params
     end
 
     # upload a file
     # provide an IO that responds to #path. A File is good!
     def upload_file(io, folder_id)
       post '/file', query: { 'name' => File.basename(io.path), 'folder_id' => folder_id, 'file' => io }.merge(default_query_params)
     end
 
     # search for games
     def search_games(query)
       get '/game', query: { 'q' => query }.merge(default_query_params)
     end
 
     private
     # wrappers around HTTParty to handle TGC responses automagically
     def post(*args)
       response = self.class.post *args
       response.parsed_response['result']
     end
 
     def get(*args)
       response = self.class.get *args
       response.parsed_response['result']
     end
 
     # we use this a lot. factor it out.
     def default_query_params
       { 'session_id' => session_id }
     end
   end
 end
 
 client = TheGameCrafter::Client.new('username', 'password', 'api key')
 
 client.get_session!
 
 account_info = client.account_info
 
 p client.upload_file File.open('file.jpg'), account_info['root_folder_id']
 
 p client.search_games "Steampunk"
```

## [Using Rest Client](#___top "click to go to top of document")

```
 require 'rest-client'
 require 'json'
 
 url="https://www.thegamecrafter.com/api"
 api_key_id = '' #replace with yours
 username = '' #replace with yours
 password = '' #replace with yours
 root_folder_id = '' #replace with yours
 
 #Get a Session
 params = {:api_key_id => api_key_id, :username => username, :password => password}
 response = RestClient.post("#{url}/session", params)
 puts "HTTP Success? #{response.code == 200}"
 puts "Session response: #{response}"
 session = JSON.parse(response)['result']
 
 #Fetch My Account Info
 params = {:session_id => session['id']}
 response = RestClient.get("#{url}/user/#{session['user_id']}", params)
 puts "Account info response: #{response}"
 user = JSON.parse(response)['result']
 
 #Upload a File
 params = {
   :name => 'example.png',
   :file => File.new('example.png'),
   :folder_id => root_folder_id,
   :session_id => session['id']
 }
 response = RestClient.post("#{url}/file", params)
 puts "HTTP Success? #{response.code == 200}"
 puts "Upload response: #{response}"
 
 #Search Games
 params = {
   :q => 'Steampunk',
   :session_id => session['id'] #optional
 }
 response = RestClient.get("#{url}/game", params)
 puts "HTTP Success? #{response.code == 200}"
 results = JSON.parse(response)['result'] 
 puts "There are #{results.size} results"
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="score-pad"></a>

## Score Pad

> Source file: `ScorePad.html`

-   [Score Pad](#Score_Pad)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

Accessible via `/api/scorepad`.

### [Identities](#___top "click to go to top of document")

SmallScorePad

MediumScorePad

LargeScorePad

LargeScorePadColor

MediumScorePadColor

SmallScorePadColor

### [Properties](#___top "click to go to top of document")

Each score pad has the following properties. Complete details in [ScorePadProperties](/developer/ScorePadProperties.html).

id

The unique id for this score pad. It will never change.

identity

The style of score pad you want.

wing\_object\_type

`scorepad`

date\_created

A date when the score pad was created.

date\_updated

A date when the score pad was last updated.

name

The name the score pad is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this score pad belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a score pad to be included in the game.

image\_id

A [File](/developer/File.html) id. Sets the image that will be printed on the score pad. The ID is from a [File](/developer/File.html). If a image\_id is specified, then an extra property called `image` will be added which will briefly describe the image.

has\_proofed\_image

A boolean indicating whether the image has been verified by the user to be correct.

page\_count

Must be one of `40`, `60`, `80`, or `100`. The number of pages that will be included in this score pad.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this score pad is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate score pades.

## [Create](#___top "click to go to top of document")

```
 POST /scorepad
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

image\_id

Optional.

page\_count

Optional.

has\_proofed\_outside

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Box",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /scorepad/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /scorepad/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /scorepad/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_related\_objects

Optional. See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) and **Related Objects** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Box",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="scorepad-properties"></a>

## ScorePad Properties

> Source file: `ScorePadProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| back\_id | Owner | Owner | No | char |  | Yes |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| face\_id | Owner | Owner | No | char |  | Yes |
| game\_id | Everyone | Owner | Yes | char |  | No |
| has\_proofed\_back | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_face | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| page\_count | Everyone | Owner | No | int | 60 | No |
| quantity | Everyone | Owner | No | int | 1 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="searching"></a>

## Searching

> Source file: `Search.html`

-   [Searching](#Searching)
    -   [Departments](#Departments)
-   [POD ERRORS](#POD_ERRORS)

We use a search engine called Algolia [https://www.algolia.com](https://www.algolia.com) for our data. This allows you to perform fast and complex searches that aren't possible with our Rest API.

To access the Algolia search engine you'll need 3 bits of information:

First you'll need to know the index name, which is `products`. This index contains everything for sale at The Game Crafter.

Second, our application ID is `YSU8J82BMW`.

Third, our public key is `d2a6b49be30117ce58fd5dfd7500cb93`.

Algolia's API documentation can be found here: [https://www.algolia.com/doc/](https://www.algolia.com/doc/).

And they have a UI builder that can be found here: [https://www.algolia.com/products/instantsearch/](https://www.algolia.com/products/instantsearch/).

## [Departments](#___top "click to go to top of document")

The search index is broken into "departments". To help narrow down your search, use the following settings:

Parts

```
    "department":"parts"
```

Games

```
    "department":"games"
```

Design Assets

```
    "department":"design-assets"
```

Tarot

```
    "department":"tarot"
```

Bargains

```
    "department":"bargains"
```

### [POD ERRORS](#___top "click to go to top of document")

Hey! **The above document had some coding errors, which are explained below:**

Around line 21:

'=item' outside of any '=over'

\=over without closing =back

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="session-properties"></a>

## Session Properties

> Source file: `Session.html`

-   [Session Properties](#Session_Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Login](#Login)
    -   [Logout](#Logout)
    -   [View Session Details](#View_Session_Details)
    -   [Request a Single Sign On Session](#Request_a_Single_Sign_On_Session)

Each session is accessed via `/api/session` and has the following properties:

id

The unique id of the session. It will never change.

user\_id

The uniq id of the user attached to this session.

extended

An integer representing the number of times this session has been extended by interacting with the server.

ip\_address

The IP address from which this session was created.

### [Related Objects](#___top "click to go to top of document")

user

The [User](/developer/User.html) attached to this session.

### [Methods](#___top "click to go to top of document")

In order to get more than the publicly available information, you'll need to authenticate and get a session id. The methods detailed herein will help you with that.

## [Login](#___top "click to go to top of document")

Authenticates a user by username and password.

```
 POST /api/session
```

**NOTE:** Only developers can log in using this interface. To have regular users log in through your application you must use the Single Sign On interface.

username

The username of a user already in the system. Required.

password

The corresponding password of the user who's username was specified. Required.

api\_key\_id

See [APIKey](/developer/APIKey.html). Required.

Returns:

```
 {
   "id" : "xxx",
   "wing_object_type" : "session",
   "user_id" : "xxx",
   ...
 }
```

See [User](/developer/User.html) for complete details about what's contained in a user object.

## [Logout](#___top "click to go to top of document")

Destroys a session, to ensure no one else can use it.

```
 DELETE /api/session/xxx
```

Returns:

```
 {
   "success" : 1
 }
```

## [View Session Details](#___top "click to go to top of document")

Returns the properties of a session.

```
 GET /api/session/xxx
```

Returns:

```
 {
   "id" : "xxx",
   "wing_object_type" : "session",
   "user_id" : "xxx"
 }
```

## [Request a Single Sign On Session](#___top "click to go to top of document")

Using an [APIKey](/developer/APIKey.html) you can ask for permissions so that you can authenticate on behalf of a user through single-sign-on (SSO). Read the details in [APIKey](/developer/APIKey.html) first. Then you can request a session using your `sso_id` like so:

```
 POST /api/session/sso/xxx
```

private\_key

The private key generated when you create an [APIKey](/developer/APIKey.html)

Returns:

```
 {
   "id" : "xxx",
   "wing_object_type" : "session",
   "user_id" : "xxx",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="shipment"></a>

## Shipment

> Source file: `Shipment.html`

-   [Shipment](#Shipment)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Fetch](#Fetch)

Each shipment has the following properties and is accessed via `/api/shipment`.

### [Properties](#___top "click to go to top of document")

Complete details in [ShipmentProperties](/developer/ShipmentProperties.html).

id

The unique id for this shipment. It will never change.

wing\_object\_type

`shipment`.

tracking\_number

The tracking number provided by the carrier to track this shipment.

tracking\_url\_provider

The tracking URL from the carrier.

### [Related Objects](#___top "click to go to top of document")

See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) for details.

receipt

A [Receipt](/developer/Receipt.html).

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate shipments.

## [Fetch](#___top "click to go to top of document")

```
 GET /api/shipment/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "id" : "xxx",
   "tracking_number" : "4301",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="shipment-properties"></a>

## Shipment Properties

> Source file: `ShipmentProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| address1 | Owner | Owner | No | varchar |  | No |
| address2 | Owner | Owner | No | varchar |  | Yes |
| billing\_account | Owner | Owner | No | varchar | 0999A3 | No |
| billing\_type | Owner | Owner | No | varchar | SENDER | No |
| billing\_zip | Owner | Owner | No | varchar | 53716 | No |
| city | Owner | Owner | No | varchar |  | No |
| company | Owner | Owner | No | varchar |  | Yes |
| country | Owner | Owner | No | char | US | No |
| customs\_content\_type | Owner | Owner | Yes | varchar | MERCHANDISE | No |
| customs\_eel\_pfc | Owner | Owner | Yes | varchar | NOEEI\_30\_37\_a | No |
| customs\_incoterm | Owner | Owner | Yes | varchar | DDU | No |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| email | Owner | Owner | No | varchar |  | Yes |
| height | Everyone | Owner | No | float | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| label\_url | Owner | Owner | No | mediumtext |  | Yes |
| length | Everyone | Owner | No | float | 0 | No |
| name | Owner | Owner | No | varchar |  | No |
| phone\_number | Owner | Owner | No | varchar |  | Yes |
| postal\_code | Owner | Owner | No | varchar |  | No |
| printed | Owner | Read Only | No | tinyint | 0 | No |
| rate\_category | Owner | Owner | Yes | varchar | shippo | No |
| receipt\_id | Everyone | Owner | No | char |  | Yes |
| reference | Everyone | Owner | Yes | varchar |  | No |
| servicelevel\_token | Owner | Owner | No | varchar |  | Yes |
| shipped | Owner | Read Only | No | tinyint | 0 | No |
| shipping\_container | Owner | Owner | No | varchar |  | Yes |
| shipping\_cost | Owner | Owner | No | float | 0 | No |
| shipping\_method | Owner | Owner | No | varchar |  | Yes |
| shippo\_rate\_object\_id | Owner | Owner | No | varchar |  | Yes |
| shippo\_refund\_object\_id | Owner | Owner | No | varchar |  | Yes |
| shippo\_shipment\_object\_id | Owner | Owner | No | varchar |  | Yes |
| shippo\_transaction\_object\_id | Owner | Owner | No | varchar |  | Yes |
| state | Owner | Owner | No | varchar |  | Yes |
| tracking\_number | Everyone | Owner | No | varchar |  | Yes |
| tracking\_url\_provider | Everyone | Owner | No | mediumtext |  | Yes |
| void\_rejected | Everyone | Read Only | No | tinyint | 0 | No |
| void\_requested | Everyone | Read Only | No | tinyint | 0 | No |
| voided | Everyone | Read Only | No | tinyint | 0 | No |
| warehouseproject\_id | Everyone | Owner | No | char |  | Yes |
| weight | Everyone | Owner | No | float | 0 | No |
| width | Everyone | Owner | No | float | 0 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="sku-methods"></a>

## Sku Methods

> Source file: `Sku.html`

-   [Sku Methods](#Sku_Methods)
    -   [Fetch Sku](#Fetch_Sku)

The methods used to fetch skus.

## [Fetch Sku](#___top "click to go to top of document")

Both [Game](/developer/Game.html)s and [Part](/developer/Part.html)s can be Skus. Depending on the sku used in the URI this method will return a different `wing_object_type` for each sku.

```
 GET /api/sku/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Prison Break",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="status"></a>

## Status

> Source file: `Status.html`

-   [Status](#Status)
-   [Methods](#Methods)
    -   [Vitality](#Vitality)
    -   [Basic Site Stats](#Basic_Site_Stats)
    -   [Queue](#Queue)

The status methods will return overall information about the site. Each method contains a different set of information.

### [Methods](#___top "click to go to top of document")

## [Vitality](#___top "click to go to top of document")

Is the site alive?

```
 GET /api/status
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "datetime" : "2012-09-09T14:26:20Z"
 }
```

## [Basic Site Stats](#___top "click to go to top of document")

```
 GET /api/status/site
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "user_count" : "5",
   "published_game_count" : "1",
   "parts_count" : "577"
 }
```

## [Queue](#___top "click to go to top of document")

```
 GET /api/status/queue
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
      "production_per_day_by_month" : 0,
      "production_today" : 0,
      "production_per_day_by_week" : 0,
      "duration" : "8937",
      "size" : "16"
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="test"></a>

## Test

> Source file: `Test.html`

-   [Test](#Test)
-   [Methods](#Methods)
    -   [GET](#GET)
    -   [PUT](#PUT)
    -   [POST](#POST)
    -   [DELETE](#DELETE)
-   [Parameters](#Parameters)
-   [Results](#Results)

Allows you to test your service calls when you're just getting started.

### [Methods](#___top "click to go to top of document")

## [GET](#___top "click to go to top of document")

```
 GET /api/_test
```

## [PUT](#___top "click to go to top of document")

```
 PUT /api/_test
```

## [POST](#___top "click to go to top of document")

```
 POST /api/_test
```

## [DELETE](#___top "click to go to top of document")

```
 DELETE /api/_test
```

### [Parameters](#___top "click to go to top of document")

You can pass all kinds of things to the test. You can test an upload:

```
 curl -X POST -F file=@file.jpg https://www.thegamecrafter.com/api/_test
```

Or any parameters you wish:

```
 curl https://www.thegamecrafter.com/api/_test?foo=bar
```

Or extend the URL path:

```
 curl https://www.thegamecrafter.com/api/_test/this/custom/path
```

### [Results](#___top "click to go to top of document")

The result you get back will help you discover whether things went according to plan. Here's an example:

```
 GET /api/_test/me?foo=bar

 {
   "result" : {
      "params" : {
         "foo" : "bar"
      },
      "method" : "GET",
      "path" : "/api/_test/me"
   }
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="tgc-information"></a>

## TGC Information

> Source file: `TGC.html`

-   [TGC Information](#TGC_Information)
    -   [Printed Component Schema List](#Printed_Component_Schema_List)
        -   [Printed Component Schema Properties](#Printed_Component_Schema_Properties)
    -   [Component Info](#Component_Info)
        -   [Printed Component Properties](#Printed_Component_Properties)
    -   [Detailed Component Info](#Detailed_Component_Info)
    -   [/api/tgc/componentgroups.](#%2Fapi%2Ftgc%2Fcomponentgroups.)
        -   [Component Group properties](#Component_Group_properties)
    -   [Component Group Info](#Component_Group_Info)

This branch of the API deals with meta information about TGC products.

## [Printed Component Schema List](#___top "click to go to top of document")

```
 GET /api/tgc/products
```

If you want to build an interface for uploading to TGC's printed compoonents inside of a game, then this is the API you've been looking for. Each component in the system will be returned in this result set, and it should be cached as it doesn't change that often.

```
 {
   "result" : [
      {
         "categories" : [
            "Boards",
            "Folding"
         ],
         "child" : {
            "create_api" : "/api/twosided",
            "name" : "Accordion Board",
            "parent_id" : "set_id"
         },
         "create_api" : "/api/twosidedset",
         "identity" : "AccordionBoard",
         "name" : "Accordion Board Set",
         "sides" : [
            {
               "label" : "Face",
               "overlay" : "/overlays/accordionboard.png",
               "field" : "face"
            },
            {
               "label" : "Back",
               "field" : "back",
               "overlay" : "/overlays/accordionboard.png"
            }
         ],
         "size" : { "pixels" : [2475, 4875] },
         "_relationships" : { "self" : "/api/tgc/products/AcordionBoard" },
      },
      ...
    }
  ],
 }
```

### [Printed Component Schema Properties](#___top "click to go to top of document")

The individual components have the following properties:

categories

An array where the first element is a broad category to group components by, and each subsequent element gets more specific.

child

An optional object. If it exists it means this component is a set with child elements, like a deck with cards, or a book with pages, or a set with items.

create\_api

A partial URL where you can do a `POST` to create a child of this object.

name

The human readable name of this child object.

parent\_id

The name of the parent id for this child. Will be one of `deck_id`, `booklet_id`, `book_id`, and `set_id`.

create\_api

A partial URL where you can do a `POST` to create this object.

identity

This must be passed to the `create_api` as it identifies this component to The Game Crafter.

name

The human readable name of this component.

sides

An array of the printed sides of the component. Each element in the array will also have these properties:

field

The field name for this side. It will be represented in several different forms. For example if it is called `face` then it will have a `face_id` and a `has_proofed_face` and a `face` object.

label

A human readable label for this side.

overlay

A partial URL to a transparent image that youc an overlay on top of the image you are uploading for proofing purposes.

size

A hash with an element called `pixels` pointing to an array where the first element is the width of the component and te second is the height, both measured in pixels.

## [Component Info](#___top "click to go to top of document")

**Depricated**: Use the Component Schema API. This one will likely remain for a long time, but it will no longer be updated.

```
 GET /api/tgc/printedcomponents
```

This endpoint returns a JSON hash of printed game components. Each key in the hash is the class name for the printed component, and the properties for the component are in a sub hash:

```
 {
   "result" : {
      "PokerDeck" : {
         "cut_type" : "steel",
         "photo_credit" : "Time Barons",
         "finished_size" : "2.5 x 3.5 in",
         "name" : "Poker Deck",
         "description" : "Poker cards are one of two defacto standard sizes around the world, the other being Bridge cards. We also have a line of poker card sized tuck boxes that are great for use with poker cards.",
         "size" : "825x1125",
         "group" : "decks",
         "card_class" : "PokerCard",
         "price_per_sheet" : "1.66",
         "notes" : "",
         "photo_link" : null,
         "weight" : null,
         "count_per_sheet" : 18,
         "material" : "305gsm black-core matt card stock",
         "method_name" : "pokerdecks",
         "templates" : {
            "Photoshop" : "poker-card.psd",
            "PNG" : "poker-card.png",
            "Illustrator" : "poker-card.ai",
            "SVG" : "poker-card.svg"
         }
      },
      [...]
    },
  },
```

### [Printed Component Properties](#___top "click to go to top of document")

cut\_type

How this printed component is cut. For example, steel cut, or laser cut.

photo\_credit

Where does the default product photo come from?

description

Describes the Printed Component.

size

The size of the component as a string. "width"x"height"

group

The product group this components falls in.

card\_class

For decks only, the name of the

price\_per\_sheet

The cost to produce one sheet of the Printed Component.

notes

Any notes about the component. Limitations, frequently asked questions, detailed information.

photo\_link

An optional link to be displayed with the product photo.

weight

How much one sheet of the component weighs. Many items will not have an explicit weight, like decks, where the weight depends on the number of cards in the deck.

count\_per\_sheet

How many components do you get per sheet?

material

What is the base material for this printed component?

method\_name

Wing path fragment to access this component in the API. For example, the path `/api/pokerdecks` will allow you to manipulate Poker Decks.

templates

A hash of templates, by type. The base URL for a template is [https://s3.amazonaws.com/www.thegamecrafter.com/templates/](https://s3.amazonaws.com/www.thegamecrafter.com/templates/).

## [Detailed Component Info](#___top "click to go to top of document")

```
 GET /api/tgc/printedcomponents/XXX
```

This endpoint returns a the properties of a particular Printed Component (`XXX`) as JSON hash. See ["api/tgc/printedcomponents"](#api%2Ftgc%2Fprintedcomponents) for a list of all properties.

## [`/api/tgc/componentgroups`.](#___top "click to go to top of document")

This endpoint returns a JSON hash of Component Groups. Each ["Printed Component"](#Printed_Component) falls into a Component Group.

```
  {
   "result" : {
      "booklets" : {
         "info" : "http://help.thegamecrafter.com/article/80-booklets",
         "notes" : "Due to the nature of saddle stitching booklet pages are printed 4 to a sheet. Please be sure to indicate (in the 'Page Number' field) the order that the pages should appear in your booklet. Each page must be uploaded as a separate full bleed image. A 20-page booklet takes up the thickness of 4 cards in a box.",
         "name" : "Booklets",
         "description" : "Saddle stitched manuals."
      },
      [...]
    }
  }
```

### [Component Group properties](#___top "click to go to top of document")

info

A link to the help page for the Component Group.

notes

Notes about the Component Group.

name

The name of this group.

description

A description of the Component Group.

## [Component Group Info](#___top "click to go to top of document")

GET /api/tgc/componentgroups/XXX

**Depricated**: Component groups will be going away in the future. Use categories instead.

This endpoint returns a the properties of a particular Component Group (`XXX`) as JSON hash. See ["api/tgc/componentgroups"](#api%2Ftgc%2Fcomponentgroups) for a list of all properties.

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="three-sided-custom-cut"></a>

## Three Sided Custom Cut

> Source file: `ThreeSidedCustomCut.html`

-   [Three Sided Custom Cut](#Three_Sided_Custom_Cut)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

This API allows you to create three sided objects like dual layer boards. Accessible via `/api/twosided`.

### [Properties](#___top "click to go to top of document")

Each three sided custom cut object is accessed via `/api/twosided` and has the following properties. Complete details in [TwoSidedProperties](/developer/TwoSidedProperties.html).

id

The unique id for this three sided custom cut object. It will never change.

object\_type

`twosided`

date\_created

A date when the three sided custom cut object was created.

date\_updated

A date when the three sided custom cut object was last updated.

name

The name the three sided custom cut object is known by.

set\_id

A [TwoSidedSet](/developer/TwoSidedSet.html) id. The unique id of a three sided custom cut set that this two sided object belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a three sided custom cut object to be included in the game.

face\_id

A [File](/developer/File.html) id. Sets the face image of the three sided custom cut object. The ID is from a [File](/developer/File.html). If a face\_id is specified, then an extra property called `face` will be added which will briefly describe the image.

has\_proofed\_face

A boolean indicating whether the face image has been verified by the user to be correct.

back\_id

A [File](/developer/File.html) id. Sets the back image of the three sided custom cut object. The ID is from a [File](/developer/File.html). If a back\_id is specified, then an extra property called `back` will be added which will briefly describe the image.

has\_proofed\_back

A boolean indicating whether the back image has been verified by the user to be correct.

back\_from

A boolean indicating whether the back image should be taken from the set, or from this object.

inner\_id

A [File](/developer/File.html) id. Sets the inner image of the three sided custom cut object. The ID is from a [File](/developer/File.html). If a inner\_id is specified, then an extra property called `inner` will be added which will briefly describe the image.

has\_proofed\_inner

A boolean indicating whether the inner image has been verified by the user to be correct.

cut\_id

A [File](/developer/File.html) id. Sets the SVG cut file for this shape. If a cut\_id is specified, then an extra property called `cut` will be added which will briefly describe the svg image.

### [Related Objects](#___top "click to go to top of document")

set

The [ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) that this three sided custom cut object is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate three sided custom cut objects.

## [Create](#___top "click to go to top of document")

```
 POST /api/twosided
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

set\_id

Required.

quantity

Optional.

face\_id

Optional.

has\_proofed\_face

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/twosided/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/twosided/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/twosided/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Relationship** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="three-sided-custom-cut-set"></a>

## Three Sided Custom Cut Set

> Source file: `ThreeSidedCustomCutSet.html`

-   [Three Sided Custom Cut Set](#Three_Sided_Custom_Cut_Set)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Relationships](#Relationships)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

This API allows you to create sets of two sided sets like mats and boards. Accessible via `/api/threesidedcustomcutset`.

### [Identities](#___top "click to go to top of document")

SmallDualLayerBoardSet

MediumDualLayerBoardSet

LargeDualLayerBoardSet

### [Properties](#___top "click to go to top of document")

Each three sided set is accessed via `/api/threesidedcustomcutset` and has the following properties. Complete details in [TwoSidedSluggedSetProperties](/developer/TwoSidedSluggedSetProperties.html).

id

The unique id for this two sided set. It will never change.

identity

The style of two sided set you want.

object\_type

`threesidedcustomcutset`

date\_created

A date when the two sided set was created.

date\_updated

A date when the two sided set was last updated.

name

The name the two sided set is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this three sided custom cut set belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a two sided set to be included in the game.

back\_id

A [File](/developer/File.html) id. Sets the back image of the two sided set. The ID is from a [File](/developer/File.html). If a back\_id is specified, then an extra property called `back` will be added which will briefly describe the image.

has\_proofed\_back

A boolean indicating whether the back image has been verified by the user to be correct.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this two sided set is a member of.

### [Relationships](#___top "click to go to top of document")

members

The [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html) members that belong to this set.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate two sided sets.

## [Create](#___top "click to go to top of document")

```
 POST /api/threesidedcustomcutset
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

back\_id

Optional.

has\_proofed\_back

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/threesidedcustomcutset/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/threesidedcustomcutset/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/threesidedcustomcutset/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_related\_objects

Optional. See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) and **Related Objects** above for details.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="tuck-box"></a>

## Tuck Box

> Source file: `TuckBox.html`

-   [Tuck Box](#Tuck_Box)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create Tuck Box](#Create_Tuck_Box)
    -   [Update Tuck Box](#Update_Tuck_Box)
    -   [Delete Tuck Box](#Delete_Tuck_Box)
    -   [Fetch Tuck Box](#Fetch_Tuck_Box)

Accessible via `/tuckbox`.

### [Identities](#___top "click to go to top of document")

BridgeTuckBox108

BridgeTuckBox54

JumboTuckBox90

PokerBoosterBox

PokerTuckBox108

PokerTuckBox36

PokerTuckBox54

PokerTuckBox72

PokerTuckBox90

SmallProTarotInsert

SmallStoutTarotInsert

SquareTuckBox48

SquareTuckBox96

TarotTuckBox40

TarotTuckBox90

### [Properties](#___top "click to go to top of document")

Each tuck box has the following properties. Complete details in [TuckBoxProperties](/developer/TuckBoxProperties.html).

id

The unique id for this tuck box. It will never change.

identity

The style of tuck box you want. See Identities above for details.

wing\_object\_type

`tuckbox`

date\_created

A date when the tuck box was created.

date\_updated

A date when the tuck box was last updated.

name

The name the tuck box is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this tuck box belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a tuck box to be included in the game.

outside\_id

A [File](/developer/File.html) id. Sets the image that will be printed on the outside of the box. The ID is from a [File](/developer/File.html). If a outside\_id is specified, then an extra property called `outside` will be added which will briefly describe the image.

has\_proofed\_outside

A boolean indicating whether the outside image has been verified by the user to be correct.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this tuck box is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate tuck boxes.

## [Create Tuck Box](#___top "click to go to top of document")

```
 POST /tuckbox
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

outside\_id

Optional.

has\_proofed\_outside

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Box",
   ...
 }
```

## [Update Tuck Box](#___top "click to go to top of document")

```
 PUT /tuckbox/xxx
```

See **Create Tuck Box** for details.

## [Delete Tuck Box](#___top "click to go to top of document")

```
 DELETE /tuckbox/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch Tuck Box](#___top "click to go to top of document")

```
 GET /tuckbox/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Tuck Box Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Box",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="tuckbox-properties"></a>

## TuckBox Properties

> Source file: `TuckBoxProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| has\_proofed\_outside | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| outside\_id | Owner | Owner | No | char |  | Yes |
| quantity | Everyone | Owner | No | int | 1 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="two-sided"></a>

## Two Sided

> Source file: `TwoSided.html`

-   [Two Sided](#Two_Sided)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

This API allows you to create two sided objects like mats and boards. Accessible via `/api/twosided`.

### [Properties](#___top "click to go to top of document")

Each two sided object is accessed via `/api/twosided` and has the following properties. Complete details in [TwoSidedProperties](/developer/TwoSidedProperties.html).

id

The unique id for this two sided object. It will never change.

object\_type

`twosided`

date\_created

A date when the two sided object was created.

date\_updated

A date when the two sided object was last updated.

name

The name the two sided object is known by.

set\_id

A [TwoSidedSet](/developer/TwoSidedSet.html) id. The unique id of a two sided set that this two sided object belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a two sided object to be included in the game.

face\_id

A [File](/developer/File.html) id. Sets the face image of the two sided object. The ID is from a [File](/developer/File.html). If a face\_id is specified, then an extra property called `face` will be added which will briefly describe the image.

has\_proofed\_face

A boolean indicating whether the face image has been verified by the user to be correct.

back\_id

A [File](/developer/File.html) id. Sets the back image of the two sided object. The ID is from a [File](/developer/File.html). If a back\_id is specified, then an extra property called `back` will be added which will briefly describe the image.

has\_proofed\_back

A boolean indicating whether the back image has been verified by the user to be correct.

back\_from

A boolean indicating whether the back image should be taken from the set, or from this object.

### [Related Objects](#___top "click to go to top of document")

set

The [TwoSidedSet](/developer/TwoSidedSet.html) that this two sided object is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate two sided objects.

## [Create](#___top "click to go to top of document")

```
 POST /api/twosided
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

set\_id

Required.

quantity

Optional.

face\_id

Optional.

has\_proofed\_face

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/twosided/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/twosided/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/twosided/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Relationship** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="two-sided-box"></a>

## Two Sided Box

> Source file: `TwoSidedBox.html`

-   [Two Sided Box](#Two_Sided_Box)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

Boxes that have a top and a bottom. Accessible via `/api/twosidedbox`.

### [Identities](#___top "click to go to top of document")

DeckBox

LargeRetailBox

MediumProBox

MediumStoutBox

MintTin

TallMintTin

SmallProBox

SmallStoutBox

### [Properties](#___top "click to go to top of document")

Each two sided box has the following properties. Complete details in [TwoSidedBoxProperties](/developer/TwoSidedBoxProperties.html).

id

The unique id for this two sided box. It will never change.

identity

The style of box you want.

wing\_object\_type

`twosidedbox`.

date\_created

A date when the two sided box was created.

date\_updated

A date when the two sided box was last updated.

name

The name the two sided box is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this two sided box belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a two sided box to be included in the game.

top\_id

A [File](/developer/File.html) id. Sets the image that will be printed on the top part of the box. The ID is from a [File](/developer/File.html). If a top\_id is specified, then an extra property called `top` will be added which will briefly describe the image.

has\_proofed\_top

A boolean indicating whether the top image has been verified by the user to be correct.

bottom\_id

A [File](/developer/File.html) id. Sets the image that will be printed on the bottom part of the box. The ID is from a [File](/developer/File.html). If a bottom\_id is specified, then an extra property called `bottom` will be added which will briefly describe the image.

has\_proofed\_bottom

A boolean indicating whether the bottom image has been verified by the user to be correct.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this two sided box is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate two sided boxes.

## [Create](#___top "click to go to top of document")

```
 POST /api/twosidedbox
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

top\_id

Optional.

has\_proofed\_top

Optional.

bottom\_id

Optional.

has\_proofed\_bottom

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Box",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/twosidedbox/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/twosidedbox/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/twosidedbox/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_related\_objects

Optional. See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) and **Related Objects** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Box",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="two-sided-box-gloss"></a>

## Two Sided Box Gloss

> Source file: `TwoSidedBoxGloss.html`

-   [Two Sided Box Gloss](#Two_Sided_Box_Gloss)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

Boxes that have a top and a bottom. Accessible via `/api/twosidedboxgloss`.

### [Identities](#___top "click to go to top of document")

LargeStoutBox

### [Properties](#___top "click to go to top of document")

Each two sided box gloss has the following properties. Complete details in [TwoSidedBoxGlossProperties](/developer/TwoSidedBoxGlossProperties.html).

id

The unique id for this two sided box gloss. It will never change.

identity

The style of box you want.

wing\_object\_type

`twosidedboxgloss`.

date\_created

A date when the two sided box gloss was created.

date\_updated

A date when the two sided box gloss was last updated.

name

The name the two sided box gloss is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this two sided box gloss belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a two sided box gloss to be included in the game.

top\_id

A [File](/developer/File.html) id. Sets the image that will be printed on the top part of the box. The ID is from a [File](/developer/File.html). If a top\_id is specified, then an extra property called `top` will be added which will briefly describe the image.

has\_proofed\_top

A boolean indicating whether the top image has been verified by the user to be correct.

bottom\_id

A [File](/developer/File.html) id. Sets the image that will be printed on the bottom part of the box. The ID is from a [File](/developer/File.html). If a bottom\_id is specified, then an extra property called `bottom` will be added which will briefly describe the image.

has\_proofed\_bottom

A boolean indicating whether the bottom image has been verified by the user to be correct.

surfacing\_treatment

What type of surfacing to perform on the item. Enumerated options, use the ["Options" in Intro](/developer/Intro.html#Options) API.

spot\_gloss\_id

Only used if `surfacing_treatment` is set to `spot_gloss`. A [File](/developer/File.html) id. Sets the image that will be printed on top of the the top art in gloss. The ID is from a [File](/developer/File.html). If a spot\_gloss\_id is specified, then an extra property called `spot_gloss` will be added which will briefly describe the image.

has\_proofed\_spot\_gloss

A boolean indicating whether the spot\_gloss image has been verified by the user to be correct.

spot\_gloss\_bottom\_id

Only used if `surfacing_treatment` is set to `spot_gloss`. A [File](/developer/File.html) id. Sets the image that will be printed on top of the the bottom art in gloss. The ID is from a [File](/developer/File.html). If a spot\_gloss\_bottom\_id is specified, then an extra property called `spot_gloss_bottom` will be added which will briefly describe the image.

has\_proofed\_spot\_gloss\_bottom

A boolean indicating whether the spot\_gloss\_bottom image has been verified by the user to be correct.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this two sided box gloss is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate two sided box glosses.

## [Create](#___top "click to go to top of document")

```
 POST /api/twosidedboxgloss
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

top\_id

Optional.

has\_proofed\_top

Optional.

bottom\_id

Optional.

has\_proofed\_bottom

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Box",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/twosidedboxgloss/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/twosidedboxgloss/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/twosidedboxgloss/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_related\_objects

Optional. See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) and **Related Objects** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Box",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="twosidedboxgloss-properties"></a>

## TwoSidedBoxGloss Properties

> Source file: `TwoSidedBoxGlossProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| bottom\_id | Owner | Owner | No | char |  | Yes |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| has\_proofed\_bottom | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_spot\_gloss | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_spot\_gloss\_bottom | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_top | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |
| spot\_gloss\_bottom\_id | Owner | Owner | No | char |  | Yes |
| spot\_gloss\_id | Owner | Owner | No | char |  | Yes |
| surfacing\_treatment | Everyone | Owner | No | varchar | Matte Finish | No |
| top\_id | Owner | Owner | No | char |  | Yes |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="twosidedbox-properties"></a>

## TwoSidedBox Properties

> Source file: `TwoSidedBoxProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| bottom\_id | Owner | Owner | No | char |  | Yes |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| has\_proofed\_bottom | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_top | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |
| top\_id | Owner | Owner | No | char |  | Yes |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="twosided-properties"></a>

## TwoSided Properties

> Source file: `TwoSidedProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| back\_from | Owner | Owner | No | char | Set | No |
| back\_id | Owner | Owner | No | char |  | Yes |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| face\_id | Owner | Owner | No | char |  | Yes |
| game\_id | Everyone | Owner | No | char |  | No |
| has\_proofed\_back | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_face | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | No | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |
| set\_id | Everyone | Owner | Yes | char |  | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="two-sided-set"></a>

## Two Sided Set

> Source file: `TwoSidedSet.html`

-   [Two Sided Set](#Two_Sided_Set)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Relationships](#Relationships)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

This API allows you to create sets of two sided sets like mats and boards. Accessible via `/api/twosidedset`.

### [Identities](#___top "click to go to top of document")

AccordionBoard

BiFoldMat

BigMat

BridgeFolio

DominoBoard

DominoMat

FlowerMat

HalfBoard

HalfMat

HexMat

InvaderMat

LargeHexMat

LargeScreen

LargeSquareBoard

LargeSquareMat

MediumFolio

MediumScreen

MintTinAccordion4

MintTinAccordion6

MintTinAccordion8

MintTinFolio

PokerFolio

PlacardMat

PlayMoney

QuadFoldMat

QuarterBoard

QuarterMat

SkinnyBoard

SkinnyMat

SliverBoard

SliverMat

SmallScreen

SmallSquareBoard

SmallFolio

SmallSquareMat

SpinnerMat

SquareBoard

SquareFolio

SquareMat

StripBoard

StripMat

TarotFolio

USGameMat

### [Properties](#___top "click to go to top of document")

Each two sided set is accessed via `/api/twosidedset` and has the following properties. Complete details in [TwoSidedSetProperties](/developer/TwoSidedSetProperties.html).

id

The unique id for this two sided set. It will never change.

identity

The style of two sided set you want.

object\_type

`twosidedset`

date\_created

A date when the two sided set was created.

date\_updated

A date when the two sided set was last updated.

name

The name the two sided set is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this two sided set belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a two sided set to be included in the game.

back\_id

A [File](/developer/File.html) id. Sets the back image of the two sided set. The ID is from a [File](/developer/File.html). If a back\_id is specified, then an extra property called `back` will be added which will briefly describe the image. If the two sided set has no back, and a member is assigned a back, then that back will also be assigned to the set.

has\_proofed\_back

A boolean indicating whether the back image has been verified by the user to be correct.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this two sided set is a member of.

### [Relationships](#___top "click to go to top of document")

members

The [TwoSided](/developer/TwoSided.html) members that belong to this set.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate two sided sets.

## [Create](#___top "click to go to top of document")

```
 POST /api/twosidedset
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

back\_id

Optional.

has\_proofed\_back

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/twosidedset/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/twosidedset/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/twosidedset/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_related\_objects

Optional. See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) and **Related Objects** above for details.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="twosidedset-properties"></a>

## TwoSidedSet Properties

> Source file: `TwoSidedSetProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| back\_id | Owner | Owner | No | char |  | Yes |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| has\_proofed\_back | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="two-sided-slugged"></a>

## Two Sided Slugged

> Source file: `TwoSidedSlugged.html`

-   [Two Sided Slugged](#Two_Sided_Slugged)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

This API allows you to access two sided slugged objects like chits, tiles, and shards. Accessible via `/api/twosidedslugged`.

### [Properties](#___top "click to go to top of document")

Each two sided slugged objects is accessed via `/api/twosidedslugged` and has the following properties. Complete details in [TwoSidedSluggedProperties](/developer/TwoSidedSluggedProperties.html).

id

The unique id for this two sided slugged objects. It will never change.

identity

The style of two sided object you want. See Identities above for details.

object\_type

`twosidedslugged`

date\_created

A date when the two sided slugged objects was created.

date\_updated

A date when the two sided slugged objects was last updated.

name

The name the two sided slugged objects is known by.

set\_id

A [TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) id. The unique id of a two sided slugged set that this two sided slugged object belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a two sided slugged objects to be included in the set.

face\_id

A [File](/developer/File.html) id. Sets the face image of the two sided slugged objects. The ID is from a [File](/developer/File.html). If a face\_id is specified, then an extra property called `face` will be added which will briefly describe the image.

has\_proofed\_face

A boolean indicating whether the face image has been verified by the user to be correct.

back\_id

A [File](/developer/File.html) id. Sets the back image of the two sided slugged objects. The ID is from a [File](/developer/File.html). If a back\_id is specified, then an extra property called `back` will be added which will briefly describe the image.

has\_proofed\_back

A boolean indicating whether the back image has been verified by the user to be correct.

back\_from

A boolean indicating whether the back image should be taken from the set, or from this object.

### [Related Objects](#___top "click to go to top of document")

set

The [Set](/developer/Set.html) that this two sided slugged objects is a member of.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate two sided slugged objects.

## [Create](#___top "click to go to top of document")

```
 POST /api/twosidedslugged
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

set\_id

Required.

quantity

Optional.

face\_id

Optional.

has\_proofed\_face

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/twosidedslugged/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/twosidedslugged/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/twosidedslugged/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_relationships

Optional. See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) and **Related Objects** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="twosidedslugged-properties"></a>

## TwoSidedSlugged Properties

> Source file: `TwoSidedSluggedProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| back\_from | Owner | Owner | No | char | Set | No |
| back\_id | Owner | Owner | No | char |  | Yes |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| face\_id | Owner | Owner | No | char |  | Yes |
| game\_id | Everyone | Owner | No | char |  | No |
| has\_proofed\_back | Owner | Owner | No | tinyint | 0 | No |
| has\_proofed\_face | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | No | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |
| set\_id | Everyone | Owner | Yes | char |  | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="two-sided-slugged-set"></a>

## Two Sided Slugged Set

> Source file: `TwoSidedSluggedSet.html`

-   [Two Sided Slugged Set](#Two_Sided_Slugged_Set)
-   [Identities](#Identities)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Relationships](#Relationships)
-   [Methods](#Methods)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)

This API allows you to create sets of two sided sets like mats and boards. Accessible via `/api/twosidedsluggedset`.

### [Identities](#___top "click to go to top of document")

ArrowChit

BullseyeChit

CircleShard

DominoChit

DominoTile

HexShard

LargeCircleChit

LargeHexTile

LargeRing

LargeSquareChit

LargeSquareTile

LargeStandee

MediumCircleChit

MediumHexTile

MediumRing

MediumSquareChit

MediumSquareTile

MediumStandee

MediumTriangleChit

MiniCircleTile

MiniHexTile

MiniSquareTile

SmallCircleChit

SmallHexTile

SmallRing

SmallSquareChit

SmallSquareTile

SmallStandee

SquareShard

StripChit

TombstoneShard

TriangleTile

### [Properties](#___top "click to go to top of document")

Each two sided set is accessed via `/api/twosidedsluggedset` and has the following properties. Complete details in [TwoSidedSluggedSetProperties](/developer/TwoSidedSluggedSetProperties.html).

id

The unique id for this two sided set. It will never change.

identity

The style of two sided set you want.

object\_type

`twosidedsluggedset`

date\_created

A date when the two sided set was created.

date\_updated

A date when the two sided set was last updated.

name

The name the two sided set is known by.

game\_id

A [Game](/developer/Game.html) id. The unique id of a game that this two sided set belongs to.

quantity

An integer between 1 and 99. Defaults to `1`. Allows for multiple copies of a two sided set to be included in the game.

back\_id

A [File](/developer/File.html) id. Sets the back image of the two sided set. The ID is from a [File](/developer/File.html). If a back\_id is specified, then an extra property called `back` will be added which will briefly describe the image. If the two sided set has no back, and a member is assigned a back, then that back will also be assigned to the set.

has\_proofed\_back

A boolean indicating whether the back image has been verified by the user to be correct.

### [Related Objects](#___top "click to go to top of document")

game

The [Game](/developer/Game.html) that this two sided set is a member of.

### [Relationships](#___top "click to go to top of document")

members

The [TwoSidedSlugged](/developer/TwoSidedSlugged.html) members that belong to this set.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate two sided sets.

## [Create](#___top "click to go to top of document")

```
 POST /api/twosidedsluggedset
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

name

Required.

game\_id

Required.

quantity

Optional.

back\_id

Optional.

has\_proofed\_back

Optional.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/twosidedsluggedset/xxx
```

See **Create** for details.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/twosidedsluggedset/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/twosidedsluggedset/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

\_include\_related\_objects

Optional. See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) and **Related Objects** above for details.

\_include\_relationships

Optional. See ["Relationships" in Intro](/developer/Intro.html#Relationships) and **Relationships** above for details.

Returns:

```
 {
   "id" : "xxx",
   "name" : "Guard",
   ...
 }
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="twosidedsluggedset-properties"></a>

## TwoSidedSluggedSet Properties

> Source file: `TwoSidedSluggedSetProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| back\_id | Owner | Owner | No | char |  | Yes |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| game\_id | Everyone | Owner | Yes | char |  | No |
| has\_proofed\_back | Owner | Owner | No | tinyint | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| identity | Everyone | Owner | Yes | varchar |  | No |
| name | Everyone | Owner | Yes | varchar |  | No |
| quantity | Everyone | Owner | No | int | 1 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="user"></a>

## User

> Source file: `User.html`

-   [User](#User)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Relationships](#Relationships)
-   [Methods](#Methods)
    -   [Options](#Options)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)
    -   [Search](#Search)
    -   [Fetch Addresses](#Fetch_Addresses)
    -   [Create a folder in the User's directory, unless it already exists](#Create_a_folder_in_the_User%27s_directory%2C_unless_it_already_exists)

Each user is accessed via `/api/user` .

### [Properties](#___top "click to go to top of document")

Complete details in [UserProperties](/developer/UserProperties.html).

id

The unique id for this user. It will never change.

wing\_object\_type

`user`

username

Another unique way of identifying a user. However, this can be changed by an admin or the user himself.

real\_name

The name that this user goes by in the real world. Example: Andy Dufresne

email

An email address associated with this user.

use\_as\_display\_name

Which field should be used to determine a display name. Defaults to `username`. Options are `username`, `real_name`, `email`.

display\_name

Only used for display purposes. See also `use_as_display_name`.

admin

A boolean indicating whether the user has admin rights on the server.

shop\_credit

The amount of shop credit owned by this user.

crafter\_points

The amount of crafter points for this user.

approved\_for\_invoice

A boolean indicating whether the user has been granted the privilege of checking out using an invoice.

last\_login

A date when the user last logged in to the system.

date\_created

A date when the user was created.

date\_updated

A date when the user's account was last updated.

root\_folder\_id

The id of the [Folder](/developer/Folder.html) where this user can upload files. When a user is created, a separate [Folder](/developer/Folder.html) is made for them.

avatar\_id

The unique id of the avatar for this user.

avatar\_uri

The URI of the avatar for this user.

payout\_via

Determines how a user's profits will be distributed. Defaults to `shop_credit`. Options are: `shop_credit` and `paypal` and `none`.

paypal\_email

The email address of the user's PayPal account. Only used if `payout_via` is set to `paypal`.

### [Related Objects](#___top "click to go to top of document")

root\_folder

The starting [Folder](/developer/Folder.html) where this user can upload files.

### [Relationships](#___top "click to go to top of document")

designers

The list of [Designer](/developer/Designer.html)s this user controls.

designerassociates

A list of [DesignerAssociate](/developer/DesignerAssociate.html) relationships that this user is a part of.

associated-designers

A list of [Designer](/developer/Designer.html) this user is an associate of. See also `designerassociates`.

carts

The list of [Cart](/developer/Cart.html)s the user has created.

receipts

The list of [Receipt](/developer/Receipt.html)s for previous orders the user has created.

reviews

The list of [Review](/developer/Review.html)s the user has created.

wishlists

The list of [Wishlist](/developer/Wishlist.html)s the user has created.

folders

The list of root [Folder](/developer/Folder.html)s controlled by this user. More specifically, those directly under the `root_folder`.

games

The list of [Game](/developer/Game.html)s controlled by this user through their [Designer](/developer/Designer.html)s.

webhooks

The list of [WebHook](/developer/WebHook.html)s you have subscribed to.

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate users.

## [Options](#___top "click to go to top of document")

Provides a list of the options that can be used to fill out various fields when creating or updating a user.

```
 GET /api/user/_options
```

Returns:

```
 {
    "use_as_display_name" : [...]
 }
```

**NOTE:** You can also get this data by adding `_include_options=1` to the parameter list when fetching a user.

## [Update](#___top "click to go to top of document")

```
 PUT /api/user/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

username

Required.

password

A string to be set as the password. Must be at least 6 characters. Required.

real\_name

Optional.

email

Required.

use\_as\_display\_name

Optional.

avatar\_id

Optional. The `id` of a File with a 300x300 image in it.

Can only be done by an admin or the user itself.

Returns:

```
 {
   "id" : "xxx",
   "username" : "andy",
   ...
 }
```

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/user/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Can only be done by an admin or the user itself.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/user/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

Can by done by anybody.

Returns:

```
 {
   "id" : "xxx",
   "username" : "andy",
   ...
 }
```

## [Search](#___top "click to go to top of document")

```
 GET /api/user
```

query

A partial username or email address.

Returns:

```
 {
    "items" : [
        {
            "id" : "xxx",
            "display_name" : "Andy",
            ...
        },
        ...
    ],
    "paging" : {}
 }
```

## [Fetch Addresses](#___top "click to go to top of document")

```
 GET /api/user/xxx/addresses

 {
    "items" : [
        {
            "id" : "xxx",
            "name" : "Andy Dufresne",
            "state" : "ME"
            ...
        },
        ...
    ],
    "paging" : {}
 }
```

## [Create a folder in the User's directory, unless it already exists](#___top "click to go to top of document")

```
 POST /api/user/xxx/get_folder
```

This is a utility method. If the requested [Folder](/developer/Folder.html) already exists by name, then it returns that folder. Otherwise, it returns named folder.

name

The name of the folder to create/return.

parent\_id

The ID of the folder to look for and optionally create the named folder.

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="user-properties"></a>

## User Properties

> Source file: `UserProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| accepted\_warehouse\_terms | Owner | Owner | No | tinyint | 0 | No |
| admin | Owner | Admin | No | tinyint | 0 | No |
| approved\_for\_invoice | Owner | Admin | No | tinyint | 0 | No |
| avatar\_id | Owner | Owner | No | char |  | Yes |
| billing\_cycle\_per | Owner | Admin | No | varchar | order | No |
| can\_use\_facebook\_beacon | Owner | Owner | No | tinyint | 1 | No |
| can\_use\_google\_analytics | Owner | Owner | No | tinyint | 1 | No |
| can\_use\_helpscout\_beacon | Owner | Owner | No | tinyint | 1 | No |
| can\_use\_kiss\_metrics | Owner | Owner | No | tinyint | 1 | No |
| can\_use\_pinterest\_beacon | Owner | Owner | No | tinyint | 1 | No |
| concierge\_manager | Owner | Admin | No | tinyint | 0 | No |
| copyright\_checker | Owner | Admin | No | tinyint | 0 | No |
| copyright\_violator | Owner | Admin | No | tinyint | 0 | No |
| crafter\_points | Owner | Read Only | No | int | 0 | No |
| curator | Owner | Admin | No | tinyint | 0 | No |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| date\_warehouse\_terms\_accepted | Owner | Admin | No | datetime |  | No |
| default\_address\_id | Owner | Owner | No | char |  | Yes |
| default\_designer\_id | Owner | Owner | No | char |  | Yes |
| developer | Owner | Owner | No | tinyint | 0 | No |
| email | Owner | Owner | Yes | varchar |  | Yes |
| exclude\_gore | Owner | Owner | No | tinyint | 1 | No |
| exclude\_nudity | Owner | Owner | No | tinyint | 1 | No |
| exclude\_profanity | Owner | Owner | No | tinyint | 1 | No |
| exclude\_sexuality | Owner | Owner | No | tinyint | 1 | No |
| exclude\_substance\_abuse | Owner | Owner | No | tinyint | 1 | No |
| facebook\_token | Owner | Admin | No | varchar |  | Yes |
| facebook\_uid | Owner | Admin | No | bigint |  | Yes |
| gift\_cert\_manager | Owner | Admin | No | tinyint | 0 | No |
| history\_of\_issues | Owner | Admin | No | tinyint | 0 | No |
| how\_you\_found\_us | Owner | Owner | No | varchar |  | No |
| id | Everyone | Read Only | No | char |  | No |
| inventory\_manager | Owner | Admin | No | tinyint | 0 | No |
| laboratory\_manager | Owner | Admin | No | tinyint | 0 | No |
| last\_ip | Owner | Read Only | No | varchar |  | Yes |
| last\_login | Owner | Read Only | No | datetime |  | No |
| looney\_labs | Owner | Admin | No | tinyint | 0 | No |
| maintenance\_manager | Owner | Admin | No | tinyint | 0 | No |
| no\_email | Owner | Owner | No | tinyint | 0 | No |
| no\_pm | Everyone | Owner | No | tinyint | 0 | No |
| no\_reminders | Everyone | Owner | No | tinyint | 0 | No |
| no\_updates | Everyone | Owner | No | tinyint | 0 | No |
| order\_manager | Owner | Admin | No | tinyint | 0 | No |
| payout\_owed | Owner | Read Only | No | float | 0 | No |
| payout\_threshold | Owner | Owner | No | float | 5 | No |
| payout\_via | Owner | Owner | No | varchar | shop\_credit | No |
| paypal\_email | Owner | Owner | No | varchar |  | Yes |
| perfectionist | Owner | Admin | No | tinyint | 0 | No |
| permanently\_deactivated | Owner | Admin | No | tinyint | 0 | No |
| product\_manager | Owner | Admin | No | tinyint | 0 | No |
| production\_manager | Owner | Admin | No | tinyint | 0 | No |
| publisher | Owner | Admin | No | tinyint | 0 | No |
| publishing\_manager | Owner | Admin | No | tinyint | 0 | No |
| real\_name | Owner | Owner | No | varchar |  | Yes |
| retailer | Owner | Admin | No | tinyint | 0 | No |
| root\_folder\_id | Owner | Read Only | No | char |  | Yes |
| sanity\_tester | Owner | Admin | No | tinyint | 0 | No |
| shipping\_victim | Owner | Admin | No | tinyint | 0 | No |
| shop\_credit | Owner | Read Only | No | float | 0 | No |
| staff\_manager | Owner | Admin | No | tinyint | 0 | No |
| stats\_manager | Owner | Admin | No | tinyint | 0 | No |
| stripe\_customer\_id | Owner | Owner | No | varchar |  | Yes |
| sturdy\_boxes\_only | Owner | Admin | No | tinyint | 0 | No |
| urgent\_tokens | Everyone | Owner | No | int | 0 | No |
| use\_as\_display\_name | Owner | Owner | No | varchar | username | Yes |
| user\_manager | Owner | Admin | No | tinyint | 0 | No |
| username | Owner | Owner | Yes | varchar |  | No |
| vip | Owner | Admin | No | tinyint | 0 | No |
| wants\_newsletter | Owner | Owner | No | tinyint | 1 | No |
| warehouse\_manager | Owner | Admin | No | tinyint | 0 | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="visual-basic-example"></a>

## Visual Basic Example

> Source file: `VisualBasicExample.html`

**NOTE:** Get an [APIKey](/developer/APIKey.html).

This code will allow you to get a session, fetch account info, upload a file, and search games. From it you should be able to discern how to work with the entire TGC API.

```
 Imports System.Threading
 Imports Newtonsoft.Json
 Imports RestSharp
 
 Module Module1
    Const API_KEY_ID = "" ' get your own
    Const USERNAME = "" ' put your username here;
    Const PASSWORD = "" ' put your password here;
    Dim client As RestClient
    Dim session_id As String
    Dim user_id As String

    Sub Main()
        client = New RestClient("https://www.thegamecrafter.com/api/")

        Console.WriteLine("Getting A Session...")
        GetASession(USERNAME, PASSWORD)
        Console.WriteLine("Session ID:   " + session_id)
        Console.WriteLine("User ID:      " + user_id)
        Thread.Sleep(1000)

        Console.WriteLine(Environment.NewLine)
        Console.WriteLine("Fetching My Account Info...")
        Dim user = FetchMyAccountInfo()
        Console.WriteLine("Display Name: " + user("display_name"))
        Console.WriteLine("email:        " + user("email"))
        Thread.Sleep(1000)

        Console.WriteLine(Environment.NewLine)
        Console.WriteLine("Uploading A File...")
        Dim file = UploadAFile(user, "path/to/image.png", "image.png")
        Console.WriteLine("File name:    " + file("name"))
        Console.WriteLine("File ID:      " + file("id"))
        Thread.Sleep(1000)

        Console.WriteLine(Environment.NewLine)
        Console.WriteLine("Searching Games...")
        Dim games = SearchGames()
        For Each game As Object In games
            Console.WriteLine("Game Name:    " + game("name"))
            Console.WriteLine("Game ID:      " + game("id"))
            Thread.Sleep(100)
        Next

        Console.WriteLine(Environment.NewLine)
        Console.Write("Hit any key to close...")
        Console.ReadKey()
    End Sub

    Sub GetASession(username As String, password As String)
        Dim request = New RestRequest("session", Method.POST)
        request.AddParameter("username", username)
        request.AddParameter("password", password)
        request.AddParameter("api_key_id", API_KEY_ID)

        Dim response = client.Execute(request)
        Dim data = JsonConvert.DeserializeObject(response.Content)

        session_id = data("result")("id")
        user_id = data("result")("user_id")
    End Sub

    Function FetchMyAccountInfo() As Object
        Dim request = New RestRequest("user/" + user_id, Method.GET)
        request.AddParameter("session_id", session_id)

        Dim response = client.Execute(request)
        Dim data = JsonConvert.DeserializeObject(response.Content)

        Dim user = data("result")

        Return user
    End Function

    Function UploadAFile(user As Object, filepath As String, filename As String) As Object
        Dim request = New RestRequest("file", Method.POST)
        request.AddFile("file", filepath)
        request.AddParameter("name", filename)
        request.AddParameter("folder_id", user("root_folder_id"))
        request.AddParameter("session_id", session_id)

        Dim response = client.Execute(request)
        Dim data = JsonConvert.DeserializeObject(response.Content)
        Dim file = data("result")

        Return file
    End Function

    Function SearchGames() As Object
        Dim request = New RestRequest("game", Method.GET)
        request.AddParameter("q", "Steampunk")
        request.AddParameter("session_id", session_id)

        Dim response = client.Execute(request)
        Dim data = JsonConvert.DeserializeObject(response.Content)

        Dim games = data("result")("items")

        Return games
    End Function
 End Module
```

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="web-hook"></a>

## Web Hook

> Source file: `WebHook.html`

-   [Web Hook](#Web_Hook)
    -   [Events](#Events)
        -   [Item Sold](#Item_Sold)
        -   [Receipt Refunded](#Receipt_Refunded)
        -   [Receipt Shipped](#Receipt_Shipped)
    -   [Properties](#Properties)
    -   [Methods](#Methods)
        -   [List](#List)
        -   [Fetch](#Fetch)
        -   [Create / Subscribe](#Create_%2F_Subscribe)
        -   [Update](#Update)
        -   [Delete / Unsubscribe](#Delete_%2F_Unsubscribe)
        -   [Test](#Test)
    -   [Callbacks](#Callbacks)
        -   [Post Body](#Post_Body)
        -   [Post Body Example](#Post_Body_Example)
        -   [Verify the Message](#Verify_the_Message)
        -   [Fault Tolerance](#Fault_Tolerance)

Web hooks are accessed via `/api/webhook`. They represent an asynchronous callback to an external API and are triggered by various events in our site.

They work like this:

Step 1: Subscribe

You set up your application to subscribe to a particular event type in our system via this API.

Step 2: Event is Triggered

Let's say you subscribe to the `ReceiptShipped` event. When this event is triggered and it matches your [User](/developer/User.html) `id` then we proceed to step 3.

Step 3: Callback

Our system sends an HTTP Post to an endpoint of your choosing via a `callback_uri`, letting you know that the event has occured.

Step 4: Verify

We'll send a signature which is signed using your private [APIKey](/developer/APIKey.html) so that you can verify the post is authentic.

## [Events](#___top "click to go to top of document")

The following web hook events are available for you to subscribe to.

### [Item Sold](#___top "click to go to top of document")

Triggered when a [Game](/developer/Game.html) has been sold. The payload will be as follows:

```
 {
     "item" : {
       "quantity" : 1,
       "name" : "Adrift",
       "sku_id" : "361B3436-E1EA-11E4-BB8E-E1C477A16DD8",
       "price_each" : "28.14",
       "shop_uri" : "/games/adrift",
       ...
     },
     "shipping_address" : {
         "city" : "Madison",
         "state" : "WI",
         "country" : "United States",
     }
 }
```

Required Parameters

event

`ItemSold`

owner\_class

`Designer`

owner\_id

The `id` of a [Designer](/developer/Designer.html) you control.

### [Receipt Refunded](#___top "click to go to top of document")

Triggered when a [Receipt](/developer/Receipt.html) has been refunded. The payload posted will be a [Receipt](/developer/Receipt.html) object.

Required Parameters

event

`ReceiptRefunded`

owner\_class

`User`

owner\_id

Your [User](/developer/User.html) `id`.

### [Receipt Shipped](#___top "click to go to top of document")

Triggered when a [Receipt](/developer/Receipt.html) has been marked shipped. The payload posted will be a [Receipt](/developer/Receipt.html) object with `_include=shipments` enabled.

Required Parameters

event

`ReceiptShipped`

owner\_class

`User`

owner\_id

Your [User](/developer/User.html) `id`.

## [Properties](#___top "click to go to top of document")

Complete details in [WebHookProperties](/developer/WebHookProperties.html).

id

The unique id for this web hook. It will never change.

wing\_object\_type

`webhook`.

owner\_class

The object class in our system that you must have edit access to in order to subscribe to a particular event.

owner\_id

The instance `id` of the class that you own.

event

See the list of Events above for details.

callback\_uri

The URL endpoint where the HTTP Post operation will be submitted.

api\_key\_id

The [APIKey](/developer/APIKey.html) `id` that will be used to sign the post to prevent third-parties from faking posts to your endpoint.

## [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate web hooks.

### [List](#___top "click to go to top of document")

```
 GET /api/user/xxx/webhooks
```

See [User](/developer/User.html) for details.

### [Fetch](#___top "click to go to top of document")

```
 GET /api/webhook/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "id" : "xxx",
   "event" : "ItemSold",
   ...
 }
```

### [Create / Subscribe](#___top "click to go to top of document")

```
 POST /api/webhook
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

owner\_class

Required. See the list of Events above for details.

owner\_id

Required. See the list of Events above for details.

event

Required. See the list of Events above for details.

callback\_uri

Required. The URL endpoint where the HTTP Post operation will be submitted.

api\_key\_id

The [APIKey](/developer/APIKey.html) `id` that will be used to sign the post to prevent third-parties from faking posts to your endpoint.

Returns:

```
 {
   "id" : "xxx",
   "event" : "ItemSold",
   ...
 }
```

### [Update](#___top "click to go to top of document")

```
 PUT /api/webhook/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

owner\_class

Required. See the list of Events above for details.

owner\_id

Required. See the list of Events above for details.

event

Required. See the list of Events above for details.

callback\_uri

Required. The URL endpoint where the HTTP Post operation will be submitted.

api\_key\_id

The [APIKey](/developer/APIKey.html) `id` that will be used to sign the post to prevent third-parties from faking posts to your endpoint.

Returns:

```
 {
   "id" : "xxx",
   "event" : "ItemSold",
   ...
 }
```

### [Delete / Unsubscribe](#___top "click to go to top of document")

```
 DELETE /api/webhook/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Returns:

```
 {
   "success" : 1
 }
```

### [Test](#___top "click to go to top of document")

Calling this method will cause our servers to process a webhook back to your `callback_uri` with a `type` of `test`.

```
 POST /api/webhook/xxx/test
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

payload

Required. A JSON encoded object.

Returns:

```
 1 || 0
```

## [Callbacks](#___top "click to go to top of document")

A callback is the HTTP Post operation performed by a web hook to the `callback_uri` endpoint that you set when you subscribe to a web hook.

### [Post Body](#___top "click to go to top of document")

The callback will come to your server in the form of an HTTP `POST` with the following form parameters:

epoch

The number of seconds since January 1, 1970 UTC. You can use this to determine if the message is close enough to your server's time be considered in tolerance. This can be useful for preventing hackers from sending fake messages your way.

message

A JSON encoded string of the message object sent from this web hook.

id

The unique `id` of this web hook.

owner\_class

The `owner_class` defined as part of this web hook.

owner\_id

The `owner_id` defined as part of this web hook.

event

The `event` name defined as part of this web hook.

payload

An object of the original data that we're sending you generated from the event.

type

Can be one of 4 types: `subscribe`, `unsubscribe`, `data`, `test`.

subscribe

When you first create the web hook. Will have an empty `payload`.

unsubscribe

When you or the system deletes the web hook. Will have an empty `payload`.

data

When the real event is fired it will be of type `data` and the `payload` will have real data in it.

test

When you call the `Test` method described above. Will have the `payload` you define.

hmac

A SHA256 hex encoded HMAC signature. You can use this to verify that the callback came from us.

### [Post Body Example](#___top "click to go to top of document")

```
  {
    'hmac' => '02e605c1a27fc8263b8fd187b517df85ef59aab118b71979fbaa20c9e297e290',
    'message' => '{"owner_id":"795AD480-328E-11E2-B41A-9E208588C839","event":"OrderShipped","type":"test","payload":{"foo":"bar"},"owner_class":"User", "id" : "9E208588C839-3313-333-331133"}',
    'epoch' => '1613851807'
  }
```

### [Verify the Message](#___top "click to go to top of document")

Once you have an end point exposed to receive these callbacks anybody could send a message your way. To verify it came from us use you can use our HMAC signature. You do that using the following procedure.

Step 1: Prepare the signature string

Create the signature string oncatenating the `epoch`, the character `.`, and the `message` (leave it as a JSON string) together.

Step 2: Determine the expected signature

Compute an HMAC with the SHA256 hash function. Use the your `private_key` from the [APIKey](/developer/APIKey.html) associated with this subscription as the key and used the signature string you created in step 1 as the message.

Step 3: Compare

Compare the output of the HMAC you just generated with the `hmac` from the message. Remember that the `hmac` we send is hex encoded so yours should be too in order to compare.

Step 4: Timing (optional)

You can also check the `epoch` we sent you with your local server time to protect against timing attacks.

### [Fault Tolerance](#___top "click to go to top of document")

Just like we expect you to build your application to be tolerant of any outages we may have, we don't expect your app to have 100% uptime either. Therefore web hooks will automatically retry upon failure.

200 = Success

Only an HTTP response code of `200` is considered a success. Anything else is considered a failure. If we receive a 200 then you'll never get the the callback again. If we get anything other than 200 we'll start retrying using the rules below.

Cascading Retries

The first retry will happen approximately 1 hour after the first failure. The second retry will happen 2 hours after the second failure. The third retry will happen 3 hours after the 3rd failure, and so on. Which means that by the time you get to the fourth retry, 6 hours have elapsed.

That said, subsequent events alter this cascading. For example, if one event has already failed, and another event using the same web hook is triggered and succeeds, then the fail count is reset and subsequent retries of past failures will happen faster. Likewise, if a secondary event using the same web hook fails, then it will increment the fail count and thus the cascade will happen faster. Thus, if you have 5 events happen in rapid succession all using the same web hook then the 5th one will have it's retry delay set to 5 hours before its first retry, because the failure count is attached to the web hook not the instance of the event.

Checking Status

You can check on the status of a web hook by using the Fetch method above. There you can see the `failures_since_last_success` property to see how far it has cascaded. Also the `date_updated` property will tell you the time of the last retry. You cannot, however, check on the status of the individual event instances. You just have to wait for their delays to fire and run their next attempt.

Updating Web Hook Before Retry

If you change the properties of a web hook (for example the `callback_uri`) before the next retry then the new `callback_uri` will be used on the next retry.

After 5 Failures

After 5 consecutive failures the user that created the web hook will be emailed notifying them of the failures. This only happens in the event of 5 consecutive failures though, so if the fail counter is reset because a callback is successfully processed then no email will be sent.

After 100 Failures

After 100 consecutive failures the web hook will stop processing retries, and thus will only be attempting to perform callbacks on new events.

After 1000 Failures

After 1000 consecutive failures the web hook will automatically delete itself as it considers your site to be permanently down.

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="webhook-properties"></a>

## WebHook Properties

> Source file: `WebHookProperties.html`

| Property | View | Edit | Required | Storage Type | Default Value | Nullable |
| --- | --- | --- | --- | --- | --- | --- |
| api\_key\_id | Everyone | Owner | Yes | char |  | No |
| callback\_uri | Owner | Owner | Yes | varchar |  | No |
| date\_created | Everyone | Read Only | No | datetime |  | No |
| date\_updated | Everyone | Read Only | No | datetime |  | No |
| error\_count | Owner | Read Only | No | bigint | 0 | No |
| event | Owner | Owner | Yes | varchar |  | No |
| failures\_since\_last\_success | Owner | Read Only | No | int | 0 | No |
| id | Everyone | Read Only | No | char |  | No |
| last\_status\_code | Owner | Read Only | No | int | 200 | No |
| owner\_class | Everyone | Owner | Yes | varchar |  | No |
| owner\_id | Owner | Owner | Yes | char |  | No |
| success\_count | Owner | Read Only | No | bigint | 0 | No |
| user\_id | Everyone | Owner | Yes | char |  | No |

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---


<a id="wishlist"></a>

## Wishlist

> Source file: `Wishlist.html`

-   [Wishlist](#Wishlist)
-   [Properties](#Properties)
-   [Related Objects](#Related_Objects)
-   [Methods](#Methods)
    -   [Options](#Options)
    -   [Create](#Create)
    -   [Update](#Update)
    -   [Delete](#Delete)
    -   [Fetch](#Fetch)
    -   [Add Items To Wishlist](#Add_Items_To_Wishlist)
    -   [Adjust Items In Wishlist](#Adjust_Items_In_Wishlist)
    -   [Attach A User](#Attach_A_User)
    -   [Convert To A Cart](#Convert_To_A_Cart)
-   [POD ERRORS](#POD_ERRORS)

Accessed via `/api/wishlist`.

### [Properties](#___top "click to go to top of document")

Each wishlist has the following properties Complete details in [OrderProperties](/developer/OrderProperties.html) and [OrderItemProperties](/developer/OrderItemProperties.html).

id

The unique id for this wishlist. It will never change.

wing\_object\_type

`wishlist`

name

A label to identify an wishlist. This is useful if you're going to allow multiple wishlists open at the same time, or if you want to name wishlists.

user\_id

If specified, the unique id of the user that controls this wishlist. Once a user has been attached to an wishlist, it cannot be viewed or manipulated except by passing a working session id for that user. See Wishlist Options below for details. Defaults to `Wishlist`.

shipping\_address\_id

The unique id of an address. See Wishlist Options below for details.

shipping\_address

A hash of address properties associated with the `shipping_address_id`. See Wishlist Related Objects below for details.

shipping\_method

The shipping mechanism that will be used to transport the wishlist to the purchaser. Defaults to `USPS Priority`. See Wishlist Options below for details.

shipping\_cost

The amount added to the wishlist to account for the cost of shipping. This will be added to the wishlist once both a shipping address and a shipping method are known.

subtotal

The cost of all the items attached to the wishlist before taxes, shop credit, and shipping are applied.

taxes

The amount of taxes to be paid to purchase this wishlist. Will always be zero until a shipping address has been specified.

total

The total cost of the wishlist including taxes and shipping. If this is a Receipt it will also include the discount as a result of shop credit used.

payment\_method

The method used to pay for the wishlist. Defaults to `Credit Card`. See Wishlist Options below for details.

payment\_transaction\_id

If an attempt has been made to pay for this wishlist then the id returned from the payment gateway will be logged here. This is a holdover in case the wishlist was once a cart.

payment\_status

If an attempt has been made to pay for this wishlist then the status code returned from the payment gateway will be logged here. This is a holdover in case the wishlist was once a cart.

payment\_message

If an attempt has been made to pay for this wishlist then the message returned from the payment gateway will be logged here. This is a holdover in case the wishlist was once a cart.

ip\_address

The IP address of the user at the time of wishlist creation.

date\_created

A date when the wishlist was created.

date\_updated

A date when the wishlist's account was last updated.

### [Related Objects](#___top "click to go to top of document")

See ["Related Objects" in Intro](/developer/Intro.html#Related_Objects) for details.

user

The user attached to this wishlist, if any. Will return:

```
 {
    "shop_credit" : "0.00",
    "username" : "andy",
    "id" : "xxx",
    ...
 }
```

shipping\_address

The address attached to the wishlist that the wishlist should be shipped to. Will return:

```
 {
    "id" : "xxx",
    "name" : "Andy Dufresne",
    "company" : "Shawshank Prison",
    "address1" : "123 Prison Lane",
    "address2" : "Shawshank Prison Library",
    "city" : "Portland",
    "state" : "Maine",
    "postal_code" : "04101",
    "country" : "US",
    "phone_number" : "207-874-8300"
 }
 
 =back
```

### [Methods](#___top "click to go to top of document")

The methods used to fetch and manipulate wishlists.

## [Options](#___top "click to go to top of document")

Provides a list of the options that can be used to fill out various fields when creating or updating a wishlist.

```
 GET /api/wishlist/_options
```

Returns:

```
 {
    "identity" : [...],
    "shipping_method" : [...],
    "_shipping_method" : {...},
    "shipping_address" : [...],
    "_shipping_address" : {...},
 }
```

**NOTE:** You can also get this data by adding `_include_options=1` to the parameter list when fetching a wishlist.

## [Create](#___top "click to go to top of document")

```
 POST /api/wishlist
```

api\_key\_id

See [APIKey](/developer/APIKey.html). Required.

name

Optional.

identity

Optional.

Returns:

```
 {
   "id" : "xxx",
   "wishlistname" : "andy",
   ...
 }
```

## [Update](#___top "click to go to top of document")

```
 PUT /api/wishlist/xxx
```

See **Create Wishlist** for details. Can only be done by an admin or the wishlist itself.

## [Delete](#___top "click to go to top of document")

```
 DELETE /api/wishlist/xxx
```

session\_id

Required. The unique session id provided by a [Session](/developer/Session.html) method.

Can only be done by an admin or the wishlist owner itself.

Returns:

```
 {
   "success" : 1
 }
```

## [Fetch](#___top "click to go to top of document")

```
 GET /api/wishlist/xxx
```

session\_id

Optional. The unique session id provided by a [Session](/developer/Session.html) method.

Can by done by anybody.

Returns:

```
 {
   "id" : "xxx",
   "wishlistname" : "andy",
   ...
 }
```

## [Add Items To Wishlist](#___top "click to go to top of document")

```
 POST /api/wishlist/xxx/sku/xxx
```

Allows you to add a [Sku](/developer/Sku.html) to the wishlist.

quantity

Optional. Defaults to 1. Add or subtract items to or from the wishlist depending on whether this number is positive or negative.

## [Adjust Items In Wishlist](#___top "click to go to top of document")

```
 PUT /api/wishlist/xxx/sku/xxx
```

Allows you to adjust the quantity of this [Sku](/developer/Sku.html) in the wishlist.

quantity

Optional. Defaults to 1. Sets the number of this item contained in the wishlist. Setting to 0 will remove it from the wishlist. If you set a quantity and the item isn't already in the wishlist it will be added.

## [Attach A User](#___top "click to go to top of document")

```
 POST /api/wishlist/xxx/user
```

Before checkout you need to attach a user to the wishlist. This can either be done by attaching an authenticated session, or by simply specifying an email address.

```
 {
    "order" : { ... },
    "session_id" : "xxx"
 }
```

**NOTE:** The session\_id returned here needs (or any session\_id attached to the user\_id attached to this wishlist) to be used on all subsequent interactions with the wishlist.

session\_id

A session id as created by [Session](/developer/Session.html).

email

An email address of the user checking out. This only works if the user is not already in the system.

## [Convert To A Cart](#___top "click to go to top of document")

```
 POST /api/wishlist/xxx/cart
```

Converts this cart to a [Cart](/developer/Cart.html).

### [POD ERRORS](#___top "click to go to top of document")

Hey! **The above document had some coding errors, which are explained below:**

Around line 123:

You forgot a '=back' before '=head1'

Developer Documentation

[Intro](/developer/Intro.html)

[Changes](/developer/Changes.html)

#### General APIs

[APIKey](/developer/APIKey.html)

[Address](/developer/Address.html)

[Session](/developer/Session.html)

[Status](/developer/Status.html)

[TGC](/developer/TGC.html)

[User](/developer/User.html)

[WebHook](/developer/WebHook.html)

#### Game Publishing APIs

[ActionShot](/developer/ActionShot.html)

[Designer](/developer/Designer.html)

[DesignerAssociate](/developer/DesignerAssociate.html)

[File](/developer/File.html)

[Folder](/developer/Folder.html)

[Game](/developer/Game.html)

[GameDownload](/developer/GameDownload.html)

[GamePart](/developer/GamePart.html)

[Part](/developer/Part.html)

#### Game Component APIs

[AcrylicShape](/developer/AcrylicShape.html)

[Booklet](/developer/Booklet.html) & [BookletPage](/developer/BookletPage.html)

[BoxFace](/developer/BoxFace.html)

[BoxTop](/developer/BoxTop.html)

[BoxTopGloss](/developer/BoxTopGloss.html)

[CoilBook](/developer/CoilBook.html) & [CoilBookPage](/developer/CoilBookPage.html)

[CustomColorD6](/developer/CustomColorD6.html)

[CustomColorD4](/developer/CustomColorD4.html)

[CustomColorD8](/developer/CustomColorD8.html)

[CustomCutOneSidedSlugged](/developer/CustomCutOneSidedSlugged.html)

[CustomCutTwoSidedSlugged](/developer/CustomCutTwoSidedSlugged.html)

[CustomPrintedMeeple](/developer/CustomPrintedMeeple.html)

[CustomWoodD6](/developer/CustomWoodD6.html)

[Deck](/developer/Deck.html) & [Card](/developer/Card.html)

[Dial](/developer/Dial.html)

[Document](/developer/Document.html)

[HookBox](/developer/HookBox.html)

[OneSided](/developer/OneSided.html)

[OneSidedGloss](/developer/OneSidedGloss.html)

[OneSidedSluggedSet](/developer/OneSidedSluggedSet.html) & [OneSidedSlugged](/developer/OneSidedSlugged.html)

[PerfectBoundBook](/developer/PerfectBoundBook.html) & [PerfectBoundBookPage](/developer/PerfectBoundBookPage.html)

[ScorePad](/developer/ScorePad.html)

[TuckBox](/developer/TuckBox.html)

[TwoSidedSet](/developer/TwoSidedSet.html) & [TwoSided](/developer/TwoSided.html)

[TwoSidedBox](/developer/TwoSidedBox.html)

[TwoSidedBoxGloss](/developer/TwoSidedBoxGloss.html)

[TwoSidedSluggedSet](/developer/TwoSidedSluggedSet.html) & [TwoSidedSlugged](/developer/TwoSidedSlugged.html)

[ThreeSidedCustomCutSet](/developer/ThreeSidedCustomCutSet.html) & [ThreeSidedCustomCut](/developer/ThreeSidedCustomCut.html)

#### Commerce APIs

[Cart](/developer/Cart.html)

[CrafterPointCurrency](/developer/CrafterPointCurrency.html)

[Receipt](/developer/Receipt.html)

[Shipment](/developer/Shipment.html)

[Sku](/developer/Sku.html)

[Wishlist](/developer/Wishlist.html)

#### Community APIs

[Announcement](/developer/Announcement.html)

[ArtTest](/developer/ArtTest.html)

[Idea](/developer/Idea.html)

[IdeaOpinion](/developer/IdeaOpinion.html)

[Review](/developer/Review.html)

©2009-2026 [The Game Crafter, LLC](https://www.thegamecrafter.com)

---
