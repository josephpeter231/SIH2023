const goodBearingData = [
    -0.0268829 , -0.0648 , -0.151 , -0.143051 , -0.050299 , 0.124063 , 0.154558 , 0.295019 , -0.0161906 , -0.11938 , -0.208434 , -0.14844 , 0.0992357 , 0.172598 , -0.00591181 , -0.260047 , -0.136045 , -0.0753086 , 0.159424 , 0.184616 , 0.14327 , -0.077851 , -0.095039 , -0.0668424 , -0.0235986 , 0.0177354 , -0.0145119 , -0.157417 , -0.198629 , -0.139645 , -0.177561 , -0.0419179 , -0.0113979 , -0.085928 , -0.0888231 , -0.0380618 , 0.00260314 , -0.0291819 , 0.132967 , 0.059556 , -0.0650299 , 0.0147674 , 0.0105585 , 0.0477932 , 0.080004 , 0.176162 , -0.080965 , 0.0230877 , 0.0372225 , 0.0375023 , 0.0402514 , 0.112105 , 0.0883608 , -0.0719392 , 0.0146944 , 0.0149255 , -0.0604683 , 0.0860618 , 0.104065 , -0.109733 , -0.0172489 , -0.0300456 , -0.0349599 , 0.0492286 , -0.0136361 , -0.139706 , -0.17317 , -0.00475621 , -0.016665 , -0.0676938 , -0.0331961 , -0.0761115 , -0.1182 , 0.0149255 , 0.121326 , 0.0821206 , 0.0984815 , 0.0871444 , -0.00260314 , 0.124525 , 0.132103 , 0.0710755 , 0.022078 , -0.0569285 , -0.156772 , -0.117883 , 0.110037 , 0.202571 , 0.13006 , -0.025557 , -0.11168 , -0.175749 , 0.135947 , 0.14979 , 0.126812 , 0.0437303 , -0.018964 , -0.0692752 , -0.0452509 , 0.0496908 , 0.0157283 , -0.122323 , -0.217812 , -0.23972 , -0.0916209 , 0.0912194 , 0.171199 , 0.0754789 , -0.0338773 , -0.0855023 , 0.0111789 , 0.154121 , 0.199031 , 0.130218 , -0.17722 , -0.230597 , -0.112154 , 0.0214333 , 0.089407 , 0.0396067 , -0.103153 , -0.194615 , -0.00487785 , 0.0890785 , 0.163706 , 0.210234 , 0.0781794 , -0.0970583 , -0.0657597 , 0.0189397 , -0.0215793 , -0.089857 , -0.112166 , -0.153585 , -0.149595 , -0.051406 , -0.069409 , -0.0166406 , 0.048742 , 0.0643244 , 0.0358601 , -0.00521845 , 0.00737151 , -0.143039 , -0.035629 , 0.00504815 , -0.0855752 , -0.11865 , -0.138587 , -0.118723 , -0.078666 , 0.0218834 , 0.00216523 , -0.100306 , -0.0124683 , 0.0130644 , 0.0485109 , 0.0184531 , 0.0745788 , -0.0440101 , -0.042003 , -0.150897 , -0.219771 , -0.0834343 , 0.0276493 , 0.109843 , -0.0929711 , -0.0213725 , -0.162623 , -0.120231];

const timeData = [
    0.0 , 4e-05 , 8e-05 , 0.00012 , 0.00016 , 0.0002 , 0.00024 , 0.00028 , 0.00032 , 0.00036 , 0.0004 , 0.00044 , 0.00048 , 0.00052 , 0.00056 , 0.0006 , 0.00064 , 0.00068 , 0.00072 , 0.00076 , 0.0008 , 0.00084 , 0.00088 , 0.00092 , 0.00096 , 0.001 , 0.00104 , 0.00108 , 0.00112 , 0.00116 , 0.0012 , 0.00124 , 0.00128 , 0.00132 , 0.00136 , 0.0014 , 0.00144 , 0.00148 , 0.00152 , 0.00156 , 0.0016 , 0.00164 , 0.00168 , 0.00172 , 0.00176 , 0.0018 , 0.00184 , 0.00188 , 0.00192 , 0.00196 , 0.002 , 0.00204 , 0.00208 , 0.00212 , 0.00216 , 0.0022 , 0.00224 , 0.00228 , 0.00232 , 0.00236 , 0.0024 , 0.00244 , 0.00248 , 0.00252 , 0.00256 , 0.0026 , 0.00264 , 0.00268 , 0.00272 , 0.00276 , 0.0028 , 0.00284 , 0.00288 , 0.00292 , 0.00296 , 0.003 , 0.00304 , 0.00308 , 0.00312 , 0.00316 , 0.0032 , 0.00324 , 0.00328 , 0.00332 , 0.00336 , 0.0034 , 0.00344 , 0.00348 , 0.00352 , 0.00356 , 0.0036 , 0.00364 , 0.00368 , 0.00372 , 0.00376 , 0.0038 , 0.00384 , 0.00388 , 0.00392 , 0.00396 , 0.004 , 0.00404 , 0.00408 , 0.00412 , 0.00416 , 0.0042 , 0.00424 , 0.00428 , 0.00432 , 0.00436 , 0.0044 , 0.00444 , 0.00448 , 0.00452 , 0.00456 , 0.0046 , 0.00464 , 0.00468 , 0.00472 , 0.00476 , 0.0048 , 0.00484 , 0.00488 , 0.00492 , 0.00496 , 0.005 , 0.00504 , 0.00508 , 0.00512 , 0.00516 , 0.0052 , 0.00524 , 0.00528 , 0.00532 , 0.00536 , 0.0054 , 0.00544 , 0.00548 , 0.00552 , 0.00556 
]
export const time = timeData.map((time, index) => ({
    time,
    goodBearing: goodBearingData[index],
}));