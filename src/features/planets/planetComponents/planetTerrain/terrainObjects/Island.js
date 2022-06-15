const Island = ({ surfaceColor, styles }) => {
  return (
    <>
      <p>Island</p>
      <svg
        version="1.1"
        viewBox="0 0 2400 1500"
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles}`}
      >
        <g transform="matrix(.90833 0 0 .90833 120.42 396.78)" clip-path="url(#h)">
          <path
            d="m-119.7 469.34c-9.2884-5e-3 -18.569 0.21679-200.531 0.56836v181.03c157.53 1.8034 416.11 6.1953 416.11 6.1953s129.8 8.4283 180.37 3.3711 133.17-10.115 163.51-8.4297c30.343 1.6857 60.686 5.0586 91.029 5.0586s126.43 3.3702 133.17-25.7441c6.7429-10.114-5.0566-13.484-25.285-15.17-20.229-1.6857-40.457 5.0561-77.543-8.4297-37.086-13.486-45.515-11.8-107.89-15.172-62.372-3.3714-77.432 1.7427-138.23-8.4277-9.6815-1.6196-76.14 3.1983-96.088-5.0566-86.939-5.5907-168.93-60.824-258.58-49.859-59 8.4286-127.21-62.306-196.02-74.807-16.826-3.0567-36.931-4.1198-57.031-4.1309z"
            fill-rule="evenodd"
          />
          <path
            d="m427.34 339.41-9.9371 15.421 1.2816 4.8628-3.7029-3.4242-0.48988 5.7295s-1.6328 4.431-18.306 14.026c-2.1894 1.26-4.407 2.5121-6.6144 3.7411 1.8018-12.291 1.409-23.404-2.7078-29.576-6.1015-9.1477-8.3209-9.8264-8.3209-9.8264l-2.8374 3.9863 2.4066-6.5456-2.7242 3.6166-1.1187-5.6008s-8.6211-2.2327-10.841-2.9116c-2.2195-0.67887 7.0981 9.8571 8.4212 18.757 1.3231 8.8997 1.5189 6.937 1.5189 6.937l6.1449 1.0706-3.9254-0.3918 2.733 1.6451-4.491 1.4581s-1.2145 5.292-1.7192 9.5874c-0.2762 2.3505 0.79928 8.993 1.3773 16.441-0.11159 0.0579-0.2239 0.11613-0.33471 0.17353-1.9011-6.1385-3.9363-12.124-5.7558-16.185-3.4257-7.6466-3.8496-10.081-3.7062-10.842l-8.3957 7.8897 4.4916-9.3894-5.1061 5.8764 2.7897-7.4306-6.0928 7.5398 3.0615-8.7989s-6.2106-2.8752-19.891-5.5944c-13.68-2.7191-24.009-1.3813-24.009-1.3813l16.61 7.7867 4.6477-1.9203-2.8985 4.1276 5.744-0.28052s4.6091 1.0256 16.347 16.266c1.8193 2.3623 3.6304 4.7636 5.4043 7.1471-8.0869-10.164-16.902-17.877-24.504-19.052-10.867-1.6788-12.867-0.50068-12.867-0.50068l1.0233 4.785-3.2014-6.1957 0.827 4.4516-4.8857-2.9577s-7.4693 4.8498-9.469 6.0281c-1.9997 1.1782 12.063 1.4228 19.52 6.4579 7.4567 5.0352 6.1413 3.5653 6.1413 3.5653l4.94-3.8086-2.9403 2.6303 3.0591-0.90447-1.9579 4.2967s3.0823 4.4694 5.909 7.7427c0.41761 0.48361 1.1386 1.1089 2.0754 1.8501-12.48-1.3906-23.712-0.60554-29.779 3.7772-8.9131 6.4394-9.5088 8.6826-9.5088 8.6826l4.0898 2.6865-6.6308-2.1599 3.7158 2.5868-5.5552 1.3274s-1.9082 8.6986-2.5036 10.942 9.5843-7.4616 18.428-9.1166c8.844-1.6551 6.8756-1.7774 6.8756-1.7774l0.83983-6.1806-0.24446 3.9374 1.5418-2.793 1.6246 4.4335s5.3337 1.0154 9.645 1.3592c3.3907 0.27035 15.531-2.5811 26.297-2.6793 0.7435 0.7309 1.4606 1.47 2.1357 2.2162-0.81381 0.0304-1.6413 0.0658-2.4982 0.11315-18.85 1.0402-38.334 5.2764-45.741 13.302-7.4069 8.0256-7.579 10.147-7.579 10.147l4.4023 1.2496-6.7467-0.10631 4.0257 1.263-5.0943 2.6537s-0.28353 8.1182-0.45569 10.24c-0.17219 2.1214 7.8694-9.1002 16.061-12.924 8.1917-3.8241 6.281-3.4017 6.281-3.4017l-0.29386-5.6295 0.46575 3.508 0.98273-2.8558 2.3477 3.4395s5.2986-0.54587 9.4966-1.4041c3.9912-0.81594 19.438-9.0549 31.027-10.839-40.961 74.254-48.684 165.6-85.985 224.61l51.835-21.324c4.8055-97.908 12.957-137.62 48.123-202.74 8.1799 7.8371 15.924 20.28 18.662 22.744 3.1854 2.8658 7.4783 6.0196 7.4783 6.0196l3.7662-1.777-0.59919 2.9603 2.1781-2.7893-3.1038 4.7057s-1.4338-1.3318 3.6936 6.1139c5.1274 7.4455 6.3796 21.194 7.3053 19.277 0.92572-1.9165 4.792-9.0604 4.792-9.0604l-3.0493-4.8677 4.1113 0.94959-5.8716-3.325 4.4287 1.1517s0.92576-1.9166-1.3973-12.588c-2.2738-10.445-16.365-23.617-31.71-33.963 3.1962 0.8041 8.7284 2.7986 17.769 7.6538 16.948 9.1019 34.488 19.829 36.175 21.424 1.6866 1.5945 5.4838 0.39337 5.4838 0.39337s-18.44-23.289-28.263-32.044c-3.9939-3.5595-6.0023-5.6815-6.9795-6.9469 3.8878-0.94891 8.0315-2.3114 8.0315-2.3114l0.73873-4.0984 2.063 2.2059-1.0071-3.3924 2.0305 5.2586s-1.9168 0.39491 7.1223 0.54109c9.0391 0.14616 20.962 7.106 19.938 5.2396-1.0233-1.8662-4.5966-9.1611-4.5966-9.1611l-5.7339-0.34208 3.1594-2.7969-6.1157 2.8519 3.5087-2.938s-1.0235-1.8662-11.062-6.1681c-6.1267-2.6257-15.786-2.1224-26.391 0.19989l-5.8951-8.2528 8.7047 5.7066-5.141-5.8457 6.991 3.7579-6.6575-7.0465 8.3106 4.2103s3.6797-5.77 8.2031-18.964 4.5783-23.61 4.5783-23.61zm-63.649 22.149 0.34742-0.32642s-0.26563-0.10806-0.34742 0.32642zm27.329 32.909c-1.1958 0.42678-2.3872 0.86604-3.5695 1.3185-0.47465 0.18159-0.93718 0.36258-1.3956 0.54354 0.0847-0.30759 0.16463-0.61641 0.24743-0.92446 1.6297-0.30452 3.2135-0.6176 4.7177-0.93752zm23.957 10.249-3.6888 8.8534 0.2112-8.5923c1.475-0.0517 2.667-0.12835 3.4776-0.26101zm-52.216-12.611c0.29975 0.41748 0.60482 0.841 0.89792 1.2513-0.0151 7e-3 -0.0324 0.0158-0.0476 0.023-0.28162-0.42664-0.56512-0.85121-0.85041-1.2743zm48.23 12.887-1.7012 5.6239-0.34864-5.5732c0.71294-0.0145 1.4212-0.0315 2.0498-0.0507zm-2.8206 0.0655-1.8497 7.0103-0.60586-6.9628c0.88039-0.0169 1.6524-0.0322 2.4556-0.0474z"
            fill-rule="evenodd"
          />
          <path
            d="m201.9 385.13 8.1059 12.579-1.0454 3.9667 3.0205-2.7932 0.3996 4.6737s1.3319 3.6144 14.933 11.441c1.786 1.0278 3.5948 2.0492 5.3955 3.0517-1.4698-10.026-1.1493-19.091 2.2088-24.126 4.9772-7.462 6.7875-8.0156 6.7875-8.0156l2.3145 3.2517-1.9631-5.3394 2.2222 2.9502 0.91251-4.5686s7.0324-1.8213 8.8429-2.3751c1.8105-0.55376-5.7901 8.0406-6.8694 15.3-1.0793 7.2597-1.239 5.6586-1.239 5.6586l-5.0125 0.87334 3.202-0.3196-2.2294 1.3419 3.6634 1.1894s0.99066 4.3168 1.4024 7.8206c0.22531 1.9173-0.65198 7.3358-1.1235 13.411 0.091 0.0472 0.18264 0.0947 0.27303 0.14155 1.5507-5.0073 3.211-9.8894 4.6951-13.202 2.7944-6.2374 3.1402-8.223 3.0232-8.8443l6.8485 6.4358-3.6639-7.6591 4.1652 4.7935-2.2756-6.0613 4.97 6.1503-2.4973-7.1774s5.0662-2.3454 16.225-4.5634c11.159-2.218 19.585-1.1268 19.585-1.1268l-13.549 6.3517-3.7912-1.5664 2.3644 3.367-4.6855-0.22883s-3.7597 0.83659-13.335 13.269c-1.4841 1.927-2.9614 3.8858-4.4084 5.8301 6.5966-8.2913 13.787-14.583 19.988-15.541 8.8644-1.3694 10.496-0.40842 10.496-0.40842l-0.83473 3.9032 2.6114-5.054-0.6746 3.6313 3.9854-2.4127s6.0929 3.9561 7.7241 4.9172-9.8404 1.1606-15.923 5.2679-5.0096 2.9083-5.0096 2.9083l-4.0296-3.1068 2.3984 2.1456-2.4954-0.73779 1.5971 3.5049s-2.5143 3.6458-4.8201 6.3159c-0.34066 0.39449-0.92874 0.90457-1.693 1.5092 10.181-1.1344 19.343-0.49396 24.291 3.0812 7.2706 5.2527 7.7566 7.0826 7.7566 7.0826l-3.3362 2.1914 5.4089-1.7619-3.031 2.1101 4.5315 1.0828s1.5565 7.0956 2.0422 8.9255c0.48568 1.83-7.8181-6.0866-15.032-7.4366-7.2142-1.3501-5.6086-1.4498-5.6086-1.4498l-0.68507-5.0416 0.19942 3.2118-1.2577-2.2783-1.3252 3.6165s-4.3508 0.82829-7.8676 1.1087c-2.7658 0.22053-12.669-2.1055-21.451-2.1856-0.60648 0.59621-1.1915 1.1991-1.7422 1.8078 0.66385 0.0248 1.3388 0.0537 2.0378 0.0923 15.376 0.84855 31.27 4.3041 37.312 10.851 6.0419 6.5466 6.1823 8.2769 6.1823 8.2769l-3.591 1.0193 5.5034-0.0867-3.2839 1.0303 4.1555 2.1647s0.23128 6.6222 0.37171 8.3526c0.14046 1.7305-6.4192-7.4232-13.101-10.543-6.6822-3.1194-5.1235-2.7748-5.1235-2.7748l0.23971-4.5921-0.37993 2.8615-0.80163-2.3295-1.9151 2.8057s-4.3222-0.44528-7.7466-1.1453c-3.2557-0.66558-15.856-7.3862-25.31-8.8414 33.413 60.57 39.713 135.08 70.14 183.22l-42.282-17.394c-3.92-79.866-10.57-112.26-39.255-165.38-6.6725 6.3929-12.989 16.543-15.223 18.553-2.5984 2.3377-6.1002 4.9103-6.1002 4.9103l-3.0722-1.4495 0.48878 2.4148-1.7767-2.2753 2.5318 3.8386s1.1696-1.0863-3.0129 4.9872c-4.1826 6.0735-5.204 17.288-5.9591 15.725-0.75513-1.5633-3.9089-7.3908-3.9089-7.3908l2.4874-3.9707-3.3536 0.7746 4.7896-2.7123-3.6126 0.93946s-0.75516-1.5634 1.1398-10.268c1.8548-8.5204 13.349-19.265 25.867-27.704-2.6072 0.65592-7.12 2.2828-14.494 6.2434-13.824 7.4246-28.133 16.175-29.508 17.476-1.3758 1.3006-4.4733 0.32088-4.4733 0.32088s15.042-18.998 23.055-26.139c3.2579-2.9036 4.8962-4.6345 5.6934-5.6668-3.1713-0.77404-6.5514-1.8855-6.5514-1.8855l-0.60259-3.3432-1.6828 1.7994 0.82155-2.7673-1.6563 4.2895s1.5636 0.32214-5.8098 0.44138c-7.3734 0.11922-17.099 5.7965-16.264 4.2741 0.83475-1.5223 3.7495-7.4729 3.7495-7.4729l4.6772-0.27905-2.5772-2.2815 4.9887 2.3264-2.8621-2.3966s0.83487-1.5223 9.0232-5.0315c4.9977-2.1418 12.877-1.7312 21.527 0.16305l4.8087-6.732-7.1006 4.655 4.1936-4.7685-5.7027 3.0654 5.4307-5.7479-6.7791 3.4344s-3.0016-4.7068-6.6914-15.469c-3.6898-10.762-3.7346-19.259-3.7346-19.259zm51.92 18.067-0.2834-0.26627s0.21668-0.0881 0.2834 0.26627zm-22.293 26.845c0.97548 0.34814 1.9472 0.70645 2.9117 1.0755 0.38718 0.14812 0.76448 0.29576 1.1384 0.44337-0.0691-0.2509-0.13429-0.50282-0.20184-0.7541-1.3294-0.2484-2.6214-0.50379-3.8483-0.76475zm-19.542 8.3607 3.0091 7.2219-0.17228-7.009c-1.2032-0.0422-2.1756-0.1047-2.8368-0.21291zm42.594-10.287c-0.24452 0.34054-0.49337 0.68602-0.73246 1.0207 0.0123 6e-3 0.0264 0.0129 0.0388 0.0188 0.22973-0.34802 0.46098-0.69435 0.6937-1.0394zm-39.342 10.512 1.3877 4.5875 0.28439-4.5462c-0.58156-0.0118-1.1593-0.0257-1.6721-0.0414zm2.3008 0.0534 1.5088 5.7184 0.49421-5.6797c-0.71815-0.0138-1.3479-0.0263-2.0031-0.0387z"
            fill-rule="evenodd"
          />
          <path
            d="m477.25 669.02s120.59 9.197 134.43 11.168c13.838 1.971 122.57-5.9133 112.68-6.5703s-69.191 2.6292-88.96 0.6582-63.262-5.2558-85.008-5.2559h-73.146zm1333.3 0s120.59 9.197 134.43 11.168c13.839 1.971 122.57-5.9133 112.68-6.5703-9.8846-0.65699-69.191 2.6292-88.96 0.6582s-63.262-5.2558-85.008-5.2559h-73.146zm-1704.7 4.1465c-56.157 0-158.46 1.1094-158.46 1.1094 23.723 0.65699 162.11 3.2836 179.9 9.8535 17.792 6.5699 5.9318 9.1981 45.47 3.2852 39.538-5.9129 67.214-7.2263 45.468-9.1973s-65.239-3.2856-77.1-4.5996c-2.9654-0.32849-16.557-0.45117-35.276-0.45117zm1333.3 0c-56.157 0-158.46 1.1094-158.46 1.1094 23.723 0.65699 162.11 3.2836 179.9 9.8535 17.792 6.5699 5.9319 9.1981 45.47 3.2852 39.538-5.9129 67.212-7.2263 45.466-9.1973s-65.237-3.2856-77.098-4.5996c-2.9653-0.32849-16.557-0.45117-35.276-0.45117zm-421.31 2.916c-6.4251 0-18.781 0.49154-62.273 2.791-86.984 4.5989-138.38 1.9707-138.38 1.9707l-25.702 1.3145c-19.769 2.628-160.13 5.2558-126.52 10.512s37.56 3.9429 63.26 2.6289 61.284-6.571 92.914-5.9141c31.631 0.657 108.73-3.2842 134.43-0.65625 25.7 2.628 114.66 5.2567 132.45-0.65625 17.792-5.9129-3.9541-12.483-43.492-11.826-19.769 0.3285-20.262-0.16406-26.687-0.16407zm1333.3 0c-6.425 0-18.781 0.49154-62.273 2.791-86.984 4.5989-138.38 1.9707-138.38 1.9707l-25.7 1.3145c-19.769 2.628-160.13 5.2558-126.52 10.512s37.562 3.9429 63.262 2.6289 61.284-6.571 92.914-5.9141c31.631 0.657 108.73-3.2842 134.43-0.65625 25.7 2.628 114.66 5.2567 132.45-0.65625 17.792-5.9129-3.9541-12.483-43.492-11.826-19.769 0.3285-20.262-0.16406-26.687-0.16407zm-1986.7 0.82032c-9.8847 1.971-94.89 13.797-94.89 13.797l120.59 1.9707s43.492-3.2852 86.984-3.2852 73.145 3.9421 96.868 8.541 69.194 4.5994 86.986 1.3144-13.838-13.139-43.492-14.453-27.678-1.3142-85.008-3.2852-144.31-3.2852-144.31-3.2852l-23.724-1.3144zm1333.3 0c-9.8846 1.971-94.89 13.797-94.89 13.797l120.59 1.9707s43.492-3.2852 86.984-3.2852 73.146 3.9421 96.868 8.541c23.723 4.5989 69.194 4.5994 86.986 1.3144s-13.838-13.139-43.492-14.453-27.678-1.3142-85.008-3.2852-144.31-3.2852-144.31-3.2852l-23.724-1.3144zm-400.24 9.8555s-41.515 2.6279-53.376 5.2559-51.398 8.5405-90.936 12.482c-39.538 3.942-71.17 2.6291-136.41 5.9141-65.238 3.285-130.48-10.512-207.58-9.8555-77.099 0.65699-142.34 13.141-142.34 13.141h144.32s138.38 13.797 183.85 15.768c45.469 1.9709 158.15-11.826 219.44-15.111 61.284-3.285 142.34-26.279 142.34-26.279l-59.308-1.3144zm-788.79 5.9121s-59.308 1.3134-138.38 3.9414c-79.077 2.628-43.493 10.512-268.86 0 0 0 35.584 10.512 53.376 11.826s187.81 6.9e-4 235.25-0.65625c47.446-0.65699 118.62-15.111 118.62-15.111zm1333.3 0s-59.308 1.3134-138.38 3.9414c-79.077 2.628-43.493 10.512-268.86 0 0 0 35.584 10.512 53.376 11.826s187.81 6.9e-4 235.25-0.65625c47.446-0.65699 118.62-15.111 118.62-15.111zm690.03 6.4922c-14.036 1.8696-29.753 3.7584-45.556 5.334-39.538 3.942-71.168 2.6291-136.41 5.9141-65.238 3.285-130.48-10.512-207.58-9.8555-77.1 0.65699-142.34 13.141-142.34 13.141h144.32s138.38 13.797 183.85 15.768c41.832 1.8133 140.46-9.7006 203.71-14.115v-16.186zm-2422.2 81.904c-60.303-0.14918-183.91 18.95-253.11 23.725-1.3262 0.0915-2.6756 0.21336-4.0164 0.32422v27.381c21.313-4.084 49.488-8.7888 77.826-12.426 47.62-6.1117 85.715-4.0749 164.29-9.168 78.572-5.0931 157.15 16.298 250 15.279 92.858-1.0186 171.43-20.373 171.43-20.373h-173.81s-166.67-21.389-221.43-24.445c-3.4226-0.19101-7.163-0.28693-11.183-0.29688zm959.4 32.02c-71.289 8e-3 -180.35 1.1904-219.63 1.8906-57.143 1.0186-142.86 23.428-142.86 23.428s71.43-2.0349 166.67-6.1094c95.239-4.0745 52.382-16.298 323.81 0 0 0-42.858-16.299-64.286-18.336-6.6965-0.63664-31.299-0.87672-63.703-0.87305zm-503.55 11.543c-17.151 0.10796-32.906 1.3616-42.281 3.5898-21.429 5.0931 16.667 20.373 52.381 22.41 35.715 2.0372 33.335 2.0379 102.38 5.0938 69.048 3.0559 173.81 5.0918 173.81 5.0918l28.573 2.0371c11.905-3.0559 114.29-21.391 114.29-21.391l-145.24-3.0566s-52.381 5.0938-104.76 5.0938-88.096-6.1118-116.67-13.242c-16.072-4.0108-40.432-5.7658-62.484-5.627zm-92.464 7.8809c-8.6996 0.0384-17.228 0.92902-30.77 1.8203-30.953 2.0372-73.81 10.187-111.91 9.168-38.096-1.0186-130.95 5.094-161.91 1.0195-30.953-4.0745-138.1-8.15-159.53 1.0176-21.429 9.1676 4.7619 19.355 52.381 18.336 23.81-0.50931 24.403 0.2539 32.141 0.2539 7.7383 0 22.622-0.76294 75.003-4.3281 104.76-7.1304 166.67-3.0566 166.67-3.0566l30.953-2.0371c23.81-4.0745 192.86-8.1498 152.38-16.299-22.768-4.5838-34.236-5.9439-45.421-5.8945zm670.89 8.9414c-5.5945 0.0895-14.746 1.6657-32.604 5.1035-47.62 9.1676-80.952 11.204-54.761 14.26 26.191 3.0559 78.572 5.0936 92.858 7.1309 3.5715 0.50931 19.941 0.70117 42.486 0.70117 67.635 0 190.85-1.7188 190.85-1.7188-28.572-1.0186-195.24-5.0931-216.67-15.279-13.393-6.3664-12.835-10.346-22.16-10.197zm-572.29 15.826c-36.068 0.30639-135.03 9.7767-124.61 10.668 11.905 1.0186 83.335-4.0734 107.14-1.0176 23.81 3.0559 76.192 8.1484 102.38 8.1484h88.096s-145.24-14.262-161.91-17.318c-2.0834-0.38199-5.9526-0.52424-11.105-0.48047zm1220.6 59.674s145.24 14.262 161.91 17.318c16.667 3.0559 147.62-9.1689 135.72-10.188s-83.335 4.0754-107.14 1.0195c-23.81-3.0559-76.192-8.1504-102.38-8.1504h-88.096zm-447.25 6.4316c-67.635 0-190.85 1.7188-190.85 1.7188 28.572 1.0186 195.24 5.0931 216.67 15.279 21.429 10.186 7.1435 14.259 54.763 5.0918 47.62-9.1676 80.952-11.204 54.761-14.26-26.191-3.0559-78.572-5.0936-92.858-7.1309-3.5715-0.50931-19.941-0.69921-42.486-0.69921zm1098.4 4.5195c-7.7382 0-22.62 0.76294-75.001 4.3281-104.76 7.1304-166.67 3.0566-166.67 3.0566l-30.953 2.0371c-23.81 4.0745-192.86 8.1498-152.38 16.299 40.477 8.149 45.239 6.1115 76.191 4.0742 30.953-2.0372 73.81-10.187 111.91-9.168 38.096 1.0186 130.95-5.094 161.91-1.0195 30.953 4.0745 138.1 8.15 159.53-1.0176 1.5282-0.65379 2.7875-1.3129 3.8409-1.9727v-9.1387c-8.0059-4.6009-28.461-7.8184-56.222-7.2246-23.81 0.50931-24.405-0.2539-32.143-0.2539zm-786.91 1.2734c-11.905 3.0559-114.29 21.391-114.29 21.391l145.24 3.0566s52.381-5.0938 104.76-5.0938 88.096 6.1118 116.67 13.242c28.572 7.1304 83.336 7.1302 104.76 2.0371 21.429-5.0931-16.667-20.373-52.381-22.41-35.715-2.0372-33.334-2.0359-102.38-5.0918-69.048-3.0559-173.81-5.0938-173.81-5.0938l-28.574-2.0371zm173.81 24.447s-71.43 2.0368-166.67 6.1113c-95.239 4.0745-52.382 16.298-323.81 0 0 0 42.858 16.299 64.286 18.336s226.19-9.9e-4 283.34-1.0195c57.144-1.0186 142.86-23.428 142.86-23.428zm370.57 12.191c-2.8744-0.0104-5.7631-5.8e-4 -8.6649 0.0312-92.858 1.0186-171.43 20.373-171.43 20.373h173.81s166.67 21.391 221.43 24.447c25.679 1.4329 69.198-2.5254 115.75-7.6426v-25.957c-24.362 0.836-52.351 1.647-89.555 4.0586-76.117 4.934-152.23-14.987-241.34-15.311zm-900.64 48.881c-10.616 0-31.848 2.5096-41.499 4.0156s-38.604-1.0039-43.43-0.5019 48.255 6.5255 55.011 5.0195 65.624-8.5332 65.624-8.5332h-35.707zm216.99 3.168c-9.1381 0-15.773 0.095-17.221 0.3457-5.7905 1.004-27.022 2.0077-37.638 3.5137-10.616 1.5059 2.8951 2.5111 22.197 7.0292 19.302 4.518 13.511 2.5084 22.197-2.5117 8.6858-5.02 76.24-7.0273 87.821-7.5293 0 0-49.941-0.8476-77.356-0.8476zm-445.23 2.2285c-3.1364 0-3.3776 0.376-13.028 0.125-19.302-0.502-29.917 4.519-21.231 9.0371 8.6858 4.518 52.115 2.51 64.661 0.502s50.183 1.0039 65.624 0.5019 32.813 3.5136 45.359 4.5176 14.477 2.0083 30.883-2.0078c16.406-4.016-52.115-6.0252-61.766-8.0332l-12.547-1.0039s-25.09 2.0081-67.554-1.5059c-21.232-1.7571-27.265-2.1328-30.401-2.1328zm318.96 0.6269-11.581 1.004c0-1e-4 -42.465 1.0036-70.452 2.5097-27.987 1.506-27.022 1.5077-41.499 2.5117-14.476 1.004-29.917 8.533-21.231 11.043 8.6858 2.5101 30.883 2.5101 42.464-1.0039 11.581-3.5141 26.056-6.5254 47.288-6.5254s42.464 2.5098 42.464 2.5098l58.869-1.5059s-41.497-9.037-46.323-10.543zm-455.52 7.5313-28.954 1.0039s39.569 17.57 69.487 20.08c29.917 2.51 84.928 13.051 107.13 11.545 22.197-1.506 89.752-12.047 89.752-12.047h70.45s-31.849-9.539-69.487-10.041-69.486 10.041-101.33 7.5313c-31.848-2.51-47.288-1.5076-66.59-4.5196s-38.603-7.5291-44.393-9.5371c-5.7905-2.0081-26.057-4.0156-26.057-4.0156zm385.07 4.5176s34.744 11.045 57.906 11.547 106.16 1.504 114.85 0.5 26.057-9.0351 26.057-9.0351c-110.02 8.0322-92.648 2.0081-131.25 0-38.603-2.008-67.558-3.0117-67.558-3.0117zm-941.38 127.35s147.69 15.708 164.63 19.074c16.947 3.3658 150.11-10.099 138-11.221-12.105-1.1219-84.736 4.4888-108.95 1.123-24.21-3.3659-77.476-8.9765-104.11-8.9765h-89.579zm-454.78 7.082c-20.534 0-46.113 0.1771-71.884 0.4141v6.6504c45.359 2.6467 87.941 6.4073 98.138 11.658 21.789 11.219 7.2648 15.707 55.686 5.6093 48.421-10.098 82.313-12.341 55.682-15.707-26.632-3.3659-79.894-5.6095-94.42-7.8535-3.6316-0.5609-20.277-0.7715-43.201-0.7715zm1116.9 4.9785c-7.8685 0-23 0.8427-76.263 4.7696-106.53 7.8535-169.47 3.3652-169.47 3.3652l-31.474 2.2441c-24.21 4.4878-196.11 8.9756-154.95 17.951 41.158 8.9755 45.999 6.7303 77.473 4.4863 31.474-2.2438 75.054-11.218 113.79-10.096 38.737 1.1219 133.16-5.6108 164.63-1.123 31.474 4.4878 140.42 8.9764 162.21-1.1211 21.789-10.098-4.8421-21.317-53.263-20.195-24.21 0.561-24.815-0.2813-32.683-0.2813zm-800.16 1.4043c-12.105 3.3657-116.21 23.561-116.21 23.561l147.68 3.3652s53.263-5.6094 106.53-5.6094 89.579 6.7324 118.63 14.586c29.053 7.8536 84.739 7.8519 106.53 2.2422 21.789-5.6097-16.947-22.438-53.263-24.682-36.316-2.2438-33.895-2.2436-104.11-5.6094-70.21-3.3659-176.74-5.6113-176.74-5.6113l-29.055-2.2422zm1142.7 16.828s-50.843 4.4869-65.369 8.9747-62.947 14.587-111.37 21.318c-48.421 6.7317-87.157 4.488-167.05 10.098-79.895 5.6097-159.79-17.952-254.21-16.83-94.421 1.122-174.32 22.439-174.32 22.439h176.74s169.47 23.56 225.16 26.926c55.684 3.3658 193.68-20.195 268.74-25.805 75.052-5.6097 174.32-44.877 174.32-44.877l-72.631-2.2442zm-966 10.098s-72.632 2.2427-169.47 6.7305c-96.842 4.4878-53.264 17.951-329.26 0 0 0 43.579 17.951 65.369 20.195 21.789 2.2439 230 9e-4 288.1-1.1211 58.105-1.1219 145.26-25.805 145.26-25.805z"
            fill="#c3c3c3"
            fill-rule="evenodd"
          />
        </g>
      </svg>
    </>
  );
};
export default Island;