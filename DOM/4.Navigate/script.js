const docOl = document.querySelector('ol'),
OlChildren = docOl.children,
OlLastChild = OlChildren[(OlChildren.length - 1)],
docSections = document.querySelectorAll('section'),
docSecondSection = docSections[1],
docThirdSection = docSections[2],
docSecSecH2 = docSecondSection.children[0],
docThSecDIV = docThirdSection.children[0],
docThSecDIVH2 = docThSecDIV.children[0]

docSecondSection.prepend(docThSecDIVH2);
docThSecDIV.prepend(docSecSecH2);
docThirdSection.remove()
docOl.prepend(OlLastChild)